let v=[{name:'Kishore',mass:50,height:172,charac:'male'},
{name:'Priya',mass:65,height:162,charac:'female'},
{name:'Sanjay',mass:75,height:167,charac:'male'},]

v.sort((a, b) =>{
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase(); 
    if (nameA < nameB)  return -1;
    if (nameA > nameB)  return 1;
     return 0;
  });
  let Sortname=JSON.stringify(v)
  let a=v.sort((a, b) =>{
     return a.mass - b.mass;
  });
  let Sortmass=JSON.stringify(a)
  let b=v.sort((a, b) =>{
    return a.height - b.height;
 });
 let Sortheight=JSON.stringify(b)
  
 let c=v.sort((a, b)=>{
    let C=a.charac.toLowerCase();
    let D=b.charac.toLowerCase();
    if(C > D) return 1;
    if(C < D) return -1;
    return 0;

 });
 let SortCharac=JSON.stringify(c)