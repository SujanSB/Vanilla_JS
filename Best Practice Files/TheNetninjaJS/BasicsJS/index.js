// alert("hello ,world !")
// let age =34;
// age =null
// console.log(age)
// const val =43;
// // val=78
// console.log(val)
// control+backSlash
//talking about dayatype in slidetype video
//strings
// console.log('sujan bhattarai')
let email ='sujibh18@gmail.com'
// console.log(email)
// let firstName ="sujan"
// let lastName ="bhattrai"
// console.log(firstName +" "+ lastName)
// console.log(typeof(firstName))
// console.log((firstName[0]))
// console.log(lastName.length)
// let xyz =firstName.toUpperCase()
// console.log(xyz)
// let index =email.indexOf('@')
// console.log(index)
// let result =email.lastIndexOf('i')
// let result =email.firstIndexOf('i')//this is not a function
// console.log(result)
//  let result = email.replace('j','z');
//  console.log(result)

// let radious =10;
// const pi =3.14159

// console.log((radious*radious*pi))

// console.log(10/5*5-5)
// x=4
// // x+=1
// x/=4
// console.log(x)
// let title ="How to find your way";
// let author ="sujan "
// let date =2021

// console.log("the book named as "+title+" is written by "+author+"  in the year "+ date)  
//templates literal
// let result =`The book named as ${title} is written by ${author} on the year of ${date}`
// console.log(result)

// let html =`<h1> ${title} </h1>`
// console.log(html)

let suz =["sujan","bhattarai","sudip","sharma"]
// // suz[3]="shame on you"
// console.log(suz[3])
// let ages =[34,56,76,345,34]
// console.log(ages.length)
//array methods
// let result = suz.join(',')
// console.log(result)
// result =suz.indexOf('bhattarai')
// console.log(result)
// result= suz.push("bhagawati")
// result =suz.pop("sudip")
// console.log(suz)
//boolen
// console.log(true,false,"true")
// email ="sujibh18@gmail.com"
// // let result =email.includes('@')
// let result =email.includes('$')

// console.log(result)

let age ="22";
// console.log(age ==25)
// console.log(age =="22")
// console.log(age !=25)
// console.log(age <25)

// let name ="sujan"
// console.log(name=="sujan")
// console.log(name>="vujan")//alphabetical order hereko hunxa
// console.log(age ===22)
// console.log(age ==="22")//type conversion use vayeko hudaina
// console.log(age !=="24")
// age =Number(age)//type conversion
// console.log(age+2);

// let num =56
// num =String(num)
// console.log(typeof num

/*
*********************control flow**************
*/
//for loop
// for (let i=0; i<=6;i++){
//     console.log("sujan",i)
// }
// ages =[34,546,67,3423,454,4545]
// for (let i=0;i<ages.length;i++){
//     // console.log(ages[i]);
//     let html=`<div>${ages[i]} </div>`
//     console.log(html)
// }
// if (age ==22){
// console.log("my age is ",age)
// }
// console.log(suz.length)
// // suz.pop("sujan")
// // suz.pop("sharma")
// suz.push("shama")
// suz.push("shaema")
// suz.push("shaoma")
// suz.push("hauma")

// console.log(suz)
// if (suz.length==3){
//     console.log("youor communittee is big suz")
// }else if(suz.length<3 ){
//     console.log("no need to worry about sujan. You can do it properly just keeep kalm")
// }else if(suz.length>3 && suz.length<6){
//     console.log("your communittee is bigger sujan")
// }else{
//     console.log("Your communittee is very larger sujan")
// }

// let user =false;
// if (user){

// }
// console.log(!true)
// console.log(false)

// const scores =[34,56,78,97,100,43,32]
// for (let i=0;i<scores.length;i++){
//     if (scores[i]===100)
//     break;
//     console.log("your score is "+scores[i])
// }

//switch

// const grade = prompt("enter the grade ")
// switch(grade){
//     case "A":
//         console.log("congrats dude")
//         break;
//     case "B":
//         console.log("chil dude,you have enough time")
//         break;
//     case "B":
//         console.log("chil dude,you have enough time")
// } 
// let name
// if (true){
//     let name ="sujan"
//     console.log(name)
// }
// console.log(name)



/*
*******************************Function *****************
*/
//function declaration
// const speak =function(nam,time=934){
//     //this is function expression and hoisting doesnt work with it
//     name =nam;
//     console.log("it is going to be a very GOOD Day "+ this.name.toUpperCase())
//     console.log(`th time is ${time}`)
// };
// greet()
// function greet(){
//     console.log("helo ,world !")
// }
// speak("sujan");

// const clacArea= (radious)=>{
//     let areas = 3.14*radious*radious;
//     console.log("area is",areas)
//     return areas;
// }
// const calcVol =()=>{
//     let volume =clacArea(10)*6;
//     console.log(volume);
// }
// calcVol()
// const greats = ()=>console.log("hello sujan");
// greats() 
// clacArea(10)
let people =["suja","suuan","sabjs","fdhef","sdufgeu"];
// people.forEach(p=>{
//     console.log(p)
// })
// const xyz =document.getElementsByClassName('people');
// console.log(xyz)
// let html= ` `;
// people.forEach(function(person){
//     html +=`<li">${person}</li">`
// });
// console.log(html);
// xyz.innerTEXT="hello sujan";
/*
**************************************Objects*****************
*/
// let user ={
//     name :"sujan",
//     age:"22",
//     email:"sujibh18@gmail.com",
//     location :"bharatpur",
//     blog:["sujan is great","sujan is OP"],
//     login:function(){
//         console.log("the "+this.name+ " have logged in")
//     },
//     blogfunc :function(){
//         this.blog.forEach((i)=>{
//             console.log(i)
//         })
//     }
// }
// user.login()
// user.blogfunc()
// console.log(x)
// user.blog.push("sujan is Too OP")
// console.log(user.blog)
// console.log(user["email"])//this is another way
// console.log(typeof(user))

//math Object
// console.log(Math)
// console.log(Math.PI)
// const length= 7.87
// console.log(Math.round(length))
// console.log(Math.floor(length))
// console.log(Math.ceil(length))
// console.log(Math.trunc(length))
// const random =Math.random();
// console.log(random)

// let scoreone =50
// let scoretwo =scoreone
// console.log(`scoreone ${scoreone} and scoretwo ${scoretwo}`)
// scoreone=40
// console.log(`scoreone ${scoreone} and scoretwo ${scoretwo}`)
