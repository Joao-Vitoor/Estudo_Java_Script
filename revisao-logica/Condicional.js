///

let Idade = 17
let Experiencia  = 2
let EnsinoSuperior = true 
const PodeAtuar = (Idade >= 18 && Experiencia >= 2) && EnsinoSuperior;
console.log(`PodeAtuar: ${PodeAtuar}`);

if(Idade >= 18 && Experiencia >= 2 && EnsinoSuperior  == true){
    console.log("Apto para iniciar as atividades")
}   else{
  console.log("Usuário não apto para iniciar o curso!")
}

 
// && quando usuamos o && todas as possibilidades terão que ser verdadeiras 
// || quando usamos o || pelo menos uma possibilidade terá que ser verdadeira 

let Nota1 = 6
let Nota2 = 6
let media = (Nota1 + Nota2) / 2 

if(Nota1 === 0 || Nota2 ===0){
    console.log("REPROVADO!")
}

else if(media >= 6){
    console.log(`usuário atingiu nota 6: ${media} nota final APROVADO!`)
} else{
    console.log(`usuário não atingiu 6: ${media} nota final REPROVADO!`)
}