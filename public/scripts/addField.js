document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
  const newFields = document.querySelector('.schedule-item').cloneNode(true)
  
  const fields = newFields.querySelectorAll('input')

  fields.forEach(element => {
    element.value = ''
  });
  
  document.querySelector('#schedule-items').appendChild(newFields)
}