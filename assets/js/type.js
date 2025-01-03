const text = "Your contact request has been recorded successfully.";
let index = 0;
const typingSpeed = 90; // Adjust speed (in ms) for typing effect
const typingElement = document.getElementById('typing-text');

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeText();
});
