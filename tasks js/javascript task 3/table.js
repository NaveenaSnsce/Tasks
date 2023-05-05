// Sample array of character objects
const characters = [
    { name: 'AJAY', gender: 'male', height: 165, mass: 69 },
    { name: 'KISHORE', gender: 'male', height: 172, mass: 77 },
    { name: 'VARADHU', gender: 'male', height:175, mass: 79 },
    { name: 'PRAKASH', gender: 'male', height: 182, mass: 115 },
    { name: 'SANJAY', gender: 'male', height: 184, mass: 102 }
  ];
  
  // Get characters with mass greater than 100
  const charactersWithMassGreaterThan100 = characters.filter(character => character.mass > 100);
  
  // Get characters with height less than 200
  const charactersWithHeightLessThan200 = characters.filter(character => character.height < 200);
  
  // Get all male characters
  const maleCharacters = characters.filter(character => character.gender === 'male');
  
  // Get all female characters
  const maleCharacters = characters.filter(character => character.gender === 'male');