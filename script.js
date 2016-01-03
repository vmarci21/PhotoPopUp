elsokep = true;
keptarti = 0;
mennyiea = 1;
gallerye = '';
vantov = false;
vanvissz = false;
kepnagyitonyitva = false;
function showimage(url,text,gallery,ie) {
kepnagyitonyitva = true;
var nextkepurl = '';
var mennyie = 1;
var mennyie2 = 2;
if(ie==undefined || ie=='' || ie==null){ie=0;}
if(elsokep){
window.addEventListener("resize",function(){kepmeretezes();});
mobiledrag();
keyboard_view();
elsokep = false;
}
if(gallery!=undefined){
gallerye = gallery;
  var kepek = document.getElementsByClassName(gallery);
  for (var i = ie; i < kepek.length; i++) {
    if(kepek[i].dataset.bigsrc==url || kepek[i].src==url){
    keptarti = i;
    if(keptarti%2==0){mennyie = 1;mennyie2 = 2;}else{mennyie = 2;mennyie2 = 1;}
    if(i>0){
    vanvissz = true;
     document.getElementById('kepnagyito_prev').className = 'active';
    }else{
    vanvissz = false;
    document.getElementById('kepnagyito_prev').className = '';
    }
    if(kepek.length>i+1){
     document.getElementById('kepnagyito_next').className = 'active';
    if(kepek[i].dataset.bigsrc!=undefined){
     nextkepurl = kepek[i+1].dataset.bigsrc;
     }else{
     nextkepurl = kepek[i+1].src;
     }
     vantov = true;
    }else{
    vantov = false;
			document.getElementById('kepnagyito_next').className = '';
    }
    i = kepek.length;
    }
  }
}

document.getElementById('kepnagyito').style.display = 'block';
document.getElementById('kepnagyito_load').className = 'active';
setTimeout(function(){ document.getElementById('kepnagyito').className = 'active'; }, 30);

var newImg = new Image;
newImg.onload = function() {
		mennyiea = mennyie;
    document.getElementById('kepnagyito_load').className = '';
    document.getElementById('kepnagyito_kep'+mennyie2).className = '';
    document.getElementById('kepnagyito_kep'+mennyie).className = 'active';
    document.getElementById('kepnagyito_kep'+mennyie).innerHTML = '<img id="nagy_kep'+mennyie+'" src="'+url+'">';
    kepmeretezes();
    document.getElementById('kepnagyito_felso').innerHTML = '<a href="'+url+'">Link</a> <a href="javascript://" onclick="elrejtkep();">x</a>';
    document.getElementById('kepnagyito_szoveg').innerHTML = text;
    if(nextkepurl!=''){
     var newImg2 = new Image;
     newImg2.src = nextkepurl;
    }
}
newImg.src = url;
}

function next(){
 var kepek = document.getElementsByClassName(gallerye);
if(kepek[keptarti+1].dataset.bigsrc!=undefined){
     var url = kepek[keptarti+1].dataset.bigsrc;
     }else{
     var url = kepek[keptarti+1].src;
     }
 showimage(url,kepek[keptarti+1].title,gallerye,keptarti);
 }
 function prev(){
 var kepek = document.getElementsByClassName(gallerye);
if(kepek[keptarti-1].dataset.bigsrc!=undefined){
     var url = kepek[keptarti-1].dataset.bigsrc;
     }else{
     var url = kepek[keptarti-1].src;
     }
 showimage(url,kepek[keptarti-1].title,gallerye,keptarti-1);
 }

function elrejtkep2(t){
if(t.target.id=='kepnagyito' || t.target.id=='kepnagyito_kep1' || t.target.id=='kepnagyito_kep2'){
elrejtkep();
}
}

function elrejtkep(){
kepnagyitonyitva = false;
 document.getElementById('kepnagyito').className = '';
setTimeout(function(){ document.getElementById('kepnagyito').style.display = 'none';
document.getElementById('kepnagyito_szoveg').innerHTML = '';
document.getElementById('kepnagyito_prev').className = '';
document.getElementById('kepnagyito_next').className = '';
}, 300);

}

