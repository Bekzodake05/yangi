var vid=document.getElementById("vid")
vid.addEventListener("ended",myfunction,true)
function myfunction(e){
    if(e.type=="ended"){
        console.log("video watched")
    }
    else{
        console.log("video is not watched")
    }
}