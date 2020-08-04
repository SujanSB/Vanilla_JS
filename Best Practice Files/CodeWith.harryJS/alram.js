console.log("hami alram banauna jadai xam")
const alramSubmit =document.getElementById("alarmSubmit");
alramSubmit.addEventListener('click',setAlarm);
var audio =new Audio(' https://www.random.org/audio-noise/?channels=2&volume=100&rate=16000&size=8&date=2020-04-14&format=wav&deliver=browser')
now = new Date();
console.log(now)
function setAlarm(e){
    e.preventDefault();
    console.log("setting alarm");
    const alarm=document.getElementById('alarm');
    alarmDate =new Date(alarm.value)
    console.log(`setting Alarm for ${alarmDate}....`);
    let tt =(alarmDate-now)
    if(tt>=0)  {
        setTimeout(()=>{
            audio.play()
        }),tt}
}