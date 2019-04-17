console.log("Joke works");

//Create the objects//
const setupElement = document.querySelector ("#setup"); 
const punchlineElement = document.querySelector ("#punchline");

//Make it visible//
function addToDom(jokeObj) {
    console.log("Hello from addToDOM")
    setupElement.innerHTML = `<h4>${jokeObj.setup}</h4>`
    punchlineElement.innerHTML = `<p>${jokeObj.punchline}</p>`;
}
//Get Data//
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(jokes => jokes.json())
    .then(parsedJSON => {
        console.log("joke", parsedJSON.setup, parsedJSON.punchline)
        addToDom(parsedJSON) //Call the function to make it visible//
    })
