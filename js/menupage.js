function price()
{
	var e=document.getElementById("khana").value;
	if(e=="Dosa")
document.getElementById("pri").value=document.getElementById("t1").innerHTML;
if(e=="queen dry")
document.getElementById("pri").value=document.getElementById("t2").innerHTML;
if(e=="fries patato")
document.getElementById("pri").value=document.getElementById("t3").innerHTML;
if(e=="curly fries")
document.getElementById("pri").value=document.getElementById("t4").innerHTML;
if(e=="frosty wendy")
document.getElementById("pri").value=document.getElementById("t5").innerHTML;
if(e=="Chicken Fries Patato")
document.getElementById("pri").value=document.getElementById("t6").innerHTML;

}

function quant()
{

var r,y,z;
r=document.getElementById("quantit").value;
y=document.getElementById("pri").value;

z=Number(r) * Number(y);
document.getElementById("total").value=+z;
}



function quq(){
	var y=formm.qut.value;
	if(document.formm.khana.selectedIndex=="")
{
  document.getElementById("slel").innerHTML="Select the item field";
return false;
}
 
	if(y==""){
  document.getElementById("quantt").innerHTML="fill the quantity field";
  return false;
}


return( true );
}