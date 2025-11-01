let currentFontSize = 16; // Base font size

document.getElementById('increaseText').addEventListener('click', () => {
    currentFontSize += 2; // Increase font size by 2px
    document.body.style.fontSize = currentFontSize + 'px';
});

document.getElementById('decreaseText').addEventListener('click', () => {
    currentFontSize = Math.max(12, currentFontSize - 2); // Decrease font size by 2px, but not below 12px
    document.body.style.fontSize = currentFontSize + 'px';
});
