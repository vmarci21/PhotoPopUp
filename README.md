# Photo PopUp
javaScript and CSS responsive Photo / image viewer window and gallery.

## Demo
[JsFiddle](https://jsfiddle.net/xyxuxbpm/72/) ([Full page](https://jsfiddle.net/xyxuxbpm/72/show/)) or [CodePen](http://codepen.io/vmarci21/pen/MKJOyY)

## Using
### First step
1. Load script.js and style.css or script_min.js and style_min.css
2. Add website the contents of the photopopop.html file

### Image

* Use the showimage function, with this parameter:
  * First parameter: Image URL
  * Second parameter: Image title
  * third parameter: Gallery class name (see more: using_test.html and using_test.js)

### Text
* Use the showtext function, with this parameter:
  * First parameter: Title
  * Second parameter: Full text

### example
```javascript
imagepopup.showimage('http://test.hu/image.jpg');
```

```javascript
imagepopup.showimage('http://test.hu/image.jpg','This is an image.');
```

```javascript
imagepopup.showtext('Header','Text');
```

```javascript
imagepopup.showtext('Header',document.getElementById('szovpop').innerHTML);
```



## used
* [CSS3 + Javascript beúszó ablak](http://kovjonas.into.hu/cssablak.html)
* [PhotoSwipe](https://github.com/dimsemenov/photoswipe)
* And custom scripts combination
