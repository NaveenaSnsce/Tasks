const str = ['PRANAV', 'SANJAY', 'JOTHIKA'];
const val=str.map((x)=>{return x}) 
//2nd
const heightincm=[150,163,173,188]
const h=heightincm.map((y)=>{return y+ ' in cm '})
//3
let details=[{
    name:'PRANAV',
    age:21,
    height:156 +'cm'
},
{
    name:'SANJAY',
    age:50,
    height:165 +'cm'
},
{
    name:'JOTHIKA',
    age:21,
    height:176 +'cm'
}
]
let person=details.map(x=>{
    return 'My name is '+x.name +", " + 'Iam '+ x.age+' old,'+ ' My heigth is '+x.height
   
})
const str1= [
{ firstname:'PRANAV', lastname:'M'},
{ firstname:'SANJAY', lastname:'A'},
{ firstname:'JOTHIKA', lastname:'K'}
]
const first=str1.map((x=>{
    return x.firstname
}))

