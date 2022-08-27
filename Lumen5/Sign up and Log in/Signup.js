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

form = document.getElementById("Sigup-form");
    form.addEventListener("submit", myFunc);
  
    users = JSON.parse(localStorage.getItem("users")) || [];
  
    function myFunc(e) {
      e.preventDefault();
  
      var name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      pass1 = document.getElementById("pass1").value;
  
      user = {};
      if (pass1.length < 8) {
        alert("Enter your password of 8 digits");
      } else {
        user["email"] = email;
        user["name"] = name;
        user["password"] = pass1;
  
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "Login.html" ;
      }
    }