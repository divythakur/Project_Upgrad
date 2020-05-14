var k=localStorage.getItem("glvar");
var count=0;
var likecount=0;
document.getElementById("headingofpost").innerHTML=k;
var aname=localStorage.getItem("aname");

document.getElementById("authorname").innerHTML=aname;
function wecanedit(){
    console.log("d");
    document.getElementById("para").style.border="solid";
    document.getElementById("para").style.borderColor="pink";


    var t=document.createElement("textarea");
    t.setAttribute("id","editedheading");
     var u=document.getElementById("headingofpost").innerHTML;
     t.innerHTML=u;
     document.getElementById("headingofpost").innerHTML="";

     document.getElementById("headingofpost").appendChild(t);
     document.getElementById("editedheading").cols="147";
     document.getElementById("editedheading").rows="2";
     document.getElementById("editedheading").style.fontSize="14px";


     document.getElementById("editedheading").style.textAlign="center";

     document.getElementById("editedheading").style.border="none";
     document.getElementById("editbutton").style.display="none";

     document.getElementById("savebutton").style.display="block";

     document.getElementById("headingofpost").style.border="solid";
     
     document.getElementById("headingofpost").style.borderColor="pink";


     

    document.getElementsByClassName("overlay2")[0].style.height="0px";
    document.getElementsByClassName("overlay2")[0].style.width="0%";




}
function saveit(){
    count+=1;
    var t=document.getElementById("editedheading").value;
    if(count===1)
    {
    t="UPDATED: "+t;
    }
    document.getElementById("editedheading").style.display="none";
   
document.getElementById("headingofpost").innerHTML=t;
    console.log(t);
    var t=document.getElementById("para").value;
    document.getElementById("para").innerHTML=t;
    document.getElementById("para").style.border="none";
    document.getElementById("headingofpost").style.border="none";

    document.getElementsByClassName("overlay2")[0].style.height="286px";
    document.getElementsByClassName("overlay2")[0].style.width="120%";
     document.getElementById("savebutton").style.display="none";
     document.getElementById("editbutton").style.display="block";



    
}
function likeincrement(){
    likecount+=1;
    if(likecount>=1)
    {
        document.getElementById("likeorliked").innerHTML="Liked";
        var r=likecount + '  person likes this !';
        document.getElementsByClassName("likes")[0].innerHTML=r;
    }
}


function addcomment(element)
{
    var s=document.getElementById(element.id).value;
    console.log(s);
    var box= '<div id="allcomments">'+s+'</div>';
    document.getElementById("entercomments").innerHTML=box+document.getElementById("entercomments").innerHTML;
    var g=document.getElementById("commenthere");
    g.value=g.defaultValue;
    

}