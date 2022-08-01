const form = document.querySelector('#intro-form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(event);
})