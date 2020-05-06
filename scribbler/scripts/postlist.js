arr=[1,2,3,4,5];
function ini()
{
    var count=arr.length;
    element=arr[count-1];
    if(count%2!=0)
    {
        document.getElementById(element).style.margin="4% 4% 4% 28%";
        
    }
    if(count%2===0)
    {
        document.getElementById(element).style.margin="4% 4% 4% 4%";
    }
}
ini();
var tempid;

function areyousure(id){
    document.getElementById("trashmodalcontainer").style.display="block";
    document.getElementsByClassName("overlay")[0].style.height="1000px";
    document.getElementsByClassName("overlay")[0].style.width="100%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0.6)";
    tempid=id;    
}
function onclickno(){
    document.getElementById("trashmodalcontainer").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="0px";
    document.getElementsByClassName("overlay")[0].style.width="0%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0)";
    
}
function onclickyes(){
    (function() {
        document.getElementById("trashmodalcontainer").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="0px";
    document.getElementsByClassName("overlay")[0].style.width="0%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0)";
    document.getElementById(tempid).style.display="none";
    console.log("the item to be deleted is"+tempid);
        
      }())
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===tempid)
        {
            arr.splice(i,1);
        }

    }
    console.log(arr);
    ini();
}
var postheading;
var nameofauthor;
function changepagefromBtoC(element,authorname)
{
    
     postheading=document.getElementById(element.id).innerHTML;
     nameofauthor=document.getElementById(authorname.id).innerHTML;
     localStorage.setItem("aname",nameofauthor);
     localStorage.setItem("glvar",postheading);
     window.open("file:///home/divyanshu/upgrad/scribbler/html/post.html");

}
console.log(postheading);