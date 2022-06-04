"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3830],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={layout:"default",title:"Autonomous Selector",parent:"Docs",nav_order:5},p="**Autonomous Selector**",s={unversionedId:"Docs/auton_selector",id:"Docs/auton_selector",title:"Autonomous Selector",description:"{: .no_toc }",source:"@site/docs/Docs/auton_selector.md",sourceDirName:"Docs",slug:"/Docs/auton_selector",permalink:"/my-website/docs/Docs/auton_selector",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docs/auton_selector.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Autonomous Selector",parent:"Docs",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"Autonomous Functions",permalink:"/my-website/docs/Docs/auton_functions"},next:{title:"Drive Constructors",permalink:"/my-website/docs/Docs/constructor"}},u={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"initialize()",id:"initialize",level:2},{value:"limit_switch_lcd_initialize()",id:"limit_switch_lcd_initialize",level:2},{value:"shutdown()",id:"shutdown",level:2},{value:"add_autons();",id:"add_autons",level:2},{value:"print_selected_auton();",id:"print_selected_auton",level:2},{value:"page_down()",id:"page_down",level:2},{value:"page_up()",id:"page_up",level:2},{value:"call_selected_auton()",id:"call_selected_auton",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"autonomous-selector"},(0,r.kt)("strong",{parentName:"h1"},"Autonomous Selector")),(0,r.kt)("p",null,"{: .no_toc }"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("p",null,"{: .no_toc .text-delta }"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"TOC\n{:toc}")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"initialize"},"initialize()"),(0,r.kt)("p",null,"Initializes the autonomous selector.  If an sd card is plugged in, the current page will set to what's on the sd card.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  ez::as::initialize();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"limit_switch_lcd_initialize"},"limit_switch_lcd_initialize()"),(0,r.kt)("p",null,"Sets external buttons to increase/decrease the current autonomous page.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void limit_switch_lcd_initialize(pros::ADIDigitalIn* right_limit, pros::ADIDigitalIn* left_limit = nullptr);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"pros::ADIDigitalIn increase('A');\npros::ADIDigitalIn decrease('B');\nvoid initialize() {\n  ez::as::initialize();\n  ez::as::limit_switch_lcd_initialize(&increase, &decrease);\n  // . . .\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"shutdown"},"shutdown()"),(0,r.kt)("p",null,"Wrapper for ",(0,r.kt)("inlineCode",{parentName:"p"},"pros::lcd::shutdown()"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void shutdown();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  ez::as::initialize();\n\n  // Do something\n\n  ez::as::shutdown();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"add_autons"},"add_autons();"),(0,r.kt)("p",null,"Adds autonomous routines to the autonomous selector. Uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ez::print_to_screen()")," to display to the brain.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void add_autons(std::vector<Auton> autons);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void auto1() {\n  // Do something\n}\nvoid auto2() {\n  // Do something\n}\nvoid auto3() {\n  // Do something\n}\n\nvoid initialize() {\n  ez::as::auton_selector.add_autons({\n    Auton("Autonomous 1\\nDoes Something", auto1),\n    Auton("Autonomous 2\\nDoes Something Else", auto2),\n    Auton("Autonomous 3\\nDoes Something More", auto3),\n  });\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"print_selected_auton"},"print_selected_auton();"),(0,r.kt)("p",null,"Prints the current autonomous mode to the screen.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void print_selected_auton();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  ez::as::auton_selector.print_selected_auton(); \n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"page_down"},"page_down()"),(0,r.kt)("p",null,"Decreases the page. Best used with the lcd callback functions.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void page_down();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  pros::lcd::register_btn0_cb(ez::as::page_down);\n  pros::lcd::register_btn2_cb(ez::as::page_up);\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"page_up"},"page_up()"),(0,r.kt)("p",null,"Increases the page. Best used with the lcd callback functions",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void page_down();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void initialize() {\n  pros::lcd::register_btn0_cb(ez::as::page_down);\n  pros::lcd::register_btn2_cb(ez::as::page_up);\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"call_selected_auton"},"call_selected_auton()"),(0,r.kt)("p",null,"Runs the current autonomous that's selected.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Prototype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void call_selected_auton();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void autonomous() {\n  chassis.reset_gyro(); \n  chassis.reset_drive_sensor(); \n  chassis.set_drive_brake(MOTOR_BRAKE_HOLD); \n\n  ez::as::auton_selector.call_selected_auton(); \n}\n")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);