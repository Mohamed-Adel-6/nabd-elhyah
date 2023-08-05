let bar = document.getElementById("bar");
let linksNav  =document.getElementById("links-nav");
let xMrk = document.getElementById("xMark");
// bar.onclick=function(){
//    linksNav.style.display="block";
// };
bar.addEventListener("click", function(){
    linksNav.classList.toggle('on')
})
