function crossfunc(value)
{
    document.getElementById(value.id).style.display="none";
    //document.getElementById("buttonsincenter").style.display="block";
    document.getElementsByClassName("overlay")[0].style.height="0px";
    document.getElementsByClassName("overlay")[0].style.width="0%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0)";
}
function signupfunction()
{
    //document.getElementById("buttonsincenter").style.display="none";
    document.getElementById("modalcontainer").style.display="block";
    document.getElementById("modal2container").style.display="none";
    //document.getElementById("createpost").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="1368px";
    document.getElementsByClassName("overlay")[0].style.width="100%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0.6)";
    //document.getElementById("buttonsincenter").style.display="none";


    
}
function signinfunc()
{
    document.getElementById("modalcontainer").style.display="none";
    document.getElementById("modal2container").style.display="block";
    //document.getElementById("createpost").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="1368px";
    document.getElementsByClassName("overlay")[0].style.width="100%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0.6)";
   // document.getElementById("buttonsincenter").style.display="none";


    
}
function toggle()
{
    document.getElementById("modalcontainer").style.display="block";
    document.getElementById("modal2container").style.display="none";
}
function createpostfunc()
{
    document.getElementById("createpost").style.display="block";
    //document.getElementById("buttonsincenter").style.display="none";
    document.getElementsByClassName("overlay")[0].style.height="1368px";
    document.getElementsByClassName("overlay")[0].style.width="100%";
    document.getElementsByClassName("overlay")[0].style.background="rgba(0,0,0,0.6)";
}
function pagechange()
{
    window.open("file:///home/divyanshu/upgrad/scribbler/html/postslist.html");
}