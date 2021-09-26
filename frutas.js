/*1) Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
a) Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
b) Se for kiwi, retorne: “Estamos com escassez de kiwis”.
c) Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
d) Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema! */

let fruta = "kiwi";
function frutasVariadas (fruta){


switch  (fruta){
  case "maca": return "não vendemos está fruta aqui"
    break;
  case "kiwi": return "Estamos com escassez de kiwis"
    break; 
  case "melancia": return "Aqui está, são 3 reais o quilo."
       default: return " Procure o administrador do sistema! "
}
  
} console.log(frutasVariadas("melancia"))

/*
2) As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
a) Salários até R$ 280,00 (incluindo) : aumento de 20%
b) Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
c) Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
d) Salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe no console:
● O salário antes do reajuste;
● O percentual de aumento aplicado;
● O valor do aumento;
● O novo salário, após o aumento.
*/

function aumentoDoSalario(salario){
 
  if (salario<=280.00){ 
    salario = salario *1.2
    console.log (salario + "depois de 20% de aumento")
    } else if (salario > 280.000 && salario < 700.00) {
     salario = salario *1.5
      console.log (salario + "depois de 15% de aumento")
    } else if (salario > 700.00 && salario < 1500.00){
      salario = salario *1.1
      console.log (salario + " depois de 10% de aumento")
    }  else if(salario > 1500.00){
      salario = salario *1.05
      console.log (salario + " depois de 5% de aumento")
     } }
 console.log (salario (1500))