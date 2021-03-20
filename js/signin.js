function msg()
{
    var userid=document.getElementById("userid");
    var pas=document.getElementById("pass");

    if(userid.value=="")
    {
         userid.style.border ="solid 2px red";
         document.getElementById("message").style.color="red";
         document.getElementById("message").innerHTML="**cannot be left blank";
        // userid.focus();
        return false;
    }
    if(pas.value=="")
    {
       // alert("Password cannot be left blank");
        pas.style.border ="solid 2px red";
        document.getElementById("message1").style.color="red";
        document.getElementById("message1").innerHTML="**cannot be left blank";
        return false;
    }

}
