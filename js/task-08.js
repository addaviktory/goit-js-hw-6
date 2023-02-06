const formElement = document.querySelector('.login-form')
let userData = {};

formElement.addEventListener('submit', onSendForm)

function onSendForm(event) {
    event.preventDefault();
    const { elements: { email, password }
} = event.currentTarget
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Поле не може бути пустим.')
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => { 
            userData[name] = value;
        })
        console.log(userData);
        return formElement.reset()
    }
}
