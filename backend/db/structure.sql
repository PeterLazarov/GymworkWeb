--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 17.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO postgres;

--
-- Name: workout_sets; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.workout_sets OWNER TO postgres;

--
-- Name: exercise_records; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.exercise_records AS
 WITH ranked_sets AS (
         SELECT workout_sets.id,
            workout_sets.exercise_id,
            workout_sets.reps,
            workout_sets.weight_mcg,
            workout_sets.date,
            row_number() OVER (PARTITION BY workout_sets.exercise_id, workout_sets.reps ORDER BY workout_sets.weight_mcg DESC, workout_sets.date DESC) AS rank
           FROM public.workout_sets
          WHERE ((workout_sets.weight_mcg IS NOT NULL) AND (workout_sets.reps IS NOT NULL) AND (workout_sets.is_warmup = false))
        )
 SELECT id AS record_id,
    exercise_id,
    reps,
    weight_mcg,
    date
   FROM ranked_sets
  WHERE (rank = 1)
  ORDER BY exercise_id, reps;


ALTER VIEW public.exercise_records OWNER TO postgres;

--
-- Name: exercises; Type: TABLE; Schema: public; Owner: postgres
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
    measurements jsonb DEFAULT '{"reps": null, "speed": null, "weight": null, "distance": null, "duration": null}'::jsonb,
    is_favorite boolean DEFAULT false NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.exercises OWNER TO postgres;

--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgres;

--
-- Name: settings; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.settings OWNER TO postgres;

--
-- Name: workout_step_exercises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workout_step_exercises (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    workout_step_id uuid NOT NULL,
    exercise_id uuid NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.workout_step_exercises OWNER TO postgres;

--
-- Name: workout_steps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workout_steps (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    workout_id uuid NOT NULL,
    step_type character varying NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.workout_steps OWNER TO postgres;

--
-- Name: workouts; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.workouts OWNER TO postgres;

--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: exercises exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.settings
    ADD CONSTRAINT settings_pkey PRIMARY KEY (id);


--
-- Name: workout_sets workout_sets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT workout_sets_pkey PRIMARY KEY (id);


--
-- Name: workout_step_exercises workout_step_exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT workout_step_exercises_pkey PRIMARY KEY (id);


--
-- Name: workout_steps workout_steps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_steps
    ADD CONSTRAINT workout_steps_pkey PRIMARY KEY (id);


--
-- Name: workouts workouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workouts
    ADD CONSTRAINT workouts_pkey PRIMARY KEY (id);


--
-- Name: index_exercises_on_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_exercises_on_name ON public.exercises USING btree (name);


--
-- Name: index_workout_sets_on_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_sets_on_date ON public.workout_sets USING btree (date);


--
-- Name: index_workout_sets_on_exercise_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_sets_on_exercise_id ON public.workout_sets USING btree (exercise_id);


--
-- Name: index_workout_sets_on_is_weak_ass_record; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_sets_on_is_weak_ass_record ON public.workout_sets USING btree (is_weak_ass_record);


--
-- Name: index_workout_sets_on_workout_step_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_sets_on_workout_step_id ON public.workout_sets USING btree (workout_step_id);


--
-- Name: index_workout_step_exercises_on_exercise_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_step_exercises_on_exercise_id ON public.workout_step_exercises USING btree (exercise_id);


--
-- Name: index_workout_step_exercises_on_workout_step_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_step_exercises_on_workout_step_id ON public.workout_step_exercises USING btree (workout_step_id);


--
-- Name: index_workout_steps_on_workout_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workout_steps_on_workout_id ON public.workout_steps USING btree (workout_id);


--
-- Name: index_workouts_on_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX index_workouts_on_date ON public.workouts USING btree (date);


--
-- Name: workout_sets fk_rails_4aaf1c47f3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT fk_rails_4aaf1c47f3 FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_steps fk_rails_5aa0ebe883; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_steps
    ADD CONSTRAINT fk_rails_5aa0ebe883 FOREIGN KEY (workout_id) REFERENCES public.workouts(id);


--
-- Name: workout_step_exercises fk_rails_7211cca98e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT fk_rails_7211cca98e FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_sets fk_rails_a5b38aff21; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_sets
    ADD CONSTRAINT fk_rails_a5b38aff21 FOREIGN KEY (workout_step_id) REFERENCES public.workout_steps(id);


--
-- Name: workout_step_exercises fk_rails_e4c15c4a22; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_step_exercises
    ADD CONSTRAINT fk_rails_e4c15c4a22 FOREIGN KEY (workout_step_id) REFERENCES public.workout_steps(id);


--
-- PostgreSQL database dump complete
--


SET search_path TO "$user", public;

INSERT INTO "schema_migrations" (version) VALUES
('1'),
('2'),
('20250908105942'),
('20250908111917'),
('20250909120951'),
('20250913000001'),
('20250920000000'),
('3'),
('4');
