//consumir api -> biblioteca fetch API
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//nativa do JS, funciona nos browsers mais atuais

const offset = 0
const limit = 12
//https://pokeapi.co/api/v2/pokemon?offset=0&limit=12
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//a api funciona com IO
//o fetch(url) faz um request e trara um promise da api (é uma promessa de um response)
//a resposta do fetch nao é instantanea -> processamento assincrono (processamento paralelo, uma hora ele traz a resposta)
//metodo then -> quando termina de executar/processar a requisicao, esse methodo de callback retorna a resposta do servidor
//o fetch faz o processamento da requisiçao e a funcao de callback passada no metodo then traz a resposta do servidor
//podemos encadear varios then em uma promisse
//arrow function (=>) -> substitui a function para simplificar o codigo (muito usada em callbacks)
//por padrao o fetch usa o method GET para requisiçoes

fetch(url)
//encadeamento de then para callback, com arrow functions, simplificando o codigo
//converter promisse -> response body para JSON
    .then((response) => response.json())
    .then((responseBody) => console.log(responseBody))
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída!'))

    