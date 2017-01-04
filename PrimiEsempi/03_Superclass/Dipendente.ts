export class Dipendente {
    protected nome:string;
    protected cognome:string;
    protected ruolo:string;

    constructor(nome: string, cognome:string){
        this.nome = nome;
        this.cognome = cognome;
    }
}