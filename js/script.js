// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriRandom=[];

for(var i=0; i<5;i++){
    var numeriGenerati=parseInt(Math.floor(Math.random()*30)+1);
    numeriRandom.push(numeriGenerati);      
}
alert(numeriRandom);
console.log(numeriRandom); 
//timer//
var time=30;
var conteggio=setInterval(
    function(){ 
        document.getElementById("conteggio").innerHTML=time;
        time--;
        if(time==-1){
            clearInterval(conteggio);
            
        }
    
    }, 1000
);
