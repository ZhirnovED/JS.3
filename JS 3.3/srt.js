window.onload = function(){
 let spisok = document.querySelectorAll('.spisok');
 

 for(let i=0; i<spisok.length; i++){
   let sorted = [...spisok[i].children].sort(function(a,b){
     if(a.innerHTML > b.innerHTML){
       return 1
     }
     if(a.innerHTML <= b.innerHTML){
       return -1
     }
     if( a.innerHTML == b.innerHTML){
       return 0
     }     
 });
 spisok[i].innerHTML = ''
 for(let li of sorted){
   spisok[i].appendChild(li)

    }
  }
 }
      
    
      

   
  




   



