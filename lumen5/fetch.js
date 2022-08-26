const hey=async()=>{
    const query=document.getElementById("query").value;
 if(query=="video" || query=="ebook"){
const res=await fetch(`https://preetibildani.herokuapp.com/${query}`)

const data=await res.json()
console.log(data)

localStorage.setItem("data",JSON.stringify(data))

window.location.href="VideoPage.html"

 }
}





// "img": "https://lumen5.com/learn/wp-content/uploads/2022/08/Blog-Thumbnail-Overlay-1-1.png",
// "title": "Marketing Strategy",
// "head": "3 Tips to Scale your B2B Video Content",
// "name": "Madelaine Quon",
// "date": "August 11,2020 . 5 min read"