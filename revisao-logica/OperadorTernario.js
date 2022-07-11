//Forma mais simplificada para fazer o comando simples do IF/ELSE IF /ELSE


let tipoPedido = "entrega";
let statusPagamento = "pago";
 
let situacaoEntrega =
(tipoPedido === "entrega" && statusPagamento === "pago")
  ? "Entrega liberada"
  : "Entrega não liberada";
console.log(situacaoEntrega);


////// OUTRO EXEMPLO

let idade = 60
let podeDirigir = (idade >= 18) ? "Pode Dirigir" : "Não Pode Dirigir";
console.log(podeDirigir)


///// OUTRO EXEMPLO 
// EXEMPLO PARA HABILITAÇÃO PROVISOPRIA !!!!!!!

let permissao = 18
let PermissaoDirigir = (permissao < 12) ? "NÃO TEM DIREITO A PERMISSÃO, POIS HABILITAÇÃO NÃO TEM VALIDADE DE 12 MESES" : "TEM DIREITO A HABILITAÇÃO DEFINITIVA!"
console.log(PermissaoDirigir)