import { IPersona } from "./IPersona";

export class GenitoreImpl implements IPersona {
    
    // VARIABILI DI CLASSE (LE PRIME DUE SONO EREDITATE DALL'INTERFACCIA)
    nome: string;
    cognome: string;
    figli: Array<IPersona>;

    // COSTRUTTORE
    constructor(nome: string,cognome: string){
        this.nome = nome;
        this.cognome = cognome;
    }
    
    // FUNZIONE
    saluta() : void{
        console.log('Ciao '+ this.nome + " " + this.cognome);
    }
}