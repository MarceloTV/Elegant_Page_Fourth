$(function(){
    $("#date1, #date2").datepicker({
        dateFormat: "dd.mm.yy"
    });
});

const carousel = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 20,
    focusAt: 'center',
    autoplay: 7000,
    animationDuration: 1500,
    peek: {
        before: 150,
        after: 150
    }
});

carousel.mount();
