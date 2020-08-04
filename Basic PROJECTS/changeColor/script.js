var bodyBg =document.querySelector('body');

// var color =['yellow','red','green',"sujan","sudip","cyan","gray","navy","black"];
var colorBt =document.querySelector('.colorBtn');
colorBt.addEventListener('click',change);
const hexNum =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

hexcol= document.querySelector('.hexcol');

function change(){
    let hex='#';
    // bodyBg.style.backgroundColor= "blue";
    // let random =Math.floor(Math.random()*color.length)
    for (let i=0;i<6;i++){
        let random=Math.floor(Math.random()*hexNum.length);
        hex+=hexNum[random];
        // hexcol.innerHTML=color[i]
    }
    hexcol.innerHTML=hex
    bodyBg.style.backgroundColor =hex
}

