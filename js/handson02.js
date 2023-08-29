function exibirMensagem(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    alert ("hello Word " + nome + " " + sobrenome);
    alert(`Hello World ${nome + " " + sobrenome}`);
}
