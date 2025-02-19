//1.Create console.log with the string "Hello World!"
//2.Ensure it is added to all pages.
//3. Add details from Canvas.

//Step 1 & 2:
console.log('Hello World!');

//Step 3:
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

