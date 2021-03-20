
      function validateForm(){
        x= document.forms["Form"]["username"].value;
        var regex = /^[a-zA-Z]+$/;
        if (x == ""){
            alert("Name cannot be empty");
            return false;
          }
        else if (regex.test(x) == false)
          {
            alert("name must contain letters only!");
            return false;
          }  
         x= document.forms["Form"]["email"].value;
         var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
         if (x == "") {
            alert("email cannot be empty!");
            return false;
         } 
         else if (regex.test(x) == false) {
            alert("Invalid Email");
            return false;
         }
    
          
            return true;
    }
      