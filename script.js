//console.log("JS is up and running")

//Document object Model

//javascript interpreted language

//it has no datatypes specification
currentIndex=1
function slidecontrol(arrowtype){
 //alert("inside")
  if(arrowtype=="left"){
     if(currentIndex==1)
        currentIndex=7

     document.getElementById("ci").src= "images/tech" + --currentIndex + ".jpg"
  }
  if(arrowtype=="right")
   {
    if(currentIndex==6)
        currentIndex=0
     
     document.getElementById("ci").src= "images/tech"+ ++currentIndex +".jpg"
   }
}

function slideauto(){
    if(currentIndex==6)
      currentIndex=0

    document.getElementById("ci").src="images/tech"+ ++currentIndex +".jpg"
}

setInterval(slideauto,3000)