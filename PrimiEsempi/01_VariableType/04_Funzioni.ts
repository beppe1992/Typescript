
function saluta(messaggioBenvenuto:string, nome:string, cognome:string) : void{
    console.log(messaggioBenvenuto + " " + nome + " " + cognome);
}

saluta('Ciao','Giuseppe','Giordano');

// saluta('Ciao',true,'Giordano');  --> Se viene tolto il commento si può vedere come typescript dia un messaggio di errore essendo un linguaggio compilato (la funzione vuole in input
// una stringa, non un Boolean)
