export const exerciseImages: Record<
  string,
  () => Promise<typeof import("*.webp")>
> = {
  "Abdominals/3-4 Sit-up_female": () =>
    import("../assets/exercises/Abdominals/3-4 Sit-up_female.webp"),
  "Abdominals/3-4 Sit-up_female1": () =>
    import("../assets/exercises/Abdominals/3-4 Sit-up_female1.webp"),
  "Abdominals/45 Degree Bicycle Twisting_female": () =>
    import(
      "../assets/exercises/Abdominals/45 Degree Bicycle Twisting_female.webp"
    ),
  "Abdominals/45 Degree Bicycle Twisting_female1": () =>
    import(
      "../assets/exercises/Abdominals/45 Degree Bicycle Twisting_female1.webp"
    ),
  "Abdominals/45 Degree Side Bend_female": () =>
    import("../assets/exercises/Abdominals/45 Degree Side Bend_female.webp"),
  "Abdominals/45 Degree Side Bend_female1": () =>
    import("../assets/exercises/Abdominals/45 Degree Side Bend_female1.webp"),
  "Abdominals/45 degree Bicycle Twisting Crunch_female": () =>
    import(
      "../assets/exercises/Abdominals/45 degree Bicycle Twisting Crunch_female.webp"
    ),
  "Abdominals/45 degree Bicycle Twisting Crunch_female1": () =>
    import(
      "../assets/exercises/Abdominals/45 degree Bicycle Twisting Crunch_female1.webp"
    ),
  "Abdominals/45 degree bicycle twist knee to elbow": () =>
    import(
      "../assets/exercises/Abdominals/45 degree bicycle twist knee to elbow.webp"
    ),
  "Abdominals/45 degree bicycle twist knee to elbow1": () =>
    import(
      "../assets/exercises/Abdominals/45 degree bicycle twist knee to elbow1.webp"
    ),
  "Abdominals/45 degree side bend": () =>
    import("../assets/exercises/Abdominals/45 degree side bend.webp"),
  "Abdominals/45 degree side bend1": () =>
    import("../assets/exercises/Abdominals/45 degree side bend1.webp"),
  "Abdominals/45 degree twisting hyperextension": () =>
    import(
      "../assets/exercises/Abdominals/45 degree twisting hyperextension.webp"
    ),
  "Abdominals/45 degree twisting hyperextension1": () =>
    import(
      "../assets/exercises/Abdominals/45 degree twisting hyperextension1.webp"
    ),
  "Abdominals/45 degree twisting hyperextension_female": () =>
    import(
      "../assets/exercises/Abdominals/45 degree twisting hyperextension_female.webp"
    ),
  "Abdominals/45 degree twisting hyperextension_female1": () =>
    import(
      "../assets/exercises/Abdominals/45 degree twisting hyperextension_female1.webp"
    ),
  "Abdominals/90 Degree Heels Touch_female": () =>
    import("../assets/exercises/Abdominals/90 Degree Heels Touch_female.webp"),
  "Abdominals/90 Degree Heels Touch_female1": () =>
    import("../assets/exercises/Abdominals/90 Degree Heels Touch_female1.webp"),
  "Abdominals/90 degree heel touch": () =>
    import("../assets/exercises/Abdominals/90 degree heel touch.webp"),
  "Abdominals/90 degree heel touch1": () =>
    import("../assets/exercises/Abdominals/90 degree heel touch1.webp"),
  "Abdominals/AB Wheel All The Way out": () =>
    import("../assets/exercises/Abdominals/AB Wheel All The Way out.webp"),
  "Abdominals/AB Wheel All The Way out1": () =>
    import("../assets/exercises/Abdominals/AB Wheel All The Way out1.webp"),
  "Abdominals/AB Wheel All The Way out_Female": () =>
    import(
      "../assets/exercises/Abdominals/AB Wheel All The Way out_Female.webp"
    ),
  "Abdominals/AB Wheel All The Way out_Female1": () =>
    import(
      "../assets/exercises/Abdominals/AB Wheel All The Way out_Female1.webp"
    ),
  "Abdominals/AB Wheel Halfway out": () =>
    import("../assets/exercises/Abdominals/AB Wheel Halfway out.webp"),
  "Abdominals/AB Wheel Halfway out1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Halfway out1.webp"),
  "Abdominals/AB Wheel Halfway out_Female": () =>
    import("../assets/exercises/Abdominals/AB Wheel Halfway out_Female.webp"),
  "Abdominals/AB Wheel Halfway out_Female1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Halfway out_Female1.webp"),
  "Abdominals/AB Wheel Left out": () =>
    import("../assets/exercises/Abdominals/AB Wheel Left out.webp"),
  "Abdominals/AB Wheel Left out1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Left out1.webp"),
  "Abdominals/AB Wheel Left out_Female": () =>
    import("../assets/exercises/Abdominals/AB Wheel Left out_Female.webp"),
  "Abdominals/AB Wheel Left out_Female1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Left out_Female1.webp"),
  "Abdominals/AB Wheel Pulses": () =>
    import("../assets/exercises/Abdominals/AB Wheel Pulses.webp"),
  "Abdominals/AB Wheel Pulses1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Pulses1.webp"),
  "Abdominals/AB Wheel Pulses_Female": () =>
    import("../assets/exercises/Abdominals/AB Wheel Pulses_Female.webp"),
  "Abdominals/AB Wheel Pulses_Female1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Pulses_Female1.webp"),
  "Abdominals/AB Wheel Right out": () =>
    import("../assets/exercises/Abdominals/AB Wheel Right out.webp"),
  "Abdominals/AB Wheel Right out1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Right out1.webp"),
  "Abdominals/AB Wheel Right out_Female": () =>
    import("../assets/exercises/Abdominals/AB Wheel Right out_Female.webp"),
  "Abdominals/AB Wheel Right out_Female1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Right out_Female1.webp"),
  "Abdominals/AB Wheel Take it or Leave It": () =>
    import("../assets/exercises/Abdominals/AB Wheel Take it or Leave It.webp"),
  "Abdominals/AB Wheel Take it or Leave It1": () =>
    import("../assets/exercises/Abdominals/AB Wheel Take it or Leave It1.webp"),
  "Abdominals/AB Wheel Take it or Leave It2": () =>
    import("../assets/exercises/Abdominals/AB Wheel Take it or Leave It2.webp"),
  "Abdominals/AB Wheel Take it or Leave It3": () =>
    import("../assets/exercises/Abdominals/AB Wheel Take it or Leave It3.webp"),
  "Abdominals/AB Wheel Take it or Leave It_Female": () =>
    import(
      "../assets/exercises/Abdominals/AB Wheel Take it or Leave It_Female.webp"
    ),
  "Abdominals/AB Wheel Take it or Leave It_Female1": () =>
    import(
      "../assets/exercises/Abdominals/AB Wheel Take it or Leave It_Female1.webp"
    ),
  "Abdominals/AB Wheel Take it or Leave It_Female2": () =>
    import(
      "../assets/exercises/Abdominals/AB Wheel Take it or Leave It_Female2.webp"
    ),
  "Abdominals/Ab Mat Sit-up_female": () =>
    import("../assets/exercises/Abdominals/Ab Mat Sit-up_female.webp"),
  "Abdominals/Ab Mat Sit-up_female1": () =>
    import("../assets/exercises/Abdominals/Ab Mat Sit-up_female1.webp"),
  "Abdominals/Ab Tuck_female": () =>
    import("../assets/exercises/Abdominals/Ab Tuck_female.webp"),
  "Abdominals/Ab Tuck_female1": () =>
    import("../assets/exercises/Abdominals/Ab Tuck_female1.webp"),
  "Abdominals/Ab Wheel Plank": () =>
    import("../assets/exercises/Abdominals/Ab Wheel Plank.webp"),
  "Abdominals/Ab Wheel Plank1": () =>
    import("../assets/exercises/Abdominals/Ab Wheel Plank1.webp"),
  "Abdominals/Ab Wheel Plank_Female": () =>
    import("../assets/exercises/Abdominals/Ab Wheel Plank_Female.webp"),
  "Abdominals/Ab Wheel Plank_Female1": () =>
    import("../assets/exercises/Abdominals/Ab Wheel Plank_Female1.webp"),
  "Abdominals/Air Bike (VERSION 2)_female": () =>
    import("../assets/exercises/Abdominals/Air Bike (VERSION 2)_female.webp"),
  "Abdominals/Air Bike (VERSION 2)_female1": () =>
    import("../assets/exercises/Abdominals/Air Bike (VERSION 2)_female1.webp"),
  "Abdominals/Alternate Arm Leg Plank": () =>
    import("../assets/exercises/Abdominals/Alternate Arm Leg Plank.webp"),
  "Abdominals/Alternate Arm Leg Plank1": () =>
    import("../assets/exercises/Abdominals/Alternate Arm Leg Plank1.webp"),
  "Abdominals/Alternate Leg Pull_female": () =>
    import("../assets/exercises/Abdominals/Alternate Leg Pull_female.webp"),
  "Abdominals/Alternate Leg Pull_female1": () =>
    import("../assets/exercises/Abdominals/Alternate Leg Pull_female1.webp"),
  "Abdominals/Alternate Leg Raise from Reverse Plank Position_female": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Leg Raise from Reverse Plank Position_female.webp"
    ),
  "Abdominals/Alternate Leg Raise from Reverse Plank Position_female1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Leg Raise from Reverse Plank Position_female1.webp"
    ),
  "Abdominals/Alternate Leg Raise with Head": () =>
    import("../assets/exercises/Abdominals/Alternate Leg Raise with Head.webp"),
  "Abdominals/Alternate Leg Raise with Head1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Leg Raise with Head1.webp"
    ),
  "Abdominals/Alternate Leg Raise_female": () =>
    import("../assets/exercises/Abdominals/Alternate Leg Raise_female.webp"),
  "Abdominals/Alternate Leg Raise_female1": () =>
    import("../assets/exercises/Abdominals/Alternate Leg Raise_female1.webp"),
  "Abdominals/Alternate Lying Floor Leg Raise_female": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Lying Floor Leg Raise_female.webp"
    ),
  "Abdominals/Alternate Lying Floor Leg Raise_female1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Lying Floor Leg Raise_female1.webp"
    ),
  "Abdominals/Alternate Oblique Crunch_female": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Oblique Crunch_female.webp"
    ),
  "Abdominals/Alternate Oblique Crunch_female1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Oblique Crunch_female1.webp"
    ),
  "Abdominals/Alternate Toe Tap Leg Lift_female": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Toe Tap Leg Lift_female.webp"
    ),
  "Abdominals/Alternate Toe Tap Leg Lift_female1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate Toe Tap Leg Lift_female1.webp"
    ),
  "Abdominals/Alternate heel touches": () =>
    import("../assets/exercises/Abdominals/Alternate heel touches.webp"),
  "Abdominals/Alternate heel touches1": () =>
    import("../assets/exercises/Abdominals/Alternate heel touches1.webp"),
  "Abdominals/Alternate leg pull": () =>
    import("../assets/exercises/Abdominals/Alternate leg pull.webp"),
  "Abdominals/Alternate leg pull1": () =>
    import("../assets/exercises/Abdominals/Alternate leg pull1.webp"),
  "Abdominals/Alternate leg raise from reverse plank position": () =>
    import(
      "../assets/exercises/Abdominals/Alternate leg raise from reverse plank position.webp"
    ),
  "Abdominals/Alternate leg raise from reverse plank position1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate leg raise from reverse plank position1.webp"
    ),
  "Abdominals/Alternate leg raise with head up": () =>
    import(
      "../assets/exercises/Abdominals/Alternate leg raise with head up.webp"
    ),
  "Abdominals/Alternate leg raise with head up1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate leg raise with head up1.webp"
    ),
  "Abdominals/Alternate leg raise": () =>
    import("../assets/exercises/Abdominals/Alternate leg raise.webp"),
  "Abdominals/Alternate leg raise1": () =>
    import("../assets/exercises/Abdominals/Alternate leg raise1.webp"),
  "Abdominals/Alternate lying floor leg raise": () =>
    import(
      "../assets/exercises/Abdominals/Alternate lying floor leg raise.webp"
    ),
  "Abdominals/Alternate lying floor leg raise1": () =>
    import(
      "../assets/exercises/Abdominals/Alternate lying floor leg raise1.webp"
    ),
  "Abdominals/Alternate oblique crunch": () =>
    import("../assets/exercises/Abdominals/Alternate oblique crunch.webp"),
  "Abdominals/Alternate oblique crunch1": () =>
    import("../assets/exercises/Abdominals/Alternate oblique crunch1.webp"),
  "Abdominals/Alternate toe tap leg lift": () =>
    import("../assets/exercises/Abdominals/Alternate toe tap leg lift.webp"),
  "Abdominals/Alternate toe tap leg lift1": () =>
    import("../assets/exercises/Abdominals/Alternate toe tap leg lift1.webp"),
  "Abdominals/Alternating Lunge with Rotation": () =>
    import(
      "../assets/exercises/Abdominals/Alternating Lunge with Rotation.webp"
    ),
  "Abdominals/Alternating Lunge with Rotation1": () =>
    import(
      "../assets/exercises/Abdominals/Alternating Lunge with Rotation1.webp"
    ),
  "Abdominals/Alternating Plank Lunge": () =>
    import("../assets/exercises/Abdominals/Alternating Plank Lunge.webp"),
  "Abdominals/Alternating Plank Lunge1": () =>
    import("../assets/exercises/Abdominals/Alternating Plank Lunge1.webp"),
  "Abdominals/Arm rotation knee lift": () =>
    import("../assets/exercises/Abdominals/Arm rotation knee lift.webp"),
  "Abdominals/Arm rotation knee lift1": () =>
    import("../assets/exercises/Abdominals/Arm rotation knee lift1.webp"),
  "Abdominals/Assisted Sit-Up_female": () =>
    import("../assets/exercises/Abdominals/Assisted Sit-Up_female.webp"),
  "Abdominals/Assisted Sit-Up_female1": () =>
    import("../assets/exercises/Abdominals/Assisted Sit-Up_female1.webp"),
  "Abdominals/Assisted sit ups": () =>
    import("../assets/exercises/Abdominals/Assisted sit ups.webp"),
  "Abdominals/Assisted sit ups1": () =>
    import("../assets/exercises/Abdominals/Assisted sit ups1.webp"),
  "Abdominals/Ball Sit-up_female": () =>
    import("../assets/exercises/Abdominals/Ball Sit-up_female.webp"),
  "Abdominals/Ball Sit-up_female1": () =>
    import("../assets/exercises/Abdominals/Ball Sit-up_female1.webp"),
  "Abdominals/Band Bicycle Crunch": () =>
    import("../assets/exercises/Abdominals/Band Bicycle Crunch.webp"),
  "Abdominals/Band Bicycle Crunch1": () =>
    import("../assets/exercises/Abdominals/Band Bicycle Crunch1.webp"),
  "Abdominals/Band Bicycle Crunch_female": () =>
    import("../assets/exercises/Abdominals/Band Bicycle Crunch_female.webp"),
  "Abdominals/Band Bicycle Crunch_female1": () =>
    import("../assets/exercises/Abdominals/Band Bicycle Crunch_female1.webp"),
  "Abdominals/Band Decline Sit up_female": () =>
    import("../assets/exercises/Abdominals/Band Decline Sit up_female.webp"),
  "Abdominals/Band Decline Sit up_female1": () =>
    import("../assets/exercises/Abdominals/Band Decline Sit up_female1.webp"),
  "Abdominals/Band side bend_female": () =>
    import("../assets/exercises/Abdominals/Band side bend_female.webp"),
  "Abdominals/Band side bend_female1": () =>
    import("../assets/exercises/Abdominals/Band side bend_female1.webp"),
  "Abdominals/Barbell Situp": () =>
    import("../assets/exercises/Abdominals/Barbell Situp.webp"),
  "Abdominals/Barbell Situp1": () =>
    import("../assets/exercises/Abdominals/Barbell Situp1.webp"),
  "Abdominals/Barbell Situp_Female": () =>
    import("../assets/exercises/Abdominals/Barbell Situp_Female.webp"),
  "Abdominals/Barbell Situp_Female1": () =>
    import("../assets/exercises/Abdominals/Barbell Situp_Female1.webp"),
  "Abdominals/Barbell rollout": () =>
    import("../assets/exercises/Abdominals/Barbell rollout.webp"),
  "Abdominals/Barbell rollout1": () =>
    import("../assets/exercises/Abdominals/Barbell rollout1.webp"),
  "Abdominals/Barbell seated twist": () =>
    import("../assets/exercises/Abdominals/Barbell seated twist.webp"),
  "Abdominals/Barbell seated twist1": () =>
    import("../assets/exercises/Abdominals/Barbell seated twist1.webp"),
  "Abdominals/Barbell side bends": () =>
    import("../assets/exercises/Abdominals/Barbell side bends.webp"),
  "Abdominals/Barbell side bends1": () =>
    import("../assets/exercises/Abdominals/Barbell side bends1.webp"),
  "Abdominals/Barbell standing twist": () =>
    import("../assets/exercises/Abdominals/Barbell standing twist.webp"),
  "Abdominals/Barbell standing twist1": () =>
    import("../assets/exercises/Abdominals/Barbell standing twist1.webp"),
  "Abdominals/Bench Dip Hold": () =>
    import("../assets/exercises/Abdominals/Bench Dip Hold.webp"),
  "Abdominals/Bench Dip Hold1": () =>
    import("../assets/exercises/Abdominals/Bench Dip Hold1.webp"),
  "Abdominals/Bent knee Lying Twist (On Stability Ball)": () =>
    import(
      "../assets/exercises/Abdominals/Bent knee Lying Twist (On Stability Ball).webp"
    ),
  "Abdominals/Bent knee Lying Twist (On Stability Ball)1": () =>
    import(
      "../assets/exercises/Abdominals/Bent knee Lying Twist (On Stability Ball)1.webp"
    ),
  "Abdominals/Bent knee Lying Twist": () =>
    import("../assets/exercises/Abdominals/Bent knee Lying Twist.webp"),
  "Abdominals/Bent knee Lying Twist1": () =>
    import("../assets/exercises/Abdominals/Bent knee Lying Twist1.webp"),
  "Abdominals/Bicycle air legs": () =>
    import("../assets/exercises/Abdominals/Bicycle air legs.webp"),
  "Abdominals/Bicycle air legs1": () =>
    import("../assets/exercises/Abdominals/Bicycle air legs1.webp"),
  "Abdominals/Body Saw Plank": () =>
    import("../assets/exercises/Abdominals/Body Saw Plank.webp"),
  "Abdominals/Body Saw Plank1": () =>
    import("../assets/exercises/Abdominals/Body Saw Plank1.webp"),
  "Abdominals/Bottoms-Up half rep": () =>
    import("../assets/exercises/Abdominals/Bottoms-Up half rep.webp"),
  "Abdominals/Bottoms-Up half rep1": () =>
    import("../assets/exercises/Abdominals/Bottoms-Up half rep1.webp"),
  "Abdominals/Bridge - Mountain Climber (Cross Body)": () =>
    import(
      "../assets/exercises/Abdominals/Bridge - Mountain Climber (Cross Body).webp"
    ),
  "Abdominals/Bridge - Mountain Climber (Cross Body)1": () =>
    import(
      "../assets/exercises/Abdominals/Bridge - Mountain Climber (Cross Body)1.webp"
    ),
  "Abdominals/Cable Standing Crunch": () =>
    import("../assets/exercises/Abdominals/Cable Standing Crunch.webp"),
  "Abdominals/Cable Standing Crunch1": () =>
    import("../assets/exercises/Abdominals/Cable Standing Crunch1.webp"),
  "Abdominals/Cable Standing Crunch_Female": () =>
    import("../assets/exercises/Abdominals/Cable Standing Crunch_Female.webp"),
  "Abdominals/Cable Standing Crunch_Female1": () =>
    import("../assets/exercises/Abdominals/Cable Standing Crunch_Female1.webp"),
  "Abdominals/Cable Twist": () =>
    import("../assets/exercises/Abdominals/Cable Twist.webp"),
  "Abdominals/Cable Twist1": () =>
    import("../assets/exercises/Abdominals/Cable Twist1.webp"),
  "Abdominals/Cable twist (up-down)": () =>
    import("../assets/exercises/Abdominals/Cable twist (up-down).webp"),
  "Abdominals/Cable twist (up-down)1": () =>
    import("../assets/exercises/Abdominals/Cable twist (up-down)1.webp"),
  "Abdominals/Captains Chair Straight Leg Raise": () =>
    import(
      "../assets/exercises/Abdominals/Captains Chair Straight Leg Raise.webp"
    ),
  "Abdominals/Captains Chair Straight Leg Raise1": () =>
    import(
      "../assets/exercises/Abdominals/Captains Chair Straight Leg Raise1.webp"
    ),
  "Abdominals/Captains chair leg raise": () =>
    import("../assets/exercises/Abdominals/Captains chair leg raise.webp"),
  "Abdominals/Captains chair leg raise1": () =>
    import("../assets/exercises/Abdominals/Captains chair leg raise1.webp"),
  "Abdominals/Crab Pose": () =>
    import("../assets/exercises/Abdominals/Crab Pose.webp"),
  "Abdominals/Crab Pose1": () =>
    import("../assets/exercises/Abdominals/Crab Pose1.webp"),
  "Abdominals/Crab Twist Toe Touch": () =>
    import("../assets/exercises/Abdominals/Crab Twist Toe Touch.webp"),
  "Abdominals/Crab Twist Toe Touch1": () =>
    import("../assets/exercises/Abdominals/Crab Twist Toe Touch1.webp"),
  "Abdominals/Criss Cross Leg Raises": () =>
    import("../assets/exercises/Abdominals/Criss Cross Leg Raises.webp"),
  "Abdominals/Criss Cross Leg Raises1": () =>
    import("../assets/exercises/Abdominals/Criss Cross Leg Raises1.webp"),
  "Abdominals/Crunch (arms straight)": () =>
    import("../assets/exercises/Abdominals/Crunch (arms straight).webp"),
  "Abdominals/Crunch (arms straight)1": () =>
    import("../assets/exercises/Abdominals/Crunch (arms straight)1.webp"),
  "Abdominals/Crunch (hands overhead)": () =>
    import("../assets/exercises/Abdominals/Crunch (hands overhead).webp"),
  "Abdominals/Crunch (hands overhead)1": () =>
    import("../assets/exercises/Abdominals/Crunch (hands overhead)1.webp"),
  "Abdominals/Crunch (legs on stability ball)": () =>
    import(
      "../assets/exercises/Abdominals/Crunch (legs on stability ball).webp"
    ),
  "Abdominals/Crunch (legs on stability ball)1": () =>
    import(
      "../assets/exercises/Abdominals/Crunch (legs on stability ball)1.webp"
    ),
  "Abdominals/Crunch (on bosu ball)": () =>
    import("../assets/exercises/Abdominals/Crunch (on bosu ball).webp"),
  "Abdominals/Crunch (on bosu ball)1": () =>
    import("../assets/exercises/Abdominals/Crunch (on bosu ball)1.webp"),
  "Abdominals/Crunch (on stability ball)": () =>
    import("../assets/exercises/Abdominals/Crunch (on stability ball).webp"),
  "Abdominals/Crunch (on stability ball)1": () =>
    import("../assets/exercises/Abdominals/Crunch (on stability ball)1.webp"),
  "Abdominals/Crunch (straight leg up)": () =>
    import("../assets/exercises/Abdominals/Crunch (straight leg up).webp"),
  "Abdominals/Crunch (straight leg up)1": () =>
    import("../assets/exercises/Abdominals/Crunch (straight leg up)1.webp"),
  "Abdominals/Crunch Floor": () =>
    import("../assets/exercises/Abdominals/Crunch Floor.webp"),
  "Abdominals/Crunch Floor1": () =>
    import("../assets/exercises/Abdominals/Crunch Floor1.webp"),
  "Abdominals/Crunch Frog on Floor": () =>
    import("../assets/exercises/Abdominals/Crunch Frog on Floor.webp"),
  "Abdominals/Crunch Frog on Floor1": () =>
    import("../assets/exercises/Abdominals/Crunch Frog on Floor1.webp"),
  "Abdominals/Crunch leg raise": () =>
    import("../assets/exercises/Abdominals/Crunch leg raise.webp"),
  "Abdominals/Crunch leg raise1": () =>
    import("../assets/exercises/Abdominals/Crunch leg raise1.webp"),
  "Abdominals/Crunch with Medicine Ball": () =>
    import("../assets/exercises/Abdominals/Crunch with Medicine Ball.webp"),
  "Abdominals/Crunch with Medicine Ball1": () =>
    import("../assets/exercises/Abdominals/Crunch with Medicine Ball1.webp"),
  "Abdominals/Dead Bug Extended Arms": () =>
    import("../assets/exercises/Abdominals/Dead Bug Extended Arms.webp"),
  "Abdominals/Dead Bug Extended Arms1": () =>
    import("../assets/exercises/Abdominals/Dead Bug Extended Arms1.webp"),
  "Abdominals/Dead Bug": () =>
    import("../assets/exercises/Abdominals/Dead Bug.webp"),
  "Abdominals/Dead Bug1": () =>
    import("../assets/exercises/Abdominals/Dead Bug1.webp"),
  "Abdominals/Decline Bench Sit up": () =>
    import("../assets/exercises/Abdominals/Decline Bench Sit up.webp"),
  "Abdominals/Decline Bench Sit up1": () =>
    import("../assets/exercises/Abdominals/Decline Bench Sit up1.webp"),
  "Abdominals/Decline Bent Leg Reverse Crunch": () =>
    import(
      "../assets/exercises/Abdominals/Decline Bent Leg Reverse Crunch.webp"
    ),
  "Abdominals/Decline Bent Leg Reverse Crunch1": () =>
    import(
      "../assets/exercises/Abdominals/Decline Bent Leg Reverse Crunch1.webp"
    ),
  "Abdominals/Dumbbell Crunch Hold with Legs Off": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Crunch Hold with Legs Off.webp"
    ),
  "Abdominals/Dumbbell Crunch Hold with Legs Off1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Crunch Hold with Legs Off1.webp"
    ),
  "Abdominals/Dumbbell Decline Overhead Sit-up": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Decline Overhead Sit-up.webp"
    ),
  "Abdominals/Dumbbell Decline Overhead Sit-up1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Decline Overhead Sit-up1.webp"
    ),
  "Abdominals/Dumbbell Decline Sit-up": () =>
    import("../assets/exercises/Abdominals/Dumbbell Decline Sit-up.webp"),
  "Abdominals/Dumbbell Decline Sit-up1": () =>
    import("../assets/exercises/Abdominals/Dumbbell Decline Sit-up1.webp"),
  "Abdominals/Dumbbell Overhead Sit-up": () =>
    import("../assets/exercises/Abdominals/Dumbbell Overhead Sit-up.webp"),
  "Abdominals/Dumbbell Overhead Sit-up1": () =>
    import("../assets/exercises/Abdominals/Dumbbell Overhead Sit-up1.webp"),
  "Abdominals/Dumbbell Russian Twist with Legs Floor Off": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Russian Twist with Legs Floor Off.webp"
    ),
  "Abdominals/Dumbbell Russian Twist with Legs Floor Off1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Russian Twist with Legs Floor Off1.webp"
    ),
  "Abdominals/Dumbbell Side Bend": () =>
    import("../assets/exercises/Abdominals/Dumbbell Side Bend.webp"),
  "Abdominals/Dumbbell Side Bend1": () =>
    import("../assets/exercises/Abdominals/Dumbbell Side Bend1.webp"),
  "Abdominals/Dumbbell Side Plank with Rear Fly": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Side Plank with Rear Fly.webp"
    ),
  "Abdominals/Dumbbell Side Plank with Rear Fly1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Side Plank with Rear Fly1.webp"
    ),
  "Abdominals/Dumbbell Single Arm Starfish Crunch": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Single Arm Starfish Crunch.webp"
    ),
  "Abdominals/Dumbbell Single Arm Starfish Crunch1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Single Arm Starfish Crunch1.webp"
    ),
  "Abdominals/Dumbbell Starfish Crunch Alternating": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Starfish Crunch Alternating.webp"
    ),
  "Abdominals/Dumbbell Starfish Crunch Alternating1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Starfish Crunch Alternating1.webp"
    ),
  "Abdominals/Dumbbell Straight Arm Crunch": () =>
    import("../assets/exercises/Abdominals/Dumbbell Straight Arm Crunch.webp"),
  "Abdominals/Dumbbell Straight Arm Crunch1": () =>
    import("../assets/exercises/Abdominals/Dumbbell Straight Arm Crunch1.webp"),
  "Abdominals/Dumbbell Straight Arm Twisting Sit-up": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Straight Arm Twisting Sit-up.webp"
    ),
  "Abdominals/Dumbbell Straight Arm Twisting Sit-up1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Straight Arm Twisting Sit-up1.webp"
    ),
  "Abdominals/Dumbbell Straight Leg Russian Twist": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Straight Leg Russian Twist.webp"
    ),
  "Abdominals/Dumbbell Straight Leg Russian Twist1": () =>
    import(
      "../assets/exercises/Abdominals/Dumbbell Straight Leg Russian Twist1.webp"
    ),
  "Abdominals/Dumbbell V-up": () =>
    import("../assets/exercises/Abdominals/Dumbbell V-up.webp"),
  "Abdominals/Dumbbell V-up1": () =>
    import("../assets/exercises/Abdominals/Dumbbell V-up1.webp"),
  "Abdominals/Elbow Push Plank Up": () =>
    import("../assets/exercises/Abdominals/Elbow Push Plank Up.webp"),
  "Abdominals/Elbow Push Plank Up1": () =>
    import("../assets/exercises/Abdominals/Elbow Push Plank Up1.webp"),
  "Abdominals/Elbow-Up and Down Dynamic Plank": () =>
    import(
      "../assets/exercises/Abdominals/Elbow-Up and Down Dynamic Plank.webp"
    ),
  "Abdominals/Elbow-Up and Down Dynamic Plank1": () =>
    import(
      "../assets/exercises/Abdominals/Elbow-Up and Down Dynamic Plank1.webp"
    ),
  "Abdominals/Exercise Ball Body Saw": () =>
    import("../assets/exercises/Abdominals/Exercise Ball Body Saw.webp"),
  "Abdominals/Exercise Ball Body Saw1": () =>
    import("../assets/exercises/Abdominals/Exercise Ball Body Saw1.webp"),
  "Abdominals/High plank": () =>
    import("../assets/exercises/Abdominals/High plank.webp"),
  "Abdominals/High plank1": () =>
    import("../assets/exercises/Abdominals/High plank1.webp"),
  "Abdominals/Kettlebell situp press": () =>
    import("../assets/exercises/Abdominals/Kettlebell situp press.webp"),
  "Abdominals/Kettlebell situp press1": () =>
    import("../assets/exercises/Abdominals/Kettlebell situp press1.webp"),
  "Abdominals/Leg raises (straight legs)": () =>
    import("../assets/exercises/Abdominals/Leg raises (straight legs).webp"),
  "Abdominals/Leg raises (straight legs)1": () =>
    import("../assets/exercises/Abdominals/Leg raises (straight legs)1.webp"),
  "Abdominals/Plank Knee Tucks": () =>
    import("../assets/exercises/Abdominals/Plank Knee Tucks.webp"),
  "Abdominals/Plank Knee Tucks1": () =>
    import("../assets/exercises/Abdominals/Plank Knee Tucks1.webp"),
  "Abdominals/Resistance Band Lying Bent Knee Raise": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Lying Bent Knee Raise.webp"
    ),
  "Abdominals/Resistance Band Lying Bent Knee Raise1": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Lying Bent Knee Raise1.webp"
    ),
  "Abdominals/Resistance Band Upper Body Dead Bug": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Upper Body Dead Bug.webp"
    ),
  "Abdominals/Resistance Band Upper Body Dead Bug1": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Upper Body Dead Bug1.webp"
    ),
  "Abdominals/Resistance Band Upper Body Dead Bug_Female": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Upper Body Dead Bug_Female.webp"
    ),
  "Abdominals/Resistance Band Upper Body Dead Bug_Female1": () =>
    import(
      "../assets/exercises/Abdominals/Resistance Band Upper Body Dead Bug_Female1.webp"
    ),
  "Abdominals/Reverse Ab Wheel Rollout": () =>
    import("../assets/exercises/Abdominals/Reverse Ab Wheel Rollout.webp"),
  "Abdominals/Reverse Ab Wheel Rollout1": () =>
    import("../assets/exercises/Abdominals/Reverse Ab Wheel Rollout1.webp"),
  "Abdominals/Reverse Ab Wheel Rollout_Female": () =>
    import(
      "../assets/exercises/Abdominals/Reverse Ab Wheel Rollout_Female.webp"
    ),
  "Abdominals/Reverse Ab Wheel Rollout_Female1": () =>
    import(
      "../assets/exercises/Abdominals/Reverse Ab Wheel Rollout_Female1.webp"
    ),
  "Abdominals/Seated floor crunches": () =>
    import("../assets/exercises/Abdominals/Seated floor crunches.webp"),
  "Abdominals/Seated floor crunches1": () =>
    import("../assets/exercises/Abdominals/Seated floor crunches1.webp"),
  "Abdominals/Side plank with hip lift": () =>
    import("../assets/exercises/Abdominals/Side plank with hip lift.webp"),
  "Abdominals/Side plank with hip lift1": () =>
    import("../assets/exercises/Abdominals/Side plank with hip lift1.webp"),
  "Abdominals/Situps": () =>
    import("../assets/exercises/Abdominals/Situps.webp"),
  "Abdominals/Situps1": () =>
    import("../assets/exercises/Abdominals/Situps1.webp"),
  "Abdominals/Standing Ab Wheel Rollout": () =>
    import("../assets/exercises/Abdominals/Standing Ab Wheel Rollout.webp"),
  "Abdominals/Standing Ab Wheel Rollout1": () =>
    import("../assets/exercises/Abdominals/Standing Ab Wheel Rollout1.webp"),
  "Abdominals/Standing Ab Wheel Rollout_Female": () =>
    import(
      "../assets/exercises/Abdominals/Standing Ab Wheel Rollout_Female.webp"
    ),
  "Abdominals/Standing Ab Wheel Rollout_Female1": () =>
    import(
      "../assets/exercises/Abdominals/Standing Ab Wheel Rollout_Female1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Abdominal Fallout": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Abdominal Fallout.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Abdominal Fallout1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Abdominal Fallout1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Abdominal Fallout_female": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Abdominal Fallout_female.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Abdominal Fallout_female1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Abdominal Fallout_female1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Knees to Elbows": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Knees to Elbows.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Knees to Elbows1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Knees to Elbows1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise_female": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise_female.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise_female1":
    () =>
      import(
        "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Leg Hip Raise_female1.webp"
      ),
  "Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise":
    () =>
      import(
        "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise.webp"
      ),
  "Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise1":
    () =>
      import(
        "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise1.webp"
      ),
  "Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise_female":
    () =>
      import(
        "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise_female.webp"
      ),
  "Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise_female1":
    () =>
      import(
        "../assets/exercises/Abdominals/Suspension Trainer with Grips Hanging Straight Leg Hip Raise_female1.webp"
      ),
  "Abdominals/Suspension Trainer with Grips Pull Through": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Pull Through.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Pull Through1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Pull Through1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Pull Through_female": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Pull Through_female.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Pull Through_female1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Pull Through_female1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Reverse Ab Rollout": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Reverse Ab Rollout.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Reverse Ab Rollout1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Reverse Ab Rollout1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Reverse Ab Rollout_female": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Reverse Ab Rollout_female.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Reverse Ab Rollout_female1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Reverse Ab Rollout_female1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Supine Crunch": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Supine Crunch.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Supine Crunch1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Supine Crunch1.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Supine Crunch_female": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Supine Crunch_female.webp"
    ),
  "Abdominals/Suspension Trainer with Grips Supine Crunch_female1": () =>
    import(
      "../assets/exercises/Abdominals/Suspension Trainer with Grips Supine Crunch_female1.webp"
    ),
  "Abdominals/V crunches": () =>
    import("../assets/exercises/Abdominals/V crunches.webp"),
  "Abdominals/V crunches1": () =>
    import("../assets/exercises/Abdominals/V crunches1.webp"),
  "Abdominals/Wheels To Heaven": () =>
    import("../assets/exercises/Abdominals/Wheels To Heaven.webp"),
  "Abdominals/Wheels To Heaven1": () =>
    import("../assets/exercises/Abdominals/Wheels To Heaven1.webp"),
  "Abdominals/Wheels To Heaven_Female": () =>
    import("../assets/exercises/Abdominals/Wheels To Heaven_Female.webp"),
  "Abdominals/Wheels To Heaven_Female1": () =>
    import("../assets/exercises/Abdominals/Wheels To Heaven_Female1.webp"),
  "Abdominals/Wheels To Toes": () =>
    import("../assets/exercises/Abdominals/Wheels To Toes.webp"),
  "Abdominals/Wheels To Toes1": () =>
    import("../assets/exercises/Abdominals/Wheels To Toes1.webp"),
  "Abdominals/Wheels To Toes_Female": () =>
    import("../assets/exercises/Abdominals/Wheels To Toes_Female.webp"),
  "Abdominals/Wheels To Toes_Female1": () =>
    import("../assets/exercises/Abdominals/Wheels To Toes_Female1.webp"),
  "Abdominals/abdominal crunches machine": () =>
    import("../assets/exercises/Abdominals/abdominal crunches machine.webp"),
  "Abdominals/abdominal crunches machine1": () =>
    import("../assets/exercises/Abdominals/abdominal crunches machine1.webp"),
  "Abdominals/abdominal crunches with hold": () =>
    import("../assets/exercises/Abdominals/abdominal crunches with hold.webp"),
  "Abdominals/abdominal crunches with hold1": () =>
    import("../assets/exercises/Abdominals/abdominal crunches with hold1.webp"),
  "Abdominals/abdominal crunches": () =>
    import("../assets/exercises/Abdominals/abdominal crunches.webp"),
  "Abdominals/abdominal crunches1": () =>
    import("../assets/exercises/Abdominals/abdominal crunches1.webp"),
  "Abdominals/air bike crunch": () =>
    import("../assets/exercises/Abdominals/air bike crunch.webp"),
  "Abdominals/air bike crunch1": () =>
    import("../assets/exercises/Abdominals/air bike crunch1.webp"),
  "Abdominals/air bike crunch2": () =>
    import("../assets/exercises/Abdominals/air bike crunch2.webp"),
  "Abdominals/air bike_female": () =>
    import("../assets/exercises/Abdominals/air bike_female.webp"),
  "Abdominals/air bike_female1": () =>
    import("../assets/exercises/Abdominals/air bike_female1.webp"),
  "Abdominals/air bike_female2": () =>
    import("../assets/exercises/Abdominals/air bike_female2.webp"),
  "Abdominals/air twisting crunch": () =>
    import("../assets/exercises/Abdominals/air twisting crunch.webp"),
  "Abdominals/air twisting crunch1": () =>
    import("../assets/exercises/Abdominals/air twisting crunch1.webp"),
  "Abdominals/air twisting crunch_female": () =>
    import("../assets/exercises/Abdominals/air twisting crunch_female.webp"),
  "Abdominals/air twisting crunch_female1": () =>
    import("../assets/exercises/Abdominals/air twisting crunch_female1.webp"),
  "Abdominals/alternate arm leg plank hold": () =>
    import("../assets/exercises/Abdominals/alternate arm leg plank hold.webp"),
  "Abdominals/alternate arm leg plank hold1": () =>
    import("../assets/exercises/Abdominals/alternate arm leg plank hold1.webp"),
  "Abdominals/alternate arm leg plank hold2": () =>
    import("../assets/exercises/Abdominals/alternate arm leg plank hold2.webp"),
  "Abdominals/alternate arm leg plank rest pause": () =>
    import(
      "../assets/exercises/Abdominals/alternate arm leg plank rest pause.webp"
    ),
  "Abdominals/alternate arm leg plank rest pause1": () =>
    import(
      "../assets/exercises/Abdominals/alternate arm leg plank rest pause1.webp"
    ),
  "Abdominals/alternate single leg raises plank": () =>
    import(
      "../assets/exercises/Abdominals/alternate single leg raises plank.webp"
    ),
  "Abdominals/alternate single leg raises plank1": () =>
    import(
      "../assets/exercises/Abdominals/alternate single leg raises plank1.webp"
    ),
  "Abdominals/alternating leg lifts1": () =>
    import("../assets/exercises/Abdominals/alternating leg lifts1.webp"),
  "Abdominals/alternating leg lifts2": () =>
    import("../assets/exercises/Abdominals/alternating leg lifts2.webp"),
  "Abdominals/alternating oblique sit ups": () =>
    import("../assets/exercises/Abdominals/alternating oblique sit ups.webp"),
  "Abdominals/alternating oblique sit ups1": () =>
    import("../assets/exercises/Abdominals/alternating oblique sit ups1.webp"),
  "Abdominals/alternating toe tap": () =>
    import("../assets/exercises/Abdominals/alternating toe tap.webp"),
  "Abdominals/alternating toe tap1": () =>
    import("../assets/exercises/Abdominals/alternating toe tap1.webp"),
  "Abdominals/band kneeling crunch_female": () =>
    import("../assets/exercises/Abdominals/band kneeling crunch_female.webp"),
  "Abdominals/band kneeling crunch_female1": () =>
    import("../assets/exercises/Abdominals/band kneeling crunch_female1.webp"),
  "Abdominals/barbell seated twist on exercise ball": () =>
    import(
      "../assets/exercises/Abdominals/barbell seated twist on exercise ball.webp"
    ),
  "Abdominals/barbell seated twist on exercise ball1": () =>
    import(
      "../assets/exercises/Abdominals/barbell seated twist on exercise ball1.webp"
    ),
  "Abdominals/bench decline ab crunch": () =>
    import("../assets/exercises/Abdominals/bench decline ab crunch.webp"),
  "Abdominals/bench decline ab crunch1": () =>
    import("../assets/exercises/Abdominals/bench decline ab crunch1.webp"),
  "Abdominals/bench knee tucks": () =>
    import("../assets/exercises/Abdominals/bench knee tucks.webp"),
  "Abdominals/bench knee tucks1": () =>
    import("../assets/exercises/Abdominals/bench knee tucks1.webp"),
  "Abdominals/bicycle twisting crunch": () =>
    import("../assets/exercises/Abdominals/bicycle twisting crunch.webp"),
  "Abdominals/bicycle twisting crunch1": () =>
    import("../assets/exercises/Abdominals/bicycle twisting crunch1.webp"),
  "Abdominals/bicycles crunches": () =>
    import("../assets/exercises/Abdominals/bicycles crunches.webp"),
  "Abdominals/bicycles crunches1": () =>
    import("../assets/exercises/Abdominals/bicycles crunches1.webp"),
  "Abdominals/bicycles": () =>
    import("../assets/exercises/Abdominals/bicycles.webp"),
  "Abdominals/bicycles1": () =>
    import("../assets/exercises/Abdominals/bicycles1.webp"),
  "Abdominals/bird dog": () =>
    import("../assets/exercises/Abdominals/bird dog.webp"),
  "Abdominals/bird dog1": () =>
    import("../assets/exercises/Abdominals/bird dog1.webp"),
  "Abdominals/brazillian crunches": () =>
    import("../assets/exercises/Abdominals/brazillian crunches.webp"),
  "Abdominals/brazillian crunches1": () =>
    import("../assets/exercises/Abdominals/brazillian crunches1.webp"),
  "Abdominals/chest lift with rotation": () =>
    import("../assets/exercises/Abdominals/chest lift with rotation.webp"),
  "Abdominals/chest lift with rotation1": () =>
    import("../assets/exercises/Abdominals/chest lift with rotation1.webp"),
  "Abdominals/dead bug 2": () =>
    import("../assets/exercises/Abdominals/dead bug 2.webp"),
  "Abdominals/dead bug 3": () =>
    import("../assets/exercises/Abdominals/dead bug 3.webp"),
  "Abdominals/decline bench oblique crunches bodyweight": () =>
    import(
      "../assets/exercises/Abdominals/decline bench oblique crunches bodyweight.webp"
    ),
  "Abdominals/decline bench oblique crunches bodyweight1": () =>
    import(
      "../assets/exercises/Abdominals/decline bench oblique crunches bodyweight1.webp"
    ),
  "Abdominals/decline bench oblique crunches dumbbells": () =>
    import(
      "../assets/exercises/Abdominals/decline bench oblique crunches dumbbells.webp"
    ),
  "Abdominals/decline bench oblique crunches dumbbells1": () =>
    import(
      "../assets/exercises/Abdominals/decline bench oblique crunches dumbbells1.webp"
    ),
  "Abdominals/decline sit up": () =>
    import("../assets/exercises/Abdominals/decline sit up.webp"),
  "Abdominals/decline sit up1": () =>
    import("../assets/exercises/Abdominals/decline sit up1.webp"),
  "Abdominals/decline sit ups bodyweight": () =>
    import("../assets/exercises/Abdominals/decline sit ups bodyweight.webp"),
  "Abdominals/decline sit ups bodyweight1": () =>
    import("../assets/exercises/Abdominals/decline sit ups bodyweight1.webp"),
  "Abdominals/decline sit ups dumbbells": () =>
    import("../assets/exercises/Abdominals/decline sit ups dumbbells.webp"),
  "Abdominals/decline sit ups dumbbells1": () =>
    import("../assets/exercises/Abdominals/decline sit ups dumbbells1.webp"),
  "Abdominals/diagonal chop cable": () =>
    import("../assets/exercises/Abdominals/diagonal chop cable.webp"),
  "Abdominals/diagonal chop cable1": () =>
    import("../assets/exercises/Abdominals/diagonal chop cable1.webp"),
  "Abdominals/diagonal chop left": () =>
    import("../assets/exercises/Abdominals/diagonal chop left.webp"),
  "Abdominals/diagonal chop left1": () =>
    import("../assets/exercises/Abdominals/diagonal chop left1.webp"),
  "Abdominals/diagonal chop right": () =>
    import("../assets/exercises/Abdominals/diagonal chop right.webp"),
  "Abdominals/diagonal chop right1": () =>
    import("../assets/exercises/Abdominals/diagonal chop right1.webp"),
  "Abdominals/dumbbell ab crunch dumbbell": () =>
    import("../assets/exercises/Abdominals/dumbbell ab crunch dumbbell.webp"),
  "Abdominals/dumbbell ab crunch dumbbell1": () =>
    import("../assets/exercises/Abdominals/dumbbell ab crunch dumbbell1.webp"),
  "Abdominals/dumbbell diagonal chop": () =>
    import("../assets/exercises/Abdominals/dumbbell diagonal chop.webp"),
  "Abdominals/dumbbell diagonal chop1": () =>
    import("../assets/exercises/Abdominals/dumbbell diagonal chop1.webp"),
  "Abdominals/exercise ball sit ups": () =>
    import("../assets/exercises/Abdominals/exercise ball sit ups.webp"),
  "Abdominals/exercise ball sit ups1": () =>
    import("../assets/exercises/Abdominals/exercise ball sit ups1.webp"),
  "Abdominals/flutter kicks": () =>
    import("../assets/exercises/Abdominals/flutter kicks.webp"),
  "Abdominals/flutter kicks1": () =>
    import("../assets/exercises/Abdominals/flutter kicks1.webp"),
  "Abdominals/hanging knee raises": () =>
    import("../assets/exercises/Abdominals/hanging knee raises.webp"),
  "Abdominals/hanging knee raises1": () =>
    import("../assets/exercises/Abdominals/hanging knee raises1.webp"),
  "Abdominals/hanging oblique crunches": () =>
    import("../assets/exercises/Abdominals/hanging oblique crunches.webp"),
  "Abdominals/hanging oblique crunches1": () =>
    import("../assets/exercises/Abdominals/hanging oblique crunches1.webp"),
  "Abdominals/heel touches": () =>
    import("../assets/exercises/Abdominals/heel touches.webp"),
  "Abdominals/heel touches1": () =>
    import("../assets/exercises/Abdominals/heel touches1.webp"),
  "Abdominals/high knee twist": () =>
    import("../assets/exercises/Abdominals/high knee twist.webp"),
  "Abdominals/high knee twist1": () =>
    import("../assets/exercises/Abdominals/high knee twist1.webp"),
  "Abdominals/high resistance band kneeling crunch": () =>
    import(
      "../assets/exercises/Abdominals/high resistance band kneeling crunch.webp"
    ),
  "Abdominals/high resistance band kneeling crunch1": () =>
    import(
      "../assets/exercises/Abdominals/high resistance band kneeling crunch1.webp"
    ),
  "Abdominals/hollow hold": () =>
    import("../assets/exercises/Abdominals/hollow hold.webp"),
  "Abdominals/hollow hold1": () =>
    import("../assets/exercises/Abdominals/hollow hold1.webp"),
  "Abdominals/jack knives": () =>
    import("../assets/exercises/Abdominals/jack knives.webp"),
  "Abdominals/jack knives1": () =>
    import("../assets/exercises/Abdominals/jack knives1.webp"),
  "Abdominals/leg lift circles": () =>
    import("../assets/exercises/Abdominals/leg lift circles.webp"),
  "Abdominals/leg lift circles1": () =>
    import("../assets/exercises/Abdominals/leg lift circles1.webp"),
  "Abdominals/leg lift circles2": () =>
    import("../assets/exercises/Abdominals/leg lift circles2.webp"),
  "Abdominals/long arm crunches": () =>
    import("../assets/exercises/Abdominals/long arm crunches.webp"),
  "Abdominals/long arm crunches1": () =>
    import("../assets/exercises/Abdominals/long arm crunches1.webp"),
  "Abdominals/lying abs resistance band": () =>
    import("../assets/exercises/Abdominals/lying abs resistance band.webp"),
  "Abdominals/lying abs resistance band1": () =>
    import("../assets/exercises/Abdominals/lying abs resistance band1.webp"),
  "Abdominals/lying leg lift": () =>
    import("../assets/exercises/Abdominals/lying leg lift.webp"),
  "Abdominals/lying leg lift1": () =>
    import("../assets/exercises/Abdominals/lying leg lift1.webp"),
  "Abdominals/lying leg raise": () =>
    import("../assets/exercises/Abdominals/lying leg raise.webp"),
  "Abdominals/lying leg raise1": () =>
    import("../assets/exercises/Abdominals/lying leg raise1.webp"),
  "Abdominals/middle crunches": () =>
    import("../assets/exercises/Abdominals/middle crunches.webp"),
  "Abdominals/middle crunches1": () =>
    import("../assets/exercises/Abdominals/middle crunches1.webp"),
  "Abdominals/mountain climbers": () =>
    import("../assets/exercises/Abdominals/mountain climbers.webp"),
  "Abdominals/mountain climbers1": () =>
    import("../assets/exercises/Abdominals/mountain climbers1.webp"),
  "Abdominals/oblique crunch": () =>
    import("../assets/exercises/Abdominals/oblique crunch.webp"),
  "Abdominals/oblique crunch1": () =>
    import("../assets/exercises/Abdominals/oblique crunch1.webp"),
  "Abdominals/over head weight sit up": () =>
    import("../assets/exercises/Abdominals/over head weight sit up.webp"),
  "Abdominals/over head weight sit up1": () =>
    import("../assets/exercises/Abdominals/over head weight sit up1.webp"),
  "Abdominals/over weight ab crunch": () =>
    import("../assets/exercises/Abdominals/over weight ab crunch.webp"),
  "Abdominals/over weight ab crunch1": () =>
    import("../assets/exercises/Abdominals/over weight ab crunch1.webp"),
  "Abdominals/plank cross knee drive": () =>
    import("../assets/exercises/Abdominals/plank cross knee drive.webp"),
  "Abdominals/plank cross knee drive1": () =>
    import("../assets/exercises/Abdominals/plank cross knee drive1.webp"),
  "Abdominals/plank jack": () =>
    import("../assets/exercises/Abdominals/plank jack.webp"),
  "Abdominals/plank jack1": () =>
    import("../assets/exercises/Abdominals/plank jack1.webp"),
  "Abdominals/plank on elbows": () =>
    import("../assets/exercises/Abdominals/plank on elbows.webp"),
  "Abdominals/plank reach through": () =>
    import("../assets/exercises/Abdominals/plank reach through.webp"),
  "Abdominals/plank reach through1": () =>
    import("../assets/exercises/Abdominals/plank reach through1.webp"),
  "Abdominals/raised leg crunch": () =>
    import("../assets/exercises/Abdominals/raised leg crunch.webp"),
  "Abdominals/raised leg crunch1": () =>
    import("../assets/exercises/Abdominals/raised leg crunch1.webp"),
  "Abdominals/reverse crunch with kick out": () =>
    import("../assets/exercises/Abdominals/reverse crunch with kick out.webp"),
  "Abdominals/reverse crunch with kick out1": () =>
    import("../assets/exercises/Abdominals/reverse crunch with kick out1.webp"),
  "Abdominals/reverse crunch": () =>
    import("../assets/exercises/Abdominals/reverse crunch.webp"),
  "Abdominals/reverse crunch1": () =>
    import("../assets/exercises/Abdominals/reverse crunch1.webp"),
  "Abdominals/russian twist weighted ball": () =>
    import("../assets/exercises/Abdominals/russian twist weighted ball.webp"),
  "Abdominals/russian twist weighted ball1": () =>
    import("../assets/exercises/Abdominals/russian twist weighted ball1.webp"),
  "Abdominals/russian twist": () =>
    import("../assets/exercises/Abdominals/russian twist.webp"),
  "Abdominals/russian twist1": () =>
    import("../assets/exercises/Abdominals/russian twist1.webp"),
  "Abdominals/scissors kick": () =>
    import("../assets/exercises/Abdominals/scissors kick.webp"),
  "Abdominals/scissors kick1": () =>
    import("../assets/exercises/Abdominals/scissors kick1.webp"),
  "Abdominals/seated flutter kicks": () =>
    import("../assets/exercises/Abdominals/seated flutter kicks.webp"),
  "Abdominals/seated flutter kicks1": () =>
    import("../assets/exercises/Abdominals/seated flutter kicks1.webp"),
  "Abdominals/seated v up": () =>
    import("../assets/exercises/Abdominals/seated v up.webp"),
  "Abdominals/seated v up1": () =>
    import("../assets/exercises/Abdominals/seated v up1.webp"),
  "Abdominals/side plank oblique crunch": () =>
    import("../assets/exercises/Abdominals/side plank oblique crunch.webp"),
  "Abdominals/side plank oblique crunch1": () =>
    import("../assets/exercises/Abdominals/side plank oblique crunch1.webp"),
  "Abdominals/side plank": () =>
    import("../assets/exercises/Abdominals/side plank.webp"),
  "Abdominals/side plank1": () =>
    import("../assets/exercises/Abdominals/side plank1.webp"),
  "Abdominals/side to side punch": () =>
    import("../assets/exercises/Abdominals/side to side punch.webp"),
  "Abdominals/side to side punch1": () =>
    import("../assets/exercises/Abdominals/side to side punch1.webp"),
  "Abdominals/spider plank": () =>
    import("../assets/exercises/Abdominals/spider plank.webp"),
  "Abdominals/spider plank1": () =>
    import("../assets/exercises/Abdominals/spider plank1.webp"),
  "Abdominals/standing cable oblique twist": () =>
    import("../assets/exercises/Abdominals/standing cable oblique twist.webp"),
  "Abdominals/standing cable oblique twist1": () =>
    import("../assets/exercises/Abdominals/standing cable oblique twist1.webp"),
  "Abdominals/standing oblique crunch": () =>
    import("../assets/exercises/Abdominals/standing oblique crunch.webp"),
  "Abdominals/standing oblique crunch1": () =>
    import("../assets/exercises/Abdominals/standing oblique crunch1.webp"),
  "Abdominals/star crunches": () =>
    import("../assets/exercises/Abdominals/star crunches.webp"),
  "Abdominals/star crunches1": () =>
    import("../assets/exercises/Abdominals/star crunches1.webp"),
  "Abdominals/v up": () => import("../assets/exercises/Abdominals/v up.webp"),
  "Abdominals/v up1": () => import("../assets/exercises/Abdominals/v up1.webp"),
  "Abdominals/walkout": () =>
    import("../assets/exercises/Abdominals/walkout.webp"),
  "Abdominals/walkout1": () =>
    import("../assets/exercises/Abdominals/walkout1.webp"),
  "Abdominals/wind wipers": () =>
    import("../assets/exercises/Abdominals/wind wipers.webp"),
  "Abdominals/wind wipers1": () =>
    import("../assets/exercises/Abdominals/wind wipers1.webp"),
  "Back/45 degree hyperextension (arms in front of chest)_female": () =>
    import(
      "../assets/exercises/Back/45 degree hyperextension (arms in front of chest)_female.webp"
    ),
  "Back/45 degree hyperextension (arms in front of chest)_female1": () =>
    import(
      "../assets/exercises/Back/45 degree hyperextension (arms in front of chest)_female1.webp"
    ),
  "Back/Archer pull up": () =>
    import("../assets/exercises/Back/Archer pull up.webp"),
  "Back/Archer pull up1": () =>
    import("../assets/exercises/Back/Archer pull up1.webp"),
  "Back/Assisted Chin-up on a bench_female": () =>
    import("../assets/exercises/Back/Assisted Chin-up on a bench_female.webp"),
  "Back/Assisted Chin-up on a bench_female1": () =>
    import("../assets/exercises/Back/Assisted Chin-up on a bench_female1.webp"),
  "Back/Assisted Close-grip Underhand Chin-up_female": () =>
    import(
      "../assets/exercises/Back/Assisted Close-grip Underhand Chin-up_female.webp"
    ),
  "Back/Assisted Close-grip Underhand Chin-up_female1": () =>
    import(
      "../assets/exercises/Back/Assisted Close-grip Underhand Chin-up_female1.webp"
    ),
  "Back/Assisted Parallel Close-Grip Pull-up_female": () =>
    import(
      "../assets/exercises/Back/Assisted Parallel Close-Grip Pull-up_female.webp"
    ),
  "Back/Assisted Parallel Close-Grip Pull-up_female1": () =>
    import(
      "../assets/exercises/Back/Assisted Parallel Close-Grip Pull-up_female1.webp"
    ),
  "Back/Assisted close grip underhand chin up": () =>
    import(
      "../assets/exercises/Back/Assisted close grip underhand chin up.webp"
    ),
  "Back/Assisted close grip underhand chin up1": () =>
    import(
      "../assets/exercises/Back/Assisted close grip underhand chin up1.webp"
    ),
  "Back/Assisted pull up": () =>
    import("../assets/exercises/Back/Assisted pull up.webp"),
  "Back/Assisted pull up1": () =>
    import("../assets/exercises/Back/Assisted pull up1.webp"),
  "Back/Back Extension on Exercise Ball_female": () =>
    import(
      "../assets/exercises/Back/Back Extension on Exercise Ball_female.webp"
    ),
  "Back/Back Extension on Exercise Ball_female1": () =>
    import(
      "../assets/exercises/Back/Back Extension on Exercise Ball_female1.webp"
    ),
  "Back/Back squeeze": () =>
    import("../assets/exercises/Back/Back squeeze.webp"),
  "Back/Back squeeze1": () =>
    import("../assets/exercises/Back/Back squeeze1.webp"),
  "Back/Band Assisted Chin Up (From Knee)_female": () =>
    import(
      "../assets/exercises/Back/Band Assisted Chin Up (From Knee)_female.webp"
    ),
  "Back/Band Assisted Chin Up (From Knee)_female1": () =>
    import(
      "../assets/exercises/Back/Band Assisted Chin Up (From Knee)_female1.webp"
    ),
  "Back/Band Deadlift": () =>
    import("../assets/exercises/Back/Band Deadlift.webp"),
  "Back/Band Deadlift1": () =>
    import("../assets/exercises/Back/Band Deadlift1.webp"),
  "Back/Band Fixed Back Underhand Pulldown_female": () =>
    import(
      "../assets/exercises/Back/Band Fixed Back Underhand Pulldown_female.webp"
    ),
  "Back/Band Fixed Back Underhand Pulldown_female1": () =>
    import(
      "../assets/exercises/Back/Band Fixed Back Underhand Pulldown_female1.webp"
    ),
  "Back/Band Kneeling Single Arm High Row_Female": () =>
    import(
      "../assets/exercises/Back/Band Kneeling Single Arm High Row_Female.webp"
    ),
  "Back/Band Kneeling Single Arm High Row_Female1": () =>
    import(
      "../assets/exercises/Back/Band Kneeling Single Arm High Row_Female1.webp"
    ),
  "Back/Band Lying Reverse Grip Row_female": () =>
    import("../assets/exercises/Back/Band Lying Reverse Grip Row_female.webp"),
  "Back/Band Lying Reverse Grip Row_female1": () =>
    import("../assets/exercises/Back/Band Lying Reverse Grip Row_female1.webp"),
  "Back/Band Pull Up": () =>
    import("../assets/exercises/Back/Band Pull Up.webp"),
  "Back/Band Pull Up1": () =>
    import("../assets/exercises/Back/Band Pull Up1.webp"),
  "Back/Band Rotating Hammer Grip Incline Bench Row_female": () =>
    import(
      "../assets/exercises/Back/Band Rotating Hammer Grip Incline Bench Row_female.webp"
    ),
  "Back/Band Rotating Hammer Grip Incline Bench Row_female1": () =>
    import(
      "../assets/exercises/Back/Band Rotating Hammer Grip Incline Bench Row_female1.webp"
    ),
  "Back/Band bent-over row": () =>
    import("../assets/exercises/Back/Band bent-over row.webp"),
  "Back/Band bent-over row1": () =>
    import("../assets/exercises/Back/Band bent-over row1.webp"),
  "Back/Band bent-over row_femal1": () =>
    import("../assets/exercises/Back/Band bent-over row_femal1.webp"),
  "Back/Band bent-over row_female2": () =>
    import("../assets/exercises/Back/Band bent-over row_female2.webp"),
  "Back/Barbell Bent Over Row_female": () =>
    import("../assets/exercises/Back/Barbell Bent Over Row_female.webp"),
  "Back/Barbell Bent Over Row_female1": () =>
    import("../assets/exercises/Back/Barbell Bent Over Row_female1.webp"),
  "Back/Barbell Coan Deadlift_Female": () =>
    import("../assets/exercises/Back/Barbell Coan Deadlift_Female.webp"),
  "Back/Barbell Coan Deadlift_Female1": () =>
    import("../assets/exercises/Back/Barbell Coan Deadlift_Female1.webp"),
  "Back/Barbell Deadlift High Pull": () =>
    import("../assets/exercises/Back/Barbell Deadlift High Pull.webp"),
  "Back/Barbell Deadlift High Pull1": () =>
    import("../assets/exercises/Back/Barbell Deadlift High Pull1.webp"),
  "Back/Barbell Good Morning": () =>
    import("../assets/exercises/Back/Barbell Good Morning.webp"),
  "Back/Barbell Good Morning1": () =>
    import("../assets/exercises/Back/Barbell Good Morning1.webp"),
  "Back/Barbell Long Landmine Row": () =>
    import("../assets/exercises/Back/Barbell Long Landmine Row.webp"),
  "Back/Barbell Long Landmine Row1": () =>
    import("../assets/exercises/Back/Barbell Long Landmine Row1.webp"),
  "Back/Barbell Lying Row": () =>
    import("../assets/exercises/Back/Barbell Lying Row.webp"),
  "Back/Barbell Lying Row1": () =>
    import("../assets/exercises/Back/Barbell Lying Row1.webp"),
  "Back/Barbell Meadows Row": () =>
    import("../assets/exercises/Back/Barbell Meadows Row.webp"),
  "Back/Barbell Meadows Row1": () =>
    import("../assets/exercises/Back/Barbell Meadows Row1.webp"),
  "Back/Barbell Reverse Deadlift": () =>
    import("../assets/exercises/Back/Barbell Reverse Deadlift.webp"),
  "Back/Barbell Reverse Deadlift1": () =>
    import("../assets/exercises/Back/Barbell Reverse Deadlift1.webp"),
  "Back/Barbell Reverse Deadlift_Female": () =>
    import("../assets/exercises/Back/Barbell Reverse Deadlift_Female.webp"),
  "Back/Barbell Reverse Deadlift_Female1": () =>
    import("../assets/exercises/Back/Barbell Reverse Deadlift_Female1.webp"),
  "Back/Barbell Supinated Pendlay Row": () =>
    import("../assets/exercises/Back/Barbell Supinated Pendlay Row.webp"),
  "Back/Barbell Supinated Pendlay Row1": () =>
    import("../assets/exercises/Back/Barbell Supinated Pendlay Row1.webp"),
  "Back/Barbell Underhand Bent over Row": () =>
    import("../assets/exercises/Back/Barbell Underhand Bent over Row.webp"),
  "Back/Barbell Underhand Bent over Row1": () =>
    import("../assets/exercises/Back/Barbell Underhand Bent over Row1.webp"),
  "Back/Barbell Upright Row": () =>
    import("../assets/exercises/Back/Barbell Upright Row.webp"),
  "Back/Barbell Upright Row1": () =>
    import("../assets/exercises/Back/Barbell Upright Row1.webp"),
  "Back/Barbell Zercher Good Morning_Female": () =>
    import("../assets/exercises/Back/Barbell Zercher Good Morning_Female.webp"),
  "Back/Barbell Zercher Good Morning_Female1": () =>
    import(
      "../assets/exercises/Back/Barbell Zercher Good Morning_Female1.webp"
    ),
  "Back/Barbell bent over row pronated grip": () =>
    import("../assets/exercises/Back/Barbell bent over row pronated grip.webp"),
  "Back/Barbell bent over row pronated grip1": () =>
    import(
      "../assets/exercises/Back/Barbell bent over row pronated grip1.webp"
    ),
  "Back/Barbell bent over row supinated grip": () =>
    import(
      "../assets/exercises/Back/Barbell bent over row supinated grip.webp"
    ),
  "Back/Barbell bent over row supinated grip1": () =>
    import(
      "../assets/exercises/Back/Barbell bent over row supinated grip1.webp"
    ),
  "Back/Barbell clean deadlift": () =>
    import("../assets/exercises/Back/Barbell clean deadlift.webp"),
  "Back/Barbell clean deadlift1": () =>
    import("../assets/exercises/Back/Barbell clean deadlift1.webp"),
  "Back/Barbell pendlay row": () =>
    import("../assets/exercises/Back/Barbell pendlay row.webp"),
  "Back/Barbell pendlay row1": () =>
    import("../assets/exercises/Back/Barbell pendlay row1.webp"),
  "Back/Barbell push bent over row": () =>
    import("../assets/exercises/Back/Barbell push bent over row.webp"),
  "Back/Barbell push bent over row1": () =>
    import("../assets/exercises/Back/Barbell push bent over row1.webp"),
  "Back/Barbell reverse grip bent over row": () =>
    import("../assets/exercises/Back/Barbell reverse grip bent over row.webp"),
  "Back/Barbell reverse grip bent over row1": () =>
    import("../assets/exercises/Back/Barbell reverse grip bent over row1.webp"),
  "Back/Barbell romanian deadlift": () =>
    import("../assets/exercises/Back/Barbell romanian deadlift.webp"),
  "Back/Barbell romanian deadlift1": () =>
    import("../assets/exercises/Back/Barbell romanian deadlift1.webp"),
  "Back/Barbell seated good morning": () =>
    import("../assets/exercises/Back/Barbell seated good morning.webp"),
  "Back/Barbell seated good morning1": () =>
    import("../assets/exercises/Back/Barbell seated good morning1.webp"),
  "Back/Barbell single leg deadlift": () =>
    import("../assets/exercises/Back/Barbell single leg deadlift.webp"),
  "Back/Barbell single leg deadlift1": () =>
    import("../assets/exercises/Back/Barbell single leg deadlift1.webp"),
  "Back/Barbell snatch deadlift close grip": () =>
    import("../assets/exercises/Back/Barbell snatch deadlift close grip.webp"),
  "Back/Barbell snatch deadlift close grip1": () =>
    import("../assets/exercises/Back/Barbell snatch deadlift close grip1.webp"),
  "Back/Barbell snatch deadlift wide grip": () =>
    import("../assets/exercises/Back/Barbell snatch deadlift wide grip.webp"),
  "Back/Barbell snatch deadlift wide grip1": () =>
    import("../assets/exercises/Back/Barbell snatch deadlift wide grip1.webp"),
  "Back/Barbell sumo deadlift": () =>
    import("../assets/exercises/Back/Barbell sumo deadlift.webp"),
  "Back/Barbell sumo deadlift1": () =>
    import("../assets/exercises/Back/Barbell sumo deadlift1.webp"),
  "Back/Barbell wide grip Upright Row": () =>
    import("../assets/exercises/Back/Barbell wide grip Upright Row.webp"),
  "Back/Barbell wide grip Upright Row1": () =>
    import("../assets/exercises/Back/Barbell wide grip Upright Row1.webp"),
  "Back/Bench Pull-ups": () =>
    import("../assets/exercises/Back/Bench Pull-ups.webp"),
  "Back/Bench Pull-ups1": () =>
    import("../assets/exercises/Back/Bench Pull-ups1.webp"),
  "Back/Bent-over Row with bar": () =>
    import("../assets/exercises/Back/Bent-over Row with bar.webp"),
  "Back/Bent-over Row with bar1": () =>
    import("../assets/exercises/Back/Bent-over Row with bar1.webp"),
  "Back/Bodyweight Muscle-up": () =>
    import("../assets/exercises/Back/Bodyweight Muscle-up.webp"),
  "Back/Bodyweight Muscle-up1": () =>
    import("../assets/exercises/Back/Bodyweight Muscle-up1.webp"),
  "Back/Cable Bar Lateral Pulldown": () =>
    import("../assets/exercises/Back/Cable Bar Lateral Pulldown.webp"),
  "Back/Cable Bar Lateral Pulldown1": () =>
    import("../assets/exercises/Back/Cable Bar Lateral Pulldown1.webp"),
  "Back/Cable Bent Over Reverse Grip Row": () =>
    import("../assets/exercises/Back/Cable Bent Over Reverse Grip Row.webp"),
  "Back/Cable Bent Over Reverse Grip Row1": () =>
    import("../assets/exercises/Back/Cable Bent Over Reverse Grip Row1.webp"),
  "Back/Cable Bent Over Row": () =>
    import("../assets/exercises/Back/Cable Bent Over Row.webp"),
  "Back/Cable Bent Over Row1": () =>
    import("../assets/exercises/Back/Cable Bent Over Row1.webp"),
  "Back/Cable Close Grip Front Lat Pulldown": () =>
    import("../assets/exercises/Back/Cable Close Grip Front Lat Pulldown.webp"),
  "Back/Cable Close Grip Front Lat Pulldown1": () =>
    import(
      "../assets/exercises/Back/Cable Close Grip Front Lat Pulldown1.webp"
    ),
  "Back/Cable Lat Prayer": () =>
    import("../assets/exercises/Back/Cable Lat Prayer.webp"),
  "Back/Cable Lat Prayer1": () =>
    import("../assets/exercises/Back/Cable Lat Prayer1.webp"),
  "Back/Cable Lat Prayer_Female": () =>
    import("../assets/exercises/Back/Cable Lat Prayer_Female.webp"),
  "Back/Cable Lat Prayer_Female1": () =>
    import("../assets/exercises/Back/Cable Lat Prayer_Female1.webp"),
  "Back/Cable One Arm Bent over Row": () =>
    import("../assets/exercises/Back/Cable One Arm Bent over Row.webp"),
  "Back/Cable One Arm Bent over Row1": () =>
    import("../assets/exercises/Back/Cable One Arm Bent over Row1.webp"),
  "Back/Cable Pull In Kneeling": () =>
    import("../assets/exercises/Back/Cable Pull In Kneeling.webp"),
  "Back/Cable Pull In Kneeling1": () =>
    import("../assets/exercises/Back/Cable Pull In Kneeling1.webp"),
  "Back/Cable Pull In Kneeling_Female": () =>
    import("../assets/exercises/Back/Cable Pull In Kneeling_Female.webp"),
  "Back/Cable Pull In Kneeling_Female1": () =>
    import("../assets/exercises/Back/Cable Pull In Kneeling_Female1.webp"),
  "Back/Cable Pulldown": () =>
    import("../assets/exercises/Back/Cable Pulldown.webp"),
  "Back/Cable Pulldown1": () =>
    import("../assets/exercises/Back/Cable Pulldown1.webp"),
  "Back/Cable Pushdown (straight arm)": () =>
    import("../assets/exercises/Back/Cable Pushdown (straight arm).webp"),
  "Back/Cable Pushdown (straight arm)1": () =>
    import("../assets/exercises/Back/Cable Pushdown (straight arm)1.webp"),
  "Back/Cable Seated One Arm Alternate Row": () =>
    import("../assets/exercises/Back/Cable Seated One Arm Alternate Row.webp"),
  "Back/Cable Seated One Arm Alternate Row1": () =>
    import("../assets/exercises/Back/Cable Seated One Arm Alternate Row1.webp"),
  "Back/Cable Seated Supine grip Row": () =>
    import("../assets/exercises/Back/Cable Seated Supine grip Row.webp"),
  "Back/Cable Seated Supine grip Row1": () =>
    import("../assets/exercises/Back/Cable Seated Supine grip Row1.webp"),
  "Back/Cable Seated on Floor Row": () =>
    import("../assets/exercises/Back/Cable Seated on Floor Row.webp"),
  "Back/Cable Seated on Floor Row1": () =>
    import("../assets/exercises/Back/Cable Seated on Floor Row1.webp"),
  "Back/Cable Silverback Shrug": () =>
    import("../assets/exercises/Back/Cable Silverback Shrug.webp"),
  "Back/Cable Silverback Shrug1": () =>
    import("../assets/exercises/Back/Cable Silverback Shrug1.webp"),
  "Back/Cable Silverback Shrug_Female": () =>
    import("../assets/exercises/Back/Cable Silverback Shrug_Female.webp"),
  "Back/Cable Silverback Shrug_Female1": () =>
    import("../assets/exercises/Back/Cable Silverback Shrug_Female1.webp"),
  "Back/Cable Straight Arm Pulldown": () =>
    import("../assets/exercises/Back/Cable Straight Arm Pulldown.webp"),
  "Back/Cable Straight Arm Pulldown1": () =>
    import("../assets/exercises/Back/Cable Straight Arm Pulldown1.webp"),
  "Back/Cable Twin Handle Parallel Grip Lat Pulldown": () =>
    import(
      "../assets/exercises/Back/Cable Twin Handle Parallel Grip Lat Pulldown.webp"
    ),
  "Back/Cable Twin Handle Parallel Grip Lat Pulldown1": () =>
    import(
      "../assets/exercises/Back/Cable Twin Handle Parallel Grip Lat Pulldown1.webp"
    ),
  "Back/Cable Twisting Pull": () =>
    import("../assets/exercises/Back/Cable Twisting Pull.webp"),
  "Back/Cable Twisting Pull1": () =>
    import("../assets/exercises/Back/Cable Twisting Pull1.webp"),
  "Back/Cable Underhand Pulldown Wide Grips": () =>
    import("../assets/exercises/Back/Cable Underhand Pulldown Wide Grips.webp"),
  "Back/Cable Underhand Pulldown Wide Grips1": () =>
    import(
      "../assets/exercises/Back/Cable Underhand Pulldown Wide Grips1.webp"
    ),
  "Back/Cable one arm lat pulldown": () =>
    import("../assets/exercises/Back/Cable one arm lat pulldown.webp"),
  "Back/Cable one arm lat pulldown1": () =>
    import("../assets/exercises/Back/Cable one arm lat pulldown1.webp"),
  "Back/Cable rear Pulldown": () =>
    import("../assets/exercises/Back/Cable rear Pulldown.webp"),
  "Back/Cable rear Pulldown1": () =>
    import("../assets/exercises/Back/Cable rear Pulldown1.webp"),
  "Back/Cable seated row": () =>
    import("../assets/exercises/Back/Cable seated row.webp"),
  "Back/Cable seated row1": () =>
    import("../assets/exercises/Back/Cable seated row1.webp"),
  "Back/Chin ups (narrow parallel grip)": () =>
    import("../assets/exercises/Back/Chin ups (narrow parallel grip).webp"),
  "Back/Chin ups (narrow parallel grip)1": () =>
    import("../assets/exercises/Back/Chin ups (narrow parallel grip)1.webp"),
  "Back/Chin-up (isometric and negative)": () =>
    import("../assets/exercises/Back/Chin-up (isometric and negative).webp"),
  "Back/Chin-up (isometric and negative)1": () =>
    import("../assets/exercises/Back/Chin-up (isometric and negative)1.webp"),
  "Back/Close-reverse Grip Chin-Up": () =>
    import("../assets/exercises/Back/Close-reverse Grip Chin-Up.webp"),
  "Back/Close-reverse Grip Chin-Up1": () =>
    import("../assets/exercises/Back/Close-reverse Grip Chin-Up1.webp"),
  "Back/Commando Pull-up": () =>
    import("../assets/exercises/Back/Commando Pull-up.webp"),
  "Back/Commando Pull-up1": () =>
    import("../assets/exercises/Back/Commando Pull-up1.webp"),
  "Back/Dumbbell Bent Arm Pullover": () =>
    import("../assets/exercises/Back/Dumbbell Bent Arm Pullover.webp"),
  "Back/Dumbbell Bent Arm Pullover1": () =>
    import("../assets/exercises/Back/Dumbbell Bent Arm Pullover1.webp"),
  "Back/Dumbbell Bent-Over Reverse Row": () =>
    import("../assets/exercises/Back/Dumbbell Bent-Over Reverse Row.webp"),
  "Back/Dumbbell Bent-Over Reverse Row1": () =>
    import("../assets/exercises/Back/Dumbbell Bent-Over Reverse Row1.webp"),
  "Back/Dumbbell Bent-Over Row": () =>
    import("../assets/exercises/Back/Dumbbell Bent-Over Row.webp"),
  "Back/Dumbbell Bent-Over Row1": () =>
    import("../assets/exercises/Back/Dumbbell Bent-Over Row1.webp"),
  "Back/Dumbbell Hammer Grip Incline Bench Two Arm Row": () =>
    import(
      "../assets/exercises/Back/Dumbbell Hammer Grip Incline Bench Two Arm Row.webp"
    ),
  "Back/Dumbbell Hammer Grip Incline Bench Two Arm Row1": () =>
    import(
      "../assets/exercises/Back/Dumbbell Hammer Grip Incline Bench Two Arm Row1.webp"
    ),
  "Back/Dumbbell Incline Row": () =>
    import("../assets/exercises/Back/Dumbbell Incline Row.webp"),
  "Back/Dumbbell Incline Row1": () =>
    import("../assets/exercises/Back/Dumbbell Incline Row1.webp"),
  "Back/Dumbbell One Arm Row (rack support)": () =>
    import("../assets/exercises/Back/Dumbbell One Arm Row (rack support).webp"),
  "Back/Dumbbell One Arm Row (rack support)1": () =>
    import(
      "../assets/exercises/Back/Dumbbell One Arm Row (rack support)1.webp"
    ),
  "Back/Dumbbell Pullover (VERSION 2)": () =>
    import("../assets/exercises/Back/Dumbbell Pullover (VERSION 2).webp"),
  "Back/Dumbbell Pullover (VERSION 2)1": () =>
    import("../assets/exercises/Back/Dumbbell Pullover (VERSION 2)1.webp"),
  "Back/Dumbbell Pullover on floor": () =>
    import("../assets/exercises/Back/Dumbbell Pullover on floor.webp"),
  "Back/Dumbbell Pullover on floor1": () =>
    import("../assets/exercises/Back/Dumbbell Pullover on floor1.webp"),
  "Back/Dumbbell Pullover": () =>
    import("../assets/exercises/Back/Dumbbell Pullover.webp"),
  "Back/Dumbbell Pullover1": () =>
    import("../assets/exercises/Back/Dumbbell Pullover1.webp"),
  "Back/Dumbbell Renegade Row": () =>
    import("../assets/exercises/Back/Dumbbell Renegade Row.webp"),
  "Back/Dumbbell Renegade Row1": () =>
    import("../assets/exercises/Back/Dumbbell Renegade Row1.webp"),
  "Back/Dumbbell Romanian Deadlift": () =>
    import("../assets/exercises/Back/Dumbbell Romanian Deadlift.webp"),
  "Back/Dumbbell Romanian Deadlift1": () =>
    import("../assets/exercises/Back/Dumbbell Romanian Deadlift1.webp"),
  "Back/Elbow Lift Reverse Push Up": () =>
    import("../assets/exercises/Back/Elbow Lift Reverse Push Up.webp"),
  "Back/Elbow Lift Reverse Push Up1": () =>
    import("../assets/exercises/Back/Elbow Lift Reverse Push Up1.webp"),
  "Back/Exercise Ball Back Extension With Hands Behind Head": () =>
    import(
      "../assets/exercises/Back/Exercise Ball Back Extension With Hands Behind Head.webp"
    ),
  "Back/Exercise Ball Back Extension With Hands Behind Head1": () =>
    import(
      "../assets/exercises/Back/Exercise Ball Back Extension With Hands Behind Head1.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Alternate Arms_Female": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Alternate Arms_Female.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Alternate Arms_Female1": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Alternate Arms_Female1.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Both Arms_Female": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Both Arms_Female.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Both Arms_Female1": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Both Arms_Female1.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Single Arm": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Single Arm.webp"
    ),
  "Back/Hammer Strength Plate Loaded High Row Single Arm1": () =>
    import(
      "../assets/exercises/Back/Hammer Strength Plate Loaded High Row Single Arm1.webp"
    ),
  "Back/Jump_Rope row female white screen": () =>
    import("../assets/exercises/Back/Jump_Rope row female white screen.webp"),
  "Back/Jump_Rope row female white screen1": () =>
    import("../assets/exercises/Back/Jump_Rope row female white screen1.webp"),
  "Back/Kettlebell Sumo Deadlift": () =>
    import("../assets/exercises/Back/Kettlebell Sumo Deadlift.webp"),
  "Back/Kettlebell Sumo Deadlift1": () =>
    import("../assets/exercises/Back/Kettlebell Sumo Deadlift1.webp"),
  "Back/Kettlebells Sumo Deadlift with High Pull": () =>
    import(
      "../assets/exercises/Back/Kettlebells Sumo Deadlift with High Pull.webp"
    ),
  "Back/Kettlebells Sumo Deadlift with High Pull1": () =>
    import(
      "../assets/exercises/Back/Kettlebells Sumo Deadlift with High Pull1.webp"
    ),
  "Back/Landmine row": () =>
    import("../assets/exercises/Back/Landmine row.webp"),
  "Back/Landmine row1": () =>
    import("../assets/exercises/Back/Landmine row1.webp"),
  "Back/Prone bench row barbell reverse grip ": () =>
    import(
      "../assets/exercises/Back/Prone bench row barbell reverse grip .webp"
    ),
  "Back/Prone bench row barbell reverse grip 1": () =>
    import(
      "../assets/exercises/Back/Prone bench row barbell reverse grip 1.webp"
    ),
  "Back/Push Pull Chair Over Head Pull": () =>
    import("../assets/exercises/Back/Push Pull Chair Over Head Pull.webp"),
  "Back/Push Pull Chair Over Head Pull1": () =>
    import("../assets/exercises/Back/Push Pull Chair Over Head Pull1.webp"),
  "Back/Push Pull Chair Over Head Pull_Female": () =>
    import(
      "../assets/exercises/Back/Push Pull Chair Over Head Pull_Female.webp"
    ),
  "Back/Push Pull Chair Over Head Pull_Female1": () =>
    import(
      "../assets/exercises/Back/Push Pull Chair Over Head Pull_Female1.webp"
    ),
  "Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown.webp"
      ),
  "Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown1":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown1.webp"
      ),
  "Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown_Femal1":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown_Femal1.webp"
      ),
  "Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown_Female2":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Cross Body Single Straight Arm Supinated Pulldown_Female2.webp"
      ),
  "Back/Resistance Band Floor Hyperextension": () =>
    import(
      "../assets/exercises/Back/Resistance Band Floor Hyperextension.webp"
    ),
  "Back/Resistance Band Floor Hyperextension1": () =>
    import(
      "../assets/exercises/Back/Resistance Band Floor Hyperextension1.webp"
    ),
  "Back/Resistance Band Floor Hyperextension_Femal1": () =>
    import(
      "../assets/exercises/Back/Resistance Band Floor Hyperextension_Femal1.webp"
    ),
  "Back/Resistance Band Floor Hyperextension_Female2": () =>
    import(
      "../assets/exercises/Back/Resistance Band Floor Hyperextension_Female2.webp"
    ),
  "Back/Resistance Band Kneeling Cross Body Single Straight Arm Supinated Pulldown":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Kneeling Cross Body Single Straight Arm Supinated Pulldown.webp"
      ),
  "Back/Resistance Band Kneeling Cross Body Single Straight Arm Supinated Pulldown1":
    () =>
      import(
        "../assets/exercises/Back/Resistance Band Kneeling Cross Body Single Straight Arm Supinated Pulldown1.webp"
      ),
  "Back/Resistance Band Lying Hyperextension Abduction": () =>
    import(
      "../assets/exercises/Back/Resistance Band Lying Hyperextension Abduction.webp"
    ),
  "Back/Resistance Band Lying Hyperextension Abduction1": () =>
    import(
      "../assets/exercises/Back/Resistance Band Lying Hyperextension Abduction1.webp"
    ),
  "Back/Resistance Band Lying Hyperextension Abduction_Femal1": () =>
    import(
      "../assets/exercises/Back/Resistance Band Lying Hyperextension Abduction_Femal1.webp"
    ),
  "Back/Resistance Band Lying Hyperextension Abduction_Female2": () =>
    import(
      "../assets/exercises/Back/Resistance Band Lying Hyperextension Abduction_Female2.webp"
    ),
  "Back/Scapula push up": () =>
    import("../assets/exercises/Back/Scapula push up.webp"),
  "Back/Scapula push up1": () =>
    import("../assets/exercises/Back/Scapula push up1.webp"),
  "Back/Single Kettlebell Deadlift": () =>
    import("../assets/exercises/Back/Single Kettlebell Deadlift.webp"),
  "Back/Single Kettlebell Deadlift1": () =>
    import("../assets/exercises/Back/Single Kettlebell Deadlift1.webp"),
  "Back/Supine Push up ": () =>
    import("../assets/exercises/Back/Supine Push up .webp"),
  "Back/Supine Push up 1": () =>
    import("../assets/exercises/Back/Supine Push up 1.webp"),
  "Back/Suspension Trainer with Grips Bent Knee Inverted Row": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Bent Knee Inverted Row.webp"
    ),
  "Back/Suspension Trainer with Grips Bent Knee Inverted Row1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Bent Knee Inverted Row1.webp"
    ),
  "Back/Suspension Trainer with Grips Chin-up": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Chin-up.webp"
    ),
  "Back/Suspension Trainer with Grips Chin-up1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Chin-up1.webp"
    ),
  "Back/Suspension Trainer with Grips High Row_female": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips High Row_female.webp"
    ),
  "Back/Suspension Trainer with Grips High Row_female1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips High Row_female1.webp"
    ),
  "Back/Suspension Trainer with Grips Inverted Row Arm Twist_female": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Inverted Row Arm Twist_female.webp"
    ),
  "Back/Suspension Trainer with Grips Inverted Row Arm Twist_female1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Inverted Row Arm Twist_female1.webp"
    ),
  "Back/Suspension Trainer with Grips Inverted Row female": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Inverted Row female.webp"
    ),
  "Back/Suspension Trainer with Grips Inverted Row female1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Inverted Row female1.webp"
    ),
  "Back/Suspension Trainer with Grips Knee Tuck Row_female": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Knee Tuck Row_female.webp"
    ),
  "Back/Suspension Trainer with Grips Knee Tuck Row_female1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Knee Tuck Row_female1.webp"
    ),
  "Back/Suspension Trainer with Grips Pull-up_female": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Pull-up_female.webp"
    ),
  "Back/Suspension Trainer with Grips Pull-up_female1": () =>
    import(
      "../assets/exercises/Back/Suspension Trainer with Grips Pull-up_female1.webp"
    ),
  "Back/Suspension Trainer with Grips Wide Grip Inverted Row on floor_female_1":
    () =>
      import(
        "../assets/exercises/Back/Suspension Trainer with Grips Wide Grip Inverted Row on floor_female_1.webp"
      ),
  "Back/Suspension Trainer with Grips Wide Grip Inverted Row on floor_female_11":
    () =>
      import(
        "../assets/exercises/Back/Suspension Trainer with Grips Wide Grip Inverted Row on floor_female_11.webp"
      ),
  "Back/alternate superman": () =>
    import("../assets/exercises/Back/alternate superman.webp"),
  "Back/alternate superman1": () =>
    import("../assets/exercises/Back/alternate superman1.webp"),
  "Back/around the world superman hold": () =>
    import("../assets/exercises/Back/around the world superman hold.webp"),
  "Back/around the world superman hold1": () =>
    import("../assets/exercises/Back/around the world superman hold1.webp"),
  "Back/assisted chin up normal width reverse grip ": () =>
    import(
      "../assets/exercises/Back/assisted chin up normal width reverse grip .webp"
    ),
  "Back/assisted chin up normal width reverse grip 1": () =>
    import(
      "../assets/exercises/Back/assisted chin up normal width reverse grip 1.webp"
    ),
  "Back/assisted chin up reverse close grip ": () =>
    import(
      "../assets/exercises/Back/assisted chin up reverse close grip .webp"
    ),
  "Back/assisted chin up reverse close grip 1": () =>
    import(
      "../assets/exercises/Back/assisted chin up reverse close grip 1.webp"
    ),
  "Back/assisted chin up reverse wide grip ": () =>
    import("../assets/exercises/Back/assisted chin up reverse wide grip .webp"),
  "Back/assisted chin up reverse wide grip 1": () =>
    import(
      "../assets/exercises/Back/assisted chin up reverse wide grip 1.webp"
    ),
  "Back/assisted pull up close grip ": () =>
    import("../assets/exercises/Back/assisted pull up close grip .webp"),
  "Back/assisted pull up close grip 1": () =>
    import("../assets/exercises/Back/assisted pull up close grip 1.webp"),
  "Back/assisted pull up normal grip ": () =>
    import("../assets/exercises/Back/assisted pull up normal grip .webp"),
  "Back/assisted pull up normal grip 1": () =>
    import("../assets/exercises/Back/assisted pull up normal grip 1.webp"),
  "Back/assisted pull up wide grip ": () =>
    import("../assets/exercises/Back/assisted pull up wide grip .webp"),
  "Back/assisted pull up wide grip 1": () =>
    import("../assets/exercises/Back/assisted pull up wide grip 1.webp"),
  "Back/band kneeling lat pulldown_female": () =>
    import("../assets/exercises/Back/band kneeling lat pulldown_female.webp"),
  "Back/band kneeling lat pulldown_female1": () =>
    import("../assets/exercises/Back/band kneeling lat pulldown_female1.webp"),
  "Back/barbell one arm single deadlift": () =>
    import("../assets/exercises/Back/barbell one arm single deadlift.webp"),
  "Back/barbell one arm single deadlift1": () =>
    import("../assets/exercises/Back/barbell one arm single deadlift1.webp"),
  "Back/barbell sumo deadlift ": () =>
    import("../assets/exercises/Back/barbell sumo deadlift .webp"),
  "Back/barbell sumo deadlift 1": () =>
    import("../assets/exercises/Back/barbell sumo deadlift 1.webp"),
  "Back/behind neck lat pull down machine ": () =>
    import("../assets/exercises/Back/behind neck lat pull down machine .webp"),
  "Back/behind neck lat pull down machine 1": () =>
    import("../assets/exercises/Back/behind neck lat pull down machine 1.webp"),
  "Back/bent over barbell row": () =>
    import("../assets/exercises/Back/bent over barbell row.webp"),
  "Back/bent over barbell row1": () =>
    import("../assets/exercises/Back/bent over barbell row1.webp"),
  "Back/cable low seated row": () =>
    import("../assets/exercises/Back/cable low seated row.webp"),
  "Back/cable low seated row1": () =>
    import("../assets/exercises/Back/cable low seated row1.webp"),
  "Back/cable lying extension pullover (with cables attachment)": () =>
    import(
      "../assets/exercises/Back/cable lying extension pullover (with cables attachment).webp"
    ),
  "Back/cable lying extension pullover (with cables attachment)1": () =>
    import(
      "../assets/exercises/Back/cable lying extension pullover (with cables attachment)1.webp"
    ),
  "Back/cable palm rotational row": () =>
    import("../assets/exercises/Back/cable palm rotational row.webp"),
  "Back/cable palm rotational row1": () =>
    import("../assets/exercises/Back/cable palm rotational row1.webp"),
  "Back/cable reverse grip straight back seated high row": () =>
    import(
      "../assets/exercises/Back/cable reverse grip straight back seated high row.webp"
    ),
  "Back/cable reverse grip straight back seated high row1": () =>
    import(
      "../assets/exercises/Back/cable reverse grip straight back seated high row1.webp"
    ),
  "Back/chin up reverse close grip ": () =>
    import("../assets/exercises/Back/chin up reverse close grip .webp"),
  "Back/chin up reverse close grip 1": () =>
    import("../assets/exercises/Back/chin up reverse close grip 1.webp"),
  "Back/chin up reverse normal grip ": () =>
    import("../assets/exercises/Back/chin up reverse normal grip .webp"),
  "Back/chin up reverse normal grip 1": () =>
    import("../assets/exercises/Back/chin up reverse normal grip 1.webp"),
  "Back/chin up reverse wide grip ": () =>
    import("../assets/exercises/Back/chin up reverse wide grip .webp"),
  "Back/chin up reverse wide grip 1": () =>
    import("../assets/exercises/Back/chin up reverse wide grip 1.webp"),
  "Back/chin up": () => import("../assets/exercises/Back/chin up.webp"),
  "Back/chin up1": () => import("../assets/exercises/Back/chin up1.webp"),
  "Back/dumbbells bent over row pronated grip": () =>
    import(
      "../assets/exercises/Back/dumbbells bent over row pronated grip.webp"
    ),
  "Back/dumbbells bent over row pronated grip1": () =>
    import(
      "../assets/exercises/Back/dumbbells bent over row pronated grip1.webp"
    ),
  "Back/dumbbells bent over row": () =>
    import("../assets/exercises/Back/dumbbells bent over row.webp"),
  "Back/dumbbells bent over row1": () =>
    import("../assets/exercises/Back/dumbbells bent over row1.webp"),
  "Back/dumbbells single arm row": () =>
    import("../assets/exercises/Back/dumbbells single arm row.webp"),
  "Back/dumbbells single arm row1": () =>
    import("../assets/exercises/Back/dumbbells single arm row1.webp"),
  "Back/good morning resistance band ": () =>
    import("../assets/exercises/Back/good morning resistance band .webp"),
  "Back/good morning resistance band 1": () =>
    import("../assets/exercises/Back/good morning resistance band 1.webp"),
  "Back/good mornings dumbbells": () =>
    import("../assets/exercises/Back/good mornings dumbbells.webp"),
  "Back/good mornings dumbbells1": () =>
    import("../assets/exercises/Back/good mornings dumbbells1.webp"),
  "Back/good mornings kettlebell ": () =>
    import("../assets/exercises/Back/good mornings kettlebell .webp"),
  "Back/good mornings kettlebell 1": () =>
    import("../assets/exercises/Back/good mornings kettlebell 1.webp"),
  "Back/inverted rows on smith machine": () =>
    import("../assets/exercises/Back/inverted rows on smith machine.webp"),
  "Back/inverted rows on smith machine1": () =>
    import("../assets/exercises/Back/inverted rows on smith machine1.webp"),
  "Back/lat pull down close grip ": () =>
    import("../assets/exercises/Back/lat pull down close grip .webp"),
  "Back/lat pull down close grip 1": () =>
    import("../assets/exercises/Back/lat pull down close grip 1.webp"),
  "Back/lat pull down normal grip ": () =>
    import("../assets/exercises/Back/lat pull down normal grip .webp"),
  "Back/lat pull down normal grip 1": () =>
    import("../assets/exercises/Back/lat pull down normal grip 1.webp"),
  "Back/lat pull down wide grip ": () =>
    import("../assets/exercises/Back/lat pull down wide grip .webp"),
  "Back/lat pull down wide grip 1": () =>
    import("../assets/exercises/Back/lat pull down wide grip 1.webp"),
  "Back/lying back extension ": () =>
    import("../assets/exercises/Back/lying back extension .webp"),
  "Back/lying back extension 1": () =>
    import("../assets/exercises/Back/lying back extension 1.webp"),
  "Back/prone bench row barbell pronate grip": () =>
    import(
      "../assets/exercises/Back/prone bench row barbell pronate grip.webp"
    ),
  "Back/prone bench row barbell pronate grip1": () =>
    import(
      "../assets/exercises/Back/prone bench row barbell pronate grip1.webp"
    ),
  "Back/prone bench row dumbbells pronated grip": () =>
    import(
      "../assets/exercises/Back/prone bench row dumbbells pronated grip.webp"
    ),
  "Back/prone bench row dumbbells pronated grip1": () =>
    import(
      "../assets/exercises/Back/prone bench row dumbbells pronated grip1.webp"
    ),
  "Back/prone bench row dumbbells supinated grip": () =>
    import(
      "../assets/exercises/Back/prone bench row dumbbells supinated grip.webp"
    ),
  "Back/prone bench row dumbbells supinated grip1": () =>
    import(
      "../assets/exercises/Back/prone bench row dumbbells supinated grip1.webp"
    ),
  "Back/prone bench row dumbbells": () =>
    import("../assets/exercises/Back/prone bench row dumbbells.webp"),
  "Back/prone bench row dumbbells1": () =>
    import("../assets/exercises/Back/prone bench row dumbbells1.webp"),
  "Back/pull up normal grip ": () =>
    import("../assets/exercises/Back/pull up normal grip .webp"),
  "Back/pull up normal grip 1": () =>
    import("../assets/exercises/Back/pull up normal grip 1.webp"),
  "Back/pull up normal grip": () =>
    import("../assets/exercises/Back/pull up normal grip.webp"),
  "Back/pull up wide grip ": () =>
    import("../assets/exercises/Back/pull up wide grip .webp"),
  "Back/pull up wide grip 1": () =>
    import("../assets/exercises/Back/pull up wide grip 1.webp"),
  "Back/pull up wide grip": () =>
    import("../assets/exercises/Back/pull up wide grip.webp"),
  "Back/resistance band - cable row ": () =>
    import("../assets/exercises/Back/resistance band - cable row .webp"),
  "Back/resistance band - cable row 1": () =>
    import("../assets/exercises/Back/resistance band - cable row 1.webp"),
  "Back/reverse grip lat pull down ": () =>
    import("../assets/exercises/Back/reverse grip lat pull down .webp"),
  "Back/reverse grip lat pull down 1": () =>
    import("../assets/exercises/Back/reverse grip lat pull down 1.webp"),
  "Back/seated cable row V bar machine ": () =>
    import("../assets/exercises/Back/seated cable row V bar machine .webp"),
  "Back/seated cable row V bar machine 1": () =>
    import("../assets/exercises/Back/seated cable row V bar machine 1.webp"),
  "Back/seated normal grip row machine ": () =>
    import("../assets/exercises/Back/seated normal grip row machine .webp"),
  "Back/seated normal grip row machine 1": () =>
    import("../assets/exercises/Back/seated normal grip row machine 1.webp"),
  "Back/seated resistance band - cable rows ": () =>
    import(
      "../assets/exercises/Back/seated resistance band - cable rows .webp"
    ),
  "Back/seated resistance band - cable rows 1": () =>
    import(
      "../assets/exercises/Back/seated resistance band - cable rows 1.webp"
    ),
  "Back/single arm cable row left ": () =>
    import("../assets/exercises/Back/single arm cable row left .webp"),
  "Back/single arm cable row left 1": () =>
    import("../assets/exercises/Back/single arm cable row left 1.webp"),
  "Back/standing lat cable pull over ": () =>
    import("../assets/exercises/Back/standing lat cable pull over .webp"),
  "Back/standing lat cable pull over 1": () =>
    import("../assets/exercises/Back/standing lat cable pull over 1.webp"),
  "Back/straight bar cable pull down ": () =>
    import("../assets/exercises/Back/straight bar cable pull down .webp"),
  "Back/straight bar cable pull down 1": () =>
    import("../assets/exercises/Back/straight bar cable pull down 1.webp"),
  "Back/straight bar cable row close grip ": () =>
    import("../assets/exercises/Back/straight bar cable row close grip .webp"),
  "Back/straight bar cable row close grip 1": () =>
    import("../assets/exercises/Back/straight bar cable row close grip 1.webp"),
  "Back/straight bar cable row normal grip ": () =>
    import("../assets/exercises/Back/straight bar cable row normal grip .webp"),
  "Back/straight bar cable row normal grip 1": () =>
    import(
      "../assets/exercises/Back/straight bar cable row normal grip 1.webp"
    ),
  "Back/superman ": () => import("../assets/exercises/Back/superman .webp"),
  "Back/superman 1": () => import("../assets/exercises/Back/superman 1.webp"),
  "Back/superman holds": () =>
    import("../assets/exercises/Back/superman holds.webp"),
  "Back/superman holds1": () =>
    import("../assets/exercises/Back/superman holds1.webp"),
  "Back/superman pulls ": () =>
    import("../assets/exercises/Back/superman pulls .webp"),
  "Back/superman pulls 1": () =>
    import("../assets/exercises/Back/superman pulls 1.webp"),
  "Back/superman pulls resistance band": () =>
    import("../assets/exercises/Back/superman pulls resistance band.webp"),
  "Back/superman pulls resistance band1": () =>
    import("../assets/exercises/Back/superman pulls resistance band1.webp"),
  "Back/trap bar deadlift": () =>
    import("../assets/exercises/Back/trap bar deadlift.webp"),
  "Back/trap bar deadlift1": () =>
    import("../assets/exercises/Back/trap bar deadlift1.webp"),
  "Back/v bar lat pull down ": () =>
    import("../assets/exercises/Back/v bar lat pull down .webp"),
  "Back/v bar lat pull down 1": () =>
    import("../assets/exercises/Back/v bar lat pull down 1.webp"),
  "Biceps/Band Close-Grip Biceps Curl": () =>
    import("../assets/exercises/Biceps/Band Close-Grip Biceps Curl.webp"),
  "Biceps/Band Close-Grip Biceps Curl1": () =>
    import("../assets/exercises/Biceps/Band Close-Grip Biceps Curl1.webp"),
  "Biceps/Band Close-Grip Biceps Curl_female": () =>
    import(
      "../assets/exercises/Biceps/Band Close-Grip Biceps Curl_female.webp"
    ),
  "Biceps/Band Close-Grip Biceps Curl_female1": () =>
    import(
      "../assets/exercises/Biceps/Band Close-Grip Biceps Curl_female1.webp"
    ),
  "Biceps/Band Concentration Curl_female": () =>
    import("../assets/exercises/Biceps/Band Concentration Curl_female.webp"),
  "Biceps/Band Concentration Curl_female1": () =>
    import("../assets/exercises/Biceps/Band Concentration Curl_female1.webp"),
  "Biceps/Band Cross Chest Biceps Curl_female": () =>
    import(
      "../assets/exercises/Biceps/Band Cross Chest Biceps Curl_female.webp"
    ),
  "Biceps/Band Cross Chest Biceps Curl_female1": () =>
    import(
      "../assets/exercises/Biceps/Band Cross Chest Biceps Curl_female1.webp"
    ),
  "Biceps/Band Incline Alternate Hammer Curl_female": () =>
    import(
      "../assets/exercises/Biceps/Band Incline Alternate Hammer Curl_female.webp"
    ),
  "Biceps/Band Incline Alternate Hammer Curl_female1": () =>
    import(
      "../assets/exercises/Biceps/Band Incline Alternate Hammer Curl_female1.webp"
    ),
  "Biceps/Band Incline Biceps Curl_female": () =>
    import("../assets/exercises/Biceps/Band Incline Biceps Curl_female.webp"),
  "Biceps/Band Incline Biceps Curl_female1": () =>
    import("../assets/exercises/Biceps/Band Incline Biceps Curl_female1.webp"),
  "Biceps/Band Incline Hammer Curl_female": () =>
    import("../assets/exercises/Biceps/Band Incline Hammer Curl_female.webp"),
  "Biceps/Band Incline Hammer Curl_female1": () =>
    import("../assets/exercises/Biceps/Band Incline Hammer Curl_female1.webp"),
  "Biceps/Band Prone Incline Curl_female": () =>
    import("../assets/exercises/Biceps/Band Prone Incline Curl_female.webp"),
  "Biceps/Band Prone Incline Curl_female1": () =>
    import("../assets/exercises/Biceps/Band Prone Incline Curl_female1.webp"),
  "Biceps/Band Prone Incline Hammer Curl_female": () =>
    import(
      "../assets/exercises/Biceps/Band Prone Incline Hammer Curl_female.webp"
    ),
  "Biceps/Band Prone Incline Hammer Curl_female1": () =>
    import(
      "../assets/exercises/Biceps/Band Prone Incline Hammer Curl_female1.webp"
    ),
  "Biceps/Band Reverse Spider Curl_female": () =>
    import("../assets/exercises/Biceps/Band Reverse Spider Curl_female.webp"),
  "Biceps/Band Reverse Spider Curl_female1": () =>
    import("../assets/exercises/Biceps/Band Reverse Spider Curl_female1.webp"),
  "Biceps/Barbell Alternate Biceps Curl_female": () =>
    import(
      "../assets/exercises/Biceps/Barbell Alternate Biceps Curl_female.webp"
    ),
  "Biceps/Barbell Alternate Biceps Curl_female1": () =>
    import(
      "../assets/exercises/Biceps/Barbell Alternate Biceps Curl_female1.webp"
    ),
  "Biceps/Barbell Curl_female": () =>
    import("../assets/exercises/Biceps/Barbell Curl_female.webp"),
  "Biceps/Barbell Curl_female1": () =>
    import("../assets/exercises/Biceps/Barbell Curl_female1.webp"),
  "Biceps/Barbell preacher curl": () =>
    import("../assets/exercises/Biceps/Barbell preacher curl.webp"),
  "Biceps/Barbell preacher curl1": () =>
    import("../assets/exercises/Biceps/Barbell preacher curl1.webp"),
  "Biceps/Barbell reverse biceps curl": () =>
    import("../assets/exercises/Biceps/Barbell reverse biceps curl.webp"),
  "Biceps/Barbell reverse biceps curl1": () =>
    import("../assets/exercises/Biceps/Barbell reverse biceps curl1.webp"),
  "Biceps/Barbell reverse spider curl": () =>
    import("../assets/exercises/Biceps/Barbell reverse spider curl.webp"),
  "Biceps/Barbell reverse spider curl1": () =>
    import("../assets/exercises/Biceps/Barbell reverse spider curl1.webp"),
  "Biceps/Barbell seated concentration biceps curl": () =>
    import(
      "../assets/exercises/Biceps/Barbell seated concentration biceps curl.webp"
    ),
  "Biceps/Barbell seated concentration biceps curl1": () =>
    import(
      "../assets/exercises/Biceps/Barbell seated concentration biceps curl1.webp"
    ),
  "Biceps/Barbell single arm biceps curl": () =>
    import("../assets/exercises/Biceps/Barbell single arm biceps curl.webp"),
  "Biceps/Barbell single arm biceps curl1": () =>
    import("../assets/exercises/Biceps/Barbell single arm biceps curl1.webp"),
  "Biceps/Barbell standing close grip curl": () =>
    import("../assets/exercises/Biceps/Barbell standing close grip curl.webp"),
  "Biceps/Barbell standing close grip curl1": () =>
    import("../assets/exercises/Biceps/Barbell standing close grip curl1.webp"),
  "Biceps/Barbell standing concentration curl": () =>
    import(
      "../assets/exercises/Biceps/Barbell standing concentration curl.webp"
    ),
  "Biceps/Barbell standing concentration curl1": () =>
    import(
      "../assets/exercises/Biceps/Barbell standing concentration curl1.webp"
    ),
  "Biceps/Barbell standing wide grip biceps curls": () =>
    import(
      "../assets/exercises/Biceps/Barbell standing wide grip biceps curls.webp"
    ),
  "Biceps/Barbell standing wide grip biceps curls1": () =>
    import(
      "../assets/exercises/Biceps/Barbell standing wide grip biceps curls1.webp"
    ),
  "Biceps/Biceps Curl Front Step": () =>
    import("../assets/exercises/Biceps/Biceps Curl Front Step.webp"),
  "Biceps/Biceps Curl Front Step1": () =>
    import("../assets/exercises/Biceps/Biceps Curl Front Step1.webp"),
  "Biceps/Biceps Leg Concentration Curl": () =>
    import("../assets/exercises/Biceps/Biceps Leg Concentration Curl.webp"),
  "Biceps/Biceps Leg Concentration Curl1": () =>
    import("../assets/exercises/Biceps/Biceps Leg Concentration Curl1.webp"),
  "Biceps/Cable Biceps Curl (EZ-bar)": () =>
    import("../assets/exercises/Biceps/Cable Biceps Curl (EZ-bar).webp"),
  "Biceps/Cable Biceps Curl (EZ-bar)1": () =>
    import("../assets/exercises/Biceps/Cable Biceps Curl (EZ-bar)1.webp"),
  "Biceps/Cable Close Grip Curl": () =>
    import("../assets/exercises/Biceps/Cable Close Grip Curl.webp"),
  "Biceps/Cable Close Grip Curl1": () =>
    import("../assets/exercises/Biceps/Cable Close Grip Curl1.webp"),
  "Biceps/Cable One Arm Curl": () =>
    import("../assets/exercises/Biceps/Cable One Arm Curl.webp"),
  "Biceps/Cable One Arm Curl1": () =>
    import("../assets/exercises/Biceps/Cable One Arm Curl1.webp"),
  "Biceps/Cable One Arm Inner Biceps Curl": () =>
    import("../assets/exercises/Biceps/Cable One Arm Inner Biceps Curl.webp"),
  "Biceps/Cable One Arm Inner Biceps Curl1": () =>
    import("../assets/exercises/Biceps/Cable One Arm Inner Biceps Curl1.webp"),
  "Biceps/Cable Overhead Curl": () =>
    import("../assets/exercises/Biceps/Cable Overhead Curl.webp"),
  "Biceps/Cable Overhead Curl1": () =>
    import("../assets/exercises/Biceps/Cable Overhead Curl1.webp"),
  "Biceps/Cable Preacher Curl": () =>
    import("../assets/exercises/Biceps/Cable Preacher Curl.webp"),
  "Biceps/Cable Preacher Curl1": () =>
    import("../assets/exercises/Biceps/Cable Preacher Curl1.webp"),
  "Biceps/Cable Twisting Curl_Female": () =>
    import("../assets/exercises/Biceps/Cable Twisting Curl_Female.webp"),
  "Biceps/Cable Twisting Curl_Female1": () =>
    import("../assets/exercises/Biceps/Cable Twisting Curl_Female1.webp"),
  "Biceps/Cable Twisting Curl_Male": () =>
    import("../assets/exercises/Biceps/Cable Twisting Curl_Male.webp"),
  "Biceps/Cable Twisting Curl_Male1": () =>
    import("../assets/exercises/Biceps/Cable Twisting Curl_Male1.webp"),
  "Biceps/Doorway Biceps Curl": () =>
    import("../assets/exercises/Biceps/Doorway Biceps Curl.webp"),
  "Biceps/Doorway Biceps Curl1": () =>
    import("../assets/exercises/Biceps/Doorway Biceps Curl1.webp"),
  "Biceps/Dumbbell Alternate Biceps Curl (VERSION 2)": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Alternate Biceps Curl (VERSION 2).webp"
    ),
  "Biceps/Dumbbell Alternate Biceps Curl (VERSION 2)1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Alternate Biceps Curl (VERSION 2)1.webp"
    ),
  "Biceps/Dumbbell Alternate Biceps Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Alternate Biceps Curl.webp"),
  "Biceps/Dumbbell Alternate Biceps Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Alternate Biceps Curl1.webp"),
  "Biceps/Dumbbell Alternate Seated Hammer Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Alternate Seated Hammer Curl.webp"
    ),
  "Biceps/Dumbbell Alternate Seated Hammer Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Alternate Seated Hammer Curl1.webp"
    ),
  "Biceps/Dumbbell Biceps Curl with Overhead Extension on Stability Ball": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Biceps Curl with Overhead Extension on Stability Ball.webp"
    ),
  "Biceps/Dumbbell Biceps Curl with Overhead Extension on Stability Ball1":
    () =>
      import(
        "../assets/exercises/Biceps/Dumbbell Biceps Curl with Overhead Extension on Stability Ball1.webp"
      ),
  "Biceps/Dumbbell Close-Grip Simultaneous Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Close-Grip Simultaneous Curl.webp"
    ),
  "Biceps/Dumbbell Close-Grip Simultaneous Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Close-Grip Simultaneous Curl1.webp"
    ),
  "Biceps/Dumbbell Cross Body Hammer Curl (Version 2)": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Cross Body Hammer Curl (Version 2).webp"
    ),
  "Biceps/Dumbbell Cross Body Hammer Curl (Version 2)1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Cross Body Hammer Curl (Version 2)1.webp"
    ),
  "Biceps/Dumbbell Drag Over Shoulder Bicep Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Drag Over Shoulder Bicep Curl.webp"
    ),
  "Biceps/Dumbbell Drag Over Shoulder Bicep Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Drag Over Shoulder Bicep Curl1.webp"
    ),
  "Biceps/Dumbbell Half Biceps Curl for 21s": () =>
    import("../assets/exercises/Biceps/Dumbbell Half Biceps Curl for 21s.webp"),
  "Biceps/Dumbbell Half Biceps Curl for 21s1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Half Biceps Curl for 21s1.webp"
    ),
  "Biceps/Dumbbell Hammer Curl Simultaneous Arms": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Hammer Curl Simultaneous Arms.webp"
    ),
  "Biceps/Dumbbell Hammer Curl Simultaneous Arms1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Hammer Curl Simultaneous Arms1.webp"
    ),
  "Biceps/Dumbbell Hammer Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Hammer Curl.webp"),
  "Biceps/Dumbbell Hammer Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Hammer Curl1.webp"),
  "Biceps/Dumbbell Hammer Preacher Curl Simultaneous Arms": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Hammer Preacher Curl Simultaneous Arms.webp"
    ),
  "Biceps/Dumbbell Hammer Preacher Curl Simultaneous Arms1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Hammer Preacher Curl Simultaneous Arms1.webp"
    ),
  "Biceps/Dumbbell Hammer Strict Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Hammer Strict Curl.webp"),
  "Biceps/Dumbbell Hammer Strict Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Hammer Strict Curl1.webp"),
  "Biceps/Dumbbell High Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell High Curl.webp"),
  "Biceps/Dumbbell High Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell High Curl1.webp"),
  "Biceps/Dumbbell Incline Alternate Bicep Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Alternate Bicep Curl.webp"
    ),
  "Biceps/Dumbbell Incline Alternate Bicep Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Alternate Bicep Curl1.webp"
    ),
  "Biceps/Dumbbell Incline Alternate Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Incline Alternate Curl.webp"),
  "Biceps/Dumbbell Incline Alternate Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Incline Alternate Curl1.webp"),
  "Biceps/Dumbbell Incline Alternate Hammer Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Alternate Hammer Curl.webp"
    ),
  "Biceps/Dumbbell Incline Alternate Hammer Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Alternate Hammer Curl1.webp"
    ),
  "Biceps/Dumbbell Incline Biceps Simultaneous Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Biceps Simultaneous Curl.webp"
    ),
  "Biceps/Dumbbell Incline Biceps Simultaneous Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Biceps Simultaneous Curl1.webp"
    ),
  "Biceps/Dumbbell Incline Hammer Simultaneous Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Hammer Simultaneous Curl.webp"
    ),
  "Biceps/Dumbbell Incline Hammer Simultaneous Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Hammer Simultaneous Curl1.webp"
    ),
  "Biceps/Dumbbell Incline Simultaneous Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Simultaneous Curl.webp"
    ),
  "Biceps/Dumbbell Incline Simultaneous Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Incline Simultaneous Curl1.webp"
    ),
  "Biceps/Dumbbell Lying Supine Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Lying Supine Curl.webp"),
  "Biceps/Dumbbell Lying Supine Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Lying Supine Curl1.webp"),
  "Biceps/Dumbbell One Arm Hammer Preacher Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Hammer Preacher Curl.webp"
    ),
  "Biceps/Dumbbell One Arm Hammer Preacher Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Hammer Preacher Curl1.webp"
    ),
  "Biceps/Dumbbell One Arm Reverse Preacher Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Reverse Preacher Curl.webp"
    ),
  "Biceps/Dumbbell One Arm Reverse Preacher Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Reverse Preacher Curl1.webp"
    ),
  "Biceps/Dumbbell One Arm Zottman Preacher Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Zottman Preacher Curl.webp"
    ),
  "Biceps/Dumbbell One Arm Zottman Preacher Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Zottman Preacher Curl1.webp"
    ),
  "Biceps/Dumbbell One Arm Zottman Preacher Curl2": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell One Arm Zottman Preacher Curl2.webp"
    ),
  "Biceps/Dumbbell Preacher Curl (Turned Torso)": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Preacher Curl (Turned Torso).webp"
    ),
  "Biceps/Dumbbell Preacher Curl (Turned Torso)1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Preacher Curl (Turned Torso)1.webp"
    ),
  "Biceps/Dumbbell Preacher Curl over Exercise Ball": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Preacher Curl over Exercise Ball.webp"
    ),
  "Biceps/Dumbbell Preacher Curl over Exercise Ball1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Preacher Curl over Exercise Ball1.webp"
    ),
  "Biceps/Dumbbell Preacher Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Preacher Curl.webp"),
  "Biceps/Dumbbell Preacher Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Preacher Curl1.webp"),
  "Biceps/Dumbbell Prone Incline Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Prone Incline Curl.webp"),
  "Biceps/Dumbbell Prone Incline Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Prone Incline Curl1.webp"),
  "Biceps/Dumbbell Prone Incline Hammer Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Prone Incline Hammer Curl.webp"
    ),
  "Biceps/Dumbbell Prone Incline Hammer Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Prone Incline Hammer Curl1.webp"
    ),
  "Biceps/Dumbbell Reverse Spider Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Reverse Spider Curl.webp"),
  "Biceps/Dumbbell Reverse Spider Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Reverse Spider Curl1.webp"),
  "Biceps/Dumbbell Reverse grip Biceps Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Reverse grip Biceps Curl.webp"),
  "Biceps/Dumbbell Reverse grip Biceps Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Reverse grip Biceps Curl1.webp"
    ),
  "Biceps/Dumbbell Seated Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Curl.webp"),
  "Biceps/Dumbbell Seated Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Curl1.webp"),
  "Biceps/Dumbbell Seated Hammer Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Hammer Curl.webp"),
  "Biceps/Dumbbell Seated Hammer Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Hammer Curl1.webp"),
  "Biceps/Dumbbell Seated Preacher Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Preacher Curl.webp"),
  "Biceps/Dumbbell Seated Preacher Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Seated Preacher Curl1.webp"),
  "Biceps/Dumbbell Seated Reverse grip Concentration Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Seated Reverse grip Concentration Curl.webp"
    ),
  "Biceps/Dumbbell Seated Reverse grip Concentration Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Seated Reverse grip Concentration Curl1.webp"
    ),
  "Biceps/Dumbbell Simultaneous Biceps Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Simultaneous Biceps Curl.webp"),
  "Biceps/Dumbbell Simultaneous Biceps Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Simultaneous Biceps Curl1.webp"
    ),
  "Biceps/Dumbbell Standing Concentration Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Concentration Curl.webp"
    ),
  "Biceps/Dumbbell Standing Concentration Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Concentration Curl1.webp"
    ),
  "Biceps/Dumbbell Standing Hammer Drag Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Hammer Drag Curl.webp"
    ),
  "Biceps/Dumbbell Standing Hammer Drag Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Hammer Drag Curl1.webp"
    ),
  "Biceps/Dumbbell Standing One Arm Concentration Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Concentration Curl.webp"
    ),
  "Biceps/Dumbbell Standing One Arm Concentration Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Concentration Curl1.webp"
    ),
  "Biceps/Dumbbell Standing One Arm Curl (over incline bench)": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Curl (over incline bench).webp"
    ),
  "Biceps/Dumbbell Standing One Arm Curl (over incline bench)1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Curl (over incline bench)1.webp"
    ),
  "Biceps/Dumbbell Standing One Arm Curl Over Incline Bench": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Curl Over Incline Bench.webp"
    ),
  "Biceps/Dumbbell Standing One Arm Curl Over Incline Bench1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing One Arm Curl Over Incline Bench1.webp"
    ),
  "Biceps/Dumbbell Standing Preacher Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Standing Preacher Curl.webp"),
  "Biceps/Dumbbell Standing Preacher Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Standing Preacher Curl1.webp"),
  "Biceps/Dumbbell Standing Reverse Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Standing Reverse Curl.webp"),
  "Biceps/Dumbbell Standing Reverse Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Standing Reverse Curl1.webp"),
  "Biceps/Dumbbell Standing Simultaneous Biceps Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Simultaneous Biceps Curl.webp"
    ),
  "Biceps/Dumbbell Standing Simultaneous Biceps Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Simultaneous Biceps Curl1.webp"
    ),
  "Biceps/Dumbbell Standing Wide Simultaneous Biceps Curl": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Wide Simultaneous Biceps Curl.webp"
    ),
  "Biceps/Dumbbell Standing Wide Simultaneous Biceps Curl1": () =>
    import(
      "../assets/exercises/Biceps/Dumbbell Standing Wide Simultaneous Biceps Curl1.webp"
    ),
  "Biceps/Dumbbell Strict Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Strict Curl.webp"),
  "Biceps/Dumbbell Strict Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Strict Curl1.webp"),
  "Biceps/Dumbbell Waiter Biceps Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Waiter Biceps Curl.webp"),
  "Biceps/Dumbbell Waiter Biceps Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Waiter Biceps Curl1.webp"),
  "Biceps/Dumbbell Zottman Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Zottman Curl.webp"),
  "Biceps/Dumbbell Zottman Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Zottman Curl1.webp"),
  "Biceps/Dumbbell Zottman Preacher Curl": () =>
    import("../assets/exercises/Biceps/Dumbbell Zottman Preacher Curl.webp"),
  "Biceps/Dumbbell Zottman Preacher Curl1": () =>
    import("../assets/exercises/Biceps/Dumbbell Zottman Preacher Curl1.webp"),
  "Biceps/EZ Barbell Close grip Curl": () =>
    import("../assets/exercises/Biceps/EZ Barbell Close grip Curl.webp"),
  "Biceps/EZ Barbell Close grip Curl1": () =>
    import("../assets/exercises/Biceps/EZ Barbell Close grip Curl1.webp"),
  "Biceps/EZ Barbell Curl": () =>
    import("../assets/exercises/Biceps/EZ Barbell Curl.webp"),
  "Biceps/EZ Barbell Curl1": () =>
    import("../assets/exercises/Biceps/EZ Barbell Curl1.webp"),
  "Biceps/Ez bar biceps curl close grip": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl close grip.webp"),
  "Biceps/Ez bar biceps curl close grip1": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl close grip1.webp"),
  "Biceps/Ez bar biceps curl normal grip": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl normal grip.webp"),
  "Biceps/Ez bar biceps curl normal grip1": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl normal grip1.webp"),
  "Biceps/Ez bar biceps curl wide grip": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl wide grip.webp"),
  "Biceps/Ez bar biceps curl wide grip1": () =>
    import("../assets/exercises/Biceps/Ez bar biceps curl wide grip1.webp"),
  "Biceps/Ez bar cable curl wide grip": () =>
    import("../assets/exercises/Biceps/Ez bar cable curl wide grip.webp"),
  "Biceps/Ez bar cable curl wide grip1": () =>
    import("../assets/exercises/Biceps/Ez bar cable curl wide grip1.webp"),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Alternate Arm_Female":
    () =>
      import(
        "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Alternate Arm_Female.webp"
      ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Alternate Arm_Female1":
    () =>
      import(
        "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Alternate Arm_Female1.webp"
      ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Arm Alternating": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Arm Alternating.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Arm Alternating1": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Arm Alternating1.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm1": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm1.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm_Female": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm_Female.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm_Female1": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Both Arm_Female1.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm1": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm1.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm_Female": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm_Female.webp"
    ),
  "Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm_Female1": () =>
    import(
      "../assets/exercises/Biceps/Hammer Strength MTS Iso-Lateral Biceps Curl Single Arm_Female1.webp"
    ),
  "Biceps/Single Dumbbell Biceps Curls": () =>
    import("../assets/exercises/Biceps/Single Dumbbell Biceps Curls.webp"),
  "Biceps/Single Dumbbell Biceps Curls1": () =>
    import("../assets/exercises/Biceps/Single Dumbbell Biceps Curls1.webp"),
  "Biceps/alternate bicep curl standing dumbbells": () =>
    import(
      "../assets/exercises/Biceps/alternate bicep curl standing dumbbells.webp"
    ),
  "Biceps/alternate bicep curl standing dumbbells1": () =>
    import(
      "../assets/exercises/Biceps/alternate bicep curl standing dumbbells1.webp"
    ),
  "Biceps/alternate biceps curl resistance band": () =>
    import(
      "../assets/exercises/Biceps/alternate biceps curl resistance band.webp"
    ),
  "Biceps/alternate biceps curl resistance band1": () =>
    import(
      "../assets/exercises/Biceps/alternate biceps curl resistance band1.webp"
    ),
  "Biceps/alternate hammer curl seated dumbbells": () =>
    import(
      "../assets/exercises/Biceps/alternate hammer curl seated dumbbells.webp"
    ),
  "Biceps/alternate hammer curl seated dumbbells1": () =>
    import(
      "../assets/exercises/Biceps/alternate hammer curl seated dumbbells1.webp"
    ),
  "Biceps/alternate hammer curl standing dumbbells": () =>
    import(
      "../assets/exercises/Biceps/alternate hammer curl standing dumbbells.webp"
    ),
  "Biceps/alternate hammer curl standing dumbbells1": () =>
    import(
      "../assets/exercises/Biceps/alternate hammer curl standing dumbbells1.webp"
    ),
  "Biceps/alternate incline dumbbell curl": () =>
    import("../assets/exercises/Biceps/alternate incline dumbbell curl.webp"),
  "Biceps/alternate incline dumbbell curl1": () =>
    import("../assets/exercises/Biceps/alternate incline dumbbell curl1.webp"),
  "Biceps/alternating biceps curl seated dumbbells": () =>
    import(
      "../assets/exercises/Biceps/alternating biceps curl seated dumbbells.webp"
    ),
  "Biceps/alternating biceps curl seated dumbbells1": () =>
    import(
      "../assets/exercises/Biceps/alternating biceps curl seated dumbbells1.webp"
    ),
  "Biceps/alternating biceps hammer curls resistance band": () =>
    import(
      "../assets/exercises/Biceps/alternating biceps hammer curls resistance band.webp"
    ),
  "Biceps/alternating biceps hammer curls resistance band1": () =>
    import(
      "../assets/exercises/Biceps/alternating biceps hammer curls resistance band1.webp"
    ),
  "Biceps/alternating hammer curls seated dumbbells": () =>
    import(
      "../assets/exercises/Biceps/alternating hammer curls seated dumbbells.webp"
    ),
  "Biceps/alternating hammer curls seated dumbbells1": () =>
    import(
      "../assets/exercises/Biceps/alternating hammer curls seated dumbbells1.webp"
    ),
  "Biceps/band kneeling preacher curl_female": () =>
    import(
      "../assets/exercises/Biceps/band kneeling preacher curl_female.webp"
    ),
  "Biceps/band kneeling preacher curl_female1": () =>
    import(
      "../assets/exercises/Biceps/band kneeling preacher curl_female1.webp"
    ),
  "Biceps/barbell bicep curl close grip": () =>
    import("../assets/exercises/Biceps/barbell bicep curl close grip.webp"),
  "Biceps/barbell bicep curl close grip1": () =>
    import("../assets/exercises/Biceps/barbell bicep curl close grip1.webp"),
  "Biceps/barbell bicep curl normal grip": () =>
    import("../assets/exercises/Biceps/barbell bicep curl normal grip.webp"),
  "Biceps/barbell bicep curl normal grip1": () =>
    import("../assets/exercises/Biceps/barbell bicep curl normal grip1.webp"),
  "Biceps/barbell bicep curl wide grip": () =>
    import("../assets/exercises/Biceps/barbell bicep curl wide grip.webp"),
  "Biceps/barbell bicep curl wide grip1": () =>
    import("../assets/exercises/Biceps/barbell bicep curl wide grip1.webp"),
  "Biceps/barbell biceps curl": () =>
    import("../assets/exercises/Biceps/barbell biceps curl.webp"),
  "Biceps/barbell biceps curl1": () =>
    import("../assets/exercises/Biceps/barbell biceps curl1.webp"),
  "Biceps/barbell drag biceps curl": () =>
    import("../assets/exercises/Biceps/barbell drag biceps curl.webp"),
  "Biceps/barbell drag biceps curl1": () =>
    import("../assets/exercises/Biceps/barbell drag biceps curl1.webp"),
  "Biceps/barbell drag curl": () =>
    import("../assets/exercises/Biceps/barbell drag curl.webp"),
  "Biceps/barbell drag curl1": () =>
    import("../assets/exercises/Biceps/barbell drag curl1.webp"),
  "Biceps/barbell lap curl": () =>
    import("../assets/exercises/Biceps/barbell lap curl.webp"),
  "Biceps/barbell lap curl1": () =>
    import("../assets/exercises/Biceps/barbell lap curl1.webp"),
  "Biceps/barbell wide grip biceps curl": () =>
    import("../assets/exercises/Biceps/barbell wide grip biceps curl.webp"),
  "Biceps/barbell wide grip biceps curl1": () =>
    import("../assets/exercises/Biceps/barbell wide grip biceps curl1.webp"),
  "Biceps/bicep curl low cable machine normal grip": () =>
    import(
      "../assets/exercises/Biceps/bicep curl low cable machine normal grip.webp"
    ),
  "Biceps/bicep curl low cable machine normal grip1": () =>
    import(
      "../assets/exercises/Biceps/bicep curl low cable machine normal grip1.webp"
    ),
  "Biceps/biceps curl cable wide grip crossover machine": () =>
    import(
      "../assets/exercises/Biceps/biceps curl cable wide grip crossover machine.webp"
    ),
  "Biceps/biceps curl cable wide grip crossover machine1": () =>
    import(
      "../assets/exercises/Biceps/biceps curl cable wide grip crossover machine1.webp"
    ),
  "Biceps/biceps curl cable wide grip": () =>
    import("../assets/exercises/Biceps/biceps curl cable wide grip.webp"),
  "Biceps/biceps curl cable wide grip1": () =>
    import("../assets/exercises/Biceps/biceps curl cable wide grip1.webp"),
  "Biceps/biceps curl cable": () =>
    import("../assets/exercises/Biceps/biceps curl cable.webp"),
  "Biceps/biceps curl cable1": () =>
    import("../assets/exercises/Biceps/biceps curl cable1.webp"),
  "Biceps/biceps curl resistance band": () =>
    import("../assets/exercises/Biceps/biceps curl resistance band.webp"),
  "Biceps/biceps curl resistance band1": () =>
    import("../assets/exercises/Biceps/biceps curl resistance band1.webp"),
  "Biceps/biceps curl to shoulder press resistance band": () =>
    import(
      "../assets/exercises/Biceps/biceps curl to shoulder press resistance band.webp"
    ),
  "Biceps/biceps curl to shoulder press resistance band1": () =>
    import(
      "../assets/exercises/Biceps/biceps curl to shoulder press resistance band1.webp"
    ),
  "Biceps/biceps curl to shoulder press resistance band2": () =>
    import(
      "../assets/exercises/Biceps/biceps curl to shoulder press resistance band2.webp"
    ),
  "Biceps/cable reverse curl": () =>
    import("../assets/exercises/Biceps/cable reverse curl.webp"),
  "Biceps/cable reverse curl1": () =>
    import("../assets/exercises/Biceps/cable reverse curl1.webp"),
  "Biceps/concentration curls dumbbell": () =>
    import("../assets/exercises/Biceps/concentration curls dumbbell.webp"),
  "Biceps/concentration curls dumbbell1": () =>
    import("../assets/exercises/Biceps/concentration curls dumbbell1.webp"),
  "Biceps/drag curl dumbbell": () =>
    import("../assets/exercises/Biceps/drag curl dumbbell.webp"),
  "Biceps/drag curl dumbbell1": () =>
    import("../assets/exercises/Biceps/drag curl dumbbell1.webp"),
  "Biceps/drag curl resistance band": () =>
    import("../assets/exercises/Biceps/drag curl resistance band.webp"),
  "Biceps/drag curl resistance band1": () =>
    import("../assets/exercises/Biceps/drag curl resistance band1.webp"),
  "Biceps/dumbbell curls supination grip": () =>
    import("../assets/exercises/Biceps/dumbbell curls supination grip.webp"),
  "Biceps/dumbbell curls supination grip1": () =>
    import("../assets/exercises/Biceps/dumbbell curls supination grip1.webp"),
  "Biceps/dumbbell curls": () =>
    import("../assets/exercises/Biceps/dumbbell curls.webp"),
  "Biceps/dumbbell curls1": () =>
    import("../assets/exercises/Biceps/dumbbell curls1.webp"),
  "Biceps/ez bar cable curl wide grip crossover machine": () =>
    import(
      "../assets/exercises/Biceps/ez bar cable curl wide grip crossover machine.webp"
    ),
  "Biceps/ez bar cable curl wide grip crossover machine1": () =>
    import(
      "../assets/exercises/Biceps/ez bar cable curl wide grip crossover machine1.webp"
    ),
  "Biceps/hammer curl dumbbells simultaneous": () =>
    import(
      "../assets/exercises/Biceps/hammer curl dumbbells simultaneous.webp"
    ),
  "Biceps/hammer curl dumbbells simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/hammer curl dumbbells simultaneous1.webp"
    ),
  "Biceps/hammer curl resistance band simultaneous": () =>
    import(
      "../assets/exercises/Biceps/hammer curl resistance band simultaneous.webp"
    ),
  "Biceps/hammer curl resistance band simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/hammer curl resistance band simultaneous1.webp"
    ),
  "Biceps/incline bench hammer curls": () =>
    import("../assets/exercises/Biceps/incline bench hammer curls.webp"),
  "Biceps/incline bench hammer curls1": () =>
    import("../assets/exercises/Biceps/incline bench hammer curls1.webp"),
  "Biceps/low resistance band lying bicep curl half rep": () =>
    import(
      "../assets/exercises/Biceps/low resistance band lying bicep curl half rep.webp"
    ),
  "Biceps/low resistance band lying bicep curl half rep1": () =>
    import(
      "../assets/exercises/Biceps/low resistance band lying bicep curl half rep1.webp"
    ),
  "Biceps/low resistance band lying bicep curl": () =>
    import(
      "../assets/exercises/Biceps/low resistance band lying bicep curl.webp"
    ),
  "Biceps/low resistance band lying bicep curl1": () =>
    import(
      "../assets/exercises/Biceps/low resistance band lying bicep curl1.webp"
    ),
  "Biceps/preacher curl barbell": () =>
    import("../assets/exercises/Biceps/preacher curl barbell.webp"),
  "Biceps/preacher curl barbell1": () =>
    import("../assets/exercises/Biceps/preacher curl barbell1.webp"),
  "Biceps/preacher curl dumbbells simultaneous": () =>
    import(
      "../assets/exercises/Biceps/preacher curl dumbbells simultaneous.webp"
    ),
  "Biceps/preacher curl dumbbells simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/preacher curl dumbbells simultaneous1.webp"
    ),
  "Biceps/preacher curl ez bar close grip": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar close grip.webp"),
  "Biceps/preacher curl ez bar close grip1": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar close grip1.webp"),
  "Biceps/preacher curl ez bar wide grip": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar wide grip.webp"),
  "Biceps/preacher curl ez bar wide grip1": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar wide grip1.webp"),
  "Biceps/preacher curl ez bar": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar.webp"),
  "Biceps/preacher curl ez bar1": () =>
    import("../assets/exercises/Biceps/preacher curl ez bar1.webp"),
  "Biceps/preacher curl single arm dumbbell": () =>
    import("../assets/exercises/Biceps/preacher curl single arm dumbbell.webp"),
  "Biceps/preacher curl single arm dumbbell1": () =>
    import(
      "../assets/exercises/Biceps/preacher curl single arm dumbbell1.webp"
    ),
  "Biceps/preacher hammer curl simultaneous": () =>
    import("../assets/exercises/Biceps/preacher hammer curl simultaneous.webp"),
  "Biceps/preacher hammer curl simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/preacher hammer curl simultaneous1.webp"
    ),
  "Biceps/reverse curl barbell": () =>
    import("../assets/exercises/Biceps/reverse curl barbell.webp"),
  "Biceps/reverse curl barbell1": () =>
    import("../assets/exercises/Biceps/reverse curl barbell1.webp"),
  "Biceps/reverse curl dumbbell simultaneous": () =>
    import(
      "../assets/exercises/Biceps/reverse curl dumbbell simultaneous.webp"
    ),
  "Biceps/reverse curl dumbbell simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/reverse curl dumbbell simultaneous1.webp"
    ),
  "Biceps/reverse grip resistance band simultaneous": () =>
    import(
      "../assets/exercises/Biceps/reverse grip resistance band simultaneous.webp"
    ),
  "Biceps/reverse grip resistance band simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/reverse grip resistance band simultaneous1.webp"
    ),
  "Biceps/single arm preacher hammer curl": () =>
    import("../assets/exercises/Biceps/single arm preacher hammer curl.webp"),
  "Biceps/single arm preacher hammer curl1": () =>
    import("../assets/exercises/Biceps/single arm preacher hammer curl1.webp"),
  "Biceps/spider curl barbell": () =>
    import("../assets/exercises/Biceps/spider curl barbell.webp"),
  "Biceps/spider curl barbell1": () =>
    import("../assets/exercises/Biceps/spider curl barbell1.webp"),
  "Biceps/spider curl dumbbells simultaneous": () =>
    import(
      "../assets/exercises/Biceps/spider curl dumbbells simultaneous.webp"
    ),
  "Biceps/spider curl dumbbells simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/spider curl dumbbells simultaneous1.webp"
    ),
  "Biceps/spider curl ez bar": () =>
    import("../assets/exercises/Biceps/spider curl ez bar.webp"),
  "Biceps/spider curl ez bar1": () =>
    import("../assets/exercises/Biceps/spider curl ez bar1.webp"),
  "Biceps/zotman curls dumbbell simultaneous": () =>
    import(
      "../assets/exercises/Biceps/zotman curls dumbbell simultaneous.webp"
    ),
  "Biceps/zotman curls dumbbell simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/zotman curls dumbbell simultaneous1.webp"
    ),
  "Biceps/zotman curls resistance band simultaneous": () =>
    import(
      "../assets/exercises/Biceps/zotman curls resistance band simultaneous.webp"
    ),
  "Biceps/zotman curls resistance band simultaneous1": () =>
    import(
      "../assets/exercises/Biceps/zotman curls resistance band simultaneous1.webp"
    ),
  "Cardio-Functional/180 Jump Turns_Female": () =>
    import("../assets/exercises/Cardio-Functional/180 Jump Turns_Female.webp"),
  "Cardio-Functional/180 Jump Turns_Female1": () =>
    import("../assets/exercises/Cardio-Functional/180 Jump Turns_Female1.webp"),
  "Cardio-Functional/3 Leg Chatarunga Pose_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/3 Leg Chatarunga Pose_female.webp"
    ),
  "Cardio-Functional/3 Leg Chatarunga Pose_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/3 Leg Chatarunga Pose_female1.webp"
    ),
  "Cardio-Functional/3 Leg Dog Pose_female": () =>
    import("../assets/exercises/Cardio-Functional/3 Leg Dog Pose_female.webp"),
  "Cardio-Functional/3 Leg Dog Pose_female1": () =>
    import("../assets/exercises/Cardio-Functional/3 Leg Dog Pose_female1.webp"),
  "Cardio-Functional/4 Corners Curtsy_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Corners Curtsy_female.webp"
    ),
  "Cardio-Functional/4 Corners Curtsy_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Corners Curtsy_female1.webp"
    ),
  "Cardio-Functional/4 Corners Side Step_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Corners Side Step_female.webp"
    ),
  "Cardio-Functional/4 Corners Side Step_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Corners Side Step_female1.webp"
    ),
  "Cardio-Functional/4 Punches Side Squat_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Punches Side Squat_female.webp"
    ),
  "Cardio-Functional/4 Punches Side Squat_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/4 Punches Side Squat_female1.webp"
    ),
  "Cardio-Functional/Air Swing Running": () =>
    import("../assets/exercises/Cardio-Functional/Air Swing Running.webp"),
  "Cardio-Functional/Air Swing Running1": () =>
    import("../assets/exercises/Cardio-Functional/Air Swing Running1.webp"),
  "Cardio-Functional/Air Swing Running_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Running_Female.webp"
    ),
  "Cardio-Functional/Air Swing Running_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Running_Female1.webp"
    ),
  "Cardio-Functional/Air Swing Side To Side Swing Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Side To Side Swing Female.webp"
    ),
  "Cardio-Functional/Air Swing Side To Side Swing Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Side To Side Swing Female1.webp"
    ),
  "Cardio-Functional/Air Swing Side To Side Swing": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Side To Side Swing.webp"
    ),
  "Cardio-Functional/Air Swing Side To Side Swing1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Side To Side Swing1.webp"
    ),
  "Cardio-Functional/Air Swing Walking Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Walking Female.webp"
    ),
  "Cardio-Functional/Air Swing Walking Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Air Swing Walking Female1.webp"
    ),
  "Cardio-Functional/Air Swing Walking": () =>
    import("../assets/exercises/Cardio-Functional/Air Swing Walking.webp"),
  "Cardio-Functional/Air Swing Walking1": () =>
    import("../assets/exercises/Cardio-Functional/Air Swing Walking1.webp"),
  "Cardio-Functional/Air punches March": () =>
    import("../assets/exercises/Cardio-Functional/Air punches March.webp"),
  "Cardio-Functional/Air punches March1": () =>
    import("../assets/exercises/Cardio-Functional/Air punches March1.webp"),
  "Cardio-Functional/Alternating Hamstring Curl": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating Hamstring Curl.webp"
    ),
  "Cardio-Functional/Alternating Hamstring Curl1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating Hamstring Curl1.webp"
    ),
  "Cardio-Functional/Alternating hamstring curl with punch": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating hamstring curl with punch.webp"
    ),
  "Cardio-Functional/Alternating hamstring curl with punch1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating hamstring curl with punch1.webp"
    ),
  "Cardio-Functional/Alternating leg downward dog": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating leg downward dog.webp"
    ),
  "Cardio-Functional/Alternating leg downward dog1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Alternating leg downward dog1.webp"
    ),
  "Cardio-Functional/Ankle circles": () =>
    import("../assets/exercises/Cardio-Functional/Ankle circles.webp"),
  "Cardio-Functional/Ankle circles1": () =>
    import("../assets/exercises/Cardio-Functional/Ankle circles1.webp"),
  "Cardio-Functional/Arm crossover chest out": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arm crossover chest out.webp"
    ),
  "Cardio-Functional/Arm crossover chest out1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arm crossover chest out1.webp"
    ),
  "Cardio-Functional/Arm crossover": () =>
    import("../assets/exercises/Cardio-Functional/Arm crossover.webp"),
  "Cardio-Functional/Arm crossover1": () =>
    import("../assets/exercises/Cardio-Functional/Arm crossover1.webp"),
  "Cardio-Functional/Arm double crossover": () =>
    import("../assets/exercises/Cardio-Functional/Arm double crossover.webp"),
  "Cardio-Functional/Arm double crossover1": () =>
    import("../assets/exercises/Cardio-Functional/Arm double crossover1.webp"),
  "Cardio-Functional/Arms Lateral Raise And Rotation Up": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arms Lateral Raise And Rotation Up.webp"
    ),
  "Cardio-Functional/Arms Lateral Raise And Rotation Up1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arms Lateral Raise And Rotation Up1.webp"
    ),
  "Cardio-Functional/Arms Lateral Raise And Rotation Up_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arms Lateral Raise And Rotation Up_Female.webp"
    ),
  "Cardio-Functional/Arms Lateral Raise And Rotation Up_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Arms Lateral Raise And Rotation Up_Female1.webp"
    ),
  "Cardio-Functional/Arms up and down": () =>
    import("../assets/exercises/Cardio-Functional/Arms up and down.webp"),
  "Cardio-Functional/Arms up and down1": () =>
    import("../assets/exercises/Cardio-Functional/Arms up and down1.webp"),
  "Cardio-Functional/Assault AirBike Fast Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Assault AirBike Fast Speed.webp"
    ),
  "Cardio-Functional/Assault AirBike Fast Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Assault AirBike Fast Speed1.webp"
    ),
  "Cardio-Functional/Back lever": () =>
    import("../assets/exercises/Cardio-Functional/Back lever.webp"),
  "Cardio-Functional/Back lever1": () =>
    import("../assets/exercises/Cardio-Functional/Back lever1.webp"),
  "Cardio-Functional/Back lever_female": () =>
    import("../assets/exercises/Cardio-Functional/Back lever_female.webp"),
  "Cardio-Functional/Back lever_female1": () =>
    import("../assets/exercises/Cardio-Functional/Back lever_female1.webp"),
  "Cardio-Functional/Balance board lateral squat": () =>
    import(
      "../assets/exercises/Cardio-Functional/Balance board lateral squat.webp"
    ),
  "Cardio-Functional/Balance board lateral squat1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Balance board lateral squat1.webp"
    ),
  "Cardio-Functional/Ball Slams": () =>
    import("../assets/exercises/Cardio-Functional/Ball Slams.webp"),
  "Cardio-Functional/Ball Slams1": () =>
    import("../assets/exercises/Cardio-Functional/Ball Slams1.webp"),
  "Cardio-Functional/Ball Slams_Female": () =>
    import("../assets/exercises/Cardio-Functional/Ball Slams_Female.webp"),
  "Cardio-Functional/Ball Slams_Female1": () =>
    import("../assets/exercises/Cardio-Functional/Ball Slams_Female1.webp"),
  "Cardio-Functional/Balloon Drill_female": () =>
    import("../assets/exercises/Cardio-Functional/Balloon Drill_female.webp"),
  "Cardio-Functional/Balloon Drill_female1": () =>
    import("../assets/exercises/Cardio-Functional/Balloon Drill_female1.webp"),
  "Cardio-Functional/Band Squat Row": () =>
    import("../assets/exercises/Cardio-Functional/Band Squat Row.webp"),
  "Cardio-Functional/Band Squat Row1": () =>
    import("../assets/exercises/Cardio-Functional/Band Squat Row1.webp"),
  "Cardio-Functional/Band Squat Row_Female": () =>
    import("../assets/exercises/Cardio-Functional/Band Squat Row_Female.webp"),
  "Cardio-Functional/Band Squat Row_Female1": () =>
    import("../assets/exercises/Cardio-Functional/Band Squat Row_Female1.webp"),
  "Cardio-Functional/Barbell Jump Shrug_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Barbell Jump Shrug_Female.webp"
    ),
  "Cardio-Functional/Barbell Jump Shrug_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Barbell Jump Shrug_Female1.webp"
    ),
  "Cardio-Functional/Basic Toe Touch": () =>
    import("../assets/exercises/Cardio-Functional/Basic Toe Touch.webp"),
  "Cardio-Functional/Basic Toe Touch1": () =>
    import("../assets/exercises/Cardio-Functional/Basic Toe Touch1.webp"),
  "Cardio-Functional/Basketball Shot Jump": () =>
    import("../assets/exercises/Cardio-Functional/Basketball Shot Jump.webp"),
  "Cardio-Functional/Basketball Shot Jump1": () =>
    import("../assets/exercises/Cardio-Functional/Basketball Shot Jump1.webp"),
  "Cardio-Functional/Battle Rope Alternating Arm Waves": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Alternating Arm Waves.webp"
    ),
  "Cardio-Functional/Battle Rope Alternating Arm Waves1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Alternating Arm Waves1.webp"
    ),
  "Cardio-Functional/Battle Rope Alternating Arm Waves_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Alternating Arm Waves_Female.webp"
    ),
  "Cardio-Functional/Battle Rope Alternating Arm Waves_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Alternating Arm Waves_Female1.webp"
    ),
  "Cardio-Functional/Battle Rope Double Arm Slams": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Double Arm Slams.webp"
    ),
  "Cardio-Functional/Battle Rope Double Arm Slams1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Double Arm Slams1.webp"
    ),
  "Cardio-Functional/Battle Rope Double Arm Slams_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Double Arm Slams_Female.webp"
    ),
  "Cardio-Functional/Battle Rope Double Arm Slams_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Battle Rope Double Arm Slams_Female1.webp"
    ),
  "Cardio-Functional/Bear crawls": () =>
    import("../assets/exercises/Cardio-Functional/Bear crawls.webp"),
  "Cardio-Functional/Bear crawls1": () =>
    import("../assets/exercises/Cardio-Functional/Bear crawls1.webp"),
  "Cardio-Functional/Bear crawls_Female": () =>
    import("../assets/exercises/Cardio-Functional/Bear crawls_Female.webp"),
  "Cardio-Functional/Bear crawls_Female1": () =>
    import("../assets/exercises/Cardio-Functional/Bear crawls_Female1.webp"),
  "Cardio-Functional/Bent Over Twist": () =>
    import("../assets/exercises/Cardio-Functional/Bent Over Twist.webp"),
  "Cardio-Functional/Bent Over Twist1": () =>
    import("../assets/exercises/Cardio-Functional/Bent Over Twist1.webp"),
  "Cardio-Functional/Body Slide": () =>
    import("../assets/exercises/Cardio-Functional/Body Slide.webp"),
  "Cardio-Functional/Body Slide1": () =>
    import("../assets/exercises/Cardio-Functional/Body Slide1.webp"),
  "Cardio-Functional/Body Throw": () =>
    import("../assets/exercises/Cardio-Functional/Body Throw.webp"),
  "Cardio-Functional/Body Throw1": () =>
    import("../assets/exercises/Cardio-Functional/Body Throw1.webp"),
  "Cardio-Functional/Bodyweight Front Slam": () =>
    import("../assets/exercises/Cardio-Functional/Bodyweight Front Slam.webp"),
  "Cardio-Functional/Bodyweight Front Slam1": () =>
    import("../assets/exercises/Cardio-Functional/Bodyweight Front Slam1.webp"),
  "Cardio-Functional/Bodyweight Knee Thrust": () =>
    import("../assets/exercises/Cardio-Functional/Bodyweight Knee Thrust.webp"),
  "Cardio-Functional/Bodyweight Knee Thrust1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight Knee Thrust1.webp"
    ),
  "Cardio-Functional/Bodyweight Standing Triangle Fly": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight Standing Triangle Fly.webp"
    ),
  "Cardio-Functional/Bodyweight Standing Triangle Fly1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight Standing Triangle Fly1.webp"
    ),
  "Cardio-Functional/Bodyweight Windmill Cut": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight Windmill Cut.webp"
    ),
  "Cardio-Functional/Bodyweight Windmill Cut1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight Windmill Cut1.webp"
    ),
  "Cardio-Functional/Bodyweight Windmill": () =>
    import("../assets/exercises/Cardio-Functional/Bodyweight Windmill.webp"),
  "Cardio-Functional/Bodyweight Windmill1": () =>
    import("../assets/exercises/Cardio-Functional/Bodyweight Windmill1.webp"),
  "Cardio-Functional/Bodyweight knee to hand tap": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight knee to hand tap.webp"
    ),
  "Cardio-Functional/Bodyweight knee to hand tap1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bodyweight knee to hand tap1.webp"
    ),
  "Cardio-Functional/Bouncing Circle Draw": () =>
    import("../assets/exercises/Cardio-Functional/Bouncing Circle Draw.webp"),
  "Cardio-Functional/Bouncing Circle Draw1": () =>
    import("../assets/exercises/Cardio-Functional/Bouncing Circle Draw1.webp"),
  "Cardio-Functional/Bouncing Inner Thigh Tap": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bouncing Inner Thigh Tap.webp"
    ),
  "Cardio-Functional/Bouncing Inner Thigh Tap1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Bouncing Inner Thigh Tap1.webp"
    ),
  "Cardio-Functional/Boxing Left Hook": () =>
    import("../assets/exercises/Cardio-Functional/Boxing Left Hook.webp"),
  "Cardio-Functional/Boxing Left Hook1": () =>
    import("../assets/exercises/Cardio-Functional/Boxing Left Hook1.webp"),
  "Cardio-Functional/Boxing Right Uppercut": () =>
    import("../assets/exercises/Cardio-Functional/Boxing Right Uppercut.webp"),
  "Cardio-Functional/Boxing Right Uppercut1": () =>
    import("../assets/exercises/Cardio-Functional/Boxing Right Uppercut1.webp"),
  "Cardio-Functional/Boxing left uppercut": () =>
    import("../assets/exercises/Cardio-Functional/Boxing left uppercut.webp"),
  "Cardio-Functional/Boxing left uppercut1": () =>
    import("../assets/exercises/Cardio-Functional/Boxing left uppercut1.webp"),
  "Cardio-Functional/Boxing right cross": () =>
    import("../assets/exercises/Cardio-Functional/Boxing right cross.webp"),
  "Cardio-Functional/Boxing right cross1": () =>
    import("../assets/exercises/Cardio-Functional/Boxing right cross1.webp"),
  "Cardio-Functional/Boxing right hook": () =>
    import("../assets/exercises/Cardio-Functional/Boxing right hook.webp"),
  "Cardio-Functional/Boxing right hook1": () =>
    import("../assets/exercises/Cardio-Functional/Boxing right hook1.webp"),
  "Cardio-Functional/Briskly Walking (360 degrees)": () =>
    import(
      "../assets/exercises/Cardio-Functional/Briskly Walking (360 degrees).webp"
    ),
  "Cardio-Functional/Briskly Walking (360 degrees)1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Briskly Walking (360 degrees)1.webp"
    ),
  "Cardio-Functional/Briskly Walking": () =>
    import("../assets/exercises/Cardio-Functional/Briskly Walking.webp"),
  "Cardio-Functional/Briskly Walking1": () =>
    import("../assets/exercises/Cardio-Functional/Briskly Walking1.webp"),
  "Cardio-Functional/Burpee  ": () =>
    import("../assets/exercises/Cardio-Functional/Burpee  .webp"),
  "Cardio-Functional/Burpee  1": () =>
    import("../assets/exercises/Cardio-Functional/Burpee  1.webp"),
  "Cardio-Functional/Burpee": () =>
    import("../assets/exercises/Cardio-Functional/Burpee.webp"),
  "Cardio-Functional/Burpee1": () =>
    import("../assets/exercises/Cardio-Functional/Burpee1.webp"),
  "Cardio-Functional/Butt Kick with Row": () =>
    import("../assets/exercises/Cardio-Functional/Butt Kick with Row.webp"),
  "Cardio-Functional/Butt Kick with Row1": () =>
    import("../assets/exercises/Cardio-Functional/Butt Kick with Row1.webp"),
  "Cardio-Functional/Butt Kicks": () =>
    import("../assets/exercises/Cardio-Functional/Butt Kicks.webp"),
  "Cardio-Functional/Butt Kicks1": () =>
    import("../assets/exercises/Cardio-Functional/Butt Kicks1.webp"),
  "Cardio-Functional/Butt kicks  ": () =>
    import("../assets/exercises/Cardio-Functional/Butt kicks  .webp"),
  "Cardio-Functional/Butt kicks  1": () =>
    import("../assets/exercises/Cardio-Functional/Butt kicks  1.webp"),
  "Cardio-Functional/Butt kicks slow  ": () =>
    import("../assets/exercises/Cardio-Functional/Butt kicks slow  .webp"),
  "Cardio-Functional/Butt kicks slow  1": () =>
    import("../assets/exercises/Cardio-Functional/Butt kicks slow  1.webp"),
  "Cardio-Functional/Cable twisting overhead press": () =>
    import(
      "../assets/exercises/Cardio-Functional/Cable twisting overhead press.webp"
    ),
  "Cardio-Functional/Cable twisting overhead press1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Cable twisting overhead press1.webp"
    ),
  "Cardio-Functional/Cardio Lunge": () =>
    import("../assets/exercises/Cardio-Functional/Cardio Lunge.webp"),
  "Cardio-Functional/Cardio Lunge1": () =>
    import("../assets/exercises/Cardio-Functional/Cardio Lunge1.webp"),
  "Cardio-Functional/Celebratory Hip Thrust": () =>
    import("../assets/exercises/Cardio-Functional/Celebratory Hip Thrust.webp"),
  "Cardio-Functional/Celebratory Hip Thrust1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Celebratory Hip Thrust1.webp"
    ),
  "Cardio-Functional/Chest Fly Side Step": () =>
    import("../assets/exercises/Cardio-Functional/Chest Fly Side Step.webp"),
  "Cardio-Functional/Chest Fly Side Step1": () =>
    import("../assets/exercises/Cardio-Functional/Chest Fly Side Step1.webp"),
  "Cardio-Functional/Chest Pull Back": () =>
    import("../assets/exercises/Cardio-Functional/Chest Pull Back.webp"),
  "Cardio-Functional/Chest Pull Back1": () =>
    import("../assets/exercises/Cardio-Functional/Chest Pull Back1.webp"),
  "Cardio-Functional/Chest raise and rotate": () =>
    import("../assets/exercises/Cardio-Functional/Chest raise and rotate.webp"),
  "Cardio-Functional/Chest raise and rotate1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Chest raise and rotate1.webp"
    ),
  "Cardio-Functional/Circle Elbow Arm": () =>
    import("../assets/exercises/Cardio-Functional/Circle Elbow Arm.webp"),
  "Cardio-Functional/Circle Elbow Arm1": () =>
    import("../assets/exercises/Cardio-Functional/Circle Elbow Arm1.webp"),
  "Cardio-Functional/Clap Jack": () =>
    import("../assets/exercises/Cardio-Functional/Clap Jack.webp"),
  "Cardio-Functional/Clap Jack1": () =>
    import("../assets/exercises/Cardio-Functional/Clap Jack1.webp"),
  "Cardio-Functional/Control Balance": () =>
    import("../assets/exercises/Cardio-Functional/Control Balance.webp"),
  "Cardio-Functional/Control Balance1": () =>
    import("../assets/exercises/Cardio-Functional/Control Balance1.webp"),
  "Cardio-Functional/Corner Touch": () =>
    import("../assets/exercises/Cardio-Functional/Corner Touch.webp"),
  "Cardio-Functional/Corner Touch1": () =>
    import("../assets/exercises/Cardio-Functional/Corner Touch1.webp"),
  "Cardio-Functional/Criss Cross Arms Lift": () =>
    import("../assets/exercises/Cardio-Functional/Criss Cross Arms Lift.webp"),
  "Cardio-Functional/Criss Cross Arms Lift1": () =>
    import("../assets/exercises/Cardio-Functional/Criss Cross Arms Lift1.webp"),
  "Cardio-Functional/Criss Cross Elbow To Knee": () =>
    import(
      "../assets/exercises/Cardio-Functional/Criss Cross Elbow To Knee.webp"
    ),
  "Cardio-Functional/Criss Cross Elbow To Knee1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Criss Cross Elbow To Knee1.webp"
    ),
  "Cardio-Functional/Diagonal Opens": () =>
    import("../assets/exercises/Cardio-Functional/Diagonal Opens.webp"),
  "Cardio-Functional/Diagonal Opens1": () =>
    import("../assets/exercises/Cardio-Functional/Diagonal Opens1.webp"),
  "Cardio-Functional/Diagonal Punch": () =>
    import("../assets/exercises/Cardio-Functional/Diagonal Punch.webp"),
  "Cardio-Functional/Diagonal Punch1": () =>
    import("../assets/exercises/Cardio-Functional/Diagonal Punch1.webp"),
  "Cardio-Functional/Double Knee Drive": () =>
    import("../assets/exercises/Cardio-Functional/Double Knee Drive.webp"),
  "Cardio-Functional/Double Knee Drive1": () =>
    import("../assets/exercises/Cardio-Functional/Double Knee Drive1.webp"),
  "Cardio-Functional/Double Punch Front Leg Lift": () =>
    import(
      "../assets/exercises/Cardio-Functional/Double Punch Front Leg Lift.webp"
    ),
  "Cardio-Functional/Double Punch Front Leg Lift1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Double Punch Front Leg Lift1.webp"
    ),
  "Cardio-Functional/Downward Dog Sprint": () =>
    import("../assets/exercises/Cardio-Functional/Downward Dog Sprint.webp"),
  "Cardio-Functional/Downward Dog Sprint1": () =>
    import("../assets/exercises/Cardio-Functional/Downward Dog Sprint1.webp"),
  "Cardio-Functional/Dumbbell Curl Press Extend": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Curl Press Extend.webp"
    ),
  "Cardio-Functional/Dumbbell Curl Press Extend1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Curl Press Extend1.webp"
    ),
  "Cardio-Functional/Dumbbell Iron Cross": () =>
    import("../assets/exercises/Cardio-Functional/Dumbbell Iron Cross.webp"),
  "Cardio-Functional/Dumbbell Iron Cross1": () =>
    import("../assets/exercises/Cardio-Functional/Dumbbell Iron Cross1.webp"),
  "Cardio-Functional/Dumbbell Low Windmill": () =>
    import("../assets/exercises/Cardio-Functional/Dumbbell Low Windmill.webp"),
  "Cardio-Functional/Dumbbell Low Windmill1": () =>
    import("../assets/exercises/Cardio-Functional/Dumbbell Low Windmill1.webp"),
  "Cardio-Functional/Dumbbell Pullover Hip Extension on Exercise Ball": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Pullover Hip Extension on Exercise Ball.webp"
    ),
  "Cardio-Functional/Dumbbell Pullover Hip Extension on Exercise Ball1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Pullover Hip Extension on Exercise Ball1.webp"
    ),
  "Cardio-Functional/Dumbbell Single Arm Overhead Carry": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Single Arm Overhead Carry.webp"
    ),
  "Cardio-Functional/Dumbbell Single Arm Overhead Carry1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Dumbbell Single Arm Overhead Carry1.webp"
    ),
  "Cardio-Functional/Dumbell Burpee": () =>
    import("../assets/exercises/Cardio-Functional/Dumbell Burpee.webp"),
  "Cardio-Functional/Dumbell Burpee1": () =>
    import("../assets/exercises/Cardio-Functional/Dumbell Burpee1.webp"),
  "Cardio-Functional/Dynamic Leg Swing": () =>
    import("../assets/exercises/Cardio-Functional/Dynamic Leg Swing.webp"),
  "Cardio-Functional/Dynamic Leg Swing1": () =>
    import("../assets/exercises/Cardio-Functional/Dynamic Leg Swing1.webp"),
  "Cardio-Functional/Elbow-Extension": () =>
    import("../assets/exercises/Cardio-Functional/Elbow-Extension.webp"),
  "Cardio-Functional/Elbow-Extension1": () =>
    import("../assets/exercises/Cardio-Functional/Elbow-Extension1.webp"),
  "Cardio-Functional/Extended Side Angle": () =>
    import("../assets/exercises/Cardio-Functional/Extended Side Angle.webp"),
  "Cardio-Functional/Extended Side Angle1": () =>
    import("../assets/exercises/Cardio-Functional/Extended Side Angle1.webp"),
  "Cardio-Functional/Fast feet  ": () =>
    import("../assets/exercises/Cardio-Functional/Fast feet  .webp"),
  "Cardio-Functional/Fast feet  1": () =>
    import("../assets/exercises/Cardio-Functional/Fast feet  1.webp"),
  "Cardio-Functional/Gym Elliptical Machine Fast Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Fast Speed.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Fast Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Fast Speed1.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Fast Speed_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Fast Speed_Female.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Fast Speed_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Fast Speed_Female1.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Normal Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Normal Speed.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Normal Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Normal Speed1.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Normal Speed_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Normal Speed_Female.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Normal Speed_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Normal Speed_Female1.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Sprint Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Sprint Speed.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Sprint Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Sprint Speed1.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Sprint Speed_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Sprint Speed_Female.webp"
    ),
  "Cardio-Functional/Gym Elliptical Machine Sprint Speed_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Elliptical Machine Sprint Speed_Female1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Fast Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Fast Speed.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Fast Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Fast Speed1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Fast Speed_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Fast Speed_female.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Fast Speed_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Fast Speed_female1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Normal Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Normal Speed.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Normal Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Normal Speed1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Normal Speed_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Normal Speed_female.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Normal Speed_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Normal Speed_female1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Sprint Speed": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Sprint Speed.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Sprint Speed1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Sprint Speed1.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Sprint Speed_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Sprint Speed_female.webp"
    ),
  "Cardio-Functional/Gym Rowing Machine Sprint Speed_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Gym Rowing Machine Sprint Speed_female1.webp"
    ),
  "Cardio-Functional/Half burpees  ": () =>
    import("../assets/exercises/Cardio-Functional/Half burpees  .webp"),
  "Cardio-Functional/Half burpees  1": () =>
    import("../assets/exercises/Cardio-Functional/Half burpees  1.webp"),
  "Cardio-Functional/Jogging": () =>
    import("../assets/exercises/Cardio-Functional/Jogging.webp"),
  "Cardio-Functional/Jogging1": () =>
    import("../assets/exercises/Cardio-Functional/Jogging1.webp"),
  "Cardio-Functional/Jogging_female": () =>
    import("../assets/exercises/Cardio-Functional/Jogging_female.webp"),
  "Cardio-Functional/Jogging_female1": () =>
    import("../assets/exercises/Cardio-Functional/Jogging_female1.webp"),
  "Cardio-Functional/Jump_Rope alternating foot female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope alternating foot female.webp"
    ),
  "Cardio-Functional/Jump_Rope alternating foot female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope alternating foot female1.webp"
    ),
  "Cardio-Functional/Jump_Rope alternating foot": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope alternating foot.webp"
    ),
  "Cardio-Functional/Jump_Rope alternating foot1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope alternating foot1.webp"
    ),
  "Cardio-Functional/Jump_Rope basic jump female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope basic jump female.webp"
    ),
  "Cardio-Functional/Jump_Rope basic jump female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope basic jump female1.webp"
    ),
  "Cardio-Functional/Jump_Rope basic jump": () =>
    import("../assets/exercises/Cardio-Functional/Jump_Rope basic jump.webp"),
  "Cardio-Functional/Jump_Rope basic jump1": () =>
    import("../assets/exercises/Cardio-Functional/Jump_Rope basic jump1.webp"),
  "Cardio-Functional/Jump_Rope double bounce female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope double bounce female.webp"
    ),
  "Cardio-Functional/Jump_Rope double bounce female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope double bounce female1.webp"
    ),
  "Cardio-Functional/Jump_Rope double bounce": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope double bounce.webp"
    ),
  "Cardio-Functional/Jump_Rope double bounce1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Jump_Rope double bounce1.webp"
    ),
  "Cardio-Functional/Kettlebell Single Arm Clean and Press": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Single Arm Clean and Press.webp"
    ),
  "Cardio-Functional/Kettlebell Single Arm Clean and Press1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Single Arm Clean and Press1.webp"
    ),
  "Cardio-Functional/Kettlebell Single Leg Glute Bridge Pullover": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Single Leg Glute Bridge Pullover.webp"
    ),
  "Cardio-Functional/Kettlebell Single Leg Glute Bridge Pullover1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Single Leg Glute Bridge Pullover1.webp"
    ),
  "Cardio-Functional/Kettlebell Sumo Deadlift with High Pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Sumo Deadlift with High Pull.webp"
    ),
  "Cardio-Functional/Kettlebell Sumo Deadlift with High Pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Sumo Deadlift with High Pull1.webp"
    ),
  "Cardio-Functional/Kettlebell Swing (Version 2)": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Swing (Version 2).webp"
    ),
  "Cardio-Functional/Kettlebell Swing (Version 2)1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell Swing (Version 2)1.webp"
    ),
  "Cardio-Functional/Kettlebell Swing": () =>
    import("../assets/exercises/Cardio-Functional/Kettlebell Swing.webp"),
  "Cardio-Functional/Kettlebell Swing1": () =>
    import("../assets/exercises/Cardio-Functional/Kettlebell Swing1.webp"),
  "Cardio-Functional/Kettlebell Thruster": () =>
    import("../assets/exercises/Cardio-Functional/Kettlebell Thruster.webp"),
  "Cardio-Functional/Kettlebell Thruster1": () =>
    import("../assets/exercises/Cardio-Functional/Kettlebell Thruster1.webp"),
  "Cardio-Functional/Kettlebell strict press": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell strict press.webp"
    ),
  "Cardio-Functional/Kettlebell strict press1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Kettlebell strict press1.webp"
    ),
  "Cardio-Functional/MAJOR GROUPS Muscle body male": () =>
    import(
      "../assets/exercises/Cardio-Functional/MAJOR GROUPS Muscle body male.webp"
    ),
  "Cardio-Functional/MAJOR GROUPS Muscle body male1": () =>
    import(
      "../assets/exercises/Cardio-Functional/MAJOR GROUPS Muscle body male1.webp"
    ),
  "Cardio-Functional/Rebounder High Knee Runs": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder High Knee Runs.webp"
    ),
  "Cardio-Functional/Rebounder High Knee Runs1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder High Knee Runs1.webp"
    ),
  "Cardio-Functional/Rebounder High Knee Runs_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder High Knee Runs_Female.webp"
    ),
  "Cardio-Functional/Rebounder High Knee Runs_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder High Knee Runs_Female1.webp"
    ),
  "Cardio-Functional/Rebounder In & Out From Ground": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out From Ground.webp"
    ),
  "Cardio-Functional/Rebounder In & Out From Ground1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out From Ground1.webp"
    ),
  "Cardio-Functional/Rebounder In & Out From Ground_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out From Ground_Female.webp"
    ),
  "Cardio-Functional/Rebounder In & Out From Ground_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out From Ground_Female1.webp"
    ),
  "Cardio-Functional/Rebounder In & Out Jacks": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out Jacks.webp"
    ),
  "Cardio-Functional/Rebounder In & Out Jacks1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out Jacks1.webp"
    ),
  "Cardio-Functional/Rebounder In & Out Jacks_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out Jacks_Female.webp"
    ),
  "Cardio-Functional/Rebounder In & Out Jacks_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder In & Out Jacks_Female1.webp"
    ),
  "Cardio-Functional/Rebounder Knee Jumps": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Knee Jumps.webp"),
  "Cardio-Functional/Rebounder Knee Jumps1": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Knee Jumps1.webp"),
  "Cardio-Functional/Rebounder Knee Jumps_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Knee Jumps_Female.webp"
    ),
  "Cardio-Functional/Rebounder Knee Jumps_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Knee Jumps_Female1.webp"
    ),
  "Cardio-Functional/Rebounder Knee Pushes": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Knee Pushes.webp"),
  "Cardio-Functional/Rebounder Knee Pushes1": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Knee Pushes1.webp"),
  "Cardio-Functional/Rebounder Knee Pushes_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Knee Pushes_Female.webp"
    ),
  "Cardio-Functional/Rebounder Knee Pushes_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Knee Pushes_Female1.webp"
    ),
  "Cardio-Functional/Rebounder Light Jumps": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Light Jumps.webp"),
  "Cardio-Functional/Rebounder Light Jumps1": () =>
    import("../assets/exercises/Cardio-Functional/Rebounder Light Jumps1.webp"),
  "Cardio-Functional/Rebounder Light Jumps_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Light Jumps_Female.webp"
    ),
  "Cardio-Functional/Rebounder Light Jumps_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Rebounder Light Jumps_Female1.webp"
    ),
  "Cardio-Functional/Resistance Band Pull Apart": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Pull Apart.webp"
    ),
  "Cardio-Functional/Resistance Band Pull Apart1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Pull Apart1.webp"
    ),
  "Cardio-Functional/Resistance Band Pull Apart_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Pull Apart_Female.webp"
    ),
  "Cardio-Functional/Resistance Band Pull Apart_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Pull Apart_Female1.webp"
    ),
  "Cardio-Functional/Resistance Band Shoulder Adduction": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Shoulder Adduction.webp"
    ),
  "Cardio-Functional/Resistance Band Shoulder Adduction1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Shoulder Adduction1.webp"
    ),
  "Cardio-Functional/Resistance Band Shoulder Adduction_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Shoulder Adduction_Female.webp"
    ),
  "Cardio-Functional/Resistance Band Shoulder Adduction_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Shoulder Adduction_Female1.webp"
    ),
  "Cardio-Functional/Resistance Band Standing External Rotation": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Standing External Rotation.webp"
    ),
  "Cardio-Functional/Resistance Band Standing External Rotation1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Standing External Rotation1.webp"
    ),
  "Cardio-Functional/Resistance Band Standing External Rotation_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Standing External Rotation_Female.webp"
    ),
  "Cardio-Functional/Resistance Band Standing External Rotation_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Resistance Band Standing External Rotation_Female1.webp"
    ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension1.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension_Female.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Extension_Female1.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion1.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion_Female.webp"
      ),
  "Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Resistance Band Standing Single Arm Shoulder Flexion_Female1.webp"
      ),
  "Cardio-Functional/Running": () =>
    import("../assets/exercises/Cardio-Functional/Running.webp"),
  "Cardio-Functional/Running1": () =>
    import("../assets/exercises/Cardio-Functional/Running1.webp"),
  "Cardio-Functional/Running_female": () =>
    import("../assets/exercises/Cardio-Functional/Running_female.webp"),
  "Cardio-Functional/Running_female1": () =>
    import("../assets/exercises/Cardio-Functional/Running_female1.webp"),
  "Cardio-Functional/Shadow Boxing  ": () =>
    import("../assets/exercises/Cardio-Functional/Shadow Boxing  .webp"),
  "Cardio-Functional/Shadow Boxing  1": () =>
    import("../assets/exercises/Cardio-Functional/Shadow Boxing  1.webp"),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pull":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pull.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pulls_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pulls_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pulls_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Alternating Arm Pulls_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull_Female.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Basic Pull_Female1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Face Biceps Curl Pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Flyes": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Flyes.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Flyes1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Flyes1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Flyes_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Flyes_Female.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Flyes_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Flyes_Female1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Jump Squat pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Kneeling Reverse Fly Pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Fly Pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Reverse Lunge pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat pull half circles_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Squat wide lat pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski Triceps extension pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull1.webp"
    ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski pullover pull_Female1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull1.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull_Female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull_Female.webp"
      ),
  "Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull_Female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Ski Ergometer Cross Country Ski reverse triceps extension pull_Female1.webp"
      ),
  "Cardio-Functional/Stationary Exercise Bike": () =>
    import(
      "../assets/exercises/Cardio-Functional/Stationary Exercise Bike.webp"
    ),
  "Cardio-Functional/Stationary Exercise Bike1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Stationary Exercise Bike1.webp"
    ),
  "Cardio-Functional/Stepmill Machine Steps_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Stepmill Machine Steps_Female.webp"
    ),
  "Cardio-Functional/Stepmill Machine Steps_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Stepmill Machine Steps_Female1.webp"
    ),
  "Cardio-Functional/Stepmill machine Steps": () =>
    import("../assets/exercises/Cardio-Functional/Stepmill machine Steps.webp"),
  "Cardio-Functional/Stepmill machine Steps1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Stepmill machine Steps1.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Mountain Climber": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Mountain Climber.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Mountain Climber1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Mountain Climber1.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Mountain Climber_female":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Mountain Climber_female.webp"
      ),
  "Cardio-Functional/Suspension Trainer with Grips Mountain Climber_female1":
    () =>
      import(
        "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Mountain Climber_female1.webp"
      ),
  "Cardio-Functional/Suspension Trainer with Grips Pike": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Pike.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Pike1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Pike1.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Pike_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Pike_female.webp"
    ),
  "Cardio-Functional/Suspension Trainer with Grips Pike_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Suspension Trainer with Grips Pike_female1.webp"
    ),
  "Cardio-Functional/Tennis Forehand Ground Stroke": () =>
    import(
      "../assets/exercises/Cardio-Functional/Tennis Forehand Ground Stroke.webp"
    ),
  "Cardio-Functional/Tennis Forehand Ground Stroke1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Tennis Forehand Ground Stroke1.webp"
    ),
  "Cardio-Functional/Tennis Forehand Ground Stroke_Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Tennis Forehand Ground Stroke_Female.webp"
    ),
  "Cardio-Functional/Tennis Forehand Ground Stroke_Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Tennis Forehand Ground Stroke_Female1.webp"
    ),
  "Cardio-Functional/Treadmill Jogging Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Treadmill Jogging Female.webp"
    ),
  "Cardio-Functional/Treadmill Jogging Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Treadmill Jogging Female1.webp"
    ),
  "Cardio-Functional/Treadmill Jogging": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill Jogging.webp"),
  "Cardio-Functional/Treadmill Jogging1": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill Jogging1.webp"),
  "Cardio-Functional/Treadmill Running Female": () =>
    import(
      "../assets/exercises/Cardio-Functional/Treadmill Running Female.webp"
    ),
  "Cardio-Functional/Treadmill Running Female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/Treadmill Running Female1.webp"
    ),
  "Cardio-Functional/Treadmill Running": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill Running.webp"),
  "Cardio-Functional/Treadmill Running1": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill Running1.webp"),
  "Cardio-Functional/Treadmill walk": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill walk.webp"),
  "Cardio-Functional/Treadmill walk1": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill walk1.webp"),
  "Cardio-Functional/Treadmill walk_Female": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill walk_Female.webp"),
  "Cardio-Functional/Treadmill walk_Female1": () =>
    import("../assets/exercises/Cardio-Functional/Treadmill walk_Female1.webp"),
  "Cardio-Functional/Walking Fast": () =>
    import("../assets/exercises/Cardio-Functional/Walking Fast.webp"),
  "Cardio-Functional/Walking Fast1": () =>
    import("../assets/exercises/Cardio-Functional/Walking Fast1.webp"),
  "Cardio-Functional/Walking Fast_female": () =>
    import("../assets/exercises/Cardio-Functional/Walking Fast_female.webp"),
  "Cardio-Functional/Walking Fast_female1": () =>
    import("../assets/exercises/Cardio-Functional/Walking Fast_female1.webp"),
  "Cardio-Functional/Walking": () =>
    import("../assets/exercises/Cardio-Functional/Walking.webp"),
  "Cardio-Functional/Walking1": () =>
    import("../assets/exercises/Cardio-Functional/Walking1.webp"),
  "Cardio-Functional/alternate front kick in place_female": () =>
    import(
      "../assets/exercises/Cardio-Functional/alternate front kick in place_female.webp"
    ),
  "Cardio-Functional/alternate front kick in place_female1": () =>
    import(
      "../assets/exercises/Cardio-Functional/alternate front kick in place_female1.webp"
    ),
  "Cardio-Functional/alternate punching": () =>
    import("../assets/exercises/Cardio-Functional/alternate punching.webp"),
  "Cardio-Functional/alternate punching1": () =>
    import("../assets/exercises/Cardio-Functional/alternate punching1.webp"),
  "Cardio-Functional/ankle dorsal flexion": () =>
    import("../assets/exercises/Cardio-Functional/ankle dorsal flexion.webp"),
  "Cardio-Functional/ankle dorsal flexion1": () =>
    import("../assets/exercises/Cardio-Functional/ankle dorsal flexion1.webp"),
  "Cardio-Functional/ankle plantar flexion": () =>
    import("../assets/exercises/Cardio-Functional/ankle plantar flexion.webp"),
  "Cardio-Functional/ankle plantar flexion1": () =>
    import("../assets/exercises/Cardio-Functional/ankle plantar flexion1.webp"),
  "Cardio-Functional/arm pulses  ": () =>
    import("../assets/exercises/Cardio-Functional/arm pulses  .webp"),
  "Cardio-Functional/arm pulses  1": () =>
    import("../assets/exercises/Cardio-Functional/arm pulses  1.webp"),
  "Cardio-Functional/arm pulses cross  ": () =>
    import("../assets/exercises/Cardio-Functional/arm pulses cross  .webp"),
  "Cardio-Functional/arm pulses cross  1": () =>
    import("../assets/exercises/Cardio-Functional/arm pulses cross  1.webp"),
  "Cardio-Functional/arm pulses palms downwards  ": () =>
    import(
      "../assets/exercises/Cardio-Functional/arm pulses palms downwards  .webp"
    ),
  "Cardio-Functional/arm pulses palms downwards  1": () =>
    import(
      "../assets/exercises/Cardio-Functional/arm pulses palms downwards  1.webp"
    ),
  "Cardio-Functional/arm pulses palms upwards  ": () =>
    import(
      "../assets/exercises/Cardio-Functional/arm pulses palms upwards  .webp"
    ),
  "Cardio-Functional/arm pulses palms upwards  1": () =>
    import(
      "../assets/exercises/Cardio-Functional/arm pulses palms upwards  1.webp"
    ),
  "Cardio-Functional/bodyweight full squat with overhead front raises": () =>
    import(
      "../assets/exercises/Cardio-Functional/bodyweight full squat with overhead front raises.webp"
    ),
  "Cardio-Functional/bodyweight full squat with overhead front raises1": () =>
    import(
      "../assets/exercises/Cardio-Functional/bodyweight full squat with overhead front raises1.webp"
    ),
  "Cardio-Functional/boxing jab": () =>
    import("../assets/exercises/Cardio-Functional/boxing jab.webp"),
  "Cardio-Functional/boxing jab1": () =>
    import("../assets/exercises/Cardio-Functional/boxing jab1.webp"),
  "Cardio-Functional/criss cross jack": () =>
    import("../assets/exercises/Cardio-Functional/criss cross jack.webp"),
  "Cardio-Functional/criss cross jack1": () =>
    import("../assets/exercises/Cardio-Functional/criss cross jack1.webp"),
  "Cardio-Functional/criss cross jump": () =>
    import("../assets/exercises/Cardio-Functional/criss cross jump.webp"),
  "Cardio-Functional/criss cross jump1": () =>
    import("../assets/exercises/Cardio-Functional/criss cross jump1.webp"),
  "Cardio-Functional/decline shoulder tap": () =>
    import("../assets/exercises/Cardio-Functional/decline shoulder tap.webp"),
  "Cardio-Functional/decline shoulder tap1": () =>
    import("../assets/exercises/Cardio-Functional/decline shoulder tap1.webp"),
  "Cardio-Functional/high knees": () =>
    import("../assets/exercises/Cardio-Functional/high knees.webp"),
  "Cardio-Functional/high knees1": () =>
    import("../assets/exercises/Cardio-Functional/high knees1.webp"),
  "Cardio-Functional/jumping jack  ": () =>
    import("../assets/exercises/Cardio-Functional/jumping jack  .webp"),
  "Cardio-Functional/jumping jack  1": () =>
    import("../assets/exercises/Cardio-Functional/jumping jack  1.webp"),
  "Cardio-Functional/plank lunges  ": () =>
    import("../assets/exercises/Cardio-Functional/plank lunges  .webp"),
  "Cardio-Functional/plank lunges  1": () =>
    import("../assets/exercises/Cardio-Functional/plank lunges  1.webp"),
  "Cardio-Functional/plank shoulder taps  ": () =>
    import("../assets/exercises/Cardio-Functional/plank shoulder taps  .webp"),
  "Cardio-Functional/plank shoulder taps  1": () =>
    import("../assets/exercises/Cardio-Functional/plank shoulder taps  1.webp"),
  "Cardio-Functional/side to side punch  ": () =>
    import("../assets/exercises/Cardio-Functional/side to side punch  .webp"),
  "Cardio-Functional/side to side punch  1": () =>
    import("../assets/exercises/Cardio-Functional/side to side punch  1.webp"),
  "Cardio-Functional/skipping  ": () =>
    import("../assets/exercises/Cardio-Functional/skipping  .webp"),
  "Cardio-Functional/skipping  1": () =>
    import("../assets/exercises/Cardio-Functional/skipping  1.webp"),
  "Cardio-Functional/standing toe touch  ": () =>
    import("../assets/exercises/Cardio-Functional/standing toe touch  .webp"),
  "Cardio-Functional/standing toe touch  1": () =>
    import("../assets/exercises/Cardio-Functional/standing toe touch  1.webp"),
  "Cardio-Functional/star jump": () =>
    import("../assets/exercises/Cardio-Functional/star jump.webp"),
  "Cardio-Functional/star jump1": () =>
    import("../assets/exercises/Cardio-Functional/star jump1.webp"),
  "Chest/Archer Push up_female": () =>
    import("../assets/exercises/Chest/Archer Push up_female.webp"),
  "Chest/Archer Push up_female1": () =>
    import("../assets/exercises/Chest/Archer Push up_female1.webp"),
  "Chest/Archer push up": () =>
    import("../assets/exercises/Chest/Archer push up.webp"),
  "Chest/Archer push up1": () =>
    import("../assets/exercises/Chest/Archer push up1.webp"),
  "Chest/Assisted Weighted Push-up_female": () =>
    import("../assets/exercises/Chest/Assisted Weighted Push-up_female.webp"),
  "Chest/Assisted Weighted Push-up_female1": () =>
    import("../assets/exercises/Chest/Assisted Weighted Push-up_female1.webp"),
  "Chest/Assisted weighted push up": () =>
    import("../assets/exercises/Chest/Assisted weighted push up.webp"),
  "Chest/Assisted weighted push up1": () =>
    import("../assets/exercises/Chest/Assisted weighted push up1.webp"),
  "Chest/Band Bench Press_female": () =>
    import("../assets/exercises/Chest/Band Bench Press_female.webp"),
  "Chest/Band Bench Press_female1": () =>
    import("../assets/exercises/Chest/Band Bench Press_female1.webp"),
  "Chest/Band Chest Fly_female": () =>
    import("../assets/exercises/Chest/Band Chest Fly_female.webp"),
  "Chest/Band Chest Fly_female1": () =>
    import("../assets/exercises/Chest/Band Chest Fly_female1.webp"),
  "Chest/Band Cross Body One Arm Chest Press_female": () =>
    import(
      "../assets/exercises/Chest/Band Cross Body One Arm Chest Press_female.webp"
    ),
  "Chest/Band Cross Body One Arm Chest Press_female1": () =>
    import(
      "../assets/exercises/Chest/Band Cross Body One Arm Chest Press_female1.webp"
    ),
  "Chest/Band Incline Bench Press_female": () =>
    import("../assets/exercises/Chest/Band Incline Bench Press_female.webp"),
  "Chest/Band Incline Bench Press_female1": () =>
    import("../assets/exercises/Chest/Band Incline Bench Press_female1.webp"),
  "Chest/Band Incline Fly_female": () =>
    import("../assets/exercises/Chest/Band Incline Fly_female.webp"),
  "Chest/Band Incline Fly_female1": () =>
    import("../assets/exercises/Chest/Band Incline Fly_female1.webp"),
  "Chest/Band Incline Palm in Press_female": () =>
    import("../assets/exercises/Chest/Band Incline Palm in Press_female.webp"),
  "Chest/Band Incline Palm in Press_female1": () =>
    import("../assets/exercises/Chest/Band Incline Palm in Press_female1.webp"),
  "Chest/Band Pallof Press": () =>
    import("../assets/exercises/Chest/Band Pallof Press.webp"),
  "Chest/Band Pallof Press1": () =>
    import("../assets/exercises/Chest/Band Pallof Press1.webp"),
  "Chest/Band Palloff Press_Female": () =>
    import("../assets/exercises/Chest/Band Palloff Press_Female.webp"),
  "Chest/Band Palloff Press_Female1": () =>
    import("../assets/exercises/Chest/Band Palloff Press_Female1.webp"),
  "Chest/Band Push-up_female": () =>
    import("../assets/exercises/Chest/Band Push-up_female.webp"),
  "Chest/Band Push-up_female1": () =>
    import("../assets/exercises/Chest/Band Push-up_female1.webp"),
  "Chest/Band Single Arm Pec Fly": () =>
    import("../assets/exercises/Chest/Band Single Arm Pec Fly.webp"),
  "Chest/Band Single Arm Pec Fly1": () =>
    import("../assets/exercises/Chest/Band Single Arm Pec Fly1.webp"),
  "Chest/Band Single Arm Pec Fly_Female": () =>
    import("../assets/exercises/Chest/Band Single Arm Pec Fly_Female.webp"),
  "Chest/Band Single Arm Pec Fly_Female1": () =>
    import("../assets/exercises/Chest/Band Single Arm Pec Fly_Female1.webp"),
  "Chest/Band high fly_female": () =>
    import("../assets/exercises/Chest/Band high fly_female.webp"),
  "Chest/Band high fly_female1": () =>
    import("../assets/exercises/Chest/Band high fly_female1.webp"),
  "Chest/Barbell Bench Press_female": () =>
    import("../assets/exercises/Chest/Barbell Bench Press_female.webp"),
  "Chest/Barbell Bench Press_female1": () =>
    import("../assets/exercises/Chest/Barbell Bench Press_female1.webp"),
  "Chest/Barbell Inclined Bench Press_female": () =>
    import(
      "../assets/exercises/Chest/Barbell Inclined Bench Press_female.webp"
    ),
  "Chest/Barbell Inclined Bench Press_female1": () =>
    import(
      "../assets/exercises/Chest/Barbell Inclined Bench Press_female1.webp"
    ),
  "Chest/Barbell JM bench press": () =>
    import("../assets/exercises/Chest/Barbell JM bench press.webp"),
  "Chest/Barbell JM bench press1": () =>
    import("../assets/exercises/Chest/Barbell JM bench press1.webp"),
  "Chest/Barbell Pause Incline Bench Press_female": () =>
    import(
      "../assets/exercises/Chest/Barbell Pause Incline Bench Press_female.webp"
    ),
  "Chest/Barbell Pause Incline Bench Press_female1": () =>
    import(
      "../assets/exercises/Chest/Barbell Pause Incline Bench Press_female1.webp"
    ),
  "Chest/Barbell Smith Chest Press_Female": () =>
    import("../assets/exercises/Chest/Barbell Smith Chest Press_Female.webp"),
  "Chest/Barbell Smith Chest Press_Female1": () =>
    import("../assets/exercises/Chest/Barbell Smith Chest Press_Female1.webp"),
  "Chest/Barbell Spoto Press": () =>
    import("../assets/exercises/Chest/Barbell Spoto Press.webp"),
  "Chest/Barbell Spoto Press1": () =>
    import("../assets/exercises/Chest/Barbell Spoto Press1.webp"),
  "Chest/Barbell Spoto Press_Female": () =>
    import("../assets/exercises/Chest/Barbell Spoto Press_Female.webp"),
  "Chest/Barbell Spoto Press_Female1": () =>
    import("../assets/exercises/Chest/Barbell Spoto Press_Female1.webp"),
  "Chest/Barbell Wide Bench Press": () =>
    import("../assets/exercises/Chest/Barbell Wide Bench Press.webp"),
  "Chest/Barbell Wide Bench Press1": () =>
    import("../assets/exercises/Chest/Barbell Wide Bench Press1.webp"),
  "Chest/Barbell bench press 2": () =>
    import("../assets/exercises/Chest/Barbell bench press 2.webp"),
  "Chest/Barbell bench press 3": () =>
    import("../assets/exercises/Chest/Barbell bench press 3.webp"),
  "Chest/Barbell close grip bench press": () =>
    import("../assets/exercises/Chest/Barbell close grip bench press.webp"),
  "Chest/Barbell close grip bench press1": () =>
    import("../assets/exercises/Chest/Barbell close grip bench press1.webp"),
  "Chest/Barbell floor chest press": () =>
    import("../assets/exercises/Chest/Barbell floor chest press.webp"),
  "Chest/Barbell floor chest press1": () =>
    import("../assets/exercises/Chest/Barbell floor chest press1.webp"),
  "Chest/Barbell incline bench press": () =>
    import("../assets/exercises/Chest/Barbell incline bench press.webp"),
  "Chest/Barbell incline bench press1": () =>
    import("../assets/exercises/Chest/Barbell incline bench press1.webp"),
  "Chest/Barbell pullover to press": () =>
    import("../assets/exercises/Chest/Barbell pullover to press.webp"),
  "Chest/Barbell pullover to press1": () =>
    import("../assets/exercises/Chest/Barbell pullover to press1.webp"),
  "Chest/Barbell reverse close grip bench press": () =>
    import(
      "../assets/exercises/Chest/Barbell reverse close grip bench press.webp"
    ),
  "Chest/Barbell reverse close grip bench press1": () =>
    import(
      "../assets/exercises/Chest/Barbell reverse close grip bench press1.webp"
    ),
  "Chest/Barbell reverse grip bench press": () =>
    import("../assets/exercises/Chest/Barbell reverse grip bench press.webp"),
  "Chest/Barbell reverse grip bench press1": () =>
    import("../assets/exercises/Chest/Barbell reverse grip bench press1.webp"),
  "Chest/Bodyweight Kneeling Push-Up Row": () =>
    import("../assets/exercises/Chest/Bodyweight Kneeling Push-Up Row.webp"),
  "Chest/Bodyweight Kneeling Push-Up Row1": () =>
    import("../assets/exercises/Chest/Bodyweight Kneeling Push-Up Row1.webp"),
  "Chest/Bodyweight Standing Fly": () =>
    import("../assets/exercises/Chest/Bodyweight Standing Fly.webp"),
  "Chest/Bodyweight Standing Fly1": () =>
    import("../assets/exercises/Chest/Bodyweight Standing Fly1.webp"),
  "Chest/Bodyweight Svend Press": () =>
    import("../assets/exercises/Chest/Bodyweight Svend Press.webp"),
  "Chest/Bodyweight Svend Press1": () =>
    import("../assets/exercises/Chest/Bodyweight Svend Press1.webp"),
  "Chest/Cable Bench Fly Press": () =>
    import("../assets/exercises/Chest/Cable Bench Fly Press.webp"),
  "Chest/Cable Bench Fly Press1": () =>
    import("../assets/exercises/Chest/Cable Bench Fly Press1.webp"),
  "Chest/Cable Bench Press": () =>
    import("../assets/exercises/Chest/Cable Bench Press.webp"),
  "Chest/Cable Bench Press1": () =>
    import("../assets/exercises/Chest/Cable Bench Press1.webp"),
  "Chest/Cable Core Palloff Press": () =>
    import("../assets/exercises/Chest/Cable Core Palloff Press.webp"),
  "Chest/Cable Core Palloff Press1": () =>
    import("../assets/exercises/Chest/Cable Core Palloff Press1.webp"),
  "Chest/Cable Core Palloff Press_Female": () =>
    import("../assets/exercises/Chest/Cable Core Palloff Press_Female.webp"),
  "Chest/Cable Core Palloff Press_Female1": () =>
    import("../assets/exercises/Chest/Cable Core Palloff Press_Female1.webp"),
  "Chest/Cable Middle Fly": () =>
    import("../assets/exercises/Chest/Cable Middle Fly.webp"),
  "Chest/Cable Middle Fly1": () =>
    import("../assets/exercises/Chest/Cable Middle Fly1.webp"),
  "Chest/Cable One Arm Chest Fly Bent": () =>
    import("../assets/exercises/Chest/Cable One Arm Chest Fly Bent.webp"),
  "Chest/Cable One Arm Chest Fly Bent1": () =>
    import("../assets/exercises/Chest/Cable One Arm Chest Fly Bent1.webp"),
  "Chest/Cable Standing Up Straight Crossovers": () =>
    import(
      "../assets/exercises/Chest/Cable Standing Up Straight Crossovers.webp"
    ),
  "Chest/Cable Standing Up Straight Crossovers1": () =>
    import(
      "../assets/exercises/Chest/Cable Standing Up Straight Crossovers1.webp"
    ),
  "Chest/Cable Upper Chest Crossover": () =>
    import("../assets/exercises/Chest/Cable Upper Chest Crossover.webp"),
  "Chest/Cable Upper Chest Crossover1": () =>
    import("../assets/exercises/Chest/Cable Upper Chest Crossover1.webp"),
  "Chest/Cable low fly": () =>
    import("../assets/exercises/Chest/Cable low fly.webp"),
  "Chest/Cable low fly1": () =>
    import("../assets/exercises/Chest/Cable low fly1.webp"),
  "Chest/Chest Bench Press Correct stance": () =>
    import("../assets/exercises/Chest/Chest Bench Press Correct stance.webp"),
  "Chest/Chest Bench Press Correct stance1": () =>
    import("../assets/exercises/Chest/Chest Bench Press Correct stance1.webp"),
  "Chest/Chest Dip (on dip pull-up cage)": () =>
    import("../assets/exercises/Chest/Chest Dip (on dip pull-up cage).webp"),
  "Chest/Chest Dip (on dip pull-up cage)1": () =>
    import("../assets/exercises/Chest/Chest Dip (on dip pull-up cage)1.webp"),
  "Chest/Chest Dip on Bench": () =>
    import("../assets/exercises/Chest/Chest Dip on Bench.webp"),
  "Chest/Chest Dip on Bench1": () =>
    import("../assets/exercises/Chest/Chest Dip on Bench1.webp"),
  "Chest/Chest Press Machine": () =>
    import("../assets/exercises/Chest/Chest Press Machine.webp"),
  "Chest/Chest Press Machine1": () =>
    import("../assets/exercises/Chest/Chest Press Machine1.webp"),
  "Chest/Chest Press Machine_Female": () =>
    import("../assets/exercises/Chest/Chest Press Machine_Female.webp"),
  "Chest/Chest Press Machine_Female1": () =>
    import("../assets/exercises/Chest/Chest Press Machine_Female1.webp"),
  "Chest/Climber a padded stool Supported": () =>
    import("../assets/exercises/Chest/Climber a padded stool Supported.webp"),
  "Chest/Climber a padded stool Supported1": () =>
    import("../assets/exercises/Chest/Climber a padded stool Supported1.webp"),
  "Chest/Clock push ups": () =>
    import("../assets/exercises/Chest/Clock push ups.webp"),
  "Chest/Clock push ups1": () =>
    import("../assets/exercises/Chest/Clock push ups1.webp"),
  "Chest/Close Grip Push up": () =>
    import("../assets/exercises/Chest/Close Grip Push up.webp"),
  "Chest/Close Grip Push up1": () =>
    import("../assets/exercises/Chest/Close Grip Push up1.webp"),
  "Chest/Cobra Full Push up": () =>
    import("../assets/exercises/Chest/Cobra Full Push up.webp"),
  "Chest/Cobra Full Push up1": () =>
    import("../assets/exercises/Chest/Cobra Full Push up1.webp"),
  "Chest/Decline Kneeling Push Up on Box": () =>
    import("../assets/exercises/Chest/Decline Kneeling Push Up on Box.webp"),
  "Chest/Decline Kneeling Push Up on Box1": () =>
    import("../assets/exercises/Chest/Decline Kneeling Push Up on Box1.webp"),
  "Chest/Decline Push Up against Wall": () =>
    import("../assets/exercises/Chest/Decline Push Up against Wall.webp"),
  "Chest/Decline Push Up against Wall1": () =>
    import("../assets/exercises/Chest/Decline Push Up against Wall1.webp"),
  "Chest/Decline kneeling push up": () =>
    import("../assets/exercises/Chest/Decline kneeling push up.webp"),
  "Chest/Decline kneeling push up1": () =>
    import("../assets/exercises/Chest/Decline kneeling push up1.webp"),
  "Chest/Deep Push-Up": () =>
    import("../assets/exercises/Chest/Deep Push-Up.webp"),
  "Chest/Deep Push-Up1": () =>
    import("../assets/exercises/Chest/Deep Push-Up1.webp"),
  "Chest/Dumbbell Alternate Bench Press (high start)": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Alternate Bench Press (high start).webp"
    ),
  "Chest/Dumbbell Alternate Bench Press (high start)1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Alternate Bench Press (high start)1.webp"
    ),
  "Chest/Dumbbell Around Pullover": () =>
    import("../assets/exercises/Chest/Dumbbell Around Pullover.webp"),
  "Chest/Dumbbell Around Pullover1": () =>
    import("../assets/exercises/Chest/Dumbbell Around Pullover1.webp"),
  "Chest/Dumbbell Bench Press": () =>
    import("../assets/exercises/Chest/Dumbbell Bench Press.webp"),
  "Chest/Dumbbell Bench Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Bench Press1.webp"),
  "Chest/Dumbbell Decline Alternate Bench Press": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Decline Alternate Bench Press.webp"
    ),
  "Chest/Dumbbell Decline Alternate Bench Press1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Decline Alternate Bench Press1.webp"
    ),
  "Chest/Dumbbell Decline Bench Press": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Bench Press.webp"),
  "Chest/Dumbbell Decline Bench Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Bench Press1.webp"),
  "Chest/Dumbbell Decline Fly": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Fly.webp"),
  "Chest/Dumbbell Decline Fly1": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Fly1.webp"),
  "Chest/Dumbbell Decline Hammer Press": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Hammer Press.webp"),
  "Chest/Dumbbell Decline Hammer Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Hammer Press1.webp"),
  "Chest/Dumbbell Decline One Arm Hammer Press": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Decline One Arm Hammer Press.webp"
    ),
  "Chest/Dumbbell Decline One Arm Hammer Press1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Decline One Arm Hammer Press1.webp"
    ),
  "Chest/Dumbbell Decline Twist Fly": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Twist Fly.webp"),
  "Chest/Dumbbell Decline Twist Fly1": () =>
    import("../assets/exercises/Chest/Dumbbell Decline Twist Fly1.webp"),
  "Chest/Dumbbell Incline Alternate Press": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Alternate Press.webp"),
  "Chest/Dumbbell Incline Alternate Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Alternate Press1.webp"),
  "Chest/Dumbbell Incline Bench Press": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Bench Press.webp"),
  "Chest/Dumbbell Incline Bench Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Bench Press1.webp"),
  "Chest/Dumbbell Incline Fly 2": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Fly 2.webp"),
  "Chest/Dumbbell Incline Fly 3": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Fly 3.webp"),
  "Chest/Dumbbell Incline Fly on Exercise Ball": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Incline Fly on Exercise Ball.webp"
    ),
  "Chest/Dumbbell Incline Fly on Exercise Ball1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Incline Fly on Exercise Ball1.webp"
    ),
  "Chest/Dumbbell Incline One Arm Press": () =>
    import("../assets/exercises/Chest/Dumbbell Incline One Arm Press.webp"),
  "Chest/Dumbbell Incline One Arm Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline One Arm Press1.webp"),
  "Chest/Dumbbell Incline Palm-in Press": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Palm-in Press.webp"),
  "Chest/Dumbbell Incline Palm-in Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Palm-in Press1.webp"),
  "Chest/Dumbbell Incline Squeeze Press": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Squeeze Press.webp"),
  "Chest/Dumbbell Incline Squeeze Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Squeeze Press1.webp"),
  "Chest/Dumbbell Incline Svend Close grip Press": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Incline Svend Close grip Press.webp"
    ),
  "Chest/Dumbbell Incline Svend Close grip Press1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Incline Svend Close grip Press1.webp"
    ),
  "Chest/Dumbbell Incline Twisted Fly": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Twisted Fly.webp"),
  "Chest/Dumbbell Incline Twisted Fly1": () =>
    import("../assets/exercises/Chest/Dumbbell Incline Twisted Fly1.webp"),
  "Chest/Dumbbell One Arm Floor Fly": () =>
    import("../assets/exercises/Chest/Dumbbell One Arm Floor Fly.webp"),
  "Chest/Dumbbell One Arm Floor Fly1": () =>
    import("../assets/exercises/Chest/Dumbbell One Arm Floor Fly1.webp"),
  "Chest/Dumbbell One Arm Floor Press": () =>
    import("../assets/exercises/Chest/Dumbbell One Arm Floor Press.webp"),
  "Chest/Dumbbell One Arm Floor Press1": () =>
    import("../assets/exercises/Chest/Dumbbell One Arm Floor Press1.webp"),
  "Chest/Dumbbell One Arm Wide Grip Bench Press": () =>
    import(
      "../assets/exercises/Chest/Dumbbell One Arm Wide Grip Bench Press.webp"
    ),
  "Chest/Dumbbell One Arm Wide Grip Bench Press1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell One Arm Wide Grip Bench Press1.webp"
    ),
  "Chest/Dumbbell Single Arm Floor Press 2": () =>
    import("../assets/exercises/Chest/Dumbbell Single Arm Floor Press 2.webp"),
  "Chest/Dumbbell Single Arm Floor Press 3": () =>
    import("../assets/exercises/Chest/Dumbbell Single Arm Floor Press 3.webp"),
  "Chest/Dumbbell Single Arm Floor Press From Close Elbow": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Single Arm Floor Press From Close Elbow.webp"
    ),
  "Chest/Dumbbell Single Arm Floor Press From Close Elbow1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Single Arm Floor Press From Close Elbow1.webp"
    ),
  "Chest/Dumbbell Standing Single Arm Cross Raise": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Standing Single Arm Cross Raise.webp"
    ),
  "Chest/Dumbbell Standing Single Arm Cross Raise1": () =>
    import(
      "../assets/exercises/Chest/Dumbbell Standing Single Arm Cross Raise1.webp"
    ),
  "Chest/Dumbbell Svend Press": () =>
    import("../assets/exercises/Chest/Dumbbell Svend Press.webp"),
  "Chest/Dumbbell Svend Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Svend Press1.webp"),
  "Chest/Dumbbell Tate Press": () =>
    import("../assets/exercises/Chest/Dumbbell Tate Press.webp"),
  "Chest/Dumbbell Tate Press1": () =>
    import("../assets/exercises/Chest/Dumbbell Tate Press1.webp"),
  "Chest/Dumbbell floor  Fly": () =>
    import("../assets/exercises/Chest/Dumbbell floor  Fly.webp"),
  "Chest/Dumbbell floor  Fly1": () =>
    import("../assets/exercises/Chest/Dumbbell floor  Fly1.webp"),
  "Chest/Elevated Push Up": () =>
    import("../assets/exercises/Chest/Elevated Push Up.webp"),
  "Chest/Elevated Push Up1": () =>
    import("../assets/exercises/Chest/Elevated Push Up1.webp"),
  "Chest/Explosive push ups": () =>
    import("../assets/exercises/Chest/Explosive push ups.webp"),
  "Chest/Explosive push ups1": () =>
    import("../assets/exercises/Chest/Explosive push ups1.webp"),
  "Chest/Full planche push up": () =>
    import("../assets/exercises/Chest/Full planche push up.webp"),
  "Chest/Full planche push up1": () =>
    import("../assets/exercises/Chest/Full planche push up1.webp"),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternate Arms": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternate Arms.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternate Arms1": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternate Arms1.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternating Arms_Female":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternating Arms_Female.webp"
      ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternating Arms_Female1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Alternating Arms_Female1.webp"
      ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arm_Female": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arm_Female.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arm_Female1": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arm_Female1.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arms": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arms.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arms1": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Both Arms1.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm1": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm1.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm_Female": () =>
    import(
      "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm_Female.webp"
    ),
  "Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm_Female1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH MTS ISO-LATERAL DECLINE PRESS Single Arm_Female1.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press 2":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press 2.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press 3":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press 3.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Alternate Arm_Female":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Alternate Arm_Female.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Alternate Arm_Female1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Alternate Arm_Female1.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Single Arm_Female":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Single Arm_Female.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Single Arm_Female1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press Single Arm_Female1.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Alternating arms":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Alternating arms.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Alternating arms1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Alternating arms1.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Female":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Female.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Female1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Female1.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Single arm":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Single arm.webp"
      ),
  "Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Single arm1":
    () =>
      import(
        "../assets/exercises/Chest/HAMMER STRENGTH Plate-Loaded Combination Iso-Lateral Chest - Chest Press_Single arm1.webp"
      ),
  "Chest/Incline Push-Up (on box)": () =>
    import("../assets/exercises/Chest/Incline Push-Up (on box).webp"),
  "Chest/Incline Push-Up (on box)1": () =>
    import("../assets/exercises/Chest/Incline Push-Up (on box)1.webp"),
  "Chest/Modified Hindu Push up": () =>
    import("../assets/exercises/Chest/Modified Hindu Push up.webp"),
  "Chest/Modified Hindu Push up1": () =>
    import("../assets/exercises/Chest/Modified Hindu Push up1.webp"),
  "Chest/Normal Push-up": () =>
    import("../assets/exercises/Chest/Normal Push-up.webp"),
  "Chest/Normal Push-up1": () =>
    import("../assets/exercises/Chest/Normal Push-up1.webp"),
  "Chest/Push Pull Front Handle Push": () =>
    import("../assets/exercises/Chest/Push Pull Front Handle Push.webp"),
  "Chest/Push Pull Front Handle Push1": () =>
    import("../assets/exercises/Chest/Push Pull Front Handle Push1.webp"),
  "Chest/Push Pull Front Handle Push_Female": () =>
    import("../assets/exercises/Chest/Push Pull Front Handle Push_Female.webp"),
  "Chest/Push Pull Front Handle Push_Female1": () =>
    import(
      "../assets/exercises/Chest/Push Pull Front Handle Push_Female1.webp"
    ),
  "Chest/Push up plus": () =>
    import("../assets/exercises/Chest/Push up plus.webp"),
  "Chest/Push up plus1": () =>
    import("../assets/exercises/Chest/Push up plus1.webp"),
  "Chest/Resistance Band Assisted Push-up": () =>
    import("../assets/exercises/Chest/Resistance Band Assisted Push-up.webp"),
  "Chest/Resistance Band Assisted Push-up1": () =>
    import("../assets/exercises/Chest/Resistance Band Assisted Push-up1.webp"),
  "Chest/Resistance Band Assisted Push-up_Female": () =>
    import(
      "../assets/exercises/Chest/Resistance Band Assisted Push-up_Female.webp"
    ),
  "Chest/Resistance Band Assisted Push-up_Female1": () =>
    import(
      "../assets/exercises/Chest/Resistance Band Assisted Push-up_Female1.webp"
    ),
  "Chest/Side push up": () =>
    import("../assets/exercises/Chest/Side push up.webp"),
  "Chest/Side push up1": () =>
    import("../assets/exercises/Chest/Side push up1.webp"),
  "Chest/Side to side push up": () =>
    import("../assets/exercises/Chest/Side to side push up.webp"),
  "Chest/Side to side push up1": () =>
    import("../assets/exercises/Chest/Side to side push up1.webp"),
  "Chest/Suspension Trainer with Grips Chest Fly": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Chest Fly.webp"
    ),
  "Chest/Suspension Trainer with Grips Chest Fly1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Chest Fly1.webp"
    ),
  "Chest/Suspension Trainer with Grips Chest Fly_female": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Chest Fly_female.webp"
    ),
  "Chest/Suspension Trainer with Grips Chest Fly_female1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Chest Fly_female1.webp"
    ),
  "Chest/Suspension Trainer with Grips Decline Push-up": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Decline Push-up.webp"
    ),
  "Chest/Suspension Trainer with Grips Decline Push-up1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Decline Push-up1.webp"
    ),
  "Chest/Suspension Trainer with Grips Push-up to Side Plank": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Push-up to Side Plank.webp"
    ),
  "Chest/Suspension Trainer with Grips Push-up to Side Plank1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Push-up to Side Plank1.webp"
    ),
  "Chest/Suspension Trainer with Grips Push-up to Side Plank_female": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Push-up to Side Plank_female.webp"
    ),
  "Chest/Suspension Trainer with Grips Push-up to Side Plank_female1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Push-up to Side Plank_female1.webp"
    ),
  "Chest/Suspension Trainer with Grips Reverse Push-up": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Reverse Push-up.webp"
    ),
  "Chest/Suspension Trainer with Grips Reverse Push-up1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Reverse Push-up1.webp"
    ),
  "Chest/Suspension Trainer with Grips Reverse Push-up_female": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Reverse Push-up_female.webp"
    ),
  "Chest/Suspension Trainer with Grips Reverse Push-up_female1": () =>
    import(
      "../assets/exercises/Chest/Suspension Trainer with Grips Reverse Push-up_female1.webp"
    ),
  "Chest/band low alternate chest press_female": () =>
    import(
      "../assets/exercises/Chest/band low alternate chest press_female.webp"
    ),
  "Chest/band low alternate chest press_female1": () =>
    import(
      "../assets/exercises/Chest/band low alternate chest press_female1.webp"
    ),
  "Chest/band low chest fly_female": () =>
    import("../assets/exercises/Chest/band low chest fly_female.webp"),
  "Chest/band low chest fly_female1": () =>
    import("../assets/exercises/Chest/band low chest fly_female1.webp"),
  "Chest/band low chest press_female": () =>
    import("../assets/exercises/Chest/band low chest press_female.webp"),
  "Chest/band low chest press_female1": () =>
    import("../assets/exercises/Chest/band low chest press_female1.webp"),
  "Chest/barbell bench press decline": () =>
    import("../assets/exercises/Chest/barbell bench press decline.webp"),
  "Chest/barbell bench press decline1": () =>
    import("../assets/exercises/Chest/barbell bench press decline1.webp"),
  "Chest/barbell bench press incline": () =>
    import("../assets/exercises/Chest/barbell bench press incline.webp"),
  "Chest/barbell bench press incline1": () =>
    import("../assets/exercises/Chest/barbell bench press incline1.webp"),
  "Chest/barbell bench press": () =>
    import("../assets/exercises/Chest/barbell bench press.webp"),
  "Chest/barbell bench press1": () =>
    import("../assets/exercises/Chest/barbell bench press1.webp"),
  "Chest/barbell floor chest press_female": () =>
    import("../assets/exercises/Chest/barbell floor chest press_female.webp"),
  "Chest/barbell floor chest press_female1": () =>
    import("../assets/exercises/Chest/barbell floor chest press_female1.webp"),
  "Chest/cable lying fly": () =>
    import("../assets/exercises/Chest/cable lying fly.webp"),
  "Chest/cable lying fly1": () =>
    import("../assets/exercises/Chest/cable lying fly1.webp"),
  "Chest/cable machine high to low": () =>
    import("../assets/exercises/Chest/cable machine high to low.webp"),
  "Chest/cable machine high to low1": () =>
    import("../assets/exercises/Chest/cable machine high to low1.webp"),
  "Chest/chest dip 2": () =>
    import("../assets/exercises/Chest/chest dip 2.webp"),
  "Chest/chest dip 3": () =>
    import("../assets/exercises/Chest/chest dip 3.webp"),
  "Chest/chest dip machine": () =>
    import("../assets/exercises/Chest/chest dip machine.webp"),
  "Chest/chest dip machine1": () =>
    import("../assets/exercises/Chest/chest dip machine1.webp"),
  "Chest/chest dip weighted slow": () =>
    import("../assets/exercises/Chest/chest dip weighted slow.webp"),
  "Chest/chest dip weighted slow1": () =>
    import("../assets/exercises/Chest/chest dip weighted slow1.webp"),
  "Chest/chest dip weighted": () =>
    import("../assets/exercises/Chest/chest dip weighted.webp"),
  "Chest/chest dip weighted1": () =>
    import("../assets/exercises/Chest/chest dip weighted1.webp"),
  "Chest/chest dip with pause bodyweight": () =>
    import("../assets/exercises/Chest/chest dip with pause bodyweight.webp"),
  "Chest/chest dip with pause bodyweight1": () =>
    import("../assets/exercises/Chest/chest dip with pause bodyweight1.webp"),
  "Chest/chest fly high to low resistance band": () =>
    import(
      "../assets/exercises/Chest/chest fly high to low resistance band.webp"
    ),
  "Chest/chest fly high to low resistance band1": () =>
    import(
      "../assets/exercises/Chest/chest fly high to low resistance band1.webp"
    ),
  "Chest/chest fly low to high resistance band": () =>
    import(
      "../assets/exercises/Chest/chest fly low to high resistance band.webp"
    ),
  "Chest/chest fly low to high resistance band1": () =>
    import(
      "../assets/exercises/Chest/chest fly low to high resistance band1.webp"
    ),
  "Chest/chest press front resistance band": () =>
    import("../assets/exercises/Chest/chest press front resistance band.webp"),
  "Chest/chest press front resistance band1": () =>
    import("../assets/exercises/Chest/chest press front resistance band1.webp"),
  "Chest/chest press high to low cable resistance band": () =>
    import(
      "../assets/exercises/Chest/chest press high to low cable resistance band.webp"
    ),
  "Chest/chest press high to low cable resistance band1": () =>
    import(
      "../assets/exercises/Chest/chest press high to low cable resistance band1.webp"
    ),
  "Chest/chest press low to high resistance band": () =>
    import(
      "../assets/exercises/Chest/chest press low to high resistance band.webp"
    ),
  "Chest/chest press low to high resistance band1": () =>
    import(
      "../assets/exercises/Chest/chest press low to high resistance band1.webp"
    ),
  "Chest/child pose up": () =>
    import("../assets/exercises/Chest/child pose up.webp"),
  "Chest/child pose up1": () =>
    import("../assets/exercises/Chest/child pose up1.webp"),
  "Chest/clap push ups": () =>
    import("../assets/exercises/Chest/clap push ups.webp"),
  "Chest/clap push ups1": () =>
    import("../assets/exercises/Chest/clap push ups1.webp"),
  "Chest/decline push up": () =>
    import("../assets/exercises/Chest/decline push up.webp"),
  "Chest/decline push up1": () =>
    import("../assets/exercises/Chest/decline push up1.webp"),
  "Chest/dumbbell chest press decline": () =>
    import("../assets/exercises/Chest/dumbbell chest press decline.webp"),
  "Chest/dumbbell chest press decline1": () =>
    import("../assets/exercises/Chest/dumbbell chest press decline1.webp"),
  "Chest/dumbbell chest press flat": () =>
    import("../assets/exercises/Chest/dumbbell chest press flat.webp"),
  "Chest/dumbbell chest press flat1": () =>
    import("../assets/exercises/Chest/dumbbell chest press flat1.webp"),
  "Chest/dumbbell chest press incline bench": () =>
    import("../assets/exercises/Chest/dumbbell chest press incline bench.webp"),
  "Chest/dumbbell chest press incline bench1": () =>
    import(
      "../assets/exercises/Chest/dumbbell chest press incline bench1.webp"
    ),
  "Chest/dumbbell chest pull over": () =>
    import("../assets/exercises/Chest/dumbbell chest pull over.webp"),
  "Chest/dumbbell chest pull over1": () =>
    import("../assets/exercises/Chest/dumbbell chest pull over1.webp"),
  "Chest/dumbbell fly flat bench 2": () =>
    import("../assets/exercises/Chest/dumbbell fly flat bench 2.webp"),
  "Chest/dumbbell fly flat bench 3": () =>
    import("../assets/exercises/Chest/dumbbell fly flat bench 3.webp"),
  "Chest/dumbbell fly flat bench slow": () =>
    import("../assets/exercises/Chest/dumbbell fly flat bench slow.webp"),
  "Chest/dumbbell fly flat bench slow1": () =>
    import("../assets/exercises/Chest/dumbbell fly flat bench slow1.webp"),
  "Chest/dumbbell fly incline bench": () =>
    import("../assets/exercises/Chest/dumbbell fly incline bench.webp"),
  "Chest/dumbbell fly incline bench1": () =>
    import("../assets/exercises/Chest/dumbbell fly incline bench1.webp"),
  "Chest/flat bench cable fly": () =>
    import("../assets/exercises/Chest/flat bench cable fly.webp"),
  "Chest/flat bench cable fly1": () =>
    import("../assets/exercises/Chest/flat bench cable fly1.webp"),
  "Chest/floor cable resistance band press": () =>
    import("../assets/exercises/Chest/floor cable resistance band press.webp"),
  "Chest/floor cable resistance band press1": () =>
    import("../assets/exercises/Chest/floor cable resistance band press1.webp"),
  "Chest/incline bench cable fly": () =>
    import("../assets/exercises/Chest/incline bench cable fly.webp"),
  "Chest/incline bench cable fly1": () =>
    import("../assets/exercises/Chest/incline bench cable fly1.webp"),
  "Chest/landmine chest  press 1": () =>
    import("../assets/exercises/Chest/landmine chest  press 1.webp"),
  "Chest/landmine chest  press": () =>
    import("../assets/exercises/Chest/landmine chest  press.webp"),
  "Chest/lying pull over with resistance band cable 1": () =>
    import(
      "../assets/exercises/Chest/lying pull over with resistance band cable 1.webp"
    ),
  "Chest/lying pull over with resistance band cable": () =>
    import(
      "../assets/exercises/Chest/lying pull over with resistance band cable.webp"
    ),
  "Chest/machine chest press decline 1": () =>
    import("../assets/exercises/Chest/machine chest press decline 1.webp"),
  "Chest/machine chest press decline": () =>
    import("../assets/exercises/Chest/machine chest press decline.webp"),
  "Chest/machine chest press incline": () =>
    import("../assets/exercises/Chest/machine chest press incline.webp"),
  "Chest/machine chest press incline1": () =>
    import("../assets/exercises/Chest/machine chest press incline1.webp"),
  "Chest/machine fly": () =>
    import("../assets/exercises/Chest/machine fly.webp"),
  "Chest/machine fly1": () =>
    import("../assets/exercises/Chest/machine fly1.webp"),
  "Chest/peck deck fly machine": () =>
    import("../assets/exercises/Chest/peck deck fly machine.webp"),
  "Chest/peck deck fly machine1": () =>
    import("../assets/exercises/Chest/peck deck fly machine1.webp"),
  "Chest/push up and rotation": () =>
    import("../assets/exercises/Chest/push up and rotation.webp"),
  "Chest/push up and rotation1": () =>
    import("../assets/exercises/Chest/push up and rotation1.webp"),
  "Chest/push ups bodyweight": () =>
    import("../assets/exercises/Chest/push ups bodyweight.webp"),
  "Chest/push ups bodyweight1": () =>
    import("../assets/exercises/Chest/push ups bodyweight1.webp"),
  "Chest/smith machine press decline": () =>
    import("../assets/exercises/Chest/smith machine press decline.webp"),
  "Chest/smith machine press decline1": () =>
    import("../assets/exercises/Chest/smith machine press decline1.webp"),
  "Chest/smith machine press flat": () =>
    import("../assets/exercises/Chest/smith machine press flat.webp"),
  "Chest/smith machine press flat1": () =>
    import("../assets/exercises/Chest/smith machine press flat1.webp"),
  "Chest/smith machine press incline  1": () =>
    import("../assets/exercises/Chest/smith machine press incline  1.webp"),
  "Chest/smith machine press incline": () =>
    import("../assets/exercises/Chest/smith machine press incline.webp"),
  "Chest/svend press  flat bench 1": () =>
    import("../assets/exercises/Chest/svend press  flat bench 1.webp"),
  "Chest/svend press  flat bench": () =>
    import("../assets/exercises/Chest/svend press  flat bench.webp"),
  "Chest/svend press decline bench 1": () =>
    import("../assets/exercises/Chest/svend press decline bench 1.webp"),
  "Chest/svend press decline bench": () =>
    import("../assets/exercises/Chest/svend press decline bench.webp"),
  "Chest/svend press incline bench  1": () =>
    import("../assets/exercises/Chest/svend press incline bench  1.webp"),
  "Chest/svend press incline bench": () =>
    import("../assets/exercises/Chest/svend press incline bench.webp"),
  "Chest/wide push ups bodyweight  1": () =>
    import("../assets/exercises/Chest/wide push ups bodyweight  1.webp"),
  "Chest/wide push ups bodyweight": () =>
    import("../assets/exercises/Chest/wide push ups bodyweight.webp"),
  "Forearms/Band Wrist Curl_female": () =>
    import("../assets/exercises/Forearms/Band Wrist Curl_female.webp"),
  "Forearms/Band Wrist Curl_female1": () =>
    import("../assets/exercises/Forearms/Band Wrist Curl_female1.webp"),
  "Forearms/Barbell standing back wrist curl": () =>
    import(
      "../assets/exercises/Forearms/Barbell standing back wrist curl.webp"
    ),
  "Forearms/Barbell standing back wrist curl1": () =>
    import(
      "../assets/exercises/Forearms/Barbell standing back wrist curl1.webp"
    ),
  "Forearms/Barbell wrist extension on knees": () =>
    import(
      "../assets/exercises/Forearms/Barbell wrist extension on knees.webp"
    ),
  "Forearms/Barbell wrist extension on knees1": () =>
    import(
      "../assets/exercises/Forearms/Barbell wrist extension on knees1.webp"
    ),
  "Forearms/Cable Wrist Curl": () =>
    import("../assets/exercises/Forearms/Cable Wrist Curl.webp"),
  "Forearms/Cable Wrist Curl1": () =>
    import("../assets/exercises/Forearms/Cable Wrist Curl1.webp"),
  "Forearms/Dumbbell Lying Pronation Rotation on Floor": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Lying Pronation Rotation on Floor.webp"
    ),
  "Forearms/Dumbbell Lying Pronation Rotation on Floor1": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Lying Pronation Rotation on Floor1.webp"
    ),
  "Forearms/Dumbbell One Arm Seated Neutral Wrist Curl": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell One Arm Seated Neutral Wrist Curl.webp"
    ),
  "Forearms/Dumbbell One Arm Seated Neutral Wrist Curl1": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell One Arm Seated Neutral Wrist Curl1.webp"
    ),
  "Forearms/Dumbbell One arm Reverse Wrist Curl": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell One arm Reverse Wrist Curl.webp"
    ),
  "Forearms/Dumbbell One arm Reverse Wrist Curl1": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell One arm Reverse Wrist Curl1.webp"
    ),
  "Forearms/Dumbbell One arm Wrist Curl": () =>
    import("../assets/exercises/Forearms/Dumbbell One arm Wrist Curl.webp"),
  "Forearms/Dumbbell One arm Wrist Curl1": () =>
    import("../assets/exercises/Forearms/Dumbbell One arm Wrist Curl1.webp"),
  "Forearms/Dumbbell Over Bench Reverse Wrist Curl": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Over Bench Reverse Wrist Curl.webp"
    ),
  "Forearms/Dumbbell Over Bench Reverse Wrist Curl1": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Over Bench Reverse Wrist Curl1.webp"
    ),
  "Forearms/Dumbbell Over Bench Wrist Curl": () =>
    import("../assets/exercises/Forearms/Dumbbell Over Bench Wrist Curl.webp"),
  "Forearms/Dumbbell Over Bench Wrist Curl1": () =>
    import("../assets/exercises/Forearms/Dumbbell Over Bench Wrist Curl1.webp"),
  "Forearms/Dumbbell Reverse Wrist Curl": () =>
    import("../assets/exercises/Forearms/Dumbbell Reverse Wrist Curl.webp"),
  "Forearms/Dumbbell Reverse Wrist Curl1": () =>
    import("../assets/exercises/Forearms/Dumbbell Reverse Wrist Curl1.webp"),
  "Forearms/Dumbbell Seated Neutral Wrist Curl": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Seated Neutral Wrist Curl.webp"
    ),
  "Forearms/Dumbbell Seated Neutral Wrist Curl1": () =>
    import(
      "../assets/exercises/Forearms/Dumbbell Seated Neutral Wrist Curl1.webp"
    ),
  "Forearms/Dumbbell Standing Wrist Curl": () =>
    import("../assets/exercises/Forearms/Dumbbell Standing Wrist Curl.webp"),
  "Forearms/Dumbbell Standing Wrist Curl1": () =>
    import("../assets/exercises/Forearms/Dumbbell Standing Wrist Curl1.webp"),
  "Forearms/EZ Bar Seated Wrist Curl": () =>
    import("../assets/exercises/Forearms/EZ Bar Seated Wrist Curl.webp"),
  "Forearms/EZ Bar Seated Wrist Curl1": () =>
    import("../assets/exercises/Forearms/EZ Bar Seated Wrist Curl1.webp"),
  "Forearms/Wrist extension barbell": () =>
    import("../assets/exercises/Forearms/Wrist extension barbell.webp"),
  "Forearms/Wrist extension barbell1": () =>
    import("../assets/exercises/Forearms/Wrist extension barbell1.webp"),
  "Forearms/barbell palm down wrist curl over a bench_female": () =>
    import(
      "../assets/exercises/Forearms/barbell palm down wrist curl over a bench_female.webp"
    ),
  "Forearms/barbell palm down wrist curl over a bench_female1": () =>
    import(
      "../assets/exercises/Forearms/barbell palm down wrist curl over a bench_female1.webp"
    ),
  "Forearms/barbell wrist curl on knees": () =>
    import("../assets/exercises/Forearms/barbell wrist curl on knees.webp"),
  "Forearms/barbell wrist curl on knees1": () =>
    import("../assets/exercises/Forearms/barbell wrist curl on knees1.webp"),
  "Forearms/barbell wrist curl wide legs": () =>
    import("../assets/exercises/Forearms/barbell wrist curl wide legs.webp"),
  "Forearms/barbell wrist curl wide legs1": () =>
    import("../assets/exercises/Forearms/barbell wrist curl wide legs1.webp"),
  "Forearms/wrist curl barbell": () =>
    import("../assets/exercises/Forearms/wrist curl barbell.webp"),
  "Forearms/wrist curl barbell1": () =>
    import("../assets/exercises/Forearms/wrist curl barbell1.webp"),
  "Forearms/wrist curl dumbbell": () =>
    import("../assets/exercises/Forearms/wrist curl dumbbell.webp"),
  "Forearms/wrist curl dumbbell1": () =>
    import("../assets/exercises/Forearms/wrist curl dumbbell1.webp"),
  "Forearms/wrist extension barbell2": () =>
    import("../assets/exercises/Forearms/wrist extension barbell2.webp"),
  "Forearms/wrist extension barbell3": () =>
    import("../assets/exercises/Forearms/wrist extension barbell3.webp"),
  "Forearms/wrist extension dumbbell": () =>
    import("../assets/exercises/Forearms/wrist extension dumbbell.webp"),
  "Forearms/wrist extension dumbbell1": () =>
    import("../assets/exercises/Forearms/wrist extension dumbbell1.webp"),
  "Legs/4 Reverse Lunge and 4 Side Taps_female": () =>
    import(
      "../assets/exercises/Legs/4 Reverse Lunge and 4 Side Taps_female.webp"
    ),
  "Legs/4 Reverse Lunge and 4 Side Taps_female1": () =>
    import(
      "../assets/exercises/Legs/4 Reverse Lunge and 4 Side Taps_female1.webp"
    ),
  "Legs/45 degrees Step Out_female": () =>
    import("../assets/exercises/Legs/45 degrees Step Out_female.webp"),
  "Legs/45 degrees Step Out_female1": () =>
    import("../assets/exercises/Legs/45 degrees Step Out_female1.webp"),
  "Legs/Alternate Single Leg Raise Plank_female": () =>
    import(
      "../assets/exercises/Legs/Alternate Single Leg Raise Plank_female.webp"
    ),
  "Legs/Alternate Single Leg Raise Plank_female1": () =>
    import(
      "../assets/exercises/Legs/Alternate Single Leg Raise Plank_female1.webp"
    ),
  "Legs/Alternate Sprinter Lunge_female": () =>
    import("../assets/exercises/Legs/Alternate Sprinter Lunge_female.webp"),
  "Legs/Alternate Sprinter Lunge_female1": () =>
    import("../assets/exercises/Legs/Alternate Sprinter Lunge_female1.webp"),
  "Legs/Alternate sprinter lunge": () =>
    import("../assets/exercises/Legs/Alternate sprinter lunge.webp"),
  "Legs/Alternate sprinter lunge1": () =>
    import("../assets/exercises/Legs/Alternate sprinter lunge1.webp"),
  "Legs/Alternating Step Out_female": () =>
    import("../assets/exercises/Legs/Alternating Step Out_female.webp"),
  "Legs/Alternating Step Out_female1": () =>
    import("../assets/exercises/Legs/Alternating Step Out_female1.webp"),
  "Legs/Alternating step out": () =>
    import("../assets/exercises/Legs/Alternating step out.webp"),
  "Legs/Alternating step out1": () =>
    import("../assets/exercises/Legs/Alternating step out1.webp"),
  "Legs/Ankle - Dorsal Flexion_female": () =>
    import("../assets/exercises/Legs/Ankle - Dorsal Flexion_female.webp"),
  "Legs/Ankle - Dorsal Flexion_female1": () =>
    import("../assets/exercises/Legs/Ankle - Dorsal Flexion_female1.webp"),
  "Legs/Ankle - Plantar Flexion_female": () =>
    import("../assets/exercises/Legs/Ankle - Plantar Flexion_female.webp"),
  "Legs/Ankle - Plantar Flexion_female1": () =>
    import("../assets/exercises/Legs/Ankle - Plantar Flexion_female1.webp"),
  "Legs/Ankle Circles_female": () =>
    import("../assets/exercises/Legs/Ankle Circles_female.webp"),
  "Legs/Ankle Circles_female1": () =>
    import("../assets/exercises/Legs/Ankle Circles_female1.webp"),
  "Legs/Archer Stepback_female": () =>
    import("../assets/exercises/Legs/Archer Stepback_female.webp"),
  "Legs/Archer Stepback_female1": () =>
    import("../assets/exercises/Legs/Archer Stepback_female1.webp"),
  "Legs/Archer step back": () =>
    import("../assets/exercises/Legs/Archer step back.webp"),
  "Legs/Archer step back1": () =>
    import("../assets/exercises/Legs/Archer step back1.webp"),
  "Legs/Assisted Bulgarian Split Squat": () =>
    import("../assets/exercises/Legs/Assisted Bulgarian Split Squat.webp"),
  "Legs/Assisted Bulgarian Split Squat1": () =>
    import("../assets/exercises/Legs/Assisted Bulgarian Split Squat1.webp"),
  "Legs/Assisted Bulgarian Split Squat_Female": () =>
    import(
      "../assets/exercises/Legs/Assisted Bulgarian Split Squat_Female.webp"
    ),
  "Legs/Assisted Bulgarian Split Squat_Female1": () =>
    import(
      "../assets/exercises/Legs/Assisted Bulgarian Split Squat_Female1.webp"
    ),
  "Legs/Assisted Pistol Squats": () =>
    import("../assets/exercises/Legs/Assisted Pistol Squats.webp"),
  "Legs/Assisted Pistol Squats1": () =>
    import("../assets/exercises/Legs/Assisted Pistol Squats1.webp"),
  "Legs/Assisted Pistol Squats_Female": () =>
    import("../assets/exercises/Legs/Assisted Pistol Squats_Female.webp"),
  "Legs/Assisted Pistol Squats_Female1": () =>
    import("../assets/exercises/Legs/Assisted Pistol Squats_Female1.webp"),
  "Legs/Back Forward Leg Swings_female": () =>
    import("../assets/exercises/Legs/Back Forward Leg Swings_female.webp"),
  "Legs/Back Forward Leg Swings_female1": () =>
    import("../assets/exercises/Legs/Back Forward Leg Swings_female1.webp"),
  "Legs/Back and forward leg swings": () =>
    import("../assets/exercises/Legs/Back and forward leg swings.webp"),
  "Legs/Back and forward leg swings1": () =>
    import("../assets/exercises/Legs/Back and forward leg swings1.webp"),
  "Legs/Balance Board (VERSION 2)_female": () =>
    import("../assets/exercises/Legs/Balance Board (VERSION 2)_female.webp"),
  "Legs/Balance Board (VERSION 2)_female1": () =>
    import("../assets/exercises/Legs/Balance Board (VERSION 2)_female1.webp"),
  "Legs/Ball Headlock Squat": () =>
    import("../assets/exercises/Legs/Ball Headlock Squat.webp"),
  "Legs/Ball Headlock Squat1": () =>
    import("../assets/exercises/Legs/Ball Headlock Squat1.webp"),
  "Legs/Ball Headlock Squat_Female": () =>
    import("../assets/exercises/Legs/Ball Headlock Squat_Female.webp"),
  "Legs/Ball Headlock Squat_Female1": () =>
    import("../assets/exercises/Legs/Ball Headlock Squat_Female1.webp"),
  "Legs/Band Bent-over Hip Extension_female": () =>
    import("../assets/exercises/Legs/Band Bent-over Hip Extension_female.webp"),
  "Legs/Band Bent-over Hip Extension_female1": () =>
    import(
      "../assets/exercises/Legs/Band Bent-over Hip Extension_female1.webp"
    ),
  "Legs/Band Cross Abduction": () =>
    import("../assets/exercises/Legs/Band Cross Abduction.webp"),
  "Legs/Band Cross Abduction1": () =>
    import("../assets/exercises/Legs/Band Cross Abduction1.webp"),
  "Legs/Band Cross Abduction_female": () =>
    import("../assets/exercises/Legs/Band Cross Abduction_female.webp"),
  "Legs/Band Cross Abduction_female1": () =>
    import("../assets/exercises/Legs/Band Cross Abduction_female1.webp"),
  "Legs/Band Deadlift_female": () =>
    import("../assets/exercises/Legs/Band Deadlift_female.webp"),
  "Legs/Band Deadlift_female1": () =>
    import("../assets/exercises/Legs/Band Deadlift_female1.webp"),
  "Legs/Band Hip Adduction": () =>
    import("../assets/exercises/Legs/Band Hip Adduction.webp"),
  "Legs/Band Hip Adduction1": () =>
    import("../assets/exercises/Legs/Band Hip Adduction1.webp"),
  "Legs/Band Hip Adduction_Female": () =>
    import("../assets/exercises/Legs/Band Hip Adduction_Female.webp"),
  "Legs/Band Hip Adduction_Female1": () =>
    import("../assets/exercises/Legs/Band Hip Adduction_Female1.webp"),
  "Legs/Band Leg Press": () =>
    import("../assets/exercises/Legs/Band Leg Press.webp"),
  "Legs/Band Leg Press1": () =>
    import("../assets/exercises/Legs/Band Leg Press1.webp"),
  "Legs/Band Leg Press_Female": () =>
    import("../assets/exercises/Legs/Band Leg Press_Female.webp"),
  "Legs/Band Leg Press_Female1": () =>
    import("../assets/exercises/Legs/Band Leg Press_Female1.webp"),
  "Legs/Band Pullthrough": () =>
    import("../assets/exercises/Legs/Band Pullthrough.webp"),
  "Legs/Band Pullthrough1": () =>
    import("../assets/exercises/Legs/Band Pullthrough1.webp"),
  "Legs/Band Pullthrough_Female": () =>
    import("../assets/exercises/Legs/Band Pullthrough_Female.webp"),
  "Legs/Band Pullthrough_Female1": () =>
    import("../assets/exercises/Legs/Band Pullthrough_Female1.webp"),
  "Legs/Band Spanish Split Squat": () =>
    import("../assets/exercises/Legs/Band Spanish Split Squat.webp"),
  "Legs/Band Spanish Split Squat1": () =>
    import("../assets/exercises/Legs/Band Spanish Split Squat1.webp"),
  "Legs/Band Spanish Split Squat_Female": () =>
    import("../assets/exercises/Legs/Band Spanish Split Squat_Female.webp"),
  "Legs/Band Spanish Split Squat_Female1": () =>
    import("../assets/exercises/Legs/Band Spanish Split Squat_Female1.webp"),
  "Legs/Band Standing Leg Curl_female": () =>
    import("../assets/exercises/Legs/Band Standing Leg Curl_female.webp"),
  "Legs/Band Standing Leg Curl_female1": () =>
    import("../assets/exercises/Legs/Band Standing Leg Curl_female1.webp"),
  "Legs/Band Two Legs Calf Raise - (Band under both legs) VERSION 2_female":
    () =>
      import(
        "../assets/exercises/Legs/Band Two Legs Calf Raise - (Band under both legs) VERSION 2_female.webp"
      ),
  "Legs/Band Two Legs Calf Raise - (Band under both legs) VERSION 2_female1":
    () =>
      import(
        "../assets/exercises/Legs/Band Two Legs Calf Raise - (Band under both legs) VERSION 2_female1.webp"
      ),
  "Legs/Band single leg split squat_female": () =>
    import("../assets/exercises/Legs/Band single leg split squat_female.webp"),
  "Legs/Band single leg split squat_female1": () =>
    import("../assets/exercises/Legs/Band single leg split squat_female1.webp"),
  "Legs/Banded feet elevated hip thrusters": () =>
    import("../assets/exercises/Legs/Banded feet elevated hip thrusters.webp"),
  "Legs/Banded feet elevated hip thrusters1": () =>
    import("../assets/exercises/Legs/Banded feet elevated hip thrusters1.webp"),
  "Legs/Banded feet elevated hip thrusters_Female": () =>
    import(
      "../assets/exercises/Legs/Banded feet elevated hip thrusters_Female.webp"
    ),
  "Legs/Banded feet elevated hip thrusters_Female1": () =>
    import(
      "../assets/exercises/Legs/Banded feet elevated hip thrusters_Female1.webp"
    ),
  "Legs/Barbell Bench Lateral Step-up_female": () =>
    import(
      "../assets/exercises/Legs/Barbell Bench Lateral Step-up_female.webp"
    ),
  "Legs/Barbell Bench Lateral Step-up_female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Bench Lateral Step-up_female1.webp"
    ),
  "Legs/Barbell Bench Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Bench Squat_female.webp"),
  "Legs/Barbell Bench Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Bench Squat_female1.webp"),
  "Legs/Barbell Box Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Box Squat_female.webp"),
  "Legs/Barbell Box Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Box Squat_female1.webp"),
  "Legs/Barbell Calf Jump": () =>
    import("../assets/exercises/Legs/Barbell Calf Jump.webp"),
  "Legs/Barbell Calf Jump1": () =>
    import("../assets/exercises/Legs/Barbell Calf Jump1.webp"),
  "Legs/Barbell Calf Jump_Female": () =>
    import("../assets/exercises/Legs/Barbell Calf Jump_Female.webp"),
  "Legs/Barbell Calf Jump_Female1": () =>
    import("../assets/exercises/Legs/Barbell Calf Jump_Female1.webp"),
  "Legs/Barbell Clean-grip Front Squat_female": () =>
    import(
      "../assets/exercises/Legs/Barbell Clean-grip Front Squat_female.webp"
    ),
  "Legs/Barbell Clean-grip Front Squat_female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Clean-grip Front Squat_female1.webp"
    ),
  "Legs/Barbell Curtsy Lunge_female": () =>
    import("../assets/exercises/Legs/Barbell Curtsy Lunge_female.webp"),
  "Legs/Barbell Curtsy Lunge_female1": () =>
    import("../assets/exercises/Legs/Barbell Curtsy Lunge_female1.webp"),
  "Legs/Barbell Feet Elevated Figure Four Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Figure Four Glute Bridge_Female.webp"
    ),
  "Legs/Barbell Feet Elevated Figure Four Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Figure Four Glute Bridge_Female1.webp"
    ),
  "Legs/Barbell Feet Elevated Figure Four Glute Bridge_Male": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Figure Four Glute Bridge_Male.webp"
    ),
  "Legs/Barbell Feet Elevated Figure Four Glute Bridge_Male1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Figure Four Glute Bridge_Male1.webp"
    ),
  "Legs/Barbell Feet Elevated Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Glute Bridge_Female.webp"
    ),
  "Legs/Barbell Feet Elevated Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Glute Bridge_Female1.webp"
    ),
  "Legs/Barbell Feet Elevated Glute Bridge_Male": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Glute Bridge_Male.webp"
    ),
  "Legs/Barbell Feet Elevated Glute Bridge_Male1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Glute Bridge_Male1.webp"
    ),
  "Legs/Barbell Feet Elevated Single Leg Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Single Leg Glute Bridge_Female.webp"
    ),
  "Legs/Barbell Feet Elevated Single Leg Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Single Leg Glute Bridge_Female1.webp"
    ),
  "Legs/Barbell Feet Elevated Single Leg Glute Bridge_Male": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Single Leg Glute Bridge_Male.webp"
    ),
  "Legs/Barbell Feet Elevated Single Leg Glute Bridge_Male1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Single Leg Glute Bridge_Male1.webp"
    ),
  "Legs/Barbell Feet Elevated Staggered Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Staggered Glute Bridge_Female.webp"
    ),
  "Legs/Barbell Feet Elevated Staggered Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Staggered Glute Bridge_Female1.webp"
    ),
  "Legs/Barbell Feet Elevated Staggered Glute Bridge_Male": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Staggered Glute Bridge_Male.webp"
    ),
  "Legs/Barbell Feet Elevated Staggered Glute Bridge_Male1": () =>
    import(
      "../assets/exercises/Legs/Barbell Feet Elevated Staggered Glute Bridge_Male1.webp"
    ),
  "Legs/Barbell Full Squat Side POV_female": () =>
    import("../assets/exercises/Legs/Barbell Full Squat Side POV_female.webp"),
  "Legs/Barbell Full Squat Side POV_female1": () =>
    import("../assets/exercises/Legs/Barbell Full Squat Side POV_female1.webp"),
  "Legs/Barbell Full Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Full Squat_female.webp"),
  "Legs/Barbell Full Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Full Squat_female1.webp"),
  "Legs/Barbell Glute Bridge (hands on bar)_female": () =>
    import(
      "../assets/exercises/Legs/Barbell Glute Bridge (hands on bar)_female.webp"
    ),
  "Legs/Barbell Glute Bridge (hands on bar)_female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Glute Bridge (hands on bar)_female1.webp"
    ),
  "Legs/Barbell Hip Thrust  ": () =>
    import("../assets/exercises/Legs/Barbell Hip Thrust  .webp"),
  "Legs/Barbell Hip Thrust  1": () =>
    import("../assets/exercises/Legs/Barbell Hip Thrust  1.webp"),
  "Legs/Barbell Jefferson Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Jefferson Squat_female.webp"),
  "Legs/Barbell Jefferson Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Jefferson Squat_female1.webp"),
  "Legs/Barbell Jump Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Jump Squat_female.webp"),
  "Legs/Barbell Jump Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Jump Squat_female1.webp"),
  "Legs/Barbell KAS Glute Bridge_female": () =>
    import("../assets/exercises/Legs/Barbell KAS Glute Bridge_female.webp"),
  "Legs/Barbell KAS Glute Bridge_female1": () =>
    import("../assets/exercises/Legs/Barbell KAS Glute Bridge_female1.webp"),
  "Legs/Barbell KAS glute bridge": () =>
    import("../assets/exercises/Legs/Barbell KAS glute bridge.webp"),
  "Legs/Barbell KAS glute bridge1": () =>
    import("../assets/exercises/Legs/Barbell KAS glute bridge1.webp"),
  "Legs/Barbell Lateral Lunge_female": () =>
    import("../assets/exercises/Legs/Barbell Lateral Lunge_female.webp"),
  "Legs/Barbell Lateral Lunge_female1": () =>
    import("../assets/exercises/Legs/Barbell Lateral Lunge_female1.webp"),
  "Legs/Barbell Low Bar Squat_female": () =>
    import("../assets/exercises/Legs/Barbell Low Bar Squat_female.webp"),
  "Legs/Barbell Low Bar Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell Low Bar Squat_female1.webp"),
  "Legs/Barbell Lunge_female": () =>
    import("../assets/exercises/Legs/Barbell Lunge_female.webp"),
  "Legs/Barbell Lunge_female1": () =>
    import("../assets/exercises/Legs/Barbell Lunge_female1.webp"),
  "Legs/Barbell Pause Lunge_female": () =>
    import("../assets/exercises/Legs/Barbell Pause Lunge_female.webp"),
  "Legs/Barbell Pause Lunge_female1": () =>
    import("../assets/exercises/Legs/Barbell Pause Lunge_female1.webp"),
  "Legs/Barbell Side Step Up": () =>
    import("../assets/exercises/Legs/Barbell Side Step Up.webp"),
  "Legs/Barbell Side Step Up1": () =>
    import("../assets/exercises/Legs/Barbell Side Step Up1.webp"),
  "Legs/Barbell Side Step Up_Female": () =>
    import("../assets/exercises/Legs/Barbell Side Step Up_Female.webp"),
  "Legs/Barbell Side Step Up_Female1": () =>
    import("../assets/exercises/Legs/Barbell Side Step Up_Female1.webp"),
  "Legs/Barbell Staggered Deadlift": () =>
    import("../assets/exercises/Legs/Barbell Staggered Deadlift.webp"),
  "Legs/Barbell Staggered Deadlift1": () =>
    import("../assets/exercises/Legs/Barbell Staggered Deadlift1.webp"),
  "Legs/Barbell Staggered Deadlift_Female": () =>
    import("../assets/exercises/Legs/Barbell Staggered Deadlift_Female.webp"),
  "Legs/Barbell Staggered Deadlift_Female1": () =>
    import("../assets/exercises/Legs/Barbell Staggered Deadlift_Female1.webp"),
  "Legs/Barbell Step Up Balance On Box": () =>
    import("../assets/exercises/Legs/Barbell Step Up Balance On Box.webp"),
  "Legs/Barbell Step Up Balance On Box1": () =>
    import("../assets/exercises/Legs/Barbell Step Up Balance On Box1.webp"),
  "Legs/Barbell Step Up Balance On Box_Female": () =>
    import(
      "../assets/exercises/Legs/Barbell Step Up Balance On Box_Female.webp"
    ),
  "Legs/Barbell Step Up Balance On Box_Female1": () =>
    import(
      "../assets/exercises/Legs/Barbell Step Up Balance On Box_Female1.webp"
    ),
  "Legs/Barbell bench squats": () =>
    import("../assets/exercises/Legs/Barbell bench squats.webp"),
  "Legs/Barbell bench squats1": () =>
    import("../assets/exercises/Legs/Barbell bench squats1.webp"),
  "Legs/Barbell box squat": () =>
    import("../assets/exercises/Legs/Barbell box squat.webp"),
  "Legs/Barbell box squat1": () =>
    import("../assets/exercises/Legs/Barbell box squat1.webp"),
  "Legs/Barbell bulgarian split squat left front-back view  ": () =>
    import(
      "../assets/exercises/Legs/Barbell bulgarian split squat left front-back view  .webp"
    ),
  "Legs/Barbell bulgarian split squat left front-back view  1": () =>
    import(
      "../assets/exercises/Legs/Barbell bulgarian split squat left front-back view  1.webp"
    ),
  "Legs/Barbell bulgarian split squat": () =>
    import("../assets/exercises/Legs/Barbell bulgarian split squat.webp"),
  "Legs/Barbell bulgarian split squat1": () =>
    import("../assets/exercises/Legs/Barbell bulgarian split squat1.webp"),
  "Legs/Barbell bulgarian split squat_female": () =>
    import(
      "../assets/exercises/Legs/Barbell bulgarian split squat_female.webp"
    ),
  "Legs/Barbell bulgarian split squat_female1": () =>
    import(
      "../assets/exercises/Legs/Barbell bulgarian split squat_female1.webp"
    ),
  "Legs/Barbell curtsy lunges": () =>
    import("../assets/exercises/Legs/Barbell curtsy lunges.webp"),
  "Legs/Barbell curtsy lunges1": () =>
    import("../assets/exercises/Legs/Barbell curtsy lunges1.webp"),
  "Legs/Barbell front chest squat": () =>
    import("../assets/exercises/Legs/Barbell front chest squat.webp"),
  "Legs/Barbell front chest squat1": () =>
    import("../assets/exercises/Legs/Barbell front chest squat1.webp"),
  "Legs/Barbell front lunges with small pause": () =>
    import(
      "../assets/exercises/Legs/Barbell front lunges with small pause.webp"
    ),
  "Legs/Barbell front lunges with small pause1": () =>
    import(
      "../assets/exercises/Legs/Barbell front lunges with small pause1.webp"
    ),
  "Legs/Barbell front squats": () =>
    import("../assets/exercises/Legs/Barbell front squats.webp"),
  "Legs/Barbell front squats1": () =>
    import("../assets/exercises/Legs/Barbell front squats1.webp"),
  "Legs/Barbell full Zercher Squat_female": () =>
    import("../assets/exercises/Legs/Barbell full Zercher Squat_female.webp"),
  "Legs/Barbell full Zercher Squat_female1": () =>
    import("../assets/exercises/Legs/Barbell full Zercher Squat_female1.webp"),
  "Legs/Barbell full zercher squat": () =>
    import("../assets/exercises/Legs/Barbell full zercher squat.webp"),
  "Legs/Barbell full zercher squat1": () =>
    import("../assets/exercises/Legs/Barbell full zercher squat1.webp"),
  "Legs/Barbell glute bridge": () =>
    import("../assets/exercises/Legs/Barbell glute bridge.webp"),
  "Legs/Barbell glute bridge1": () =>
    import("../assets/exercises/Legs/Barbell glute bridge1.webp"),
  "Legs/Barbell jefferson split squat": () =>
    import("../assets/exercises/Legs/Barbell jefferson split squat.webp"),
  "Legs/Barbell jefferson split squat1": () =>
    import("../assets/exercises/Legs/Barbell jefferson split squat1.webp"),
  "Legs/Barbell jefferson squat": () =>
    import("../assets/exercises/Legs/Barbell jefferson squat.webp"),
  "Legs/Barbell jefferson squat1": () =>
    import("../assets/exercises/Legs/Barbell jefferson squat1.webp"),
  "Legs/Barbell jump squat": () =>
    import("../assets/exercises/Legs/Barbell jump squat.webp"),
  "Legs/Barbell jump squat1": () =>
    import("../assets/exercises/Legs/Barbell jump squat1.webp"),
  "Legs/Barbell lateral lunges": () =>
    import("../assets/exercises/Legs/Barbell lateral lunges.webp"),
  "Legs/Barbell lateral lunges1": () =>
    import("../assets/exercises/Legs/Barbell lateral lunges1.webp"),
  "Legs/Barbell low bar squat": () =>
    import("../assets/exercises/Legs/Barbell low bar squat.webp"),
  "Legs/Barbell low bar squat1": () =>
    import("../assets/exercises/Legs/Barbell low bar squat1.webp"),
  "Legs/Barbell lunges": () =>
    import("../assets/exercises/Legs/Barbell lunges.webp"),
  "Legs/Barbell lunges1": () =>
    import("../assets/exercises/Legs/Barbell lunges1.webp"),
  "Legs/Barbell narrow stance squat": () =>
    import("../assets/exercises/Legs/Barbell narrow stance squat.webp"),
  "Legs/Barbell narrow stance squat1": () =>
    import("../assets/exercises/Legs/Barbell narrow stance squat1.webp"),
  "Legs/Barbell overhead lunges": () =>
    import("../assets/exercises/Legs/Barbell overhead lunges.webp"),
  "Legs/Barbell overhead lunges1": () =>
    import("../assets/exercises/Legs/Barbell overhead lunges1.webp"),
  "Legs/Barbell overhead squat": () =>
    import("../assets/exercises/Legs/Barbell overhead squat.webp"),
  "Legs/Barbell overhead squat1": () =>
    import("../assets/exercises/Legs/Barbell overhead squat1.webp"),
  "Legs/Barbell quarter squat": () =>
    import("../assets/exercises/Legs/Barbell quarter squat.webp"),
  "Legs/Barbell quarter squat1": () =>
    import("../assets/exercises/Legs/Barbell quarter squat1.webp"),
  "Legs/Barbell rear lunge on box": () =>
    import("../assets/exercises/Legs/Barbell rear lunge on box.webp"),
  "Legs/Barbell rear lunge on box1": () =>
    import("../assets/exercises/Legs/Barbell rear lunge on box1.webp"),
  "Legs/Barbell rear lunges": () =>
    import("../assets/exercises/Legs/Barbell rear lunges.webp"),
  "Legs/Barbell rear lunges1": () =>
    import("../assets/exercises/Legs/Barbell rear lunges1.webp"),
  "Legs/Barbell side split squat": () =>
    import("../assets/exercises/Legs/Barbell side split squat.webp"),
  "Legs/Barbell side split squat1": () =>
    import("../assets/exercises/Legs/Barbell side split squat1.webp"),
  "Legs/Barbell single leg split squat": () =>
    import("../assets/exercises/Legs/Barbell single leg split squat.webp"),
  "Legs/Barbell single leg split squat1": () =>
    import("../assets/exercises/Legs/Barbell single leg split squat1.webp"),
  "Legs/Barbell split squat": () =>
    import("../assets/exercises/Legs/Barbell split squat.webp"),
  "Legs/Barbell split squat1": () =>
    import("../assets/exercises/Legs/Barbell split squat1.webp"),
  "Legs/Barbell squat back POV": () =>
    import("../assets/exercises/Legs/Barbell squat back POV.webp"),
  "Legs/Barbell squat back POV1": () =>
    import("../assets/exercises/Legs/Barbell squat back POV1.webp"),
  "Legs/Barbell squat to grass": () =>
    import("../assets/exercises/Legs/Barbell squat to grass.webp"),
  "Legs/Barbell squat to grass1": () =>
    import("../assets/exercises/Legs/Barbell squat to grass1.webp"),
  "Legs/Barbell standing leg calf raise": () =>
    import("../assets/exercises/Legs/Barbell standing leg calf raise.webp"),
  "Legs/Barbell standing leg calf raise1": () =>
    import("../assets/exercises/Legs/Barbell standing leg calf raise1.webp"),
  "Legs/Barbell standing leg calf raises": () =>
    import("../assets/exercises/Legs/Barbell standing leg calf raises.webp"),
  "Legs/Barbell standing leg calf raises1": () =>
    import("../assets/exercises/Legs/Barbell standing leg calf raises1.webp"),
  "Legs/Barbell step up on bench": () =>
    import("../assets/exercises/Legs/Barbell step up on bench.webp"),
  "Legs/Barbell step up on bench1": () =>
    import("../assets/exercises/Legs/Barbell step up on bench1.webp"),
  "Legs/Barbell stiff leg deadlift": () =>
    import("../assets/exercises/Legs/Barbell stiff leg deadlift.webp"),
  "Legs/Barbell stiff leg deadlift1": () =>
    import("../assets/exercises/Legs/Barbell stiff leg deadlift1.webp"),
  "Legs/Barbell straight leg deadlift": () =>
    import("../assets/exercises/Legs/Barbell straight leg deadlift.webp"),
  "Legs/Barbell straight leg deadlift1": () =>
    import("../assets/exercises/Legs/Barbell straight leg deadlift1.webp"),
  "Legs/Barbell sumo romanian deadlift": () =>
    import("../assets/exercises/Legs/Barbell sumo romanian deadlift.webp"),
  "Legs/Barbell sumo romanian deadlift1": () =>
    import("../assets/exercises/Legs/Barbell sumo romanian deadlift1.webp"),
  "Legs/Bench Bulgarian Split Squats Right  ": () =>
    import(
      "../assets/exercises/Legs/Bench Bulgarian Split Squats Right  .webp"
    ),
  "Legs/Bench Bulgarian Split Squats Right  1": () =>
    import(
      "../assets/exercises/Legs/Bench Bulgarian Split Squats Right  1.webp"
    ),
  "Legs/Bench Bulgarian Split Squats left  ": () =>
    import("../assets/exercises/Legs/Bench Bulgarian Split Squats left  .webp"),
  "Legs/Bench Bulgarian Split Squats left  1": () =>
    import(
      "../assets/exercises/Legs/Bench Bulgarian Split Squats left  1.webp"
    ),
  "Legs/Bent Knee Back to Side Kick": () =>
    import("../assets/exercises/Legs/Bent Knee Back to Side Kick.webp"),
  "Legs/Bent Knee Back to Side Kick1": () =>
    import("../assets/exercises/Legs/Bent Knee Back to Side Kick1.webp"),
  "Legs/Bent Leg Side Kick (kneeling)": () =>
    import("../assets/exercises/Legs/Bent Leg Side Kick (kneeling).webp"),
  "Legs/Bent Leg Side Kick (kneeling)1": () =>
    import("../assets/exercises/Legs/Bent Leg Side Kick (kneeling)1.webp"),
  "Legs/Bird Dog (VERSION 2)": () =>
    import("../assets/exercises/Legs/Bird Dog (VERSION 2).webp"),
  "Legs/Bird Dog (VERSION 2)1": () =>
    import("../assets/exercises/Legs/Bird Dog (VERSION 2)1.webp"),
  "Legs/Bird Dog": () => import("../assets/exercises/Legs/Bird Dog.webp"),
  "Legs/Bird Dog1": () => import("../assets/exercises/Legs/Bird Dog1.webp"),
  "Legs/Bodyweight Feet Elevated Figure Four Glute Bridge": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Figure Four Glute Bridge.webp"
    ),
  "Legs/Bodyweight Feet Elevated Figure Four Glute Bridge1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Figure Four Glute Bridge1.webp"
    ),
  "Legs/Bodyweight Feet Elevated Figure Four Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Figure Four Glute Bridge_Female.webp"
    ),
  "Legs/Bodyweight Feet Elevated Figure Four Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Figure Four Glute Bridge_Female1.webp"
    ),
  "Legs/Bodyweight Feet Elevated Staggered Glute Bridge": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Staggered Glute Bridge.webp"
    ),
  "Legs/Bodyweight Feet Elevated Staggered Glute Bridge1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Staggered Glute Bridge1.webp"
    ),
  "Legs/Bodyweight Feet Elevated Staggered Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Staggered Glute Bridge_Female.webp"
    ),
  "Legs/Bodyweight Feet Elevated Staggered Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Feet Elevated Staggered Glute Bridge_Female1.webp"
    ),
  "Legs/Bodyweight Forward Lunge": () =>
    import("../assets/exercises/Legs/Bodyweight Forward Lunge.webp"),
  "Legs/Bodyweight Forward Lunge1": () =>
    import("../assets/exercises/Legs/Bodyweight Forward Lunge1.webp"),
  "Legs/Bodyweight Hip Thrust": () =>
    import("../assets/exercises/Legs/Bodyweight Hip Thrust.webp"),
  "Legs/Bodyweight Hip Thrust1": () =>
    import("../assets/exercises/Legs/Bodyweight Hip Thrust1.webp"),
  "Legs/Bodyweight Hip Thrust_Female": () =>
    import("../assets/exercises/Legs/Bodyweight Hip Thrust_Female.webp"),
  "Legs/Bodyweight Hip Thrust_Female1": () =>
    import("../assets/exercises/Legs/Bodyweight Hip Thrust_Female1.webp"),
  "Legs/Bodyweight Overhead Squat": () =>
    import("../assets/exercises/Legs/Bodyweight Overhead Squat.webp"),
  "Legs/Bodyweight Overhead Squat1": () =>
    import("../assets/exercises/Legs/Bodyweight Overhead Squat1.webp"),
  "Legs/Bodyweight Pulse Forward Lunge": () =>
    import("../assets/exercises/Legs/Bodyweight Pulse Forward Lunge.webp"),
  "Legs/Bodyweight Pulse Forward Lunge1": () =>
    import("../assets/exercises/Legs/Bodyweight Pulse Forward Lunge1.webp"),
  "Legs/Bodyweight Pulse Squat arms to chest": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Pulse Squat arms to chest.webp"
    ),
  "Legs/Bodyweight Pulse Squat arms to chest1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Pulse Squat arms to chest1.webp"
    ),
  "Legs/Bodyweight Pulse Squat": () =>
    import("../assets/exercises/Legs/Bodyweight Pulse Squat.webp"),
  "Legs/Bodyweight Pulse Squat1": () =>
    import("../assets/exercises/Legs/Bodyweight Pulse Squat1.webp"),
  "Legs/Bodyweight Rear Lunge front raise": () =>
    import("../assets/exercises/Legs/Bodyweight Rear Lunge front raise.webp"),
  "Legs/Bodyweight Rear Lunge front raise1": () =>
    import("../assets/exercises/Legs/Bodyweight Rear Lunge front raise1.webp"),
  "Legs/Bodyweight Rear Lunge": () =>
    import("../assets/exercises/Legs/Bodyweight Rear Lunge.webp"),
  "Legs/Bodyweight Rear Lunge1": () =>
    import("../assets/exercises/Legs/Bodyweight Rear Lunge1.webp"),
  "Legs/Bodyweight Single Leg Deadlift": () =>
    import("../assets/exercises/Legs/Bodyweight Single Leg Deadlift.webp"),
  "Legs/Bodyweight Single Leg Deadlift1": () =>
    import("../assets/exercises/Legs/Bodyweight Single Leg Deadlift1.webp"),
  "Legs/Bodyweight Squat to Front Leg": () =>
    import("../assets/exercises/Legs/Bodyweight Squat to Front Leg.webp"),
  "Legs/Bodyweight Squat to Front Leg1": () =>
    import("../assets/exercises/Legs/Bodyweight Squat to Front Leg1.webp"),
  "Legs/Bodyweight Squat to Side Leg": () =>
    import("../assets/exercises/Legs/Bodyweight Squat to Side Leg.webp"),
  "Legs/Bodyweight Squat to Side Leg1": () =>
    import("../assets/exercises/Legs/Bodyweight Squat to Side Leg1.webp"),
  "Legs/Bodyweight Squat to Side to Front Leg": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Squat to Side to Front Leg.webp"
    ),
  "Legs/Bodyweight Squat to Side to Front Leg1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight Squat to Side to Front Leg1.webp"
    ),
  "Legs/Bodyweight Squat": () =>
    import("../assets/exercises/Legs/Bodyweight Squat.webp"),
  "Legs/Bodyweight Squat1": () =>
    import("../assets/exercises/Legs/Bodyweight Squat1.webp"),
  "Legs/Bodyweight Standing Calf Raise": () =>
    import("../assets/exercises/Legs/Bodyweight Standing Calf Raise.webp"),
  "Legs/Bodyweight Standing Calf Raise1": () =>
    import("../assets/exercises/Legs/Bodyweight Standing Calf Raise1.webp"),
  "Legs/Bodyweight Step-up on Step box": () =>
    import("../assets/exercises/Legs/Bodyweight Step-up on Step box.webp"),
  "Legs/Bodyweight Step-up on Step box1": () =>
    import("../assets/exercises/Legs/Bodyweight Step-up on Step box1.webp"),
  "Legs/Bodyweight Wall Squat": () =>
    import("../assets/exercises/Legs/Bodyweight Wall Squat.webp"),
  "Legs/Bodyweight Wall Squat1": () =>
    import("../assets/exercises/Legs/Bodyweight Wall Squat1.webp"),
  "Legs/Bodyweight full squat with overhead press": () =>
    import(
      "../assets/exercises/Legs/Bodyweight full squat with overhead press.webp"
    ),
  "Legs/Bodyweight full squat with overhead press1": () =>
    import(
      "../assets/exercises/Legs/Bodyweight full squat with overhead press1.webp"
    ),
  "Legs/Bodyweight kneeling hold to stand": () =>
    import("../assets/exercises/Legs/Bodyweight kneeling hold to stand.webp"),
  "Legs/Bodyweight kneeling hold to stand1": () =>
    import("../assets/exercises/Legs/Bodyweight kneeling hold to stand1.webp"),
  "Legs/Bodyweight kneeling sissy squat": () =>
    import("../assets/exercises/Legs/Bodyweight kneeling sissy squat.webp"),
  "Legs/Bodyweight kneeling sissy squat1": () =>
    import("../assets/exercises/Legs/Bodyweight kneeling sissy squat1.webp"),
  "Legs/Bridge Hip Abduction": () =>
    import("../assets/exercises/Legs/Bridge Hip Abduction.webp"),
  "Legs/Bridge Hip Abduction1": () =>
    import("../assets/exercises/Legs/Bridge Hip Abduction1.webp"),
  "Legs/Bridge with Alternating Leg Raise  ": () =>
    import("../assets/exercises/Legs/Bridge with Alternating Leg Raise  .webp"),
  "Legs/Bridge with Alternating Leg Raise  1": () =>
    import(
      "../assets/exercises/Legs/Bridge with Alternating Leg Raise  1.webp"
    ),
  "Legs/Bulgarian Split Squat": () =>
    import("../assets/exercises/Legs/Bulgarian Split Squat.webp"),
  "Legs/Bulgarian Split Squat1": () =>
    import("../assets/exercises/Legs/Bulgarian Split Squat1.webp"),
  "Legs/Burpee Squat": () =>
    import("../assets/exercises/Legs/Burpee Squat.webp"),
  "Legs/Burpee Squat1": () =>
    import("../assets/exercises/Legs/Burpee Squat1.webp"),
  "Legs/Cable Assisted Inverse Leg Curl": () =>
    import("../assets/exercises/Legs/Cable Assisted Inverse Leg Curl.webp"),
  "Legs/Cable Assisted Inverse Leg Curl1": () =>
    import("../assets/exercises/Legs/Cable Assisted Inverse Leg Curl1.webp"),
  "Legs/Cable Calve Raise": () =>
    import("../assets/exercises/Legs/Cable Calve Raise.webp"),
  "Legs/Cable Calve Raise1": () =>
    import("../assets/exercises/Legs/Cable Calve Raise1.webp"),
  "Legs/Cable Calve Raise_Female": () =>
    import("../assets/exercises/Legs/Cable Calve Raise_Female.webp"),
  "Legs/Cable Calve Raise_Female1": () =>
    import("../assets/exercises/Legs/Cable Calve Raise_Female1.webp"),
  "Legs/Cable Goblet Squat": () =>
    import("../assets/exercises/Legs/Cable Goblet Squat.webp"),
  "Legs/Cable Goblet Squat1": () =>
    import("../assets/exercises/Legs/Cable Goblet Squat1.webp"),
  "Legs/Cable Goblet Squat_Female": () =>
    import("../assets/exercises/Legs/Cable Goblet Squat_Female.webp"),
  "Legs/Cable Goblet Squat_Female1": () =>
    import("../assets/exercises/Legs/Cable Goblet Squat_Female1.webp"),
  "Legs/Cable Hamstring Curl": () =>
    import("../assets/exercises/Legs/Cable Hamstring Curl.webp"),
  "Legs/Cable Hamstring Curl1": () =>
    import("../assets/exercises/Legs/Cable Hamstring Curl1.webp"),
  "Legs/Cable Hamstring Curl_Female": () =>
    import("../assets/exercises/Legs/Cable Hamstring Curl_Female.webp"),
  "Legs/Cable Hamstring Curl_Female1": () =>
    import("../assets/exercises/Legs/Cable Hamstring Curl_Female1.webp"),
  "Legs/Cable Narrow Chair Stand-Up": () =>
    import("../assets/exercises/Legs/Cable Narrow Chair Stand-Up.webp"),
  "Legs/Cable Narrow Chair Stand-Up1": () =>
    import("../assets/exercises/Legs/Cable Narrow Chair Stand-Up1.webp"),
  "Legs/Cable Pull Through_Female": () =>
    import("../assets/exercises/Legs/Cable Pull Through_Female.webp"),
  "Legs/Cable Pull Through_Female1": () =>
    import("../assets/exercises/Legs/Cable Pull Through_Female1.webp"),
  "Legs/Cable Single Leg Deadlift": () =>
    import("../assets/exercises/Legs/Cable Single Leg Deadlift.webp"),
  "Legs/Cable Single Leg Deadlift1": () =>
    import("../assets/exercises/Legs/Cable Single Leg Deadlift1.webp"),
  "Legs/Cable Single Leg Deadlift_Female": () =>
    import("../assets/exercises/Legs/Cable Single Leg Deadlift_Female.webp"),
  "Legs/Cable Single Leg Deadlift_Female1": () =>
    import("../assets/exercises/Legs/Cable Single Leg Deadlift_Female1.webp"),
  "Legs/Cable Split Squat": () =>
    import("../assets/exercises/Legs/Cable Split Squat.webp"),
  "Legs/Cable Split Squat1": () =>
    import("../assets/exercises/Legs/Cable Split Squat1.webp"),
  "Legs/Cable Split Squat_Female": () =>
    import("../assets/exercises/Legs/Cable Split Squat_Female.webp"),
  "Legs/Cable Split Squat_Female1": () =>
    import("../assets/exercises/Legs/Cable Split Squat_Female1.webp"),
  "Legs/Cable Standing Leg Extension_Female": () =>
    import("../assets/exercises/Legs/Cable Standing Leg Extension_Female.webp"),
  "Legs/Cable Standing Leg Extension_Female1": () =>
    import(
      "../assets/exercises/Legs/Cable Standing Leg Extension_Female1.webp"
    ),
  "Legs/Cable individual glute kickbacks": () =>
    import("../assets/exercises/Legs/Cable individual glute kickbacks.webp"),
  "Legs/Cable individual glute kickbacks1": () =>
    import("../assets/exercises/Legs/Cable individual glute kickbacks1.webp"),
  "Legs/Cable individual glute kickbacks_Female": () =>
    import(
      "../assets/exercises/Legs/Cable individual glute kickbacks_Female.webp"
    ),
  "Legs/Cable individual glute kickbacks_Female1": () =>
    import(
      "../assets/exercises/Legs/Cable individual glute kickbacks_Female1.webp"
    ),
  "Legs/Calf Raise Clap": () =>
    import("../assets/exercises/Legs/Calf Raise Clap.webp"),
  "Legs/Calf Raise Clap1": () =>
    import("../assets/exercises/Legs/Calf Raise Clap1.webp"),
  "Legs/Calf Raise from Deficit with Chair Supported": () =>
    import(
      "../assets/exercises/Legs/Calf Raise from Deficit with Chair Supported.webp"
    ),
  "Legs/Calf Raise from Deficit with Chair Supported1": () =>
    import(
      "../assets/exercises/Legs/Calf Raise from Deficit with Chair Supported1.webp"
    ),
  "Legs/Calf Raise with Wall Support": () =>
    import("../assets/exercises/Legs/Calf Raise with Wall Support.webp"),
  "Legs/Calf Raise with Wall Support1": () =>
    import("../assets/exercises/Legs/Calf Raise with Wall Support1.webp"),
  "Legs/Calf raise leg press machine": () =>
    import("../assets/exercises/Legs/Calf raise leg press machine.webp"),
  "Legs/Calf raise leg press machine1": () =>
    import("../assets/exercises/Legs/Calf raise leg press machine1.webp"),
  "Legs/Calf raise leg press machine_Female": () =>
    import("../assets/exercises/Legs/Calf raise leg press machine_Female.webp"),
  "Legs/Calf raise leg press machine_Female1": () =>
    import(
      "../assets/exercises/Legs/Calf raise leg press machine_Female1.webp"
    ),
  "Legs/Calf raise on hack squat machine  ": () =>
    import("../assets/exercises/Legs/Calf raise on hack squat machine  .webp"),
  "Legs/Calf raise on hack squat machine  1": () =>
    import("../assets/exercises/Legs/Calf raise on hack squat machine  1.webp"),
  "Legs/Calf raise on hack squat machine": () =>
    import("../assets/exercises/Legs/Calf raise on hack squat machine.webp"),
  "Legs/Calf raise on hack squat machine1": () =>
    import("../assets/exercises/Legs/Calf raise on hack squat machine1.webp"),
  "Legs/Calf raise on hack squat machine_Female": () =>
    import(
      "../assets/exercises/Legs/Calf raise on hack squat machine_Female.webp"
    ),
  "Legs/Calf raise on hack squat machine_Female1": () =>
    import(
      "../assets/exercises/Legs/Calf raise on hack squat machine_Female1.webp"
    ),
  "Legs/Chair Bulgarian Split Squats bodyweight left": () =>
    import(
      "../assets/exercises/Legs/Chair Bulgarian Split Squats bodyweight left.webp"
    ),
  "Legs/Chair Bulgarian Split Squats bodyweight left1": () =>
    import(
      "../assets/exercises/Legs/Chair Bulgarian Split Squats bodyweight left1.webp"
    ),
  "Legs/Chair Elevated Single Leg Glute Bridge  ": () =>
    import(
      "../assets/exercises/Legs/Chair Elevated Single Leg Glute Bridge  .webp"
    ),
  "Legs/Chair Elevated Single Leg Glute Bridge  1": () =>
    import(
      "../assets/exercises/Legs/Chair Elevated Single Leg Glute Bridge  1.webp"
    ),
  "Legs/Clap Curtsy Squat": () =>
    import("../assets/exercises/Legs/Clap Curtsy Squat.webp"),
  "Legs/Clap Curtsy Squat1": () =>
    import("../assets/exercises/Legs/Clap Curtsy Squat1.webp"),
  "Legs/Cossack Squat": () =>
    import("../assets/exercises/Legs/Cossack Squat.webp"),
  "Legs/Cossack Squat1": () =>
    import("../assets/exercises/Legs/Cossack Squat1.webp"),
  "Legs/Counterbalanced Skater Squat": () =>
    import("../assets/exercises/Legs/Counterbalanced Skater Squat.webp"),
  "Legs/Counterbalanced Skater Squat1": () =>
    import("../assets/exercises/Legs/Counterbalanced Skater Squat1.webp"),
  "Legs/Crossed Arms Front Leg Kick": () =>
    import("../assets/exercises/Legs/Crossed Arms Front Leg Kick.webp"),
  "Legs/Crossed Arms Front Leg Kick1": () =>
    import("../assets/exercises/Legs/Crossed Arms Front Leg Kick1.webp"),
  "Legs/Curtsy Lunge Slide with Towel": () =>
    import("../assets/exercises/Legs/Curtsy Lunge Slide with Towel.webp"),
  "Legs/Curtsy Lunge Slide with Towel1": () =>
    import("../assets/exercises/Legs/Curtsy Lunge Slide with Towel1.webp"),
  "Legs/Curtsy Squat": () =>
    import("../assets/exercises/Legs/Curtsy Squat.webp"),
  "Legs/Curtsy Squat1": () =>
    import("../assets/exercises/Legs/Curtsy Squat1.webp"),
  "Legs/Curtsy lunges resistance band  ": () =>
    import("../assets/exercises/Legs/Curtsy lunges resistance band  .webp"),
  "Legs/Curtsy lunges resistance band  1": () =>
    import("../assets/exercises/Legs/Curtsy lunges resistance band  1.webp"),
  "Legs/Diagonal Lunge": () =>
    import("../assets/exercises/Legs/Diagonal Lunge.webp"),
  "Legs/Diagonal Lunge1": () =>
    import("../assets/exercises/Legs/Diagonal Lunge1.webp"),
  "Legs/Donkey Calf Raise": () =>
    import("../assets/exercises/Legs/Donkey Calf Raise.webp"),
  "Legs/Donkey Calf Raise1": () =>
    import("../assets/exercises/Legs/Donkey Calf Raise1.webp"),
  "Legs/Donkey kicks bodyweight": () =>
    import("../assets/exercises/Legs/Donkey kicks bodyweight.webp"),
  "Legs/Donkey kicks bodyweight1": () =>
    import("../assets/exercises/Legs/Donkey kicks bodyweight1.webp"),
  "Legs/Double Jump Squat": () =>
    import("../assets/exercises/Legs/Double Jump Squat.webp"),
  "Legs/Double Jump Squat1": () =>
    import("../assets/exercises/Legs/Double Jump Squat1.webp"),
  "Legs/Dumbbell Bar Grip Sumo Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Bar Grip Sumo Squat.webp"),
  "Legs/Dumbbell Bar Grip Sumo Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Bar Grip Sumo Squat1.webp"),
  "Legs/Dumbbell Bench Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Bench Squat.webp"),
  "Legs/Dumbbell Bench Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Bench Squat1.webp"),
  "Legs/Dumbbell Bulgarian Split Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Bulgarian Split Squat.webp"),
  "Legs/Dumbbell Bulgarian Split Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Bulgarian Split Squat1.webp"),
  "Legs/Dumbbell Cossack Squats (VERSION 2)": () =>
    import("../assets/exercises/Legs/Dumbbell Cossack Squats (VERSION 2).webp"),
  "Legs/Dumbbell Cossack Squats (VERSION 2)1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Cossack Squats (VERSION 2)1.webp"
    ),
  "Legs/Dumbbell Curtsy Lunge  ": () =>
    import("../assets/exercises/Legs/Dumbbell Curtsy Lunge  .webp"),
  "Legs/Dumbbell Curtsy Lunge  1": () =>
    import("../assets/exercises/Legs/Dumbbell Curtsy Lunge  1.webp"),
  "Legs/Dumbbell Front Rack Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Front Rack Lunge.webp"),
  "Legs/Dumbbell Front Rack Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Front Rack Lunge1.webp"),
  "Legs/Dumbbell Front Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Front Squat.webp"),
  "Legs/Dumbbell Front Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Front Squat1.webp"),
  "Legs/Dumbbell Glute Bridge": () =>
    import("../assets/exercises/Legs/Dumbbell Glute Bridge.webp"),
  "Legs/Dumbbell Glute Bridge1": () =>
    import("../assets/exercises/Legs/Dumbbell Glute Bridge1.webp"),
  "Legs/Dumbbell Goblet 2 sec Hold Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet 2 sec Hold Squat.webp"),
  "Legs/Dumbbell Goblet 2 sec Hold Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet 2 sec Hold Squat1.webp"),
  "Legs/Dumbbell Goblet Curtsy Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Curtsy Lunge.webp"),
  "Legs/Dumbbell Goblet Curtsy Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Curtsy Lunge1.webp"),
  "Legs/Dumbbell Goblet Split Squat Front Foot Elevanted": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Goblet Split Squat Front Foot Elevanted.webp"
    ),
  "Legs/Dumbbell Goblet Split Squat Front Foot Elevanted1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Goblet Split Squat Front Foot Elevanted1.webp"
    ),
  "Legs/Dumbbell Goblet Split Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Split Squat.webp"),
  "Legs/Dumbbell Goblet Split Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Split Squat1.webp"),
  "Legs/Dumbbell Goblet Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Squat.webp"),
  "Legs/Dumbbell Goblet Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Goblet Squat1.webp"),
  "Legs/Dumbbell Hip Thrust (VERSION 2)": () =>
    import("../assets/exercises/Legs/Dumbbell Hip Thrust (VERSION 2).webp"),
  "Legs/Dumbbell Hip Thrust (VERSION 2)1": () =>
    import("../assets/exercises/Legs/Dumbbell Hip Thrust (VERSION 2)1.webp"),
  "Legs/Dumbbell Hip Thrust": () =>
    import("../assets/exercises/Legs/Dumbbell Hip Thrust.webp"),
  "Legs/Dumbbell Hip Thrust1": () =>
    import("../assets/exercises/Legs/Dumbbell Hip Thrust1.webp"),
  "Legs/Dumbbell Jumping Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Jumping Squat.webp"),
  "Legs/Dumbbell Jumping Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Jumping Squat1.webp"),
  "Legs/Dumbbell Kneeling Hold to Stand Clean grip": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Kneeling Hold to Stand Clean grip.webp"
    ),
  "Legs/Dumbbell Kneeling Hold to Stand Clean grip1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Kneeling Hold to Stand Clean grip1.webp"
    ),
  "Legs/Dumbbell Kneeling Squat  ": () =>
    import("../assets/exercises/Legs/Dumbbell Kneeling Squat  .webp"),
  "Legs/Dumbbell Kneeling Squat  1": () =>
    import("../assets/exercises/Legs/Dumbbell Kneeling Squat  1.webp"),
  "Legs/Dumbbell Lunge Alternating on the spot  ": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Lunge Alternating on the spot  .webp"
    ),
  "Legs/Dumbbell Lunge Alternating on the spot  1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Lunge Alternating on the spot  1.webp"
    ),
  "Legs/Dumbbell Lunge Pulse  ": () =>
    import("../assets/exercises/Legs/Dumbbell Lunge Pulse  .webp"),
  "Legs/Dumbbell Lunge Pulse  1": () =>
    import("../assets/exercises/Legs/Dumbbell Lunge Pulse  1.webp"),
  "Legs/Dumbbell Lunge to Overhead Press  ": () =>
    import("../assets/exercises/Legs/Dumbbell Lunge to Overhead Press  .webp"),
  "Legs/Dumbbell Lunge to Overhead Press  1": () =>
    import("../assets/exercises/Legs/Dumbbell Lunge to Overhead Press  1.webp"),
  "Legs/Dumbbell Overhead Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Overhead Lunge.webp"),
  "Legs/Dumbbell Overhead Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Overhead Lunge1.webp"),
  "Legs/Dumbbell Plyo Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Plyo Squat.webp"),
  "Legs/Dumbbell Plyo Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Plyo Squat1.webp"),
  "Legs/Dumbbell Press Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Press Squat.webp"),
  "Legs/Dumbbell Press Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Press Squat1.webp"),
  "Legs/Dumbbell Rear Lunge from Step": () =>
    import("../assets/exercises/Legs/Dumbbell Rear Lunge from Step.webp"),
  "Legs/Dumbbell Rear Lunge from Step1": () =>
    import("../assets/exercises/Legs/Dumbbell Rear Lunge from Step1.webp"),
  "Legs/Dumbbell Rear Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Rear Lunge.webp"),
  "Legs/Dumbbell Rear Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Rear Lunge1.webp"),
  "Legs/Dumbbell Reverse Lunge on the spot  ": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Reverse Lunge on the spot  .webp"
    ),
  "Legs/Dumbbell Reverse Lunge on the spot  1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Reverse Lunge on the spot  1.webp"
    ),
  "Legs/Dumbbell Seated Calf Raise": () =>
    import("../assets/exercises/Legs/Dumbbell Seated Calf Raise.webp"),
  "Legs/Dumbbell Seated Calf Raise1": () =>
    import("../assets/exercises/Legs/Dumbbell Seated Calf Raise1.webp"),
  "Legs/Dumbbell Seated One Leg Calf Raise Hammer Grip": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Seated One Leg Calf Raise Hammer Grip.webp"
    ),
  "Legs/Dumbbell Seated One Leg Calf Raise Hammer Grip1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Seated One Leg Calf Raise Hammer Grip1.webp"
    ),
  "Legs/Dumbbell Side Lunge Alternating  ": () =>
    import("../assets/exercises/Legs/Dumbbell Side Lunge Alternating  .webp"),
  "Legs/Dumbbell Side Lunge Alternating  1": () =>
    import("../assets/exercises/Legs/Dumbbell Side Lunge Alternating  1.webp"),
  "Legs/Dumbbell Side Lunge Single Leg": () =>
    import("../assets/exercises/Legs/Dumbbell Side Lunge Single Leg.webp"),
  "Legs/Dumbbell Side Lunge Single Leg1": () =>
    import("../assets/exercises/Legs/Dumbbell Side Lunge Single Leg1.webp"),
  "Legs/Dumbbell Side Squat Side to Side": () =>
    import("../assets/exercises/Legs/Dumbbell Side Squat Side to Side.webp"),
  "Legs/Dumbbell Side Squat Side to Side1": () =>
    import("../assets/exercises/Legs/Dumbbell Side Squat Side to Side1.webp"),
  "Legs/Dumbbell Single Arm Overhead Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Single Arm Overhead Lunge.webp"),
  "Legs/Dumbbell Single Arm Overhead Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Arm Overhead Lunge1.webp"),
  "Legs/Dumbbell Single Leg Calf Raise Wall Support": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Single Leg Calf Raise Wall Support.webp"
    ),
  "Legs/Dumbbell Single Leg Calf Raise Wall Support1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Single Leg Calf Raise Wall Support1.webp"
    ),
  "Legs/Dumbbell Single Leg Deadlift": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Deadlift.webp"),
  "Legs/Dumbbell Single Leg Deadlift1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Deadlift1.webp"),
  "Legs/Dumbbell Single Leg Glute Bridge": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Glute Bridge.webp"),
  "Legs/Dumbbell Single Leg Glute Bridge1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Glute Bridge1.webp"),
  "Legs/Dumbbell Single Leg Split Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Split Squat.webp"),
  "Legs/Dumbbell Single Leg Split Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Split Squat1.webp"),
  "Legs/Dumbbell Single Leg Squat with Support (pistol)": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Single Leg Squat with Support (pistol).webp"
    ),
  "Legs/Dumbbell Single Leg Squat with Support (pistol)1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Single Leg Squat with Support (pistol)1.webp"
    ),
  "Legs/Dumbbell Single Leg Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Squat.webp"),
  "Legs/Dumbbell Single Leg Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Squat1.webp"),
  "Legs/Dumbbell Single Leg Step-Up": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Step-Up.webp"),
  "Legs/Dumbbell Single Leg Step-Up1": () =>
    import("../assets/exercises/Legs/Dumbbell Single Leg Step-Up1.webp"),
  "Legs/Dumbbell Split Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Split Squat.webp"),
  "Legs/Dumbbell Split Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Split Squat1.webp"),
  "Legs/Dumbbell Squats  ": () =>
    import("../assets/exercises/Legs/Dumbbell Squats  .webp"),
  "Legs/Dumbbell Squats  1": () =>
    import("../assets/exercises/Legs/Dumbbell Squats  1.webp"),
  "Legs/Dumbbell Squats to Shoulder Press  ": () =>
    import("../assets/exercises/Legs/Dumbbell Squats to Shoulder Press  .webp"),
  "Legs/Dumbbell Squats to Shoulder Press  1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Squats to Shoulder Press  1.webp"
    ),
  "Legs/Dumbbell Standing Calf Raise on Step": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Standing Calf Raise on Step.webp"
    ),
  "Legs/Dumbbell Standing Calf Raise on Step1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Standing Calf Raise on Step1.webp"
    ),
  "Legs/Dumbbell Standing Single Leg Calf Raise": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Standing Single Leg Calf Raise.webp"
    ),
  "Legs/Dumbbell Standing Single Leg Calf Raise1": () =>
    import(
      "../assets/exercises/Legs/Dumbbell Standing Single Leg Calf Raise1.webp"
    ),
  "Legs/Dumbbell Static Lunge": () =>
    import("../assets/exercises/Legs/Dumbbell Static Lunge.webp"),
  "Legs/Dumbbell Static Lunge1": () =>
    import("../assets/exercises/Legs/Dumbbell Static Lunge1.webp"),
  "Legs/Dumbbell Step up on Bench": () =>
    import("../assets/exercises/Legs/Dumbbell Step up on Bench.webp"),
  "Legs/Dumbbell Step up on Bench1": () =>
    import("../assets/exercises/Legs/Dumbbell Step up on Bench1.webp"),
  "Legs/Dumbbell Step-up with Knee Raise": () =>
    import("../assets/exercises/Legs/Dumbbell Step-up with Knee Raise.webp"),
  "Legs/Dumbbell Step-up with Knee Raise1": () =>
    import("../assets/exercises/Legs/Dumbbell Step-up with Knee Raise1.webp"),
  "Legs/Dumbbell Stiff Leg Deadlift": () =>
    import("../assets/exercises/Legs/Dumbbell Stiff Leg Deadlift.webp"),
  "Legs/Dumbbell Stiff Leg Deadlift1": () =>
    import("../assets/exercises/Legs/Dumbbell Stiff Leg Deadlift1.webp"),
  "Legs/Dumbbell Straight Leg Deadlift": () =>
    import("../assets/exercises/Legs/Dumbbell Straight Leg Deadlift.webp"),
  "Legs/Dumbbell Straight Leg Deadlift1": () =>
    import("../assets/exercises/Legs/Dumbbell Straight Leg Deadlift1.webp"),
  "Legs/Dumbbell Suitcase Carry": () =>
    import("../assets/exercises/Legs/Dumbbell Suitcase Carry.webp"),
  "Legs/Dumbbell Suitcase Carry1": () =>
    import("../assets/exercises/Legs/Dumbbell Suitcase Carry1.webp"),
  "Legs/Dumbbell Sumo Squat Off Benches": () =>
    import("../assets/exercises/Legs/Dumbbell Sumo Squat Off Benches.webp"),
  "Legs/Dumbbell Sumo Squat Off Benches1": () =>
    import("../assets/exercises/Legs/Dumbbell Sumo Squat Off Benches1.webp"),
  "Legs/Dumbbell Supported Sissy Squat": () =>
    import("../assets/exercises/Legs/Dumbbell Supported Sissy Squat.webp"),
  "Legs/Dumbbell Supported Sissy Squat1": () =>
    import("../assets/exercises/Legs/Dumbbell Supported Sissy Squat1.webp"),
  "Legs/Dumbbell close Legs Deadlift": () =>
    import("../assets/exercises/Legs/Dumbbell close Legs Deadlift.webp"),
  "Legs/Dumbbell close Legs Deadlift1": () =>
    import("../assets/exercises/Legs/Dumbbell close Legs Deadlift1.webp"),
  "Legs/Dumbbell narrow stance squats": () =>
    import("../assets/exercises/Legs/Dumbbell narrow stance squats.webp"),
  "Legs/Dumbbell narrow stance squats1": () =>
    import("../assets/exercises/Legs/Dumbbell narrow stance squats1.webp"),
  "Legs/Dumbbell reverse lunges pulses  ": () =>
    import("../assets/exercises/Legs/Dumbbell reverse lunges pulses  .webp"),
  "Legs/Dumbbell reverse lunges pulses  1": () =>
    import("../assets/exercises/Legs/Dumbbell reverse lunges pulses  1.webp"),
  "Legs/Elevated Standing Calf Raise": () =>
    import("../assets/exercises/Legs/Elevated Standing Calf Raise.webp"),
  "Legs/Elevated Standing Calf Raise1": () =>
    import("../assets/exercises/Legs/Elevated Standing Calf Raise1.webp"),
  "Legs/Exercise Ball Leg Curl": () =>
    import("../assets/exercises/Legs/Exercise Ball Leg Curl.webp"),
  "Legs/Exercise Ball Leg Curl1": () =>
    import("../assets/exercises/Legs/Exercise Ball Leg Curl1.webp"),
  "Legs/Exercise Ball One Legged Diagonal Kick Hamstring Curl": () =>
    import(
      "../assets/exercises/Legs/Exercise Ball One Legged Diagonal Kick Hamstring Curl.webp"
    ),
  "Legs/Exercise Ball One Legged Diagonal Kick Hamstring Curl1": () =>
    import(
      "../assets/exercises/Legs/Exercise Ball One Legged Diagonal Kick Hamstring Curl1.webp"
    ),
  "Legs/Exercise Ball Wall Squat": () =>
    import("../assets/exercises/Legs/Exercise Ball Wall Squat.webp"),
  "Legs/Exercise Ball Wall Squat1": () =>
    import("../assets/exercises/Legs/Exercise Ball Wall Squat1.webp"),
  "Legs/Feet Together barbell Squats  ": () =>
    import("../assets/exercises/Legs/Feet Together barbell Squats  .webp"),
  "Legs/Feet Together barbell Squats  1": () =>
    import("../assets/exercises/Legs/Feet Together barbell Squats  1.webp"),
  "Legs/Glute Bridge with Abduction bodyweight  ": () =>
    import(
      "../assets/exercises/Legs/Glute Bridge with Abduction bodyweight  .webp"
    ),
  "Legs/Glute Bridge with Abduction bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/Glute Bridge with Abduction bodyweight  1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Alternating Legs_Female": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Alternating Legs_Female.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Alternating Legs_Female1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Alternating Legs_Female1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Single Leg_Female": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Single Leg_Female.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Single Leg_Female1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL Single Leg_Female1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Alternate Legs": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Alternate Legs.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Alternate Legs1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Alternate Legs1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg_Female": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg_Female.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg_Female1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Both Leg_Female1.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Single Leg": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Single Leg.webp"
    ),
  "Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Single Leg1": () =>
    import(
      "../assets/exercises/Legs/HAMMER STRENGTH ISO-LATERAL LEG CURL_Single Leg1.webp"
    ),
  "Legs/Hack Squat Machine Squat": () =>
    import("../assets/exercises/Legs/Hack Squat Machine Squat.webp"),
  "Legs/Hack Squat Machine Squat1": () =>
    import("../assets/exercises/Legs/Hack Squat Machine Squat1.webp"),
  "Legs/Hack Squat Machine_Female": () =>
    import("../assets/exercises/Legs/Hack Squat Machine_Female.webp"),
  "Legs/Hack Squat Machine_Female1": () =>
    import("../assets/exercises/Legs/Hack Squat Machine_Female1.webp"),
  "Legs/Jump Squats bodyweight  ": () =>
    import("../assets/exercises/Legs/Jump Squats bodyweight  .webp"),
  "Legs/Jump Squats bodyweight  1": () =>
    import("../assets/exercises/Legs/Jump Squats bodyweight  1.webp"),
  "Legs/Kettlebell Split squat": () =>
    import("../assets/exercises/Legs/Kettlebell Split squat.webp"),
  "Legs/Kettlebell Split squat1": () =>
    import("../assets/exercises/Legs/Kettlebell Split squat1.webp"),
  "Legs/Kettlebell Step-up": () =>
    import("../assets/exercises/Legs/Kettlebell Step-up.webp"),
  "Legs/Kettlebell Step-up1": () =>
    import("../assets/exercises/Legs/Kettlebell Step-up1.webp"),
  "Legs/Kettlebell Suitcase Squat": () =>
    import("../assets/exercises/Legs/Kettlebell Suitcase Squat.webp"),
  "Legs/Kettlebell Suitcase Squat1": () =>
    import("../assets/exercises/Legs/Kettlebell Suitcase Squat1.webp"),
  "Legs/Kettlebell Sumo Squat (VERSION 2)": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat (VERSION 2).webp"),
  "Legs/Kettlebell Sumo Squat (VERSION 2)1": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat (VERSION 2)1.webp"),
  "Legs/Kettlebell Sumo Squat off Stepbox": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat off Stepbox.webp"),
  "Legs/Kettlebell Sumo Squat off Stepbox1": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat off Stepbox1.webp"),
  "Legs/Kettlebell Sumo Squat": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat.webp"),
  "Legs/Kettlebell Sumo Squat1": () =>
    import("../assets/exercises/Legs/Kettlebell Sumo Squat1.webp"),
  "Legs/Kneeling Squat Jumps bodyweight  ": () =>
    import("../assets/exercises/Legs/Kneeling Squat Jumps bodyweight  .webp"),
  "Legs/Kneeling Squat Jumps bodyweight  1": () =>
    import("../assets/exercises/Legs/Kneeling Squat Jumps bodyweight  1.webp"),
  "Legs/Leg press machine normal stance": () =>
    import("../assets/exercises/Legs/Leg press machine normal stance.webp"),
  "Legs/Leg press machine normal stance1": () =>
    import("../assets/exercises/Legs/Leg press machine normal stance1.webp"),
  "Legs/Leg press machine normal stance_Female": () =>
    import(
      "../assets/exercises/Legs/Leg press machine normal stance_Female.webp"
    ),
  "Legs/Leg press machine normal stance_Female1": () =>
    import(
      "../assets/exercises/Legs/Leg press machine normal stance_Female1.webp"
    ),
  "Legs/Lever Leg Extension": () =>
    import("../assets/exercises/Legs/Lever Leg Extension.webp"),
  "Legs/Lever Leg Extension1": () =>
    import("../assets/exercises/Legs/Lever Leg Extension1.webp"),
  "Legs/Lever Leg Extension_Female": () =>
    import("../assets/exercises/Legs/Lever Leg Extension_Female.webp"),
  "Legs/Lever Leg Extension_Female1": () =>
    import("../assets/exercises/Legs/Lever Leg Extension_Female1.webp"),
  "Legs/Lunge to Knee Drive left bodyweight  ": () =>
    import(
      "../assets/exercises/Legs/Lunge to Knee Drive left bodyweight  .webp"
    ),
  "Legs/Lunge to Knee Drive left bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/Lunge to Knee Drive left bodyweight  1.webp"
    ),
  "Legs/Lunge to Knee Drive right bodyweight  ": () =>
    import(
      "../assets/exercises/Legs/Lunge to Knee Drive right bodyweight  .webp"
    ),
  "Legs/Lunge to Knee Drive right bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/Lunge to Knee Drive right bodyweight  1.webp"
    ),
  "Legs/MTS ISO-LATERAL KNEELING LEG CURL": () =>
    import("../assets/exercises/Legs/MTS ISO-LATERAL KNEELING LEG CURL.webp"),
  "Legs/MTS ISO-LATERAL KNEELING LEG CURL1": () =>
    import("../assets/exercises/Legs/MTS ISO-LATERAL KNEELING LEG CURL1.webp"),
  "Legs/MTS ISO-LATERAL KNEELING LEG CURL_Female": () =>
    import(
      "../assets/exercises/Legs/MTS ISO-LATERAL KNEELING LEG CURL_Female.webp"
    ),
  "Legs/MTS ISO-LATERAL KNEELING LEG CURL_Female1": () =>
    import(
      "../assets/exercises/Legs/MTS ISO-LATERAL KNEELING LEG CURL_Female1.webp"
    ),
  "Legs/Multi Hip Abduction": () =>
    import("../assets/exercises/Legs/Multi Hip Abduction.webp"),
  "Legs/Multi Hip Abduction1": () =>
    import("../assets/exercises/Legs/Multi Hip Abduction1.webp"),
  "Legs/Multi Hip Abduction_Female": () =>
    import("../assets/exercises/Legs/Multi Hip Abduction_Female.webp"),
  "Legs/Multi Hip Abduction_Female1": () =>
    import("../assets/exercises/Legs/Multi Hip Abduction_Female1.webp"),
  "Legs/Multi Hip Adduction": () =>
    import("../assets/exercises/Legs/Multi Hip Adduction.webp"),
  "Legs/Multi Hip Adduction1": () =>
    import("../assets/exercises/Legs/Multi Hip Adduction1.webp"),
  "Legs/Multi Hip Adduction_Female": () =>
    import("../assets/exercises/Legs/Multi Hip Adduction_Female.webp"),
  "Legs/Multi Hip Adduction_Female1": () =>
    import("../assets/exercises/Legs/Multi Hip Adduction_Female1.webp"),
  "Legs/Multi Hip Glute Extension": () =>
    import("../assets/exercises/Legs/Multi Hip Glute Extension.webp"),
  "Legs/Multi Hip Glute Extension1": () =>
    import("../assets/exercises/Legs/Multi Hip Glute Extension1.webp"),
  "Legs/Multi Hip Glute Extension_Female": () =>
    import("../assets/exercises/Legs/Multi Hip Glute Extension_Female.webp"),
  "Legs/Multi Hip Glute Extension_Female1": () =>
    import("../assets/exercises/Legs/Multi Hip Glute Extension_Female1.webp"),
  "Legs/Resistance Band Bent Leg Kickback (Kneeling)": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Bent Leg Kickback (Kneeling).webp"
    ),
  "Legs/Resistance Band Bent Leg Kickback (Kneeling)1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Bent Leg Kickback (Kneeling)1.webp"
    ),
  "Legs/Resistance Band Bent Leg Kickback (Kneeling)_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Bent Leg Kickback (Kneeling)_Female.webp"
    ),
  "Legs/Resistance Band Bent Leg Kickback (Kneeling)_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Bent Leg Kickback (Kneeling)_Female1.webp"
    ),
  "Legs/Resistance Band Calf Press Sitting on Chair": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Calf Press Sitting on Chair.webp"
    ),
  "Legs/Resistance Band Calf Press Sitting on Chair1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Calf Press Sitting on Chair1.webp"
    ),
  "Legs/Resistance Band Calf Press Sitting on Chair_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Calf Press Sitting on Chair_Female.webp"
    ),
  "Legs/Resistance Band Calf Press Sitting on Chair_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Calf Press Sitting on Chair_Female1.webp"
    ),
  "Legs/Resistance Band Clam": () =>
    import("../assets/exercises/Legs/Resistance Band Clam.webp"),
  "Legs/Resistance Band Clam1": () =>
    import("../assets/exercises/Legs/Resistance Band Clam1.webp"),
  "Legs/Resistance Band Clam_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Clam_Female.webp"),
  "Legs/Resistance Band Clam_Female1": () =>
    import("../assets/exercises/Legs/Resistance Band Clam_Female1.webp"),
  "Legs/Resistance Band Glute Bridge Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge Abduction.webp"
    ),
  "Legs/Resistance Band Glute Bridge Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge Abduction1.webp"
    ),
  "Legs/Resistance Band Glute Bridge Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge Abduction_Female.webp"
    ),
  "Legs/Resistance Band Glute Bridge Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge Abduction_Female1.webp"
    ),
  "Legs/Resistance Band Glute Bridge_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Glute Bridge_Female.webp"),
  "Legs/Resistance Band Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge_Female1.webp"
    ),
  "Legs/Resistance Band Glute Bridge_Version2": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge_Version2.webp"
    ),
  "Legs/Resistance Band Glute Bridge_Version21": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge_Version21.webp"
    ),
  "Legs/Resistance Band Glute Bridge_Version2_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge_Version2_Female.webp"
    ),
  "Legs/Resistance Band Glute Bridge_Version2_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Glute Bridge_Version2_Female1.webp"
    ),
  "Legs/Resistance Band Hip Thrust (VERSION 2)": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrust (VERSION 2).webp"
    ),
  "Legs/Resistance Band Hip Thrust (VERSION 2)1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrust (VERSION 2)1.webp"
    ),
  "Legs/Resistance Band Hip Thrust (VERSION 2)_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrust (VERSION 2)_Female.webp"
    ),
  "Legs/Resistance Band Hip Thrust (VERSION 2)_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrust (VERSION 2)_Female1.webp"
    ),
  "Legs/Resistance Band Hip Thrusts on Knees": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrusts on Knees.webp"
    ),
  "Legs/Resistance Band Hip Thrusts on Knees1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrusts on Knees1.webp"
    ),
  "Legs/Resistance Band Hip Thrusts on Knees_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrusts on Knees_Female.webp"
    ),
  "Legs/Resistance Band Hip Thrusts on Knees_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Hip Thrusts on Knees_Female1.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle on bench": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle on bench.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle on bench1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle on bench1.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle on bench_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle on bench_Female.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle on bench_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle on bench_Female1.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle.webp"
    ),
  "Legs/Resistance Band Kneeling Leg Half Circle1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Kneeling Leg Half Circle1.webp"
    ),
  "Legs/Resistance Band Leg Curl": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Curl.webp"),
  "Legs/Resistance Band Leg Curl1": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Curl1.webp"),
  "Legs/Resistance Band Leg Curl_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Curl_Female.webp"),
  "Legs/Resistance Band Leg Curl_Female1": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Curl_Female1.webp"),
  "Legs/Resistance Band Leg Kickback": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Kickback.webp"),
  "Legs/Resistance Band Leg Kickback1": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Kickback1.webp"),
  "Legs/Resistance Band Leg Kickback_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Leg Kickback_Female.webp"),
  "Legs/Resistance Band Leg Kickback_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Leg Kickback_Female1.webp"
    ),
  "Legs/Resistance Band Lying Abduction": () =>
    import("../assets/exercises/Legs/Resistance Band Lying Abduction.webp"),
  "Legs/Resistance Band Lying Abduction1": () =>
    import("../assets/exercises/Legs/Resistance Band Lying Abduction1.webp"),
  "Legs/Resistance Band Lying Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Abduction_Female.webp"
    ),
  "Legs/Resistance Band Lying Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Abduction_Female1.webp"
    ),
  "Legs/Resistance Band Lying Bent Knee Hip Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Bent Knee Hip Abduction.webp"
    ),
  "Legs/Resistance Band Lying Bent Knee Hip Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Bent Knee Hip Abduction1.webp"
    ),
  "Legs/Resistance Band Lying Leg Raise": () =>
    import("../assets/exercises/Legs/Resistance Band Lying Leg Raise.webp"),
  "Legs/Resistance Band Lying Leg Raise1": () =>
    import("../assets/exercises/Legs/Resistance Band Lying Leg Raise1.webp"),
  "Legs/Resistance Band Lying Leg Raise_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Leg Raise_Female.webp"
    ),
  "Legs/Resistance Band Lying Leg Raise_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Lying Leg Raise_Female1.webp"
    ),
  "Legs/Resistance Band One Leg Glute Bridge": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Glute Bridge.webp"
    ),
  "Legs/Resistance Band One Leg Glute Bridge1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Glute Bridge1.webp"
    ),
  "Legs/Resistance Band One Leg Glute Bridge_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Glute Bridge_Female.webp"
    ),
  "Legs/Resistance Band One Leg Glute Bridge_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Glute Bridge_Female1.webp"
    ),
  "Legs/Resistance Band One Leg Kickback (Bent Position)": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Kickback (Bent Position).webp"
    ),
  "Legs/Resistance Band One Leg Kickback (Bent Position)1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Kickback (Bent Position)1.webp"
    ),
  "Legs/Resistance Band One Leg Kickback (Bent Position)_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Kickback (Bent Position)_Female.webp"
    ),
  "Legs/Resistance Band One Leg Kickback (Bent Position)_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band One Leg Kickback (Bent Position)_Female1.webp"
    ),
  "Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench.webp"
    ),
  "Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench1.webp"
    ),
  "Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench_Female":
    () =>
      import(
        "../assets/exercises/Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench_Female.webp"
      ),
  "Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench_Female1":
    () =>
      import(
        "../assets/exercises/Legs/Resistance Band Reverse Hyper with Stability Ball on Flat Bench_Female1.webp"
      ),
  "Legs/Resistance Band Seated Bent Knee Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Bent Knee Abduction.webp"
    ),
  "Legs/Resistance Band Seated Bent Knee Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Bent Knee Abduction1.webp"
    ),
  "Legs/Resistance Band Seated Bent Knee Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Bent Knee Abduction_Female.webp"
    ),
  "Legs/Resistance Band Seated Bent Knee Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Bent Knee Abduction_Female1.webp"
    ),
  "Legs/Resistance Band Seated Hip Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Hip Abduction.webp"
    ),
  "Legs/Resistance Band Seated Hip Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Hip Abduction1.webp"
    ),
  "Legs/Resistance Band Seated Hip Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Hip Abduction_Female.webp"
    ),
  "Legs/Resistance Band Seated Hip Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Seated Hip Abduction_Female1.webp"
    ),
  "Legs/Resistance Band Side Plank Glute Raise": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Side Plank Glute Raise.webp"
    ),
  "Legs/Resistance Band Side Plank Glute Raise1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Side Plank Glute Raise1.webp"
    ),
  "Legs/Resistance Band Side Plank Glute Raise_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Side Plank Glute Raise_Female.webp"
    ),
  "Legs/Resistance Band Side Plank Glute Raise_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Side Plank Glute Raise_Female1.webp"
    ),
  "Legs/Resistance Band Squat Jump": () =>
    import("../assets/exercises/Legs/Resistance Band Squat Jump.webp"),
  "Legs/Resistance Band Squat Jump1": () =>
    import("../assets/exercises/Legs/Resistance Band Squat Jump1.webp"),
  "Legs/Resistance Band Squat Jump_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Squat Jump_Female.webp"),
  "Legs/Resistance Band Squat Jump_Female1": () =>
    import("../assets/exercises/Legs/Resistance Band Squat Jump_Female1.webp"),
  "Legs/Resistance Band Squat": () =>
    import("../assets/exercises/Legs/Resistance Band Squat.webp"),
  "Legs/Resistance Band Squat1": () =>
    import("../assets/exercises/Legs/Resistance Band Squat1.webp"),
  "Legs/Resistance Band Squat_Female": () =>
    import("../assets/exercises/Legs/Resistance Band Squat_Female.webp"),
  "Legs/Resistance Band Squat_Female1": () =>
    import("../assets/exercises/Legs/Resistance Band Squat_Female1.webp"),
  "Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2).webp"
    ),
  "Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)1.webp"
    ),
  "Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)_Female":
    () =>
      import(
        "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)_Female.webp"
      ),
  "Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)_Female1":
    () =>
      import(
        "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback (VERSION 2)_Female1.webp"
      ),
  "Legs/Resistance Band Standing Balance Glute Kickback": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback.webp"
    ),
  "Legs/Resistance Band Standing Balance Glute Kickback1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback1.webp"
    ),
  "Legs/Resistance Band Standing Balance Glute Kickback_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback_Female.webp"
    ),
  "Legs/Resistance Band Standing Balance Glute Kickback_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Glute Kickback_Female1.webp"
    ),
  "Legs/Resistance Band Standing Balance Hip Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Hip Abduction.webp"
    ),
  "Legs/Resistance Band Standing Balance Hip Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Hip Abduction1.webp"
    ),
  "Legs/Resistance Band Standing Balance Hip Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Hip Abduction_Female.webp"
    ),
  "Legs/Resistance Band Standing Balance Hip Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Balance Hip Abduction_Female1.webp"
    ),
  "Legs/Resistance Band Standing Hip Abduction": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Hip Abduction.webp"
    ),
  "Legs/Resistance Band Standing Hip Abduction1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Hip Abduction1.webp"
    ),
  "Legs/Resistance Band Standing Hip Abduction_Female": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Hip Abduction_Female.webp"
    ),
  "Legs/Resistance Band Standing Hip Abduction_Female1": () =>
    import(
      "../assets/exercises/Legs/Resistance Band Standing Hip Abduction_Female1.webp"
    ),
  "Legs/Seated calf raises dumbbell on knee": () =>
    import("../assets/exercises/Legs/Seated calf raises dumbbell on knee.webp"),
  "Legs/Seated calf raises dumbbell on knee1": () =>
    import(
      "../assets/exercises/Legs/Seated calf raises dumbbell on knee1.webp"
    ),
  "Legs/Seated leg curl machine  ": () =>
    import("../assets/exercises/Legs/Seated leg curl machine  .webp"),
  "Legs/Seated leg curl machine  1": () =>
    import("../assets/exercises/Legs/Seated leg curl machine  1.webp"),
  "Legs/Seated leg extension single leg": () =>
    import("../assets/exercises/Legs/Seated leg extension single leg.webp"),
  "Legs/Seated leg extension single leg1": () =>
    import("../assets/exercises/Legs/Seated leg extension single leg1.webp"),
  "Legs/Seated leg extension single leg_Female": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension single leg_Female.webp"
    ),
  "Legs/Seated leg extension single leg_Female1": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension single leg_Female1.webp"
    ),
  "Legs/Seated leg extension_alternate legs": () =>
    import("../assets/exercises/Legs/Seated leg extension_alternate legs.webp"),
  "Legs/Seated leg extension_alternate legs1 (2)": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_alternate legs1 (2).webp"
    ),
  "Legs/Seated leg extension_alternate legs1": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_alternate legs1.webp"
    ),
  "Legs/Seated leg extension_alternate legs_Female": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_alternate legs_Female.webp"
    ),
  "Legs/Seated leg extension_alternate legs_Female1 (2)": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_alternate legs_Female1 (2).webp"
    ),
  "Legs/Seated leg extension_alternate legs_Female1": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_alternate legs_Female1.webp"
    ),
  "Legs/Seated leg extension_both legs": () =>
    import("../assets/exercises/Legs/Seated leg extension_both legs.webp"),
  "Legs/Seated leg extension_both legs1": () =>
    import("../assets/exercises/Legs/Seated leg extension_both legs1.webp"),
  "Legs/Seated leg extension_both legs_Female": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_both legs_Female.webp"
    ),
  "Legs/Seated leg extension_both legs_Female1": () =>
    import(
      "../assets/exercises/Legs/Seated leg extension_both legs_Female1.webp"
    ),
  "Legs/Standing Side leg raises  ": () =>
    import("../assets/exercises/Legs/Standing Side leg raises  .webp"),
  "Legs/Standing Side leg raises  1": () =>
    import("../assets/exercises/Legs/Standing Side leg raises  1.webp"),
  "Legs/Sumo squat over shoulder resistance band": () =>
    import(
      "../assets/exercises/Legs/Sumo squat over shoulder resistance band.webp"
    ),
  "Legs/Sumo squat over shoulder resistance band1": () =>
    import(
      "../assets/exercises/Legs/Sumo squat over shoulder resistance band1.webp"
    ),
  "Legs/Suspension Trainer with Grips Hip Bridge": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Hip Bridge.webp"
    ),
  "Legs/Suspension Trainer with Grips Hip Bridge1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Hip Bridge1.webp"
    ),
  "Legs/Suspension Trainer with Grips Hip Bridge_female": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Hip Bridge_female.webp"
    ),
  "Legs/Suspension Trainer with Grips Hip Bridge_female1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Hip Bridge_female1.webp"
    ),
  "Legs/Suspension Trainer with Grips Leg Curl female": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Leg Curl female.webp"
    ),
  "Legs/Suspension Trainer with Grips Leg Curl female1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Leg Curl female1.webp"
    ),
  "Legs/Suspension Trainer with Grips Leg Curl": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Leg Curl.webp"
    ),
  "Legs/Suspension Trainer with Grips Leg Curl1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Leg Curl1.webp"
    ),
  "Legs/Suspension Trainer with Grips Side Squat": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Side Squat.webp"
    ),
  "Legs/Suspension Trainer with Grips Side Squat1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Side Squat1.webp"
    ),
  "Legs/Suspension Trainer with Grips Split Squat": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Split Squat.webp"
    ),
  "Legs/Suspension Trainer with Grips Split Squat1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Split Squat1.webp"
    ),
  "Legs/Suspension Trainer with Grips Split Squat_female": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Split Squat_female.webp"
    ),
  "Legs/Suspension Trainer with Grips Split Squat_female1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Split Squat_female1.webp"
    ),
  "Legs/Suspension Trainer with Grips Straight Hip Leg Curl": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Straight Hip Leg Curl.webp"
    ),
  "Legs/Suspension Trainer with Grips Straight Hip Leg Curl1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Straight Hip Leg Curl1.webp"
    ),
  "Legs/Suspension Trainer with Grips Straight Hip Leg Curl_female": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Straight Hip Leg Curl_female.webp"
    ),
  "Legs/Suspension Trainer with Grips Straight Hip Leg Curl_female1": () =>
    import(
      "../assets/exercises/Legs/Suspension Trainer with Grips Straight Hip Leg Curl_female1.webp"
    ),
  "Legs/alternate heel touch side kick squat": () =>
    import(
      "../assets/exercises/Legs/alternate heel touch side kick squat.webp"
    ),
  "Legs/alternate heel touch side kick squat1": () =>
    import(
      "../assets/exercises/Legs/alternate heel touch side kick squat1.webp"
    ),
  "Legs/band kneeling rear kick_female": () =>
    import("../assets/exercises/Legs/band kneeling rear kick_female.webp"),
  "Legs/band kneeling rear kick_female1": () =>
    import("../assets/exercises/Legs/band kneeling rear kick_female1.webp"),
  "Legs/barbell bulgarian split squat left side view  ": () =>
    import(
      "../assets/exercises/Legs/barbell bulgarian split squat left side view  .webp"
    ),
  "Legs/barbell bulgarian split squat left side view  1": () =>
    import(
      "../assets/exercises/Legs/barbell bulgarian split squat left side view  1.webp"
    ),
  "Legs/barbell front bench squat_female": () =>
    import("../assets/exercises/Legs/barbell front bench squat_female.webp"),
  "Legs/barbell front bench squat_female1": () =>
    import("../assets/exercises/Legs/barbell front bench squat_female1.webp"),
  "Legs/barbell front chest bench squat": () =>
    import("../assets/exercises/Legs/barbell front chest bench squat.webp"),
  "Legs/barbell front chest bench squat1": () =>
    import("../assets/exercises/Legs/barbell front chest bench squat1.webp"),
  "Legs/barbell front chest lunges": () =>
    import("../assets/exercises/Legs/barbell front chest lunges.webp"),
  "Legs/barbell front chest lunges1": () =>
    import("../assets/exercises/Legs/barbell front chest lunges1.webp"),
  "Legs/barbell front chest squat_female": () =>
    import("../assets/exercises/Legs/barbell front chest squat_female.webp"),
  "Legs/barbell front chest squat_female1": () =>
    import("../assets/exercises/Legs/barbell front chest squat_female1.webp"),
  "Legs/barbell front rack lunge_female": () =>
    import("../assets/exercises/Legs/barbell front rack lunge_female.webp"),
  "Legs/barbell front rack lunge_female1": () =>
    import("../assets/exercises/Legs/barbell front rack lunge_female1.webp"),
  "Legs/barbell front squat_female": () =>
    import("../assets/exercises/Legs/barbell front squat_female.webp"),
  "Legs/barbell front squat_female1": () =>
    import("../assets/exercises/Legs/barbell front squat_female1.webp"),
  "Legs/barbell full squat side pov": () =>
    import("../assets/exercises/Legs/barbell full squat side pov.webp"),
  "Legs/barbell full squat side pov1": () =>
    import("../assets/exercises/Legs/barbell full squat side pov1.webp"),
  "Legs/barbell full squat wide_female": () =>
    import("../assets/exercises/Legs/barbell full squat wide_female.webp"),
  "Legs/barbell full squat wide_female1": () =>
    import("../assets/exercises/Legs/barbell full squat wide_female1.webp"),
  "Legs/barbell full squat(back)_female": () =>
    import("../assets/exercises/Legs/barbell full squat(back)_female.webp"),
  "Legs/barbell full squat(back)_female1": () =>
    import("../assets/exercises/Legs/barbell full squat(back)_female1.webp"),
  "Legs/barbell full squat(with rack)_female": () =>
    import(
      "../assets/exercises/Legs/barbell full squat(with rack)_female.webp"
    ),
  "Legs/barbell full squat(with rack)_female1": () =>
    import(
      "../assets/exercises/Legs/barbell full squat(with rack)_female1.webp"
    ),
  "Legs/barbell kneeling squat": () =>
    import("../assets/exercises/Legs/barbell kneeling squat.webp"),
  "Legs/barbell kneeling squat1": () =>
    import("../assets/exercises/Legs/barbell kneeling squat1.webp"),
  "Legs/barbell lunges on the spot  ": () =>
    import("../assets/exercises/Legs/barbell lunges on the spot  .webp"),
  "Legs/barbell lunges on the spot  1": () =>
    import("../assets/exercises/Legs/barbell lunges on the spot  1.webp"),
  "Legs/barbell narrow stance full squat_female": () =>
    import(
      "../assets/exercises/Legs/barbell narrow stance full squat_female.webp"
    ),
  "Legs/barbell narrow stance full squat_female1": () =>
    import(
      "../assets/exercises/Legs/barbell narrow stance full squat_female1.webp"
    ),
  "Legs/barbell one leg hip thrust": () =>
    import("../assets/exercises/Legs/barbell one leg hip thrust.webp"),
  "Legs/barbell one leg hip thrust1": () =>
    import("../assets/exercises/Legs/barbell one leg hip thrust1.webp"),
  "Legs/barbell overhead lunge_female": () =>
    import("../assets/exercises/Legs/barbell overhead lunge_female.webp"),
  "Legs/barbell overhead lunge_female1": () =>
    import("../assets/exercises/Legs/barbell overhead lunge_female1.webp"),
  "Legs/barbell overhead squat_female": () =>
    import("../assets/exercises/Legs/barbell overhead squat_female.webp"),
  "Legs/barbell overhead squat_female1": () =>
    import("../assets/exercises/Legs/barbell overhead squat_female1.webp"),
  "Legs/barbell seated on knee calve raises": () =>
    import("../assets/exercises/Legs/barbell seated on knee calve raises.webp"),
  "Legs/barbell seated on knee calve raises1": () =>
    import(
      "../assets/exercises/Legs/barbell seated on knee calve raises1.webp"
    ),
  "Legs/barbell squat with 2 sec hold": () =>
    import("../assets/exercises/Legs/barbell squat with 2 sec hold.webp"),
  "Legs/barbell squat with 2 sec hold1": () =>
    import("../assets/exercises/Legs/barbell squat with 2 sec hold1.webp"),
  "Legs/bench alternating step ups  ": () =>
    import("../assets/exercises/Legs/bench alternating step ups  .webp"),
  "Legs/bench alternating step ups  1": () =>
    import("../assets/exercises/Legs/bench alternating step ups  1.webp"),
  "Legs/bodyweight calf raises": () =>
    import("../assets/exercises/Legs/bodyweight calf raises.webp"),
  "Legs/bodyweight calf raises1": () =>
    import("../assets/exercises/Legs/bodyweight calf raises1.webp"),
  "Legs/bodyweight full squat with overhead front raise": () =>
    import(
      "../assets/exercises/Legs/bodyweight full squat with overhead front raise.webp"
    ),
  "Legs/bodyweight full squat with overhead front raise1": () =>
    import(
      "../assets/exercises/Legs/bodyweight full squat with overhead front raise1.webp"
    ),
  "Legs/bodyweight lying leg curl": () =>
    import("../assets/exercises/Legs/bodyweight lying leg curl.webp"),
  "Legs/bodyweight lying leg curl1": () =>
    import("../assets/exercises/Legs/bodyweight lying leg curl1.webp"),
  "Legs/bodyweight squats  ": () =>
    import("../assets/exercises/Legs/bodyweight squats  .webp"),
  "Legs/bodyweight squats  1": () =>
    import("../assets/exercises/Legs/bodyweight squats  1.webp"),
  "Legs/bodyweight squats hold  ": () =>
    import("../assets/exercises/Legs/bodyweight squats hold  .webp"),
  "Legs/bodyweight squats hold  1": () =>
    import("../assets/exercises/Legs/bodyweight squats hold  1.webp"),
  "Legs/box jump  ": () => import("../assets/exercises/Legs/box jump  .webp"),
  "Legs/box jump  1": () => import("../assets/exercises/Legs/box jump  1.webp"),
  "Legs/box jump squats": () =>
    import("../assets/exercises/Legs/box jump squats.webp"),
  "Legs/box jump squats1": () =>
    import("../assets/exercises/Legs/box jump squats1.webp"),
  "Legs/bridge pose setu bandhasana": () =>
    import("../assets/exercises/Legs/bridge pose setu bandhasana.webp"),
  "Legs/bridge pose setu bandhasana1": () =>
    import("../assets/exercises/Legs/bridge pose setu bandhasana1.webp"),
  "Legs/bulgarian split squat bodyweight left  ": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat bodyweight left  .webp"
    ),
  "Legs/bulgarian split squat bodyweight left  1": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat bodyweight left  1.webp"
    ),
  "Legs/bulgarian split squat bodyweight right  ": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat bodyweight right  .webp"
    ),
  "Legs/bulgarian split squat bodyweight right  1": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat bodyweight right  1.webp"
    ),
  "Legs/bulgarian split squat cable resistance band  ": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat cable resistance band  .webp"
    ),
  "Legs/bulgarian split squat cable resistance band  1": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat cable resistance band  1.webp"
    ),
  "Legs/bulgarian split squat left bodyweight side view  ": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat left bodyweight side view  .webp"
    ),
  "Legs/bulgarian split squat left bodyweight side view  1": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat left bodyweight side view  1.webp"
    ),
  "Legs/bulgarian split squat right bodyweight side view  ": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat right bodyweight side view  .webp"
    ),
  "Legs/bulgarian split squat right bodyweight side view  1": () =>
    import(
      "../assets/exercises/Legs/bulgarian split squat right bodyweight side view  1.webp"
    ),
  "Legs/cable pull through": () =>
    import("../assets/exercises/Legs/cable pull through.webp"),
  "Legs/cable pull through1": () =>
    import("../assets/exercises/Legs/cable pull through1.webp"),
  "Legs/chair Bulgarian Split Squats bodyweight right": () =>
    import(
      "../assets/exercises/Legs/chair Bulgarian Split Squats bodyweight right.webp"
    ),
  "Legs/chair Bulgarian Split Squats bodyweight right1": () =>
    import(
      "../assets/exercises/Legs/chair Bulgarian Split Squats bodyweight right1.webp"
    ),
  "Legs/chair Feet Elevated Glute Bridge  ": () =>
    import("../assets/exercises/Legs/chair Feet Elevated Glute Bridge  .webp"),
  "Legs/chair Feet Elevated Glute Bridge  1": () =>
    import("../assets/exercises/Legs/chair Feet Elevated Glute Bridge  1.webp"),
  "Legs/chair Frog Feet Elevated Glute Bridge bodyweight  ": () =>
    import(
      "../assets/exercises/Legs/chair Frog Feet Elevated Glute Bridge bodyweight  .webp"
    ),
  "Legs/chair Frog Feet Elevated Glute Bridge bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/chair Frog Feet Elevated Glute Bridge bodyweight  1.webp"
    ),
  "Legs/chair back lunge left resistance band  ": () =>
    import(
      "../assets/exercises/Legs/chair back lunge left resistance band  .webp"
    ),
  "Legs/chair back lunge left resistance band  1": () =>
    import(
      "../assets/exercises/Legs/chair back lunge left resistance band  1.webp"
    ),
  "Legs/chair back lunge right resistance band  ": () =>
    import(
      "../assets/exercises/Legs/chair back lunge right resistance band  .webp"
    ),
  "Legs/chair back lunge right resistance band  1": () =>
    import(
      "../assets/exercises/Legs/chair back lunge right resistance band  1.webp"
    ),
  "Legs/curtsy lunge bodyweight  ": () =>
    import("../assets/exercises/Legs/curtsy lunge bodyweight  .webp"),
  "Legs/curtsy lunge bodyweight  1": () =>
    import("../assets/exercises/Legs/curtsy lunge bodyweight  1.webp"),
  "Legs/dumbbell bulgarian box split squat": () =>
    import("../assets/exercises/Legs/dumbbell bulgarian box split squat.webp"),
  "Legs/dumbbell bulgarian box split squat1": () =>
    import("../assets/exercises/Legs/dumbbell bulgarian box split squat1.webp"),
  "Legs/dumbbell farmer walks": () =>
    import("../assets/exercises/Legs/dumbbell farmer walks.webp"),
  "Legs/dumbbell farmer walks1": () =>
    import("../assets/exercises/Legs/dumbbell farmer walks1.webp"),
  "Legs/dumbbell side lunge left n right": () =>
    import("../assets/exercises/Legs/dumbbell side lunge left n right.webp"),
  "Legs/dumbbell side lunge left n right1": () =>
    import("../assets/exercises/Legs/dumbbell side lunge left n right1.webp"),
  "Legs/dumbbell standing calf raise": () =>
    import("../assets/exercises/Legs/dumbbell standing calf raise.webp"),
  "Legs/dumbbell standing calf raise1": () =>
    import("../assets/exercises/Legs/dumbbell standing calf raise1.webp"),
  "Legs/fire hydrant bodyweight  ": () =>
    import("../assets/exercises/Legs/fire hydrant bodyweight  .webp"),
  "Legs/fire hydrant bodyweight  1": () =>
    import("../assets/exercises/Legs/fire hydrant bodyweight  1.webp"),
  "Legs/fire hydrant circle bodyweight": () =>
    import("../assets/exercises/Legs/fire hydrant circle bodyweight.webp"),
  "Legs/fire hydrant circle bodyweight1": () =>
    import("../assets/exercises/Legs/fire hydrant circle bodyweight1.webp"),
  "Legs/front squats dumbbell low": () =>
    import("../assets/exercises/Legs/front squats dumbbell low.webp"),
  "Legs/front squats dumbbell low1": () =>
    import("../assets/exercises/Legs/front squats dumbbell low1.webp"),
  "Legs/front squats dumbbell over shoulders": () =>
    import(
      "../assets/exercises/Legs/front squats dumbbell over shoulders.webp"
    ),
  "Legs/front squats dumbbell over shoulders1": () =>
    import(
      "../assets/exercises/Legs/front squats dumbbell over shoulders1.webp"
    ),
  "Legs/front squats kettlebell over shoulders": () =>
    import(
      "../assets/exercises/Legs/front squats kettlebell over shoulders.webp"
    ),
  "Legs/front squats kettlebell over shoulders1": () =>
    import(
      "../assets/exercises/Legs/front squats kettlebell over shoulders1.webp"
    ),
  "Legs/goblet kettlebell squats  ": () =>
    import("../assets/exercises/Legs/goblet kettlebell squats  .webp"),
  "Legs/goblet kettlebell squats  1": () =>
    import("../assets/exercises/Legs/goblet kettlebell squats  1.webp"),
  "Legs/in and out squats jump bodyweight  ": () =>
    import("../assets/exercises/Legs/in and out squats jump bodyweight  .webp"),
  "Legs/in and out squats jump bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/in and out squats jump bodyweight  1.webp"
    ),
  "Legs/in and out squats jump bodyweight (2)": () =>
    import(
      "../assets/exercises/Legs/in and out squats jump bodyweight (2).webp"
    ),
  "Legs/in and out squats jump bodyweight (2)1": () =>
    import(
      "../assets/exercises/Legs/in and out squats jump bodyweight (2)1.webp"
    ),
  "Legs/kettlebell bulgarian split squat right  ": () =>
    import(
      "../assets/exercises/Legs/kettlebell bulgarian split squat right  .webp"
    ),
  "Legs/kettlebell bulgarian split squat right  1": () =>
    import(
      "../assets/exercises/Legs/kettlebell bulgarian split squat right  1.webp"
    ),
  "Legs/kettlebell bulgarian split squat right side view  ": () =>
    import(
      "../assets/exercises/Legs/kettlebell bulgarian split squat right side view  .webp"
    ),
  "Legs/kettlebell bulgarian split squat right side view  1": () =>
    import(
      "../assets/exercises/Legs/kettlebell bulgarian split squat right side view  1.webp"
    ),
  "Legs/kettlebell squats  ": () =>
    import("../assets/exercises/Legs/kettlebell squats  .webp"),
  "Legs/kettlebell squats  1": () =>
    import("../assets/exercises/Legs/kettlebell squats  1.webp"),
  "Legs/kneeling leg curl machine  ": () =>
    import("../assets/exercises/Legs/kneeling leg curl machine  .webp"),
  "Legs/kneeling leg curl machine  1": () =>
    import("../assets/exercises/Legs/kneeling leg curl machine  1.webp"),
  "Legs/leg press machine close stance  ": () =>
    import("../assets/exercises/Legs/leg press machine close stance  .webp"),
  "Legs/leg press machine close stance  1": () =>
    import("../assets/exercises/Legs/leg press machine close stance  1.webp"),
  "Legs/leg press machine normal stance  ": () =>
    import("../assets/exercises/Legs/leg press machine normal stance  .webp"),
  "Legs/leg press machine normal stance  1": () =>
    import("../assets/exercises/Legs/leg press machine normal stance  1.webp"),
  "Legs/leg press wide high stance  ": () =>
    import("../assets/exercises/Legs/leg press wide high stance  .webp"),
  "Legs/leg press wide high stance  1": () =>
    import("../assets/exercises/Legs/leg press wide high stance  1.webp"),
  "Legs/leg press wide high stance behind view  ": () =>
    import(
      "../assets/exercises/Legs/leg press wide high stance behind view  .webp"
    ),
  "Legs/leg press wide high stance behind view  1": () =>
    import(
      "../assets/exercises/Legs/leg press wide high stance behind view  1.webp"
    ),
  "Legs/lunge front kick  ": () =>
    import("../assets/exercises/Legs/lunge front kick  .webp"),
  "Legs/lunge front kick  1": () =>
    import("../assets/exercises/Legs/lunge front kick  1.webp"),
  "Legs/lunge pulses bodyweight  ": () =>
    import("../assets/exercises/Legs/lunge pulses bodyweight  .webp"),
  "Legs/lunge pulses bodyweight  1": () =>
    import("../assets/exercises/Legs/lunge pulses bodyweight  1.webp"),
  "Legs/lunge pulses bodyweight": () =>
    import("../assets/exercises/Legs/lunge pulses bodyweight.webp"),
  "Legs/lunge pulses bodyweight1": () =>
    import("../assets/exercises/Legs/lunge pulses bodyweight1.webp"),
  "Legs/lunge reverse with resistance band  ": () =>
    import(
      "../assets/exercises/Legs/lunge reverse with resistance band  .webp"
    ),
  "Legs/lunge reverse with resistance band  1": () =>
    import(
      "../assets/exercises/Legs/lunge reverse with resistance band  1.webp"
    ),
  "Legs/lunge rotation left and right bodyweight": () =>
    import(
      "../assets/exercises/Legs/lunge rotation left and right bodyweight.webp"
    ),
  "Legs/lunge rotation left and right bodyweight1": () =>
    import(
      "../assets/exercises/Legs/lunge rotation left and right bodyweight1.webp"
    ),
  "Legs/lunges alternate leg with pause bodyweight  ": () =>
    import(
      "../assets/exercises/Legs/lunges alternate leg with pause bodyweight  .webp"
    ),
  "Legs/lunges alternate leg with pause bodyweight  1": () =>
    import(
      "../assets/exercises/Legs/lunges alternate leg with pause bodyweight  1.webp"
    ),
  "Legs/lunges same leg side view bodyweight": () =>
    import(
      "../assets/exercises/Legs/lunges same leg side view bodyweight.webp"
    ),
  "Legs/lunges same leg side view bodyweight1": () =>
    import(
      "../assets/exercises/Legs/lunges same leg side view bodyweight1.webp"
    ),
  "Legs/lying leg curl machine  ": () =>
    import("../assets/exercises/Legs/lying leg curl machine  .webp"),
  "Legs/lying leg curl machine  1": () =>
    import("../assets/exercises/Legs/lying leg curl machine  1.webp"),
  "Legs/reverse lunge left resistance band  ": () =>
    import(
      "../assets/exercises/Legs/reverse lunge left resistance band  .webp"
    ),
  "Legs/reverse lunge left resistance band  1": () =>
    import(
      "../assets/exercises/Legs/reverse lunge left resistance band  1.webp"
    ),
  "Legs/seated calf machine  ": () =>
    import("../assets/exercises/Legs/seated calf machine  .webp"),
  "Legs/seated calf machine  1": () =>
    import("../assets/exercises/Legs/seated calf machine  1.webp"),
  "Legs/seated hip abductor machine  ": () =>
    import("../assets/exercises/Legs/seated hip abductor machine  .webp"),
  "Legs/seated hip abductor machine  1": () =>
    import("../assets/exercises/Legs/seated hip abductor machine  1.webp"),
  "Legs/seated machine hip adductor  ": () =>
    import("../assets/exercises/Legs/seated machine hip adductor  .webp"),
  "Legs/seated machine hip adductor  1": () =>
    import("../assets/exercises/Legs/seated machine hip adductor  1.webp"),
  "Legs/side lunges bodyweight  ": () =>
    import("../assets/exercises/Legs/side lunges bodyweight  .webp"),
  "Legs/side lunges bodyweight  1": () =>
    import("../assets/exercises/Legs/side lunges bodyweight  1.webp"),
  "Legs/side lying leg lift left  ": () =>
    import("../assets/exercises/Legs/side lying leg lift left  .webp"),
  "Legs/side lying leg lift left  1": () =>
    import("../assets/exercises/Legs/side lying leg lift left  1.webp"),
  "Legs/side lying leg lift right  ": () =>
    import("../assets/exercises/Legs/side lying leg lift right  .webp"),
  "Legs/side lying leg lift right  1": () =>
    import("../assets/exercises/Legs/side lying leg lift right  1.webp"),
  "Legs/single leg calf raise leg press machine  ": () =>
    import(
      "../assets/exercises/Legs/single leg calf raise leg press machine  .webp"
    ),
  "Legs/single leg calf raise leg press machine  1": () =>
    import(
      "../assets/exercises/Legs/single leg calf raise leg press machine  1.webp"
    ),
  "Legs/single leg incline 45 degree leg press machine  ": () =>
    import(
      "../assets/exercises/Legs/single leg incline 45 degree leg press machine  .webp"
    ),
  "Legs/single leg incline 45 degree leg press machine  1": () =>
    import(
      "../assets/exercises/Legs/single leg incline 45 degree leg press machine  1.webp"
    ),
  "Legs/single leg romanian deadlift dumbbell  ": () =>
    import(
      "../assets/exercises/Legs/single leg romanian deadlift dumbbell  .webp"
    ),
  "Legs/single leg romanian deadlift dumbbell  1": () =>
    import(
      "../assets/exercises/Legs/single leg romanian deadlift dumbbell  1.webp"
    ),
  "Legs/single leg romanian deadlifts right cable resistance band  ": () =>
    import(
      "../assets/exercises/Legs/single leg romanian deadlifts right cable resistance band  .webp"
    ),
  "Legs/single leg romanian deadlifts right cable resistance band  1": () =>
    import(
      "../assets/exercises/Legs/single leg romanian deadlifts right cable resistance band  1.webp"
    ),
  "Legs/smith machine bulgarian split squat  ": () =>
    import(
      "../assets/exercises/Legs/smith machine bulgarian split squat  .webp"
    ),
  "Legs/smith machine bulgarian split squat  1": () =>
    import(
      "../assets/exercises/Legs/smith machine bulgarian split squat  1.webp"
    ),
  "Legs/smith machine calf raise  ": () =>
    import("../assets/exercises/Legs/smith machine calf raise  .webp"),
  "Legs/smith machine calf raise  1": () =>
    import("../assets/exercises/Legs/smith machine calf raise  1.webp"),
  "Legs/standing calf raise resistance band  ": () =>
    import(
      "../assets/exercises/Legs/standing calf raise resistance band  .webp"
    ),
  "Legs/standing calf raise resistance band  1": () =>
    import(
      "../assets/exercises/Legs/standing calf raise resistance band  1.webp"
    ),
  "Legs/standing calf raises smith machine  ": () =>
    import(
      "../assets/exercises/Legs/standing calf raises smith machine  .webp"
    ),
  "Legs/standing calf raises smith machine  1": () =>
    import(
      "../assets/exercises/Legs/standing calf raises smith machine  1.webp"
    ),
  "Legs/step up on chair bodyweight  ": () =>
    import("../assets/exercises/Legs/step up on chair bodyweight  .webp"),
  "Legs/step up on chair bodyweight  1": () =>
    import("../assets/exercises/Legs/step up on chair bodyweight  1.webp"),
  "Legs/sumo squat in between legs resistance band": () =>
    import(
      "../assets/exercises/Legs/sumo squat in between legs resistance band.webp"
    ),
  "Legs/sumo squat in between legs resistance band1": () =>
    import(
      "../assets/exercises/Legs/sumo squat in between legs resistance band1.webp"
    ),
  "Legs/wall sit bodyweight": () =>
    import("../assets/exercises/Legs/wall sit bodyweight.webp"),
  "Legs/wall sit bodyweight1": () =>
    import("../assets/exercises/Legs/wall sit bodyweight1.webp"),
  "Legs/wall squat bodyweight": () =>
    import("../assets/exercises/Legs/wall squat bodyweight.webp"),
  "Legs/wall squat bodyweight1": () =>
    import("../assets/exercises/Legs/wall squat bodyweight1.webp"),
  "Legs/wall squat with pause bodyweight  ": () =>
    import("../assets/exercises/Legs/wall squat with pause bodyweight  .webp"),
  "Legs/wall squat with pause bodyweight  1": () =>
    import("../assets/exercises/Legs/wall squat with pause bodyweight  1.webp"),
  "Powerlifting/Barbell Clean Deadlift_female": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Clean Deadlift_female.webp"
    ),
  "Powerlifting/Barbell Clean Deadlift_female1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Clean Deadlift_female1.webp"
    ),
  "Powerlifting/Barbell Clean Pull_female": () =>
    import("../assets/exercises/Powerlifting/Barbell Clean Pull_female.webp"),
  "Powerlifting/Barbell Clean Pull_female1": () =>
    import("../assets/exercises/Powerlifting/Barbell Clean Pull_female1.webp"),
  "Powerlifting/Barbell Clean and Jerk_female": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Clean and Jerk_female.webp"
    ),
  "Powerlifting/Barbell Clean and Jerk_female1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Clean and Jerk_female1.webp"
    ),
  "Powerlifting/Barbell Deadlift (front POV)_female": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Deadlift (front POV)_female.webp"
    ),
  "Powerlifting/Barbell Deadlift (front POV)_female1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Deadlift (front POV)_female1.webp"
    ),
  "Powerlifting/Barbell Deadlift (side POV)_female": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Deadlift (side POV)_female.webp"
    ),
  "Powerlifting/Barbell Deadlift (side POV)_female1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell Deadlift (side POV)_female1.webp"
    ),
  "Powerlifting/Barbell Deadlift_female": () =>
    import("../assets/exercises/Powerlifting/Barbell Deadlift_female.webp"),
  "Powerlifting/Barbell Deadlift_female1": () =>
    import("../assets/exercises/Powerlifting/Barbell Deadlift_female1.webp"),
  "Powerlifting/Barbell Hang Clean": () =>
    import("../assets/exercises/Powerlifting/Barbell Hang Clean.webp"),
  "Powerlifting/Barbell Hang Clean1": () =>
    import("../assets/exercises/Powerlifting/Barbell Hang Clean1.webp"),
  "Powerlifting/Barbell Hang Clean_Female": () =>
    import("../assets/exercises/Powerlifting/Barbell Hang Clean_Female.webp"),
  "Powerlifting/Barbell Hang Clean_Female1": () =>
    import("../assets/exercises/Powerlifting/Barbell Hang Clean_Female1.webp"),
  "Powerlifting/Barbell Press Under": () =>
    import("../assets/exercises/Powerlifting/Barbell Press Under.webp"),
  "Powerlifting/Barbell Press Under1": () =>
    import("../assets/exercises/Powerlifting/Barbell Press Under1.webp"),
  "Powerlifting/Barbell Press Under_Female": () =>
    import("../assets/exercises/Powerlifting/Barbell Press Under_Female.webp"),
  "Powerlifting/Barbell Press Under_Female1": () =>
    import("../assets/exercises/Powerlifting/Barbell Press Under_Female1.webp"),
  "Powerlifting/Barbell Thruster": () =>
    import("../assets/exercises/Powerlifting/Barbell Thruster.webp"),
  "Powerlifting/Barbell Thruster1": () =>
    import("../assets/exercises/Powerlifting/Barbell Thruster1.webp"),
  "Powerlifting/Barbell clean and jerk split squat": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell clean and jerk split squat.webp"
    ),
  "Powerlifting/Barbell clean and jerk split squat1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell clean and jerk split squat1.webp"
    ),
  "Powerlifting/Barbell clean and press": () =>
    import("../assets/exercises/Powerlifting/Barbell clean and press.webp"),
  "Powerlifting/Barbell clean and press1": () =>
    import("../assets/exercises/Powerlifting/Barbell clean and press1.webp"),
  "Powerlifting/Barbell clean grip front squat": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell clean grip front squat.webp"
    ),
  "Powerlifting/Barbell clean grip front squat1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell clean grip front squat1.webp"
    ),
  "Powerlifting/Barbell clean pull": () =>
    import("../assets/exercises/Powerlifting/Barbell clean pull.webp"),
  "Powerlifting/Barbell clean pull1": () =>
    import("../assets/exercises/Powerlifting/Barbell clean pull1.webp"),
  "Powerlifting/Barbell full clean": () =>
    import("../assets/exercises/Powerlifting/Barbell full clean.webp"),
  "Powerlifting/Barbell full clean1": () =>
    import("../assets/exercises/Powerlifting/Barbell full clean1.webp"),
  "Powerlifting/Barbell full squat": () =>
    import("../assets/exercises/Powerlifting/Barbell full squat.webp"),
  "Powerlifting/Barbell full squat1": () =>
    import("../assets/exercises/Powerlifting/Barbell full squat1.webp"),
  "Powerlifting/Barbell muscle clean": () =>
    import("../assets/exercises/Powerlifting/Barbell muscle clean.webp"),
  "Powerlifting/Barbell muscle clean1": () =>
    import("../assets/exercises/Powerlifting/Barbell muscle clean1.webp"),
  "Powerlifting/Barbell power clean from blocks": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell power clean from blocks.webp"
    ),
  "Powerlifting/Barbell power clean from blocks1": () =>
    import(
      "../assets/exercises/Powerlifting/Barbell power clean from blocks1.webp"
    ),
  "Powerlifting/Barbell power clean": () =>
    import("../assets/exercises/Powerlifting/Barbell power clean.webp"),
  "Powerlifting/Barbell power clean1": () =>
    import("../assets/exercises/Powerlifting/Barbell power clean1.webp"),
  "Powerlifting/Barbell power jerk": () =>
    import("../assets/exercises/Powerlifting/Barbell power jerk.webp"),
  "Powerlifting/Barbell power jerk1": () =>
    import("../assets/exercises/Powerlifting/Barbell power jerk1.webp"),
  "Powerlifting/Barbell power snatch": () =>
    import("../assets/exercises/Powerlifting/Barbell power snatch.webp"),
  "Powerlifting/Barbell power snatch1": () =>
    import("../assets/exercises/Powerlifting/Barbell power snatch1.webp"),
  "Powerlifting/Barbell rack pull": () =>
    import("../assets/exercises/Powerlifting/Barbell rack pull.webp"),
  "Powerlifting/Barbell rack pull1": () =>
    import("../assets/exercises/Powerlifting/Barbell rack pull1.webp"),
  "Powerlifting/Barbell snatch balance": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch balance.webp"),
  "Powerlifting/Barbell snatch balance1": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch balance1.webp"),
  "Powerlifting/Barbell snatch from blocks": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch from blocks.webp"),
  "Powerlifting/Barbell snatch from blocks1": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch from blocks1.webp"),
  "Powerlifting/Barbell snatch pull": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch pull.webp"),
  "Powerlifting/Barbell snatch pull1": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch pull1.webp"),
  "Powerlifting/Barbell snatch": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch.webp"),
  "Powerlifting/Barbell snatch1": () =>
    import("../assets/exercises/Powerlifting/Barbell snatch1.webp"),
  "Powerlifting/Barbell split clean": () =>
    import("../assets/exercises/Powerlifting/Barbell split clean.webp"),
  "Powerlifting/Barbell split clean1": () =>
    import("../assets/exercises/Powerlifting/Barbell split clean1.webp"),
  "Powerlifting/Barbell split jerk": () =>
    import("../assets/exercises/Powerlifting/Barbell split jerk.webp"),
  "Powerlifting/Barbell split jerk1": () =>
    import("../assets/exercises/Powerlifting/Barbell split jerk1.webp"),
  "Powerlifting/Dumbbell Hang Power Clean": () =>
    import("../assets/exercises/Powerlifting/Dumbbell Hang Power Clean.webp"),
  "Powerlifting/Dumbbell Hang Power Clean1": () =>
    import("../assets/exercises/Powerlifting/Dumbbell Hang Power Clean1.webp"),
  "Powerlifting/Dumbbell One Arm Snatch": () =>
    import("../assets/exercises/Powerlifting/Dumbbell One Arm Snatch.webp"),
  "Powerlifting/Dumbbell One Arm Snatch1": () =>
    import("../assets/exercises/Powerlifting/Dumbbell One Arm Snatch1.webp"),
  "Powerlifting/barbell full clean_female": () =>
    import("../assets/exercises/Powerlifting/barbell full clean_female.webp"),
  "Powerlifting/barbell full clean_female1": () =>
    import("../assets/exercises/Powerlifting/barbell full clean_female1.webp"),
  "Powerlifting/barbell muscle clean_female": () =>
    import("../assets/exercises/Powerlifting/barbell muscle clean_female.webp"),
  "Powerlifting/barbell muscle clean_female1": () =>
    import(
      "../assets/exercises/Powerlifting/barbell muscle clean_female1.webp"
    ),
  "Powerlifting/cluster": () =>
    import("../assets/exercises/Powerlifting/cluster.webp"),
  "Powerlifting/cluster1": () =>
    import("../assets/exercises/Powerlifting/cluster1.webp"),
  "Shoulders/Arm Tuck Side Bend_female": () =>
    import("../assets/exercises/Shoulders/Arm Tuck Side Bend_female.webp"),
  "Shoulders/Arm Tuck Side Bend_female1": () =>
    import("../assets/exercises/Shoulders/Arm Tuck Side Bend_female1.webp"),
  "Shoulders/Arm circles backward": () =>
    import("../assets/exercises/Shoulders/Arm circles backward.webp"),
  "Shoulders/Arm circles backward1": () =>
    import("../assets/exercises/Shoulders/Arm circles backward1.webp"),
  "Shoulders/Backhand Raise_female": () =>
    import("../assets/exercises/Shoulders/Backhand Raise_female.webp"),
  "Shoulders/Backhand Raise_female1": () =>
    import("../assets/exercises/Shoulders/Backhand Raise_female1.webp"),
  "Shoulders/Backhand raise": () =>
    import("../assets/exercises/Shoulders/Backhand raise.webp"),
  "Shoulders/Backhand raise1": () =>
    import("../assets/exercises/Shoulders/Backhand raise1.webp"),
  "Shoulders/Band Behind Neck Shoulder Press_female": () =>
    import(
      "../assets/exercises/Shoulders/Band Behind Neck Shoulder Press_female.webp"
    ),
  "Shoulders/Band Behind Neck Shoulder Press_female1": () =>
    import(
      "../assets/exercises/Shoulders/Band Behind Neck Shoulder Press_female1.webp"
    ),
  "Shoulders/Band Close Grip Row_female": () =>
    import("../assets/exercises/Shoulders/Band Close Grip Row_female.webp"),
  "Shoulders/Band Close Grip Row_female1": () =>
    import("../assets/exercises/Shoulders/Band Close Grip Row_female1.webp"),
  "Shoulders/Band Face Pull_female": () =>
    import("../assets/exercises/Shoulders/Band Face Pull_female.webp"),
  "Shoulders/Band Face Pull_female1": () =>
    import("../assets/exercises/Shoulders/Band Face Pull_female1.webp"),
  "Shoulders/Band Horizontal Shrug": () =>
    import("../assets/exercises/Shoulders/Band Horizontal Shrug.webp"),
  "Shoulders/Band Horizontal Shrug1": () =>
    import("../assets/exercises/Shoulders/Band Horizontal Shrug1.webp"),
  "Shoulders/Band Horizontal Shrug_Female": () =>
    import("../assets/exercises/Shoulders/Band Horizontal Shrug_Female.webp"),
  "Shoulders/Band Horizontal Shrug_Female1": () =>
    import("../assets/exercises/Shoulders/Band Horizontal Shrug_Female1.webp"),
  "Shoulders/Band Incline Row_female": () =>
    import("../assets/exercises/Shoulders/Band Incline Row_female.webp"),
  "Shoulders/Band Incline Row_female1": () =>
    import("../assets/exercises/Shoulders/Band Incline Row_female1.webp"),
  "Shoulders/Band Incline T Raise_female": () =>
    import("../assets/exercises/Shoulders/Band Incline T Raise_female.webp"),
  "Shoulders/Band Incline T Raise_female1": () =>
    import("../assets/exercises/Shoulders/Band Incline T Raise_female1.webp"),
  "Shoulders/Band Incline Y Raise_female": () =>
    import("../assets/exercises/Shoulders/Band Incline Y Raise_female.webp"),
  "Shoulders/Band Incline Y Raise_female1": () =>
    import("../assets/exercises/Shoulders/Band Incline Y Raise_female1.webp"),
  "Shoulders/Band Reverse Fly_female": () =>
    import("../assets/exercises/Shoulders/Band Reverse Fly_female.webp"),
  "Shoulders/Band Reverse Fly_female1": () =>
    import("../assets/exercises/Shoulders/Band Reverse Fly_female1.webp"),
  "Shoulders/Band Seated Lateral Raise_female": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Lateral Raise_female.webp"
    ),
  "Shoulders/Band Seated Lateral Raise_female1": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Lateral Raise_female1.webp"
    ),
  "Shoulders/Band Seated Neutral Grip Shoulders Press_female": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Neutral Grip Shoulders Press_female.webp"
    ),
  "Shoulders/Band Seated Neutral Grip Shoulders Press_female1": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Neutral Grip Shoulders Press_female1.webp"
    ),
  "Shoulders/Band Seated Shoulder Press_female": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Shoulder Press_female.webp"
    ),
  "Shoulders/Band Seated Shoulder Press_female1": () =>
    import(
      "../assets/exercises/Shoulders/Band Seated Shoulder Press_female1.webp"
    ),
  "Shoulders/Band Single Arm Overhead Press": () =>
    import("../assets/exercises/Shoulders/Band Single Arm Overhead Press.webp"),
  "Shoulders/Band Single Arm Overhead Press1": () =>
    import(
      "../assets/exercises/Shoulders/Band Single Arm Overhead Press1.webp"
    ),
  "Shoulders/Band Single Arm Overhead Press_Female": () =>
    import(
      "../assets/exercises/Shoulders/Band Single Arm Overhead Press_Female.webp"
    ),
  "Shoulders/Band Single Arm Overhead Press_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Band Single Arm Overhead Press_Female1.webp"
    ),
  "Shoulders/Band Y Raise_female": () =>
    import("../assets/exercises/Shoulders/Band Y Raise_female.webp"),
  "Shoulders/Band Y Raise_female1": () =>
    import("../assets/exercises/Shoulders/Band Y Raise_female1.webp"),
  "Shoulders/Band front Face Pull_female": () =>
    import("../assets/exercises/Shoulders/Band front Face Pull_female.webp"),
  "Shoulders/Band front Face Pull_female1": () =>
    import("../assets/exercises/Shoulders/Band front Face Pull_female1.webp"),
  "Shoulders/Band front raise_female": () =>
    import("../assets/exercises/Shoulders/Band front raise_female.webp"),
  "Shoulders/Band front raise_female1": () =>
    import("../assets/exercises/Shoulders/Band front raise_female1.webp"),
  "Shoulders/Band standing rear delt row_female": () =>
    import(
      "../assets/exercises/Shoulders/Band standing rear delt row_female.webp"
    ),
  "Shoulders/Band standing rear delt row_female1": () =>
    import(
      "../assets/exercises/Shoulders/Band standing rear delt row_female1.webp"
    ),
  "Shoulders/Barbell Back Wide Shrug_female": () =>
    import("../assets/exercises/Shoulders/Barbell Back Wide Shrug_female.webp"),
  "Shoulders/Barbell Back Wide Shrug_female1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Back Wide Shrug_female1.webp"
    ),
  "Shoulders/Barbell Behind the Back Push Press Single Arm Balance_female":
    () =>
      import(
        "../assets/exercises/Shoulders/Barbell Behind the Back Push Press Single Arm Balance_female.webp"
      ),
  "Shoulders/Barbell Behind the Back Push Press Single Arm Balance_female1":
    () =>
      import(
        "../assets/exercises/Shoulders/Barbell Behind the Back Push Press Single Arm Balance_female1.webp"
      ),
  "Shoulders/Barbell Bent Over Reverse Raise (skier)_female": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Bent Over Reverse Raise (skier)_female.webp"
    ),
  "Shoulders/Barbell Bent Over Reverse Raise (skier)_female1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Bent Over Reverse Raise (skier)_female1.webp"
    ),
  "Shoulders/Barbell Decline Shrug_female": () =>
    import("../assets/exercises/Shoulders/Barbell Decline Shrug_female.webp"),
  "Shoulders/Barbell Decline Shrug_female1": () =>
    import("../assets/exercises/Shoulders/Barbell Decline Shrug_female1.webp"),
  "Shoulders/Barbell Incline Shoulders Press (inside squat cage)_female": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Incline Shoulders Press (inside squat cage)_female.webp"
    ),
  "Shoulders/Barbell Incline Shoulders Press (inside squat cage)_female1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Incline Shoulders Press (inside squat cage)_female1.webp"
    ),
  "Shoulders/Barbell Incline Shoulders Press_female": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Incline Shoulders Press_female.webp"
    ),
  "Shoulders/Barbell Incline Shoulders Press_female1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Incline Shoulders Press_female1.webp"
    ),
  "Shoulders/Barbell Silverback Shrug": () =>
    import("../assets/exercises/Shoulders/Barbell Silverback Shrug.webp"),
  "Shoulders/Barbell Silverback Shrug1": () =>
    import("../assets/exercises/Shoulders/Barbell Silverback Shrug1.webp"),
  "Shoulders/Barbell Silverback Shrug_Female": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Silverback Shrug_Female.webp"
    ),
  "Shoulders/Barbell Silverback Shrug_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Silverback Shrug_Female1.webp"
    ),
  "Shoulders/Barbell Standing Military Press": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Standing Military Press.webp"
    ),
  "Shoulders/Barbell Standing Military Press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell Standing Military Press1.webp"
    ),
  "Shoulders/Barbell Wide Shrug": () =>
    import("../assets/exercises/Shoulders/Barbell Wide Shrug.webp"),
  "Shoulders/Barbell Wide Shrug1": () =>
    import("../assets/exercises/Shoulders/Barbell Wide Shrug1.webp"),
  "Shoulders/Barbell Z Press": () =>
    import("../assets/exercises/Shoulders/Barbell Z Press.webp"),
  "Shoulders/Barbell Z Press1": () =>
    import("../assets/exercises/Shoulders/Barbell Z Press1.webp"),
  "Shoulders/Barbell Z Press_Female": () =>
    import("../assets/exercises/Shoulders/Barbell Z Press_Female.webp"),
  "Shoulders/Barbell Z Press_Female1": () =>
    import("../assets/exercises/Shoulders/Barbell Z Press_Female1.webp"),
  "Shoulders/Barbell back wide shrugs": () =>
    import("../assets/exercises/Shoulders/Barbell back wide shrugs.webp"),
  "Shoulders/Barbell back wide shrugs1": () =>
    import("../assets/exercises/Shoulders/Barbell back wide shrugs1.webp"),
  "Shoulders/Barbell behind neck push press": () =>
    import("../assets/exercises/Shoulders/Barbell behind neck push press.webp"),
  "Shoulders/Barbell behind neck push press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell behind neck push press1.webp"
    ),
  "Shoulders/Barbell front raise": () =>
    import("../assets/exercises/Shoulders/Barbell front raise.webp"),
  "Shoulders/Barbell front raise1": () =>
    import("../assets/exercises/Shoulders/Barbell front raise1.webp"),
  "Shoulders/Barbell overhead shrug": () =>
    import("../assets/exercises/Shoulders/Barbell overhead shrug.webp"),
  "Shoulders/Barbell overhead shrug1": () =>
    import("../assets/exercises/Shoulders/Barbell overhead shrug1.webp"),
  "Shoulders/Barbell rear delt raise": () =>
    import("../assets/exercises/Shoulders/Barbell rear delt raise.webp"),
  "Shoulders/Barbell rear delt raise1": () =>
    import("../assets/exercises/Shoulders/Barbell rear delt raise1.webp"),
  "Shoulders/Barbell seated behind neck military press": () =>
    import(
      "../assets/exercises/Shoulders/Barbell seated behind neck military press.webp"
    ),
  "Shoulders/Barbell seated behind neck military press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell seated behind neck military press1.webp"
    ),
  "Shoulders/Barbell seated military press": () =>
    import("../assets/exercises/Shoulders/Barbell seated military press.webp"),
  "Shoulders/Barbell seated military press1": () =>
    import("../assets/exercises/Shoulders/Barbell seated military press1.webp"),
  "Shoulders/Barbell seated overhead press": () =>
    import("../assets/exercises/Shoulders/Barbell seated overhead press.webp"),
  "Shoulders/Barbell seated overhead press1": () =>
    import("../assets/exercises/Shoulders/Barbell seated overhead press1.webp"),
  "Shoulders/Barbell standing close grip military press": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing close grip military press.webp"
    ),
  "Shoulders/Barbell standing close grip military press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing close grip military press1.webp"
    ),
  "Shoulders/Barbell standing shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing shoulder press.webp"
    ),
  "Shoulders/Barbell standing shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing shoulder press1.webp"
    ),
  "Shoulders/Barbell standing wide grip military press": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing wide grip military press.webp"
    ),
  "Shoulders/Barbell standing wide grip military press1": () =>
    import(
      "../assets/exercises/Shoulders/Barbell standing wide grip military press1.webp"
    ),
  "Shoulders/Bodyweight Standing Around World Wall Supported": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Around World Wall Supported.webp"
    ),
  "Shoulders/Bodyweight Standing Around World Wall Supported1": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Around World Wall Supported1.webp"
    ),
  "Shoulders/Bodyweight Standing Military Press Wall Supported": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Military Press Wall Supported.webp"
    ),
  "Shoulders/Bodyweight Standing Military Press Wall Supported1": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Military Press Wall Supported1.webp"
    ),
  "Shoulders/Bodyweight Standing Military Press": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Military Press.webp"
    ),
  "Shoulders/Bodyweight Standing Military Press1": () =>
    import(
      "../assets/exercises/Shoulders/Bodyweight Standing Military Press1.webp"
    ),
  "Shoulders/Bodyweight Standing Shrug": () =>
    import("../assets/exercises/Shoulders/Bodyweight Standing Shrug.webp"),
  "Shoulders/Bodyweight Standing Shrug1": () =>
    import("../assets/exercises/Shoulders/Bodyweight Standing Shrug1.webp"),
  "Shoulders/Cable 30 Degree Shrug": () =>
    import("../assets/exercises/Shoulders/Cable 30 Degree Shrug.webp"),
  "Shoulders/Cable 30 Degree Shrug1": () =>
    import("../assets/exercises/Shoulders/Cable 30 Degree Shrug1.webp"),
  "Shoulders/Cable 30 Degree Shrug_Female": () =>
    import("../assets/exercises/Shoulders/Cable 30 Degree Shrug_Female.webp"),
  "Shoulders/Cable 30 Degree Shrug_Female1": () =>
    import("../assets/exercises/Shoulders/Cable 30 Degree Shrug_Female1.webp"),
  "Shoulders/Cable Bent Over One Arm Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Cable Bent Over One Arm Lateral Raise.webp"
    ),
  "Shoulders/Cable Bent Over One Arm Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Cable Bent Over One Arm Lateral Raise1.webp"
    ),
  "Shoulders/Cable One Arm Front Raise": () =>
    import("../assets/exercises/Shoulders/Cable One Arm Front Raise.webp"),
  "Shoulders/Cable One Arm Front Raise1": () =>
    import("../assets/exercises/Shoulders/Cable One Arm Front Raise1.webp"),
  "Shoulders/Cable Seated rear lateral raise": () =>
    import(
      "../assets/exercises/Shoulders/Cable Seated rear lateral raise.webp"
    ),
  "Shoulders/Cable Seated rear lateral raise1": () =>
    import(
      "../assets/exercises/Shoulders/Cable Seated rear lateral raise1.webp"
    ),
  "Shoulders/Cable Single Arm Reverse Fly_Female": () =>
    import(
      "../assets/exercises/Shoulders/Cable Single Arm Reverse Fly_Female.webp"
    ),
  "Shoulders/Cable Single Arm Reverse Fly_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Cable Single Arm Reverse Fly_Female1.webp"
    ),
  "Shoulders/Cable Y raise": () =>
    import("../assets/exercises/Shoulders/Cable Y raise.webp"),
  "Shoulders/Cable Y raise1": () =>
    import("../assets/exercises/Shoulders/Cable Y raise1.webp"),
  "Shoulders/Cable rear drive bent arm": () =>
    import("../assets/exercises/Shoulders/Cable rear drive bent arm.webp"),
  "Shoulders/Cable rear drive bent arm1": () =>
    import("../assets/exercises/Shoulders/Cable rear drive bent arm1.webp"),
  "Shoulders/Chest Tap Push up": () =>
    import("../assets/exercises/Shoulders/Chest Tap Push up.webp"),
  "Shoulders/Chest Tap Push up1": () =>
    import("../assets/exercises/Shoulders/Chest Tap Push up1.webp"),
  "Shoulders/Dumbbell Alternate Shoulder Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Alternate Shoulder Press.webp"
    ),
  "Shoulders/Dumbbell Alternate Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Alternate Shoulder Press1.webp"
    ),
  "Shoulders/Dumbbell Alternate Side Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Alternate Side Press.webp"),
  "Shoulders/Dumbbell Alternate Side Press1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Alternate Side Press1.webp"),
  "Shoulders/Dumbbell Arnold Press (version 2)": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Arnold Press (version 2).webp"
    ),
  "Shoulders/Dumbbell Arnold Press (version 2)1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Arnold Press (version 2)1.webp"
    ),
  "Shoulders/Dumbbell Arnold Press Seated": () =>
    import("../assets/exercises/Shoulders/Dumbbell Arnold Press Seated.webp"),
  "Shoulders/Dumbbell Arnold Press Seated1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Arnold Press Seated1.webp"),
  "Shoulders/Dumbbell Bench Seated Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Bench Seated Press.webp"),
  "Shoulders/Dumbbell Bench Seated Press1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Bench Seated Press1.webp"),
  "Shoulders/Dumbbell Bent Over Face Pull": () =>
    import("../assets/exercises/Shoulders/Dumbbell Bent Over Face Pull.webp"),
  "Shoulders/Dumbbell Bent Over Face Pull1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Bent Over Face Pull1.webp"),
  "Shoulders/Dumbbell Chest Supported Lateral Raises": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Chest Supported Lateral Raises.webp"
    ),
  "Shoulders/Dumbbell Chest Supported Lateral Raises1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Chest Supported Lateral Raises1.webp"
    ),
  "Shoulders/Dumbbell Cuban Press (version 2)": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Cuban Press (version 2).webp"
    ),
  "Shoulders/Dumbbell Cuban Press (version 2)1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Cuban Press (version 2)1.webp"
    ),
  "Shoulders/Dumbbell Decline Shrug": () =>
    import("../assets/exercises/Shoulders/Dumbbell Decline Shrug.webp"),
  "Shoulders/Dumbbell Decline Shrug1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Decline Shrug1.webp"),
  "Shoulders/Dumbbell External Rotation": () =>
    import("../assets/exercises/Shoulders/Dumbbell External Rotation.webp"),
  "Shoulders/Dumbbell External Rotation1": () =>
    import("../assets/exercises/Shoulders/Dumbbell External Rotation1.webp"),
  "Shoulders/Dumbbell Face Down Lying Shoulder Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Face Down Lying Shoulder Press.webp"
    ),
  "Shoulders/Dumbbell Face Down Lying Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Face Down Lying Shoulder Press1.webp"
    ),
  "Shoulders/Dumbbell Front Raise (version 2)": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Front Raise (version 2).webp"
    ),
  "Shoulders/Dumbbell Front Raise (version 2)1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Front Raise (version 2)1.webp"
    ),
  "Shoulders/Dumbbell Front Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell Front Raise.webp"),
  "Shoulders/Dumbbell Front Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Front Raise1.webp"),
  "Shoulders/Dumbbell Incline Breeding": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Breeding.webp"),
  "Shoulders/Dumbbell Incline Breeding1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Breeding1.webp"),
  "Shoulders/Dumbbell Incline Front Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Front Raise.webp"),
  "Shoulders/Dumbbell Incline Front Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Front Raise1.webp"),
  "Shoulders/Dumbbell Incline Hammer Shoulder Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Hammer Shoulder Press.webp"
    ),
  "Shoulders/Dumbbell Incline Hammer Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Hammer Shoulder Press1.webp"
    ),
  "Shoulders/Dumbbell Incline Lying Front Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Lying Front Raise.webp"
    ),
  "Shoulders/Dumbbell Incline Lying Front Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Lying Front Raise1.webp"
    ),
  "Shoulders/Dumbbell Incline One Arm Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline One Arm Lateral Raise.webp"
    ),
  "Shoulders/Dumbbell Incline One Arm Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline One Arm Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell Incline Rear Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Rear Lateral Raise.webp"
    ),
  "Shoulders/Dumbbell Incline Rear Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Incline Rear Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell Incline Shrug": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Shrug.webp"),
  "Shoulders/Dumbbell Incline Shrug1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Incline Shrug1.webp"),
  "Shoulders/Dumbbell Kneeling Arnold Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Kneeling Arnold Press.webp"),
  "Shoulders/Dumbbell Kneeling Arnold Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Kneeling Arnold Press1.webp"
    ),
  "Shoulders/Dumbbell Lateral to Front Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lateral to Front Raise.webp"
    ),
  "Shoulders/Dumbbell Lateral to Front Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lateral to Front Raise1.webp"
    ),
  "Shoulders/Dumbbell Leaning Fly": () =>
    import("../assets/exercises/Shoulders/Dumbbell Leaning Fly.webp"),
  "Shoulders/Dumbbell Leaning Fly1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Leaning Fly1.webp"),
  "Shoulders/Dumbbell Lying One Arm Rear Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lying One Arm Rear Lateral Raise.webp"
    ),
  "Shoulders/Dumbbell Lying One Arm Rear Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lying One Arm Rear Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell Lying Rear Delt Row": () =>
    import("../assets/exercises/Shoulders/Dumbbell Lying Rear Delt Row.webp"),
  "Shoulders/Dumbbell Lying Rear Delt Row1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Lying Rear Delt Row1.webp"),
  "Shoulders/Dumbbell Lying Rear Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lying Rear Lateral Raise.webp"
    ),
  "Shoulders/Dumbbell Lying Rear Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Lying Rear Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell One Arm Front Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell One Arm Front Raise.webp"),
  "Shoulders/Dumbbell One Arm Front Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell One Arm Front Raise1.webp"),
  "Shoulders/Dumbbell One Arm Lateral Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell One Arm Lateral Raise.webp"),
  "Shoulders/Dumbbell One Arm Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell One Arm Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell One Arm Low Fly": () =>
    import("../assets/exercises/Shoulders/Dumbbell One Arm Low Fly.webp"),
  "Shoulders/Dumbbell One Arm Low Fly1": () =>
    import("../assets/exercises/Shoulders/Dumbbell One Arm Low Fly1.webp"),
  "Shoulders/Dumbbell One Arm Shoulder Press (VERSION 2)": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell One Arm Shoulder Press (VERSION 2).webp"
    ),
  "Shoulders/Dumbbell One Arm Shoulder Press (VERSION 2)1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell One Arm Shoulder Press (VERSION 2)1.webp"
    ),
  "Shoulders/Dumbbell Push Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Push Press.webp"),
  "Shoulders/Dumbbell Push Press1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Push Press1.webp"),
  "Shoulders/Dumbbell Rear Delt Row": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Delt Row.webp"),
  "Shoulders/Dumbbell Rear Delt Row1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Delt Row1.webp"),
  "Shoulders/Dumbbell Rear Full Shrugs": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Full Shrugs.webp"),
  "Shoulders/Dumbbell Rear Full Shrugs1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Full Shrugs1.webp"),
  "Shoulders/Dumbbell Rear Lateral Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Lateral Raise.webp"),
  "Shoulders/Dumbbell Rear Lateral Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Rear Lateral Raise1.webp"),
  "Shoulders/Dumbbell Reverse Fly": () =>
    import("../assets/exercises/Shoulders/Dumbbell Reverse Fly.webp"),
  "Shoulders/Dumbbell Reverse Fly1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Reverse Fly1.webp"),
  "Shoulders/Dumbbell Scott Press (360 degrees)": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Scott Press (360 degrees).webp"
    ),
  "Shoulders/Dumbbell Scott Press (360 degrees)1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Scott Press (360 degrees)1.webp"
    ),
  "Shoulders/Dumbbell Scott Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Scott Press.webp"),
  "Shoulders/Dumbbell Scott Press1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Scott Press1.webp"),
  "Shoulders/Dumbbell Seated Alternate Front Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Front Raise.webp"
    ),
  "Shoulders/Dumbbell Seated Alternate Front Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Front Raise1.webp"
    ),
  "Shoulders/Dumbbell Seated Alternate Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Press.webp"
    ),
  "Shoulders/Dumbbell Seated Alternate Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Press1.webp"
    ),
  "Shoulders/Dumbbell Seated Alternate Shoulder Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Shoulder Press.webp"
    ),
  "Shoulders/Dumbbell Seated Alternate Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Alternate Shoulder Press1.webp"
    ),
  "Shoulders/Dumbbell Seated Bent Arm Lateral raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Bent Arm Lateral raise.webp"
    ),
  "Shoulders/Dumbbell Seated Bent Arm Lateral raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Bent Arm Lateral raise1.webp"
    ),
  "Shoulders/Dumbbell Seated Close Grip Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Close Grip Press.webp"
    ),
  "Shoulders/Dumbbell Seated Close Grip Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Close Grip Press1.webp"
    ),
  "Shoulders/Dumbbell Seated Front Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell Seated Front Raise.webp"),
  "Shoulders/Dumbbell Seated Front Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Seated Front Raise1.webp"),
  "Shoulders/Dumbbell Seated Lateral Raise": () =>
    import("../assets/exercises/Shoulders/Dumbbell Seated Lateral Raise.webp"),
  "Shoulders/Dumbbell Seated Lateral Raise1": () =>
    import("../assets/exercises/Shoulders/Dumbbell Seated Lateral Raise1.webp"),
  "Shoulders/Dumbbell Seated Shoulder Press": () =>
    import("../assets/exercises/Shoulders/Dumbbell Seated Shoulder Press.webp"),
  "Shoulders/Dumbbell Seated Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Seated Shoulder Press1.webp"
    ),
  "Shoulders/Dumbbell Side Lying One Hand Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Side Lying One Hand Raise.webp"
    ),
  "Shoulders/Dumbbell Side Lying One Hand Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Side Lying One Hand Raise1.webp"
    ),
  "Shoulders/Dumbbell Single Arm Underhand Front Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Single Arm Underhand Front Raise.webp"
    ),
  "Shoulders/Dumbbell Single Arm Underhand Front Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Single Arm Underhand Front Raise1.webp"
    ),
  "Shoulders/Dumbbell Single arm Leaning Lateral Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Single arm Leaning Lateral Raise.webp"
    ),
  "Shoulders/Dumbbell Single arm Leaning Lateral Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Single arm Leaning Lateral Raise1.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Overhead Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Overhead Press.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Overhead Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Overhead Press1.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Raise": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Raise.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Raise1.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Vertical Front Raises": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Vertical Front Raises.webp"
    ),
  "Shoulders/Dumbbell Standing Alternate Vertical Front Raises1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Alternate Vertical Front Raises1.webp"
    ),
  "Shoulders/Dumbbell Standing Around World": () =>
    import("../assets/exercises/Shoulders/Dumbbell Standing Around World.webp"),
  "Shoulders/Dumbbell Standing Around World1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Around World1.webp"
    ),
  "Shoulders/Dumbbell Standing Behind Back Shoulders Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Behind Back Shoulders Press.webp"
    ),
  "Shoulders/Dumbbell Standing Behind Back Shoulders Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Behind Back Shoulders Press1.webp"
    ),
  "Shoulders/Dumbbell Standing Curl Arnold Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Curl Arnold Press.webp"
    ),
  "Shoulders/Dumbbell Standing Curl Arnold Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Curl Arnold Press1.webp"
    ),
  "Shoulders/Dumbbell Standing Front Raise Above Head": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Front Raise Above Head.webp"
    ),
  "Shoulders/Dumbbell Standing Front Raise Above Head1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Front Raise Above Head1.webp"
    ),
  "Shoulders/Dumbbell Standing Overhead Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Overhead Press.webp"
    ),
  "Shoulders/Dumbbell Standing Overhead Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Overhead Press1.webp"
    ),
  "Shoulders/Dumbbell Standing Palms In Press": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Palms In Press.webp"
    ),
  "Shoulders/Dumbbell Standing Palms In Press1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Standing Palms In Press1.webp"
    ),
  "Shoulders/Dumbbell Upright Shoulder External Rotation": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Upright Shoulder External Rotation.webp"
    ),
  "Shoulders/Dumbbell Upright Shoulder External Rotation1": () =>
    import(
      "../assets/exercises/Shoulders/Dumbbell Upright Shoulder External Rotation1.webp"
    ),
  "Shoulders/Dumbbell around the world": () =>
    import("../assets/exercises/Shoulders/Dumbbell around the world.webp"),
  "Shoulders/Dumbbell around the world1": () =>
    import("../assets/exercises/Shoulders/Dumbbell around the world1.webp"),
  "Shoulders/EZ Bar Standing Front Raise": () =>
    import("../assets/exercises/Shoulders/EZ Bar Standing Front Raise.webp"),
  "Shoulders/EZ Bar Standing Front Raise1": () =>
    import("../assets/exercises/Shoulders/EZ Bar Standing Front Raise1.webp"),
  "Shoulders/EZ Barbell Anti Gravity Press": () =>
    import("../assets/exercises/Shoulders/EZ Barbell Anti Gravity Press.webp"),
  "Shoulders/EZ Barbell Anti Gravity Press1": () =>
    import("../assets/exercises/Shoulders/EZ Barbell Anti Gravity Press1.webp"),
  "Shoulders/Iso Lateral Shoulder Press Alternate Arms": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Alternate Arms.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Alternate Arms1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Alternate Arms1.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Alternate Arms_Female": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Alternate Arms_Female.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Alternate Arms_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Alternate Arms_Female1.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Both Arm_Female": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Both Arm_Female.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Both Arm_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Both Arm_Female1.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Both Arms": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Both Arms.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Both Arms1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Both Arms1.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Single Arm": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Single Arm.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Single Arm1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Single Arm1.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Single Arm_Female": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Single Arm_Female.webp"
    ),
  "Shoulders/Iso Lateral Shoulder Press Single Arm_Female1": () =>
    import(
      "../assets/exercises/Shoulders/Iso Lateral Shoulder Press Single Arm_Female1.webp"
    ),
  "Shoulders/Jump_Rope face pull female white screen": () =>
    import(
      "../assets/exercises/Shoulders/Jump_Rope face pull female white screen.webp"
    ),
  "Shoulders/Jump_Rope face pull female white screen1": () =>
    import(
      "../assets/exercises/Shoulders/Jump_Rope face pull female white screen1.webp"
    ),
  "Shoulders/Jump_Rope face pull white screen": () =>
    import(
      "../assets/exercises/Shoulders/Jump_Rope face pull white screen.webp"
    ),
  "Shoulders/Jump_Rope face pull white screen1": () =>
    import(
      "../assets/exercises/Shoulders/Jump_Rope face pull white screen1.webp"
    ),
  "Shoulders/Kettlebell Seesaw Press": () =>
    import("../assets/exercises/Shoulders/Kettlebell Seesaw Press.webp"),
  "Shoulders/Kettlebell Seesaw Press1": () =>
    import("../assets/exercises/Shoulders/Kettlebell Seesaw Press1.webp"),
  "Shoulders/Kettlebell Standing Bottoms-up One Arm Shoulder Press": () =>
    import(
      "../assets/exercises/Shoulders/Kettlebell Standing Bottoms-up One Arm Shoulder Press.webp"
    ),
  "Shoulders/Kettlebell Standing Bottoms-up One Arm Shoulder Press1": () =>
    import(
      "../assets/exercises/Shoulders/Kettlebell Standing Bottoms-up One Arm Shoulder Press1.webp"
    ),
  "Shoulders/Low Cable Overhead Flyes": () =>
    import("../assets/exercises/Shoulders/Low Cable Overhead Flyes.webp"),
  "Shoulders/Low Cable Overhead Flyes1": () =>
    import("../assets/exercises/Shoulders/Low Cable Overhead Flyes1.webp"),
  "Shoulders/Resistance band face pull": () =>
    import("../assets/exercises/Shoulders/Resistance band face pull.webp"),
  "Shoulders/Resistance band face pull1": () =>
    import("../assets/exercises/Shoulders/Resistance band face pull1.webp"),
  "Shoulders/Suspension Trainer with Grips  Inverted Row": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips  Inverted Row.webp"
    ),
  "Shoulders/Suspension Trainer with Grips  Inverted Row1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips  Inverted Row1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Face Pull": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Face Pull.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Face Pull1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Face Pull1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Face Pull_female": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Face Pull_female.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Face Pull_female1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Face Pull_female1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Front Raise": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Front Raise.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Front Raise1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Front Raise1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Front Raise_female": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Front Raise_female.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Front Raise_female1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Front Raise_female1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Inverted Row on floor": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Inverted Row on floor.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Inverted Row on floor1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Inverted Row on floor1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Inverted Row on floor_female": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Inverted Row on floor_female.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Inverted Row on floor_female1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Inverted Row on floor_female1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Rear Delt Row": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Rear Delt Row.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Rear Delt Row1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Rear Delt Row1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Rear Delt Row_female": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Rear Delt Row_female.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Rear Delt Row_female1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Rear Delt Row_female1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row_female":
    () =>
      import(
        "../assets/exercises/Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row_female.webp"
      ),
  "Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row_female1":
    () =>
      import(
        "../assets/exercises/Shoulders/Suspension Trainer with Grips Single Arm Rear Delt Row_female1.webp"
      ),
  "Shoulders/Suspension Trainer with Grips Split Fly": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Split Fly.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Split Fly1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Split Fly1.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Split Fly_female": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Split Fly_female.webp"
    ),
  "Shoulders/Suspension Trainer with Grips Split Fly_female1": () =>
    import(
      "../assets/exercises/Shoulders/Suspension Trainer with Grips Split Fly_female1.webp"
    ),
  "Shoulders/across chest shoulder stretch ": () =>
    import("../assets/exercises/Shoulders/across chest shoulder stretch .webp"),
  "Shoulders/across chest shoulder stretch 1": () =>
    import(
      "../assets/exercises/Shoulders/across chest shoulder stretch 1.webp"
    ),
  "Shoulders/arm circle ": () =>
    import("../assets/exercises/Shoulders/arm circle .webp"),
  "Shoulders/arm circle 1": () =>
    import("../assets/exercises/Shoulders/arm circle 1.webp"),
  "Shoulders/arm circle": () =>
    import("../assets/exercises/Shoulders/arm circle.webp"),
  "Shoulders/arm circle1": () =>
    import("../assets/exercises/Shoulders/arm circle1.webp"),
  "Shoulders/arm swing side to side ": () =>
    import("../assets/exercises/Shoulders/arm swing side to side .webp"),
  "Shoulders/arm swing side to side 1": () =>
    import("../assets/exercises/Shoulders/arm swing side to side 1.webp"),
  "Shoulders/arnold press cable resistance band standing": () =>
    import(
      "../assets/exercises/Shoulders/arnold press cable resistance band standing.webp"
    ),
  "Shoulders/arnold press cable resistance band standing1": () =>
    import(
      "../assets/exercises/Shoulders/arnold press cable resistance band standing1.webp"
    ),
  "Shoulders/arnold press dumbbell": () =>
    import("../assets/exercises/Shoulders/arnold press dumbbell.webp"),
  "Shoulders/arnold press dumbbell1": () =>
    import("../assets/exercises/Shoulders/arnold press dumbbell1.webp"),
  "Shoulders/barbell shrugs ": () =>
    import("../assets/exercises/Shoulders/barbell shrugs .webp"),
  "Shoulders/barbell shrugs 1": () =>
    import("../assets/exercises/Shoulders/barbell shrugs 1.webp"),
  "Shoulders/behind neck press resistance band cable ": () =>
    import(
      "../assets/exercises/Shoulders/behind neck press resistance band cable .webp"
    ),
  "Shoulders/behind neck press resistance band cable 1": () =>
    import(
      "../assets/exercises/Shoulders/behind neck press resistance band cable 1.webp"
    ),
  "Shoulders/bent over rear delt fly dumbbell": () =>
    import(
      "../assets/exercises/Shoulders/bent over rear delt fly dumbbell.webp"
    ),
  "Shoulders/bent over rear delt fly dumbbell1": () =>
    import(
      "../assets/exercises/Shoulders/bent over rear delt fly dumbbell1.webp"
    ),
  "Shoulders/bent over rear deltoid fly resistance band": () =>
    import(
      "../assets/exercises/Shoulders/bent over rear deltoid fly resistance band.webp"
    ),
  "Shoulders/bent over rear deltoid fly resistance band1": () =>
    import(
      "../assets/exercises/Shoulders/bent over rear deltoid fly resistance band1.webp"
    ),
  "Shoulders/bodyweight bent over rear delt fly": () =>
    import(
      "../assets/exercises/Shoulders/bodyweight bent over rear delt fly.webp"
    ),
  "Shoulders/bodyweight bent over rear delt fly1": () =>
    import(
      "../assets/exercises/Shoulders/bodyweight bent over rear delt fly1.webp"
    ),
  "Shoulders/cable front raises straight bar ": () =>
    import(
      "../assets/exercises/Shoulders/cable front raises straight bar .webp"
    ),
  "Shoulders/cable front raises straight bar 1": () =>
    import(
      "../assets/exercises/Shoulders/cable front raises straight bar 1.webp"
    ),
  "Shoulders/cable lateral raises": () =>
    import("../assets/exercises/Shoulders/cable lateral raises.webp"),
  "Shoulders/cable lateral raises1": () =>
    import("../assets/exercises/Shoulders/cable lateral raises1.webp"),
  "Shoulders/cable leaning lateral raise": () =>
    import("../assets/exercises/Shoulders/cable leaning lateral raise.webp"),
  "Shoulders/cable leaning lateral raise1": () =>
    import("../assets/exercises/Shoulders/cable leaning lateral raise1.webp"),
  "Shoulders/cable rear delt fly ": () =>
    import("../assets/exercises/Shoulders/cable rear delt fly .webp"),
  "Shoulders/cable rear delt fly 1": () =>
    import("../assets/exercises/Shoulders/cable rear delt fly 1.webp"),
  "Shoulders/cable reverse fly on crossover": () =>
    import("../assets/exercises/Shoulders/cable reverse fly on crossover.webp"),
  "Shoulders/cable reverse fly on crossover1": () =>
    import(
      "../assets/exercises/Shoulders/cable reverse fly on crossover1.webp"
    ),
  "Shoulders/cable upright row with EZ bar ": () =>
    import("../assets/exercises/Shoulders/cable upright row with EZ bar .webp"),
  "Shoulders/cable upright row with EZ bar 1": () =>
    import(
      "../assets/exercises/Shoulders/cable upright row with EZ bar 1.webp"
    ),
  "Shoulders/cable upright row with straight bar ": () =>
    import(
      "../assets/exercises/Shoulders/cable upright row with straight bar .webp"
    ),
  "Shoulders/cable upright row with straight bar 1": () =>
    import(
      "../assets/exercises/Shoulders/cable upright row with straight bar 1.webp"
    ),
  "Shoulders/cobra push up": () =>
    import("../assets/exercises/Shoulders/cobra push up.webp"),
  "Shoulders/cobra push up1": () =>
    import("../assets/exercises/Shoulders/cobra push up1.webp"),
  "Shoulders/cobra yoga pose hold": () =>
    import("../assets/exercises/Shoulders/cobra yoga pose hold.webp"),
  "Shoulders/cobra yoga pose hold1": () =>
    import("../assets/exercises/Shoulders/cobra yoga pose hold1.webp"),
  "Shoulders/cross over shoulder stretch ": () =>
    import("../assets/exercises/Shoulders/cross over shoulder stretch .webp"),
  "Shoulders/cross over shoulder stretch 1": () =>
    import("../assets/exercises/Shoulders/cross over shoulder stretch 1.webp"),
  "Shoulders/dumbbell armpit row": () =>
    import("../assets/exercises/Shoulders/dumbbell armpit row.webp"),
  "Shoulders/dumbbell armpit row1": () =>
    import("../assets/exercises/Shoulders/dumbbell armpit row1.webp"),
  "Shoulders/dumbbell bent arm lateral raise": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell bent arm lateral raise.webp"
    ),
  "Shoulders/dumbbell bent arm lateral raise1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell bent arm lateral raise1.webp"
    ),
  "Shoulders/dumbbell bicep curl to shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell bicep curl to shoulder press.webp"
    ),
  "Shoulders/dumbbell bicep curl to shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell bicep curl to shoulder press1.webp"
    ),
  "Shoulders/dumbbell close grip shoulder press sit up": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell close grip shoulder press sit up.webp"
    ),
  "Shoulders/dumbbell close grip shoulder press sit up1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell close grip shoulder press sit up1.webp"
    ),
  "Shoulders/dumbbell external rotatio": () =>
    import("../assets/exercises/Shoulders/dumbbell external rotatio.webp"),
  "Shoulders/dumbbell external rotatio1": () =>
    import("../assets/exercises/Shoulders/dumbbell external rotatio1.webp"),
  "Shoulders/dumbbell face down lying shoulder pres": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell face down lying shoulder pres.webp"
    ),
  "Shoulders/dumbbell face down lying shoulder pres1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell face down lying shoulder pres1.webp"
    ),
  "Shoulders/dumbbell half kneeling military press": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell half kneeling military press.webp"
    ),
  "Shoulders/dumbbell half kneeling military press1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell half kneeling military press1.webp"
    ),
  "Shoulders/dumbbell lying external shoulder rotation": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell lying external shoulder rotation.webp"
    ),
  "Shoulders/dumbbell lying external shoulder rotation1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell lying external shoulder rotation1.webp"
    ),
  "Shoulders/dumbbell seated on exercise ball shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell seated on exercise ball shoulder press.webp"
    ),
  "Shoulders/dumbbell seated on exercise ball shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell seated on exercise ball shoulder press1.webp"
    ),
  "Shoulders/dumbbell seated shoulder press parallel grip": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell seated shoulder press parallel grip.webp"
    ),
  "Shoulders/dumbbell seated shoulder press parallel grip1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell seated shoulder press parallel grip1.webp"
    ),
  "Shoulders/dumbbell shrugs": () =>
    import("../assets/exercises/Shoulders/dumbbell shrugs.webp"),
  "Shoulders/dumbbell shrugs1": () =>
    import("../assets/exercises/Shoulders/dumbbell shrugs1.webp"),
  "Shoulders/dumbbell single arm shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell single arm shoulder press.webp"
    ),
  "Shoulders/dumbbell single arm shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell single arm shoulder press1.webp"
    ),
  "Shoulders/dumbbell upright shoulder external rotatio": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell upright shoulder external rotatio.webp"
    ),
  "Shoulders/dumbbell upright shoulder external rotatio1": () =>
    import(
      "../assets/exercises/Shoulders/dumbbell upright shoulder external rotatio1.webp"
    ),
  "Shoulders/dumbbell w press": () =>
    import("../assets/exercises/Shoulders/dumbbell w press.webp"),
  "Shoulders/dumbbell w press1": () =>
    import("../assets/exercises/Shoulders/dumbbell w press1.webp"),
  "Shoulders/ez bar seated close grip shoulder press ": () =>
    import(
      "../assets/exercises/Shoulders/ez bar seated close grip shoulder press .webp"
    ),
  "Shoulders/ez bar seated close grip shoulder press 1": () =>
    import(
      "../assets/exercises/Shoulders/ez bar seated close grip shoulder press 1.webp"
    ),
  "Shoulders/front raise resistance bands ": () =>
    import("../assets/exercises/Shoulders/front raise resistance bands .webp"),
  "Shoulders/front raise resistance bands 1": () =>
    import("../assets/exercises/Shoulders/front raise resistance bands 1.webp"),
  "Shoulders/front raises barbell ": () =>
    import("../assets/exercises/Shoulders/front raises barbell .webp"),
  "Shoulders/front raises barbell 1": () =>
    import("../assets/exercises/Shoulders/front raises barbell 1.webp"),
  "Shoulders/front raises dumbbell seated": () =>
    import("../assets/exercises/Shoulders/front raises dumbbell seated.webp"),
  "Shoulders/front raises dumbbell seated1": () =>
    import("../assets/exercises/Shoulders/front raises dumbbell seated1.webp"),
  "Shoulders/handstand push on chair ": () =>
    import("../assets/exercises/Shoulders/handstand push on chair .webp"),
  "Shoulders/handstand push on chair 1": () =>
    import("../assets/exercises/Shoulders/handstand push on chair 1.webp"),
  "Shoulders/incline lateral raises dumbbell": () =>
    import(
      "../assets/exercises/Shoulders/incline lateral raises dumbbell.webp"
    ),
  "Shoulders/incline lateral raises dumbbell1": () =>
    import(
      "../assets/exercises/Shoulders/incline lateral raises dumbbell1.webp"
    ),
  "Shoulders/kettlebell half kneeling shoulder press ": () =>
    import(
      "../assets/exercises/Shoulders/kettlebell half kneeling shoulder press .webp"
    ),
  "Shoulders/kettlebell half kneeling shoulder press 1": () =>
    import(
      "../assets/exercises/Shoulders/kettlebell half kneeling shoulder press 1.webp"
    ),
  "Shoulders/kettlebell kneeling one arm shoulder press ": () =>
    import(
      "../assets/exercises/Shoulders/kettlebell kneeling one arm shoulder press .webp"
    ),
  "Shoulders/kettlebell kneeling one arm shoulder press 1": () =>
    import(
      "../assets/exercises/Shoulders/kettlebell kneeling one arm shoulder press 1.webp"
    ),
  "Shoulders/lateral raise bodyweight ": () =>
    import("../assets/exercises/Shoulders/lateral raise bodyweight .webp"),
  "Shoulders/lateral raise bodyweight 1": () =>
    import("../assets/exercises/Shoulders/lateral raise bodyweight 1.webp"),
  "Shoulders/lateral raise to shoulder press resistance band cable ": () =>
    import(
      "../assets/exercises/Shoulders/lateral raise to shoulder press resistance band cable .webp"
    ),
  "Shoulders/lateral raise to shoulder press resistance band cable 1": () =>
    import(
      "../assets/exercises/Shoulders/lateral raise to shoulder press resistance band cable 1.webp"
    ),
  "Shoulders/lateral raises dumbbell seated with swing": () =>
    import(
      "../assets/exercises/Shoulders/lateral raises dumbbell seated with swing.webp"
    ),
  "Shoulders/lateral raises dumbbell seated with swing1": () =>
    import(
      "../assets/exercises/Shoulders/lateral raises dumbbell seated with swing1.webp"
    ),
  "Shoulders/lateral raises dumbbell": () =>
    import("../assets/exercises/Shoulders/lateral raises dumbbell.webp"),
  "Shoulders/lateral raises dumbbell1": () =>
    import("../assets/exercises/Shoulders/lateral raises dumbbell1.webp"),
  "Shoulders/lateral raises on cable machine": () =>
    import(
      "../assets/exercises/Shoulders/lateral raises on cable machine.webp"
    ),
  "Shoulders/lateral raises on cable machine1": () =>
    import(
      "../assets/exercises/Shoulders/lateral raises on cable machine1.webp"
    ),
  "Shoulders/leaning dumbell lateral raise ": () =>
    import("../assets/exercises/Shoulders/leaning dumbell lateral raise .webp"),
  "Shoulders/leaning dumbell lateral raise 1": () =>
    import(
      "../assets/exercises/Shoulders/leaning dumbell lateral raise 1.webp"
    ),
  "Shoulders/lying bench external shoulder rotation": () =>
    import(
      "../assets/exercises/Shoulders/lying bench external shoulder rotation.webp"
    ),
  "Shoulders/lying bench external shoulder rotation1": () =>
    import(
      "../assets/exercises/Shoulders/lying bench external shoulder rotation1.webp"
    ),
  "Shoulders/lying bench internal rotation stretch": () =>
    import(
      "../assets/exercises/Shoulders/lying bench internal rotation stretch.webp"
    ),
  "Shoulders/lying bench internal rotation stretch1": () =>
    import(
      "../assets/exercises/Shoulders/lying bench internal rotation stretch1.webp"
    ),
  "Shoulders/lying lateral raises bodyweight": () =>
    import(
      "../assets/exercises/Shoulders/lying lateral raises bodyweight.webp"
    ),
  "Shoulders/lying lateral raises bodyweight1": () =>
    import(
      "../assets/exercises/Shoulders/lying lateral raises bodyweight1.webp"
    ),
  "Shoulders/machine lateral raise": () =>
    import("../assets/exercises/Shoulders/machine lateral raise.webp"),
  "Shoulders/machine lateral raise1": () =>
    import("../assets/exercises/Shoulders/machine lateral raise1.webp"),
  "Shoulders/military press bodyweight ": () =>
    import("../assets/exercises/Shoulders/military press bodyweight .webp"),
  "Shoulders/military press bodyweight 1": () =>
    import("../assets/exercises/Shoulders/military press bodyweight 1.webp"),
  "Shoulders/one arm reverse dumbbell fly": () =>
    import("../assets/exercises/Shoulders/one arm reverse dumbbell fly.webp"),
  "Shoulders/one arm reverse dumbbell fly1": () =>
    import("../assets/exercises/Shoulders/one arm reverse dumbbell fly1.webp"),
  "Shoulders/one arm shoulder flexor stretch ": () =>
    import(
      "../assets/exercises/Shoulders/one arm shoulder flexor stretch .webp"
    ),
  "Shoulders/one arm shoulder flexor stretch 1": () =>
    import(
      "../assets/exercises/Shoulders/one arm shoulder flexor stretch 1.webp"
    ),
  "Shoulders/overhand clap ": () =>
    import("../assets/exercises/Shoulders/overhand clap .webp"),
  "Shoulders/overhand clap 1": () =>
    import("../assets/exercises/Shoulders/overhand clap 1.webp"),
  "Shoulders/palm up palm down rotation ": () =>
    import("../assets/exercises/Shoulders/palm up palm down rotation .webp"),
  "Shoulders/palm up palm down rotation 1": () =>
    import("../assets/exercises/Shoulders/palm up palm down rotation 1.webp"),
  "Shoulders/plank reverse fly with bottle ": () =>
    import("../assets/exercises/Shoulders/plank reverse fly with bottle .webp"),
  "Shoulders/plank reverse fly with bottle 1": () =>
    import(
      "../assets/exercises/Shoulders/plank reverse fly with bottle 1.webp"
    ),
  "Shoulders/plate front raise ": () =>
    import("../assets/exercises/Shoulders/plate front raise .webp"),
  "Shoulders/plate front raise 1": () =>
    import("../assets/exercises/Shoulders/plate front raise 1.webp"),
  "Shoulders/prone front raises barbell on bench": () =>
    import(
      "../assets/exercises/Shoulders/prone front raises barbell on bench.webp"
    ),
  "Shoulders/prone front raises barbell on bench1": () =>
    import(
      "../assets/exercises/Shoulders/prone front raises barbell on bench1.webp"
    ),
  "Shoulders/prone front raises dumbbell on bench": () =>
    import(
      "../assets/exercises/Shoulders/prone front raises dumbbell on bench.webp"
    ),
  "Shoulders/prone front raises dumbbell on bench1": () =>
    import(
      "../assets/exercises/Shoulders/prone front raises dumbbell on bench1.webp"
    ),
  "Shoulders/pull apart cable resistance band ": () =>
    import(
      "../assets/exercises/Shoulders/pull apart cable resistance band .webp"
    ),
  "Shoulders/pull apart cable resistance band 1": () =>
    import(
      "../assets/exercises/Shoulders/pull apart cable resistance band 1.webp"
    ),
  "Shoulders/reaching up shoulder stretch ": () =>
    import("../assets/exercises/Shoulders/reaching up shoulder stretch .webp"),
  "Shoulders/reaching up shoulder stretch 1": () =>
    import("../assets/exercises/Shoulders/reaching up shoulder stretch 1.webp"),
  "Shoulders/rear deltoid fly cable resistance band ": () =>
    import(
      "../assets/exercises/Shoulders/rear deltoid fly cable resistance band .webp"
    ),
  "Shoulders/rear deltoid fly cable resistance band 1": () =>
    import(
      "../assets/exercises/Shoulders/rear deltoid fly cable resistance band 1.webp"
    ),
  "Shoulders/resistance bands facepull ": () =>
    import("../assets/exercises/Shoulders/resistance bands facepull .webp"),
  "Shoulders/resistance bands facepull 1": () =>
    import("../assets/exercises/Shoulders/resistance bands facepull 1.webp"),
  "Shoulders/reverse machine fly ": () =>
    import("../assets/exercises/Shoulders/reverse machine fly .webp"),
  "Shoulders/reverse machine fly 1": () =>
    import("../assets/exercises/Shoulders/reverse machine fly 1.webp"),
  "Shoulders/reverse shoulder stretch": () =>
    import("../assets/exercises/Shoulders/reverse shoulder stretch.webp"),
  "Shoulders/reverse shoulder stretch1": () =>
    import("../assets/exercises/Shoulders/reverse shoulder stretch1.webp"),
  "Shoulders/seated dumbbell one arm shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/seated dumbbell one arm shoulder press.webp"
    ),
  "Shoulders/seated dumbbell one arm shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/seated dumbbell one arm shoulder press1.webp"
    ),
  "Shoulders/seated dumbbell rear delt fly": () =>
    import("../assets/exercises/Shoulders/seated dumbbell rear delt fly.webp"),
  "Shoulders/seated dumbbell rear delt fly1": () =>
    import("../assets/exercises/Shoulders/seated dumbbell rear delt fly1.webp"),
  "Shoulders/seated shoulder flexor depressor retractor stretch": () =>
    import(
      "../assets/exercises/Shoulders/seated shoulder flexor depressor retractor stretch.webp"
    ),
  "Shoulders/seated shoulder flexor depressor retractor stretch1": () =>
    import(
      "../assets/exercises/Shoulders/seated shoulder flexor depressor retractor stretch1.webp"
    ),
  "Shoulders/seated shoulder press barbell": () =>
    import("../assets/exercises/Shoulders/seated shoulder press barbell.webp"),
  "Shoulders/seated shoulder press barbell1": () =>
    import("../assets/exercises/Shoulders/seated shoulder press barbell1.webp"),
  "Shoulders/shoulder abduction ": () =>
    import("../assets/exercises/Shoulders/shoulder abduction .webp"),
  "Shoulders/shoulder abduction 1": () =>
    import("../assets/exercises/Shoulders/shoulder abduction 1.webp"),
  "Shoulders/shoulder circle ": () =>
    import("../assets/exercises/Shoulders/shoulder circle .webp"),
  "Shoulders/shoulder circle 1": () =>
    import("../assets/exercises/Shoulders/shoulder circle 1.webp"),
  "Shoulders/shoulder extension ": () =>
    import("../assets/exercises/Shoulders/shoulder extension .webp"),
  "Shoulders/shoulder extension 1": () =>
    import("../assets/exercises/Shoulders/shoulder extension 1.webp"),
  "Shoulders/side lateral raise resistance band ": () =>
    import(
      "../assets/exercises/Shoulders/side lateral raise resistance band .webp"
    ),
  "Shoulders/side lateral raise resistance band 1": () =>
    import(
      "../assets/exercises/Shoulders/side lateral raise resistance band 1.webp"
    ),
  "Shoulders/smith machine shoulder press ": () =>
    import("../assets/exercises/Shoulders/smith machine shoulder press .webp"),
  "Shoulders/smith machine shoulder press 1": () =>
    import("../assets/exercises/Shoulders/smith machine shoulder press 1.webp"),
  "Shoulders/standing arnold press dumbbell": () =>
    import("../assets/exercises/Shoulders/standing arnold press dumbbell.webp"),
  "Shoulders/standing arnold press dumbbell1": () =>
    import(
      "../assets/exercises/Shoulders/standing arnold press dumbbell1.webp"
    ),
  "Shoulders/standing dumbbell alternate shoulder press": () =>
    import(
      "../assets/exercises/Shoulders/standing dumbbell alternate shoulder press.webp"
    ),
  "Shoulders/standing dumbbell alternate shoulder press1": () =>
    import(
      "../assets/exercises/Shoulders/standing dumbbell alternate shoulder press1.webp"
    ),
  "Shoulders/standing front raise dumbbell": () =>
    import("../assets/exercises/Shoulders/standing front raise dumbbell.webp"),
  "Shoulders/standing front raise dumbbell1": () =>
    import("../assets/exercises/Shoulders/standing front raise dumbbell1.webp"),
  "Shoulders/standing overhand shoulder stretch ": () =>
    import(
      "../assets/exercises/Shoulders/standing overhand shoulder stretch .webp"
    ),
  "Shoulders/standing overhand shoulder stretch 1": () =>
    import(
      "../assets/exercises/Shoulders/standing overhand shoulder stretch 1.webp"
    ),
  "Shoulders/standing reverse shoulder stretch ": () =>
    import(
      "../assets/exercises/Shoulders/standing reverse shoulder stretch .webp"
    ),
  "Shoulders/standing reverse shoulder stretch 1": () =>
    import(
      "../assets/exercises/Shoulders/standing reverse shoulder stretch 1.webp"
    ),
  "Shoulders/standing shoulder press dumbbell ": () =>
    import(
      "../assets/exercises/Shoulders/standing shoulder press dumbbell .webp"
    ),
  "Shoulders/standing shoulder press dumbbell 1": () =>
    import(
      "../assets/exercises/Shoulders/standing shoulder press dumbbell 1.webp"
    ),
  "Shoulders/standing swimmer ": () =>
    import("../assets/exercises/Shoulders/standing swimmer .webp"),
  "Shoulders/standing swimmer 1": () =>
    import("../assets/exercises/Shoulders/standing swimmer 1.webp"),
  "Shoulders/standing y raise ": () =>
    import("../assets/exercises/Shoulders/standing y raise .webp"),
  "Shoulders/standing y raise 1": () =>
    import("../assets/exercises/Shoulders/standing y raise 1.webp"),
  "Shoulders/trap bar shrug ": () =>
    import("../assets/exercises/Shoulders/trap bar shrug .webp"),
  "Shoulders/trap bar shrug 1": () =>
    import("../assets/exercises/Shoulders/trap bar shrug 1.webp"),
  "Shoulders/upright row barbell ": () =>
    import("../assets/exercises/Shoulders/upright row barbell .webp"),
  "Shoulders/upright row barbell 1": () =>
    import("../assets/exercises/Shoulders/upright row barbell 1.webp"),
  "Shoulders/upright row cable resistance band ": () =>
    import(
      "../assets/exercises/Shoulders/upright row cable resistance band .webp"
    ),
  "Shoulders/upright row cable resistance band 1": () =>
    import(
      "../assets/exercises/Shoulders/upright row cable resistance band 1.webp"
    ),
  "Shoulders/upright row dumbbell": () =>
    import("../assets/exercises/Shoulders/upright row dumbbell.webp"),
  "Shoulders/upright row dumbbell1": () =>
    import("../assets/exercises/Shoulders/upright row dumbbell1.webp"),
  "Shoulders/upright row ez bar ": () =>
    import("../assets/exercises/Shoulders/upright row ez bar .webp"),
  "Shoulders/upright row ez bar 1": () =>
    import("../assets/exercises/Shoulders/upright row ez bar 1.webp"),
  "Shoulders/upward rotation extend arms": () =>
    import("../assets/exercises/Shoulders/upward rotation extend arms.webp"),
  "Shoulders/upward rotation extend arms1": () =>
    import("../assets/exercises/Shoulders/upward rotation extend arms1.webp"),
  "Shoulders/weighted standing shoulder press with plate ": () =>
    import(
      "../assets/exercises/Shoulders/weighted standing shoulder press with plate .webp"
    ),
  "Shoulders/weighted standing shoulder press with plate 1": () =>
    import(
      "../assets/exercises/Shoulders/weighted standing shoulder press with plate 1.webp"
    ),
  "Stretching/5 Sec Fist Against Chin_female": () =>
    import(
      "../assets/exercises/Stretching/5 Sec Fist Against Chin_female.webp"
    ),
  "Stretching/5 Sec Fist Against Chin_female1": () =>
    import(
      "../assets/exercises/Stretching/5 Sec Fist Against Chin_female1.webp"
    ),
  "Stretching/90 to 90 Stretch_female": () =>
    import("../assets/exercises/Stretching/90 to 90 Stretch_female.webp"),
  "Stretching/90 to 90 Stretch_female1": () =>
    import("../assets/exercises/Stretching/90 to 90 Stretch_female1.webp"),
  "Stretching/ALL FOURS QUAD STRETCH_female": () =>
    import("../assets/exercises/Stretching/ALL FOURS QUAD STRETCH_female.webp"),
  "Stretching/ALL FOURS QUAD STRETCH_female1": () =>
    import(
      "../assets/exercises/Stretching/ALL FOURS QUAD STRETCH_female1.webp"
    ),
  "Stretching/Abdominal Stretch ( Version2 )_female": () =>
    import(
      "../assets/exercises/Stretching/Abdominal Stretch ( Version2 )_female.webp"
    ),
  "Stretching/Abdominal Stretch ( Version2 )_female1": () =>
    import(
      "../assets/exercises/Stretching/Abdominal Stretch ( Version2 )_female1.webp"
    ),
  "Stretching/Abdominal Stretch_female": () =>
    import("../assets/exercises/Stretching/Abdominal Stretch_female.webp"),
  "Stretching/Abdominal Stretch_female1": () =>
    import("../assets/exercises/Stretching/Abdominal Stretch_female1.webp"),
  "Stretching/Abdominal stretch": () =>
    import("../assets/exercises/Stretching/Abdominal stretch.webp"),
  "Stretching/Abdominal stretch1": () =>
    import("../assets/exercises/Stretching/Abdominal stretch1.webp"),
  "Stretching/Above Head Chest Stretch_female": () =>
    import(
      "../assets/exercises/Stretching/Above Head Chest Stretch_female.webp"
    ),
  "Stretching/Above Head Chest Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Above Head Chest Stretch_female1.webp"
    ),
  "Stretching/Above head chest stretch": () =>
    import("../assets/exercises/Stretching/Above head chest stretch.webp"),
  "Stretching/Above head chest stretch1": () =>
    import("../assets/exercises/Stretching/Above head chest stretch1.webp"),
  "Stretching/Across chest shoulder stretch": () =>
    import("../assets/exercises/Stretching/Across chest shoulder stretch.webp"),
  "Stretching/Across chest shoulder stretch1": () =>
    import(
      "../assets/exercises/Stretching/Across chest shoulder stretch1.webp"
    ),
  "Stretching/Adductor dynamic stretch": () =>
    import("../assets/exercises/Stretching/Adductor dynamic stretch.webp"),
  "Stretching/Adductor dynamic stretch1": () =>
    import("../assets/exercises/Stretching/Adductor dynamic stretch1.webp"),
  "Stretching/Adductor stretch side standing": () =>
    import(
      "../assets/exercises/Stretching/Adductor stretch side standing.webp"
    ),
  "Stretching/Adductor stretch side standing1": () =>
    import(
      "../assets/exercises/Stretching/Adductor stretch side standing1.webp"
    ),
  "Stretching/Adductor stretch": () =>
    import("../assets/exercises/Stretching/Adductor stretch.webp"),
  "Stretching/Adductor stretch1": () =>
    import("../assets/exercises/Stretching/Adductor stretch1.webp"),
  "Stretching/All fours quad stretch": () =>
    import("../assets/exercises/Stretching/All fours quad stretch.webp"),
  "Stretching/All fours quad stretch1": () =>
    import("../assets/exercises/Stretching/All fours quad stretch1.webp"),
  "Stretching/Armless Prayer Stretch_female": () =>
    import("../assets/exercises/Stretching/Armless Prayer Stretch_female.webp"),
  "Stretching/Armless Prayer Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Armless Prayer Stretch_female1.webp"
    ),
  "Stretching/Back Slaps Wrap Around Stretch_female": () =>
    import(
      "../assets/exercises/Stretching/Back Slaps Wrap Around Stretch_female.webp"
    ),
  "Stretching/Back Slaps Wrap Around Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Back Slaps Wrap Around Stretch_female1.webp"
    ),
  "Stretching/Back and Shoulders Stretch_female": () =>
    import(
      "../assets/exercises/Stretching/Back and Shoulders Stretch_female.webp"
    ),
  "Stretching/Back and Shoulders Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Back and Shoulders Stretch_female1.webp"
    ),
  "Stretching/Back slaps wrap around stretch": () =>
    import(
      "../assets/exercises/Stretching/Back slaps wrap around stretch.webp"
    ),
  "Stretching/Back slaps wrap around stretch1": () =>
    import(
      "../assets/exercises/Stretching/Back slaps wrap around stretch1.webp"
    ),
  "Stretching/Backward Forward Turn to Side Neck Stretch": () =>
    import(
      "../assets/exercises/Stretching/Backward Forward Turn to Side Neck Stretch.webp"
    ),
  "Stretching/Backward Forward Turn to Side Neck Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Backward Forward Turn to Side Neck Stretch1.webp"
    ),
  "Stretching/Backward Forward Turn to Side Neck Stretch_female": () =>
    import(
      "../assets/exercises/Stretching/Backward Forward Turn to Side Neck Stretch_female.webp"
    ),
  "Stretching/Backward Forward Turn to Side Neck Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Backward Forward Turn to Side Neck Stretch_female1.webp"
    ),
  "Stretching/Backward abdominal stretch": () =>
    import("../assets/exercises/Stretching/Backward abdominal stretch.webp"),
  "Stretching/Backward abdominal stretch1": () =>
    import("../assets/exercises/Stretching/Backward abdominal stretch1.webp"),
  "Stretching/Band Warm up Shoulder Stretch_female": () =>
    import(
      "../assets/exercises/Stretching/Band Warm up Shoulder Stretch_female.webp"
    ),
  "Stretching/Band Warm up Shoulder Stretch_female1": () =>
    import(
      "../assets/exercises/Stretching/Band Warm up Shoulder Stretch_female1.webp"
    ),
  "Stretching/Bent Arm Chest Stretch": () =>
    import("../assets/exercises/Stretching/Bent Arm Chest Stretch.webp"),
  "Stretching/Bent Arm Chest Stretch1": () =>
    import("../assets/exercises/Stretching/Bent Arm Chest Stretch1.webp"),
  "Stretching/Boat Stretch": () =>
    import("../assets/exercises/Stretching/Boat Stretch.webp"),
  "Stretching/Boat Stretch1": () =>
    import("../assets/exercises/Stretching/Boat Stretch1.webp"),
  "Stretching/Bodyweight Standing Back Stretch": () =>
    import(
      "../assets/exercises/Stretching/Bodyweight Standing Back Stretch.webp"
    ),
  "Stretching/Bodyweight Standing Back Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Bodyweight Standing Back Stretch1.webp"
    ),
  "Stretching/Both Arms Behind On Wall Biceps Stretch": () =>
    import(
      "../assets/exercises/Stretching/Both Arms Behind On Wall Biceps Stretch.webp"
    ),
  "Stretching/Both Arms Behind On Wall Biceps Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Both Arms Behind On Wall Biceps Stretch1.webp"
    ),
  "Stretching/Both Arms Behind On Wall Biceps Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Both Arms Behind On Wall Biceps Stretch_Female.webp"
    ),
  "Stretching/Both Arms Behind On Wall Biceps Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Both Arms Behind On Wall Biceps Stretch_Female1.webp"
    ),
  "Stretching/Bow Pose": () =>
    import("../assets/exercises/Stretching/Bow Pose.webp"),
  "Stretching/Bow Pose1": () =>
    import("../assets/exercises/Stretching/Bow Pose1.webp"),
  "Stretching/Bow Pose_Female": () =>
    import("../assets/exercises/Stretching/Bow Pose_Female.webp"),
  "Stretching/Bow Pose_Female1": () =>
    import("../assets/exercises/Stretching/Bow Pose_Female1.webp"),
  "Stretching/Bulgarian Split Squat Stretch": () =>
    import("../assets/exercises/Stretching/Bulgarian Split Squat Stretch.webp"),
  "Stretching/Bulgarian Split Squat Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Bulgarian Split Squat Stretch1.webp"
    ),
  "Stretching/Bulgarian Split Squat Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Bulgarian Split Squat Stretch_Female.webp"
    ),
  "Stretching/Bulgarian Split Squat Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Bulgarian Split Squat Stretch_Female1.webp"
    ),
  "Stretching/Butterfly Yoga Flaps": () =>
    import("../assets/exercises/Stretching/Butterfly Yoga Flaps.webp"),
  "Stretching/Butterfly Yoga Flaps1": () =>
    import("../assets/exercises/Stretching/Butterfly Yoga Flaps1.webp"),
  "Stretching/Butterfly Yoga Pose": () =>
    import("../assets/exercises/Stretching/Butterfly Yoga Pose.webp"),
  "Stretching/Butterfly Yoga Pose1": () =>
    import("../assets/exercises/Stretching/Butterfly Yoga Pose1.webp"),
  "Stretching/Calf Push Stretch With Hands Against Wall V": () =>
    import(
      "../assets/exercises/Stretching/Calf Push Stretch With Hands Against Wall V.webp"
    ),
  "Stretching/Calf Stretch With Hands Against Wall": () =>
    import(
      "../assets/exercises/Stretching/Calf Stretch With Hands Against Wall.webp"
    ),
  "Stretching/Calf Stretch With Hands Against Wall1": () =>
    import(
      "../assets/exercises/Stretching/Calf Stretch With Hands Against Wall1.webp"
    ),
  "Stretching/Calf Stretch with Rope": () =>
    import("../assets/exercises/Stretching/Calf Stretch with Rope.webp"),
  "Stretching/Calf Stretch with Rope1": () =>
    import("../assets/exercises/Stretching/Calf Stretch with Rope1.webp"),
  "Stretching/Calves stretch on stairs": () =>
    import("../assets/exercises/Stretching/Calves stretch on stairs.webp"),
  "Stretching/Calves stretch on stairs1": () =>
    import("../assets/exercises/Stretching/Calves stretch on stairs1.webp"),
  "Stretching/Cat Stretch": () =>
    import("../assets/exercises/Stretching/Cat Stretch.webp"),
  "Stretching/Cat Stretch1": () =>
    import("../assets/exercises/Stretching/Cat Stretch1.webp"),
  "Stretching/Ceiling Look Stretch": () =>
    import("../assets/exercises/Stretching/Ceiling Look Stretch.webp"),
  "Stretching/Ceiling Look Stretch1": () =>
    import("../assets/exercises/Stretching/Ceiling Look Stretch1.webp"),
  "Stretching/Child pose": () =>
    import("../assets/exercises/Stretching/Child pose.webp"),
  "Stretching/Child pose1": () =>
    import("../assets/exercises/Stretching/Child pose1.webp"),
  "Stretching/Cobra Side Ab Stretch": () =>
    import("../assets/exercises/Stretching/Cobra Side Ab Stretch.webp"),
  "Stretching/Cobra Side Ab Stretch1": () =>
    import("../assets/exercises/Stretching/Cobra Side Ab Stretch1.webp"),
  "Stretching/Corner Wall Chest Stretch": () =>
    import("../assets/exercises/Stretching/Corner Wall Chest Stretch.webp"),
  "Stretching/Corner Wall Chest Stretch1": () =>
    import("../assets/exercises/Stretching/Corner Wall Chest Stretch1.webp"),
  "Stretching/Crossover Kneeling Hip Flexor Stretch": () =>
    import(
      "../assets/exercises/Stretching/Crossover Kneeling Hip Flexor Stretch.webp"
    ),
  "Stretching/Crossover Kneeling Hip Flexor Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Crossover Kneeling Hip Flexor Stretch1.webp"
    ),
  "Stretching/Crouching Heel Back Calf Stretch": () =>
    import(
      "../assets/exercises/Stretching/Crouching Heel Back Calf Stretch.webp"
    ),
  "Stretching/Crouching Heel Back Calf Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Crouching Heel Back Calf Stretch1.webp"
    ),
  "Stretching/Dynamic Back Stretch": () =>
    import("../assets/exercises/Stretching/Dynamic Back Stretch.webp"),
  "Stretching/Dynamic Back Stretch1": () =>
    import("../assets/exercises/Stretching/Dynamic Back Stretch1.webp"),
  "Stretching/Elbow Extension And Supination Pronation Forearm Stretch": () =>
    import(
      "../assets/exercises/Stretching/Elbow Extension And Supination Pronation Forearm Stretch.webp"
    ),
  "Stretching/Elbow Extension And Supination Pronation Forearm Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Elbow Extension And Supination Pronation Forearm Stretch1.webp"
    ),
  "Stretching/Elbow Flexor Stretch": () =>
    import("../assets/exercises/Stretching/Elbow Flexor Stretch.webp"),
  "Stretching/Elbow Flexor Stretch1": () =>
    import("../assets/exercises/Stretching/Elbow Flexor Stretch1.webp"),
  "Stretching/Elbows Back Stretch": () =>
    import("../assets/exercises/Stretching/Elbows Back Stretch.webp"),
  "Stretching/Elbows Back Stretch1": () =>
    import("../assets/exercises/Stretching/Elbows Back Stretch1.webp"),
  "Stretching/Exercise Ball Lying Side Lat Stretch V": () =>
    import(
      "../assets/exercises/Stretching/Exercise Ball Lying Side Lat Stretch V.webp"
    ),
  "Stretching/Extension And Inclination Neck Stretch": () =>
    import(
      "../assets/exercises/Stretching/Extension And Inclination Neck Stretch.webp"
    ),
  "Stretching/Extension And Inclination Neck Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Extension And Inclination Neck Stretch1.webp"
    ),
  "Stretching/Extension Of Arms In Vertical Stretch": () =>
    import(
      "../assets/exercises/Stretching/Extension Of Arms In Vertical Stretch.webp"
    ),
  "Stretching/Extension Of Arms In Vertical Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Extension Of Arms In Vertical Stretch1.webp"
    ),
  "Stretching/Leg extended stretch on bench": () =>
    import("../assets/exercises/Stretching/Leg extended stretch on bench.webp"),
  "Stretching/Leg extended stretch on bench1": () =>
    import(
      "../assets/exercises/Stretching/Leg extended stretch on bench1.webp"
    ),
  "Stretching/Legs hand reach spine stretch": () =>
    import("../assets/exercises/Stretching/Legs hand reach spine stretch.webp"),
  "Stretching/Legs hand reach spine stretch1": () =>
    import(
      "../assets/exercises/Stretching/Legs hand reach spine stretch1.webp"
    ),
  "Stretching/Resistance Band Assisted Front Rack Stretch": () =>
    import(
      "../assets/exercises/Stretching/Resistance Band Assisted Front Rack Stretch.webp"
    ),
  "Stretching/Resistance Band Assisted Front Rack Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Resistance Band Assisted Front Rack Stretch1.webp"
    ),
  "Stretching/Resistance Band Assisted Front Rack Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Resistance Band Assisted Front Rack Stretch_Female.webp"
    ),
  "Stretching/Resistance Band Assisted Front Rack Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Resistance Band Assisted Front Rack Stretch_Female1.webp"
    ),
  "Stretching/Single Arm Extended Pull Downwards Biceps Stretch": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Extended Pull Downwards Biceps Stretch.webp"
    ),
  "Stretching/Single Arm Extended Pull Downwards Biceps Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Extended Pull Downwards Biceps Stretch1.webp"
    ),
  "Stretching/Single Arm Extended Pull Downwards Biceps Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Extended Pull Downwards Biceps Stretch_Female.webp"
    ),
  "Stretching/Single Arm Extended Pull Downwards Biceps Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Extended Pull Downwards Biceps Stretch_Female1.webp"
    ),
  "Stretching/Single Arm On Wall Side Biceps Stretch": () =>
    import(
      "../assets/exercises/Stretching/Single Arm On Wall Side Biceps Stretch.webp"
    ),
  "Stretching/Single Arm On Wall Side Biceps Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm On Wall Side Biceps Stretch1.webp"
    ),
  "Stretching/Single Arm On Wall Side Biceps Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Single Arm On Wall Side Biceps Stretch_Female.webp"
    ),
  "Stretching/Single Arm On Wall Side Biceps Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm On Wall Side Biceps Stretch_Female1.webp"
    ),
  "Stretching/Single Arm Palm Down On Wall Biceps Stretch": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Palm Down On Wall Biceps Stretch.webp"
    ),
  "Stretching/Single Arm Palm Down On Wall Biceps Stretch1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Palm Down On Wall Biceps Stretch1.webp"
    ),
  "Stretching/Single Arm Palm Down On Wall Biceps Stretch_Female": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Palm Down On Wall Biceps Stretch_Female.webp"
    ),
  "Stretching/Single Arm Palm Down On Wall Biceps Stretch_Female1": () =>
    import(
      "../assets/exercises/Stretching/Single Arm Palm Down On Wall Biceps Stretch_Female1.webp"
    ),
  "Stretching/Standing quadriceps stretch side angle  ": () =>
    import(
      "../assets/exercises/Stretching/Standing quadriceps stretch side angle  .webp"
    ),
  "Stretching/Standing quadriceps stretch side angle  1": () =>
    import(
      "../assets/exercises/Stretching/Standing quadriceps stretch side angle  1.webp"
    ),
  "Stretching/adductor stretch_female": () =>
    import("../assets/exercises/Stretching/adductor stretch_female.webp"),
  "Stretching/adductor stretch_female1": () =>
    import("../assets/exercises/Stretching/adductor stretch_female1.webp"),
  "Stretching/back and shoulder stretch": () =>
    import("../assets/exercises/Stretching/back and shoulder stretch.webp"),
  "Stretching/back and shoulder stretch1": () =>
    import("../assets/exercises/Stretching/back and shoulder stretch1.webp"),
  "Stretching/back pec stretch": () =>
    import("../assets/exercises/Stretching/back pec stretch.webp"),
  "Stretching/back pec stretch1": () =>
    import("../assets/exercises/Stretching/back pec stretch1.webp"),
  "Stretching/back stretch dynamic  ": () =>
    import("../assets/exercises/Stretching/back stretch dynamic  .webp"),
  "Stretching/back stretch dynamic  1": () =>
    import("../assets/exercises/Stretching/back stretch dynamic  1.webp"),
  "Stretching/back stretch standing with bench": () =>
    import(
      "../assets/exercises/Stretching/back stretch standing with bench.webp"
    ),
  "Stretching/back stretch standing with bench1": () =>
    import(
      "../assets/exercises/Stretching/back stretch standing with bench1.webp"
    ),
  "Stretching/biceps stretch behind the back": () =>
    import(
      "../assets/exercises/Stretching/biceps stretch behind the back.webp"
    ),
  "Stretching/biceps stretch behind the back1": () =>
    import(
      "../assets/exercises/Stretching/biceps stretch behind the back1.webp"
    ),
  "Stretching/chest out hands behind (hold)": () =>
    import("../assets/exercises/Stretching/chest out hands behind (hold).webp"),
  "Stretching/chest out hands behind (hold)1": () =>
    import(
      "../assets/exercises/Stretching/chest out hands behind (hold)1.webp"
    ),
  "Stretching/chest stretch with exercise ball  ": () =>
    import(
      "../assets/exercises/Stretching/chest stretch with exercise ball  .webp"
    ),
  "Stretching/chest stretch with exercise ball  1": () =>
    import(
      "../assets/exercises/Stretching/chest stretch with exercise ball  1.webp"
    ),
  "Stretching/circles knee stretch": () =>
    import("../assets/exercises/Stretching/circles knee stretch.webp"),
  "Stretching/circles knee stretch1": () =>
    import("../assets/exercises/Stretching/circles knee stretch1.webp"),
  "Stretching/cocoons": () =>
    import("../assets/exercises/Stretching/cocoons.webp"),
  "Stretching/cocoons1": () =>
    import("../assets/exercises/Stretching/cocoons1.webp"),
  "Stretching/dead hang stretch": () =>
    import("../assets/exercises/Stretching/dead hang stretch.webp"),
  "Stretching/dead hang stretch1": () =>
    import("../assets/exercises/Stretching/dead hang stretch1.webp"),
  "Stretching/dumbbell rdl stretch isometric  ": () =>
    import(
      "../assets/exercises/Stretching/dumbbell rdl stretch isometric  .webp"
    ),
  "Stretching/dumbbell rdl stretch isometric  1": () =>
    import(
      "../assets/exercises/Stretching/dumbbell rdl stretch isometric  1.webp"
    ),
  "Stretching/elbow back stretch  ": () =>
    import("../assets/exercises/Stretching/elbow back stretch  .webp"),
  "Stretching/elbow back stretch  1": () =>
    import("../assets/exercises/Stretching/elbow back stretch  1.webp"),
  "Stretching/exercise ball back stretch  ": () =>
    import("../assets/exercises/Stretching/exercise ball back stretch  .webp"),
  "Stretching/exercise ball back stretch  1": () =>
    import("../assets/exercises/Stretching/exercise ball back stretch  1.webp"),
  "Stretching/exercise ball hip flexor stretch": () =>
    import(
      "../assets/exercises/Stretching/exercise ball hip flexor stretch.webp"
    ),
  "Stretching/exercise ball hip flexor stretch1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball hip flexor stretch1.webp"
    ),
  "Stretching/exercise ball lat stretch  ": () =>
    import("../assets/exercises/Stretching/exercise ball lat stretch  .webp"),
  "Stretching/exercise ball lat stretch  1": () =>
    import("../assets/exercises/Stretching/exercise ball lat stretch  1.webp"),
  "Stretching/exercise ball lower back dynamic stretch  ": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lower back dynamic stretch  .webp"
    ),
  "Stretching/exercise ball lower back dynamic stretch  1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lower back dynamic stretch  1.webp"
    ),
  "Stretching/exercise ball lower back prone stretch  ": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lower back prone stretch  .webp"
    ),
  "Stretching/exercise ball lower back prone stretch  1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lower back prone stretch  1.webp"
    ),
  "Stretching/exercise ball lying side lat stretch": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lying side lat stretch.webp"
    ),
  "Stretching/exercise ball lying side lat stretch1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball lying side lat stretch1.webp"
    ),
  "Stretching/exercise ball seated hamstring stretch": () =>
    import(
      "../assets/exercises/Stretching/exercise ball seated hamstring stretch.webp"
    ),
  "Stretching/exercise ball seated hamstring stretch1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball seated hamstring stretch1.webp"
    ),
  "Stretching/exercise ball seated quad stretch": () =>
    import(
      "../assets/exercises/Stretching/exercise ball seated quad stretch.webp"
    ),
  "Stretching/exercise ball seated quad stretch1": () =>
    import(
      "../assets/exercises/Stretching/exercise ball seated quad stretch1.webp"
    ),
  "Stretching/fixed bar stretch  ": () =>
    import("../assets/exercises/Stretching/fixed bar stretch  .webp"),
  "Stretching/fixed bar stretch  1": () =>
    import("../assets/exercises/Stretching/fixed bar stretch  1.webp"),
  "Stretching/front shoulder stretch with bar": () =>
    import(
      "../assets/exercises/Stretching/front shoulder stretch with bar.webp"
    ),
  "Stretching/front shoulder stretch with bar1": () =>
    import(
      "../assets/exercises/Stretching/front shoulder stretch with bar1.webp"
    ),
  "Stretching/hamstring lying curl up stretch": () =>
    import(
      "../assets/exercises/Stretching/hamstring lying curl up stretch.webp"
    ),
  "Stretching/hamstring lying curl up stretch1": () =>
    import(
      "../assets/exercises/Stretching/hamstring lying curl up stretch1.webp"
    ),
  "Stretching/hamstring lying straight leg stretch": () =>
    import(
      "../assets/exercises/Stretching/hamstring lying straight leg stretch.webp"
    ),
  "Stretching/hamstring lying straight leg stretch1": () =>
    import(
      "../assets/exercises/Stretching/hamstring lying straight leg stretch1.webp"
    ),
  "Stretching/intermediate hip flexor and quad stretch": () =>
    import(
      "../assets/exercises/Stretching/intermediate hip flexor and quad stretch.webp"
    ),
  "Stretching/intermediate hip flexor and quad stretch1": () =>
    import(
      "../assets/exercises/Stretching/intermediate hip flexor and quad stretch1.webp"
    ),
  "Stretching/iron cross stretch": () =>
    import("../assets/exercises/Stretching/iron cross stretch.webp"),
  "Stretching/iron cross stretch1": () =>
    import("../assets/exercises/Stretching/iron cross stretch1.webp"),
  "Stretching/knee to chest stretch  ": () =>
    import("../assets/exercises/Stretching/knee to chest stretch  .webp"),
  "Stretching/knee to chest stretch  1": () =>
    import("../assets/exercises/Stretching/knee to chest stretch  1.webp"),
  "Stretching/kneeling hip flexor stretch  ": () =>
    import("../assets/exercises/Stretching/kneeling hip flexor stretch  .webp"),
  "Stretching/kneeling hip flexor stretch  1": () =>
    import(
      "../assets/exercises/Stretching/kneeling hip flexor stretch  1.webp"
    ),
  "Stretching/kneeling lat floor stretch": () =>
    import("../assets/exercises/Stretching/kneeling lat floor stretch.webp"),
  "Stretching/kneeling lat floor stretch1": () =>
    import("../assets/exercises/Stretching/kneeling lat floor stretch1.webp"),
  "Stretching/kneeling wrist flexor stretch  ": () =>
    import(
      "../assets/exercises/Stretching/kneeling wrist flexor stretch  .webp"
    ),
  "Stretching/kneeling wrist flexor stretch  1": () =>
    import(
      "../assets/exercises/Stretching/kneeling wrist flexor stretch  1.webp"
    ),
  "Stretching/lunging straight leg calf stretch": () =>
    import(
      "../assets/exercises/Stretching/lunging straight leg calf stretch.webp"
    ),
  "Stretching/lunging straight leg calf stretch1": () =>
    import(
      "../assets/exercises/Stretching/lunging straight leg calf stretch1.webp"
    ),
  "Stretching/lying (prone) abdominal stretch": () =>
    import(
      "../assets/exercises/Stretching/lying (prone) abdominal stretch.webp"
    ),
  "Stretching/lying (prone) abdominal stretch1": () =>
    import(
      "../assets/exercises/Stretching/lying (prone) abdominal stretch1.webp"
    ),
  "Stretching/lying crossover stretch  ": () =>
    import("../assets/exercises/Stretching/lying crossover stretch  .webp"),
  "Stretching/lying crossover stretch  1": () =>
    import("../assets/exercises/Stretching/lying crossover stretch  1.webp"),
  "Stretching/lying glute stretch  ": () =>
    import("../assets/exercises/Stretching/lying glute stretch  .webp"),
  "Stretching/lying glute stretch  1": () =>
    import("../assets/exercises/Stretching/lying glute stretch  1.webp"),
  "Stretching/lying hip flexor stretch  ": () =>
    import("../assets/exercises/Stretching/lying hip flexor stretch  .webp"),
  "Stretching/lying hip flexor stretch  1": () =>
    import("../assets/exercises/Stretching/lying hip flexor stretch  1.webp"),
  "Stretching/lying quadriceps stretch": () =>
    import("../assets/exercises/Stretching/lying quadriceps stretch.webp"),
  "Stretching/lying quadriceps stretch1": () =>
    import("../assets/exercises/Stretching/lying quadriceps stretch1.webp"),
  "Stretching/lying side quadriceps stretch  ": () =>
    import(
      "../assets/exercises/Stretching/lying side quadriceps stretch  .webp"
    ),
  "Stretching/lying side quadriceps stretch  1": () =>
    import(
      "../assets/exercises/Stretching/lying side quadriceps stretch  1.webp"
    ),
  "Stretching/middle back rotation stretch": () =>
    import("../assets/exercises/Stretching/middle back rotation stretch.webp"),
  "Stretching/middle back rotation stretch1": () =>
    import("../assets/exercises/Stretching/middle back rotation stretch1.webp"),
  "Stretching/overhead triceps stretch side angle": () =>
    import(
      "../assets/exercises/Stretching/overhead triceps stretch side angle.webp"
    ),
  "Stretching/overhead triceps stretch side angle1": () =>
    import(
      "../assets/exercises/Stretching/overhead triceps stretch side angle1.webp"
    ),
  "Stretching/plyo side lunge stretch  ": () =>
    import("../assets/exercises/Stretching/plyo side lunge stretch  .webp"),
  "Stretching/plyo side lunge stretch  1": () =>
    import("../assets/exercises/Stretching/plyo side lunge stretch  1.webp"),
  "Stretching/pretzel stretch": () =>
    import("../assets/exercises/Stretching/pretzel stretch.webp"),
  "Stretching/pretzel stretch1": () =>
    import("../assets/exercises/Stretching/pretzel stretch1.webp"),
  "Stretching/rear deltoid stretch": () =>
    import("../assets/exercises/Stretching/rear deltoid stretch.webp"),
  "Stretching/rear deltoid stretch1": () =>
    import("../assets/exercises/Stretching/rear deltoid stretch1.webp"),
  "Stretching/runner stretch": () =>
    import("../assets/exercises/Stretching/runner stretch.webp"),
  "Stretching/runner stretch1": () =>
    import("../assets/exercises/Stretching/runner stretch1.webp"),
  "Stretching/seated calf stretch": () =>
    import("../assets/exercises/Stretching/seated calf stretch.webp"),
  "Stretching/seated calf stretch1": () =>
    import("../assets/exercises/Stretching/seated calf stretch1.webp"),
  "Stretching/seated cross leg glute stretch": () =>
    import(
      "../assets/exercises/Stretching/seated cross leg glute stretch.webp"
    ),
  "Stretching/seated cross leg glute stretch1": () =>
    import(
      "../assets/exercises/Stretching/seated cross leg glute stretch1.webp"
    ),
  "Stretching/seated side stretch  ": () =>
    import("../assets/exercises/Stretching/seated side stretch  .webp"),
  "Stretching/seated side stretch  1": () =>
    import("../assets/exercises/Stretching/seated side stretch  1.webp"),
  "Stretching/seated single leg hamstring stretch": () =>
    import(
      "../assets/exercises/Stretching/seated single leg hamstring stretch.webp"
    ),
  "Stretching/seated single leg hamstring stretch1": () =>
    import(
      "../assets/exercises/Stretching/seated single leg hamstring stretch1.webp"
    ),
  "Stretching/seated straight leg calf stretch  ": () =>
    import(
      "../assets/exercises/Stretching/seated straight leg calf stretch  .webp"
    ),
  "Stretching/seated straight leg calf stretch  1": () =>
    import(
      "../assets/exercises/Stretching/seated straight leg calf stretch  1.webp"
    ),
  "Stretching/side lying floor stretch": () =>
    import("../assets/exercises/Stretching/side lying floor stretch.webp"),
  "Stretching/side lying floor stretch1": () =>
    import("../assets/exercises/Stretching/side lying floor stretch1.webp"),
  "Stretching/side wrist pull stretch  ": () =>
    import("../assets/exercises/Stretching/side wrist pull stretch  .webp"),
  "Stretching/side wrist pull stretch  1": () =>
    import("../assets/exercises/Stretching/side wrist pull stretch  1.webp"),
  "Stretching/standing adductor stretch  ": () =>
    import("../assets/exercises/Stretching/standing adductor stretch  .webp"),
  "Stretching/standing adductor stretch  1": () =>
    import("../assets/exercises/Stretching/standing adductor stretch  1.webp"),
  "Stretching/standing bow hamstring stretch": () =>
    import(
      "../assets/exercises/Stretching/standing bow hamstring stretch.webp"
    ),
  "Stretching/standing bow hamstring stretch1": () =>
    import(
      "../assets/exercises/Stretching/standing bow hamstring stretch1.webp"
    ),
  "Stretching/standing gastrocnemius stretch": () =>
    import(
      "../assets/exercises/Stretching/standing gastrocnemius stretch.webp"
    ),
  "Stretching/standing gastrocnemius stretch1": () =>
    import(
      "../assets/exercises/Stretching/standing gastrocnemius stretch1.webp"
    ),
  "Stretching/standing hamstring calf stretch with resistance band": () =>
    import(
      "../assets/exercises/Stretching/standing hamstring calf stretch with resistance band.webp"
    ),
  "Stretching/standing hamstring calf stretch with resistance band1": () =>
    import(
      "../assets/exercises/Stretching/standing hamstring calf stretch with resistance band1.webp"
    ),
  "Stretching/standing lateral stretch  ": () =>
    import("../assets/exercises/Stretching/standing lateral stretch  .webp"),
  "Stretching/standing lateral stretch  1": () =>
    import("../assets/exercises/Stretching/standing lateral stretch  1.webp"),
  "Stretching/standing leg elevated hamstring stretch": () =>
    import(
      "../assets/exercises/Stretching/standing leg elevated hamstring stretch.webp"
    ),
  "Stretching/standing leg elevated hamstring stretch1": () =>
    import(
      "../assets/exercises/Stretching/standing leg elevated hamstring stretch1.webp"
    ),
  "Stretching/standing one arm chest stretch": () =>
    import(
      "../assets/exercises/Stretching/standing one arm chest stretch.webp"
    ),
  "Stretching/standing one arm chest stretch1": () =>
    import(
      "../assets/exercises/Stretching/standing one arm chest stretch1.webp"
    ),
  "Stretching/standing quadriceps stretch": () =>
    import("../assets/exercises/Stretching/standing quadriceps stretch.webp"),
  "Stretching/standing quadriceps stretch1": () =>
    import("../assets/exercises/Stretching/standing quadriceps stretch1.webp"),
  "Stretching/standing side slope stretch  ": () =>
    import("../assets/exercises/Stretching/standing side slope stretch  .webp"),
  "Stretching/standing side slope stretch  1": () =>
    import(
      "../assets/exercises/Stretching/standing side slope stretch  1.webp"
    ),
  "Stretching/triceps light stretch  ": () =>
    import("../assets/exercises/Stretching/triceps light stretch  .webp"),
  "Stretching/triceps light stretch  1": () =>
    import("../assets/exercises/Stretching/triceps light stretch  1.webp"),
  "Stretching/upper back stretch": () =>
    import("../assets/exercises/Stretching/upper back stretch.webp"),
  "Stretching/upper back stretch1": () =>
    import("../assets/exercises/Stretching/upper back stretch1.webp"),
  "Triceps/Band Bent over One Arm Kickback_female": () =>
    import(
      "../assets/exercises/Triceps/Band Bent over One Arm Kickback_female.webp"
    ),
  "Triceps/Band Bent over One Arm Kickback_female1": () =>
    import(
      "../assets/exercises/Triceps/Band Bent over One Arm Kickback_female1.webp"
    ),
  "Triceps/Band Incline Triceps Extension_female": () =>
    import(
      "../assets/exercises/Triceps/Band Incline Triceps Extension_female.webp"
    ),
  "Triceps/Band Incline Triceps Extension_female1": () =>
    import(
      "../assets/exercises/Triceps/Band Incline Triceps Extension_female1.webp"
    ),
  "Triceps/Band Lying Reverse Grip Pressdown_female": () =>
    import(
      "../assets/exercises/Triceps/Band Lying Reverse Grip Pressdown_female.webp"
    ),
  "Triceps/Band Lying Reverse Grip Pressdown_female1": () =>
    import(
      "../assets/exercises/Triceps/Band Lying Reverse Grip Pressdown_female1.webp"
    ),
  "Triceps/Barbell Lying extension_female": () =>
    import("../assets/exercises/Triceps/Barbell Lying extension_female.webp"),
  "Triceps/Barbell Lying extension_female1": () =>
    import("../assets/exercises/Triceps/Barbell Lying extension_female1.webp"),
  "Triceps/Barbell close grip press": () =>
    import("../assets/exercises/Triceps/Barbell close grip press.webp"),
  "Triceps/Barbell close grip press1": () =>
    import("../assets/exercises/Triceps/Barbell close grip press1.webp"),
  "Triceps/Barbell lying close grip press": () =>
    import("../assets/exercises/Triceps/Barbell lying close grip press.webp"),
  "Triceps/Barbell lying triceps extension": () =>
    import("../assets/exercises/Triceps/Barbell lying triceps extension.webp"),
  "Triceps/Barbell lying triceps extension1": () =>
    import("../assets/exercises/Triceps/Barbell lying triceps extension1.webp"),
  "Triceps/Barbell lying triceps skull crushers": () =>
    import(
      "../assets/exercises/Triceps/Barbell lying triceps skull crushers.webp"
    ),
  "Triceps/Barbell lying triceps skull crushers1": () =>
    import(
      "../assets/exercises/Triceps/Barbell lying triceps skull crushers1.webp"
    ),
  "Triceps/Barbell standing overhead triceps extension": () =>
    import(
      "../assets/exercises/Triceps/Barbell standing overhead triceps extension.webp"
    ),
  "Triceps/Barbell standing overhead triceps extension1": () =>
    import(
      "../assets/exercises/Triceps/Barbell standing overhead triceps extension1.webp"
    ),
  "Triceps/Bench Dip (knees bent)": () =>
    import("../assets/exercises/Triceps/Bench Dip (knees bent).webp"),
  "Triceps/Bench Dip (knees bent)1": () =>
    import("../assets/exercises/Triceps/Bench Dip (knees bent)1.webp"),
  "Triceps/Bench dip on floor": () =>
    import("../assets/exercises/Triceps/Bench dip on floor.webp"),
  "Triceps/Bench dip on floor1": () =>
    import("../assets/exercises/Triceps/Bench dip on floor1.webp"),
  "Triceps/Body-Up": () => import("../assets/exercises/Triceps/Body-Up.webp"),
  "Triceps/Body-Up1": () => import("../assets/exercises/Triceps/Body-Up1.webp"),
  "Triceps/Bodyweight Overhead Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Bodyweight Overhead Triceps Extension.webp"
    ),
  "Triceps/Bodyweight Overhead Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Bodyweight Overhead Triceps Extension1.webp"
    ),
  "Triceps/Bodyweight kneeling triceps extension": () =>
    import(
      "../assets/exercises/Triceps/Bodyweight kneeling triceps extension.webp"
    ),
  "Triceps/Bodyweight kneeling triceps extension1": () =>
    import(
      "../assets/exercises/Triceps/Bodyweight kneeling triceps extension1.webp"
    ),
  "Triceps/Cable Alternate Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Cable Alternate Triceps Extension.webp"
    ),
  "Triceps/Cable Alternate Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Cable Alternate Triceps Extension1.webp"
    ),
  "Triceps/Cable Cross Pushdown": () =>
    import("../assets/exercises/Triceps/Cable Cross Pushdown.webp"),
  "Triceps/Cable Cross Pushdown1": () =>
    import("../assets/exercises/Triceps/Cable Cross Pushdown1.webp"),
  "Triceps/Cable Cross Pushdown_Female": () =>
    import("../assets/exercises/Triceps/Cable Cross Pushdown_Female.webp"),
  "Triceps/Cable Cross Pushdown_Female1": () =>
    import("../assets/exercises/Triceps/Cable Cross Pushdown_Female1.webp"),
  "Triceps/Cable Neutral Grip Kickback": () =>
    import("../assets/exercises/Triceps/Cable Neutral Grip Kickback.webp"),
  "Triceps/Cable Neutral Grip Kickback1": () =>
    import("../assets/exercises/Triceps/Cable Neutral Grip Kickback1.webp"),
  "Triceps/Cable Pushdown": () =>
    import("../assets/exercises/Triceps/Cable Pushdown.webp"),
  "Triceps/Cable Pushdown1": () =>
    import("../assets/exercises/Triceps/Cable Pushdown1.webp"),
  "Triceps/Cable Rear Drive": () =>
    import("../assets/exercises/Triceps/Cable Rear Drive.webp"),
  "Triceps/Cable Rear Drive1": () =>
    import("../assets/exercises/Triceps/Cable Rear Drive1.webp"),
  "Triceps/Cable Reverse Grip Triceps Pushdown (EZ-bar)": () =>
    import(
      "../assets/exercises/Triceps/Cable Reverse Grip Triceps Pushdown (EZ-bar).webp"
    ),
  "Triceps/Cable Reverse Grip Triceps Pushdown (EZ-bar)1": () =>
    import(
      "../assets/exercises/Triceps/Cable Reverse Grip Triceps Pushdown (EZ-bar)1.webp"
    ),
  "Triceps/Close grip barbell bench press": () =>
    import("../assets/exercises/Triceps/Close grip barbell bench press.webp"),
  "Triceps/Close grip barbell bench press1": () =>
    import("../assets/exercises/Triceps/Close grip barbell bench press1.webp"),
  "Triceps/Decline Diamond Pike Push-up": () =>
    import("../assets/exercises/Triceps/Decline Diamond Pike Push-up.webp"),
  "Triceps/Decline Diamond Pike Push-up1": () =>
    import("../assets/exercises/Triceps/Decline Diamond Pike Push-up1.webp"),
  "Triceps/Diamond Push-up (on knees)": () =>
    import("../assets/exercises/Triceps/Diamond Push-up (on knees).webp"),
  "Triceps/Diamond Push-up (on knees)1": () =>
    import("../assets/exercises/Triceps/Diamond Push-up (on knees)1.webp"),
  "Triceps/Diamond Push-up": () =>
    import("../assets/exercises/Triceps/Diamond Push-up.webp"),
  "Triceps/Diamond Push-up1": () =>
    import("../assets/exercises/Triceps/Diamond Push-up1.webp"),
  "Triceps/Dip Leg Raise on couch": () =>
    import("../assets/exercises/Triceps/Dip Leg Raise on couch.webp"),
  "Triceps/Dip Leg Raise on couch1": () =>
    import("../assets/exercises/Triceps/Dip Leg Raise on couch1.webp"),
  "Triceps/Dip on Floor with Chair": () =>
    import("../assets/exercises/Triceps/Dip on Floor with Chair.webp"),
  "Triceps/Dip on Floor with Chair1": () =>
    import("../assets/exercises/Triceps/Dip on Floor with Chair1.webp"),
  "Triceps/Dips between Chair1": () =>
    import("../assets/exercises/Triceps/Dips between Chair1.webp"),
  "Triceps/Dips between Chairs": () =>
    import("../assets/exercises/Triceps/Dips between Chairs.webp"),
  "Triceps/Dumbbell Decline triceps pull-over extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Decline triceps pull-over extension.webp"
    ),
  "Triceps/Dumbbell Decline triceps pull-over extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Decline triceps pull-over extension1.webp"
    ),
  "Triceps/Dumbbell Incline Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Incline Triceps Extension.webp"
    ),
  "Triceps/Dumbbell Incline Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Incline Triceps Extension1.webp"
    ),
  "Triceps/Dumbbell Incline Two Arm Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Incline Two Arm Extension.webp"
    ),
  "Triceps/Dumbbell Incline Two Arm Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Incline Two Arm Extension1.webp"
    ),
  "Triceps/Dumbbell Kickback": () =>
    import("../assets/exercises/Triceps/Dumbbell Kickback.webp"),
  "Triceps/Dumbbell Kickback1": () =>
    import("../assets/exercises/Triceps/Dumbbell Kickback1.webp"),
  "Triceps/Dumbbell Lying One Arm Neutral Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Lying One Arm Neutral Triceps Extension.webp"
    ),
  "Triceps/Dumbbell Lying One Arm Neutral Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Lying One Arm Neutral Triceps Extension1.webp"
    ),
  "Triceps/Dumbbell Lying Triceps Extension on Floor": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Lying Triceps Extension on Floor.webp"
    ),
  "Triceps/Dumbbell Lying Triceps Extension on Floor1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Lying Triceps Extension on Floor1.webp"
    ),
  "Triceps/Dumbbell Lying Triceps Extension": () =>
    import("../assets/exercises/Triceps/Dumbbell Lying Triceps Extension.webp"),
  "Triceps/Dumbbell Lying Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Lying Triceps Extension1.webp"
    ),
  "Triceps/Dumbbell One Arm Kickback": () =>
    import("../assets/exercises/Triceps/Dumbbell One Arm Kickback.webp"),
  "Triceps/Dumbbell One Arm Kickback1": () =>
    import("../assets/exercises/Triceps/Dumbbell One Arm Kickback1.webp"),
  "Triceps/Dumbbell One Arm Triceps Extension (on bench)": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell One Arm Triceps Extension (on bench).webp"
    ),
  "Triceps/Dumbbell One Arm Triceps Extension (on bench)1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell One Arm Triceps Extension (on bench)1.webp"
    ),
  "Triceps/Dumbbell Pronate-grip Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Pronate-grip Triceps Extension.webp"
    ),
  "Triceps/Dumbbell Pronate-grip Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Pronate-grip Triceps Extension1.webp"
    ),
  "Triceps/Dumbbell Seated Bench Extension": () =>
    import("../assets/exercises/Triceps/Dumbbell Seated Bench Extension.webp"),
  "Triceps/Dumbbell Seated Bench Extension1": () =>
    import("../assets/exercises/Triceps/Dumbbell Seated Bench Extension1.webp"),
  "Triceps/Dumbbell Seated Kickback": () =>
    import("../assets/exercises/Triceps/Dumbbell Seated Kickback.webp"),
  "Triceps/Dumbbell Seated Kickback1": () =>
    import("../assets/exercises/Triceps/Dumbbell Seated Kickback1.webp"),
  "Triceps/Dumbbell Standing Both Arms Kickback": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing Both Arms Kickback.webp"
    ),
  "Triceps/Dumbbell Standing Both Arms Kickback1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing Both Arms Kickback1.webp"
    ),
  "Triceps/Dumbbell Standing One Arm Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing One Arm Extension.webp"
    ),
  "Triceps/Dumbbell Standing One Arm Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing One Arm Extension1.webp"
    ),
  "Triceps/Dumbbell Standing Triceps Extension": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing Triceps Extension.webp"
    ),
  "Triceps/Dumbbell Standing Triceps Extension1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell Standing Triceps Extension1.webp"
    ),
  "Triceps/Dumbbell overhead extension standing": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell overhead extension standing.webp"
    ),
  "Triceps/Dumbbell overhead extension standing1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell overhead extension standing1.webp"
    ),
  "Triceps/Dumbbell triceps kick back single arm": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell triceps kick back single arm.webp"
    ),
  "Triceps/Dumbbell triceps kick back single arm1": () =>
    import(
      "../assets/exercises/Triceps/Dumbbell triceps kick back single arm1.webp"
    ),
  "Triceps/Overhand tricep stretching single arm": () =>
    import(
      "../assets/exercises/Triceps/Overhand tricep stretching single arm.webp"
    ),
  "Triceps/Overhand tricep stretching single arm1": () =>
    import(
      "../assets/exercises/Triceps/Overhand tricep stretching single arm1.webp"
    ),
  "Triceps/Pike push up": () =>
    import("../assets/exercises/Triceps/Pike push up.webp"),
  "Triceps/Pike push up1": () =>
    import("../assets/exercises/Triceps/Pike push up1.webp"),
  "Triceps/Suspension Trainer with Grips Triceps Extension_female": () =>
    import(
      "../assets/exercises/Triceps/Suspension Trainer with Grips Triceps Extension_female.webp"
    ),
  "Triceps/Suspension Trainer with Grips Triceps Extension_female1": () =>
    import(
      "../assets/exercises/Triceps/Suspension Trainer with Grips Triceps Extension_female1.webp"
    ),
  "Triceps/Suspension Trainer with Grips triceps extension": () =>
    import(
      "../assets/exercises/Triceps/Suspension Trainer with Grips triceps extension.webp"
    ),
  "Triceps/Suspension Trainer with Grips triceps extension1": () =>
    import(
      "../assets/exercises/Triceps/Suspension Trainer with Grips triceps extension1.webp"
    ),
  "Triceps/barbell lying triceps skull crusher_female": () =>
    import(
      "../assets/exercises/Triceps/barbell lying triceps skull crusher_female.webp"
    ),
  "Triceps/barbell lying triceps skull crusher_female1": () =>
    import(
      "../assets/exercises/Triceps/barbell lying triceps skull crusher_female1.webp"
    ),
  "Triceps/barbell seated overhead triceps press": () =>
    import(
      "../assets/exercises/Triceps/barbell seated overhead triceps press.webp"
    ),
  "Triceps/barbell seated overhead triceps press1": () =>
    import(
      "../assets/exercises/Triceps/barbell seated overhead triceps press1.webp"
    ),
  "Triceps/bench triceps dip leg curls": () =>
    import("../assets/exercises/Triceps/bench triceps dip leg curls.webp"),
  "Triceps/bench triceps dip leg curls1": () =>
    import("../assets/exercises/Triceps/bench triceps dip leg curls1.webp"),
  "Triceps/bench triceps dip straight legs": () =>
    import("../assets/exercises/Triceps/bench triceps dip straight legs.webp"),
  "Triceps/bench triceps dip straight legs1": () =>
    import("../assets/exercises/Triceps/bench triceps dip straight legs1.webp"),
  "Triceps/bodyweight triceps extension": () =>
    import("../assets/exercises/Triceps/bodyweight triceps extension.webp"),
  "Triceps/bodyweight triceps extension1": () =>
    import("../assets/exercises/Triceps/bodyweight triceps extension1.webp"),
  "Triceps/cable lying triceps extension (LOW)": () =>
    import(
      "../assets/exercises/Triceps/cable lying triceps extension (LOW).webp"
    ),
  "Triceps/cable lying triceps extension (LOW)1": () =>
    import(
      "../assets/exercises/Triceps/cable lying triceps extension (LOW)1.webp"
    ),
  "Triceps/cable lying triceps extension": () =>
    import("../assets/exercises/Triceps/cable lying triceps extension.webp"),
  "Triceps/cable lying triceps extension1": () =>
    import("../assets/exercises/Triceps/cable lying triceps extension1.webp"),
  "Triceps/cable overhead extension rope": () =>
    import("../assets/exercises/Triceps/cable overhead extension rope.webp"),
  "Triceps/cable overhead extension rope1": () =>
    import("../assets/exercises/Triceps/cable overhead extension rope1.webp"),
  "Triceps/cable reverse grip pushdown": () =>
    import("../assets/exercises/Triceps/cable reverse grip pushdown.webp"),
  "Triceps/cable reverse grip pushdown1": () =>
    import("../assets/exercises/Triceps/cable reverse grip pushdown1.webp"),
  "Triceps/cable reverse grip triceps push down straight bar": () =>
    import(
      "../assets/exercises/Triceps/cable reverse grip triceps push down straight bar.webp"
    ),
  "Triceps/cable reverse grip triceps push down straight bar1": () =>
    import(
      "../assets/exercises/Triceps/cable reverse grip triceps push down straight bar1.webp"
    ),
  "Triceps/cable reverse grip triceps pushdown back side pov": () =>
    import(
      "../assets/exercises/Triceps/cable reverse grip triceps pushdown back side pov.webp"
    ),
  "Triceps/cable reverse grip triceps pushdown back side pov1": () =>
    import(
      "../assets/exercises/Triceps/cable reverse grip triceps pushdown back side pov1.webp"
    ),
  "Triceps/cable triceps overhead extension (ez bar)": () =>
    import(
      "../assets/exercises/Triceps/cable triceps overhead extension (ez bar).webp"
    ),
  "Triceps/cable triceps overhead extension (ez bar)1": () =>
    import(
      "../assets/exercises/Triceps/cable triceps overhead extension (ez bar)1.webp"
    ),
  "Triceps/cable triceps push down elbow out (v bar)": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down elbow out (v bar).webp"
    ),
  "Triceps/cable triceps push down elbow out (v bar)1": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down elbow out (v bar)1.webp"
    ),
  "Triceps/cable triceps push down ez bar close grip": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down ez bar close grip.webp"
    ),
  "Triceps/cable triceps push down ez bar close grip1": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down ez bar close grip1.webp"
    ),
  "Triceps/cable triceps push down ez bar wide grip": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down ez bar wide grip.webp"
    ),
  "Triceps/cable triceps push down ez bar wide grip1": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down ez bar wide grip1.webp"
    ),
  "Triceps/cable triceps push down ez bar": () =>
    import("../assets/exercises/Triceps/cable triceps push down ez bar.webp"),
  "Triceps/cable triceps push down ez bar1": () =>
    import("../assets/exercises/Triceps/cable triceps push down ez bar1.webp"),
  "Triceps/cable triceps push down straight bar": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down straight bar.webp"
    ),
  "Triceps/cable triceps push down straight bar1": () =>
    import(
      "../assets/exercises/Triceps/cable triceps push down straight bar1.webp"
    ),
  "Triceps/cable triceps push down v bar": () =>
    import("../assets/exercises/Triceps/cable triceps push down v bar.webp"),
  "Triceps/cable triceps push down v bar1": () =>
    import("../assets/exercises/Triceps/cable triceps push down v bar1.webp"),
  "Triceps/chair triceps dips": () =>
    import("../assets/exercises/Triceps/chair triceps dips.webp"),
  "Triceps/chair triceps dips1": () =>
    import("../assets/exercises/Triceps/chair triceps dips1.webp"),
  "Triceps/close grip barbell bench press  2": () =>
    import(
      "../assets/exercises/Triceps/close grip barbell bench press  2.webp"
    ),
  "Triceps/close grip barbell bench press  3": () =>
    import(
      "../assets/exercises/Triceps/close grip barbell bench press  3.webp"
    ),
  "Triceps/decline chair push up diamond": () =>
    import("../assets/exercises/Triceps/decline chair push up diamond.webp"),
  "Triceps/decline chair push up diamond1": () =>
    import("../assets/exercises/Triceps/decline chair push up diamond1.webp"),
  "Triceps/diamond push up": () =>
    import("../assets/exercises/Triceps/diamond push up.webp"),
  "Triceps/diamond push up1": () =>
    import("../assets/exercises/Triceps/diamond push up1.webp"),
  "Triceps/dumbbell overhead extension seated": () =>
    import(
      "../assets/exercises/Triceps/dumbbell overhead extension seated.webp"
    ),
  "Triceps/dumbbell overhead extension seated1": () =>
    import(
      "../assets/exercises/Triceps/dumbbell overhead extension seated1.webp"
    ),
  "Triceps/dumbells triceps kick back both arms": () =>
    import(
      "../assets/exercises/Triceps/dumbells triceps kick back both arms.webp"
    ),
  "Triceps/dumbells triceps kick back both arms1": () =>
    import(
      "../assets/exercises/Triceps/dumbells triceps kick back both arms1.webp"
    ),
  "Triceps/ez bar overhead extensions standing": () =>
    import(
      "../assets/exercises/Triceps/ez bar overhead extensions standing.webp"
    ),
  "Triceps/ez bar overhead extensions standing1": () =>
    import(
      "../assets/exercises/Triceps/ez bar overhead extensions standing1.webp"
    ),
  "Triceps/incline diamond push up On Bench": () =>
    import("../assets/exercises/Triceps/incline diamond push up On Bench.webp"),
  "Triceps/incline diamond push up On Bench1": () =>
    import(
      "../assets/exercises/Triceps/incline diamond push up On Bench1.webp"
    ),
  "Triceps/incline push ups on chair": () =>
    import("../assets/exercises/Triceps/incline push ups on chair.webp"),
  "Triceps/incline push ups on chair1": () =>
    import("../assets/exercises/Triceps/incline push ups on chair1.webp"),
  "Triceps/overhead extension resistance band both arms": () =>
    import(
      "../assets/exercises/Triceps/overhead extension resistance band both arms.webp"
    ),
  "Triceps/overhead extension resistance band both arms1": () =>
    import(
      "../assets/exercises/Triceps/overhead extension resistance band both arms1.webp"
    ),
  "Triceps/single arm overhead extension resistance band": () =>
    import(
      "../assets/exercises/Triceps/single arm overhead extension resistance band.webp"
    ),
  "Triceps/single arm overhead extension resistance band1": () =>
    import(
      "../assets/exercises/Triceps/single arm overhead extension resistance band1.webp"
    ),
  "Triceps/tricep cable kickback on crossover machine": () =>
    import(
      "../assets/exercises/Triceps/tricep cable kickback on crossover machine.webp"
    ),
  "Triceps/tricep cable kickback on crossover machine1": () =>
    import(
      "../assets/exercises/Triceps/tricep cable kickback on crossover machine1.webp"
    ),
  "Triceps/tricep extension machine": () =>
    import("../assets/exercises/Triceps/tricep extension machine.webp"),
  "Triceps/tricep extension machine1": () =>
    import("../assets/exercises/Triceps/tricep extension machine1.webp"),
  "Triceps/tricep rope extension on crossover machine": () =>
    import(
      "../assets/exercises/Triceps/tricep rope extension on crossover machine.webp"
    ),
  "Triceps/tricep rope extension on crossover machine1": () =>
    import(
      "../assets/exercises/Triceps/tricep rope extension on crossover machine1.webp"
    ),
  "Triceps/triceps dip machine": () =>
    import("../assets/exercises/Triceps/triceps dip machine.webp"),
  "Triceps/triceps dip machine1": () =>
    import("../assets/exercises/Triceps/triceps dip machine1.webp"),
};
