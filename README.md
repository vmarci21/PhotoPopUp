# Photo PopUp
javaScript and CSS responsive Photo / image viewer window and gallery.

## Demo
[JsFiddle](https://jsfiddle.net/xyxuxbpm/81/) ([Full page](https://jsfiddle.net/xyxuxbpm/81/show/)) or [CodePen](http://codepen.io/vmarci21/pen/MKJOyY) ([Full page](http://codepen.io/vmarci21/full/MKJOyY/)), 

[While theme (version 1.1)](https://jsfiddle.net/xyxuxbpm/73/show/)


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
  
### Hide window
* Use the hideimage function

### Options
* Edit option object in script

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

```javascript
imagepopup.hideimage();
```

## Comparison

|               | Photo PopUp 1.1.1 | PhotoSwipe 4.1.1 | FancyBox 1.3.4 | Yoxigen 2.21 | Clearbox 3.7 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| **JavaScript size** | **9.8 KB**  | 25 KB (only core.js)  | 27.9 KB  |  39.6 KB | 16.1 KB (only cb_core.js) |
| **Using jQuery** | **No**  | **No**  | Yes  | Yes | Yes |
| **Responsive** (resized window) | **Yes**  | **Yes**  | No  | **Yes** | No |
| **Mobile view** | **Good**  | **Good**  | **Good**  | **Good** | **Good** |
| **Keyboard control** | **Yes**  | **Yes**  | **Yes**  | **Yes** | No |
| **Touch gesture control** | **Yes**  | **Yes**  | No  | No | No |
| **Easy basic configuration** | **Yes**  | **Yes**  | **Yes**  | **Yes** | **Yes** |
| **Custom events** | Not yet  | **Yes**  | **Yes**  | No | No |
| **HTML5 fullscreen** | Not yet  | **Yes**  | No  | No | No |
| **Image zoom** | Not yet  | **Yes**  | No  | No | No |
| **Image preload in gallery** | **Yes**  | **Yes**  | No | No | No |
| **Fade animation** | **Yes**  | None  | **Yes** | **Yes** | **Yes** |




## used
* [CSS3 + Javascript beúszó ablak](http://kovjonas.into.hu/cssablak.html)
* [PhotoSwipe](https://github.com/dimsemenov/photoswipe) (implementation ideas)
* And custom scripts combination
