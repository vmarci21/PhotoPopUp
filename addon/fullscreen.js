window.addEventListener("load", function() {
  imagepopup.addbutton('Fullscreen',function(){togglefullscreen_popup(false);});
  imagepopup.addevent('onclose',function(){{togglefullscreen_popup(true);});
});
function togglefullscreen_popup(d){
var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
  if(d){
  cancelFullScreen.call(doc);
  }else if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
 requestFullScreen.call(docEl);
 }else{
 cancelFullScreen.call(doc);
 }  
}
