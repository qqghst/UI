// js for scroll
window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// js for sidebar

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.fa-xmark');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

// cursor animation
const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})