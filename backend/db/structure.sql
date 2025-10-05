SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: is_metric_match(text[], text[]); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.is_metric_match(target_metrics text[], measurement_types text[]) RETURNS boolean
    LANGUAGE plpgsql IMMUTABLE
    AS $$
      BEGIN
        RETURN target_metrics <@ measurement_types
           AND measurement_types <@ target_metrics
           AND array_length(target_metrics, 1) = array_length(measurement_types, 1);
      END;
      $$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: exercise_measurements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercise_measurements (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    exercise_id uuid NOT NULL,
    measurement_type character varying NOT NULL,
    unit character varying NOT NULL,
    more_is_better boolean DEFAULT true NOT NULL,
    step_value numeric(10,3),
    min_value numeric(10,3),
    max_value numeric(10,3),
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: workout_sets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workout_sets (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    workout_step_id uuid NOT NULL,
    exercise_id uuid NOT NULL,
    is_warmup boolean DEFAULT false NOT NULL,
    date date NOT NULL,
    is_weak_ass_record boolean DEFAULT false NOT NULL,
    reps integer,
    weight_mcg bigint,
    distance_mm integer,
    duration_ms integer,
    speed_kph numeric(10,2),
    rest_ms integer,
    completed_at timestamp(6) without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: exercise_records; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.exercise_records AS
 WITH exercise_measurement_types AS (
         SELECT exercise_measurements.exercise_id,
            array_agg(exercise_measurements.measurement_type) AS measurement_types
           FROM public.exercise_measurements
          GROUP BY exercise_measurements.exercise_id
        ), measurement_sets AS (
         SELECT ws.id,
            ws.exercise_id,
            ws.reps,
            ws.weight_mcg,
            ws.distance_mm,
            ws.duration_ms,
            ws.speed_kph,
            ws.date,
            emt.measurement_types,
                CASE
                    WHEN public.is_metric_match('{weight}'::text[], (emt.measurement_types)::text[]) THEN ws.weight_mcg
                    WHEN public.is_metric_match('{duration}'::text[], (emt.measurement_types)::text[]) THEN (ws.duration_ms)::bigint
                    WHEN public.is_metric_match('{reps}'::text[], (emt.measurement_types)::text[]) THEN (ws.reps)::bigint
                    WHEN public.is_metric_match('{distance}'::text[], (emt.measurement_types)::text[]) THEN (ws.distance_mm)::bigint
                    WHEN public.is_metric_match('{weight,duration}'::text[], (emt.measurement_types)::text[]) THEN ws.weight_mcg
                    WHEN public.is_metric_match('{reps,weight}'::text[], (emt.measurement_types)::text[]) THEN (ws.reps)::bigint
                    WHEN public.is_metric_match('{duration,reps}'::text[], (emt.measurement_types)::text[]) THEN (ws.duration_ms)::bigint
                    WHEN public.is_metric_match('{weight,distance}'::text[], (emt.measurement_types)::text[]) THEN ws.weight_mcg
                    WHEN public.is_metric_match('{distance,duration}'::text[], (emt.measurement_types)::text[]) THEN (ws.distance_mm)::bigint
                    WHEN public.is_metric_match('{reps,distance}'::text[], (emt.measurement_types)::text[]) THEN (ws.reps)::bigint
                    ELSE NULL::bigint
                END AS grouping_value,
                CASE
                    WHEN public.is_metric_match('{weight}'::text[], (emt.measurement_types)::text[]) THEN ws.weight_mcg
                    WHEN public.is_metric_match('{duration}'::text[], (emt.measurement_types)::text[]) THEN ((- ws.duration_ms))::bigint
                    WHEN public.is_metric_match('{reps}'::text[], (emt.measurement_types)::text[]) THEN (ws.reps)::bigint
                    WHEN public.is_metric_match('{distance}'::text[], (emt.measurement_types)::text[]) THEN (ws.distance_mm)::bigint
                    WHEN public.is_metric_match('{weight,duration}'::text[], (emt.measurement_types)::text[]) THEN ((- ws.duration_ms))::bigint
                    WHEN public.is_metric_match('{reps,weight}'::text[], (emt.measurement_types)::text[]) THEN ws.weight_mcg
                    WHEN public.is_metric_match('{duration,reps}'::text[], (emt.measurement_types)::text[]) THEN (ws.reps)::bigint
                    WHEN public.is_metric_match('{weight,distance}'::text[], (emt.measurement_types)::text[]) THEN (ws.distance_mm)::bigint
                    WHEN public.is_metric_match('{distance,duration}'::text[], (emt.measurement_types)::text[]) THEN ((- ws.duration_ms))::bigint
                    WHEN public.is_metric_match('{reps,distance}'::text[], (emt.measurement_types)::text[]) THEN (ws.distance_mm)::bigint
                    ELSE NULL::bigint
                END AS measurement_value
           FROM (public.workout_sets ws
             JOIN exercise_measurement_types emt ON ((ws.exercise_id = emt.exercise_id)))
          WHERE (ws.is_warmup = false)
        ), measurement_sets_with_direction AS (
         SELECT ms.id,
            ms.exercise_id,
            ms.reps,
            ms.weight_mcg,
            ms.distance_mm,
            ms.duration_ms,
            ms.speed_kph,
            ms.date,
            ms.measurement_types,
            ms.grouping_value,
            ms.measurement_value,
                CASE
                    WHEN public.is_metric_match('{weight}'::text[], (ms.measurement_types)::text[]) THEN 'weight'::text
                    WHEN public.is_metric_match('{duration}'::text[], (ms.measurement_types)::text[]) THEN 'duration'::text
                    WHEN public.is_metric_match('{reps}'::text[], (ms.measurement_types)::text[]) THEN 'reps'::text
                    WHEN public.is_metric_match('{distance}'::text[], (ms.measurement_types)::text[]) THEN 'distance'::text
                    WHEN public.is_metric_match('{weight,duration}'::text[], (ms.measurement_types)::text[]) THEN 'duration'::text
                    WHEN public.is_metric_match('{reps,weight}'::text[], (ms.measurement_types)::text[]) THEN 'weight'::text
                    WHEN public.is_metric_match('{duration,reps}'::text[], (ms.measurement_types)::text[]) THEN 'reps'::text
                    WHEN public.is_metric_match('{weight,distance}'::text[], (ms.measurement_types)::text[]) THEN 'distance'::text
                    WHEN public.is_metric_match('{distance,duration}'::text[], (ms.measurement_types)::text[]) THEN 'duration'::text
                    WHEN public.is_metric_match('{reps,distance}'::text[], (ms.measurement_types)::text[]) THEN 'distance'::text
                    ELSE NULL::text
                END AS measuring_metric_type
           FROM measurement_sets ms
          WHERE (ms.grouping_value IS NOT NULL)
        ), ranked_sets AS (
         SELECT mswd.id,
            mswd.exercise_id,
            mswd.reps,
            mswd.weight_mcg,
            mswd.distance_mm,
            mswd.duration_ms,
            mswd.speed_kph,
            mswd.date,
            mswd.measurement_types,
            mswd.grouping_value,
            mswd.measurement_value,
            mswd.measuring_metric_type,
            em.more_is_better,
            row_number() OVER (PARTITION BY mswd.exercise_id, mswd.grouping_value ORDER BY
                CASE
                    WHEN em.more_is_better THEN mswd.measurement_value
                    ELSE (- mswd.measurement_value)
                END DESC, mswd.date DESC) AS rank
           FROM (measurement_sets_with_direction mswd
             LEFT JOIN public.exercise_measurements em ON (((mswd.exercise_id = em.exercise_id) AND (mswd.measuring_metric_type = (em.measurement_type)::text))))
        )
 SELECT id AS record_id,
    exercise_id,
    reps,
    weight_mcg,
    distance_mm,
    duration_ms,
    speed_kph,
    date,
    grouping_value,
    measurement_value
   FROM ranked_sets
  WHERE (rank = 1)
  ORDER BY exercise_id, grouping_value;


--
-- Name: exercises; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercises (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying NOT NULL,
    images character varying[] DEFAULT '{}'::character varying[],
    equipment character varying[] DEFAULT '{}'::character varying[],
    "position" character varying,
    stance character varying,
    instructions character varying[] DEFAULT '{}'::character varying[],
    tips character varying[],
    muscle_areas character varying[] DEFAULT '{}'::character varying[],
    muscles character varying[] DEFAULT '{}'::character varying[],
    is_favorite boolean DEFAULT false NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: workout_step_exercises; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workout_step_exercises (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    workout_step_id uuid NOT NULL,
    exercise_id uuid NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: workout_steps; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workout_steps (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    workout_id uuid NOT NULL,
    step_type character varying NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: workouts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.workouts (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    date date NOT NULL,
    notes text,
    feeling character varying,
    pain character varying,
    rpe integer,
    ended_at timestamp(6) without time zone,
    duration_ms integer,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: muscle_area_stats; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.muscle_area_stats AS
 WITH workout_muscle_areas AS (
         SELECT DISTINCT w.id AS workout_id,
            unnest(e.muscle_areas) AS muscle_area
           FROM (((public.workouts w
             JOIN public.workout_steps ws ON ((ws.workout_id = w.id)))
             JOIN public.workout_step_exercises wse ON ((wse.workout_step_id = ws.id)))
             JOIN public.exercises e ON ((e.id = wse.exercise_id)))
        ), total_workouts AS (
         SELECT count(*) AS count
           FROM public.workouts
        )
 SELECT wma.muscle_area,
    count(DISTINCT wma.workout_id) AS workout_count,
    round((((count(DISTINCT wma.workout_id))::numeric / (tw.count)::numeric) * (100)::numeric), 2) AS percentage,
    tw.count AS total_workouts
   FROM (workout_muscle_areas wma
     CROSS JOIN total_workouts tw)
  GROUP BY wma.muscle_area, tw.count
  ORDER BY (round((((count(DISTINCT wma.workout_id))::numeric / (tw.count)::numeric) * (100)::numeric), 2)) DESC;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.settings (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    theme character varying DEFAULT 'light'::character varying NOT NULL,
    scientific_muscle_names_enabled boolean DEFAULT false NOT NULL,
    show_set_completion boolean DEFAULT true NOT NULL,
    preview_next_set boolean DEFAULT true NOT NULL,
    measure_rest boolean DEFAULT true NOT NULL,
    show_comments_card boolean DEFAULT true NOT NULL,
    show_workout_timer boolean DEFAULT true NOT NULL
);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: exercise_measurements exercise_measurements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_measurements
    ADD CONSTRAINT exercise_measurements_pkey PRIMARY KEY (id);


--
-- Name: exercises exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: workout_sets workout_sets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT workout_sets_pkey PRIMARY KEY (id);


--
-- Name: workout_step_exercises workout_step_exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT workout_step_exercises_pkey PRIMARY KEY (id);


--
-- Name: workout_steps workout_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_steps
    ADD CONSTRAINT workout_steps_pkey PRIMARY KEY (id);


--
-- Name: workouts workouts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_pkey PRIMARY KEY (id);


--
-- Name: index_exercise_measurements_on_exercise_and_type; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_exercise_measurements_on_exercise_and_type ON public.exercise_measurements USING btree (exercise_id, measurement_type);


--
-- Name: index_exercise_measurements_on_exercise_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_exercise_measurements_on_exercise_id ON public.exercise_measurements USING btree (exercise_id);


--
-- Name: index_exercise_measurements_on_measurement_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_exercise_measurements_on_measurement_type ON public.exercise_measurements USING btree (measurement_type);


--
-- Name: index_exercises_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_exercises_on_name ON public.exercises USING btree (name);


--
-- Name: index_workout_sets_on_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_sets_on_date ON public.workout_sets USING btree (date);


--
-- Name: index_workout_sets_on_exercise_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_sets_on_exercise_id ON public.workout_sets USING btree (exercise_id);


--
-- Name: index_workout_sets_on_is_weak_ass_record; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_sets_on_is_weak_ass_record ON public.workout_sets USING btree (is_weak_ass_record);


--
-- Name: index_workout_sets_on_workout_step_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_sets_on_workout_step_id ON public.workout_sets USING btree (workout_step_id);


--
-- Name: index_workout_step_exercises_on_exercise_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_step_exercises_on_exercise_id ON public.workout_step_exercises USING btree (exercise_id);


--
-- Name: index_workout_step_exercises_on_workout_step_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_step_exercises_on_workout_step_id ON public.workout_step_exercises USING btree (workout_step_id);


--
-- Name: index_workout_steps_on_workout_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workout_steps_on_workout_id ON public.workout_steps USING btree (workout_id);


--
-- Name: index_workouts_on_date; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_workouts_on_date ON public.workouts USING btree (date);


--
-- Name: workout_sets fk_rails_4aaf1c47f3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT fk_rails_4aaf1c47f3 FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_steps fk_rails_5aa0ebe883; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_steps
    ADD CONSTRAINT fk_rails_5aa0ebe883 FOREIGN KEY (workout_id) REFERENCES public.workouts(id);


--
-- Name: exercise_measurements fk_rails_6c2c94c1b6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_measurements
    ADD CONSTRAINT fk_rails_6c2c94c1b6 FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_step_exercises fk_rails_7211cca98e; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT fk_rails_7211cca98e FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_sets fk_rails_a5b38aff21; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT fk_rails_a5b38aff21 FOREIGN KEY (workout_step_id) REFERENCES public.workout_steps(id);


--
-- Name: workout_step_exercises fk_rails_e4c15c4a22; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT fk_rails_e4c15c4a22 FOREIGN KEY (workout_step_id) REFERENCES public.workout_steps(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('4'),
('3'),
('20250930000000'),
('20250929210252'),
('20250926000000'),
('20250924000000'),
('20250920000000'),
('20250913000001'),
('20250909120951'),
('20250908111917'),
('20250908105942'),
('20250101000001'),
('20250101000000'),
('2'),
('1');

