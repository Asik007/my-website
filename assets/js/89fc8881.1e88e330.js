"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="**Joystick Curve**",c={unversionedId:"Tutorials/joystick_curve",id:"Tutorials/joystick_curve",title:"**Joystick Curve**",description:"{: .no_toc }",source:"@site/docs/Tutorials/joystick_curve.md",sourceDirName:"Tutorials",slug:"/Tutorials/joystick_curve",permalink:"/my-website/docs/Tutorials/joystick_curve",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/joystick_curve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"**Example Autonomous Routines**",permalink:"/my-website/docs/Tutorials/example_autons"},next:{title:"**PID Tutorial**",permalink:"/my-website/docs/Tutorials/pid"}},u={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Enabling",id:"enabling",level:2},{value:"Disabling",id:"disabling",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"joystick-curve"},(0,i.kt)("strong",{parentName:"h1"},"Joystick Curve")),(0,i.kt)("p",null,"{: .no_toc }"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("p",null,"{: .no_toc .text-delta }"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"TOC\n{:toc}")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/rcfjjg83zx"},"5225 curves from 2018"),", (explained ",(0,i.kt)("a",{parentName:"p",href:"https://www.vexforum.com/t/team-5225a-in-the-zone-code-release-yes-you-read-that-right/63199/10"},"here"),"). The x-axis is the joystick input and the y-axis is the motor output."),(0,i.kt)("p",null,"Normally, pushing the joystick half way means the robot goes half speed. With an input curve, pushing the joystick half way may only move the robot at 1/4 power. This means more of the joystick movement goes to lower speeds, giving you more control of the robot."),(0,i.kt)("p",null,"When the robot is on, tapping/holding the left/right arrows will increase/decrease how large the curve is. When arcade is enabled, each stick will have it's own curve. The y/a buttons will increase/decrease the curve for the right stick."),(0,i.kt)("h2",{id:"enabling"},"Enabling"),(0,i.kt)("p",null,"After you find values you like, in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main.cpp")," set ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.set_curve_defaults(0, 0)")," to whatever you liked! The first parameter is left stick, second is right stick.  When using tank, only the left stick value is used.    "),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main.cpp"),", in ",(0,i.kt)("inlineCode",{parentName:"p"},"void initialize()"),", if ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.toggle_modify_curve_with_controller(true)")," is enabled, by pressing the left/right (or y/a if arcade is enabled), you can live adjust your curve and it will display to your controller!   "),(0,i.kt)("p",null,"If you have an sd card plugged in, after changing the number with your controller, the value will save to the sd card.  "),(0,i.kt)("h2",{id:"disabling"},"Disabling"),(0,i.kt)("p",null,"To disable the joystick curve, in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main.cpp")," make sure these are 0 ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.set_curve_defaults(0, 0)"),".  "),(0,i.kt)("p",null,"To disable modifying the curve with the controller, make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"chassis.toggle_modify_curve_with_controller(true)")," is false."))}f.isMDXComponent=!0}}]);