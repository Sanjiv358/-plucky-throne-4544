const visibilityToggle = document.querySelector('.visibility');

let password = true;

visibilityToggle.addEventListener('click',function(){
    let pass = document.querySelector('#pass1');
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


let loginMe = () =>{
    event.preventDefault();

    if(document.getElementById("email").value == "" || document.getElementById("pass1").value == "")
    {
        alert("Enter details");
    }

    else
    {
        let email = document.getElementById("email").value
        let password = document.getElementById("pass1").value;
        let flag = 0;


        let user_db = localStorage.getItem("users");
        console.log('user_db:', user_db)

        user_db = JSON.parse(user_db)

        for(var i in user_db)
        {
            if(user_db[i].email == email && user_db[i].password == password)
            {
                window.location.href = 'Dashboard.html';
                break;
            }
            else if(user_db[i].email !== email || user_db[i].password !== password)
            {
                alert('Wrong credentials');
                return 
            }           
           
        }
    }
}