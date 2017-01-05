import { IPersona } from "./IPersona";
import { GenitoreImpl } from "./GenitoreImpl";


// Creo un oggetto PersonaImpl che implementa l'interfaccia IPersona
var ioStesso = new GenitoreImpl('Giuseppe','Giordano');

// Chiamo la funzione saluta() definito dall'interfaccia
ioStesso.saluta();

// Chiamo la funzione iscrivi() definito nel presente file TS
iscrivi(ioStesso);


// QUESTO E' UN ESEMPIO DI UTILIZZO DELLE INTERFACCE: LA FUNZIONE ISCRIVI VUOLE COME PARAMETRO UN QUALSIASI OGGETTO CHE IMPLEMENTI
// L'INTERFACCIA IPersona
function iscrivi(persona: IPersona): void{
    // POSSO ACCEDERE ALLE VARIABILI DELL'OGGETTO IN QUANTO HANNO I GETTER
    console.log("Iscritta persona: "+persona.nome + " - " + persona.cognome + " - " + persona.eta);
}