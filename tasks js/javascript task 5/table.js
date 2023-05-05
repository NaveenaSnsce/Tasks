let person= [
  {name:'Kishore', mass:50, height:172,eye:'blue',Charac:'male'},
  {name:'Sanjay', mass:60, height:167,eye:'blue',Charac:'male'},
  {name:'Naveena', mass:45, height:154,eye:'blue',Charac:'female'},
  {name:'Sridhar', mass:70, height:165,eye:'blue',Charac:'male'},
  {name:'Priya', mass:70, height:165,eye:'black',Charac:'female'}
]
let eye=person.every(x =>{
  if(x.eye==='blue') return true;
  else return false;
} )
let mass=person.every(x =>{
  if(x.mass>=40) return true;
  else return false;
} )
let shorter=person.every(x =>{
  if(x.height<=200) return true;
  else return false;
} )
let charac=person.every(x =>{
  if(x.Charac==='male') return true;
  else return false;
} )