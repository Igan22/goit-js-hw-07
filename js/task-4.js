const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = {};
  const inputs = event.target.elements;

  for (let input of inputs) {
    if (input.nodeName === 'INPUT') {
      const { name, value } = input;
      formData[name] = value.trim();
    }
  }

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  form.reset();
}
