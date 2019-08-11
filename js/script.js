jQuery(document).ready(function ($) {

    new WOW().init();

    $('[data-fancybox]').fancybox();

    //Маска под телефонный номер для поля Input
    $('input[name="phone"]').mask("+7 (999) 999-99-99");

    //Иницилизация и отправка плагина AjaxForm отправки даных из форм
    $('form').ajaxForm(function(){
    //$("a[title='Close']").trigger("click");
    $('form').clearForm();
    $("#exampleModal .close").trigger("click");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        navText: ['<img src="img/arrow_left.png">','<img src="img/arrow_right.png">'],
        items: 1
    });

    ymaps.ready(init);
 
    function init () {
        var myMap = new ymaps.Map("map", {
            // Центр карты, указываем коордианты
            center:[55.086652, 82.979307],
            // Масштаб, тут все просто
            zoom: 16,
        }); 
                 
        var myGeoObjects = [];
         
        // Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark([55.086652, 82.979307],{
                        balloonContentBody: 'Текст в балуне',
                        },{
                        iconLayout: 'default#image',
                        // Путь до нашей картинки
                        iconImageHref: 'img/logo_map.png', 
                        // Размер по ширине и высоте
                        iconImageSize: [100, 100],
                        // Смещение левого верхнего угла иконки относительно
                        // её «ножки» (точки привязки).
                        iconImageOffset: [-45, -75]
        });
                     
        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
        });
         
        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
     
    }
});