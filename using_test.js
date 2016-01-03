window.addEventListener("load", function() {
  if (document.getElementsByClassName('imagegallery').length > 0) {

    var images = document.getElementsByClassName("imagegallery");
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function() {
        imagepopup.showimage(this.dataset.bigsrc, this.title, 'imagegallery');

      });
    }
  }
});
