// Anagrama Valido
// Escribe una función que reciba dos strings s y t como argumentos y determine si t es un anagrama de s
// https://www.ejemplos.co/50-ejemplos-de-anagramas/

const isAnagram = (s, t) => {
  let count = 0;
  if(s.length != t.length){
    return false;
  }else{
    for(let i=0;i<t.length;i++){
     if(s.includes(t[i])){
       count ++;
     }
    } 
    if(count>t.length){
      return false;
    }else if(count<t.length){
      return false;
    }else{
      return true;
    }
  }
}

module.exports = {
    isAnagram
}