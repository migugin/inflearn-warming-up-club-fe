const passwordInput = document.querySelector('#password-input');
const lengthInput = document.querySelector('#password-length');
const options = document.querySelectorAll('.option input');
const generateButton = document.querySelector('.generate-button');
const copyButton = document.querySelector('.copy-button');

const characters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%&',
};

const getRandomCharacters = () => {
  let randomCharacters = '';

  options.forEach(option => {
    if (option.checked) {
      randomCharacters += characters[option.id];
    }
  });

  return randomCharacters;
};

const generatePassword = () => {
  const length = lengthInput.value;
  const password = [];
  const randomCharacters = getRandomCharacters();

  for (let i = 0; i < length; i += 1) {
    const randomChar = Math.floor(Math.random() * randomCharacters.length);

    password.push(randomCharacters[randomChar]);
  }

  passwordInput.value = password.join('');
};

const copyPassword = () => {
  if (passwordInput.value) {
    navigator.clipboard.writeText(passwordInput.value);
    alert('복사되었습니다.');

    copyButton.innerText = 'check';
    copyButton.style.color = '#4285f4';

    setTimeout(() => {
      copyButton.innerText = 'copy_all';
      copyButton.style.color = '#707070';
    }, 2000);
  } else {
    alert('비밀번호를 먼저 생성해주세요.');
  }
};

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
