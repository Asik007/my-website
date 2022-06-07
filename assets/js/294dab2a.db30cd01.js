"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7571],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(7294),n=r(6010),l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),i=r(7392),p=r(7094),u=r(2466),s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,k=e.groupId,g=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(_,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!_.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,p.U)(),T=h.tabGroupChoices,x=h.setTabGroupChoices,N=(0,n.useState)(y),I=N[0],w=N[1],E=[],Z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=T[k];null!=O&&O!==I&&_.some((function(e){return e.value===O}))&&w(O)}var A=function(e){var t=e.currentTarget,r=E.indexOf(t),a=_[r].value;a!==I&&(Z(t),w(a),null!=k&&x(k,String(a)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=E.indexOf(e.currentTarget)+1;r=null!=(a=E[n])?a:E[0];break;case"ArrowLeft":var l,o=E.indexOf(e.currentTarget)-1;r=null!=(l=E[o])?l:E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},_.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=r?r:t)}))),o?(0,n.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},2128:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=r(5488),i=r(5162),p=["components"],u={layout:"default",title:"Drive and Telemetry",parent:"Docs",nav_order:3},s=void 0,c={unversionedId:"Docs/set_and_get_drive",id:"Docs/set_and_get_drive",title:"Drive and Telemetry",description:"",source:"@site/docs/Docs/set_and_get_drive.md",sourceDirName:"Docs",slug:"/Docs/set_and_get_drive",permalink:"/my-website/Docs/set_and_get_drive",draft:!1,tags:[],version:"current",frontMatter:{layout:"default",title:"Drive and Telemetry",parent:"Docs",nav_order:3},sidebar:"tutorialSidebar",previous:{title:"PTO",permalink:"/my-website/Docs/pto"},next:{title:"User Control",permalink:"/my-website/Docs/user_control"}},d={},m=[{value:"Assumed Constructor",id:"assumed-constructor",level:2},{value:"set_tank()",id:"set_tank",level:2},{value:"set_drive_brake()",id:"set_drive_brake",level:2},{value:"set_drive_current_limit()",id:"set_drive_current_limit",level:2},{value:"right_sensor()",id:"right_sensor",level:2},{value:"right_velocity()",id:"right_velocity",level:2},{value:"right_mA()",id:"right_ma",level:2},{value:"right_over_current()",id:"right_over_current",level:2},{value:"left_sensor()",id:"left_sensor",level:2},{value:"left_velocity()",id:"left_velocity",level:2},{value:"left_mA()",id:"left_ma",level:2},{value:"left_over_current()",id:"left_over_current",level:2},{value:"reset_drive_sensor()",id:"reset_drive_sensor",level:2},{value:"reset_gyro()",id:"reset_gyro",level:2},{value:"get_gyro()",id:"get_gyro",level:2},{value:"imu_calibrate()",id:"imu_calibrate",level:2}],v={toc:m};function k(e){var t=e.components,r=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"assumed-constructor"},"Assumed Constructor"),(0,l.kt)("p",null,"All code below assumes this constructor is used.  As long as the name of the constructor is ",(0,l.kt)("inlineCode",{parentName:"p"},"chassis"),", any of the constructors can be used. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'// Chassis constructor\nDrive chassis (\n  // Left Chassis Ports (negative port will reverse it!)\n  //   the first port is the sensored port (when trackers are not used!)\n  {1, -2, 3}\n\n  // Right Chassis Ports (negative port will reverse it!)\n  //   the first port is the sensored port (when trackers are not used!)\n  ,{-4, 5, -6}\n\n  // IMU Port\n  ,7\n\n  // Wheel Diameter (Remember, 4" wheels are actually 4.125!)\n  //    (or tracking wheel diameter)\n  ,4.125\n\n  // Cartridge RPM\n  //   (or tick per rotation if using tracking wheels)\n  ,600\n\n  // External Gear Ratio (MUST BE DECIMAL)\n  //    (or gear ratio of tracking wheel)\n  // eg. if your drive is 84:36 where the 36t is powered, your RATIO would be 2.333.\n  // eg. if your drive is 36:60 where the 60t is powered, your RATIO would be 0.6.\n  ,2.333\n\n  // Uncomment if using tracking wheels\n  /*\n  // Left Tracking Wheel Ports (negative port will reverse it!)\n  ,{1, 2}\n\n  // Right Tracking Wheel Ports (negative port will reverse it!)\n  ,{3, 4}\n  */\n\n  // Uncomment if tracking wheels are plugged into a 3 wire expander\n  // 3 Wire Port Expander Smart Port\n  // ,9\n);\n\n')),(0,l.kt)("h1",{id:"set-drive"},"Set Drive"),(0,l.kt)("h2",{id:"set_tank"},"set_tank()"),(0,l.kt)("p",null,"Sets the drive to voltage.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"left")," an integer between -127 and 127.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"right")," an integer between -127 and 127.  "),(0,l.kt)(o.Z,{groupId:"ex2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void autonomous() {\n  set_tank(127, 127);\n  pros::delay(1000); // Wait 1 second\n  set_tank(0, 0);\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_tank(int left, int right);\n")))),(0,l.kt)("h2",{id:"set_drive_brake"},"set_drive_brake()"),(0,l.kt)("p",null,"Sets brake mode for all drive motors.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"brake_type"),"  takes either ",(0,l.kt)("inlineCode",{parentName:"p"},"MOTOR_BRAKE_COAST"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MOTOR_BRAKE_BRAKE"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"MOTOR_BRAKE_HOLD")," as parameters.   "),(0,l.kt)(o.Z,{groupId:"ex3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  set_drive_brake_mode(MOTOR_BRAKE_COAST);\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_drive_brake(pros::motor_brake_mode_e_t brake_type);\n")))),(0,l.kt)("h2",{id:"set_drive_current_limit"},"set_drive_current_limit()"),(0,l.kt)("p",null,"Sets mA limit to the drive.  Default is 2500.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"mA"),"input miliamps.  "),(0,l.kt)(o.Z,{groupId:"ex4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  set_drive_brake_mode(1000);\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void set_drive_current_limit(int mA);\n")))),(0,l.kt)("h1",{id:"telemetry"},"Telemetry"),(0,l.kt)("h2",{id:"right_sensor"},"right_sensor()"),(0,l.kt)("p",null,"Returns right sensor, either integrated encoder or external encoder.   "),(0,l.kt)(o.Z,{groupId:"ex5",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Right Sensor: %i \\n", chassis.right_sensor());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int right_sensor();\n")))),(0,l.kt)("h2",{id:"right_velocity"},"right_velocity()"),(0,l.kt)("p",null,"Returns integrated encoder velocity.      "),(0,l.kt)(o.Z,{groupId:"ex6",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Right Velocity: %i \\n", chassis.right_velocity());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int right_velocity();\n")))),(0,l.kt)("h2",{id:"right_ma"},"right_mA()"),(0,l.kt)("p",null,"Returns current mA being used.      "),(0,l.kt)(o.Z,{groupId:"ex7",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Right mA: %i \\n", chassis.right_mA());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"double right_mA();\n")))),(0,l.kt)("h2",{id:"right_over_current"},"right_over_current()"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when the motor is over current.     "),(0,l.kt)(o.Z,{groupId:"ex8",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Right Over Current: %i \\n", chassis.right_over_current());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"bool right_over_current();\n")))),(0,l.kt)("h2",{id:"left_sensor"},"left_sensor()"),(0,l.kt)("p",null,"Returns left sensor, either integrated encoder or external encoder.   "),(0,l.kt)(o.Z,{groupId:"ex9",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Left Sensor: %i \\n", chassis.left_sensor());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int left_sensor();\n")))),(0,l.kt)("h2",{id:"left_velocity"},"left_velocity()"),(0,l.kt)("p",null,"Returns integrated encoder velocity.      "),(0,l.kt)(o.Z,{groupId:"ex10",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Left Velocity: %i \\n", chassis.left_velocity());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int left_velocity();\n")))),(0,l.kt)("h2",{id:"left_ma"},"left_mA()"),(0,l.kt)("p",null,"Returns current mA being used.      "),(0,l.kt)(o.Z,{groupId:"ex11",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Left mA: %i \\n", chassis.left_mA());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"double left_mA();\n")))),(0,l.kt)("h2",{id:"left_over_current"},"left_over_current()"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when the motor is over current.     "),(0,l.kt)(o.Z,{groupId:"ex12",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Left Over Current: %i \\n", chassis.left_over_current());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"bool left_over_current();\n")))),(0,l.kt)("h2",{id:"reset_drive_sensor"},"reset_drive_sensor()"),(0,l.kt)("p",null,"Resets integrated encoders and trackers if applicable.   "),(0,l.kt)(o.Z,{groupId:"ex13",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  chassis.reset_drive_sensor();\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void reset_drive_sensor();\n")))),(0,l.kt)("h2",{id:"reset_gyro"},"reset_gyro()"),(0,l.kt)("p",null,"Sets current gyro position to parameter, defaulted to 0.    "),(0,l.kt)(o.Z,{groupId:"ex14",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  chassis.reset_gyro();\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void reset_gyro(double new_heading = 0);\n")))),(0,l.kt)("h2",{id:"get_gyro"},"get_gyro()"),(0,l.kt)("p",null,"Gets IMU.    "),(0,l.kt)(o.Z,{groupId:"ex15",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'void opcontrol() {\n  while (true) {\n    chassis.tank();\n\n    printf("Gyro: %f \\n", chassis.get_gyro());\n\n    pros::delay(ez::util::DELAY_TIME);\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"double get_gyro();\n")))),(0,l.kt)("h2",{id:"imu_calibrate"},"imu_calibrate()"),(0,l.kt)("p",null,"Calibrates IMU, and vibrates the controler after a successful calibration.      "),(0,l.kt)(o.Z,{groupId:"ex16",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  chassis.imu_calibrate();\n}\n"))),(0,l.kt)(i.Z,{value:"proto",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"bool imu_calibrate();\n")))))}k.isMDXComponent=!0}}]);