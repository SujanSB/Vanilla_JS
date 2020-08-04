console.log("welcome again sujan,hope you will give this time, continue");
// let a = document;
// a= document.all;
// a= document.body;
// a= document.links;

// console.log(a);
// let element = document.getElementById('nysend');
// element = element.className;
// element = element.parentNode;

// element.style.color ='red';
// element.innerText="sujan k xa?"
// element.innerHTML='<b>sujan  ho hai </b>'
// console.log(element);

// let sel = document.querySelector('#nysend')
// sel = document.querySelector('div')
// sel.style.color="green"
// console.log(sel)

// let elems =document.getElementsByClassName('child')
// console.log(elems)
// //  iterate garna ko lagi yo taarika ekdam best ho;
// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color ='red'
// })

// let cont =document.querySelector('.no');
// cont =document.querySelector('.container')

// console.log(cont.childNodes);
// // yesle new line text dejhi liyera tannai kura haru linxa
// console.log(cont.children);

// let nodename;
// console.log(nodename = cont.childNodes[3].nodeName);
// console.log(nodename = cont.childNodes[1].nodeType);

// aba result ma k aaux  vanne kura le determine hunxs yedi
// 1=element
// 2= Attribute
// 3=textnode
// 8=Comment
// 9=document
// 10=doctype

// let cont =document.querySelector('div.container')
// // vitra ko vitra ko vitra ko children lyauna milxa;
// console.log(cont.children[1].children[0].children)

// console.log(cont.childNodes[0]) //  yo suruko new line ho
// console.log(cont.firstChild) //yeha pahilo child aauxa tara tei o position ko
// console.log(cont.firstElementChild)
// // yeha chai pailo children aayo vanda pani vayo
// console.log(cont.parentElement)
// // yesko parent element
// console.log(cont.firstElementChild.parentNode)
// console.log(cont.firstElementChild.nextSibling)
// // heading p[aci new line xa nih tei aayo]
// console.log(cont.firstElementChild.nextElementSibling)
// // heading paxi ko container parent node ma vayeko next element aauxa
// yesari nai last ,count,,sibling aauxa;
// ---------------------------yaha bata naya kura xa hai-------------------------------
// let element = document.createElement('li');
// element.className='no';
// element.id='ah'

// element.setAttribute('title','mero');
// console.log(element);
// let abc = document.querySelector('.vado');
// console.log(abc)
// element.innerHTML='<b>yo maile banaueko ho </b>'
// element.style.color ='yellow'
// abc.append(element)
// element.innerText='aba ckass ko name change garne hai ta'
// element.className="kxa"
// console.log(abc);

// let elem = document.createElement('h1')
// // // yeha jasari dieenxa tesari nai uta html result ma pani aauxa ...class ko name dine ho so,,div.xxxx garera diyepani hunxa ki ta heading dina man vaye heading ya list banaye hunxa aa-aafno eekxya ho
// elem.id='elem2';
// elem.className="elemm"
// let tnode =document.createTextNode('ths is this cause bujhna garo vairaxa')
// elem.appendChild(tnode);
// element.replaceWith(elem);

// let pr = abc.hasAttribute('title')
// console.log(abc,pr)
// yaha bata kunai attribute xa ki naai vanne kura detect garna sakinxa;
//  document.getElementById('heading').addEventListener('mouseover',function(e){
//      let variable;
//      variable= e.target.className;
//  variable= e.target.id;
//  variable= e.offsetX;
//  variable= e.offsetY;
// yesta event haru tannai hunxan;
// yaha array pani crreate garna sakinxa jab hamile multiple class use vayeo xa vane;
//  console.log('you have clicked the heading')
// //  location.href="https://www.facebook.com//
// console.log(variable);

// ------------------ajhai naya event---------------

// let btn= document.getElementById('btn');

// // btn.addEventListener('click',funct1);
// btn.addEventListener('dbclick',funct2);

// function funct1(e)
// {
//     console.log("thanks" ,e);
//     // e.preventDefault();
// // }
//  function funct2(e)
//  {
//     console.log("thanks 2nd click",e)
//  }
// valehi yo milena tara yo bat apani hunca vanne kura bujhirakh

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you enter no")
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("you leave no")
// // })
// document.querySelector('.no').addEventListener('mousemove',function(){
//     console.log("you triggered mouse move event")
// })

// localStorage.setItem('name','sujan')
// localStorage.setItem('name2','shashank')

// localStorage.clear()
// clear garna ko lagi
// localStorage.removeItem('name2')
// let abcd= localStorage.getItem('name')
// jun sutai attribute pauna sakinxa
// console ma pauna ko lagi
// console.log(abcd);
// yeha array lai load garna sainna,,bujhirakh,,string format ma aauxa
// ki ta json.stringify/parse finction use garna sakinxa

