console.log("O arquivo 'ex1.js' está funcionando");

var nome = "kelly cibely";
var ano_nascimento = 1995;
var ano_atual = 2019;
var idade = 2019 - 1995;
 console.log("olá me chamo " + nome + "," + "tenho " + idade + "anos e estou estudando javascript");


 var nome_aluno =  "joão";
 var matricula = "123456";
 var prova1 = 5;
 var prova2 = 8;
var media = (prova1 + prova2) / 2; 

console.log("O aluno " + nome_aluno + ", matricula " + matricula + ", obteve a média final " + media);


var fone = "998227519";
//console.log(fone.length == 9);
console.log( "Resultado do teste:" + (fone.length == 9));
 
console.log(Math.pow(32,6));


// var NOME; // legal

// var $num1; //legal

// var typeof; // ilegal

// var nome-aluno; //ilegal

// var tentativa_2; // legal

// var 2a_tentativa; //ilegal

// var nome completo; //ilegal



var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); //2525?
console.log( (7+5) / numero + 2 ); // 4 errei
console.log(pressao); //undefined
console.log(temperatura); // null
console.log(typeof pressao); // undefined
console.log(typeof temperatura); // Object


var idade = 65;

    console.log(idade != 65); // false
    console.log(idade >= 65);  //true
    console.log("65" == idade); // true
    console.log(65 !== idade); // false
    console.log(typeof (idade > 60)); //boolean
    console.log(typeof (idade > 70)); //boolean