

function agreement (){
   var response = prompt("Type yes or no , to agree or not on the commandements!");
   var agree = "yes"; 
   var pic = "Project/notpass.jpg";

   if ( response == agree ) {
        alert(" You shall pass, brother!");
        alert(" No! It wasn't sexist, you rag! ");
        document.getElementById('racistJokes.html').style.display='block';
    }
  else if (response != agree){
        
    document.getElementById('notpass').style.display='block';
    alert("Excuse me for bothering you then, assbutt, this is my church and you're a sinner! I therefore cast you to hell!");
        

    }
}

