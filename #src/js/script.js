@@include('vendors.js')

$(document).ready(function () {
    $('.howitworks .tabs-triggers__item:first').click();
    $('.howitworks .accordion__title:first').click();

    $('.price .tabs-triggers__item:first').click();
    $('.price .accordion__title:first').click();
    $('#price-main-accordion .accordion__title:first').click();
    $('#price-sub-accordion-1 .accordion__title:first').click();

    $('.functional__slider').slick({
        adaptiveHeight: true,
        infinite: false, 
        prevArrow: '<button type="button" class="slick-prev button button--small">Назад</button>',
        nextArrow: '<button type="button" class="slick-next button button--small">Далее</button>',
    });
});