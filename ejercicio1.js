// Actividad no. 1
// ¿Divisible por el digito de la izquierda?
// Crea una función que tome un numero n y revisa si cada digito es divisible por el digito que tiene a su izquierda
// Regresa un arreglo booleano dependiendo si la condición se cumple.

// Por ejemplo: 
// Input = 73312
// Output = [false, false, true, false, true]
// a.	No hay digito a la izquierda de 7 -> false
// b.	3/7 = false
// c.	3/3 = true
// d.	1/3 = false
// e.	2/1 = true

//1. Convertir el numero a un arreglo (para separar los digitos)
//2. recorrer el arreglo generado
//3. excluir el primer digito
//4. hacemos la operacion de digito a la izquierda / digito (que esta siendo iterado)
//5. Usamos el operador % modulo o residuo
//6. Si el residuo es 0 entonces es divisible
//7. Si el residuo es diferente de 0 no divisible
//8. Si el residuo es divisible agregaremos el valor true al arreglo
//9. Si el residuo no es divisible agregaremos el valor false al arreglo
//10. Regresamos como resultado el arreglo después de hacer la operacion con todos los digitos

// Nota: El arreglo siempre debe de empezar con un valor en falso.
function divisibleByLeft(n) {
    let flag = false;
    const ansArr = [];
    const s = JSON.stringify(n);
    const arr=[];

    for(let i=0;i<s.length;i++){
      arr.push(parseInt(s[i]));
    };
    console.log(arr);
    
    for(let i=0;i<arr.length;i++){
      const residuo = arr[i]%arr[i-1];
      if(residuo !== 0){
        console.log(residuo)
        ansArr.push(flag);
      }else{
        console.log(residuo)
        flag = true;
        ansArr.push(flag);
        flag = false;
      };
    };
    return ansArr;
};

module.exports = {
    divisibleByLeft
}