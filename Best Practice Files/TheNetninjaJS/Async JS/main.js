// window.onload =function(){

//     var http = new XMLHttpRequest;
//     http.onreadystatechange =function(){
//         // console.log(http)
//         if (http.readyState==4 & http.status== 200){
//             // console.log(JSON.parse(http.response));
//         }
//     }

//     http.open("GET", "xyz.json",false)
//     http.send();
//     // console.log("sujan");

// //JQuery method

// $.get("xyz.json",function(data){
//     console.log(data);
// })
// };
/*
*********************CallBAck function *******************
*/
window.onload =function(){
     function CallBAck(val){
         console.log(val)
     }
     var fruits =["kera","aap","shyau"];
     fruits.forEach(CallBAck
        )
}
