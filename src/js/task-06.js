const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onBlurInput)

function onBlurInput (event) {
    if (event.currentTarget.value.trim().length === Number(inputText.dataset.length)) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid')
    }
    else inputText.classList.add('invalid') || inputText.classList.replace('valid', 'invalid')         
}



