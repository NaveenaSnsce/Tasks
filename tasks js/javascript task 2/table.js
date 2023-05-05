let persons=[{
    name:'PRANAV',
    weight:50
},
{
    name:'KISHORE',
    weight:60
},
{
    name:'DINESH',
    weight:70,
},
{
    name:'SANJAY',
    weight:80
}
]
let mass=persons.reduce((acc,x)=>{

    return acc+x.weight
},0)
//total heigth
let person1=[{
    name:'PRANAV',
    height:150
},
{
    name:'KISHORE',
    height:160
},
{
    name:'DINESH',
    height:170
},
{
    name:'SANJAY',
    height:180
}
]
let h=person1.reduce((acc,x)=>{
    return acc+x.height
},0)
//no of characrter
let person3=[{
    name:'PRANAV',
    height:150
},
{
    name:'KISHORE',
    height:160
},
{
    name:'DINESH',
    height:170
},
{
    name:'SANJAY',
    height:180
}
]
let count=person3.map((x)=>x.name).length
//eye count
let person4=[{
    name:'PRANAV',
    height:150,
    eye:'BLACK'
},
{
    name:'KISHORE',
    height:160,
    eye:'BROWN'

},
{
    name:'DINESH',
    height:170,
    eye:'BLUE'

},
{
    name:'SANJAY',
    height:180,
    eye:'GREY'

}
]
let eye=person4.reduce((acc,x)=>{
    if(acc[x.eye]){
    acc[x.eye]++
    }
else{
acc[x.eye]=1
}
return acc
}
,{})
let resultDiv = document.getElementById('result');
let eyes=JSON.stringify(eye)
resultDiv.innerHTML=eyes