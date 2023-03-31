import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const userData = {};
const fillContactFormFields = () => {
  const userInfoFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (userInfoFromLS === null) return;
  console.log(userInfoFromLS);
  for (const key in userInfoFromLS) {
    form.elements[key].value = userInfoFromLS[key];
  }
};
fillContactFormFields();

const formFieldChangeHandler = event => {
  const { target: contactFieldEl } = event;

  const contactFieldValue = contactFieldEl.value;
  const contactFieldName = contactFieldEl.name;
  userData[contactFieldName] = contactFieldValue;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
};
const formFieldSubmitHandler = e => {
  console.log(userData);
  e.preventDefault();
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

form.addEventListener('input', throttle(formFieldChangeHandler, 500));
form.addEventListener('submit', formFieldSubmitHandler);
