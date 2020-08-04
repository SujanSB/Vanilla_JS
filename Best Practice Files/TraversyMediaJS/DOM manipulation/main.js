var h1 =document.getElementById('h1.heading');
// console.log(h1)
// h1.innerText="file"
// h1.textContent="sujan"//yesle vita k style xa ,,change gardaina..foemal manxe jastai ho
// h1.style.backgroundColor="green"
// var its =document.getElementsByClassName('row');
// console.log(its)
// its[2].textContent="term"
// its[2].innerHTML="value"
// Array.from(its).forEach(i=>its[i].textContent="green");
// for (let i=0;i<its.length;i++){
//     // its[i].textContent="green"
//     its[i].style.backgroundColor="darkgreen"
//     its[i].style.color="white"
//     its[i].style.border="2px solid yellow"
//     its[i].style.padding="8px "
// }
// // var input =document.querySelector('input[type="submit"]')
// // input.value="kei lekh na "
// var lastItem =document.querySelector('.row:last-child');
// var secondItem =document.querySelector('.row:nth-child(2)').innerHTML;
// // secondItem.style.color="white"
// // console.log(secondItem)
// var form =document.querySelector('form');
// // console.log(form)
// form.style.margin="20px"
// var odd =document.querySelectorAll('li:nth-child(odd)');
// for (let i=0;i<odd.length;i++){
//     odd[i].style.border="2px solid red"
// }



// var titles =document.getElementsByClassName("row");
// console.log(titles.nextSibling);
//create element

// var newDiv =document.createElement('div')
// newDiv.className="hello"
// newDiv.id="hel"
// newDiv.setAttribute('title','hello sujan')
// console.log(newDiv)

// var newDivText =document.createTextNode("Great JOb sujan")
// newDiv.appendChild(newDivText);

// var container =document.querySelector('.container');

// container.insertBefore(newDiv,h1);

var addform = document.querySelector('.addForm')
var items = document.querySelector('#items')
// console.log(items)
// var rows = document.getElementsByClassName('row')


//form submitEvent
addform.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    // console.log(`gar gar`)
    var newItem =document.querySelector("#item").value;
    // console.log(newItem);
    //creating new li element
    var li =document.createElement('li');
    li.className='listItem';
    li.appendChild(document.createTextNode(newItem));
    // console.log(li)
    //delete button banauda
    var deleteBtn =document.createElement('button')
    deleteBtn.className='btnDel';
    deleteBtn.appendChild(document.createTextNode('Del'))
    li.appendChild(deleteBtn)

    items.appendChild(li)
    // its.appendChild(li)

    // rows.appendChild(li)
}