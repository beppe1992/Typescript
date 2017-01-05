export interface IPersona {
    
    nome: string;
    cognome: string;
    
    // IL SIMBOLO ? INDICA CHE NON E' OBBLIGATORIO NELLE IMPLEMENTAZIONI
    eta?:string;

    saluta(): void;

}


