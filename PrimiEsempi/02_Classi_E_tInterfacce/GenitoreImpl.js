"use strict";
var GenitoreImpl = (function () {
    // COSTRUTTORE
    function GenitoreImpl(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    // FUNZIONE
    GenitoreImpl.prototype.saluta = function () {
        console.log('Ciao ' + this.nome + " " + this.cognome);
    };
    
    return GenitoreImpl;
}());
exports.GenitoreImpl = GenitoreImpl;
