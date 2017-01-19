import { IPersona } from "./IPersona";

export class GenitoreImpl implements IPersona {
    
    // VARIABILI DI CLASSE (LE PRIME DUE SONO EREDITATE DALL'INTERFACCIA)
    private _nome: string;
    private _cognome: string;
    private _figli: Array<IPersona>;

    // COSTRUTTORE
    constructor(nome: string,cognome: string){
        this._nome = nome;
        this._cognome = cognome;
    }
    
    // FUNZIONE
    saluta() : void{
        console.log();
    }

   // QUESTI SONO I METODI GET E SONO RICHIESTI DALL'INTERFACCIA IPersona (LE VARIABILE SI CHIAMA _nome PER NON ESSERE SOVRASCRITTA DAL METODO GET)
    get nome () : string { return this._nome; }
    get cognome () : string { return this._cognome; }


    private getStringaSaluto():string{
        return 'Ciao '+ this._nome + " " + this._cognome
    }
}