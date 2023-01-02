
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();

// navbar sticky start

window.onscroll=function(){
  var div= document.getElementById('navbar')
  div.classList.add('styckynav');
  var imagnav= document.querySelector('#navbar1')
  imagnav.classList.add("logo1")
  if(scrollY<=50){
      div.classList.remove('styckynav');
      imagnav.classList.remove("logo1")
  }
  }
  
  document.querySelector("#msgbtn").addEventListener("click", messagediv)
  function messagediv(){
      let div=document.querySelector("#msgbox")
      div.classList.toggle("hide")
  }

  // navbar sticky end
  

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("class2");
  if (n > x.length) {
    slideIndex = 1;
  }
  console.log(x, n);
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}