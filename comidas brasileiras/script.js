const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Feijoada':
            console.log('Opção selecionada é Feijoada')
            resultado.innerHTML = "A feijoada é uma comida tipica da região sudeste do Brasil!"
            break;
        case 'Caldo de piranha':
            console.log('Opção selecionada é Caldo de Piranha')
            resultado.innerHTML = "Essa comida é da região Centro-Oeste do Brasil!"
            break
        case 'Pizza':
            console.log('Opção selecionada é Pizza')
            resultado.innerHTML = "A pizza não é do Brasil, ela foi criada na Itália!"
            break;
        case 'Tapioca':
            console.log('Opção selecionada é Tapioca')
            resultado.innerHTML = "Essa comida é tipica do nordeste!"
            break;
        case 'Carne do sol':
            console.log('Opção selecionada é Carne do sol')
            resultado.innerHTML = "Essa comida é tambem da região Nordeste do Brasil!"
            break;
        case 'Cocada':
            console.log('Opção selecionada é Cocada')
            resultado.innerHTML = "A cocada é uma comida tipica da Bahia!"
            break;
        case 'Cuca alemã':
            console.log('Opção selecionada é Cuca alemã')
            resultado.innerHTML = "A cuca alemã como o propio nome já diz se originou na Alemanha!"
            break;
        case 'Doce de cupuaçu':
            console.log('Opção selecionada é Doce de cupuaçu')
            resultado.innerHTML = "O doce de cupuaçu é uma comida tipica da região norte do Brasil!"
            break;
        case 'Empadão goiano':
            console.log('Opção selecionada é Empadão goiano')
            resultado.innerHTML = "O empadão goiano surigiu em goiás!"
            break;
        default:
            console.log('Opção selecionada é Lámen');
            resultado.innerHTML = "O lámen não é brasileiro, ele surgiu no japão!"
            break;
    }
}