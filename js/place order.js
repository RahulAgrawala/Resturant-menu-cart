function validate()
{ 
   if( document.StudentRegistration.textnames.value == "" )
   {
       document.getElementById('nam').innerHTML="Please provide your Name!";
    
     document.StudentRegistration.textnames.focus() ;
     return false;
   }
  
   
   if( document.StudentRegistration.paddress.value == "" )
   {
    document.getElementById('add').innerHTML= "Please provide your Address!" ;
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   if( document.StudentRegistration.personaladdress.value == "" )
   {
    document.getElementById('land').innerHTML="Please provide your lanmark Address!" ;
     document.StudentRegistration.personaladdress.focus() ;
     return false;
   }
     
   if( document.StudentRegistration.City.value == "-1" )
   {
    document.getElementById('city').innerHTML= "Please provide your City!" ;
     document.StudentRegistration.City.focus() ;
     return false;
   }   
     
   
   
 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
    document.getElementById('email').innerHTML="Please provide your email ID";
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
 

 if( document.StudentRegistration.mobile_number.value == "" )
   {
    document.getElementById('mbl').innerHTML= "Please provide your mobile!" ;
     document.StudentRegistration.mobile_number.focus() ;
     return false;
   }

 if(document.getElementById('mobile_number').value != ""){

    var y = document.getElementById('mobile_number').value;
    if(isNaN(y)||y.indexOf(" ")!=-1)
    {
        document.getElementById('mbl').innerHTML="Invalid Mobile No.";
       document.getElementById('mobile_number').focus();
       return false;
    }

    if (y.length>10 || y.length<10)
    {
        document.getElementById('mbl').innerHTML="Mobile No. should be 10 digit";
         document.getElementById('mobile_number').focus();
         return false;
    }
    if (!(y.charAt(0)=="9" || y.charAt(0)=="8"))
    {
        document.getElementById('mbl').innerHTML="Mobile No. should start with 9 or 8 ";
         document.getElementById('mobile_number').focus();
         return false
    
}
else{
  alert(" your order successful place");
  }
 }

   return( true );
 
}