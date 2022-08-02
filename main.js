const form = document.querySelector('#intro-form')
const inputs = document.querySelectorAll('.intro__input')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputValues = [...inputs]
  handleErrorOnEmpty(inputs)
})

function handleErrorOnEmpty(array) {
  const containers = document.querySelectorAll('.intro__inputContainer')
  const helperText = document.querySelectorAll('.intro__helper')

  array.forEach((input, index) => {
    if(input.value === '') {
      console.log(input)
      if(input.name === 'email') {
        input.value = 'email@example.com'
      }
      input.classList.add('errorInput')
      containers[index].classList.add('errorContainer')
      containers[index].lastElementChild.classList.remove('hidden')
      helperText[index].classList.remove('hidden')
    }
    else {
      input.classList.remove('errorInput')
      containers[index].classList.remove('errorContainer')
      containers[index].lastElementChild.classList.add('hidden')
      helperText[index].classList.add('hidden')
    }

  })
}