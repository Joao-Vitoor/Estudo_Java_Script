// + - / * % ** 

let n1 = 10 
let n2 = 5 
// OPERADORES ARITMETICOS
/*
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

*/
// OPERADORES DE ATRIBUIÇÃO

let n3 = 20
n3 +=1
console.log(n3)


//INCREMENTO E DECREMENTO

// COMPARAÇÃO 
/*
Igualdade de valor ==
Igualdade de valor e tipo ===
<,>,<=,>=
!= valores diferentes
!== valores e tipos diferentes
*/
 console.log(n1,n2,n3)
 
 console.log(n2 != "4")


 //OPERADORES LÓGICOS 
 //Para uma pessoa viajar terá que ser maior de 18 anos
 //e não somente acompanhada dos pais 

 let idade = 18
 let PaisPresentes = false
 let ComprouBilhete = false 
 let podeViajar = (idade >= 18 || PaisPresentes) && ComprouBilhete
  console.log(`pode viajar: ${podeViajar}`)

  let somaValor1 = 5
  let somaValor2 = 3.5
  let media = (somaValor1 + somaValor2) / 2
  console.log (`A média do aluno é: ${media}`)

  // Exercicio para jovam aprendiz 
  //Para ingressar como jovem aprendiz, tem que possuir os seguintes requisitos.
  //Ser maior de 16 anos 
  // Estar cursando o Ensino Médio 
  //Nunca ter trabalhado com carteira assinada!!!!!!!

  let IdadeInscricao = 15
  let EnsinoMedio = true 
  let PrimeiroEmprego = true
  let VagaConcluida = (IdadeInscricao > 16 && EnsinoMedio) && PrimeiroEmprego
  console.log(`Você tem os pre-requisitos para atuar como Aprendiz: ${VagaConcluida}`)