document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formContato');

    form.addEventListener('submit', function(e) {
        // Previne o comportamento padrão de submissão do formulário
        e.preventDefault();

        // Captura os valores dos campos de entrada
        var nome = document.getElementById('nome').value;
        var telefone = document.getElementById('telefone').value;

        // Encontra o tbody da tabela pelo ID
        var tabelaContatos = document.getElementById('tabelaContatos');

        // Cria uma nova linha e células para a tabela com os valores inseridos
        var novaLinha = tabelaContatos.insertRow();
        var celulaNome = novaLinha.insertCell(0);
        var celulaTelefone = novaLinha.insertCell(1);

        // Insere os valores nas células
        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        // Limpa os campos de entrada para novas inserções
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    });
});
