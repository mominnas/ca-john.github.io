"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[143],{135:(t,e,o)=>{var i=o(477),n=o(11),s=o(365),r=o(358),a=function(t,e,o){if(o||2===arguments.length)for(var i,n=0,s=e.length;n<s;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))};const d=function(){function t(){this.group=new i.Tme,this.backgroundColor=window.getComputedStyle(document.body,null).getPropertyValue("background-color"),this.sizeSquared=35,this.windowX=window.innerWidth,this.windowY=window.innerHeight,this.scene=new i.xsS,this.renderer=new i.CP7({antialias:!0,alpha:!0}),this.camera=new i.cPb(20,this.windowX/this.windowY,1,2e3),this.models=[],this.currMouseX=3,this.oldMouseX=3,this.oldMouseY=65,this.lastScale=155,this.generateScene(),this.controls=new s.z(this.camera,this.renderer.domElement),this.backgroundPlane=new i.Kj0,this.docheight=-1,this.requestId=-1}return t.prototype.init=function(){this.generateScene(),this.setCamera(),this.generateControls(),this.addPlane(),this.addBackground(),this.addRemoveScroll(),this.addSpotLight(),this.addPointLight(),this.loadModels("https://raw.githubusercontent.com/ca-john/ca-john.github.io/main/assets/homepage_buildings.obj",this.onLoadModelsComplete.bind(this)),this.animate(),this.theatreInit(),this.theatreStudioInit(),this.buttonGradient()},t.prototype.theatreInit=function(){},t.prototype.theatreStudioInit=function(){0},t.prototype.generateScene=function(){this.renderer.setSize(this.windowX,this.windowY),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=i.dwk,document.body.querySelector(".canvas-wrapper").appendChild(this.renderer.domElement),this.scene.fog=new i.yo9("#36454F",.01)},t.prototype.addPointLight=function(){var t=new i.cek("#05f7ff",10);t.position.set(50,100,-50),this.scene.add(t)},t.prototype.addRemoveScroll=function(){window.addEventListener("scroll",(function(){0==document.documentElement.scrollTop&&document.querySelector(".arrows").classList.remove("scroll_remove"),0!=document.documentElement.scrollTop&&document.querySelector(".arrows").classList.add("scroll_remove")}))},t.prototype.buttonGradient=function(){var t=Number(getComputedStyle(document.querySelector(".button")).getPropertyValue("--borderpx").match(/(\d+)/)[0]),e=Number(getComputedStyle(document.querySelector(".button")).getPropertyValue("--paddingx").match(/(\d+)/)[0]),o=Number(getComputedStyle(document.querySelector(".button")).getPropertyValue("--paddingy").match(/(\d+)/)[0]);document.querySelectorAll(".button").forEach((function(i){i.onmousemove=function(t){var e=t.pageX-t.target.offsetLeft,o=t.pageY-t.target.offsetTop;t.target.style.setProperty("--x","".concat(e,"px")),t.target.style.setProperty("--y","".concat(o,"px"))},i.onmouseenter=function(i){i.target.style.setProperty("border","".concat(t,"px solid transparent")),i.target.style.setProperty("padding","".concat(o-t,"px ").concat(e-t,"px"))},i.onmouseleave=function(t){t.target.style.setProperty("padding","".concat(o,"px ").concat(e,"px")),t.target.style.setProperty("border","0px solid transparent")}}))},t.prototype.setCamera=function(){this.camera.position.set(0,50,150),this.scene.add(this.camera)},t.prototype.generateControls=function(){this.controls.dampingFactor=.03,this.controls.enabled=!1},t.prototype.addSpotLight=function(){var t="#f00",e=641,o=-462,n=509,s=new i.PMe(t,5);s.position.set(e,o,n),s.castShadow=!0,this.scene.add(s)},t.prototype.addBackground=function(){var t=this,e=new i._12(400,100),o=new i.EJi({color:"#fff"});this.backgroundPlane.material=o,this.backgroundPlane.geometry=e,this.backgroundPlane.receiveShadow=!1,this.backgroundPlane.position.y=10,this.backgroundPlane.position.z=-150,this.scene.add(this.backgroundPlane),this.tiltingEffect={body:document.body,docEl:document.documentElement,getMousePos:function(t,e){var o=0,i=0;return t||(t=window.event),t.pageX||t.pageY?(o=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(o=t.clientX+e.left,i=t.clientY+e.top),{x:o,y:i}},lerp:function(t,e,o){return(1-o)*t+o*e},lineEq:function(t,e,o,i,n){var s=(t-e)/(o-i);return s*n+(e-s*i)}},this.docheight=Math.max(this.tiltingEffect.body.scrollHeight,this.tiltingEffect.body.offsetHeight,this.tiltingEffect.docEl.clientHeight,this.tiltingEffect.docEl.scrollHeight,this.tiltingEffect.docEl.offsetHeight),this.requestId=requestAnimationFrame((function(){return t.tilt()})),window.addEventListener("mousemove",(function(e){var o={left:t.tiltingEffect.body.scrollLeft+t.tiltingEffect.docEl.scrollLeft,top:t.tiltingEffect.body.scrollTop+t.tiltingEffect.docEl.scrollTop},i=t.tiltingEffect.getMousePos(e,o);t.currMouseX=i.x-o.left})),window.addEventListener("resize",(function(){return t.docheight=Math.max(t.tiltingEffect.body.scrollHeight,t.tiltingEffect.body.offsetHeight,t.tiltingEffect.docEl.clientHeight,t.tiltingEffect.docEl.scrollHeight,t.tiltingEffect.docEl.offsetHeight)})),window.onbeforeunload=function(){window.cancelAnimationFrame(t.requestId),window.scrollTo(0,0)}},t.prototype.tilt=function(){var t=this;this.oldMouseX=this.tiltingEffect.lerp(this.oldMouseX,this.tiltingEffect.lineEq(6,0,this.windowX,0,this.currMouseX),.05);var e=window.pageYOffset;this.oldMouseY=this.tiltingEffect.lerp(this.oldMouseY,this.tiltingEffect.lineEq(0,65,this.docheight,0,e),.05),this.lastScale=this.tiltingEffect.lerp(this.lastScale,this.tiltingEffect.lineEq(0,158,this.docheight,0,e),.05),this.camera.position.set(this.oldMouseX,this.oldMouseY,this.lastScale),this.requestId=requestAnimationFrame((function(){return t.tilt()}))},t.prototype.addPlane=function(){var t=new i._12(200,200),e=new i.Wid({color:"#000000",metalness:0,emissive:"#000000",roughness:0}),o=new i.Kj0(t,e);t.rotateX(-Math.PI/2),o.position.y=0,this.scene.add(o)},t.prototype.getModel=function(){return this.models[Math.floor(Math.random()*Math.floor(this.models.length))]},t.prototype.onLoadModelsComplete=function(t){var e=this;this.models=a([],t.children,!0).map((function(t){var e=.01;return t.scale.set(e,e,e),t.position.set(0,-20,0),t.receiveShadow=!0,t.castShadow=!0,t})),this.draw(),setTimeout((function(){e.deleteLoadingIcon(),e.showBuildings()}),500),window.addEventListener("resize",this.onResize.bind(this))},t.prototype.deleteLoadingIcon=function(){document.querySelector(".loadingIcon").classList.add("loadIconRemove")},t.prototype.deleteScrollIcon=function(){document.querySelector(".arrows").classList.add("scroll_remove")},t.prototype.showBuildings=function(){this.sortBuildingsByDistance(),this.models.forEach((function(t,e){r.p8.to(t.position,{duration:.8+e/4e3,y:1,ease:"Power4.out",delay:e/4e3})}))},t.prototype.sortBuildingsByDistance=function(){this.models.sort((function(t,e){return t.position.z>e.position.z?1:t.position.z<e.position.z?-1:0})).reverse()},t.prototype.loadModels=function(t,e){(new n.L).load(t,e)},t.prototype.draw=function(){for(var t=new i.EJi({color:"#000",metalness:0,emissive:"#000",roughness:.8}),e=0;e<this.sizeSquared;e++)for(var o=0;o<this.sizeSquared;o++){var n=this.getModel().clone();n.material=t,n.scale.y=Math.random()*(.008+.01),n.position.x=3*e,n.position.z=3*o,this.group.add(n),this.models.push(n)}this.scene.add(this.group),this.group.position.set(-this.sizeSquared-10,1,-this.sizeSquared-10)},t.prototype.onResize=function(){this.windowX=window.innerWidth,this.windowY=window.innerHeight,this.camera.aspect=this.windowX/this.windowY,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.windowX,this.windowY)},t.prototype.animate=function(){this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))},t}();document.addEventListener("DOMContentLoaded",(function(){(new d).init()}))}},t=>{t.O(0,[431],(()=>{return e=135,t(t.s=e);var e}));t.O()}]);