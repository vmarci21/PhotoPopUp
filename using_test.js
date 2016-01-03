window.addEventListener("load",function(){
if (document.getElementsByClassName('imagegallery').length > 0) {

  var kepek = document.getElementsByClassName("imagegallery");
  for (var i = 0; i < kepek.length; i++) {
    kepek[i].addEventListener("click", function() {
      showimage(this.dataset.bigsrc,this.title,'imagegallery');

    });
  }
}
});
