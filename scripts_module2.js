console.log("o script novo está funcionando");
// Aula 10 trabalhando com DOM

//  var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// var conteudo_caixa_azul = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo_caixa_azul + "</h1>"
// document.getElementById("caixa_amarela").innerHTML =  "<h1>" + "caixa amarela" + "</h1>"



// //Aula 11 funções
// function soma(){
//     var x = 5;
//     var y = 2;
//     var soma = x+y;

//     console.log(soma);
// }

// soma();

// function soma_numeros(num1, num2){
//     var soma = num1+num2;
//     console.log(soma);
// }

// soma_numeros(10, 2);

// //desafio imc

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var peso = parseFloat(document.getElementById("peso").innerHTML);
// var altura = parseFloat(document.getElementById("altura").innerHTML);
// console.log(typeof altura);
// var meu_imc = valor_imc(peso, altura);

// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);
// console.log("O imc é: " + valor_imc(peso, altura));










//Aula 12 Arrays

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

//  console.log(alunos.length); // 3
//  console.log(num_primos[2]); // 5     
 
//  console.log("-----------------");

//  var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];
// console.log(grupos.length); //3
// console.log(grupos[1][2]); // andré
// console.log("-----------------");
// var gatos = ["eowin", "mel", "branquinha", "nala", "farofa"];

// gatos.push("chester"); //incluir um dado no final do array 
//console.log(gatos);

// gatos.pop(); // apaga o ultimo elemento do array
// console.log(gatos);

// gatos.unshift("chester"); //adiciona um elemento no inicio do array

// gatos.shift(); //apaga o primeiro elemento do array

// console.log(gatos);
// console.log(gatos.length);


// console.log("Método slice");
// console.log("-----------------");

// var gatos = ["eowin", "mel", "branquinha", "nala", "farofa"];

// var arraycat = gatos.slice(3,);
// console.log(arraycat);









//Aula 12 TIPOS DE DADOS 

//  var gatos = ["nala", "eowin"]; //array

//  var cats = { // OBJETO
//      'NOME' : 'eowin',
//      'IDADE' : '2ANOS'
//  };

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario.nome); // acessar um dado
// console.log(funcionario['nome']); //acessar um dado

// funcionario.nome = 'kelly cibely';
// console.log(funcionario.nome);
// funcionario.email = 'kellycibely@gmail.com'
// console.log(funcionario['email']);
// console.log(funcionario); 


// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1]['categorias'][0]);

// cursos[2].categorias[1] = 'administração de empresas';

// console.log(cursos[2].categorias[1]);






//Aula 13 MÉTODOS

var aluno = {
    'nome': 'Kelly Cibely',
    'sobrenome' : 'sousa lopes',
    'ano_nasc' : 1995,
    'ver_idade' : function () {
        var idade = 2019 - this.ano_nasc;
        return idade;
    },
    'nome_completo' : function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    }
};

var idade_kelly = aluno.ver_idade();

var nome_completo = aluno.nome_completo();


console.log(nome_completo);
console.log(idade_kelly);
