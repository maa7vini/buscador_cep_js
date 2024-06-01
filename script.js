document.getElementById('procurarCep').addEventListener('click', () => {
    const cep = document.getElementById('cep').value

    if(cep){
        procurarCEP(cep);
    }
});

async function procurarCEP(cep){
    const api = `https://viacep.com.br/ws/${cep}/json`;

    try{
        const response = await fetch(api);

        if(response.ok) {
            const cEP = await response.json();

            displayCepInfo(cEP)
        } else {
            alert("CEP não encontrado")
        }
    } catch(error) {
        console.error("Error fetching user:", error);
        alert('Error fetching user');
    }
}

function displayCepInfo(cEP){
    document.getElementsByClassName('results_container')[0].style.display = 'flex';
    document.getElementById('ceep').textContent = cEP.cep;
    document.getElementById('rua').textContent = cEP.logradouro;
    document.getElementById('bairro').textContent = cEP.bairro;
    document.getElementById('localidade').textContent = cEP.localidade;
    document.getElementById('estado').textContent = cEP.uf;
    document.getElementById('ddd').textContent = cEP.ddd;
}