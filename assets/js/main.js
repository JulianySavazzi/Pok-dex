//pegar os pokemons vindos da api, e adicionar no <ol> pelo id
const pokeApiList = document.getElementById('pokeList')

//converter pokemon type para <li>
function  convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

//converter pokemon para HTML
function convertPokemonToHtml(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                <img src="" 
                alt="${pokemon.name}">
            </div>
        </li>
    `
}

//usando o objeto pokeApi para manipular a API response
pokeApi.getPokemons().then((pokemonList = []) => {

    //map -> transforma um elemento em outro elemento por meio de uma funcao de transformacao
    //estamos usando o join para substituir o html antigo pelo novo (manipulando o html)
    pokeList.innerHTML += pokemonList.map(convertPokemonToHtml).join('')

        //separando os elementos da lista do codigo HTML
        // const listItems = []
        // for (let i = 0; i < pokemonList.length; i++) {
        //     const element = pokemonList[i]
        //     // console.log(convertPokemonToHtml(element))
        //     //acessar janela -> window
        //     //document -> acessar documento HTML atual 
        //     //innerHTML -> concatenar o codigo html passado por string com a pagina
        //     // pokeApiList.innerHTML += convertPokemonToHtml(element) -> concatena cada elemento da lista, browse precisa recarregar a lista inteira varias vezes
        //     //é melhor concatenar tudo de uma vez, em vez de concatenar cada objeto da lista
        //     listItems.push(convertPokemonToHtml(element))
        // }
})
.catch((error) => console.error(error))
    //.finally(() => console.log('Requisição concluída!'))

    
