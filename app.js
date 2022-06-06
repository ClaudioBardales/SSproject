const email = document.querySelector('#email');
const pattern =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const submitBtn = document.querySelector('form');
const span = document.querySelector('span');

const Checker = () => {
  if (email.value.match(pattern)) {
    email.style.border = '1px solid #00873f';
    email.style.borderRadius = '4px';
    span.innerHTML = '<i class="icon-style-green fa-solid fa-circle-check"></i>';
  } else {
    email.style.border = '1px solid red';
    email.style.borderRadius = '4px';
    span.innerHTML = '<i class="icon-style-error fa-solid fa-circle-xmark"></i>';
  }
  if (email.value === '') {
    email.style.border = 'inherit';
    span.innerHTML='';
  }
};

const renderPages = (e) => {
  const select = document.querySelector('#business');
  console.log(select.value)
  const radio = document.querySelector('input[type="radio"]:checked');
  console.log(radio.value);
  if (select.value === '1-10' && radio.value === 'document_storage') {
    window.location.href = "qualified.html"
  } else if(select.value === '1-10' && radio.value === 'full_text_search') {
    window.location.href = "qualified.html"
  } else if(select.value === '1-10' && radio.value === 'price'){
    window.location.href = "qualified.html"
  } else {
    window.location.href = "notqualified.html"
  }
  e.preventDefault();
  }


email.addEventListener('input', Checker);
submitBtn.addEventListener('submit', renderPages);
