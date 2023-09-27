const textJoke = document.getElementById('text-joke')
const btnJoke = document.getElementById('btnJoke')

function getNewJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(response => response.json())
    .then(item => {
        textJoke.innerText = item.joke
        btnJoke.innerHTML = 'Tell me another Joke!'
    })
}