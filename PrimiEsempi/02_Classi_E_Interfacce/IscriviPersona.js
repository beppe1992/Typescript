"use strict";
var GenitoreImpl_1 = require("./GenitoreImpl");
// QUESTO E' UN ESEMPIO DI UTILIZZO DELLE INTERFACCE: LA FUNZIONE ISCRIVI VUOLE COME PARAMETRO UN QUALSIASI OGGETTO CHE IMPLEMENTI
// L'INTERFACCIA IPersona
function iscrivi(persona) {
    console.log("Iscritta persona: " + persona.nome + " - " + persona.cognome);
}
// Creo un oggetto PersonaImpl che implementa l'interfaccia IPersona
var ioStesso = new GenitoreImpl_1.GenitoreImpl('Giuseppe', 'Giordano');
// Chiamo la funzione saluta() definito dall'interfaccia
ioStesso.saluta();
// Chiamo la funzione iscrivi() definito nel presente file TS
iscrivi(ioStesso);