function kepmeretezes() {
  if (document.getElementById('nagy_kep'+mennyiea)) {
    var meret1 = document.getElementById('kepnagyito').offsetWidth;
    var meret2 = document.getElementById('kepnagyito').offsetHeight;
    meret2 = meret2-40;
    document.getElementById('nagy_kep'+mennyiea).style.maxWidth = meret1 + 'px';
    document.getElementById('nagy_kep'+mennyiea).style.maxHeight = meret2 + 'px';
    var meret3 = document.getElementById('nagy_kep'+mennyiea).offsetWidth;
    meret3 = meret3-20;
    var meret5 = document.getElementById('nagy_kep'+mennyiea).offsetHeight;
    var meret4 = (meret2-meret5)/2
    document.getElementById('nagy_kep'+mennyiea).style.marginTop = meret4+'px';
    if(meret3>600){
    document.getElementById('kepnagyito_szoveg').style.width = meret3 + 'px';
    document.getElementById('kepnagyito_szoveg').className = 'kepben';
    var meret6 = meret5+meret4+5;
    document.getElementById('kepnagyito_szoveg').style.top = meret6+'px';
    }else{
    document.getElementById('kepnagyito_szoveg').style.width =  '';
    document.getElementById('kepnagyito_szoveg').style.top = '';
    document.getElementById('kepnagyito_szoveg').className = '';
    }
  }
}
function keyboard_view(){
window.addEventListener('keyup', function(event) {
if(kepnagyitonyitva){
       var keyCode = ('which' in event) ? event.which : event.keyCode;
        if(keyCode==37 && vanvissz){
   prev();
   }else if(keyCode==39 && vantov){
   next();
   }else if(keyCode==27){
   elrejtkep();
   }
   }
});
}

function mobiledrag(){
startx = 0;
starty = 0;
ennyit = 0;
starttop = 0;
ennyit2 = 0;
document.getElementById('kepnagyito').addEventListener('touchstart', function(event) {
   var touch = event.targetTouches[0];
    startx = touch.pageX;
    starty= touch.pageY;
    starttop = document.getElementById('nagy_kep'+mennyiea).style.marginTop;
    starttop = starttop.replace('px','');
  }, false);
  document.getElementById('kepnagyito').addEventListener('touchmove', function(event) {
   var touch = event.targetTouches[0];
   ennyit = touch.pageX-startx;
   ennyit2 = starty-touch.pageY;
   if(Math.abs(ennyit)>Math.abs(ennyit2)){
    document.getElementById('nagy_kep'+mennyiea).style.marginLeft = ennyit+ 'px';
   }else{
     var ennyit3 = starttop-ennyit2;
     document.getElementById('nagy_kep'+mennyiea).style.marginTop = ennyit3+ 'px';
    }
     event.preventDefault();
  }, false);
  document.getElementById('kepnagyito').addEventListener('touchend', function(event) {
   var hova = '0px';
   if(Math.abs(ennyit)>Math.abs(ennyit2)){
   if(ennyit>200 && vanvissz){
   var hova = '100%';
   }else if(ennyit<-200 && vantov){
   var hova = '-200%';
   }
    document.getElementById('nagy_kep'+mennyiea).className = 'touch';
    document.getElementById('nagy_kep'+mennyiea).style.marginLeft = hova;
   if(ennyit>200 && vanvissz){
   prev();
   }else if(ennyit<-200 && vantov){
   next();
   }
   }else{
   if(ennyit2>100 || ennyit2<-100){
    elrejtkep();
   }else{
   hova = starttop+'px';
   }
   document.getElementById('nagy_kep'+mennyiea).className = 'touch';
   document.getElementById('nagy_kep'+mennyiea).style.marginTop = hova;
      }
  }, false);
}

function kepreszmutat(idname) {
	var ele = document.getElementById(idname);
	if(ele.style.opacity == "1") {
    	ele.style.opacity = "0";
  	} else {
		ele.style.opacity = "1";
	}
}
