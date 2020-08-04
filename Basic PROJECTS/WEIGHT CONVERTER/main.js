document.getElementById('output').style.visibility='hidden'
document.getElementById('lbsInput').addEventListener('input',function(e){
    let lbs =e.target.value;
    // console.log(pounds)
    document.getElementById('output').style.visibility='visible'
    document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML=lbs/2.2046;
    document.getElementById('mgOutput').innerHTML=lbs/0.0000022046;
})