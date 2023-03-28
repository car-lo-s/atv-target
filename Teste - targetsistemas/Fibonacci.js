function verificaFibonacci(num) {
    let anterior = 0;
    let atual = 1;
    let proximo = 1;
  
    while (proximo <= num) {
      if (proximo === num) {
        return true;
      }
      anterior = atual;
      atual = proximo;
      proximo = anterior + atual;
    }
  
    return false;
  }
  
  
  const numeroInformado = Number(prompt("Informe um número:"));
  const pertenceFibonacci = verificaFibonacci(numeroInformado);
  
  if (pertenceFibonacci) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
  }