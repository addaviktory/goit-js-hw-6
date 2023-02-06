const addButton = document.querySelector('#counter [data-action = "increment"]')
const takeButton = document.querySelector('#counter [data-action = "decrement"]')

const counterDiv = document.querySelector('#value')

let counterValue = 0;
 
const addClickVelue = () => ((counterValue += 1), (counterDiv.textContent = counterValue))
const takeClickVelue = () => ((counterValue -= 1), (counterDiv.textContent = counterValue))

takeButton.addEventListener('click', takeClickVelue);
addButton.addEventListener('click', addClickVelue);
