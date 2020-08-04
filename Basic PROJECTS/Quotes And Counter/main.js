const simpleQuotes=[
    {
        name:'sujan',quote:'Never Stop Learning ,Dude'
    },
    {
        name:'suj',quote:"Never Stop  ,Dude"
    },
    {
        name:"sun",quote:"Dont Stop Learning ,Dude"
    },
    {
        name:"sjan",quote:"Im  Learning ,Dude"
    },
    {
        name:"san",quote:"Never Stop Learning ,life doesnt dtop teaching ,Dude"
    }
]
const quoteBtn =document.getElementById('quotebtn');
const quoteAuthor =document.getElementById('QuoteAuthor');
const quote =document.getElementById('quote');

quoteBtn.addEventListener("click",displayQuote)

function displayQuote(){
   
    let random = Math.floor(Math.random()*simpleQuotes.length);
    // fo(let i=0;i<simpleQuotes.length;i++){
       
        quote.innerHTML =simpleQuotes[random].quote;
        quoteAuthor.innerHTML=simpleQuotes[random].name
    // }
}



//
let ibtn=document.querySelector('.iBtn')
let dbtn=document.querySelector('.dBtn')
let no =document.querySelector('h2.no');

ibtn.addEventListener('click',increase)
function increase(){

    no.innerHTML++;
}
dbtn.addEventListener('click',decrease)
function decrease(){
    no.innerHTML-=1;
}