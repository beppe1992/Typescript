import { Dipendente } from "./Dipendente";

class Dirigente extends Dipendente{
    
    constructor (nome: string, cognome:string, ruolo:string){
        
        super(nome,cognome);

        this.ruolo = ruolo;
    }

    

}