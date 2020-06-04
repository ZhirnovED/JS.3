window.onload = function(){
    let strany = document.getElementById('strany');
    let goroda = document.getElementById('goroda');
    let country = {'Россия' : ["Москва", "Самара", "Казань"],
                   'Германия' : ["Берлин", "Мюнхен", "Гамбург"],
                   'Испания' : ["Мадрид", "Барселона", "Севилья"],
                   'Италия' : ["Рим", "Флоренция", "Милан"],
                   'Португалия' : ['Порту', "Лиссабон", "Брага"],
}
   var ke = Object.keys(country)
   for(var i=0; i<ke.length; i++){
      var option = document.createElement("option");
      option.setAttribute("value", ke[i]);
      option.innerHTML = ke[i];
      strany.appendChild(option);
  }
    strany.addEventListener('change', function(){
    var gorod = country[this.value]
    goroda.length = 0;
    for(var j=0; j < gorod.length; j++){
        goroda.add(new Option(gorod[j]));
         }
     });
       
}
     
      
 
 



 
     