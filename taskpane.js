!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=307)}({307:function(e,t,n){"use strict";n.r(t),n.d(t,"run",(function(){return i}));n(308),n(309),n(310);function o(e,t,n,o,r,i,c){try{var s=e[i](c),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var c=e.apply(t,n);function s(e){o(c,r,i,s,u,"next",e)}function u(e){o(c,r,i,s,u,"throw",e)}s(void 0)}))}}function i(){return c.apply(this,arguments)}function c(){return(c=r(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Office.context.mailbox.item,Office.context.mailbox.item.from.emailAddress,Office.context.mailbox.item.sender.emailAddress,"[CORA] FW: "+t.subject,"this is the body","",n={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"Response sent ",icon:"Icon.80x80",persistent:!0},Office.context.mailbox.item.notificationMessages.replaceAsync("action",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Office.onReady((function(e){e.host===Office.HostType.Outlook&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=i);var t=Office.context.mailbox.item,n=Office.context.mailbox.item.from.emailAddress,o=Office.context.mailbox.item.sender.emailAddress,r=t.subject;document.getElementById("item-to").innerHTML=""+o,document.getElementById("item-from").innerHTML=""+n,document.getElementById("item-subject").innerHTML=""+r}))},308:function(e,t,n){e.exports=n.p+"assets/icon-16.png"},309:function(e,t,n){e.exports=n.p+"assets/icon-32.png"},310:function(e,t,n){e.exports=n.p+"assets/icon-80.png"}});
//# sourceMappingURL=taskpane.js.map