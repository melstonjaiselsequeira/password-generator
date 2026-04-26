const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lengthEl = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const toast = document.getElementById('toast');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
    const length = +lengthEl.value;

    let chars = lowercase;
    let firstChars = lowercase + numbers; // first char allowed set
    let password = '';

    // Include options
    if (uppercaseEl.checked) {
        chars += uppercase;
        firstChars += uppercase;
    }

    if (numbersEl.checked) {
        chars += numbers;
    }

    if (symbolsEl.checked) {
        chars += symbols;
    }

    // ✅ First character (only alphabet or number)
    password += firstChars[Math.floor(Math.random() * firstChars.length)];

    // ✅ Remaining characters
    for (let i = 1; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordEl.innerText = password;
}

// Generate button
generateBtn.addEventListener('click', generatePassword);

// Length slider
lengthEl.addEventListener('input', (e) => {
    lengthVal.innerText = e.target.value;
});

// Copy button
copyBtn.addEventListener('click', () => {
    const text = passwordEl.innerText;
    if (!text || text === 'Click Generate') return;

    navigator.clipboard.writeText(text).then(() => {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1500);
    });
});

// Initial password
generatePassword();