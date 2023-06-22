function showtime(){
var d= new Date();
var h=d.getHours();
var m= d.getMinutes();
var s=d.getSeconds();
var session="PM";
if(h<=12)
{

session="AM";

}

h=(h<10)? "0"+h:h;
m=(m<10)? "0"+m:m;
s=(s<10)? "0"+s:s;



var time= h+" "+":"+m+" "+":"+s+" "+"||"+session+"||";
document.getElementById("r2").innerHTML=time;
setInterval(showtime,1000);







}
function ashu(){



    window.open("https://instagram.com/aashu____upadhyay?igshid=NTc4MTIwNjQ2YQ==");
}