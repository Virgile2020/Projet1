let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick=()=>{
    navbar.classList.toggle('active')
}

document.querySelector('#close').onclick=()=>{
    navbar.classList.remove('active')
}

window.onscroll=()=>{

    navbar.classList.remove('active')

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active')
    }else{
        document.querySelector('header').classList.remove('active')
    }
}

let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () =>{

    themeToggler.classList.contains('fa-sun')

    if (themeToggler.classList.toggle('fa-sun')) {
        document.querySelector('body').classList.add('active')
    } else {
        document.querySelector('body').classList.remove('active')
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = ()=>{
        document.querySelector('.big-image-1').src =images.getAttribute('src')
    }
})
document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = ()=>{
        document.querySelector('.big-image-2').src =images.getAttribute('src')
    }
})
document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = ()=>{
        document.querySelector('.big-image-3').src =images.getAttribute('src')
    }
})

function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        if (hou == 0) {
            hou = 12;
        }
        if (hou > 12) {
            hou = hou-12;
            pe = "PM";
        }
        Number.prototype.pad = function (digits) {
            for (var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
                
        }

    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    var weeks = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var ids = ["dayname", "month", "daynum", "year", "hours", "minutes", "secondes", "periodes"];
    var values = [weeks[dname] ,months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {

        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        
    }
}

function initClock(){
    updateClock();
    window.setInterval('updateClock()', 1)
}


let swiper = new Swiper(".produit-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        550: {
          slidesPerView:2,
        },
        800: {
          slidesPerView:3,
        },
        1000: {
            slidesPerView:3,
        },
    },
});
