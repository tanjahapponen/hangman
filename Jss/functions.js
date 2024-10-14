const input = document.querySelector('input')

const output = document.querySelector('output')

const span = document.querySelector('span')

 

const words = [ 

    "programming", 

    "javascript", 

    "database", 

    "markup", 

    "framework", 

    "variable", 

    "stylesheet", 

    "library", 

    "asynchronous", 

    "hypertext" 

]

 

let randomizedWord = ''

let maskedWord = ''

let guessCount = 0

 

const newGame = () => { 

    const random = Math.floor(Math.random() * words.length)

    randomizedWord = words[random]

    maskedWord = "*".repeat(randomizedWord.length)

    guessCount = 0

    console.log(randomizedWord) 

    output.innerHTML = maskedWord 

    span.textContent = guessCount

}; 

 

const win = () => { 

    alert(`You have guessed right! The word is "${randomizedWord}". Total guesses: ${guessCount}`)

    newGame()

}; 

 

const replaceFoundChars = (guess) => { 

    for (let i = 0; i < randomizedWord.length; i++) { 

        const char = randomizedWord.substring(i, i + 1) 

        if (char === guess) { 

            let newString = maskedWord.split('') 

            newString.splice(i, 1, guess) 

            newString = newString.join('') 

            maskedWord = newString; 

        } 

    } 

    output.innerHTML = maskedWord

}; 

 

newGame()

 

input.addEventListener('keypress', (e) => { 

    if (e.key === 'Enter') { 

        e.preventDefault()

 

        const guess = input.value.toLowerCase()

        if (guess) { 

            guessCount++

            span.textContent = guessCount 

 

            if (guess === randomizedWord.toLowerCase()) { 

                win();n 

            } else if (guess.length === 1) { 

                replaceFoundChars(guess); 

                if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) { 

                    win()

                } 

            } 

            

            input.value = ''

        } 

    } 

}); 