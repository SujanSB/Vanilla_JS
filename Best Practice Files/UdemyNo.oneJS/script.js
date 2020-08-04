console.log(
  "k xa sujan aba arko ko pani mazzale sakis vane j hos talai xutput garna khasai time lagne wala xaina"
)
// // ++++++++++++++++++++++++++++++hoisting++++++++++++++++++
// // calculateAge(1990)//yo tala mathi jata gare pani hunxa
// // function  calculateAge(year){
// //     console.log(2020-year);
// // }
// // retirement(1990)
// // var retirement =function(year){
// //     console.log(65- (2020-year));
// // }
// // retirement(1990)// yo function le chai kam garxa tara mathi garyo vane error aaauxa;
// // console.log(age)
// // var age =20;
// //variable declaration ko l;agi hoisting le kasari kaam garxa vanne sajilai bujhiyo;
// // function foo(){
// //     var age=65;
// //     console.log(age)
// // }
// // foo();
// // console.log(age)//variable function bahira call garda aayena because globale declaration part ma nalekhiyeko hunale
// //-----------------------this keyboard--------------------------
// //  var john ={
// //      name:"sujan",
// //      salary: function(value){
// //          console.log(this.name+ " is the person who tought me javasript has the salary of "+value);
// //      }
// // }
// // john.salary(3000)
// // console.log(this)

// // var mike ={
// //     name:"mike",
// //     yearofbirth:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         2001,
// // }
// // mike.salary =john.salary;//yesari pani yeuta ko function borrow garna milxa;
// // mike.salary()
// //-----------------------------------------------------------------everything is OBJECT  and the prototype chain-------------------------------------
// // var john ={
// //     name: "john",
// //     yearofbirth:'2001',
// //     job:"teacher",
// //     calculateAge :function(){
// //         console.log(2020-this.yearofbirth);
// //     }
// // };
// // console.log(john.calculateAge())
// // var Person =function(name,yearofbirth,job){
// //     this.name = name;
// //     this.yearofbirth =yearofbirth;
// //     this.job= job;
// //     this.calculateAge=function(){
// //          console.log(2020- this.yearofbirth)
// //     }
// // }
// // console.log()
// // Person.prototype.calculateAge=
// // function(){
// //     console.log(2020- this.yearofbirth)
// // }
// // var x= new Person("john",1999,"teacher");
// console.log(x)
// x.calculateAge()

// var sujan =new Person("sujan_bhattarai",2001,"computer_engineer");
// console.log(sujan);

// ?????????object.create------------------------
// var personProto ={
//     calculateAge : function(){
//         console.log(2020- this.yearofbirth);
//     }
// }
// var sujan = Object.create(personProto);
// sujan.name ="sujan";
// sujan.yearofbirth=2001;
// sujan.job="teacher";
// ---------------------------------------------------------function class-----------------------------
// var  years =[1999,1993,2005,1994,1996];

// function arrayclock(arr,fn){
//     var arrs =[];
//     for(let i=0;i<arr.length;i++){
//         arrs.push(fn(arr[i]));
//     }
//     return arrs;
// }
// function calculateAge(el){
//     return 2020-el;
// }
// function isFullage(el){
//     return el>=18;
// }
// var x= arrayclock(years,calculateAge);
// console.log(x)
// var fullAge =arrayclock(x,isFullage);
// console.log(fullAge);
// ------------------------function returning function----------
// function intQue(job){
//     if (job=== "designer"){
//         return  function(name){
//             console.log(name+" what is degining explain it please");
//         }
//     }else if(job==='teacher'){
//         return function(name){
//             console.log(name +" ohh are you teaches student then ");
//         }
//     }else{
//         return function(name){
//             console.log(name +" ohh then you are anythings else")
//         }
//     }
// }
// var wry = intQue("designer")("sujan");
// // wry("sujan");
// ----------------------------------------------------------iife--------------------------------
// function game(){
//     var score =Math.random()*10;
//     console.log(score>=5)
// }
// game()
// (function() {
//     var score =Math.random()*10;
//     console.log(score>=5);
// })();
// =========================================closures=====================
// function retirement(name){
//     return function(yearofBirth){
//         if(name ==="sujan"){
//             console.log("Sujan Daai ko  "+2020-yearofBirth);
//         }
//         else{
//             console.log("ta mula ko lag vag "+2020-yearofBirth)
//         }
//     }
// }
// retirement("sujan")(2001)
// console.log(x(2001))
// -------------------------------------bind,call and apply-------------------------
// var sujan ={
//     name:"sujan",
//     age:21,
//     job:"student",
//     presetation: function(style){
//         if (style==="formal"){
//             console.log("good mornig ladies and ledas, i\'m" +this.name+" & im a "+this.job+" of " +this.age+"years old");

