function register(){

 var c=regi.email.value;
  var  d=regi.pass.value;
    var e=regi.pass2.value;

    if(typeof Storage != 'undefined'){
        localStorage.emky=c;
        localStorage.pssky=d;
        }
    
        var tt2=localStorage.getItem('emky');
        var tt1=localStorage.getItem('pssky');
  
    if(c==""){
        document.getElementById("emil").innerHTML="fill the email address";
        return false;
    }
    if(d==""){
        document.getElementById("pass").innerHTML="fill the password";
        return false;
    }

    if(d.length<5)
    {
    document.getElementById("pass").innerHTML="not less than 6character";
    return false;
   }
  if(d.length>12)
    {
    document.getElementById("pass").innerHTML="not more than 10 character";
    return false;
    } 
    if(d.length==7 || d.length==8 || d.length==9 || d.length==10 )
    {
    document.getElementById("pass").innerHTML="ok";
   
    }


    if(e==""){
        document.getElementById("pass3").innerHTML="please fill the confirm password";
        return false;
        }
        //validation of pass3 password....
        if(d!=e)
                {
                document.getElementById("pass3").innerHTML="Password do not match";
                return false;
                }
                if(d==e)
                {
                document.getElementById("pass3").innerHTML="ok";
                return true;
                }
            }




function check(){
    
    var a=login.user.value;
    var b=login.pass.value;
    
    if(a==1&& b==1){
       window.open("menupage.html");
    
    } else{
       document.getElementById("error").innerHTML="Please check the information"
       return false;
    }
}



function tt(){
    document.getElementById('id01').style.display='block'
}

// Get the modal
var modal = document.getElementById('id01');


window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
} 