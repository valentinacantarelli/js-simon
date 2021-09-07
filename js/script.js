// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//funzione di verifica


var numeriRandom=[];
var numeriInseriti=[];

//genero numeri random
for(var i=0; i<5;i++){
    var numeriGenerati=parseInt(Math.floor(Math.random()*30)+1);
    numeriRandom.push(numeriGenerati);      
}
alert(numeriRandom);

//timer//
var time=10;
var conteggio=setInterval(
    function(){ 
        document.getElementById("conteggio").innerHTML=time;
        time--;
        if(time==-1){
            clearInterval(conteggio);
            for(var i=1;i<=5;i++){                
                var numeriUtente=parseInt(prompt("inserisci i numeri che ricordi!"));
                numeriInseriti.push(numeriUtente);
            }
            var numeriIndovinati=[];
            for(var i=0;i<numeriInseriti.length;i++){
                if(numeriRandom.includes(numeriInseriti[i])==true && numeriIndovinati.includes(numeriInseriti[i])==false){
                    numeriIndovinati.push(numeriInseriti[i]);
                }
            }
            alert(`Hai indovinato ${numeriIndovinati.length}(${numeriIndovinati})`);
        }
    
    }, 1000
);
