/* ImagepopUp JS,  Version: 1.0 | http://intomedia.hu, https://github.com/vmarci21/PhotoPopUp */
var imagepopup={firstimage:!0,imageherei:0,wherediv:1,gallerye:"",hasnext:!1,hasprev:!1,opened:!1,showimage:function(a,b,d,c){this.opened=!0;var f="",e=1,g=2;if(void 0==c||""==c||null==c)c=0;this.firstimage&&(window.addEventListener("resize",function(){imagepopup.resizeimage()}),imagepopup.mobiledrag(),imagepopup.keyboard_view(),this.firstimage=!1);if(void 0!=d)for(this.gallerye=d,d=document.getElementsByClassName(d);c<d.length;c++)if(d[c].dataset.bigsrc==a||d[c].src==a)this.imageherei=c,0==this.imageherei%
2?(e=1,g=2):(e=2,g=1),0<c?(this.hasprev=!0,document.getElementById("imagepopup_prev").className="active"):(this.hasprev=!1,document.getElementById("imagepopup_prev").className=""),d.length>c+1?(document.getElementById("imagepopup_next").className="active",f=void 0!=d[c].dataset.bigsrc?d[c+1].dataset.bigsrc:d[c+1].src,this.hasnext=!0):(this.hasnext=!1,document.getElementById("imagepopup_next").className=""),c=d.length;document.getElementById("imagepopup").style.display="block";document.getElementById("imagepopup_load").className=
"active";setTimeout(function(){document.getElementById("imagepopup").className="active"},30);c=new Image;c.onerror=function(){document.getElementById("imagepopup_load").className="";imagepopup.showtext("Loading errors","Failed to load the picture :(")};c.onload=function(){imagepopup.wherediv=e;document.getElementById("imagepopup_load").className="";document.getElementById("imagepopup_image"+g).className="";document.getElementById("imagepopup_image"+e).className="active";document.getElementById("imagepopup_image"+
e).innerHTML='<img id="nagy_kep'+e+'" src="'+a+'">';imagepopup.resizeimage();document.getElementById("imagepopup_panel").innerHTML='<a href="'+a+'" target="_blank">Link</a> <a href="javascript://" onclick="imagepopup.hideimage();">x</a>';document.getElementById("imagepopup_text").innerHTML=b;""!=f&&((new Image).src=f)};c.src=a},showtext:function(a,b){document.getElementById("imagepopup").style.display="block";document.getElementById("imagepopup_image1").innerHTML='<div id="window"><h3 class="title">'+
a+"</h3><p>"+b+"</p></div>";document.getElementById("imagepopup_panel").innerHTML='<a href="javascript://" onclick="imagepopup.hideimage();">x</a>';setTimeout(function(){document.getElementById("imagepopup").className="active";document.getElementById("imagepopup").className="active";document.getElementById("imagepopup_image1").className="active";document.getElementById("imagepopup_image2").className=""},30)},next:function(){var a=document.getElementsByClassName(this.gallerye);this.showimage(void 0!=
a[this.imageherei+1].dataset.bigsrc?a[this.imageherei+1].dataset.bigsrc:a[this.imageherei+1].src,a[this.imageherei+1].title,this.gallerye,this.imageherei)},prev:function(){var a=document.getElementsByClassName(this.gallerye);this.showimage(void 0!=a[this.imageherei-1].dataset.bigsrc?a[this.imageherei-1].dataset.bigsrc:a[this.imageherei-1].src,a[this.imageherei-1].title,this.gallerye,this.imageherei-1)},hideimage2:function(a){"imagepopup"!=a.target.id&&"imagepopup_image1"!=a.target.id&&"imagepopup_image2"!=
a.target.id||this.hideimage()},hideimage:function(){this.opened=!1;document.getElementById("imagepopup").className="";setTimeout(function(){document.getElementById("imagepopup").style.display="none";document.getElementById("imagepopup_text").innerHTML="";document.getElementById("imagepopup_prev").className="";document.getElementById("imagepopup_next").className=""},300)},resizeimage:function(){if(document.getElementById("nagy_kep"+this.wherediv)){var a=document.getElementById("imagepopup").offsetWidth,
b=document.getElementById("imagepopup").offsetHeight,b=b-50;document.getElementById("nagy_kep"+this.wherediv).style.maxWidth=a+"px";document.getElementById("nagy_kep"+this.wherediv).style.maxHeight=b+"px";var a=document.getElementById("nagy_kep"+this.wherediv).offsetWidth,a=a-20,d=document.getElementById("nagy_kep"+this.wherediv).offsetHeight,b=(b-d)/2;6>b&&(b=4);document.getElementById("nagy_kep"+this.wherediv).style.marginTop=b+"px";600<a?(document.getElementById("imagepopup_text").style.width=
a+"px",document.getElementById("imagepopup_text").className="kepben",b=d+b+5,document.getElementById("imagepopup_text").style.top=b+"px"):(document.getElementById("imagepopup_text").style.width="",document.getElementById("imagepopup_text").style.top="",document.getElementById("imagepopup_text").className="")}},keyboard_view:function(){window.addEventListener("keyup",function(a){imagepopup.opened&&(a="which"in a?a.which:a.keyCode,37==a&&imagepopup.hasprev?imagepopup.prev():39==a&&imagepopup.hasnext?
imagepopup.next():27==a&&imagepopup.hideimage())})},mobiledrag:function(){ennyit2=starttop=ennyit=starty=startx=0;document.getElementById("imagepopup").addEventListener("touchstart",function(a){a=a.targetTouches[0];startx=a.pageX;starty=a.pageY;starttop=document.getElementById("nagy_kep"+imagepopup.wherediv).style.marginTop;starttop=starttop.replace("px","")},!1);document.getElementById("imagepopup").addEventListener("touchmove",function(a){var b=a.targetTouches[0];ennyit=b.pageX-startx;ennyit2=starty-
b.pageY;Math.abs(ennyit)>Math.abs(ennyit2)?document.getElementById("nagy_kep"+imagepopup.wherediv).style.marginLeft=ennyit+"px":(b=starttop-ennyit2,document.getElementById("nagy_kep"+imagepopup.wherediv).style.marginTop=b+"px");a.preventDefault()},!1);document.getElementById("imagepopup").addEventListener("touchend",function(a){a="0px";Math.abs(ennyit)>Math.abs(ennyit2)?(200<ennyit&&imagepopup.hasprev?a="100%":-200>ennyit&&imagepopup.hasnext&&(a="-200%"),document.getElementById("nagy_kep"+imagepopup.wherediv).className=
"touch",document.getElementById("nagy_kep"+imagepopup.wherediv).style.marginLeft=a,200<ennyit&&imagepopup.hasprev?imagepopup.prev():-200>ennyit&&imagepopup.hasnext&&imagepopup.next()):(100<ennyit2||-100>ennyit2?imagepopup.hideimage():a=starttop+"px",document.getElementById("nagy_kep"+imagepopup.wherediv).className="touch",document.getElementById("nagy_kep"+imagepopup.wherediv).style.marginTop=a)},!1)},hideview:function(a){a=document.getElementById(a);a.style.opacity="1"==a.style.opacity?"0":"1"}};
