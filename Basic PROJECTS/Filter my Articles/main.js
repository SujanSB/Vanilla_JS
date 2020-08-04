let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup',filterName);
function filterName(){
    //getting value of input
    let filterValue =document.getElementById('filterInput').value.toUpperCase();
    // console.log(filterValue)
    //get name ul
    let ul =document.getElementById('names');
    //get li from ul
    let li =ul.querySelectorAll('li.collection-item')
    // console.log(li)
    //loop through colletion item li
    for (let i = 0;i<li.length; i++){
        let a =li[i].getElementsByTagName("a")[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1)
        {
            li[i].style.display ='';
        }else{
            li[i].style.display="none"
        }
    }
}
