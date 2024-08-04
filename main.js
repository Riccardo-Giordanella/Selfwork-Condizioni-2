// Esercizio eseguito con if/else (Lascio commentato per non interferire con lo switch)

let temperatura = prompt(`Inserisci la temperatura attuale:`);

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
    case `-11`:
        console.log(`copriti…ancora ti raffreddi`);
    break;

    case `-10`:
    case `-9`:
    case `-8`:
    case `-7`:
    case `-6`:
    case `-5`:
    case `-4`:
    case `-3`:
    case `-2`:
    case `-1`:
        console.log(`non è tanto il freddo quanto l’umidità`);
    break;

    case `0`:
    case `1`:
    case `2`:
    case `3`:
    case `4`:
    case `5`:
    case `6`:
    case `7`:
    case `8`:
    case `9`:
    case `10`:
    case `11`:
    case `12`:
    case `13`:
    case `14`:
    case `15`:
    case `16`:
    case `17`:
    case `18`:
    case `19`:
        console.log(`non ci sono più le mezze stagioni`);
        break;

    case `20`:
    case `21`:
    case `22`:
    case `23`:
    case `24`:
    case `25`:
    case `26`:
    case `27`:
    case `28`:
    case `29`:
        console.log(`mi dia una peroni sudata`);
    break;

    case `30`:
        console.log(`lu mare, lu sole, lu ientu`);
    break;
}
