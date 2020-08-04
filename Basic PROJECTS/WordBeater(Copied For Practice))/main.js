
window.addEventListener('load',init);


const levels={
    easy :5,
    medium :3,
    hard :2

};
const currentLevel =levels.medium;

let time =5;
let score =0;
let isPlaying;


//dom ko chaine element haru
const selection =document.querySelector('#select');
console.log(selection.value)
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');


const words=[
    "sujan",
    "Mobile",
    "lapTop",
    "Life",
    "Invalid",
    "Victory",
    "end",
    "start",
    "motivational",
    "Success",
];

// initialize Game
function init(){
    seconds.innerHTML=currentLevel
    showWord(words);
    //start match
    wordInput.addEventListener('input',startMatch)

    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}
function startMatch(){
    if(matchWord()){
        // console.log("Match!!")
        isPlaying=true;
        time=currentLevel+1;
        showWord(words);
        wordInput.value="";
        score++;     
    }
    if (score===-1){
        scoreDisplay.innerHTML=0;
    }else{
        scoreDisplay.innerHTML=score;
    }
}
//match check garne function
function matchWord(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML="correct!!";
        return true;
    }else{
        message.innerHTML="";
        return false;
    }
}

function showWord(words){
    const random =Math.floor(Math.random()*words.length);
    currentWord.innerHTML=words[random];
}

function countdown(){
    if(time>0){
        time--;
    }else if(time===0){
        isPlaying =false;
    }
    timeDisplay.innerHTML=time;
}
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML="Game Over,Dude!!!"
        score=-1;
    }
}
