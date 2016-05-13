# Photo PopUp
javaScript and CSS responsive Photo / image viewer window and gallery.

## Demo
[JsFiddle](https://jsfiddle.net/xyxuxbpm/99/) ([Full page](https://jsfiddle.net/xyxuxbpm/99/show/)) or [CodePen](http://codepen.io/vmarci21/pen/MKJOyY) ([Full page](http://codepen.io/vmarci21/full/MKJOyY/)), 

[While theme (version 1.1)](https://jsfiddle.net/xyxuxbpm/73/show/)



## Comparison

|               | Photo PopUp 1.3.0 | PhotoSwipe 4.1.1 | FancyBox 1.3.4 | Yoxigen 2.21 | Clearbox 3.7 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| **JavaScript size** | **11.4 KB**  | 25 KB (only core.js)  | 27.9 KB  |  39.6 KB | 16.1 KB (only cb_core.js) |
| **Using jQuery** | **No**  | **No**  | Yes  | Yes | Yes |
| **Responsive** (resized window) | **Yes**  | **Yes**  | No  | **Yes** | No |
| **Mobile view** | **Good**  | **Good**  | **Good**  | **Good** | **Good** |
| **Keyboard control** | **Yes**  | **Yes**  | **Yes**  | **Yes** | No |
| **Touch gesture control** | **Yes**  | **Yes**  | No  | No | No |
| **Easy basic configuration** | **Yes**  | **Yes**  | **Yes**  | **Yes** | **Yes** |
| **Custom events** | **Yes**  | **Yes**  | **Yes**  | No | No |
| **Custom buttons, functions** | **Yes**  | No  | No  | No | No |
| **HTML5 fullscreen** | **Yes, with addon**   | **Yes**  | No  | No | No |
| **Image zoom** | Not yet  | **Yes**  | No  | No | No |
| **Image preload in gallery** | **Yes**  | **Yes**  | No | No | No |
| **Fade animation** | **Yes**  | No  | **Yes** | **Yes** | **Yes** |
| **Text window** | **Yes**  | No  | **Yes** | **Yes** | **Yes** |
| **summary** | **13/14**  | **10/14**  | 6/14 | 6/14 | 4/14 |




## Using
### First step
1. Load script.js and style.css or script_min.js and style_min.css
2. Add website the contents of the photopopop.html file

### Gallery
* Use the newgallery function, with this parameter:
  * HTML image tags className
```javascript
imagepopup.newgallery('imagagesClassName');
```
[More about Gallery](https://github.com/vmarci21/PhotoPopUp/wiki/Image-gallery) 

### Image

* Use the showimage function, with this parameter:
  * First parameter: Image URL
  * Second parameter: Image title
  * third parameter: Gallery class name (see more: using_test.html and using_test.js)

```javascript
imagepopup.showimage('http://test.hu/image.jpg');
```

```javascript
imagepopup.showimage('http://test.hu/image.jpg','This is an image.');
```

### Text
* Use the showtext function, with this parameter:
  * First parameter: Title
  * Second parameter: Full text

```javascript
imagepopup.showtext('Header','Text');
```

```javascript
imagepopup.showtext('Header',document.getElementById('szovpop').innerHTML);
```

### Hide window
* Use the hideimage function

```javascript
imagepopup.hideimage();
```

### Add custom button
[See this example](https://jsfiddle.net/xyxuxbpm/91/)
* Use the addbutton function, with this parameter:
  * First parameter: Title, button text
  * Second parameter: function, that runs when clicked on the button

```javascript
imagepopup.addbutton('alert button',function(){alert('alert');});
```

### Add custom events
[See this example](https://jsfiddle.net/xyxuxbpm/92/)
* Use the addevent function, with this parameter:
  * First parameter: onopen / onclose / onbuttonclick
  * Second parameter: function
    * a onopen return url and title, onclose return 'prev' or 'next'

```javascript
imagepopup.addevent('onopen',function(url,title){alert('Open image ('+url+')');});
```

### Options
* Edit option object in script




## used
* [CSS3 + Javascript beúszó ablak](http://kovjonas.into.hu/cssablak.html)
* [PhotoSwipe](https://github.com/dimsemenov/photoswipe) (implementation ideas)
* And custom scripts combination
