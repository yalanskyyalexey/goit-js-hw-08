import throttle from 'lodash/throttle';

const refs = document.querySelector('.feedback-form');

refs.addEventListener('input', throttle(inputData, 500));
refs.addEventListener('submit', inputSubmit);

if (localStorage.getItem('feedback-form-state')) {
  const inputDataValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  refs.querySelector('input').value = inputDataValue.email;
  refs.querySelector('textarea').value = inputDataValue.message;
}

function inputData() {
  const {
    elements: { email, message },
  } = refs;

  const element = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(element));
}

function inputSubmit(elm) {
  elm.preventDefault();

  const inputDataValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(inputDataValue);
  localStorage.removeItem('feedback-form-state');

  elm.currentTarget.reset();
}
