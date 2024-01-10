//pegar os pokemons vindos da api, e adicionar no <ol> pelo id
const pokeApiList = document.getElementById('pokeList')

//converter pokemon para HTML
function convertPokemonToHtml(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Pokémon_Bulbasaur_art.png" 
                alt="${pokemon.name}">
            </div>
        </li>
    `
}

//usando o objeto pokeApi para manipular a API response
pokeApi.getPokemons().then((pokemonList = []) => {

    //map -> transforma um elemento em outro elemento por meio de uma funcao de transformacao
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

    
