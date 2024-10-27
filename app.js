const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#008000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Orange', hex: '#FFA500' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Brown', hex: '#A52A2A' },
    { name: 'Lime', hex: '#00FF00' },
    { name: 'Teal', hex: '#008080' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Maroon', hex: '#800000' },
];
  

function color() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor.hex;

    document.getElementById('color-name').innerText = 
    `Current Color: ${selectedColor.name} (${selectedColor.hex})`;



  }