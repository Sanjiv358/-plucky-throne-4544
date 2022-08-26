const visibilityToggle = document.querySelector('.visibility');

let password = true;

visibilityToggle.addEventListener('click',function(){
    let pass = document.querySelector('#password');
    if(password){
        pass.setAttribute('type','text');
        visibilityToggle.innerHTML = 'visibility';
    }
    else{
        pass.setAttribute('type','password');
        visibilityToggle.innerHTML = 'visibility_off';
    }
    password = !password;
});

class Submit{
    constructor(e,p){
        this.email = e,
        this.password = p;
    }
}




let login = ()=>{
    event.preventDefault()
    let data = JSON.parse(localStorage.getItem('user')) || [];
    console.log('data:', data)

    let e = document.getElementById('email').value;
    let p = document.getElementById('password').value;

    let temp = new Submit(e,p);
    console.log('temp:', temp);

    for(let i=0; i<data.length; i++){
        if(temp.email !== data[i].we && temp.password !== data[i].pw){
            alert('wrong credecial');
        }
        else{
            window.location.href = 'Dashboard.html';
        }
    }
};
