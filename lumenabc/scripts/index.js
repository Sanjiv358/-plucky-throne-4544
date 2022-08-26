
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let images=[
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png"
    },
    {
        image_url:"https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png"
    }
]


let id;
let i=0;
function slideShow(){
    let container=document.getElementById("slideshow");
    id=setInterval(function(){
        if(i==images.length){
            i=0
        }
        let img=document.createElement("img");
        img.src=images[i].image_url;
        container.innerHTML=null;
        container.append(img);
        i++
    },2500)
}
slideShow()