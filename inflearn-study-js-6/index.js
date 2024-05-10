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
  return Array.from(options).reduce((acc, option) => {
    if (option.checked) {
      acc += characters[option.id];
    }
    return acc;
  }, '');
};

const generatePassword = () => {
  const randomCharacters = getRandomCharacters();
  const length = lengthInput.value;
  let password = '';

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * randomCharacters.length);

    password += randomCharacters[randomIndex];
  }

  passwordInput.value = password;
};

const copyPassword = () => {
  const password = passwordInput.value;

  if (password) {
    navigator.clipboard.writeText(passwordInput.value);
    copyButton.innerText = 'check';
    copyButton.style.color = '#4285f4';
    alert('복사되었습니다.');

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
