// 2. Arreglo de múltiplos
// Crea una función que toma dos números como argumentos (num, length) y regresa un arreglo de múltiplos de num hasta que la longitud del arreglo alcance el valor de length.

// Por ejemplo: 
// Input = (7, 5)
// Output = [7, 14, 21, 28, 35]

// Input = (12, 10)
// Output = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]


function arrayOfMultiples (num, length) {
	const multArr=[];
    let currentMult=num;
    multArr.push(currentMult);
    for(let i=0;i<length-1;i++){
        currentMult+=num;
        multArr.push(currentMult);
    };
    return multArr;
};

module.exports = {
    arrayOfMultiples
}