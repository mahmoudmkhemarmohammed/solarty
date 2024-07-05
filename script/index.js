const iconBars = document.querySelector("header .container nav .spans"),
  navUl = document.querySelector("header .container ul"),
  closeUlNav = document.querySelector("header .container nav ul .close"),
  allListItem = document.querySelectorAll("header .container nav ul li"),
  btnLeft = document.querySelector(".slider-box .container .slide-container .btns i.fa-chevron-left"),
  btnRight = document.querySelector(".slider-box .container .slide-container .btns i.fa-chevron-right")
  slider = document.querySelector(".slider-box .container .slide-container .slider"),
  counter = 0,
  btnScroller = document.querySelector(".btn-scroller");
iconBars.addEventListener("click", () => {
  navUl.classList.add("show");
});
closeUlNav.addEventListener("click", () => {
  navUl.classList.remove("show");
});
allListItem.forEach(li => {
    li.addEventListener("click" , function () {
        allListItem.forEach( el => {
            el.classList.remove("active")
        })
        this.classList.add("active");
    })
})
// Handel Slider
const handelLeft = () => {
  if(counter < 83) {
    counter += 16.6;
    slider.style.translate = `-${counter}%`
  }
}
const handelRight = () => {
  if(counter > 0) {
    counter -= 16.6;
    slider.style.translate = `-${counter}%`
  }
}
btnLeft.addEventListener("click" , handelLeft);
btnRight.addEventListener("click" , handelRight);
window.addEventListener("scroll" , () => {
  if(scrollY >= 700) {
    btnScroller.style.display = 'block'
  }
  else {
    btnScroller.style.display = 'none'
  }
})
btnScroller.addEventListener("click" , () => {
  scroll({top:0,
    behavior:"smooth"
  })
})
window.addEventListener("load" , () => {
  const sr = ScrollReveal({
    origin: "top",
    duration: 2500,
    distance: "60px",
    delay: 400,
  })
  sr.reveal(".home .container .text .bar-box , .our-values .container .text h2 , .solar-kits .container .text p , .solar-kits .container .text h2 , .call-us .container .text h2 , footer .container .boxed .inputs , footer .container .boxed .text")
  sr.reveal(".home .container .text h2 , .energy .container .text , .slider-box .container .text" , {origin: "left"})
  sr.reveal(".home .container .text p , .energy .container .card-tall , .repairs .container .text" , {origin: "bottom"})
  sr.reveal(".home .container .text .buttons" , {delay: 700, origin: "bottom"})
  sr.reveal(".friendliest .container .text h2" , {delay: 500})
  sr.reveal(".friendliest .container .text p" , {origin: "left" , delay: 500})
  sr.reveal(".friendliest .container .img" , {origin: "bottom" , delay: 600})
  sr.reveal(".call-us .container .text p , .repairs .container .text h2 , .solar-kits .container .card-box .card" , {origin: "bottom" , delay: 500})
  sr.reveal(".call-us .container .text button , .repairs .container .text p" , {origin: "bottom" , delay: 1000})
  sr.reveal(".our-values .container .text p , .our-values .container .container-card .card",{delay: 500 , origin: "bottom"})
  sr.reveal(".slider-box .container .slide-container .slider",{origin: "right"})
})