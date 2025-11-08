document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        alert('Por favor, preencha o campo Nome antes de enviar.');
        document.getElementById('nome').focus();
        event.preventDefault(); // Impede o envio do formulário
    }
});