// aba aauxa kura session storage
// yesko lagi almost same hunxa  local jastai
// let x= 3;
// let y= 7
// let z=x/y;

// // exploring the math object;
// z= Math.round(5.89)//yesle ta round up ai garxa;
// z=Math.ceil(7.8)//yesle jaile pani mathilllo point ma laijanxa
// z= Math.floor(7.89)//yesle floor ma laijaxna
// z=Math.floor(-4.78) //yeha sano value negative ma hunxa
// z=Math.sqrt(49)//tha nai xa;
// z=Math.pow(4,5)
// z=Math.min(2,45,67,89,07,54,01,56)
// z=Math.max(76,87,54,235,567);
// z=Math.random()
// z=20+(100-20)*Math.random()//20ra 100 ko bbich ma

// console.log(z);

// let today =new Date()
// console.log((today));
// console.log(typeof(today));
// let otherdate= new Date('8-4-3002 4:56:43')
// console.log(otherdate);
// otherdate.setDate(4)
// let  b= otherdate.getSeconds()
// // month ra date laai ek ghatayera aauxa kinaki 0 bata count hunxa
// console.log(b);

// let car = {
//     name:'maruti 800',
//     topSpeed:89,
//     run :function() {

//         console.log("car is running");
//     }

// }
// console.log(car.run())
// function generalcar(givenname,speed){
//     this.name=givenname;
//     this.topSpeed=speed
//     this.run=function(){
//         console.log(`${this.name} is running`);
//         //hamile yaha $ sign use gsrnu ko faida k ho vane tjis.name matra garda error fekhauxa so;
//     }
//     this.analyze =function(){
//         if (this.topSpeed<300){

//             console.log(`this car is slower by ${300 - this.topSpeed} than mercedes`)
//         }
//         else{
//             console.log(`this car is faster by ${ this.topSpeed - 300} than mercedes `)
//         }
//     }
// // }
// car1 =new generalcar("nishan", 280)
// car2 =new generalcar("sujancar",320)
// console.log(car2);
// console.log(car1.analyze())
// console.log(car2.analyze())

// let obj ={
//     name:"sujan",
//     caste :"bhattarai",
//     address :"bhaktapur"

// }

// function Obj(givenname){
//     this.name =givenname
// }
// Obj.prototype.getName =function(){
//     return this.name;
// }
// aafaile create gareko object lai edit garna use hunxa
// tara constructor banayera chang grane
// let obj2 =new Obj("shashank");
// console.log(obj2)
// console ma reheko harek propoties haru use garna sakinxa prototype ko lagi

// const proto={
//     slogan: function(){
//         return`this company is the best`;
//     },
//     changeName :function(newName){
//         this.name=newName
//     }
// }
// const harry=Object.create(proto)
// console.log(harry)

// ---------------------------ES6 CLASSES---------------------------//

// class employee{
//     constructor(givenname,givenexperience,givendivision){
//         this.name =givenname;
//         this.experience =givenexperience
//         this.division =givendivision

//     }
//     slogan(){
//         return`  i'm ${this.name} bhattarai and im the best`;
//     }
//     expfrom(){
//         return 2019-this.experience
//     }
//     static add(a,b){
//         return a+b;
//     }
// }
// // let harry =new employee("sujan",65,"first")
// // console.log(harry)
// // console.log(typeof(harry))
// // console.log(harry.expfrom())
// // console.log(employee.add(45,76))
// //yeha yo kina vako vanda class ko name le nai call garna milxa static vayepaxi
// class Programmer extends employee{
//     constructor(givenname,givenexperience,givendivision,language,githhub){
//         super(givenname,givenexperience,givendivision)
//         this.language=language;
//         this.github=githhub;
//     }
//     favlanguage(){
//         if (this.language=='python'){
//             return 'pyhton'
//         }
//         else{
//             return 'javascript'
//         }
//     }
//     static multiply(a,b){
//         return a*b;
//     }
// }
// rohan =new Programmer("rihan",5,"lays","python","rohan das")
// console.log(rohan)
// console.log(rohan.favlanguage())
// console.log(Programmer.multiply(3,6))
// console.log(Programmer.add(3,6))//yeha yesari garna milxa vanne kura bujh hai
// console.log(employee.add(3,6))


// //excercise gar:-----------
// class library{



// }

// ++++++++++++++++++++++++++++ Call back function +++++++++++++++++++++++++
//pretemd that this response  is coming from server
// const students=[
//     {name:"sujan",subject:"javascript"},
//     {name:"shashank",subject:"webdev"}

