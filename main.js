let bar = document.getElementById("bar");
let linksNav = document.getElementById("links-nav");
let xMrk = document.getElementById("xMark");
// bar.onclick=function(){
//    linksNav.style.display="block";
// };
bar.addEventListener("click", function () {
  linksNav.classList.toggle("on");
});
// new version
let idNumber = document.getElementById("id-number");
let button = document.getElementById("how");
let person = [30309301409732, 1234567812345678];
button.onclick = function () {
  let wrong = 0;
  for (let i = 0; i < person.length; i++) {
    
    if (person[i] == idNumber.value) {
      window.open("https://mohamed-adel-6.github.io/portfolio/", "_blank");
    }
    else { ++wrong };
  }
  if (person.length === wrong) {
    prompt("الرقم القومي خطأ")
  }

};
