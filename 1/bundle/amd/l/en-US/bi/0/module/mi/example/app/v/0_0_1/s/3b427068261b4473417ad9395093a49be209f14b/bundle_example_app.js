LWR.define("ui/button/v/0_3_2",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(f,g,c){var o=f?"["+f+"]":"";return"button"+o+" {font-size: 0.9em;padding: 4px 8px;background-color: var(--button-color-bg);border: none;color: white;padding: 10px 10px;min-width: 100px;text-align: center;text-decoration: var(--text-decoration);display: inline-block;}button:hover"+o+" {background-color: var(--button-color-bg-active);}button:focus"+o+" {outline: 0;}"}var _=[k];function v(f,g,c,o){const{d:i,t:l,h:t}=f;return[t("button",{attrs:{title:g.label},key:0},[l(i(g.label))])]}var h=e.registerTemplate(v);v.stylesheets=[],_&&v.stylesheets.push.apply(v.stylesheets,_),v.stylesheetToken="ui-button_button",e.freezeTemplate(v);class d extends e.LightningElement{constructor(...g){super(...g);this.label=void 0}}e.registerDecorators(d,{publicProps:{label:{config:0}}});var y=e.registerComponent(d,{tmpl:h});u.default=y,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/paginator/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2","ui/button/v/0_3_2"],function(u,e,k,_,v){"use strict";function h(x){return x&&typeof x=="object"&&"default"in x?x:{default:x}}var d=h(k),y=h(_),f=h(v);function g(x,C,w){var T=x?"["+x+"]":"";return".button-right"+T+" {float: right;}red"+T+" {color: #1798c1;}button"+T+" {color: blue;}"}var c=[g];const o=e.parseFragment`<div${3}>Paginator with button</div>`,i={props:{title:"paginator"},key:0},l={label:"Prev"},t={label:"Next"},n={attrs:{slot:"footer"},props:{source:"example/hello"},key:5},a={key:6},r={label:"Previous"},p={"button-right":!0};function m(x,C,w,T){const{st:S,b:L,t:A,h:O,c:E}=x,{_m0:z,_m1:M,_m2:N,_m3:I}=T;return[E("ui-card",y.default,i,[S(o(),2),O("button",{attrs:l,key:3,on:{click:z||(T._m0=L(C.prev))}},[A("Prev")]),O("button",{attrs:t,key:4,on:{click:M||(T._m1=L(C.next))}},[A("Next")]),E("example-view-source",d.default,n,[A("Bind an HTML element to a component property.")])]),O("div",a,[E("ui-button",f.default,{props:r,key:7,on:{click:N||(T._m2=L(C.prev))}}),E("ui-button",f.default,{classMap:p,props:t,key:8,on:{click:I||(T._m3=L(C.next))}})])]}var s=e.registerTemplate(m);m.stylesheets=[],c&&m.stylesheets.push.apply(m.stylesheets,c),m.stylesheetToken="example-paginator_paginator",e.freezeTemplate(m);class b extends e.LightningElement{prev(){this.dispatchEvent(new CustomEvent("prev"))}next(){this.dispatchEvent(new CustomEvent("next"))}}var P=e.registerComponent(b,{tmpl:s});u.default=P,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/eventSimple/v/0_0_1",["exports","lwc/v/2_38_1","example/paginator/v/0_0_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(u,e,k,_,v){"use strict";function h(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var d=h(k),y=h(_),f=h(v);const g={props:{title:"Event Simple"},key:0},c={key:1},o={attrs:{slot:"footer"},props:{source:"example/hello"},key:3};function i(a,r,p,m){const{d:s,t:b,h:P,b:x,c:C}=a,{_m0:w,_m1:T}=m;return[C("ui-card",f.default,g,[P("div",c,[b("Page "+s(r.pageNum))]),C("example-paginator",d.default,{key:2,on:{prev:w||(m._m0=x(r.handlePrev)),next:T||(m._m1=x(r.handleNext))}}),C("example-view-source",y.default,o,[b("Bind an HTML element to a component property.")])])]}var l=e.registerTemplate(i);i.stylesheets=[],i.stylesheetToken="example-eventSimple_eventSimple",e.freezeTemplate(i);class t extends e.LightningElement{constructor(...r){super(...r);this.pageNum=1}handlePrev(){this.pageNum--}handleNext(){this.pageNum++}}e.registerDecorators(t,{fields:["pageNum"]});var n=e.registerComponent(t,{tmpl:l});u.default=n,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/viewSource/v/0_0_1",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(i,l,t){var n=i?"["+i+"]":"",a=i?"["+i+"-host]":"";return(l?":host {":a+" {")+"text-align: left;}.description"+n+" {color: #706e6b;}a"+n+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}"}var _=[k];const v={classMap:{description:!0},key:0},h={key:1},d=[],y={key:2};function f(i,l,t,n){const{s:a,h:r,t:p}=i;return[r("div",v,[a("",h,d,t)]),r("p",y,[r("a",{attrs:{href:l.sourceURL,target:"source"},key:3},[p("View Source")])])]}var g=e.registerTemplate(f);f.slots=[""],f.stylesheets=[],_&&f.stylesheets.push.apply(f.stylesheets,_),f.stylesheetToken="example-viewSource_viewSource",e.freezeTemplate(f);class c extends e.LightningElement{constructor(...l){super(...l);this.baseURL="https://github.com/bigboki/salesforce-oss/tree/master/lwr-single-page-app/src/modules/",this.source=void 0}get sourceURL(){return this.baseURL+this.source}}e.registerDecorators(c,{publicProps:{source:{config:0}},fields:["baseURL"]});var o=e.registerComponent(c,{tmpl:g});u.default=o,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/hello/v/0_0_1",["exports","lwc/v/2_38_1","example/viewSource/v/0_0_1","ui/card/v/0_3_2"],function(u,e,k,_){"use strict";function v(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var h=v(k),d=v(_);const y={props:{title:"Hello"},key:0},f={key:1},g={attrs:{slot:"footer"},props:{source:"example/hello"},key:2};function c(t,n,a,r){const{d:p,t:m,h:s,c:b}=t;return[b("ui-card",d.default,y,[s("div",f,[m("Hello, "+p(n.greeting)+"!")]),b("example-view-source",h.default,g,[m("Bind an HTML element to a component property.")])])]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-hello_hello",e.freezeTemplate(c);class i extends e.LightningElement{constructor(...n){super(...n);this.greeting="World"}}e.registerDecorators(i,{fields:["greeting"]});var l=e.registerComponent(i,{tmpl:o});u.default=l,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/contactListItem/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(u,e,k){"use strict";function _(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var v=_(k);const h=e.parseFragment`<br${3}>`,d={key:1};function y(o,i,l,t){const{b:n,d:a,t:r,st:p,h:m,c:s}=o,{_m0:b}=t;return[s("ui-card",v.default,{key:0,on:{click:b||(t._m0=n(i.handleClick))}},[m("div",d,[r(a(i.contact.Name)),p(h(),3),r(a(i.contact.Picture))])])]}var f=e.registerTemplate(y);y.stylesheets=[],y.stylesheetToken="example-contactListItem_contactListItem",e.freezeTemplate(y);class g extends e.LightningElement{constructor(...i){super(...i);this.contact=void 0}handleClick(){let i=new CustomEvent("contactselected",{detail:this.contact.Id});this.dispatchEvent(i)}}e.registerDecorators(g,{publicProps:{contact:{config:0}}});var c=e.registerComponent(g,{tmpl:f});u.default=c,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/eventWithData/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItem/v/0_0_1","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(u,e,k,_,v){"use strict";function h(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=h(k),y=h(_),f=h(v);const g={props:{title:"Event With Data"},key:0};function c(t,n,a,r){const{k:p,b:m,c:s,i:b,t:P,d:x,fr:C,f:w}=t,{_m0:T}=r;return[s("ui-card",y.default,g,w([b(n.contacts.data,function(S){return s("example-contact-list-item",d.default,{props:{contact:S},key:p(1,S.Id),on:{contactselected:T||(r._m0=m(n.handleContactSelected))}})}),P("selected contact:"),n.selectedContact?C(2,[P(x(n.selectedContact.Name))],0):null,P("after")]))]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-eventWithData_eventWithData",e.freezeTemplate(c);class i extends e.LightningElement{constructor(...n){super(...n);this.selectedContact=void 0,this.contacts={}}handleContactSelected(n){const a=n.detail;this.selectedContact=this.contacts.data.find(r=>r.Id===a)}}e.registerDecorators(i,{wire:{contacts:{adapter:f.default,config:function(t){return{}}}},fields:["selectedContact"]});var l=e.registerComponent(i,{tmpl:o});u.default=l,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("data/contacts/v/0_0_1",["exports"],function(u){"use strict";const e=[{Id:"0031700000pJRRSAA4",Name:"Amy Taylor",Title:"VP of Engineering",Phone:"4152568563",Email:"amy@demo.net",Picture:"/assets/images/demo/amy_taylor.jpg"},{Id:"0031700000pJRRTAA4",Name:"Michael Jones",Title:"VP of Sales",Phone:"4158526633",Email:"michael@demo.net",Picture:"/assets/images/demo/michael_jones.jpg"},{Id:"0031700000pJRRUAA4",Name:"Jennifer Wu",Title:"CEO",Phone:"4158521463",Email:"jennifer@demo.net",Picture:"/assets/images/demo/jennifer_wu.jpg"},{Id:"0031700000pJRRVAA4",Name:"Anup Gupta",Title:"VP of Products",Phone:"4158526398",Email:"anup@demo.net",Picture:"/assets/images/demo/anup_gupta.jpg"},{Id:"0031700000pJRRWAA4",Name:"Caroline Kingsley",Title:"VP of Technology",Phone:"4158753654",Email:"caroline@demo.net",Picture:"/assets/images/demo/caroline_kingsley.jpg"},{Id:"0031700000pJRRXAA4",Name:"Jonathan Bradley",Title:"VP of Opearations",Phone:"4158885522",Email:"jonathan@demo.net",Picture:"/assets/images/demo/jonathan_bradley.jpg"}];u.contacts=e,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("data/wireGetContactListProvider/v/0_0_1",["exports","lwc/v/2_38_1","data/contacts/v/0_0_1"],function(u,e,k){"use strict";var _=void 0;class v{constructor(y){this.connected=!1,this.dataCallback=y}connect(){this.connected=!0,this.provideContactList()}disconnect(){this.connected=!1}update(){this.provideContactList()}provideContactList(){this.connected&&this.dataCallback({data:k.contacts})}}e.registerDecorators(v,{fields:["connected"]});var h=e.registerComponent(v,{tmpl:_});u.default=h,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("ui/output/v/0_3_2",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(o,i,l){var t=o?"["+o+"]":"";return".field-label"+t+" {font-size: 1.4rem;color: gray;}p"+t+" {margin: 0;}a"+t+" {text-decoration: var(--text-decoration);color: var(--color-text-link);}"}var _=[k];const v={classMap:{"field-label":!0},key:0},h={key:1};function d(o,i,l,t){const{d:n,t:a,h:r}=o;return[i.label?r("label",v,[a(n(i.label))]):null,r("p",h,[i.isDateTime?a(n(i.dateTimeValue)):null,i.isEmail?r("a",{attrs:{href:i.hrefEmail},key:2},[a(n(i.value))]):null,i.isNumber?a(n(i.formattedNumber)):null,i.isPhonenumber?r("a",{attrs:{href:i.hrefPhonenumber},key:3},[a(n(i.formattedPhonenumber))]):null,i.isText?a(n(i.value)):null])]}var y=e.registerTemplate(d);d.stylesheets=[],_&&d.stylesheets.push.apply(d.stylesheets,_),d.stylesheetToken="ui-output_output",e.freezeTemplate(d);function f(o){var i=(""+o).replace(/\D/g,""),l=i.match(/^(\d{3})(\d{3})(\d{4})$/);return l?"("+l[1]+") "+l[2]+"-"+l[3]:null}class g extends e.LightningElement{constructor(...i){super(...i);this.currencyCode=void 0,this.dateType=void 0,this.label=void 0,this.type="text",this.dateTimeValue=void 0,this.valuePrivate=void 0,this.moment=void 0,this._value=void 0}set value(i){this.valuePrivate=i,this.calculateDateTime()}get value(){return this.valuePrivate}get isDateTime(){return this.type==="datetime"}get isEmail(){return this.type==="email"}get isNumber(){return this.type==="number"}get isPhonenumber(){return this.type==="phone"}get isText(){return this.type==="text"}async calculateDateTime(){if(this.type==="datetime"){this.moment||(this.moment=await require("moment"));const i=this.moment(this._val);switch(this.dateType){case"weekOfYear":this.dateTimeValue=i.week();break;case"dayOfYear":this.dateTimeValue=i.dayOfYear();break;default:this.dateTimeValue=i.format("MMMM Do YYYY, h:mm:ss A")}}}get formattedNumber(){return this.valuePrivate?`${this.currencyCode} ${parseFloat(this.valuePrivate).toFixed(2)}`:" - "}get formattedPhonenumber(){return f(this.value)}get hrefPhonenumber(){return`tel:${this.value}`}get hrefEmail(){return`mailto:${this.value}`}}e.registerDecorators(g,{publicProps:{currencyCode:{config:0},dateType:{config:0},label:{config:0},type:{config:0},value:{config:3}},track:{dateTimeValue:1,valuePrivate:1},fields:["moment","_value"]});var c=e.registerComponent(g,{tmpl:y});u.default=c,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/contactListItemBubbling/v/0_0_1",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(c,o,i){var l=c?"["+c+"]":"",t=c?"["+c+"-host]":"";return(o?":host {":t+" {")+"width: 300px;}a"+l+" {display: flex;margin-left: 6px;text-decoration: var(--text-decoration);color: var(--color-text-link);}p"+l+" {margin: 0 0 8px 6px;}img"+l+" {width: 30px;height: 30px;border-radius: 50%;}"}var _=[k];const v={href:"#"},h={key:2};function d(c,o,i,l){const{b:t,h:n,d:a,t:r}=c,{_m0:p}=l;return[n("a",{attrs:v,key:0,on:{click:p||(l._m0=t(o.handleSelect))}},[n("img",{attrs:{src:o.contact.Picture,alt:"Profile photo"},key:1}),n("p",h,[r(a(o.contact.Name))])])]}var y=e.registerTemplate(d);d.stylesheets=[],_&&d.stylesheets.push.apply(d.stylesheets,_),d.stylesheetToken="example-contactListItemBubbling_contactListItemBubbling",e.freezeTemplate(d);class f extends e.LightningElement{constructor(...o){super(...o);this.contact=void 0,this.budala="Bojan"}handleSelect(o){o.preventDefault();const i=new CustomEvent("contactselect",{bubbles:!0});this.dispatchEvent(i)}}e.registerDecorators(f,{publicProps:{contact:{config:0},budala:{config:0}}});var g=e.registerComponent(f,{tmpl:y});u.default=g,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/eventBubbling/v/0_0_1",["exports","lwc/v/2_38_1","example/contactListItemBubbling/v/0_0_1","ui/output/v/0_3_2","ui/card/v/0_3_2","data/wireGetContactListProvider/v/0_0_1"],function(u,e,k,_,v,h){"use strict";function d(w){return w&&typeof w=="object"&&"default"in w?w:{default:w}}var y=d(k),f=d(_),g=d(v),c=d(h);function o(w,T,S){var L=w?"["+w+"]":"";return"img"+L+" {width: 80px;height: 80px;border-radius: 50%;margin-bottom: 8px;}recipe-contact-list-item-bubbling"+L+" {position: relative;border: solid 1px #ecebea;border-radius: 4px;display: block;margin: 15px 0;padding: 14px 2px 0 2px;}recipe-contact-list-item-bubbling"+L+":before {content: 'recipe-contact-list-item-bubbling';color: #dddbda;position: absolute;top: -16px;left: 4px;background-color: #ffffff;padding: 0 4px;}div.contacts"+L+" {display: flex;}.contact-details"+L+" {padding-left: 10px;display: block;max-width: 50%;}p"+L+" {margin: 0;}@media (max-width: 400px) {.contact-details"+L+" {padding-left: 10px;}}@media (max-width: 500px) {div.contacts"+L+" {display: block;}}@media (max-width: 900px) {.contact-list"+L+",\r .contact-details"+L+" {max-width: 100%;}}"}var i=[o];const l={props:{title:"EventBubbling"},key:0},t={classMap:{contacts:!0},key:2},n={"contact-list":!0},a={classMap:{"contact-details":!0},key:5},r={key:8},p={key:9},m={key:10},s={key:12};function b(w,T,S,L){const{b:A,k:O,c:E,i:z,h:M,d:N,t:I,fr:B}=w,{_m0:H}=L;return[E("ui-card",g.default,l,[T.contacts.data?B(1,[M("div",t,[M("div",{classMap:n,key:3,on:{contactselect:H||(L._m0=A(T.handleContactSelect))}},z(T.contacts.data,function(F){return E("example-contact-list-item-bubbling",y.default,{props:{contact:F},key:O(4,F.Id)})})),M("div",a,[T.selectedContact?B(6,[M("img",{attrs:{src:T.selectedContact.Picture,alt:"Profile photo"},key:7}),M("p",r,[I(N(T.selectedContact.Name))]),M("p",p,[I(N(T.selectedContact.Title))]),M("p",m,[E("ui-output",f.default,{props:{type:"phone",value:T.selectedContact.Phone},key:11})]),M("p",s,[E("ui-output",f.default,{props:{type:"email",value:T.selectedContact.Email},key:13})])],0):null])])],0):null])]}var P=e.registerTemplate(b);b.stylesheets=[],i&&b.stylesheets.push.apply(b.stylesheets,i),b.stylesheetToken="example-eventBubbling_eventBubbling",e.freezeTemplate(b);class x extends e.LightningElement{constructor(...T){super(...T);this.selectedContact=void 0,this.contacts={}}handleContactSelect(T){this.selectedContact=T.target.contact,alert("Test"+T.target.budala)}}e.registerDecorators(x,{wire:{contacts:{adapter:c.default,config:function(w){return{}}}},fields:["selectedContact"]});var C=e.registerComponent(x,{tmpl:P});u.default=C,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/chartBar/v/0_0_1",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(o,i,l){var t=o?"["+o+"]":"";return".container"+t+" {overflow: hidden;color: #f5b041;display: flex;margin-top: 6px;}.text"+t+" {margin-top: 5px;margin-left: 4px;}.bar"+t+" {margin-left: 4px;height: 36px;background-color: #f5b041;}"}var _=[k];const v={classMap:{container:!0},key:0},h={classMap:{text:!0},key:1},d={bar:!0};function y(o,i,l,t){const{d:n,t:a,h:r}=o;return[r("div",v,[r("div",h,[a(n(i.percentage)+"%")]),r("div",{classMap:d,style:i.style,key:2})])]}var f=e.registerTemplate(y);y.stylesheets=[],_&&y.stylesheets.push.apply(y.stylesheets,_),y.stylesheetToken="example-chartBar_chartBar",e.freezeTemplate(y);class g extends e.LightningElement{constructor(...i){super(...i);this.percentage=void 0}get style(){return`width: ${this.percentage}%`}}e.registerDecorators(g,{publicProps:{percentage:{config:0}}});var c=e.registerComponent(g,{tmpl:f});u.default=c,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/apiProperty/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","example/chartBar/v/0_0_1","ui/card/v/0_3_2"],function(u,e,k,_,v){"use strict";function h(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=h(k),y=h(_),f=h(v);const g={props:{title:"Api Property"},key:0};function c(t,n,a,r){const{b:p,c:m}=t,{_m0:s}=r;return[m("ui-card",f.default,g,[m("ui-input",d.default,{props:{label:"Percentage",type:"number",min:"0",max:"100",value:n.percentage},key:1,on:{change:s||(r._m0=p(n.handlePercentageChange))}}),m("example-chart-bar",y.default,{props:{percentage:n.percentage},key:2})])]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-apiProperty_apiProperty",e.freezeTemplate(c);class i extends e.LightningElement{constructor(...n){super(...n);this.percentage=40}handlePercentageChange(n){const a=n.target.value;this.percentage=a<=100?a:100}}e.registerDecorators(i,{fields:["percentage"]});var l=e.registerComponent(i,{tmpl:o});u.default=l,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/clock/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(u,e,k){"use strict";function _(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var v=_(k);const h={props:{title:"Clock"},key:0};function d(c,o,i,l){const{d:t,t:n,c:a}=c;return[a("ui-card",v.default,h,[n(t(o.localTime))])]}var y=e.registerTemplate(d);d.stylesheets=[],d.stylesheetToken="example-clock_clock",e.freezeTemplate(d);class f extends e.LightningElement{constructor(...o){super(...o);this.localTime=void 0}refreshclocktime(){this.localTime=new Date().toISOString()}}e.registerDecorators(f,{publicMethods:["refreshclocktime"],fields:["localTime"]});var g=e.registerComponent(f,{tmpl:y});u.default=g,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/apiFunction/v/0_0_1",["exports","lwc/v/2_38_1","example/clock/v/0_0_1","ui/card/v/0_3_2"],function(u,e,k,_){"use strict";function v(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var h=v(k),d=v(_);const y={props:{title:"Api Function"},key:0},f={label:"Refresh Time"},g={key:2};function c(t,n,a,r){const{b:p,t:m,h:s,c:b}=t,{_m0:P}=r;return[b("ui-card",d.default,y,[s("button",{attrs:f,key:1,on:{click:P||(r._m0=p(n.refreshTime))}},[m("Refresh Time")]),b("example-clock",h.default,g)])]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-apiFunction_apiFunction",e.freezeTemplate(c);class i extends e.LightningElement{refreshTime(){this.template.querySelector("example-clock").refreshclocktime()}}var l=e.registerComponent(i,{tmpl:o});u.default=l,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/todoList/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","ui/card/v/0_3_2"],function(u,e,k,_){"use strict";function v(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var h=v(k),d=v(_);const y={props:{title:"Todo List"},key:0},f={classMap:{"contact-list":!0},key:2};function g(l,t,n,a){const{b:r,c:p,d:m,t:s,i:b,h:P}=l,{_m0:x}=a;return[p("ui-card",d.default,y,[p("ui-input",h.default,{props:{label:"Priority",type:"checkbox",checked:t.priority},key:1,on:{change:x||(a._m0=r(t.priorityChanged))}}),P("div",f,b(t.todolist,function(C){return s(m(C.Id)+": "+m(C.description)+"-"+m(C.priority))}))])]}var c=e.registerTemplate(g);g.stylesheets=[],g.stylesheetToken="example-todoList_todoList",e.freezeTemplate(g);class o extends e.LightningElement{constructor(...t){super(...t);this.wholeList=[],this.filteredList=[],this.priority=!1}get todolist(){return this.doFilter(),this.filteredList}set todolist(t){this.wholeList=t}priorityChanged(t){this.priority=t.target.checked}doFilter(){this.priority?this.filteredList=this.wholeList.filter(t=>t.priority===!0):this.filteredList=this.wholeList}}e.registerDecorators(o,{publicProps:{todolist:{config:3}},fields:["wholeList","filteredList","priority"]});var i=e.registerComponent(o,{tmpl:c});u.default=i,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/apiSetterGetter/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","example/todoList/v/0_0_1","ui/card/v/0_3_2"],function(u,e,k,_,v){"use strict";function h(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=h(k),y=h(_),f=h(v);const g={props:{title:"Api Setter Getter"},key:0};function c(t,n,a,r){const{b:p,c:m,t:s,h:b}=t,{_m0:P,_m1:x,_m2:C}=r;return[m("ui-card",f.default,g,[m("ui-input",d.default,{props:{label:"Description",type:"text",value:n.description},key:1,on:{change:P||(r._m0=p(n.descriptionChanged))}}),m("ui-input",d.default,{props:{label:"Priority",type:"checkbox",checked:n.priority},key:2,on:{change:x||(r._m1=p(n.priorityChanged))}}),b("button",{key:3,on:{click:C||(r._m2=p(n.addTodo))}},[s("Add Todo")]),m("example-todo-list",y.default,{props:{todolist:n.todos},key:4})])]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-apiSetterGetter_apiSetterGetter",e.freezeTemplate(c);class i extends e.LightningElement{constructor(...n){super(...n);this.lastId=1,this.description="",this.priority=!1,this.todos=[]}addTodo(){const n={Id:this.lastId++,description:this.description,priority:this.priority};this.todos.push(n)}descriptionChanged(n){this.description=n.target.value}priorityChanged(n){this.priority=n.target.checked}}e.registerDecorators(i,{track:{todos:1},fields:["lastId","description","priority"]});var l=e.registerComponent(i,{tmpl:o});u.default=l,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/mortgage/v/0_0_1",["exports"],function(u){"use strict";const e=()=>[{label:"20 years",value:20},{label:"25 years",value:25},{label:"30 years",value:30},{label:"35 years",value:35},{label:"40 years",value:40}],k=(_,v,h)=>{if(_&&v&&h&&h>0){const d=h/100/12;return _*d/(1-Math.pow(1/(1+d),v*12))}return 0};u.calculateMonthlyPayment=k,u.getTermOptions=e,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("ui/select/v/0_3_2",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(c,o,i){var l=c?"["+c+"]":"";return".field-label"+l+" {font-size: 1.4rem;color: gray;display: block;}select"+l+" {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 178px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}"}var _=[k];const v={key:0},h={classMap:{"field-label":!0},key:1};function d(c,o,i,l){const{d:t,t:n,h:a,b:r,k:p,i:m}=c,{_m0:s}=l;return[a("div",v,[a("label",h,[n(t(o.label))]),a("select",{key:2,on:{change:s||(l._m0=r(o.handleChange))}},m(o.options,function(b){return a("option",{key:p(3,b.value)},[n(t(b.label))])}))])]}var y=e.registerTemplate(d);d.stylesheets=[],_&&d.stylesheets.push.apply(d.stylesheets,_),d.stylesheetToken="ui-select_select",e.freezeTemplate(d);class f extends e.LightningElement{constructor(...o){super(...o);this.label=void 0,this.options=void 0,this.currentValue=void 0}set value(o){this.currentValue=o}get value(){return this.currentValue}handleChange(o){this.currentValue=this.options[o.target.selectedIndex].value,this.dispatchEvent(new CustomEvent("change"))}}e.registerDecorators(f,{publicProps:{label:{config:0},options:{config:0},value:{config:3}},track:{currentValue:1}});var g=e.registerComponent(f,{tmpl:y});u.default=g,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/miscSharedJavascript/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","ui/select/v/0_3_2","ui/card/v/0_3_2","example/mortgage/v/0_0_1"],function(u,e,k,_,v,h){"use strict";function d(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var y=d(k),f=d(_),g=d(v);const c={props:{title:"Misc Shared JavaScript"},key:0},o={key:5};function i(a,r,p,m){const{b:s,c:b,t:P,h:x,d:C}=a,{_m0:w,_m1:T,_m2:S,_m3:L}=m;return[b("ui-card",g.default,c,[b("ui-input",y.default,{props:{label:"Principal",type:"number",value:r.principal},key:1,on:{change:w||(m._m0=s(r.principalChanged))}}),b("ui-select",f.default,{props:{label:"Term",value:r.term,options:r.termOptions},key:2,on:{change:T||(m._m1=s(r.termChanged))}}),b("ui-input",y.default,{props:{label:"Rate",type:"number",value:r.rate},key:3,on:{change:S||(m._m2=s(r.rateChanged))}}),x("button",{key:4,on:{click:L||(m._m3=s(r.calculate))}},[P("Calculate")]),x("div",o,[P(C(r.monthlyAmount))])])]}var l=e.registerTemplate(i);i.stylesheets=[],i.stylesheetToken="example-miscSharedJavascript_miscSharedJavascript",e.freezeTemplate(i);class t extends e.LightningElement{constructor(...r){super(...r);this.principal=1e5,this.term=20,this.rate=5,this.monthlyAmount=0,this.termOptions=h.getTermOptions()}principalChanged(r){this.principal=r.target.value}termChanged(r){this.term=r.target.value}rateChanged(r){this.rate=r.target.value}calculate(){this.monthlyAmount=h.calculateMonthlyPayment(this.principal,this.term,this.rate)}}e.registerDecorators(t,{track:{monthlyAmount:1},fields:["principal","term","rate","termOptions"]});var n=e.registerComponent(t,{tmpl:l});u.default=n,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/miscRestApiCall/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","ui/card/v/0_3_2"],function(u,e,k,_){"use strict";function v(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var h=v(k),d=v(_);const y={props:{title:"Misc Rest Api Call"},key:0},f={key:4},g={"search-results":!0};function c(n,a,r,p){const{t:m,b:s,c:b,h:P,k:x,d:C,i:w,fr:T}=n,{_m0:S,_m1:L}=p;return[b("ui-card",d.default,y,[m("Search Books"),b("ui-input",h.default,{props:{label:"Search Books",type:"text",value:a.searchText},key:1,on:{change:S||(p._m0=s(a.searchTextChanged))}}),P("button",{key:2,on:{click:L||(p._m1=s(a.search))}},[m("Search")]),a.books?T(3,[P("ul",f,w(a.books.items,function(A){return P("li",{classMap:g,key:x(5,A.id)},[m(C(A.volumeInfo.title))])}))],0):null,a.error?T(6,[m(C(a.error))],0):null])]}var o=e.registerTemplate(c);c.stylesheets=[],c.stylesheetToken="example-miscRestApiCall_miscRestApiCall",e.freezeTemplate(c);const i="https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=";class l extends e.LightningElement{constructor(...a){super(...a);this.searchText="Harry Potter",this.books=void 0}searchTextChanged(a){this.searchText=a.target.value}search(){fetch(i+this.searchText).then(a=>{if(a.ok)return a.json();throw Error(a)}).then(a=>{alert("resp: "+JSON.stringify(a)),this.books=a}).catch(a=>{this.error=a,this.books=void 0})}}e.registerDecorators(l,{fields:["searchText","books"]});var t=e.registerComponent(l,{tmpl:o});u.default=t,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("ui/input/v/0_3_2",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(r,p,m){var s=r?"["+r+"]":"";return".field-label"+s+" {font-size: 1.4rem;color: gray;display: block;}div.checkbox"+s+" {display: block;padding-bottom: 8px;position: relative;}div.checkbox"+s+" input"+s+" {position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;}div.checkbox"+s+" .checkbox-label"+s+" > span"+s+" {float: none;padding-left: 2rem;}div.checkbox"+s+" span.checkbox"+s+" {position: absolute;top: 0;left: 0;height: 18px;width: 18px;margin-top: 5px;background-color: #eee;}div.checkbox"+s+" span.checkbox:hover"+s+" {background-color: #ccc;}div.checkbox"+s+" span.checkbox.checked"+s+" {background-color: var(--button-color-bg);}.input"+s+" {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 170px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}"}var _=[k];const v=e.parseFragment`<input type="checkbox"${3}>`,h={key:0},d={classMap:{"field-label":!0},key:1},y={key:2},f={input:!0},g={classMap:{checkbox:!0},key:4},c={checkbox:!0},o={classMap:{"checkbox-label":!0},key:8},i={key:9};function l(r,p,m,s){const{d:b,t:P,h:x,b:C,st:w}=r,{_m0:T,_m1:S,_m2:L}=s;return[x("div",h,[p.isCheckboxField?null:x("label",d,[P(b(p.label))]),x("div",y,[p.isCheckboxField?null:x("input",{classMap:f,attrs:{type:p.type},props:{value:p.valuePrivate},key:3,on:{keyup:T||(s._m0=C(p.keyupHandler)),change:S||(s._m1=C(p.changeHandler))}}),p.isCheckboxField?x("div",g,[w(v(),6),x("span",{classMap:c,key:7,on:{click:L||(s._m2=C(p.changeCheckboxHandler))}}),x("label",o,[x("span",i,[P(b(p.label))])])]):null])])]}var t=e.registerTemplate(l);l.stylesheets=[],_&&l.stylesheets.push.apply(l.stylesheets,_),l.stylesheetToken="ui-input_input",e.freezeTemplate(l);class n extends e.LightningElement{constructor(...p){super(...p);this.disabled=void 0,this.label=void 0,this.max=void 0,this.min=void 0,this.name=void 0,this.type="text",this.valuePrivate="",this._checked=!1}set checked(p){this._checked=p}get checked(){return this._checked}set value(p){this.valuePrivate=this._value=p!==void 0?p:""}get value(){return this._value}changeHandler(p){this._value=this.calculateValue(p.target.value),this.dispatchEvent(new CustomEvent("change"))}changeCheckboxHandler(){this._checked=!this._checked;const p=this.template.querySelector("div.checkbox span");this._checked?p.classList.add("checked"):p.classList.remove("checked"),this.dispatchEvent(new CustomEvent("change"))}keyupHandler(p){this._value=this.calculateValue(p.target.value),this.dispatchEvent(new CustomEvent("change"))}get isCheckboxField(){return this.type==="checkbox"}get isNumberField(){return this.type==="number"}get isPasswordField(){return this.type==="password"}get isSearchField(){return this.type==="search"}get isTextField(){return this.type==="password"||this.type==="text"||this.type==="search"}calculateValue(p){if(this.type!=="number")return p;let m=Number(p);const s=Number(this.max),b=Number(this.min);return this.max&&p>s?m=s:this.min&&p<b&&(m=b),m}}e.registerDecorators(n,{publicProps:{checked:{config:3},disabled:{config:0},label:{config:0},max:{config:0},min:{config:0},name:{config:0},type:{config:0},value:{config:3}},track:{valuePrivate:1},fields:["_checked"]});var a=e.registerComponent(n,{tmpl:t});u.default=a,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/miscDomQuery/v/0_0_1",["exports","lwc/v/2_38_1","ui/input/v/0_3_2","ui/card/v/0_3_2"],function(u,e,k,_){"use strict";function v(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var h=v(k),d=v(_);const y={props:{title:"Misc Dom Query"},key:0},f={label:"Category 1",type:"checkbox"},g={label:"Category 2",type:"checkbox"},c={label:"Category 3",type:"checkbox"},o={key:4};function i(a,r,p,m){const{b:s,c:b,d:P,t:x,h:C}=a,{_m0:w,_m1:T,_m2:S}=m;return[b("ui-card",d.default,y,[b("ui-input",h.default,{props:f,key:1,on:{change:w||(m._m0=s(r.categorySelected))}}),b("ui-input",h.default,{props:g,key:2,on:{change:T||(m._m1=s(r.categorySelected))}}),b("ui-input",h.default,{props:c,key:3,on:{change:S||(m._m2=s(r.categorySelected))}}),C("p",o,[x("Selections: "+P(r.selection))])])]}var l=e.registerTemplate(i);i.stylesheets=[],i.stylesheetToken="example-miscDomQuery_miscDomQuery",e.freezeTemplate(i);class t extends e.LightningElement{constructor(...r){super(...r);this.selection=void 0}categorySelected(){const r=Array.from(this.template.querySelectorAll("ui-input")).filter(p=>p.checked).map(p=>p.label);this.selection=r.join(", ")}}e.registerDecorators(t,{fields:["selection"]});var n=e.registerComponent(t,{tmpl:l});u.default=n,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("ui/card/v/0_3_2",["exports","lwc/v/2_38_1"],function(u,e){"use strict";function k(r,p,m){var s=r?"["+r+"]":"";return"@media (min-width: 48em) {.card"+s+" {padding: 2rem;}}.card"+s+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 600px;}.card"+s+" .card-header"+s+",.card"+s+" .card-body"+s+",.card"+s+" .card-footer"+s+" {padding: 0.8rem;padding-bottom: 0;}.card"+s+" .card-header:last-child"+s+",.card"+s+" .card-body:last-child"+s+",.card"+s+" .card-footer:last-child"+s+" {padding-bottom: 0.8rem;}.card"+s+" .card-body"+s+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}.card"+s+" .card-image"+s+" {padding-top: 0.8rem;}.card"+s+" .card-image:first-child"+s+" {padding-top: 0;}.card"+s+" .card-image:first-child"+s+" img"+s+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}.card"+s+" .card-image:last-child"+s+" img"+s+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}.card"+s+" .card-title"+s+" {font-size: 2rem;font-weight: 800;}.card"+s+" .card-footer"+s+" {vertical-align: bottom;}@media (max-width: 380px) {.card"+s+" .card-title"+s+" {font-size: 1.6rem;font-weight: 600;}}"}var _=[k];const v={classMap:{card:!0},key:0},h={classMap:{"card-header":!0},key:1},d={classMap:{"card-title":!0},key:2},y={classMap:{"card-subtitle":!0},key:3},f={classMap:{"card-body":!0},key:4},g={key:5},c=[],o={classMap:{"card-footer":!0},key:6},i={attrs:{name:"footer"},key:7};function l(r,p,m,s){const{d:b,t:P,h:x,s:C}=r;return[x("div",v,[x("div",h,[p.title?x("div",d,[P(b(p.title))]):null,p.subtitle?x("div",y,[P(b(p.subtitle))]):null]),x("div",f,[C("",g,c,m)]),x("div",o,[C("footer",i,c,m)])])]}var t=e.registerTemplate(l);l.slots=["","footer"],l.stylesheets=[],_&&l.stylesheets.push.apply(l.stylesheets,_),l.stylesheetToken="ui-card_card",e.freezeTemplate(l);class n extends e.LightningElement{constructor(...p){super(...p);this.imageUrl=void 0,this.title=void 0,this.subtitle=void 0}get showHeader(){return this.title&&this.subtitle}get showImage(){return this.imageUrl!==void 0&&this.imageUrl.length>0}}e.registerDecorators(n,{publicProps:{imageUrl:{config:0},title:{config:0},subtitle:{config:0}}});var a=e.registerComponent(n,{tmpl:t});u.default=a,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/miscMultipleTemplates/v/0_0_1",["exports","lwc/v/2_38_1","ui/card/v/0_3_2"],function(u,e,k){"use strict";function _(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var v=_(k),h=void 0;const d=e.parseFragment`<p${3}>Template 1</p>`,y={props:{title:"Misc Multiple Templates"},key:0};function f(a,r,p,m){const{st:s,b,t:P,h:x,c:C}=a,{_m0:w}=m;return[C("ui-card",v.default,y,[s(d(),2),x("button",{key:3,on:{click:w||(m._m0=b(r.switchTemplate))}},[P("Switch")])])]}var g=e.registerTemplate(f);f.stylesheets=[],f.stylesheetToken="example-miscMultipleTemplates_template1",e.freezeTemplate(f);const c=e.parseFragment`<p${3}>Template 2</p>`,o={props:{title:"Misc Multiple Templates"},key:0};function i(a,r,p,m){const{st:s,b,t:P,h:x,c:C}=a,{_m0:w}=m;return[C("ui-card",v.default,o,[s(c(),2),x("button",{key:3,on:{click:w||(m._m0=b(r.switchTemplate))}},[P("Switch")])])]}var l=e.registerTemplate(i);i.stylesheets=[],i.stylesheetToken="example-miscMultipleTemplates_template2",e.freezeTemplate(i);class t extends e.LightningElement{constructor(...r){super(...r);this.templateOneSelected=!0}render(){return this.templateOneSelected?g:l}switchTemplate(){this.templateOneSelected=!this.templateOneSelected}}e.registerDecorators(t,{fields:["templateOneSelected"]});var n=e.registerComponent(t,{tmpl:h});u.default=n,Object.defineProperty(u,"__esModule",{value:!0})}),LWR.define("example/app/v/0_0_1",["exports","lwc/v/2_38_1","example/miscMultipleTemplates/v/0_0_1","example/miscDomQuery/v/0_0_1","example/miscRestApiCall/v/0_0_1","example/miscSharedJavascript/v/0_0_1","example/apiSetterGetter/v/0_0_1","example/apiFunction/v/0_0_1","example/apiProperty/v/0_0_1","example/eventBubbling/v/0_0_1","example/eventWithData/v/0_0_1","example/hello/v/0_0_1","example/eventSimple/v/0_0_1"],function(u,e,k,_,v,h,d,y,f,g,c,o,i){"use strict";function l(j){return j&&typeof j=="object"&&"default"in j?j:{default:j}}var t=l(k),n=l(_),a=l(v),r=l(h),p=l(d),m=l(y),s=l(f),b=l(g),P=l(c),x=l(o),C=l(i);function w(j,ne,oe){var V=j?"["+j+"]":"";return"main"+V+" {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1"+V+" {color: #1798c1;}"}var T=[w];const S=e.parseFragment`<img src="/assets/recipes-logo.png" alt="logo"${3}>`,L=e.parseFragment`<h1${3}>Hello World!</h1>`,A={key:0},O={key:1},E={key:2},z={key:3},M={key:4},N={key:5},I={key:6},B={key:7},H={key:8},F={key:9},U={key:10},G={key:11},Q={key:12},Y={key:13},q={key:14},K={key:15},X={key:16},Z={key:17},$={key:18},ee={key:23},te={key:24},ae={key:25},ie={key:26};function W(j,ne,oe,V){const{c:R,h:D,st:J}=j;return[D("main",A,[D("div",O,[R("example-misc-multiple-templates",t.default,E)]),D("div",z,[R("example-misc-dom-query",n.default,M)]),D("div",N,[R("example-misc-rest-api-call",a.default,I)]),D("div",B,[R("example-misc-shared-javascript",r.default,H)]),D("div",F,[R("example-api-setter-getter",p.default,U)]),D("div",G,[R("example-api-function",m.default,Q)]),D("div",Y,[R("example-api-property",s.default,q)]),D("div",K,[R("example-event-bubbling",b.default,X)]),D("div",Z,[R("example-event-with-data",P.default,$)]),J(S(),20),J(L(),22),D("div",ee,[R("example-hello",x.default,te)]),D("div",ae,[R("example-event-simple",C.default,ie)])])]}var se=e.registerTemplate(W);W.stylesheets=[],T&&W.stylesheets.push.apply(W.stylesheets,T),W.stylesheetToken="example-app_app",e.freezeTemplate(W);class re extends e.LightningElement{}var le=e.registerComponent(re,{tmpl:se});u.default=le,Object.defineProperty(u,"__esModule",{value:!0})});
