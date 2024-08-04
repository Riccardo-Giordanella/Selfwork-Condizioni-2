// Esercizio eseguito con if/else

let temperatura = prompt(`Inserisci la temperatura attuale:`);

if(temperatura < 20 && temperatura >= 0){
    console.log(`non ci sono più le mezze stagioni`);

}else if(temperatura >= 30){
    console.log(`lu mare, lu sole, lu ientu`);

}else if(temperatura < 30 && temperatura >= 20){
    console.log(`mi dia una peroni sudata`);

}else if(temperatura < 0 && temperatura >= -10){
    console.log(`non è tanto il freddo quanto l’umidità`);

}else if(temperatura < -10){
    console.log(`copriti…ancora ti raffreddi`);

}