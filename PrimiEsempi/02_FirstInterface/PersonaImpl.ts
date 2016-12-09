class PersonaImpl implements IPersona {
    
    nome: string;
    cognome: string;

    constructor(nome: string,cognome: string){
        this.nome = nome;
        this.cognome = cognome;
    }
    
    saluta() : void{
        console.log('Ciao '+ this.nome + " " + this.cognome);
    }
}