window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function tabs(x, y, z) {
        function hideTabContent(a) {
            for (let i = a; i < z.length; i++) {
                z[i].classList.remove('show');
                z[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (z[b].classList.contains('hide')) {
                z[b].classList.remove('hide');
                z[b].classList.add('show');
                window.scrollTo(0, 500);
            }
        }

        y.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab') || target.classList.contains(
                    'info-header-tab1') || target.classList.contains('li')) {

                for (let i = 0; i < x.length; i++) {
                    if (target == x[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }

        });
    }
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        tab1 = document.querySelectorAll('.info-header-tab1'),
        info1 = document.querySelector('.info-header1'),
        tabContent1 = document.querySelectorAll('.info-tabcontent1'),
        l = document.querySelectorAll('.li'),
        u = document.querySelector('.ul'),
        con = document.querySelectorAll('.info'),
        fotoShou = document.querySelector('.shou'),
        fotoCloset = document.querySelector('.closet'),
        fotoCont = document.querySelectorAll('.container')[1],
        fotoImg = document.querySelectorAll('.infoto'),
        mai = document.querySelector('.main-block'),
        txt = document.querySelectorAll('.main-block-text'),
        im = document.querySelectorAll('.main-block-img');

    tabs(tab, info, tabContent);
    tabs(tab1, info1, tabContent1);
    tabs(l, u, con);

    mai.classList.add('active');

    let slideIndex = 1;
    
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > im.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = im.length;
            slideIndex = txt.length;
        }
        for (let i = 0; i < im.length; ++i) {
            txt[i].style.display = '';
            txt[i].classList.remove('main-block-text-activ');
            im[i].style.display = '';
            im[i].classList.remove('main-block-img-activ');
        }
        txt[slideIndex - 1].style.display = 'block';
        im[slideIndex - 1].style.display = 'block';
        setTimeout(function() {
            im[slideIndex - 1].classList.add('main-block-img-activ');
            txt[slideIndex - 1].classList.add('main-block-text-activ');
          }, 400);
               
    }

            setInterval(() =>showSlides(++slideIndex), 5000);
   
    fotoCont.addEventListener('click', function (event) {
        let target = event.target;
        for (let i = 0; i < fotoImg.length; i++) {
            if (target == fotoImg[i]) {
                let ur = fotoImg[i].getAttribute("src");
                fotoShou.style.background = 'url(' + ur + ')' + ' no-repeat';
                fotoShou.style.backgroundSize = '100%' + '100%';
                fotoShou.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

        }
    });

    fotoCloset.addEventListener('click', function () {
        fotoShou.style.display = '';
        fotoShou.style.background = '';
        document.body.style.overflow = '';
    });

});