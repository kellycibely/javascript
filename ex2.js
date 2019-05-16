//01
console.log("iniciado");
num1 = parseFloat(document.getElementById('num_1').innerHTML);
num2 = parseFloat(document.getElementById('num_2').innerHTML);

soma = (num1 + num2);
document.getElementById('resultado').innerHTML = soma;

//02

function converte (grau) {
    F = (9 * grau / 5) + 32;
    return F;
}

var grau_cel = parseFloat(document.getElementById('caixa_azul').innerHTML);

var conversao = converte(grau_cel);
document.getElementById('caixa_amarela').innerHTML = conversao;

//03
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

var array_novo = grupos.slice(1,);
 array_novo.push(["Mariana", "Felipe" , "Carla"]);
 console.log(array_novo);

 //04
 var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval' : function (){
        var total = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return total;
    },
    'media_aval' : function (){
        var media =  ( (this.n_aval_1_estrela * 1) + ( this.n_aval_2_estrelas * 2) + ( this.n_aval_3_estrelas * 3) + ( this.n_aval_4_estrelas * 4) + ( this.n_aval_5_estrelas * 5)  ) / ( this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas);
        return media;
    }

}


//a)
var categoria_principal = curso.categoria[0];

document.getElementById("categoria_principal").innerHTML = categoria_principal;

//b)
var total_aval = curso.total_aval();
var media_aval = curso.media_aval().toFixed(2);
document.getElementById("total_aval").innerHTML = total_aval;
document.getElementById("media_aval").innerHTML = media_aval;


//05

var pessoa = {
    'nome' : 'kelly',
    'sobrenome' : 'cibely',
    'email' : 'kelly@gmail.com'
}


function tabela (pessoa){

var tabela = '<div class="tableBox">';
tabela += '<table>';
tabela += '<tr>';
tabela += '    <th>Nome Completo</th>';
tabela += '<th>Email</th>';
tabela += '  </tr>';
tabela += '   <tr>';
tabela += '  <td>' + pessoa.nome + ' ' + pessoa.sobrenome + '</td>';
tabela += '<td>' + pessoa.email + '</td>';
tabela += '</tr>';
tabela += '</table>';
tabela += '</div>';

return tabela;
}

var table = tabela(pessoa);

document.getElementById('tabela').innerHTML = table;





    
    
        
  
 
    
    
    


