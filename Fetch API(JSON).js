fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaElementos(json))

function carregaElementos(json){
    const table = document.createElement('table')
    for(let pessoas of json){
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoas.nome
        tr.appendChild(td)
        
        td = document.createElement('td')
        td.innerHTML = pessoas.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoas.cpf
        tr.appendChild(td)


        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
