"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[386],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),s=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(n),d=r,_=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(_,a(a({ref:e},m),{},{components:n})):o.createElement(_,a({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2344:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={layout:"default",title:"PID",parent:"Docs",nav_order:6},p="Constructors",s={unversionedId:"Docs/pid",id:"Docs/pid",title:"PID",description:"PID()",source:"@site/docs/Docs/pid.md",sourceDirName:"Docs",slug:"/Docs/pid",permalink:"/my-website/docs/Docs/pid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docs/pid.md",tags:[],version:"current",frontMatter:{layout:"default",title:"PID",parent:"Docs",nav_order:6},sidebar:"tutorialSidebar",previous:{title:"Drive Constructors",permalink:"/my-website/docs/Docs/constructor"},next:{title:"PTO",permalink:"/my-website/docs/Docs/pto"}},m={},u=[{value:"PID()",id:"pid",level:2},{value:"PID()",id:"pid-1",level:2},{value:"set_constants()",id:"set_constants",level:2},{value:"set_target()",id:"set_target",level:2},{value:"set_exit_condition()",id:"set_exit_condition",level:2},{value:"set_name()",id:"set_name",level:2},{value:"compute()",id:"compute",level:2},{value:"No Motor",id:"no-motor",level:2},{value:"One Motor",id:"one-motor",level:2},{value:"Multiple Motors",id:"multiple-motors",level:2}],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"constructors"},"Constructors"),(0,i.kt)("h2",{id:"pid"},"PID()"),(0,i.kt)("p",null,"Creates a blank PID object.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"PID();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"PID liftPID;\n")),(0,i.kt)("h2",{id:"pid-1"},"PID()"),(0,i.kt)("p",null,"Creates a PID object with constants.  Everything past kP has a default starting value, so you can juts put kP.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID(double p, double i = 0, double d = 0, double start_i = 0, std::string name = "");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};\n')),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("h2",{id:"set_constants"},"set_constants()"),(0,i.kt)("p",null,"Sets PID constants.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p")," kP\n",(0,i.kt)("inlineCode",{parentName:"p"},"i")," kI\n",(0,i.kt)("inlineCode",{parentName:"p"},"d")," kD\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_start_i")," i will start when error is within this",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_constants(double p, double i = 0, double d = 0, double p_start_i = 0);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"PID liftPID;\nvoid initialize() {\n  liftPID.set_constants(1, 0, 4);\n}\n")),(0,i.kt)("h2",{id:"set_target"},"set_target()"),(0,i.kt)("p",null,"Sets PID target.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_target(double input);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \npros::Motor lift_motor(1);\nvoid opcontrol() {\n  while (true) {\n    if (master.get_digital(DIGITAL_L1)) {\n      liftPID.set_target(500);\n    }\n    else if (master.get_digital(DIGITAL_L2)) {\n      liftPID.set_target(0);\n    }\n    lift_motor = liftPID.compute(lift_motor.get_position());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n')),(0,i.kt)("h2",{id:"set_exit_condition"},"set_exit_condition()"),(0,i.kt)("p",null,"Sets the exit condition constants.  To disable one of the conditions, set the constants relating to it to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_small_exit_time")," time, in ms, before exiting ",(0,i.kt)("inlineCode",{parentName:"p"},"p_small_error"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_small_error")," small error threshold",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_big_exit_time")," time, in ms, before exiting ",(0,i.kt)("inlineCode",{parentName:"p"},"p_big_error"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_big_error")," big error threshold",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_velocity_exit_time")," time, in ms, for velocity to be 0",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"p_mA_timeout")," time, in ms, for ",(0,i.kt)("inlineCode",{parentName:"p"},"is_over_current")," to be true",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_exit_condition(int p_small_exit_time, double p_small_error, int p_big_exit_time = 0, double p_big_error = 0, int p_velocity_exit_time = 0, int p_mA_timeout = 0);\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \nvoid initialize() {\n  liftPID.set_exit_condition(100, 3, 500, 7, 500, 500);\n}\n')),(0,i.kt)("h2",{id:"set_name"},"set_name()"),(0,i.kt)("p",null,"A string that prints when exit conditions are met.  When you have multiple mechanisms using exit conditions and you're debugging, seeing which exit condition is doing what can be useful.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_name(std::string name);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100};\nvoid initialize() {\n  liftPID.set_name("Lift");\n}  \n')),(0,i.kt)("h2",{id:"compute"},"compute()"),(0,i.kt)("p",null,"Computes PID.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"double compute(double current);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \npros::Motor lift_motor(1);\nvoid opcontrol() {\n  while (true) {\n    if (master.get_digital(DIGITAL_L1)) {\n      liftPID.set_target(500);\n    }\n    else if (master.get_digital(DIGITAL_L2)) {\n      liftPID.set_target(0);\n    }\n    lift_motor = liftPID.compute(lift_motor.get_position());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n')),(0,i.kt)("h1",{id:"exit-conditions"},"Exit Conditions"),(0,i.kt)("h2",{id:"no-motor"},"No Motor"),(0,i.kt)("p",null,"Outputs one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exit_output")," states.  This exit condition checks ",(0,i.kt)("inlineCode",{parentName:"p"},"small_error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"big_error")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity")," if they are enabled.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"ez::exit_output exit_condition(bool print = false);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \npros::Motor lift_motor(1);\n\nvoid initialize() {\n  liftPID.set_exit_condition(100, 3, 500, 7, 500, 500);\n}\n\nvoid autonomous() {\n  liftPID.set_target(500);\n  while (liftPID.exit_condition(true) == ez::RUNNING) {\n    lift_motor = liftPID.compute(lift_motor.get_position());\n    pros::delay(ez::util::DELAY_TIME);\n  }\n\n  liftPID.set_target(0);\n  while (liftPID.exit_condition(true) == ez::RUNNING) {\n    lift_motor = liftPID.compute(lift_motor.get_position());\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n')),(0,i.kt)("h2",{id:"one-motor"},"One Motor"),(0,i.kt)("p",null,"Outputs one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exit_output")," states.  This exit condition checks ",(0,i.kt)("inlineCode",{parentName:"p"},"small_error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"big_error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mA")," if they are enabled.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"ez::exit_output exit_condition(pros::Motor sensor, bool print = false);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \npros::Motor lift_motor(1);\n\nvoid initialize() {\n  liftPID.set_exit_condition(100, 3, 500, 7, 500, 500);\n}\n\nvoid autonomous() {\n  liftPID.set_target(500);\n  while (liftPID.exit_condition(lift_motor, true) == ez::RUNNING) {\n    lift_motor = liftPID.compute(lift_motor.get_position());\n    pros::delay(ez::util::DELAY_TIME);\n  }\n\n  liftPID.set_target(0);\n  while (liftPID.exit_condition(lift_motor, true) == ez::RUNNING) {\n    lift_motor = liftPID.compute(lift_motor.get_position());\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n')),(0,i.kt)("h2",{id:"multiple-motors"},"Multiple Motors"),(0,i.kt)("p",null,"Outputs one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exit_output")," states.  This exit condition checks ",(0,i.kt)("inlineCode",{parentName:"p"},"small_error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"big_error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"velocity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mA")," if they are enabled.  When any of the motors trip ",(0,i.kt)("inlineCode",{parentName:"p"},"mA"),", it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"mA_EXIT"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Prototype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"ez::exit_output exit_condition(std::vector<pros::Motor> sensor, bool print = false);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'PID liftPID{1, 0.003, 4, 100, "Lift"};  \npros::Motor l_lift_motor(1);\npros::Motor r_lift_motor(2, true);\n\nvoid set_lift(int input) {\n  l_lift_motor = input;\n  r_lift_motor = input;\n}\n\nvoid initialize() {\n  liftPID.set_exit_condition(100, 3, 500, 7, 500, 500);\n}\n\nvoid autonomous() {\n  liftPID.set_target(500);\n  while (liftPID.exit_condition({r_lift_motor, l_lift_motor}, true) == ez::RUNNING) {\n    set_lift(liftPID.compute(lift_motor.get_position()));\n    pros::delay(ez::util::DELAY_TIME);\n  }\n\n  liftPID.set_target(0);\n  while (liftPID.exit_condition({r_lift_motor, l_lift_motor}, true) == ez::RUNNING) {\n    set_lift(liftPID.compute(lift_motor.get_position()));\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n')))}d.isMDXComponent=!0}}]);