// Esercizio eseguito con if/else (Lascio commentato per non interferire con lo switch)

let temperatura = Number(prompt(`Inserisci la temperatura attuale:`));


// if(temperatura < 20 && temperatura >= 0){
//     console.log(`non ci sono più le mezze stagioni`);

// }else if(temperatura >= 30){
//     console.log(`lu mare, lu sole, lu ientu`);

// }else if(temperatura < 30 && temperatura >= 20){
//     console.log(`mi dia una peroni sudata`);

// }else if(temperatura < 0 && temperatura >= -10){
//     console.log(`non è tanto il freddo quanto l’umidità`);

// }else if(temperatura < -10){
//     console.log(`copriti…ancora ti raffreddi`);

// }

// Inserimento di switch
switch(temperatura){
    case temperatura < -10:
        console.log(`copriti…ancora ti raffreddi`);
    break;

    case temperatura < 0:
        console.log(`non è tanto il freddo quanto l’umidità`);
    break;

    case temperatura < 20:
        console.log(`non ci sono più le mezze stagioni`);
        break;

    case temperatura < 30:
        console.log(`mi dia una peroni sudata`);
    break;

    default:
        console.log(`lu mare, lu sole, lu ientu`);
    break;
}
