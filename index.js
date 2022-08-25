var menuIcon = document.getElementById("menu-icon");
var menuMobile = document.getElementById("nav-header-mobile");
var overlayBg = document.getElementById("overlay-bg");
menuIcon.addEventListener("click" , showMenu);
overlayBg.addEventListener("click" , hiddenMenu);
function hiddenMenu()
{
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
    document.getElementsByTagName("html")[0].classList.remove("disable-scroll");
    menuMobile.classList.remove("active-menu");
    menuIcon.style.display = "block";
    overlayBg.style.display = "none";
}
function showMenu()
{
    document.getElementsByTagName("body")[0].classList.add("disable-scroll");
    document.getElementsByTagName("html")[0].classList.add("disable-scroll");
    menuMobile.classList.add("active-menu");
    menuIcon.style.display = "none";
    overlayBg.style.display = "block";
}
const headerNavbarLinkEl =  document.querySelectorAll(".nav-header__link")
console.log(headerNavbarLinkEl)