const API = 'http://localhost:3000';

async function carregarUsuarios() {

    const resposta = await fetch(`${API}/users`);

    const usuarios = await resposta.json();

    const lista = document.getElementById('listaUsuarios');

    lista.innerHTML = '';

    usuarios.forEach(usuario => {

        lista.innerHTML += `
            <li>
                ${usuario.nome} - ${usuario.email}
            </li>
        `;
    });
}

async function cadastrarUsuario() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const idade = document.getElementById('idade').value;
    const area = document.getElementById('area').value;

    await fetch(`${API}/users`, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nome,
            email,
            senha,
            idade,
            area_interesse: area
        })
    });

    carregarUsuarios();
}

async function carregarOpportunities() {

    const resposta = await fetch(`${API}/opportunities`);

    const oportunidades = await resposta.json();

    const lista = document.getElementById('listaOp');

    lista.innerHTML = '';

    oportunidades.forEach(op => {

        lista.innerHTML += `
            <li>
                ${op.titulo} - ${op.empresa}
            </li>
        `;
    });
}

async function cadastrarOportunidade() {

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const empresa = document.getElementById('empresa').value;
    const tipo = document.getElementById('tipo').value;

    await fetch(`${API}/opportunities`, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            titulo,
            descricao,
            empresa,
            tipo,
            data_publicacao: '2026-05-24'
        })
    });

    carregarOpportunities();
}

carregarUsuarios();

carregarOpportunities();