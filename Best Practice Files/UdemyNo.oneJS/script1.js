console.log("Hello World");

// var firstName ='Sujan';
// console.log(firstName);
//namimg the variable like i mention above is the best way to declare it because for better pratice it is mendatory;
//  var job;
//  console.log(job);

//  var age =true;
//  console.log(age);
//variables cant start with number,and predefind keyboard;
// comment -single line //----
//         -multiline /* --
//                       --*/
//  -------------------------------------------------type coertion-----------------------------------
// var firstName ="sujan";
// var age =21;
// console.log(firstName +" "+ age)//here not mendatory to convert number to string

// var job ,isMarried;
// job ="teacher";
// isMarried =true;

// console.log(firstName +"is a "+age +" year old"+" "+ job +"is married?"+ isMarried);
// age="twenty one";//mutation
// job ="driver";

// var lastName =prompt("what is his last name?")
// console.log(firstName+lastName +"is a "+age +" year old"+" "+ job +"is married?"+ isMarried);
// //-----------------------------------------------------Basic Operator-----------------------------
// var yearSuz =2020-21;
// var yearMax =2020-20;
// var yearTor =2020-23;
// // yearSuz =201-21;
// console.log("sujan birth date is "+(yearSuz-2) );
// var whichOlder = yearSuz<yearMax;
// console.log(whichOlder +" so sujan  is older than max");
// //type of operator
// console.log(typeof whichOlder)
// console.log(typeof yearSuz)
// console.log(typeof "earSuz");
// //operator precedence
// var now = 2020;
// yearSuz= 1999;
// var fullAge= 21;
// var isfullAge =now-yearSuz>=fullAge//- sign get higher operatr precedence than <>= soit done first and then >= run;

//  console.log(isfullAge)
// console.log(now *yearSuz/3);//they have equal precedence but first come first done;
// var x,y;
// x=y=(3+5)*4-6;//first smml bracket ko ani multiply ani - plus ko kura chai first come first done;
// console.log(x,y)//here assignment operator precedence move right ko left;
// x=x*2;
// console.log(x)
// x*=2;
// console.log(x)
// x++;
// console.log(x)

//=============================challwngw======================
// var massJohn =75;
// var massMark =68;
// var heightJohn =1.72;
// var heightMark =1.78;

// var johnBMI =(massJohn/(heightJohn*heightJohn))*100;
// console.log(johnBMI);
// var markBMI =(massMark/(heightMark*heightMark))*100;
// console.log(markBMI);
// console.log("is mark BMI is greater than John ? "+ ( johnBMI<markBMI))
///---------------------------------------if else statement -------------------------------
// var firstName ="Sujan";
// var civilStatus ="single";
// if (civilStatus =="single"){
//     console.log(firstName + " is not married")
// }
// else{
//     console.log(firstName+" is  married")
// }
// var massJohn =75;
// var massMark =68;
// var heightJohn =1.72;
// var heightMark =1.78;

// var johnBMI =(massJohn/(heightJohn*heightJohn))*100;
// console.log(johnBMI);
// var markBMI =(massMark/(heightMark*heightMark))*100;
// console.log(markBMI);
// if(markBMI>johnBMI){
//     console.log("marks Bmi is greater than john");
// }else{
//     console.log("marks Bmi is less than john");

// }

//--------------------------------------------Boolean Logic -----------------------
// var firstName ="sujan";
// var age =35
// if(age>=18){
//      console.log("he can watch 18+ movies now")
//  }//yeuta if condition satisfy garne bittikai arko tira herdai herdaina so condition dida khyal gartera dinuparxa;
// else if(age===21 && age>23)
//  {
//         console.log("ummm,smart guy?")
// }
// else{
//      console.log("he cant do ANYTHING")
//  }
//-------------------------------TERNARY OPERATOR AND SWITCH CASE--------------------

// var age = 21;
// age>=18 ? console.log("he can drink beer"):console.log("he cant drink alcohol");
//now switch case;
// var job ="farmer";
// switch(job){
//     case 'teacher':
//     console.log("he is teacher") ;
//        break;
//     case 'doctor':
//         console.log("he is doctor");
//         break;
//     case 'con-doctor':
//         console.log("he is con-doctor");
//         break;
//     case 'farmer':
//         console.log("he is farmer");
//         break;
//     default:
//         cpnsole.log("he might be anyother else")
// }

//------------------------------equality operator-----------------
// var height ='23';
// if (height== 23){
//     console.log("this == operator does type coercion");
// }
//--------------------------------------challenge-----------------------
// var scoreJohn1 =78,scoreJohn2=93,scoreJohn3=113;
// var scoreMark1=50,scoreMark2 =135,scoreMark3=99;
// var scoreMarry1=60,scoreMarry2 =105,scoreMarry3=91;
// var avgJohn=(scoreJohn1+scoreJohn2+scoreJohn3)/3;
// console.log(avgJohn);
// var avgMark=(scoreMark1+scoreMark2+scoreMark3)/3;
// console.log(avgMark);
// var avgMarry=(scoreMarry1+scoreMarry2+scoreMarry3)/3;
// console.log(avgMarry);
// if(avgMark==avgJohn==avgMarry){
//     console.log("their average score is equel")
// }
// else if(avgJohn>avgMark && avgJohn>avgMarry){
//     console.log("average of john is pretty much higher by "+(avgJohn-avgMark) +"and higher than marry by "+(avgJohn-avgMarry));
// }

