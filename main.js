// array de frases
const phrases = ["A vida trará coisas boas se tiver paciência.", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
"Não compense na ira o que lhe falta na razão", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "A maior de todas as torres começa no solo.",
"Não importa o tamanho da montanha, ela não pode tapar o sol.", "O bom-senso vale mais do que muito conhecimento", "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
"São os nossos amigos que nos ensinam as mais valiosas lições.", "A adversidade é um espelho que reflete o verdadeiro eu"]


// variables
const Home= document.querySelector(".home")
const Sorte = document.querySelector(".sorte")

// function
function handleClick () {

    Home.classList.add('hide')
    Sorte.classList.remove('hide')

    phraseCookieFotune()

}

function handleResetCookie () {
    location.reload()

    Sorte.classList.add('hide')
    Home.classList.remove('hide')
}

function randomPhrases(arrayDeFrases) {

    var randomIndex = Math.floor(Math.random() * arrayDeFrases.length);
  
    return arrayDeFrases[randomIndex];
}

function phraseCookieFotune () {

    const randomPhrase = randomPhrases(phrases)
    const screen2 = document.querySelector(".screen2")
    
    screen2
        .querySelector(".screen2 p")
        .innerText = randomPhrase
}
