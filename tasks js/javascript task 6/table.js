const characters = [
    { name: 'Sridhar', gender: 'male', eyeColor: 'blue', height: 172, mass: 77 },
    { name: 'Priya', gender: 'female', eyeColor: 'brown', height: 150, mass: 49 },
    { name: 'Kannan', gender: 'male', eyeColor: 'brown', height: 180, mass: 80 },
    { name: 'Deva', gender: 'male', eyeColor: 'blue', height: 228, mass: 112 },
    { name: 'Varadha', gender: 'male', eyeColor: 'brown', height: 66, mass: 17 },
  ];
  
  // Check if there's at least one male character
  const isMaleCharacter = characters.some((character) => character.gender === 'male');
  const maleText = isMaleCharacter ? 'Yes' : 'No';
  document.getElementById('male').innerHTML = maleText;
  
  // Check if there's at least one character with blue eyes
  const hasBlueEyes = characters.some((character) => character.eyeColor === 'blue');
  const blueEyesText = hasBlueEyes ? 'Yes' : 'No';
  document.getElementById('eyeColor').innerHTML = blueEyesText;
  
  // Check if there's at least one character taller than 200cm
  const isTallerThan200 = characters.some((character) => character.height > 200);
  const tallerThan200Text = isTallerThan200 ? 'Yes' : 'No';
  document.getElementById('height').innerHTML = tallerThan200Text;
  
  // Check if there's at least one character that has mass less than 50kg
const hasMassLessThan50 = characters.some((character) => character.mass < 50);
const massLessThan50Text = hasMassLessThan50 ? 'Yes' : 'No';
document.getElementById('mass').innerHTML = massLessThan50Text;


  