//         }else if(style==="friendly"){
// //             console.log("hya pardaina yo chai k")
// //         }
// //     }
// // }
// // sujan.presetation("formal")

// // var sube={
// //     name:"sube",
// //     job:"electrician",
// //     age:20
// // }
// //  sujan.presetation.call(sube,"friendly");
// //  sujan.presetation.apply(sube,"friendly");//yo chai yaha kaam gardaina kinaki array like function baneko hunuparxa mathi nai
// //-----------------------------------------challengw----------------------------
// // function Question(question, answers, correct) {
// //   this.question = question;
// //   this.answers = answers;
// //   this.correct = correct;
// // }

// // Question.prototype.displayQuestion = function () {
// //   console.log(this.question);
// //   for (var i = 0; i < this.answers.length; i++) {
// //     console.log(i + ": " + this.answers[i]);
// //   }
// // };
// // Question.prototype.checkAnswer = function (ans,callack) {
// //     var sc;
// //   if (ans === this.correct) {
// //     console.log("correct answer buddy");
// //     sc=callack (true);
// //   }else{
// //     console.log("wrong answer try another One ,,hai ta !");
// //     sc= callack(false);
// //     }
// //     this.displYScore(sc);
// // };

// // Question.prototype.displYScore=function(score){
// //     console.log("Your Current score is :"+ score);
// //         if(score=== 3 ){
// //             console.log("hei you are Sujan yrr ,,,You are allowed to run your laptop,,at the begining i thought you are anyone else");
// // //             Out();
// //         }
// //     console.log("------------------------------------------------")
// // }
// // var q1 = new Question("Are you Sujan?", ["Yes", "NO"], 0);
// // var q2 = new Question("is this Your laptop?", ["Yes", "NO"], 1);
// // var q3 = new Question("Are Sujan's Best Friend", ["Yes", "NO"], 0);
// // var questions = [q1, q2, q3];
// // function score() {
// //   var sc = 0;
// //   return function (correct) {
// //     if (correct) {
// //       sc++;
// //     }
// //     return sc;
// //   };
// // }
// // let keepScore = score();
// // function nextQuestion() {
// //   var n = Math.floor(Math.random() * questions.length);
// //   questions[n].displayQuestion();
// //   var answer = prompt("please select the correct answer");
// //   // questions[n].checkAnswer(answer);
// //   if (answer !== "exit") {
// //     console.log("ajhai khelne?");
// //     questions[n].checkAnswer(parseInt(answer), keepScore);
// //     nextQuestion();

// //   }
// // }
// // nextQuestion();

// // function Out()
// // {
// //     sc =0;
// //     console.log("ta sujan hops yrr ,,,aba khelnu pardaina")
// //     console.clear()

// // }

// //-------------------------------------ES6,7,8,9---------------------------------------------------------------------
// -------------------let and cosnt
// var name= "sujan ";
// var age =21;
// name ="sudip";
// console.log(name)

// const Name ="sudip"
// let Name  ="sujan";
// console.log(Name)

//-------------------------------------------BLICKS NAD IIFE--------------------------------------------------
// {
//   const a=2;
//   lat b=1;
// }
// console.log(a+b)

// (function(){
//   var c= 3;
// })();
// console.log(c)

