
/*
CallBack*********************************
*/

// const posts =[
//     {title:"post One",Body:"this is post one"},
//     {title:"post Two",Body:"this is post two"}
// ]
// function getPost(){
//     setTimeout(()=>{
// let Output =" ";
// posts.forEach((post,index)=>{
//     Output+=`<li>${post.title} </li>`
// })
// document.body.innerHTML =Output;
// },1000)
// }
// function createPost(post,callback){
//     setTimeout(()=>{
//         console.log("done")
//         posts.push(post)
//         callback();
//     },2000)
// // }
// getPost();
// createPost({title:"post 3",Body:"this is post three"},getPost)


/*
Promises*********************************
*/

// const posts =[
//     {title:"post One",Body:"this is post one"},
//     {title:"post Two",Body:"this is post two"}
// ]
// function getPost(){
//     setTimeout(()=>{
// let Output =" ";
// posts.forEach((post,index)=>{
//     Output+=`<li>${post.title} </li>`
// })
// document.body.innerHTML =Output;
// },1000)
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//         const error =true;
//         if(!error){
//             resolve()
//         }else{
//             reject("error ,something went wrong")
//         }
//         },2000)
//     });
// }0

// create.Post({title:"book4",Body:"this is book 4"}).then(getPost).catch(err => console.log(err));