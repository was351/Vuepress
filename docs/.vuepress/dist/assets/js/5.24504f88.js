(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(e,t,o){e.exports=o.p+"assets/img/noload.4967af5f.png"},416:function(e,t,o){e.exports=o.p+"assets/img/wheel.f13917e8.png"},417:function(e,t,o){e.exports=o.p+"assets/img/diagram.c5962618.png"},418:function(e,t,o){e.exports=o.p+"assets/img/power.8af00672.png"},419:function(e,t,o){e.exports=o.p+"assets/img/motor.4463c099.png"},420:function(e,t,o){e.exports=o.p+"assets/img/Load.af69e493.png"},421:function(e,t,o){e.exports=o.p+"assets/img/draw.708531bc.png"},422:function(e,t,o){e.exports=o.p+"assets/img/stall.ba8b2e6d.png"},423:function(e,t,o){e.exports=o.p+"assets/img/arm.d272180b.png"},424:function(e,t,o){e.exports=o.p+"assets/img/spec.dcbdc771.png"},425:function(e,t,o){e.exports=o.p+"assets/img/current.759a8496.png"},426:function(e,t,o){e.exports=o.p+"assets/img/curve.5ad8caee.png"},427:function(e,t,o){e.exports=o.p+"assets/img/mospec.5a622713.png"},442:function(e,t,o){"use strict";o.r(t);var r=o(41),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"speed-power-torque-and-dc-motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#speed-power-torque-and-dc-motors"}},[e._v("#")]),e._v(" Speed, Power, Torque, and DC Motors")]),e._v(" "),r("p",[r("strong",[e._v("Dynamics")]),e._v("\nClassical Mechanics, the study of objects in motion, is very important in robot design. The following are a few of the important concepts. Keep in mind that all of the following are vector quantities, meaning they have direction, as opposed to scalar quantities, which do not. In one-dimensional contexts, the direction is usually represented with +/-.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Definitions")]),e._v(" "),r("th",[e._v("Common Units")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Velocity (v)")]),e._v(" "),r("td",[e._v("A measure of the change in position per unit time.")]),e._v(" "),r("td",[e._v("metres/second (m/s), kilometres/hour (km/h)")])]),e._v(" "),r("tr",[r("td",[e._v("Angular Velocity (ω)")]),e._v(" "),r("td",[e._v("A measure of the change in angular-position per unit time. Another way to think about it is how much portion of a circle is covered by an object per unit time. This is the rotational counterpart to velocity.")]),e._v(" "),r("td",[e._v("degrees/second (°/s), radians/second (rad/s), revolutions/minute (rpm)")])]),e._v(" "),r("tr",[r("td",[e._v("Acceleration (a)")]),e._v(" "),r("td",[e._v("A measure of the change in velocity per unit time. An object with constant velocity has 0 acceleration.")]),e._v(" "),r("td",[e._v("metres/second2 (m/s2), kilometres/hour2 (km/h2)")])]),e._v(" "),r("tr",[r("td",[e._v("Angular Acceleration (α)")]),e._v(" "),r("td",[e._v("A measure of the change in angular velocity per unit time. An object with constant angular velocity has 0 acceleration.")]),e._v(" "),r("td",[e._v("degrees/second2 (°/s2), radians/second2 (rad/s2)")])]),e._v(" "),r("tr",[r("td",[e._v("Force (F)")]),e._v(" "),r("td",[e._v("A push or pull. Unbalanced forces cause acceleration. A ball you push accelerates from rest because you exert a force on it while it does not have an equal and opposite force to balance it. Force is related to acceleration by Newton’s second law: a=F/m, where m is mass.")]),e._v(" "),r("td",[e._v("Newtons, Pounds")])]),e._v(" "),r("tr",[r("td",[e._v("Torque (τ)")]),e._v(" "),r("td",[e._v("A measure of a force that can cause an object to rotate. If torque is spinning an object, the object will create a linear force at its edge. Torque is calculated by multiplying the linear force by the distance from the centre of the circle. Torque causes angular acceleration just like linear force causes linear acceleration. The relation between torque and angular acceleration involves explaining moment of inertia, which is outside the scope of this lesson.")]),e._v(" "),r("td",[e._v("Newton-Meters, Inch-Pounds")])])])]),e._v(" "),r("p",[e._v("An example for these concepts: A motor applies force on a wheel on the ground in the anticlockwise direction by rotating the axle. So there is a torque on the wheel, which causes a force to be exerted at the edge of the wheel to the right on the ground. By Newton’s third law, the ground exerts equal force on the wheel. This force causes the wheel to accelerate, both linear and angular, which causes a change in the velocity and angular velocity to the left.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(416),alt:"An Image"}}),e._v("(Fig 1: Wheel Torque)")]),e._v(" "),r("p",[e._v("Given the torque applied on the axle with the wheel on it and the wheel radius, the force exerted by the wheel on the ground is given by the equation:")]),e._v(" "),r("p",[e._v("Force = Torque / Wheel Radius")]),e._v(" "),r("p",[r("img",{attrs:{src:o(417),alt:"An Image"}}),e._v("(Fig 2: Arm – Weight)")]),e._v(" "),r("p",[e._v("In Fig 2, a robot arm is holding a ball. Since the force of the gravity on the object is 1 Newton and the ball is 0.25 meters from the centre of rotation, the torque required to lift the ball can be calculated as the following:")]),e._v(" "),r("p",[e._v("Torque = Force x Distance = 1 Newton x 0.25 Meter = 0.25 Newton-Meters.")]),e._v(" "),r("p",[e._v("So, the torque required to hold the object without falling is 0.25 Newton-Meters in the counterclockwise direction; lifting it would require more. The more torque the motor has, the more force is exerted on the ball, causing more acceleration, meaning the arm will go up faster.")]),e._v(" "),r("p",[e._v("Important relations:\nRemember that Torque is inversely related to distance from the centre and directly proportional to the force. This means that doubling the length of the arm in the example above would also double the torque required to lift. So, making the arm shorter would require less torque but also not be able to lift as high. In addition, doubling the weight of the object the arm is carrying would also double the torque required. Keep these trade-offs in mind when designing robots.")]),e._v(" "),r("h2",{attrs:{id:"work-and-power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#work-and-power"}},[e._v("#")]),e._v(" Work and Power")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Definitions")]),e._v(" "),r("th",[e._v("Common Units")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Work (W)")]),e._v(" "),r("td",[e._v("A measure of force exerted over distance. Work transfers energy between forms and/or objects. Work done by a force on an object is calculated by multiplying the force by the distance it travels.")]),e._v(" "),r("td",[e._v("Joules")])]),e._v(" "),r("tr",[r("td",[e._v("Power (P)")]),e._v(" "),r("td",[e._v("A measure of the rate at which work is done. Power can be calculated directly by multiplying the velocity of an object by the amount of force exerted on it. In robotics, power is usually used as a limit since there is a power limit of robotics systems.")]),e._v(" "),r("td",[e._v("Watts, Horsepower")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(418),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 3: How quickly work can be completed vs amount of work with constant power)\nAs shown in Fig 3, for a constant power output, a trade-off has to be made between the amount of work done and the time it takes to do the work.\nThis is very relevant for designing robots for competition design as there are power limitations imposed and each motor has a power limit.")]),e._v(" "),r("h2",{attrs:{id:"dc-motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dc-motors"}},[e._v("#")]),e._v(" DC Motors")]),e._v(" "),r("p",[e._v("In a competition robot, everything is driven by actuators, which are mechanisms that are used to act upon an environment, usually for moving or controlling a mechanism or system. Motors are the most common type of actuator in a VEX robot, which uses Direct Current (DC) Motors.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(419),alt:"An Image"}}),e._v("(Fig 4: Motor output)")]),e._v(" "),r("p",[e._v("A motor is a device that converts electrical energy to mechanical energy through the use of electromagnetism. The details of the process of conversion is not relevant for building robots but the interested reader can learn about it here. A motor outputs a fixed amount of mechanical power when a voltage is applied to it.")]),e._v(" "),r("p",[r("strong",[e._v("Motor Loading")])]),e._v(" "),r("p",[e._v("Motors only apply torque in response to loading. Ideally, with no loading on the output the motor will spin very, very fast with no torque. This never happens in real life, since there is always friction in the motor system acting as a load and requiring the motor to output torque to overcome it. The higher the load placed on the motor is, the higher the motor will “fight back” with an opposing torque. Since the motor outputs a fixed amount of power, the higher the torque that it outputs, the lower the angular velocity will be. So the motor spins slower when more work is required of it. If the load is high enough that the motor cannot overcome it, it stops spinning. This is known as a stall.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(420),alt:"An Image"}}),e._v("(Fig 5: Speed vs Load Torque)")]),e._v(" "),r("p",[r("strong",[e._v("Current Draw")])]),e._v(" "),r("p",[e._v("The amount of current (common unit: amp) a motor draws is proportional to the torque it outputs which is proportional to the load. So, the current and rotational speed are inversely related.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(421),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 6: Current Draw vs Load Torque)")]),e._v(" "),r("p",[r("img",{attrs:{src:o(422),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 7: Current Draw vs Load Torque showing no load and stall torque)")]),e._v(" "),r("p",[r("img",{attrs:{src:o(327),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 8: Speed vs Load Torque showing no load and stall torque)")]),e._v(" "),r("p",[e._v("Based on the above relationships, one can see how the concept of power comes into play. With a given load, the motor can only spin at a certain speed.\nThere are 4 key properties of a motor that make it different from other motors:")]),e._v(" "),r("ol",[r("li",[e._v("Stall Torque (N-m): The amount of load placed on a motor that will cause it to stop moving.")]),e._v(" "),r("li",[e._v("Free Speed (RPM): The maximum rotational speed a motor will run at when it is under no load.")]),e._v(" "),r("li",[e._v("Stall Current (Amp): The amount of current a motor will draw when it is stalled.")]),e._v(" "),r("li",[e._v("Free Current (Amp): The amount of current a motor will draw when it is under no load.")])]),e._v(" "),r("p",[r("strong",[e._v("Varying Power with Voltage")])]),e._v(" "),r("p",[e._v("The more voltage is applied to the motor, the more power it can output and the faster it can do work. This implies that to spin a given load faster, one must apply more voltage to the motor to increase the power it can output. It is important to note that all of the characteristics of a motor listed above, except free current (which does not change), are directly related to voltage, which is why they must be listed with a certain voltage. This means that one can calculate those properties using ratios.\nThe voltage applied on the motors in a VEX robot are regulated by motor controllers, so that robot designers can vary the power output of motors under load. In the older Cortex system, separate 3-wire motor controllers were required. In V5, motor controllers are built into the V5 Smart Motors.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(327),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 9: Speed vs Load Torque)")]),e._v(" "),r("p",[r("strong",[e._v("Motor Limits and Calculations")])]),e._v(" "),r("p",[e._v("Robot designers cannot keep adding more voltage to a motor to be able to output the power they want. This is because motors have power limits, as aforementioned, and pushing them over the limit can cause them to fail. Fortunately, VEX motors have thermal breakers built that will cut the current if the motor gets too hot. This ensures that the motors won’t burn out. So, the robot designers must make sure that the amount of load is not enough to draw more current than a specified amount, which would cause the breaker to trip.")]),e._v(" "),r("p",[r("strong",[e._v("Arm Load Calculation")])]),e._v(" "),r("p",[e._v("The concepts and equations learned so far can be used to figure out the maximum load for an arm attached to a motor. Here are some examples:")]),e._v(" "),r("p",[r("img",{attrs:{src:o(423),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 10 Example)")]),e._v(" "),r("p",[r("img",{attrs:{src:o(424),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 11: Sample Motor Specs)")]),e._v(" "),r("p",[e._v("In the example shown in Fig 10 and Fig 11, to calculate the maximum weight the arm can hold stationary, the designer must first calculate the maximum torque the motor can output without tripping the breaker.")]),e._v(" "),r("p",[e._v("Weight Load calculated from Torque:")]),e._v(" "),r("p",[e._v("The maximum weight the robot can hold stationary occurs at the stall torque of the motor.  If the motor is stalled, it is applying a torque of 1 N-m on the robot arm, which is 0.25 meters long.  Torque = Force * Distance")]),e._v(" "),r("p",[e._v("Force = Torque / Distance = 1 Newton-meter / 0.25 meters = 4 Newtons")]),e._v(" "),r("p",[e._v("The arm can hold up 4 Newtons at the motor stall. Any more and the arm will drop down.")]),e._v(" "),r("p",[e._v("Torque Load Calculated from Current Limit:")]),e._v(" "),r("p",[e._v("If the current limiting breaker is set to trip when the current exceeds 2 amps, for instance, the motor would not run at stall because the stall current is 3 amps. So the maximum torque load with current at 2 amps must be determined.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(425),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 12: Current Draw vs Load Torque)")]),e._v(" "),r("p",[e._v("Since the relationship between motor load torque and motor current draw is linear, the slope of the graph in Fig 12 can be expressed as")]),e._v(" "),r("p",[e._v("m = (Change in Y / Change in X) = (Stall Current – Free Current) / Stall Torque")]),e._v(" "),r("p",[e._v("The y-intercept, b, is the free current. So the linear relation can be expressed as")]),e._v(" "),r("p",[e._v("Current = ((Stall Current – Free Current) / Stall Torque) x Torque Load + Free Current")]),e._v(" "),r("p",[e._v("Plugging in the known values (with 2 amps as current) and solving the equation results in the torque load being 0.655 N-m. Then the weight force can be calculated as\nForce = Torque / Distance = 0.655 N-m / 0.25 m = 2.62 N")]),e._v(" "),r("p",[e._v("If the robot arm picks up an object heavier than 2.62 N, it will trip the motor circuit breaker.")]),e._v(" "),r("p",[r("strong",[e._v("Motor Speed from Torque Load Calculations")])]),e._v(" "),r("p",[e._v("Using the same example as before, here is how to determine the speed of the motor at a given torque, which in this case is 0.655 N-m.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(426),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 13: Speed vs Load Torque)")]),e._v(" "),r("p",[e._v("The relation between speed and load torque can be derived in a way similar to the previous example, which would result in the relation:")]),e._v(" "),r("p",[e._v("Speed = -(Free Speed / Stall Torque) x Torque Load + Free Speed")]),e._v(" "),r("p",[e._v("After plugging the known values, the speed can be calculated to be 34.5 RPM.")]),e._v(" "),r("p",[e._v("The motor will spin at 34.5 RPM when it is under a torque load of 0.655 N-m, while drawing 2 amps and lifting an object weighing 2.62 N.")]),e._v(" "),r("p",[r("strong",[e._v("Multiple Motors")])]),e._v(" "),r("p",[e._v("Some applications require more power than the motor can handle. In those cases, the robot designer has 3 options to solve the problem:")]),e._v(" "),r("p",[e._v("Engineer the robot to lower the power requirement so that the motor’s maximum power would work.\nReplace the motor with one that can handle more power.\nUse multiple motors for that application.\nWhen multiple motors are used, the torque load is balanced among all the motors. For example, if 2 motors are used for a 2 N-m torque load, each motor will have a torque load of 1 N-m.\nA simple way to think about it is that the motors take on the characteristics of one super-motor with combined specs of the individual motors.  The stall torques, stall currents, and free currents add together but the free speed doesn’t change, as shown by Fig 14.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(427),alt:"An Image"}})]),e._v(" "),r("p",[e._v("(Fig 14: VEX Motor 393 specs)")]),e._v(" "),r("h2",{attrs:{id:"formulas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#formulas"}},[e._v("#")]),e._v(" Formulas")]),e._v(" "),r("p",[e._v("Speed = Distance / Time\nRotational Speed = Rotational Cycles / Time\nRotational Speed = Degrees / Time\nTorque = Force x Distance\nForce = Torque / Distance    Where the Distance is the distance from the axis of rotation\nPower = Force x Velocity")]),e._v(" "),r("p",[e._v("Motor Key Specs:")]),e._v(" "),r("ol",[r("li",[e._v("Stall Torque")]),e._v(" "),r("li",[e._v("Free Speed")]),e._v(" "),r("li",[e._v("Stall Current")]),e._v(" "),r("li",[e._v("Free Current")])]),e._v(" "),r("p",[r("strong",[e._v("For determining motor characteristics as voltage varies:")])]),e._v(" "),r("p",[e._v("New Value = Spec Value x (New Voltage / Spec Voltage)")]),e._v(" "),r("p",[r("strong",[e._v("For determining Motor Current Draw at a given Torque Load:")])]),e._v(" "),r("p",[e._v("Current Draw = ((Stall Current – Free Current) / Stall Torque) x Given Torque Load + Free Current")]),e._v(" "),r("p",[r("strong",[e._v("For determining the Torque Load at a given Motor Current Draw:")])]),e._v(" "),r("p",[e._v("Torque Load = (Given Motor Current – Free Current) x Stall Torque / (Stall Current – Free Current)")]),e._v(" "),r("p",[r("strong",[e._v("For determining Motor Rotational Speed at a given Torque Load:")])]),e._v(" "),r("p",[e._v("Rotational Speed = -(Free Speed / Stall Torque) x Given Torque Load + Free Speed")]),e._v(" "),r("p",[r("strong",[e._v("For determining “Super” Motor Specs from Multiple Motors combined as one, geared to the same Speed:")])]),e._v(" "),r("p",[e._v("Free Speed = SAME")]),e._v(" "),r("p",[e._v("Stall Torque = Sum of all Motor Stall Torques")]),e._v(" "),r("p",[e._v("Stall Current = Sum of all Motor Stall Currents")]),e._v(" "),r("p",[e._v("Free Current = Sum of all Motor Free Currents")])])}),[],!1,null,null,null);t.default=a.exports}}]);