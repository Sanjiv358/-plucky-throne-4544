
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

// let images=[
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png"
//     },
//     {
//         image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png"
//     }
// ]


// let id;
// let i=0;
// function slideShow(){
//     let container=document.getElementById("slideshow");
//     id=setInterval(function(){
//         if(i==images.length){
//             i=0
//         }
//         let img=document.createElement("img");
//         img.src=images[i].image_url;
//         container.innerHTML=null;
//         container.append(img);
//         i++
//     },2500)
// }
// slideShow()

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