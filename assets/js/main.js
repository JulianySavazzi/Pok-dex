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

fetch(url).then(
    //por padrao o fetch usa o method GET para requisiçoes
    function(response){
        //converter response body para JSON
        response.json().then(
            function (responseBody){
                console.log(responseBody)
            }
        )
        console.log(response)
    }
).catch(function (error){
    console.error(error)
}).finally(function (){
    console.log('Requisição concluída!')
})