// console.log("welcome to note app ");
// // yedi kunai  user le note add garxa local storage ma taba
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById("addTxt");
//   let addTitle =document.getElementById("addTitle");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let myObj ={
//     title:addTitle.value,
//     text :addTxt.value
//   }
//   notesObj.push(myObj);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
//   // console.log(notesObj);
//   showNotes();
// });
// // function to show element from localstorage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
//             <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
//                 <div class="card-body">
//                 <h5 class="card-title">Note No.${index+1})${element.title} </h5>
//                 <p class="card-text"> ${element.text}</p>
//                 <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
//                 </div>
//             </div>  
//             `;
//   });
//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = "Sathi lekha na lekha kei ta";
//   }
// }

// // function to delete note
// function deleteNote(index) {
//   // console.log("maile delete garna jadai xuh",index);
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.splice(index, 1);
// //   yesle localstorage bata pani hataune kaam gareko xa;
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }
// search = document.getElementById("searchTxt");
// search.addEventListener("input", function() {
//   let inputVal = search.value.toLowerCase();
//   let noteCards = document.getElementsByClassName("noteCard");
//   Array.from(noteCards).forEach(function(element) {
//     let cardTxt = element.getElementsByTagName("p")[0].innerText;
//     if (cardTxt.includes(inputVal)) {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   });
// });
