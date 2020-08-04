const Companies =[
    {name:"company 1",category :"finance",start:1999 ,end:2003},
    {name:"company 2",category :"ratail",start:1997 ,end:2006},
    {name:"company 3",category :"freelance",start:1995 ,end:2009},
    {name:"company 4",category :"nagad",start:1993 ,end:2000},
    {name:"company 5",category :"bima",start:1998 ,end:2004},
    {name:"company 6",category :"Udharo",start:1991 ,end:2002},
    {name:"company 7",category :"rin",start:1989 ,end:2010},
    {name:"company 8",category :"karja",start:1990 ,end:2020}

];

var ages =[
    33,13,24,56,43,19,32,50,47,17,16,39,45,42,57,68];

//for

// for (let i=0;i<Companies.length;i++){
    // console.log(Companies[i]);
// }
//ForEach

// Companies.forEach(function(comp){
    // console.log(comp.name);
// });
//forEach with Artrow Function;
// Companies.forEach((comp)=>
    // console.log(comp));

//filter
/*withOut using filter
let canDrink=[];
console.log(ages.length);
for( let i=0;i<ages.length;i++){
    if(ages[i]>=21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink.length)
console.log(canDrink);
*/
// *****with using******
// var canDrink= ages.filter(function(a){
// var canDrink= ages.filter((a)=>{  //usinfg arrow function
//     if(a>=21){
//         return true;
//     }
// })
// console.log(canDrink);

// var goodCompanies =Companies.filter((x)=>{
//     if (x.end>=2010) *****************//agisamma tyo vitra ko arg jasto le element lai represent gareko jasto lageko thyo tara ahile teslai yeuita function jasto vayera arko  vitra ko part lai call garna sakyo i.e as a object kaam garyoo
//     return true
// });
// console.log(goodCompanies)
// const oldCompany =Companies.filter(a=> a.start<1990)
// console.log(oldCompany)

// const Lastlong =Companies.filter(b=> (b.end-b.start)>20)
// console.log(Lastlong)


/*********************
 * MAp
 */
// const companyName =Companies.map(function(company){
// const companyName =Companies.map((company)=>( `${company.name}:${company.start}-${company.start}`));
// // });
// console.log(companyName)

//****************sort*************** */

// const SortedCompany =Companies.sort(function(c1,c2){
    //     if(c1.start>c2.start){
        //         return 1
        //     }else{
            //         return -1;
            //     }
            // });
            //using ternary operator
// const SortedCompany =Companies.sort((c1,c2)=>(c1.start>c2.start ? 1:-1));
// console.log(SortedCompany)

// const sortAges = ages.sort();
// console.log(sortAges)

/*
reduce********************
*/

// let ageSum =0;
// for (let i=0;i<ages.length;i++){
//     ageSum +=ages[i];
// }

// const ageSum =ages.reduce((total,age)=> total + age,0);
// console.log(ageSum);


// const Combined = ages.map(age=> age*2)
// .filter(age=> age>=40)
// .sort(age => a - b)
// .reduce((a,b)=>a+b,0);

// console.log(Combined)