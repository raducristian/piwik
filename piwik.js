/*
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html Gpl v3 or later
 * @version $Id$
 */
var Piwik,piwik_log,piwik_track;if(!this.Piwik){Piwik=(function(){var b,f={},d=document,c=navigator,g=screen,l=window,i=l.location.hostname,h=false,o=[];function n(q){return typeof q!=="undefined"}function e(t,s,r,q){if(t.addEventListener){t.addEventListener(s,r,q);return true}else{if(t.attachEvent){return t.attachEvent("on"+s,r)}}t["on"+s]=r}function k(r,u){var q="",t,s;for(t in f){s=f[t][r];if(typeof s==="function"){q+=s(u)}}return q}function m(q){if(n(b)){var r;do{r=new Date()}while(r.getTime()<b)}k("unload")}function p(r){if(!h){h=true;k("load");for(var q=0;q<o.length;q++){o[q]()}}return true}function a(){if(d.addEventListener){e(d,"DOMContentLoaded",function(){d.removeEventListener("DOMContentLoaded",arguments.callee,false);p()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",arguments.callee);
p()}});if(d.documentElement.doScroll&&l==l.top){(function(){if(h){return}try{d.documentElement.doScroll("left")}catch(q){setTimeout(arguments.callee,0);return}p()}())}}}e(l,"load",p,false)}function j(R,Q){var F=R||"",aa=Q||"",v=d.location.href,Z=d.title,H="7z|aac|arc|arj|asf|asx|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wma|wmv|wpd||xls|xml|z|zip",S=[i],u=[],T=[],U=[],E=500,P,z="0",x,D={pdf:["pdf","application/pdf","0"],quicktime:["qt","video/quicktime","0"],realplayer:["realp","audio/x-pn-realaudio-plugin","0"],wma:["wma","application/x-mplayer2","0"],director:["dir","application/x-director","0"],flash:["fla","application/x-shockwave-flash","0"],java:["java","application/x-java-vm","0"],gears:["gears","application/x-googlegears","0"],silverlight:["ag","application/x-silverlight","0"]},L=false,s=l.encodeURIComponent||escape,X=l.decodeURIComponent||unescape,ab=function(ae){var ah=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g"),af={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function ac(ai){ah.lastIndex=0;return ah.test(ai)?'"'+ai.replace(ah,function(aj){var ak=af[aj];return typeof ak==="string"?ak:"\\u"+("0000"+aj.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+ai+'"'}function ad(ai){return ai<10?"0"+ai:ai}function ag(an,am){var al,ak,aj,ai,ao=am[an];if(ao===null){return"null"}if(ao&&typeof ao==="object"&&typeof ao.toJSON==="function"){ao=ao.toJSON(an)}switch(typeof ao){case"string":return ac(ao);case"number":return isFinite(ao)?String(ao):"null";case"boolean":case"null":return String(ao);case"object":ai=[];if(ao instanceof Array){for(al=0;al<ao.length;al++){ai[al]=ag(al,ao)||"null"}aj=ai.length===0?"[]":"["+ai.join(",")+"]";return aj}if(ao instanceof Date){return ac(ao.getUTCFullYear()+"-"+ad(ao.getUTCMonth()+1)+"-"+ad(ao.getUTCDate())+"T"+ad(ao.getUTCHours())+":"+ad(ao.getUTCMinutes())+":"+ad(ao.getUTCSeconds())+"Z")}for(ak in ao){aj=ag(ak,ao);if(aj){ai[ai.length]=ac(ak)+":"+aj}}aj=ai.length===0?"{}":"{"+ai.join(",")+"}";return aj}}return ag("",{"":ae})},w={};
function A(ai,af,ad,ah,ae,ag){var ac;if(ad){ac=new Date();ac.setTime(ac.getTime()+ad*86400000)}d.cookie=ai+"="+s(af)+(ad?";expires="+ac.toGMTString():"")+";path="+(ah?ah:"/")+(ae?";domain="+ae:"")+(ag?";secure":"")}function t(ae){var ac=new RegExp("(^|;)[ ]*"+ae+"=([^;]*)"),ad=ac.exec(d.cookie);return ad?X(ad[2]):0}function q(ae,ad){var ac=new Date(),af=new Image(1,1);b=ac.getTime()+ad;af.onLoad=function(){};af.src=ae}function B(){var ac,ad;if(typeof c.javaEnabled!=="undefined"&&c.javaEnabled()){D.java[2]="1"}if(typeof l.GearsFactory==="function"){D.gears[2]="1"}if(c.mimeTypes&&c.mimeTypes.length){for(ac in D){ad=c.mimeTypes[D[ac][1]];if(ad&&ad.enabledPlugin){D[ac][2]="1"}}}}function J(){var ac="";try{ac=top.document.referrer}catch(ae){if(parent){try{ac=parent.document.referrer}catch(ad){ac=""}}}if(ac===""){ac=d.referrer}return ac}function O(){var ac="_pk_testcookie";if(!n(c.cookieEnabled)){A(ac,"1");return t(ac)=="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function I(){var ad,ac,ae;ac=new Date();
ae="idsite="+aa+"&url="+s(v)+"&res="+g.width+"x"+g.height+"&h="+ac.getHours()+"&m="+ac.getMinutes()+"&s="+ac.getSeconds()+"&cookie="+z+"&urlref="+s(x)+"&rand="+Math.random();for(ad in D){ae+="&"+D[ad][0]+"="+D[ad][2]}ae=F+"?"+ae;return ae}function r(){var ac=I();ac+="&action_name="+s(Z);if(n(P)){ac+="&data="+s(ab(P))}ac+=k("log");q(ac,E)}function W(ac,af,ae){var ad=I();ad+="&idgoal="+ac;if(n(af)&&af!==null){ad+="&revenue="+af}if(n(ae)){if(ae!==null){ad+="&data="+s(ab(ae))}}else{if(n(P)){ad+="&data="+s(ab(P))}}ad+=k("goal");q(ad,E)}function C(ad,ac,af){var ae;ae="idsite="+aa+"&"+ac+"="+s(ad)+"&rand="+Math.random()+"&redirect=0";if(n(af)){if(af!==null){ae+="&data="+s(ab(af))}}else{if(n(P)){ae+="&data="+s(ab(P))}}ae+=k("click");ae=F+"?"+ae;q(ae,E)}function M(af){var ad,ac,ae;for(ad=0;ad<S.length;ad++){ac=S[ad];if(af==ac){return true}if(ac.substr(0,2)=="*."){if((af)==ac.substr(2)){return true}ae=af.length-ac.length+1;if((ae>0)&&(af.substr(ae)==ac.substr(1))){return true}}}return false}function N(ae,ad){var af,ac="(^| )(piwik[_-]"+ad;
if(n(ae)){for(af=0;af<ae.length;af++){ac+="|"+ae[af]}}ac+=")( |$)";return new RegExp(ac)}function Y(af,ac,ag){if(!ag){return"link"}var ae=N(T,"download"),ad=N(U,"link"),ah=new RegExp("\\.("+H+")([?&#]|$)","i");return ad.test(af)?"link":(ae.test(af)||ah.test(ac)?"download":0)}function G(aj){var ad,ai,ak,ac;if(!n(aj)){aj=l.event}if(n(aj.target)){ad=aj.target}else{if(n(aj.srcElement)){ad=aj.srcElement}else{return}}while((ai=ad.parentNode)&&((ak=ad.tagName)!="A"&&ak!="AREA")){ad=ai}if(n(ad.href)){var ah=ad.hostname,af=ah.toLowerCase(),ae=ad.href.replace(ah,af),ag=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i");if(!ag.test(ae)){ac=Y(ad.className,ae,M(af));if(ac){C(ae,ac)}}}}function V(ac){e(ac,"click",G,false)}function K(){if(!L){L=true;var ad,ac=N(u,"ignore"),ae=d.links;if(ae){for(ad=0;ad<ae.length;ad++){if(!ac.test(ae[ad].className)){V(ae[ad])}}}}}function y(ad,ac){var ae=null;if(typeof ad=="string"&&!n(w[ad])){if(typeof ac=="object"){ae=ac}else{if(typeof ac=="string"){try{eval("hookObj ="+ac)
}catch(af){}}}w[ad]=ae}return ae}x=J();z=O();B();k("run",y);return{hook:w,getHook:function(ac){return w[ac]},setTrackerUrl:function(ac){if(n(ac)){F=ac}},setSiteId:function(ac){if(n(ac)){aa=ac}},setCustomData:function(ac){if(n(ac)){P=ac}},setLinkTrackingTimer:function(ac){if(n(ac)){E=ac}},setDownloadExtensions:function(ac){if(n(ac)){H=ac}},addDownloadExtensions:function(ac){if(n(ac)){H+="|"+ac}},setDomains:function(ac){if(typeof ac=="object"&&ac instanceof Array){S=ac;S[S.length]=i}else{if(typeof ac=="string"){S=[ac,i]}}},setIgnoreClasses:function(ac){if(typeof ac=="object"&&ac instanceof Array){u=ac}else{if(typeof ac=="string"){u=[ac]}}},setCustomUrl:function(ac){if(n(ac)){v=ac}},setDocumentTitle:function(ac){if(n(ac)){Z=ac}},setDownloadClasses:function(ac){if(typeof ac=="object"&&ac instanceof Array){T=ac}else{if(typeof ac=="string"){T=[ac]}}},setDownloadClass:function(ac){if(typeof ac=="string"){T=[ac]}},setLinkClasses:function(ac){if(typeof ac=="object"&&ac instanceof Array){U=ac}else{if(typeof ac=="string"){U=[ac]
}}},setLinkClass:function(ac){if(typeof ac=="string"){U=[ac]}},addListener:function(ac){if(n(ac)){V(ac)}},enableLinkTracking:function(){if(h){K()}else{o[o.length]=function(){K()}}},trackGoal:function(ac,ae,ad){W(ac,ae,ad)},trackLink:function(ad,ac,ae){C(ad,ac,ae)},trackPageView:function(){r()}}}e(l,"beforeunload",m,false);a();return{addPlugin:function(q,r){f[q]=r},getTracker:function(q,r){return new j(q,r)}}}());piwik_log=function(b,e,c,f){function a(g){try{return eval("piwik_"+g)}catch(h){}return}var d=Piwik.getTracker(c,e);d.setDocumentTitle(b);d.setCustomData(f);d.setLinkTrackingTimer(a("tracker_pause"));d.setDownloadExtensions(a("download_extensions"));d.setDomains(a("hosts_alias"));d.setIgnoreClasses(a("ignore_classes"));d.trackPageView();if(a("install_tracker")!==false){piwik_track=function(h,j,i,g){d.setSiteId(j);d.setTrackerUrl(i);d.trackLink(h,g)};d.enableLinkTracking()}}};