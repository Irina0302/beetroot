(function () {
    'use strict';

    var appElement = document.getElementById('app');


    var link1 = document.createElement('a');

    var h1 = document.createTextNode('Beetroot Academy - Odessa');

    var img = document.createElement('img');

    var p = document.createElement('p');
    var linkSecond = document.createElement('a');
    var imgSecond = document.createElement('img');
    var h3 = document.createElement('h3');
    var pLast = document.createElement('p');




    p.innerHTML = 'Выиграй степендию на бесплатное обучение от Битрут академи ,ответь на наш короткий опросник чтоб принять участи е розыгрыше степендии';
    img.setAttribute('src', 'https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-1/p50x50/18881915_294785030967317_8120908652541194416_n.png?oh=af0d38c95ecc25c7eaa11cdea1b7563d&oe=5A512F9A');

    appElement.append(link1);
    link1.setAttribute('href', "https://academy.beetroot.se/");
    link1.innerHTML = 'Beetroot Academy';

    linkSecond.herf = "https://docs.google.com/…/1FAIpQLSe6ntpTYt3C2ERH6z…/viewform";

    imgSecond.setAttribute('src', 'https://external.fiev4-1.fna.fbcdn.net/safe_image.php?d=AQB5FMD_SBdCKrKx&w=476&h=249&url=https%3A%2F%2Flh6.googleusercontent.com%2Fq-TOaf-GMDX5J7cm1NnZ3SVcn3uUm_rgGLWJvnMeYS52a8DQ3VtfbQXLTvekgtnw1UU%3Dw1200-h630-p&cfs=1&upscale=1&_nc_hash=AQC-6yEaB1hN5yRr');
    h3.innerHTML = 'Опрос от Beetroot Academy';
    p.innerHTML = 'Тебе бы хотелось выиграть степендию которая полностью покроет,стоимость обучения на одном из наших четырех курсов';

    appElement.prepend(img);

    appElement.append(link1, h1, p, linkSecond, imgSecond, h3, pLast);






})();
