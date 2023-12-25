function updateText() {
    const textInput = document.getElementById('textInput').value;
    const fontSelect = document.getElementById('fontSelect').value;
    const sizeInput = document.getElementById('sizeInput').value + 'px';
    const colorInput = document.getElementById('colorInput').value;

    const output = document.getElementById('textOutput');
    output.textContent = textInput;
    output.style.fontFamily = fontSelect;
    output.style.fontSize = sizeInput;
    output.style.color = colorInput;
  }