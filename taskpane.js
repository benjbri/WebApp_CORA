!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=307)}({307:function(e,t,n){"use strict";n.r(t),n.d(t,"run",(function(){return a}));var o,r;n(308),n(309),n(310);function i(e,t,n,o,r,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var s=e.apply(t,n);function a(e){i(s,o,r,a,c,"next",e)}function c(e){i(s,o,r,a,c,"throw",e)}a(void 0)}))}}function a(){return c.apply(this,arguments)}function c(){return(c=s(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Office.context.mailbox.item,Office.context.mailbox.item.from.emailAddress,Office.context.mailbox.item.sender.emailAddress,n="[CORA] FW: "+t.subject,"By this email I am forwarding your email to our CORA Representative for response.","benjamin.britton@flydenver.com",r={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"This email was forwarded for CORA.",icon:"Icon.80x80",persistent:!0},Office.context.mailbox.item.notificationMessages.replaceAsync("action",r),Office.initialize=function(e){$(document).ready((function(){app.initialize()}))};try{t=Office.cast.item.toItemRead(Office.context.mailbox.item),o=new m("benjamin.britton@flydenver.com",n,"By this email I am forwarding your email to our CORA Representative for response.",t.itemId),Office.context.mailbox.makeEwsRequestAsync(l(t.itemId),d)}catch(e){document.getElementById("item-console").innerHTML="Error! "+status+"[in beginForwardEmail()]:"+e}event.completed();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n,o){this.to=e,this.subject=t,this.body=n,this.sourceid=o}function l(e){return'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"               xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"               xmlns:xsd="http://www.w3.org/2001/XMLSchema"               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">  <soap:Header>    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />  </soap:Header>  <soap:Body>    <GetItem                xmlns="http://schemas.microsoft.com/exchange/services/2006/messages"                xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">      <ItemShape>        <t:BaseShape>IdOnly</t:BaseShape>      </ItemShape>      <ItemIds>        <t:ItemId Id="'+e+'"/>      </ItemIds>    </GetItem>  </soap:Body></soap:Envelope>'}function d(e){if(document.getElementById("item-console").innerHTML="GetItemCallback",null!=e)if(null!=e.error)document.getElementById("item-console").innerHTML="Error139",e.error.message;else{var t,n,i=null;try{var s=$.parseXML(e.value),a=$(s);a&&(i=a.filterNode("t:ItemId")[0])}catch(e){t=e}if(!i)return void(document.getElementById("item-console").innerHTML=t?"Error! [in getItemDataCallback]: Failed to retrieve item data ("+t+")":"Error! [in getItemDataCallback]: Failed to retrieve item data");r=i.getAttribute("ChangeKey");var c="";n=o.to.split(",");for(var m=0;m<n.length;m++)c+="<t:Mailbox><t:EmailAddress>"+n[m].trim()+"</t:EmailAddress></t:Mailbox>";document.getElementById("item-console").innerHTML="Addresses Assigned",Office.context.mailbox.makeEwsRequestAsync(function(e,t,n,o,r){return'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"               xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"               xmlns:xsd="http://www.w3.org/2001/XMLSchema"               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">  <soap:Header>    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />  </soap:Header>  <soap:Body>    <m:CreateItem MessageDisposition="SendAndSaveCopy">      <m:Items>        <t:ForwardItem>         <t:Subject>'+e+"</t:Subject>          <t:ToRecipients>"+n+'</t:ToRecipients>          <t:ReferenceItemId Id="'+t+'" ChangeKey="'+o+'" />          <t:NewBodyContent BodyType="HTML">'+r+"</t:NewBodyContent>        </t:ForwardItem>      </m:Items>    </m:CreateItem>  </soap:Body></soap:Envelope>"}(o.subject,o.sourceid,c,r,o.body),u),document.getElementById("item-console").innerHTML="Submitting Forward."}else document.getElementById("item-console").innerHTML="Error134"}function u(e){if(null!=e)if(null!=e.error)app.showNotification("Error!","[in forwardItemCallback]: "+e.error.message);else{var t,n=null;try{var o=$.parseXML(e.value),r=$(o);r&&(n=r.filterNode("m:ResponseCode")[0])}catch(e){t=e}if(!n)return void(document.getElementById("item-console").innerHTML=t?"Error! [in forwardItemCallback]: "+t:"Error! [in forwardItemCallback]: Failed to parse response");"NoError"==n.textContent?document.getElementById("item-console").innerHTML="The email has been forwarded.":document.getElementById("item-console").innerHTML="Error! [in forwardItemCallback]:"+n.textContent}else app.showNotification("Error!","[in forwardItemCallback]: null result")}Office.onReady((function(e){e.host===Office.HostType.Outlook&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=a);var t=Office.context.mailbox.item,n=(Office.context.mailbox.item.from.emailAddress,Office.context.mailbox.item.sender.emailAddress),o=t.subject;document.getElementById("item-to").innerHTML=""+n,document.getElementById("item-from").innerHTML="<br>benjamin.britton@flydenver.com",document.getElementById("item-subject").innerHTML=""+o})),jQuery.fn.filterNode=function(e){return this.find("*").filter((function(){return this.nodeName===e}))}},308:function(e,t,n){e.exports=n.p+"assets/icon-16.png"},309:function(e,t,n){e.exports=n.p+"assets/icon-32.png"},310:function(e,t,n){e.exports=n.p+"assets/icon-80.png"}});
//# sourceMappingURL=taskpane.js.map