// let firstName ="sujan";
// let lastName ="bhattarai";
// const yearofBirth =1999;
// function calculateAge(year){
//   return 2020-year
// }

// console.log(firstName +lastName +" is a very good person of age "+ calculateAge(2001))
// //ES6
// console.log(`this is ${firstName} ${lastName}. he is the age of ${calculateAge(2001)}`)

// const n =`${firstName} ${lastName}`
// console.log(n.startsWith('j'))
// console.log(n.endsWith('ai'))
// console.log(n.includes("bh"))
// console.log(firstName.repeat(3));

//------------------Arrow Function----------------------
// const years =[1998,1997,1995,1993];

// var ages =years.map(function(el){
//   return 2020-el;
// });
// console.log(ages)

// const age =years.map(el=> 2020-el)
// console.log(age);

//--------------------------------------------Destructuring------------
// var sujan =['sujan',21];
// // var name = sujan[0];
// // var age =sujan[1];
 
// const [name,age]=['sujan',21]
// console.log(name);
// console.log(age);

// const obj ={
//   firstName :"sujan",
//   lastName :"bhattai"
// };
// const {firstName,lastName} = obj;
// console.log(firstName)
// console.log(lastName)

// function calculateAge(year){
//   const age = new
//   Date().getFullYear() -year;
//   return [age,65 -age]; 
// }
// const [age,retirement]=
// calculateAge(2001)
// console.log(age);
// console.log(retirement)
//---------------------------------------------mapping-------------------------------------------
// const question = new Map();
// question.set("question","what is thr official name os the latest  major javascript version?");
// question.set (1,"ES5")
// question.set (2,"ES6")
// question.set (3,"ES2017")
// question.set("correct",3)
// question.set(true,"Correct answer")
// question.set(false,"Wrong , answer")
// console.log(question.get ("question"));
// console.log(question.size)
// question.delete(3);
// console.log(question.has(4))

// question.forEach((value,key)=>{
// if( typeof(key)=="number"){
//   console.log(`Answer ${key}: ${value}`)};
// });

// console.log(`this is ${key},and it's set to ${value}`));
//---------------------------------------------------------------------------------Class------------------------------------------
// var persons = function (name,yearofBirth,job){
//   this.name =name;
//   this.yearofBirth =yearofBirth;
//   this.job= job;
// }
// persons.prototype.calculateAge=function(){
//   var age =new Date().getFullYear-this.yearofBirth;
//   console.log(age);
// }
// // var sujan =new persons("sujan",1999,"teacher");
// // console.log(sujan.calculateAge())
// var Athletes =function(name,yearofBirth,job,Olympic,medals){
//   persons.call(this,name,yearofBirth,job);
//   this.Olympic=Olympic;
//   this.medals =medals;
// }
// Athletes.prototype= Object.create(persons,prototype);
// var sujanAth =new Athletes("sujan",2001,"cricketer",4,12);
// //ES6
// class Person {
//   constructor(name,yearofBirth,job){
//     this.name =name;
//     this.yearofBirth =yearofBirth;
//     this.job=job;
//   }
//   showName(){
//     console.log(`my name is ${this.name}`)
//   }
//   calculateAge(){
//     var age =2020-this.yearofBirth;
//     console.log(age);
//   }
// }
// class Athlete extends Person{
//   constructor(name,yearofBirth,job,Olympic,medals){
//     super(name,yearofBirth,job);
//     this.Olympic =Olympic;
//     this.medals=medals;
//   }
//   wonMedals(){
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// let sujanAth =new Athlete("sujan",1999,"cricketer",3,34);
// sujanAth.wonMedals();
// sujanAth.showName(); 
// sujanAth.calculateAge()
// ------------------------------------------------------------Asynchronous Javascript----------------------------------------------
//  function getRecipe(){
//   setTimeout(()=>
//   {
//     const recipeID= [523,455,677];
//     console.log(recipeID)

//     setTimeout(()=>{
//         const recipe ={"title":"aalu" ,"chief":"Sujan"};
//         console.log(recipe)
//     },1000)
//   },2000)
// }
// getRecipe();
