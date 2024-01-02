const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")

let mapedKeys = []
let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`
  audio.play()

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add("active")
  setTimeout(() => {
    clickedKey.classList.remove("active")
  }, 150);
}

pianoKeys.forEach((key) => {
  //console.log(key.dataset.key) 1° key -> parameter, dataset -> "data-key", 2° key -> valor da key no HTML
  key.addEventListener("click", () => playTune(key.dataset.key)) //sem "{}", caso seja somente uma linha
  mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key)
  }
})