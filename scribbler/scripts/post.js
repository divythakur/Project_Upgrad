var k=localStorage.getItem("glvar");
document.getElementById("headingofpost").innerHTML=k;
var aname=localStorage.getItem("aname");

document.getElementById("authorname").innerHTML=aname;
function wecanedit(){
    console.log("d");
    document.getElementById("para").style.border="solid";
    document.getElementById("para").style.borderColor="red";


    var t=document.createElement("textarea");
    t.setAttribute("id","editedheading");
     var u=document.getElementById("headingofpost").innerHTML;
     t.innerHTML=u;
     document.getElementById("headingofpost").innerHTML="";

     document.getElementById("headingofpost").appendChild(t);
     document.getElementById("editedheading").cols="147";
     document.getElementById("editedheading").rows="2";
     document.getElementById("editedheading").style.border="none";
     document.getElementById("editbutton").display="none";
     

    document.getElementsByClassName("overlay2")[0].style.height="0px";
    document.getElementsByClassName("overlay2")[0].style.width="0%";




}
function saveit(){
    var t=document.getElementById("editedheading").value;
    t="UPDATED: "+t;
    document.getElementById("editedheading").style.display="none";
   
document.getElementById("headingofpost").innerHTML=t;
    console.log(t);
    var t=document.getElementById("para").value;
    document.getElementById("para").innerHTML=t;
    document.getElementById("para").style.border="none";
    document.getElementsByClassName("overlay2")[0].style.height="379px";
    document.getElementsByClassName("overlay2")[0].style.width="120%";


    
}