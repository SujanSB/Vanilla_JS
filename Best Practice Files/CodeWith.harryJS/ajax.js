console.log("hello sujan k xa aba dhamadham garnu parxa hai")

let firstbtn = document.getElementById("firstbtn");
firstbtn.addEventListener('click',buttonClickhandler)
function buttonClickhandler(){
    console.log("button is clicked");
    //instantiate xhr objeect
    var a = new XMLHttpRequest();
    // //open the object
    // a.open('GET', 'sujan.txt', true);
    // use this for POST REQUEST

    a.open('POST',"  http://dummy.restapiexample.com/api/v1/employees", true)
    a.getResponseHeader('content-type','applilcation/json')
    // //what to do on progress
    a.onprogress =function(){
        console.log("on progressed")
    }
    // a.onreadystatechange =function(){
    //     console.log("ready state is",xhr.readyState);
    // }
    // //what to do onwhen response id ready
    a.onload= function(){
    if(this.status ===200){
        console.log(this.responseText)                        
     }else{
        console.log("some Error Occured")
     }
    }
    params=`	{"name":"test34","salary":"123","age":"23"}`
    //semd the request
    a.send(params);
    // console.log("we are done")
}