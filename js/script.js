var links = document.querySelector('.links');
var menu = document.querySelector('.fa-bars');



menu.addEventListener('click',()=>{
    links.classList.add('active');
    links.style.transition = "all 0.5s";
});