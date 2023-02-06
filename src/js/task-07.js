const fontSizeText = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

text.style.fontSize = fontSizeText.value + 'px'

function onInput(){
    text.style.fontSize = fontSizeText.value + "px"
}

fontSizeText.addEventListener("input", (event) => {
    return fontSizeText + onInput(`${event.currentTarget.value}px`)
});