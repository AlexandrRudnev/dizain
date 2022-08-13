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
                // z[b].scrollTop = 100;
            }
        }

        y.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab') || target.classList.contains(
                'info-header-tab1')|| target.classList.contains('li')) {
                 
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
        fotoCont = document.querySelectorAll('.container')[2],
        fotoImg = document.querySelectorAll('.infoto'); 

        tabs(tab, info, tabContent);
        tabs(tab1, info1, tabContent1);
        tabs(l, u, con);

        fotoCont.addEventListener('click', function (event) {
            let target = event.target;                               
                for (let i = 0; i < fotoImg.length; i++) {                   
                    if (target == fotoImg[i]) {
                        let ur = fotoImg[i].getAttribute("src");
                        fotoShou.style.background = 'url(' + ur + ')' + ' no-repeat';
                        fotoShou.style.backgroundSize = '100%' + '100%';
                        fotoShou.style.display = 'block';
                                       
                    }
                    
                }
        });
        
        fotoCloset.addEventListener('click', function() {
            fotoShou.style.display = '';
            fotoShou.style.background = '';
        });

});