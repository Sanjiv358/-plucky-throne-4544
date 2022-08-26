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

// Store the user data array in local storage as 'USER'

class Submit{
    constructor(f,w,p){
        this.fn = f,
        this.we = w,
        this.pw = p;
    }
}


let getData = ()=>{
    event.preventDefault();

    let arr = [];

    let fn = document.getElementById('name').value;
    let we = document.getElementById('email').value;
    let pw = document.getElementById('password').value;

    let x = new Submit(fn,we,pw);
       
            arr.push(x);
            console.log(arr);
    
    localStorage.setItem('user',JSON.stringify(arr));
    window.location.href = 'Login.html';
}


