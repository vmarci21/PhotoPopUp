window.addEventListener("load",function(){
if (document.getElementsByClassName('kepgaleria').length > 0) {

  var kepek = document.getElementsByClassName("kepgaleria_kep");
  for (var i = 0; i < kepek.length; i++) {
    kepek[i].addEventListener("click", function() {
      mutatkep(this.dataset.bigsrc,this.title,'kepgaleria_kep');

    });
  }
}
});