// else if(avgJohn=avgMark && avgJohn>avgMarry){
//     console.log("average of john is equal with mark and higher than marry by "+(avgJohn-avgMarry));
// }
// else{
//     console.log("average of mark is pretty much higher by "+(-avgJohn+ avgMark));

// }
//------------------------------------------Function------------------------------------
// function calculateAge(birthyear) {
//   const now = 2020;
//   return (now - birthyear)
//   console.log("he is " + (now - birthyear) + " Year old");
// }
// calculateAge(2001);

// function findAge(year){
//     console.log(now-year)
// }
// findAge(2001);

// calculateAge(1999);
// function yearOR(year,firstName)
// {
//    var age =calculateAge(year);
//    var retirement =(65-age);
//    if (retirement>0){
//        console.log(firstName +" retires age left is about"+retirement +"year");
//     }else{
//         console.log(firstName +" is already retired");
//    }
// }
// yearOR(1999,"sujan");
// yearOR(1947,"sudip");
///another way for function
// var whatDYD= function (job,firstName){
//      switch(job){
//          case 'teacher':
//               return firstName+ " is teaacher";
//          case 'driver':
//               return firstName +" is a driver"
//          case 'designer':
//               return firstName +" is designer"
//          default:
//               return firstName+" does something else"
//      }

// }
// console.log(whatDYD("driver","sujan"));
//--------------------------------------------ARRAYS-----------------------------------------
// var names =['sujan','santosh','shashank'];
// var years = new Array(1999,1989,1956);
//  console.log(names[2])
//  console.log(years)
//  console.log(years.length)
//  names[names.length]="suman"
// names.push("shiva")
// console.log(names)
// names.shift()
// console.log(names)
// names.pop()
// console.log(names)
// //--------------------------------challenge---------------------------
// var bills =[124,48,268];
// var tip, totalAmount;
// var tipCalculator = function(bill) {
//   if (bill < 50) {
//     tip = 0.2 * bill;
//     // return tip;
//   } else if (bill > 50 && bill < 200) {
//     tip = 0.15 * bill;
//     // return tip;
//   } else {
//     tip = 0.1 * bill;
//     // return tip;
//   }
//   return tip;
// };
// var tipValue = [];
// tipValue.push(tipCalculator(124));
// tipValue.push(tipCalculator(48));
// tipValue.push(tipCalculator(268));
// console.log(tipValue);
// var totalAmount = [tipValue[0]+bills[0],tipValue[1]+bills[1],tipValue[2]+bills[2]];
// console.log(totalAmount);
//-----------------------------------------object and Properties----------------------
// var sujan ={
//   firstName :"sujan ",
//   lastName :"bhattarai ",
//   birthyear:2001,
//   family :["sudip","susmita","bhagawati","baburam"],
//   job:"data Scientist"
// }
// console.log(sujan)
// console.log(sujan.family)
// //for creating the new object
// var jane = new Object();
// jane.firstName = "jane"
// jane.birthyear = 1999;
// console.log(jane)
//object method;
// var sujan ={
//     firstName :"sujan ",
//     lastName :"bhattarai ",
//     birthyear:2001,
//     family :["sudip","susmita","bhagawati","baburam"],
//     job:"data Scientist",
//     calculateAge :function(){
//        this.age= 2020-this.birthyear;
//     }
//   }
// console.log(sujan.calculateAge())
// sujan.age =sujan.calculateAge()
// console.log(sujan)

//-------coding challenge-----------------
// var john={
//   name :"john",
//   mass :98,
//   height :1.73,
//   johnBMI :function(){
//     return (this.mass/(this.height*this.height))
//   }
// }
// let x = john.johnBMI()
// console.log(x)
// var mark={
//   name :"mark",
//   mass :88,
//   height :1.60,
//   markBMI :function(){
//     return (this.mass/(this.height*this.height))
//   }
// }
// let y = mark.markBMI()
// console.log(y)
//------------------------------------------------loops and iteration---------------------------------
// for ( let i=0;i<4;i++){
//   console.log("hello sujan");
// }
// let i;
// var family = ["sudip","susmita","bhagawati","baburam"];
// for (i in family){
//    console.log(family[i])
// }
//reverse loop
// for (var i=family.length;i>=0;i--)
// {
//   console.log(family[i])
// }
 var tipCalculater ={
   name :"john",
   bills :[124,48,268,180,42],
   calculateTip : function(){
    this.tips[];
    this.finalvalues[];
    for (let i=0;i<this.bills.length;i++)
    {
      var percentage;
      var bill =this.bills[i];

       if(bill[i]<50){
        percentage =0.2;
        }
        else if(bill>50 && bill<200){
          percentage=0.15;
        }
        else(this.bills[i]>200)
        {
          percentage=0.1;
        }
        this.tips[i]=bill*percentage;
        
      }
}
 }
console.log(tipCalculater.calculateTip())