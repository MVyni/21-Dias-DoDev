let arrayA = [13,20,10,22,24,20,27,17,19,14];
let arrayB = [24,22,23,11,15,17,29,14,16,21];

function doisArrays(arrayUm, arrayDois){
    let arrayIguais = [];
    let contador = 0;

    for(let i = 0; i < arrayUm.length; i++){
        for(let j = 0; j < arrayDois.length; j++){
            if(arrayUm[i] === arrayDois[j]){

                arrayIguais[contador] = arrayUm[i];
                contador++
                j = arrayDois.lenght
            }
        }
    }
    return arrayIguais;
}
console.log(doisArrays(arrayA, arrayB))
    