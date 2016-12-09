function saluta(messaggioBenvenuto, nome, cognome) {
    console.log(messaggioBenvenuto + " " + nome + " " + cognome);
}
var nome = 'Giuseppe';
var cognome = 'Giordano';
// var eta: number = true; --> Se viene tolto il commento si può vedere come typescript dia un messaggio di errore essendo un linguaggio compilato
// Altri tipi utilizzabili sono: Boolean, Any, Arrays
saluta('Ciao', nome, cognome);
