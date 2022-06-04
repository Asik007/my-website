"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3388],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return _}});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),_=i,h=p["".concat(l,".").concat(_)]||p[_]||u[_]||r;return t?s.createElement(h,a(a({ref:n},d),{},{components:t})):s.createElement(h,a({ref:n},d))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=t[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2559:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var s=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],o={},l="**Example Autonomous Routines**",c={unversionedId:"Tutorials/example_autons",id:"Tutorials/example_autons",title:"**Example Autonomous Routines**",description:"{: .no_toc }",source:"@site/docs/Tutorials/example_autons.md",sourceDirName:"Tutorials",slug:"/Tutorials/example_autons",permalink:"/my-website/docs/Tutorials/example_autons",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/example_autons.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"**Adding Autonomous Routines**",permalink:"/my-website/docs/Tutorials/autons"},next:{title:"**Joystick Curve**",permalink:"/my-website/docs/Tutorials/joystick_curve"}},d={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Assumed Constants",id:"assumed-constants",level:2},{value:"Drive",id:"drive",level:2},{value:"Turn",id:"turn",level:2},{value:"Drive and Turn",id:"drive-and-turn",level:2},{value:"Wait Until and Changing Speed",id:"wait-until-and-changing-speed",level:2},{value:"Swing Turns",id:"swing-turns",level:2},{value:"Combining All Movements",id:"combining-all-movements",level:2},{value:"Interference",id:"interference",level:2}],p={toc:u};function _(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-autonomous-routines"},(0,r.kt)("strong",{parentName:"h1"},"Example Autonomous Routines")),(0,r.kt)("p",null,"{: .no_toc }"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("p",null,"{: .no_toc .text-delta }"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TOC\n{:toc}")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"assumed-constants"},"Assumed Constants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int DRIVE_SPEED = 110; \nconst int TURN_SPEED  = 90;\nconst int SWING_SPEED = 90;\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"drive"},"Drive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void drive_example() {\n  // The first parameter is target inches\n  // The second parameter is max speed the robot will drive at\n  // The third parameter is a boolean (true or false) for enabling/disabling a slew at the start of drive motions\n  // for slew, only enable it when the drive distance is greater then the slew distance + a few inches\n\n\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(-12, DRIVE_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(-12, DRIVE_SPEED);\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"turn"},"Turn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void turn_example() {\n  // The first parameter is target degrees\n  // The second parameter is max speed the robot will drive at\n\n\n  chassis.set_turn_pid(90, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(0, TURN_SPEED);\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"drive-and-turn"},"Drive and Turn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void drive_and_turn() {\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(-45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(0, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wait-until-and-changing-speed"},"Wait Until and Changing Speed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void wait_until_change_speed() {\n  // wait_until will wait until the robot gets to a desired position\n\n\n  // When the robot gets to 6 inches, the robot will travel the remaining distance at a max speed of 40\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\n  chassis.wait_until(6);\n  chassis.set_max_speed(40); // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 40 speed\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(-45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(0, TURN_SPEED);\n  chassis.wait_drive();\n\n  // When the robot gets to -6 inches, the robot will travel the remaining distance at a max speed of 40\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\n  chassis.wait_until(-6);\n  chassis.set_max_speed(40); // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 40 speed\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"swing-turns"},"Swing Turns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void swing_example() {\n  // The first parameter is ez::LEFT_SWING or ez::RIGHT_SWING\n  // The second parameter is target degrees\n  // The third parameter is speed of the moving side of the drive\n\n\n  chassis.set_swing_pid(ez::LEFT_SWING, 45, SWING_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\n  chassis.wait_until(12);\n\n  chassis.set_swing_pid(ez::RIGHT_SWING, 0, SWING_SPEED);\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"combining-all-movements"},"Combining All Movements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void combining_movements() {\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(ez::RIGHT_SWING, -45, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_turn_pid(0, TURN_SPEED);\n  chassis.wait_drive();\n\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\n  chassis.wait_drive();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"interference"},"Interference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void tug (int attempts) {\n  for (int i=0; i<attempts-1; i++) {\n    // Attempt to drive backwards\n    printf("i - %i", i);\n    chassis.set_drive_pid(-12, 127);\n    chassis.wait_drive();\n\n    // If failsafed...\n    if (chassis.interfered) {\n      chassis.reset_drive_sensor();\n      chassis.set_drive_pid(-2, 20);\n      pros::delay(1000);\n    }\n    // If robot successfully drove back, return\n    else {\n      return;\n    }\n  }\n}\n\n// If there is no interference, robot will drive forward and turn 90 degrees. \n// If interfered, robot will drive forward and then attempt to drive backwards. \nvoid interfered_example() {\n chassis.set_drive_pid(24, DRIVE_SPEED, true);\n chassis.wait_drive();\n\n if (chassis.interfered) {\n   tug(3);\n   return;\n }\n\n chassis.set_turn_pid(90, TURN_SPEED);\n chassis.wait_drive();\n}\n')),(0,r.kt)("hr",null))}_.isMDXComponent=!0}}]);