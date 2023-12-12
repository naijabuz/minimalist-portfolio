// Javascript for scroll effect on page

window.addEventListener("scroll", ()=>{
    let header = document.querySelector(".header-container"); // selects the header element in the html document

    header.classList.toggle("sticky", window.scrollY > 0); // creates a new class "sticky" to the header element when scrolled downwards

});


// Javascript for responsive nav bar on mobile

const menuOpenButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".close-button");
const menu = document.querySelector(".primary-ul");

menuOpenButton.addEventListener("click", ()=>{
    menu.classList.add("active");
}); // adds a new class "active" to the menu element

menuCloseButton.addEventListener("click",()=>{
    menu.classList.remove("active");
}); // removes the class "active" from the menu element

// Javascript code for the revealing and hiding of the "Back To Top" icon

window.addEventListener("scroll", ()=>{
    const backToTop = document.querySelector(".back-to-top");

    backToTop.classList.toggle("visible", window.scrollY > 1250);
})








