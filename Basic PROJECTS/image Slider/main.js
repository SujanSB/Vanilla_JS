const nextBtn =document.querySelector('.nextbtn');
const prevBtn =document.querySelector('.prevbtn');
var container =document.querySelector('.images');

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
let counter = 0;

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter === 4){
        counter= 0;
    }
    counter++;
    container.style.backgroundImage =`url(${counter}.jpeg)`
}
function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter === 0){
        counter= 4;
    }
    counter--;
    container.style.backgroundImage =`url(${counter}.jpeg)`
}