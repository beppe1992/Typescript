enum Colori { 
    Rosso, 
    Verde, 
    Blu };


// Viene creata una costante "rosso" di tipo Colori
const rosso : Colori = Colori.Rosso;

// Il linguaggio vede gli Enum come un'array
console.log(Colori[0]); // 'Rosso'



enum EnumSetIndex { 
    Spanish = 1,
    French,
    Italian,
    Romanian,
    Portuguese };

// Impostando l'indice di Spanish a 1, tutti gli altri indici partono da 1 anzi che da 0
console.log(EnumSetIndex[4]); // 'Romanian'
console.log(EnumSetIndex[0]); // undefined 