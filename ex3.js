console.log("exercicio 03");

//Q1

function converte (grau) {
    F = (9 * grau / 5) + 32;
    return F;
}

document.getElementById("converter").onclick = function () {
    var celcius = document.getElementById("temp_celsius").value;

    var resultado = converte(celcius);
    document.getElementById("temp_fahr").innerHTML = resultado;
}

//02
var inicio =1930;
var fim = 2018;
document.getElementById('anos_copa').innerHTML = "";

for(i = 0; inicio <= fim; i++){
    document.getElementById('anos_copa').innerHTML += "<li>" + inicio; 
    // console.log(inicio);
    inicio +=4;
}

//03
document.getElementById('calcular').onclick = function (){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var n_faltas = document.getElementById('n_faltas').value;
    var media;

    media = (nota1 + nota2) / 2;
    presenca = (20 - n_faltas) / 20;
    var situacao;

    if(media > 6.5 && presenca >= 0.7){
        situacao = 'aprovado';
    }else if(media < 6.5 && presenca < 0.7){
        situacao = 'reprovado por media e nota';
    }else if(media < 6.5){
        situacao = 'reprovado por nota';
    }else if(presenca <= 0.7){
        situacao = 'reprovado por falta';
    }
    var n_faltas = document.getElementById('result').innerHTML = situacao;
}

//04
var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];


total_vendas = 0;

for(a = 0; a < vendas_cursos.length; a++){
    document.getElementById('total_vendas').innerHTML = '';

    if(vendas_cursos[a].reembolso == null){
        total_vendas += vendas_cursos[a].valor;
        tabelahtml = "";
        tabelahtml += '<tr>';
        tabelahtml +=   '<td>' + vendas_cursos[a].aluno; + '</td>';
        tabelahtml +=   '<td>' + vendas_cursos[a].data; + '</td>';
        tabelahtml +=   '<td>' + vendas_cursos[a].valor; + '</td>';
        tabelahtml += '</tr>';

        document.getElementById('vendas_cursos').innerHTML += tabelahtml;
    }
    
}
document.getElementById('total_vendas').innerHTML += total_vendas;