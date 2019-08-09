jQuery(document).ready(function ($) {

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
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    ymaps.ready(init);
 
    function init () {
        var myMap = new ymaps.Map("map", {
            // Центр карты, указываем коордианты
            center:[54.973762, 83.092797],
            // Масштаб, тут все просто
            zoom: 16,
        }); 
                 
        var myGeoObjects = [];
         
        // Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark([54.973529, 83.098628],{
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