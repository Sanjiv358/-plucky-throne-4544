const data=JSON.parse(localStorage.getItem("data"))
Append(data)
function Append(data){
    
    if(data){
        document.getElementById("container").innerHTML=null;
        ///Hold on!!
        data.forEach(element => {
        const card=document.createElement("div")
        card.id="card"
        const image_Box=document.createElement("div")
image_Box.id="image_Box"
///
const detail_Box=document.createElement("div")
detail_Box.id="detail_Box"
    //    
        const image=document.createElement("img")
        image.src=element.img;
        const title=document.createElement("h5")
        title.innerText=element.title;
        const head=document.createElement("h2")
        head.innerText=element.head;
        const name=document.createElement("h4")
        name.innerText=element.name;
        const date=document.createElement("div")
        date.innerText=element.date;
        image_Box.append(image)
        detail_Box.append(title,head,name,date)
        card.append(image_Box, detail_Box)
   
   

        document.getElementById("container").append(card)
    });
   
}
}