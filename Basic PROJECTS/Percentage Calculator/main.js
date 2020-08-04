
let clk = document.getElementById('thichyo');
clk.addEventListener('click',ani);
function ani(e){
    e.preventDefault()
    console.log("hunxa ekxin ma")
    let sub1 = document.getElementById('sub1').value;
    let sub2 = document.getElementById('sub2').value;
    let sub3 = document.getElementById('sub3').value;
    let sub4 = document.getElementById('sub4').value;
    let total =calculate(sub1,sub2,sub3,sub4) ;
    alert(total)
    console.log(sub1)
    console.log(sub2)
    console.log(sub3)
    console.log(sub4)
    let avg=total/4;
    let bool;
    // avg=60;
    if(avg>50){
        bool="pass";
    }else{
        bool="fail";
    }
    let showPost =document.getElementById('post')
    showPost.innerHTML=`The Student have get total ${total} with percentage of ${avg} and student is ${bool}`
   
}

// let result=document.querySelector('.result');
// let another =document.createElement('row')
// another.className ="row"
// another.appendChild(document.createTextNode('val'));
// console.log(another)
// console.log(result)
// result.appendChild(another)
function calculate(sub1,sub2,sub3,sub4){

    let x =parseFloat(sub1)
    let y =parseFloat(sub2)
    let z =parseFloat(sub3)
    let w =parseFloat(sub4)
    let total = eval(z + y + x + w) ;
    return total;

}