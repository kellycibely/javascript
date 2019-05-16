console.log("Esta funcionando o js");

//Aula 16

// document.getElementById('click-me').onclick = function () { 
//     alert("você clicou no botão");
// };

// document.getElementById('hover-me').onmouseover = function () {
//     alert('o mouse está sobre o botão');
// };

// document.getElementById('leave-me').onmouseout = function () {
//     alert('você saiu de cima do botão');
// };

// document.onkeydown = function () {
//     alert('você apertou uma tecla ' + event.keyCode);
// };

//Aula 20 mudando css

// document.getElementById("botao_cor").onclick = function () {
//   document.getElementById("botao_cor").style["background-color"] = "purple";
//   this.style.transform = "translateX(100px)";
// };


// Aula 21 selecionando elementos html
// var exemplo = document.getElementsByClassName('exemplo');

// exemplo[0].innerHTML = "teste1";
// exemplo[1].style.color = 'blue';


//aula 22 Loops e For
// for (var a= 0; a < 5; a++) {
//     // console.log(a);
// }

// cats = ['eowin', 'nala', 'farofa'];

// console.log(cats.length);

// for(var b = 0; b< cats.length; b++) { 
//     console.log(cats[b]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'

// }

// for (var prop in carro) { 
//     console.log(prop + ":" + carro[prop]);
// }

// var elementos = document.getElementsByClassName("exemplo");

// for(var c = 0; c < elementos.length; c++) {
//     elementos[c].style.color = "blue";
// }



//Aula 23 While e Do while

// var elementos = document.getElementsByClassName('exemplo');

// var count = 0;

// // while(count < elementos.length){
// //     console.log(elementos[count]);
// //     elementos[count].style.color = "blue";
// //     count ++;
// // }

// do {
//     console.log(count);
//     count ++;
// } while(count < 3);

 
//Alinhamento de loops
var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': undefined
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];


var list_elements = document.getElementById('filhos');
list_elements.innerHTML = "";

for (var a = 0; a < funcionarios.length; a++) {
    var lista_filhos = funcionarios[a].filhos;

    if(funcionarios[a].filhos){
        for(b = 0; b < lista_filhos.length; b++){
            list_elements.innerHTML += "<li>" + lista_filhos[b] + " FILHO DE: " + funcionarios[a].nome;
        }
    }
}

var total_vendas = 0;
document.getElementById('vendas_cursos').innerHTML = "";


for (var a = 0; a < vendas_cursos.length; a++){
    
    if(vendas_cursos[a].reembolso == null){
        total_vendas += vendas_cursos[a].valor; 

        var linhahtml = "";
        linhahtml += "<tr>";
        linhahtml +=    "<td>" + vendas_cursos[a].aluno;  + '</td>';
        linhahtml +=    "<td>" + vendas_cursos[a].data;  + '</td>';
        linhahtml +=    "<td>" + vendas_cursos[a].valor;  + '</td>';
        linhahtml += "<tr>";

        document.getElementById('vendas_cursos').innerHTML += linhahtml;



    }
}

document.getElementById('total_vendas').innerHTML = total_vendas;
