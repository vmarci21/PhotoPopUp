/*ImagepopUp JS 
Version: 1.1
http://intomedia.hu
https://github.com/vmarci21/PhotoPopUp
*/
var imagepopup = {
firstimage: true,
imageherei: 0,
wherediv: 1,
gallerye: '',
hasnext: false,
hasprev: false,
opened: false,
showimage: function(url,text,gallery,ie) {
document.getElementById("imagepopup_fixer").style.display='none';
this.opened = true;
var nextimageurl = '';
var wherediv1 = 1;
var wherediv2 = 2;
if(ie==undefined || ie=='' || ie==null){ie=0;}
if(this.firstimage){
window.addEventListener("resize",function(){imagepopup.resizeimage();});
imagepopup.mobiledrag();
imagepopup.keyboard_view();
this.firstimage = false;
}
if(gallery!=undefined){
this.gallerye = gallery;
  var imagelist = document.getElementsByClassName(gallery);
  for (var i = ie; i < imagelist.length; i++) {
    if(imagelist[i].dataset.bigsrc==url || imagelist[i].src==url){
    this.imageherei = i;
    if(this.imageherei%2==0){wherediv1 = 1;wherediv2 = 2;}else{wherediv1 = 2;wherediv2 = 1;}
    if(i>0){
    this.hasprev = true;
     document.getElementById('imagepopup_prev').className = 'active';
    }else{
    this.hasprev = false;
    document.getElementById('imagepopup_prev').className = '';
    }
    if(imagelist.length>i+1){
     document.getElementById('imagepopup_next').className = 'active';
    if(imagelist[i].dataset.bigsrc!=undefined){
     nextimageurl = imagelist[i+1].dataset.bigsrc;
     }else{
     nextimageurl = imagelist[i+1].src;
     }
     this.hasnext = true;
    }else{
    this.hasnext = false;
			document.getElementById('imagepopup_next').className = '';
    }
    i = imagelist.length;
    }
  }
}

document.getElementById('imagepopup').style.display = 'block';
document.getElementById('imagepopup_load').className = 'active';
setTimeout(function(){ document.getElementById('imagepopup').className = 'active'; }, 30);

var newImg = new Image;
newImg.onerror = function() {
document.getElementById('imagepopup_load').className = '';
imagepopup.showtext('Loading errors','Failed to load the picture :(');
};

newImg.onload = function() {
		imagepopup.wherediv = wherediv1;
    document.getElementById('imagepopup_load').className = '';
    document.getElementById('imagepopup_image'+wherediv2).className = '';
    document.getElementById('imagepopup_image'+wherediv1).className = 'active';
    document.getElementById('imagepopup_image'+wherediv1).innerHTML = '<img id="nagy_kep'+wherediv1+'" src="'+url+'">';
    imagepopup.resizeimage();
    document.getElementById('imagepopup_panel').innerHTML = '<a href="'+url+'" target="_blank">Link</a> <a href="javascript://" onclick="imagepopup.hideimage();" class="close">x</a>';
    document.getElementById('imagepopup_text').innerHTML = text;
    if(nextimageurl!=''){
     var newImg2 = new Image;
     newImg2.src = nextimageurl;
    }
}
newImg.src = url;
},

showtext: function(title,text){
document.getElementById("imagepopup_fixer").style.display='none';
document.getElementById('imagepopup').style.display = 'block';
document.getElementById('imagepopup_image1').innerHTML = '<div id="window"><h3 class="title">'+title+'</h3><p>'+text+'</p></div>';
document.getElementById('imagepopup_panel').innerHTML = '<a href="javascript://" onclick="imagepopup.hideimage();" class="close">x</a>';
setTimeout(function(){ document.getElementById('imagepopup').className = 'active'; 
document.getElementById('imagepopup').className = 'active';
document.getElementById('imagepopup_image1').className = 'active';
document.getElementById('imagepopup_image2').className = '';
}, 30);
},



next: function(){
 var imagelist = document.getElementsByClassName(this.gallerye);
if(imagelist[this.imageherei+1].dataset.bigsrc!=undefined){
     var url = imagelist[this.imageherei+1].dataset.bigsrc;
     }else{
     var url = imagelist[this.imageherei+1].src;
     }
 this.showimage(url,imagelist[this.imageherei+1].title,this.gallerye,this.imageherei);
 },
 prev: function(){
 var imagelist = document.getElementsByClassName(this.gallerye);
if(imagelist[this.imageherei-1].dataset.bigsrc!=undefined){
     var url = imagelist[this.imageherei-1].dataset.bigsrc;
     }else{
     var url = imagelist[this.imageherei-1].src;
     }
 this.showimage(url,imagelist[this.imageherei-1].title,this.gallerye,this.imageherei-1);
 },

hideimage2: function(t){
if(t.target.id=='imagepopup' || t.target.id=='imagepopup_image1' || t.target.id=='imagepopup_image2'){
this.hideimage();
}
},

hideimage: function(){
this.opened = false;
 document.getElementById('imagepopup').className = '';
setTimeout(function(){
document.getElementById('imagepopup').style.display = 'none';
document.getElementById('imagepopup_text').innerHTML = '';
document.getElementById('imagepopup_image1').innerHTML = '';
document.getElementById('imagepopup_image2').innerHTML = '';
document.getElementById('imagepopup_prev').className = '';
document.getElementById('imagepopup_next').className = '';
document.getElementById("imagepopup_fixer").style.display='block';
}, 400);
},

resizeimage: function() {
  if (document.getElementById('nagy_kep'+this.wherediv)) {
    var meret1 = document.getElementById('imagepopup').offsetWidth;
    var meret2 = document.getElementById('imagepopup').offsetHeight;
    meret2 = meret2-50;
    document.getElementById('nagy_kep'+this.wherediv).style.maxWidth = meret1 + 'px';
    document.getElementById('nagy_kep'+this.wherediv).style.maxHeight = meret2 + 'px';
    var meret3 = document.getElementById('nagy_kep'+this.wherediv).offsetWidth;
    meret3 = meret3-20;
    var meret5 = document.getElementById('nagy_kep'+this.wherediv).offsetHeight;
    var meret4 = (meret2-meret5)/2;
    if(meret4<6){
    meret4 = 4;
    }
    document.getElementById('nagy_kep'+this.wherediv).style.marginTop = meret4+'px';
    if(meret3>600){
    document.getElementById('imagepopup_text').style.width = meret3 + 'px';
    document.getElementById('imagepopup_text').className = 'kepben';
    var meret6 = meret5+meret4+5;
    document.getElementById('imagepopup_text').style.top = meret6+'px';
    }else{
    document.getElementById('imagepopup_text').style.width =  '';
    document.getElementById('imagepopup_text').style.top = '';
    document.getElementById('imagepopup_text').className = '';
    }
  }
},
keyboard_view: function(){
window.addEventListener('keyup', function(event) {
if(imagepopup.opened){
       var keyCode = ('which' in event) ? event.which : event.keyCode;
        if(keyCode==37 && imagepopup.hasprev){
   imagepopup.prev();
   }else if(keyCode==39 && imagepopup.hasnext){
   imagepopup.next();
   }else if(keyCode==27){
   imagepopup.hideimage();
   }
   }
});
},

mobiledrag: function(){
startx = 0;
starty = 0;
ennyit = 0;
starttop = 0;
ennyit2 = 0;
if (window.PointerEvent && !("undefined" != typeof document.documentElement.ontouchstart)) {
if(navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
		window.addEventListener('pointerdown', function(event) {
    	touchstarted(event.clientX, event.clientY);
		}, false);
    window.addEventListener('pointermove', function(event) {
    	touchmoved(event.clientX, event.clientY,event);
		}, false);
    window.addEventListener('pointerup', function(event) {
    	touchended();
		}, false);
}

}else{
	document.getElementById('imagepopup').addEventListener('touchstart', function(event) {
		var touch = event.targetTouches[0];
    touchstarted(touch.pageX,touch.pageY);
 	}, false);
 	document.getElementById('imagepopup').addEventListener('touchmove', function(event) {
   var touch = event.targetTouches[0];
   touchmoved(touch.pageX,touch.pageY,event);
 	}, false);
 	document.getElementById('imagepopup').addEventListener('touchend', function(event) {
    var touch = event.targetTouches[0];
   touchended();
 	}, false);

}

function touchstarted(x,y){
    startx = x;
    starty= y;
    ennyit = 0;
    ennyit2 = 0;
    starttop = document.getElementById('nagy_kep'+imagepopup.wherediv).style.marginTop;
    starttop = starttop.replace('px','');
}

 function touchmoved(x,y,event){
   ennyit = x-startx;
   ennyit2 = starty-y;
   if(Math.abs(ennyit)>Math.abs(ennyit2)){
    document.getElementById('nagy_kep'+imagepopup.wherediv).style.marginLeft = ennyit+ 'px';
   }else{
     var ennyit3 = starttop-ennyit2;
     document.getElementById('nagy_kep'+imagepopup.wherediv).style.marginTop = ennyit3+ 'px';
    }
     event.preventDefault();
  }
  
  function touchended(){
   var hova = '0px';
   if(Math.abs(ennyit)>Math.abs(ennyit2)){
   if(ennyit>120 && imagepopup.hasprev){
   var hova = '100%';
   }else if(ennyit<-120 && imagepopup.hasnext){
   var hova = '-200%';
   }
    document.getElementById('nagy_kep'+imagepopup.wherediv).className = 'touch';
    document.getElementById('nagy_kep'+imagepopup.wherediv).style.marginLeft = hova;
   if(ennyit>120 && imagepopup.hasprev){
   imagepopup.prev();
   }else if(ennyit<-120 && imagepopup.hasnext){
   imagepopup.next();
   }
   }else{
   if(ennyit2>100 || ennyit2<-100){
    imagepopup.hideimage();
   }else{
   hova = starttop+'px';
   document.getElementById('nagy_kep'+imagepopup.wherediv).className = 'touch';
   document.getElementById('nagy_kep'+imagepopup.wherediv).style.marginTop = hova;
   }
      }
      setTimeout(function(){document.getElementById('nagy_kep'+imagepopup.wherediv).className = '';}, 200);
      }
},

hideview: function(idname) {
	var ele = document.getElementById(idname);
	if(ele.style.opacity == "1") {
    	ele.style.opacity = "0";
  	} else {
		ele.style.opacity = "1";
	}
}
};
