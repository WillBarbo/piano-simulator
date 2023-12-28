const pianoKeys = document.querySelectorAll(".piano-keys .key")

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`
  audio.play()
}

pianoKeys.forEach((key) => {
  console.log(key.dataset.key) //1° key -> parameter, dataset -> "data-key", 2° key -> valor da key no HTML
  key.addEventListener("click", () => playTune(key.dataset.key)) //sem "{}", caso seja somente uma linha
})

