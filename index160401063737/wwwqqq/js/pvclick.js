// JavaScript Document
function _sohu_pvinsight_click(a,b){__pvFun.sendArrayNum=b,__pvFun.addEvent(document,"mousedown",__pvFun.addMouseData),__pvFun.addEvent(window,"blur",__pvFun.sendMouseDatas),typeof window.onbeforeunload=="function"?__pvFun.addEvent(window,"beforeunload",__pvFun.sendMouseDatas):__pvFun.addEvent(window,"unload",__pvFun.sendMouseDatas),setInterval(__pvFun.sendMouseDatas,a)}var __pvFun={mouse_datas:[],sendArrayNum:5,addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c](window.event)},a.attachEvent("on"+b,a[b+c]))},sendAjaxGet:function(a){var b=!1,c=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(var d=0;d<c.length;++d){try{b=c[d]()}catch(e){continue}break}b.open("GET",a,!0),b.onreadystatechange=function(){b.readyState!=4},b.send()},addMouseData:function(a){a||(a=window.event);var b=a.target||a.srcElement,c=a.pageX||a.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),d=a.pageY||a.clientY+(document.documentElement.scrollTop||document.body.scrollTop),e="",f="",g="";b.nodeName=="A"&&(e=b.href.replace(/https?:\/\//gi,""),f=b.innerHTML);if(b.nodeName=="FONT"||b.nodeName=="IMG")b.parentNode&&b.parentNode.nodeName=="A"&&(e=b.parentNode.href.replace(/https?:\/\//gi,""),f=b.innerHTML.replace(/<\s?FONT[^>]*>/gi,"")),b.nodeName=="IMG"&&(g=b.src.replace(/https?:\/\//gi,""));e=typeof encodeURI=="function"?encodeURI(e):e;var h=0,i=0;window.innerWidth?h=window.innerWidth:document.body&&document.body.clientWidth&&(h=document.body.clientWidth),window.innerHeight?i=window.innerHeight:document.body&&document.body.clientHeight&&(i=document.body.clientHeight);var j="?d?="+h+"_"+i+"_"+(c-h/2)+"_"+d+"_"+(new Date).getTime();j+="_/t__"+f+"_/i__"+g+"_/u__"+e,__pvFun.mouse_datas.push(j),__pvFun.mouse_datas.length>=__pvFun.sendArrayNum&&__pvFun.sendMouseDatas()},sendMouseDatas:function(){if(__pvFun.mouse_datas.length!=0){var a=__pvFun.mouse_datas.join("");__pvFun.mouse_datas=[];var b=typeof encodeURI=="function"?encodeURI(document.referrer):document.referrer;b=b.replace(/https?:\/\//gi,"");var c="//pv.sohu.com",d=c+"/pv_click.gif?refer="+b+a,e=document.createElement("script");e.src=d,e.id="pv_click"+(new Date).getTime(),document.body.appendChild(e)}}},_spv_click;_spv_click||_sohu_pvinsight_click(1e4,5),_spv_click=1;