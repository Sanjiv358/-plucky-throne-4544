import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import footer from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();


console.log('hello');
document.getElementById('monthly').addEventListener('click',offer)

function offer(){
    event.preventDefault()
    var p= document.createElement('p')
    p.innerText="Up to 25% off";
    p.style.color="blue"
    console.log(p)

    document.getElementById('discount').append(p);
}