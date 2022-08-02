const form = document.querySelector('#intro-form')
const inputs = document.querySelectorAll('.intro__input')

const isEmpty = (text) => !Boolean(text)

const getValidData = (inputList) => {
  const dataList = [...inputList].filter(input => input.value !== '').map(input => ({[input.name]:input.value}))
  return {...dataList}
}

const sendForm = () => {
  const thanksTitle = document.createElement('div')
  
  thanksTitle.classList.add('intro__thanks')
  
  thanksTitle.innerHTML = `
    <img class="thanks__img" src="./images/thanks.svg" alt="thanks" />
    <h1 class="thanks__title">Form submitted successfully.</h1>
  `
  form.innerHTML = ''
  
  form.append(thanksTitle)
}

const handleErrorOnEmpty = (inputList) => {
  const containers = document.querySelectorAll('.intro__inputContainer')
  const helperText = document.querySelectorAll('.intro__helper')

  inputList.forEach((input, index) => {
    if(isEmpty(input.value)) {
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

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputValues = [...inputs]
  handleErrorOnEmpty(inputs)
  const formData = getValidData(inputs)

  if(Object.keys(formData).length === 4) {
    sendForm()
  }
})

