//funçoes de manipulaçao da pokeAPI
//consumir api -> biblioteca fetch API
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//nativa do JS, funciona nos browsers mais atuais

//criar obj JS
const pokeApi = {}

//a api funciona com IO
//o fetch(url) faz um request e trara um promise da api (é uma promessa de um response)
//a resposta do fetch nao é instantanea -> processamento assincrono (processamento paralelo, uma hora ele traz a resposta)
//metodo then -> quando termina de executar/processar a requisicao, esse methodo de callback retorna a resposta do servidor
//o fetch faz o processamento da requisiçao e a funcao de callback passada no metodo then traz a resposta do servidor
//podemos encadear varios then em uma promisse
//arrow function (=>) -> substitui a function para simplificar o codigo (muito usada em callbacks)
//por padrao o fetch usa o method GET para requisiçoes

pokeApi.getPokemonDetail = (pokemonItem) => {
    return fetch(pokemonItem.url).then((response) => response.json())

}

//retornar a manipulaçao da API feita pelo fetch
pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    //encadeamento de then para callback, com arrow functions, simplificando o codigo
    //converter promisse -> response body para JSON
    //vamos transformar a lista de pokemons em uma promise list com .map, para receber os detalhes dos pokemons
        .then((response) => response.json())
        .then((responseBody) => responseBody.results)
        .then((pokemonsList) => pokemonsList.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}

//precisamos fazer a requisicao do detalhe de cada pokemon
//Promise.all -> quando temos varias requisicoes (recebe um array de promisses)
//manipular multiplas requisicoes em paralelo
//Promise.all([
//     //quando terminar a lista de promises
//     //o then vai retornar a response de todas as promises
//
//])