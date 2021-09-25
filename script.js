/*ImagepopUp JS 
Version: 2.0
http://intomedia.hu
https://github.com/vmarci21/PhotoPopUp
*/
const imagepopup = {
    option: {
        imageloadingerror_title: 'Loading error',
        imageloadingerror_text: 'Failed to load the picture',
        close_element: '<span class="zond-close"></span>',
        open_element: '<span class="zond-link"></span>',
        next_element: '<span class="zond-cheveron-right"></span>',
        prev_element: '<span class="zond-cheveron-left"></span>',
        enabled_keyboard_control: true,
        enabled_touch_control: true
    },
    closeBackground: true,
    firstimage: true,
    where: 1,
    gallery:null,
    gallery_i:null,
    galleryImages: {},
    hasnext: false,
    hasprev: false,
    opened: false,
    events: {
        open: [],
        close: [],
        click: []
    },
    new_button: [],

    addEvent: function (where, e) {
        if (where === 'onopen' || where === 'onOpen') {
            this.events.open.push(e);
        } else if (where === 'onclose' || where === 'onClose') {
            this.events.close.push(e);
        } else if (where === 'onbuttonclick' || where === 'onButtonClick') {
            this.events.click.push(e);
        }
    },
    newGallery: function (classname) {
        if (document.getElementsByClassName(classname).length > 0) {
            const images = document.getElementsByClassName(classname);
            this.galleryImages[classname] = [];

            for (const i in images) {
                const embed = (images[i].dataset !== undefined && images[i].dataset.embed !== undefined);
                const url = (embed) ? images[i].dataset.embed : ((images[i].dataset !== undefined && images[i].dataset.bigsrc !== undefined) ? images[i].dataset.bigsrc : images[i].src);
                const title = (images[i].title !== undefined && images[i].title !== null) ? images[i].title : null;
                this.galleryImages[classname].push({url:url,title:title,embed:embed});
                images[i].addEventListener('click',imagepopup.showImage.bind(event,url, title, classname,i,embed));
            }
        }
    },
    addGalleryImages(classname,images){
        if(!this.galleryImages[classname]){
            this.galleryImages[classname] = [];
        }
        this.galleryImages[classname] = this.galleryImages[classname].concat(images);
    },
    addButton: function (title, e) {
        this.new_button.push([title, e]);
    },
    buttonclick_run: function (i) {
        this.new_button[i][1]();
    },
    loadElement: function(url,text,i,embed){
        const newElement = (embed) ? document.createElement('iframe') : new Image();
        const i2 = (i===1) ? 2 : 1;

        newElement.onerror = function () {
            if(i === imagepopup.where) {
                document.getElementById('imagepopup_load').className = '';
                imagepopup.showText(imagepopup.option.imageloadingerror_title, imagepopup.option.imageloadingerror_text);
            }
        };
        if(i === imagepopup.where) {
            document.getElementById('imagepopup_image' + i2).className = '';
        }
        newElement.onload = function () {
            newElement.onload = function () {};
            newElement.id="pop-image"+i;
            document.getElementById('imagepopup_image' + i).innerHTML = '';
            document.getElementById('imagepopup_image' + i).append(newElement);
            if(i === imagepopup.where) {
                document.getElementById('imagepopup_load').className = '';
                document.getElementById('imagepopup_image' + i).className = 'active';
            }

            document.getElementById('imagepopup_panel').innerHTML = '<a href="' + url + '" target="_blank">' + imagepopup.option.open_element + '</a> <a href="javascript://" onclick="imagepopup.hideImage();" class="close">' + imagepopup.option.close_element + '</a>';
            for (let ib = 0; ib < imagepopup.new_button.length; ib++) {
                document.getElementById('imagepopup_panel').innerHTML += ' <a href="javascript://" onclick="imagepopup.buttonclick_run(' + ib + ');">' + imagepopup.new_button[ib][0] + '</a> ';
            }
            if(text !== null && text !== undefined) {
                document.getElementById('imagepopup_text').innerHTML = text;
            }
            for (let i2 = 0; i2 < imagepopup.events.open.length; i2++) {
                imagepopup.events.open[i2](url, text);
            }
        };
        newElement.src = url;
        if(embed){
            newElement.width = (document.body.offsetWidth>560) ? '560px' : document.body.offsetWidth+'px';
            newElement.height = (document.body.offsetHeight>315) ? '315px' : document.body.offsetHeight+'px';
            newElement.setAttribute('frameborder','0');
            newElement.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
            newElement.setAttribute('allowfullscreen','true');
            document.getElementById('imagepopup_image' + i).append(newElement);
        }
    },
    showImage: function (url, text, gallery,gallery_i,embed=false){
        imagepopup.opened = true;

        if (imagepopup.firstimage) {
            const div = document.createElement('div');
            div.id = "imagepopup";
            div.onclick = "imagepopup.hideimage2(event);";
            div.innerHTML = `<div id="imagepopup_panel"></div>
                <div id="imagepopup_load">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                         className="bi bi-hourglass-split" viewBox="0 0 16 16">
                        <path
                            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                </div>
                <div id="imagepopup_image1"></div>
                <div id="imagepopup_image2"></div>
                <div id="imagepopup_text"></div>
                <div id="imagepopup_prev" onClick="imagepopup.prev();">${imagepopup.option.prev_element}</div>
                <div id="imagepopup_next" onClick="imagepopup.next();">${imagepopup.option.next_element}</div>`;
            document.body.append(div);

            if (imagepopup.option.enabled_touch_control) {
                imagepopup.mobiledrag();
            }
            if (imagepopup.option.enabled_keyboard_control) {
                imagepopup.keyboard_view();
            }
            imagepopup.firstimage = false;
        }

        const i = (this.where===1) ? 2 : 1;
        const i2 = (this.where===1) ? 1 : 2;
        imagepopup.where = i;
        imagepopup.loadElement(url,text,i,embed);

        document.getElementById('imagepopup').style.display = 'block';
        document.getElementById('imagepopup_load').className = 'active';
        setTimeout(function () {
            document.getElementById('imagepopup').className = 'active';
        }, 30);

        gallery_i = Number.parseInt(gallery_i);

        if (gallery !== undefined && gallery_i !== undefined && imagepopup.galleryImages[gallery].length > gallery_i) {
            imagepopup.gallery = gallery;
            imagepopup.gallery_i = gallery_i;

            if(imagepopup.galleryImages[gallery].length > gallery_i+2) {
                if(!('connection' in navigator && navigator.connection.saveData)) {
                    let img = imagepopup.galleryImages[gallery][gallery_i + 1];
                    setTimeout(function () {
                        imagepopup.loadElement(img.url, img.text, i2, img.embed);
                    }, 300);
                }
            }

            if (gallery_i > 0) {
                imagepopup.hasprev = true;
                document.getElementById('imagepopup_prev').className = 'active';
            } else {
                imagepopup.hasprev = false;
                document.getElementById('imagepopup_prev').className = '';
            }
            if (imagepopup.galleryImages[gallery].length > gallery_i + 1) {
                document.getElementById('imagepopup_next').className = 'active';
                imagepopup.hasnext = true;
            } else {
                imagepopup.hasnext = false;
                document.getElementById('imagepopup_next').className = '';
            }
        }else{
            imagepopup.hasprev = false;
            document.getElementById('imagepopup_prev').className = '';
            imagepopup.hasnext = false;
            document.getElementById('imagepopup_next').className = '';
        }
    },
    showText: function (title, text,closeBackground=true) {
        this.closeBackground = closeBackground;
        document.getElementById('imagepopup').style.display = 'block';
        if(title !== null) {
            document.getElementById('imagepopup_image1').innerHTML = '<div id="window"><h3 class="title">' + title + '</h3><p>' + text + '</p></div>';
        }else{
            document.getElementById('imagepopup_image1').innerHTML = '<div id="window"><p>' + text + '</p></div>';
        }
            document.getElementById('imagepopup_panel').innerHTML = '<a href="javascript://" onclick="imagepopup.hideImage();" class="close"><span class="zond-close"></span</a>';
        setTimeout(function () {
            document.getElementById('imagepopup').className = 'active';
            document.getElementById('imagepopup').className = 'active';
            document.getElementById('imagepopup_image1').className = 'active';
            document.getElementById('imagepopup_image2').className = '';
        }, 30);
    },
    next: function () {
        if(imagepopup.gallery !== null) {
            let img = imagepopup.galleryImages[imagepopup.gallery][imagepopup.gallery_i+1];
            imagepopup.showImage(img.url,img.title,imagepopup.gallery,imagepopup.gallery_i+1,img.embed);
            for (let i = 0; i < imagepopup.events.click.length; i++) {
                imagepopup.events.click[i]('next');
            }
        }
    },
    prev: function () {
        if(imagepopup.gallery !== null) {
            let img = imagepopup.galleryImages[imagepopup.gallery][imagepopup.gallery_i-1];
            imagepopup.showImage(img.url,img.title,imagepopup.gallery,imagepopup.gallery_i-1,img.embed);
            for (let i = 0; i < imagepopup.events.click.length; i++) {
                imagepopup.events.click[i]('prev');
            }
        }
    },
    hideimage2: function (t) {
        if(this.closeBackground) {
            if (t.target.id === 'imagepopup' || t.target.id === 'imagepopup_image1' || t.target.id === 'imagepopup_image2') {
                this.hideImage();
            }
        }
    },
    hideImage: function () {
        this.opened = false;
        this.closeBackground = true;
        document.getElementById('imagepopup').className = '';
        setTimeout(function () {
            document.getElementById('imagepopup').style.display = 'none';
            document.getElementById('imagepopup_text').innerHTML = '';
            document.getElementById('imagepopup_image1').innerHTML = '';
            document.getElementById('imagepopup_image2').innerHTML = '';
            document.getElementById('imagepopup_image1').className = '';
            document.getElementById('imagepopup_image2').className = '';
            document.getElementById('imagepopup_prev').className = '';
            document.getElementById('imagepopup_next').className = '';
            document.getElementById('imagepopup_fixer').style.display = 'block';
        }, 400);
        for (let i = 0; i < imagepopup.events.close.length; i++) {
            imagepopup.events.close[i]();
        }
    },
    keyboard_view: function () {
        window.addEventListener('keyup', function (event) {
            if (imagepopup.opened) {
                const keyCode = 'which' in event ? event.which : event.keyCode;
                if (keyCode === 37 && imagepopup.hasprev) {
                    imagepopup.prev();
                } else if (keyCode === 39 && imagepopup.hasnext) {
                    imagepopup.next();
                } else if (keyCode === 27) {
                    imagepopup.hideImage();
                }
            }
        });
    },
    mobiledrag: function () {
        let startx = 0;
        let starty = 0;
        let ennyit = 0;
        let starttop = 0;
        let ennyit2 = 0;
        if (window.PointerEvent && !('undefined' != typeof document.documentElement.ontouchstart)) {
            if (navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
                window.addEventListener('pointerdown', function (event) {
                    touchstarted(event.clientX, event.clientY);
                }, false);
                window.addEventListener('pointermove', function (event) {
                    touchmoved(event.clientX, event.clientY, event);
                }, false);
                window.addEventListener('pointerup', function (event) {
                    touchended();
                }, false);
            }
        } else {
            document.getElementById('imagepopup').addEventListener('touchstart', function (event) {
                const touch = event.targetTouches[0];
                touchstarted(touch.pageX, touch.pageY);
            }, false);
            document.getElementById('imagepopup').addEventListener('touchmove', function (event) {
                const touch = event.targetTouches[0];
                touchmoved(touch.pageX, touch.pageY, event);
            }, false);
            document.getElementById('imagepopup').addEventListener('touchend', function (event) {
                touchended();
            }, false);
        }
        function touchstarted(x, y) {
            startx = x;
            starty = y;
            ennyit = 0;
            ennyit2 = 0;
            starttop = document.getElementById('pop-image' + imagepopup.where).style.marginTop;
            starttop = starttop.replace('px', '');
        }
        function touchmoved(x, y, event) {
            ennyit = x - startx;
            ennyit2 = starty - y;
            if (Math.abs(ennyit) > Math.abs(ennyit2)) {
                document.getElementById('pop-image' + imagepopup.where).style.marginLeft = ennyit + 'px';
            } else {
                const ennyit3 = starttop - ennyit2;
                document.getElementById('pop-image' + imagepopup.where).style.marginTop = ennyit3 + 'px';
            }
            event.preventDefault();
        }
        function touchended() {
            let hova = '0px';
            if (Math.abs(ennyit) > Math.abs(ennyit2)) {
                if (ennyit > 120 && imagepopup.hasprev) {
                    hova = '100%';
                } else if (ennyit < -120 && imagepopup.hasnext) {
                    hova = '-200%';
                }
                document.getElementById('pop-image' + imagepopup.where).className = 'touch';
                document.getElementById('pop-image' + imagepopup.where).style.marginLeft = hova;
                if (ennyit > 120 && imagepopup.hasprev) {
                    imagepopup.prev();
                } else if (ennyit < -120 && imagepopup.hasnext) {
                    imagepopup.next();
                }
            } else {
                if (ennyit2 > 100 || ennyit2 < -100) {
                    imagepopup.hideImage();
                } else {
                    hova = starttop + 'px';
                    document.getElementById('pop-image' + imagepopup.where).className = 'touch';
                    document.getElementById('pop-image' + imagepopup.where).style.marginTop = hova;
                }
            }
            setTimeout(function () {
                document.getElementById('pop-image' + imagepopup.where).className = '';
            }, 200);
        }
    }
};
