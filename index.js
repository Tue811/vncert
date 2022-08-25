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
const tueXg = document.getElementsByClassName("menu-item");
for(let i=0;i<tueXg.length;i++)
{
    tueXg[i].addEventListener("click", function(){
        activeMenu(i)
    });
}
function activeMenu(items)
{
    for(let i=0;i<tueXg.length;i++)
    {
        tueXg[i].classList.remove("active-menu");
    }
    tueXg[items].classList.add("active-menu");
}