// ]

// function enrollStudent(student,callback){
//     setTimeout(function()
//     {
//         students.push(student)
//     console.log("Student has been Enrolled");
//     callback();
//     },3000);
// }

// function getStudents(){
//     setTimeout(function(){
//         let str='';
//         students.forEach(function(student){
//             str+=`<li>${student.name}</li>`
//         });
//         document.getElementById('student').innerHTML=str;
//         console.log("student have been fetched");
//         },5000);
//     }

// let newStudent= {name:"sunny",subject:"python"};
// enrollStudent(newStudent,getStudents)    
//==================================error handeling==============================
// let a =5;
// if(a!=undefined)
// {   
//     // throw new Error("this is not undefined hah");
//     console.log("this is not undefined");
// }
// else{
//     console.log("this is undefined");
// }
// try {
//     console.log("we are insidw of try block");
//  functionx();//yaha yettikai ta kei error dekhaudaina kinaki khasai farak nai pareko hudaina,,actusl ms chsi vayeko hunxa,,bahira function declare garera herda hunxa if....
//  //yaha ko error herna lai catch vitra herna sakinxa
// } catch (error) {
//     console.log("are you okey?")
//     console.log(error.message)
// }
// finally{
//     console.log("finally hamile ero r pauna sakxam")\

// //============================== regular expression ==========================\
// let reg = /also/;//g means global;i means insensetive;
// console.log(reg);
// console.log(reg.source);

// let s="this is sujan bhattarai also sUjan is genious";
// let result= reg.exec(s);
// console.log(result);
// result= reg.exec(s);
// console.log(result);
// result= reg.exec(s);
// console.log(result);
// let result= reg.test(s);
// let result =reg.match(s)//this way is wrong;
// let result =s.match(reg);
// let result= s.search(reg);
// let result =s.replace(reg,'and').
// console.log(result);


// hamile regulatr ecpression ko lagi extra kuraharu video herera sajilai buhhn sakinxa ,,,,likeMetacharacter,character setTimeout,Shorthand character
//=================================================iterators======================================

// function falfuliterator(values){
//     let i =0;
//     return {
//         next: function(){
//             if(i<values.length){
//                 return{
//                     value: values[i++],
//                     done: false
//                 }
//             }
// //             else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }

// const myArray=["shyau","aap","mewa","kera","angur"]
// console.log("mero aray cahi yoo ho:",myArray);

// //aba mathi ko kura m iterator kasari use garne ta?
// const falful =falfuliterator(myArray);
// console.log(falful.next().value)
// console.log(falful.next().value)
// console.log(falful.next().value)
// console.log(falful.next().value)
// console.log(falful.next().value)
//==================================================genetator=====================================
// function* numberGen()
// {
//     let i=0;

    //  yield 1;
    //  yield 2;
    //  yield 3;
    //  yield 4;
    //  yield 5;
//     while (true){
//         yield i++;
//     }
// }
// const gen =numberGen();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value) 
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
 //=========================looping on foe in and for of loop=================================================
// people = ["sujan","santosh","sudip","pichit"];
//  for (let i=0;i<people.length;i++){
//      const element =people[i];
//      console.log(element)
//  }//this is old for loop;
// *******************************for in loop************************ 
// obj ={
//      name:"sujan",
//      language:"nepali",
//      hobbies:"pubg"
//  }
//  console.log(obj)
//iterating an object;
// for (let i=0;i<Object.keys(obj).length;i++){
//      const element =obj[Object.keys(obj)[i]];
//      console.log(element)
// // }
// for (let key in obj){
//     console.log(obj[key])
// }
//we can use for in with string lop through all the character
// mystring = "this is my string";
// for (let i in mystring){
//  console.log(mystring[i]);
// }
// **********************************for of loop****************************
// for (let name of people){
//     console.log(name);
// }
// let ob ="sujan";
// for (let char of ob){
//     console.log(char);
// }
// const myMap =new Map();

// const key1 = 'mystr' ,key2={},key3 =function(){};
// myMap.set(key1, "this is string");
// myMap.set(key2, "this is blank obj");
// myMap.set(key3, "this is empty function");
// console.log(myMap);

// // getting the value from the Map
// let value1 =myMap.get(key1);
// console.log(value1)
// console.log(myMap.size)
// //you can loop using for ..of to get keys and vlaues
// for (let key of myMap){
//     console.log(key)
// }

// for (let key of myMap.keys()){
//     console.log("key is",key)//similarly value matra panio lina sakinxa;
// }
//you  can map using for each
//converting map to arrray pai garna sakinxa
// ley myArray =Array.from(myMap);
// console.log("map to array is",myArray)
 
