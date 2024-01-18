//pegar os pokemons vindos da api, e adicionar no <ol> pelo id
const pokeApiList = document.getElementById('pokeList')

//id do botao para carregar mais pokemos -> loadMoreButton
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 12
let offset = 0


function loadPokemonItems(offset, limit){

    //usando o objeto pokeApi para manipular a API response
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {

        //map -> transforma um elemento em outro elemento por meio de uma funcao de transformacao (converter pokemon para HTML)
        //estamos usando o join para substituir o html antigo pelo novo (manipulando o html)
        //depois concatenamos o html antigo com o novo

        const newHtml = pokemonList.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) =>
                        `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
            </li>
            `)
        .join('')

        pokeApiList.innerHTML += newHtml
        })
    .catch((error) => console.error(error))
    //.finally(() => console.log('Requisição concluída!'))
}

//pagina inicial com limit e offset declarados como padrao na const
loadPokemonItems(offset, limit)

//carregar mais pokemons quando clicar no botao
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
    console.log(offset)
})

    
