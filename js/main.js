$(function(){
    $("#date1, #date2").datepicker({
        dateFormat: "dd.mm.yy"
    });
});

let options = {
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
}

const carousel = new Glide('.glide', options);

carousel.mount();

function menu_setup() {
    const menu = document.getElementById("mobile_menu");
    const menu_btn = document.getElementById("menu_show");
    const close_btn = document.getElementById("close");

    if(window.screen.width <= 560){
        menu_btn.onclick = (e) => {
            menu.classList.add("show");
        }

        close_btn.onclick = (e) => {
            menu.classList.remove("show");
        }
    } else {
        menu_btn.onclick = null;
        close_btn.onclick = null;
        menu.classList.remove("show");
    }
}

function carousel_setup() {
    if(window.screen.width < 336){
        carousel.update({
            perView: 1,
            peek: {
                before: 10,
                after: 10
            }
        });
    } else if(window.screen.width < 401){
        carousel.update({
            perView: 0.5,
            peek: {
                before: 110,
                after: 110
            }
        });
    }else if(window.screen.width < 491){
        carousel.update({
            perView: 0.5,
            peek: {
                before: 150,
                after: 150
            }
        });
    } else if(window.screen.width < 551){
        carousel.update({
            perView: 0.5,
            peek: {
                before: 190,
                after: 190
            }
        });
    } else if(window.screen.width < 671){
        carousel.update({
            perView: 1
        });
    } else if(window.screen.width < 801){
        carousel.update({
            perView: 1.5
        });
    } else if(window.screen.width < 961){
        carousel.update({
            perView: 2
        });
    } else if(window.screen.width < 1001){
        carousel.update({
            perView: 2.3
        });
    } else if(window.screen.width < 1081) {
        carousel.update({
            perView: 2.5
        });
    } else {
        carousel.update(options)   
    }
}

carousel_setup();
menu_setup();

window.onresize = (e) => {
    menu_setup();
    carousel_setup();
}
