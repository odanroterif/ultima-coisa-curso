const nam = document.querySelector('#nome');
const phone = document.querySelector('#telefone');
const mai = document.querySelector('#mail');






function adicionarCliente() {
    let nome = nam.value;
    let telefone =  phone.value;
    let tuta = mai.value

    if (nome === '' || telefone === '' || mai.value === '') {
        alert('Preencha todos os campos!');
        return;
    }

    let tabela = document.getElementById('listaClientes');
    let novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = telefone;
    novaLinha.insertCell(2).innerText = tuta;
    let acaoCell = novaLinha.insertCell(3);
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'EXCLUIR';
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.onclick = function () {
        if(confirm('comfirma a exclusão?'))
        {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        }
    };
    acaoCell.appendChild(botaoExcluir);    
    nam.value = '';
    phone.value = '';
    tuta.value = '';
}