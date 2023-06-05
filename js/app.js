const nameDiv = document.querySelector('.card__nameDiv');
const emailDiv = document.querySelector('.card__emailDiv');
const ageDiv = document.querySelector('.card__ageDiv');
const countryDiv = document.querySelector('.card__countryDiv');
const phoneDiv = document.querySelector('.card__phoneDiv');

const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userAge = document.getElementById('user-age');
const userCountry = document.getElementById('user-country');
const userPhone = document.getElementById('user-phone');
const getRandomUserBtn = document.getElementById('get-random-user');

function createElements(user) {
  console.log(user);
  //img
  const imgDiv = document.querySelector('.card__imgDiv');
  imgDiv.innerHTML = '';
  const imgEl = document.createElement('img');
  imgEl.classList.add('card__img');
  imgEl.src = user.picture.large;
  imgDiv.append(imgEl);
  //name
  const nameDiv = document.querySelector('.card__nameDiv');
  nameDiv.innerHTML = '';
  const nameTitle = document.createElement('p');
  nameTitle.innerText = 'Hi, My name is';
  const nameEl = document.createElement('p');
  nameEl.classList.add('card__info2');
  nameEl.innerText = `${user.name.first} ${user.name.last}`;
  nameDiv.append(nameTitle, nameEl);
  //email
  const emailDiv = document.querySelector('.card__emailDiv');
  emailDiv.innerHTML = '';
  const emailTitle = document.createElement('p');
  emailTitle.innerText = 'My email address is';
  const emailEl = document.createElement('p');
  emailEl.classList.add('card__info2');
  emailEl.innerText = user.email;
  emailDiv.append(emailTitle, emailEl);
  //age
  const ageDiv = document.querySelector('.card__ageDiv');
  ageDiv.innerHTML = '';
  const ageTitle = document.createElement('p');
  ageTitle.innerText = 'My age is';
  const ageEl = document.createElement('p');
  ageEl.classList.add('card__info2');
  ageEl.innerText = user.dob.age;
  ageDiv.append(ageTitle, ageEl);
  //address
  const countryDiv = document.querySelector('.card__countryDiv');
  countryDiv.innerHTML = '';
  const countryTitle = document.createElement('p');
  countryTitle.innerText = 'My country is';
  const countryEl = document.createElement('p');
  countryEl.classList.add('card__info2');
  countryEl.innerText = user.location.country;
  countryDiv.append(countryTitle, countryEl);
  //phone
  const phoneDiv = document.querySelector('.card__phoneDiv');
  phoneDiv.innerHTML = '';
  const phoneTitle = document.createElement('p');
  phoneTitle.innerText = 'My phone number is';
  const phoneEl = document.createElement('p');
  phoneEl.classList.add('card__info2');
  phoneEl.innerText = user.phone;
  phoneDiv.append(phoneTitle, phoneEl);
}

const getRandomUser = () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      createElements(data.results[0]);
    });
};

const displayName = () => {
  userName.classList.add('active');
  userEmail.classList.remove('active');
  userAge.classList.remove('active');
  userCountry.classList.remove('active');
  userPhone.classList.remove('active');
  nameDiv.classList.add('show');
  emailDiv.classList.remove('show');
  ageDiv.classList.remove('show');
  countryDiv.classList.remove('show');
  phoneDiv.classList.remove('show');
};
const displayEmail = () => {
  userName.classList.remove('active');
  userEmail.classList.add('active');
  userAge.classList.remove('active');
  userCountry.classList.remove('active');
  userPhone.classList.remove('active');
  nameDiv.classList.remove('show');
  emailDiv.classList.add('show');
  ageDiv.classList.remove('show');
  countryDiv.classList.remove('show');
  phoneDiv.classList.remove('show');
};

const displayAge = () => {
  userName.classList.remove('active');
  userEmail.classList.remove('active');
  userAge.classList.add('active');
  userCountry.classList.remove('active');
  userPhone.classList.remove('active');
  nameDiv.classList.remove('show');
  emailDiv.classList.remove('show');
  ageDiv.classList.add('show');
  countryDiv.classList.remove('show');
  phoneDiv.classList.remove('show');
};
const displayCountry = () => {
  userName.classList.remove('active');
  userEmail.classList.remove('active');
  userAge.classList.remove('active');
  userCountry.classList.add('active');
  userPhone.classList.remove('active');
  nameDiv.classList.remove('show');
  emailDiv.classList.remove('show');
  ageDiv.classList.remove('show');
  countryDiv.classList.add('show');
  phoneDiv.classList.remove('show');
};
const displayPhone = () => {
  userName.classList.remove('active');
  userEmail.classList.remove('active');
  userAge.classList.remove('active');
  userCountry.classList.remove('active');
  userPhone.classList.add('active');
  nameDiv.classList.remove('show');
  emailDiv.classList.remove('show');
  ageDiv.classList.remove('show');
  countryDiv.classList.remove('show');
  phoneDiv.classList.add('show');
};

userName.addEventListener('mouseover', displayName);
userEmail.addEventListener('mouseover', displayEmail);
userAge.addEventListener('mouseover', displayAge);
userCountry.addEventListener('mouseover', displayCountry);
userPhone.addEventListener('mouseover', displayPhone);
getRandomUserBtn.addEventListener('click', getRandomUser);

document.addEventListener('DOMContentLoaded', getRandomUser);
nameDiv.classList.add('show');
