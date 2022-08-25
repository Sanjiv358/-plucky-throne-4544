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