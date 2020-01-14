const tabs = {
     "notes-but": {
          button: "notes-but",
          section: "notes-sect"
     },
     "todos-but": {
          button: "todos-but",
          section: "todos-sect"
     },
     "events-but": {
          button: "events-but",
          section: "events-sect"
     }
}
let notes = JSON.parse(localStorage.getItem("notes")) || []

// //////////////////////////////////////////////////////
//      Initial calls
/////////////////////////////////////////////////////////



//Display notes
showNotes()





// S('#sm-close-btn').addEventListener("click", function () {
//      S('.side-modal').classList.add("side-modal-out")
// });

// //////////////////////////////////////////////////////
//      Event Listners
/////////////////////////////////////////////////////////

// Swith tabs
$$(".tabs-but").forEach(e => {
     e.onclick = (e) => {
          let destTab = tabs[e.target.id]

          for (let i = 0; i < 3; i++) {
               $$(".tabs-but")[i].classList.remove("active")
               $$(".tabs-sec")[i].classList.remove("active")
          }

          $(`#${destTab.button}`).classList.add("active")
          $(`#${destTab.section}`).classList.add("active")
     }
})



// Search with google
$("#google-search").onkeypress = (e) => {
     let searchText = $("#google-search").value
     if (e.key === "Enter") window.location.replace(`https://www.google.com/search?q=${searchText}&rlz=1C1CHBF_enNG853NG853&oq=iff&aqs=chrome..69i57.723j0j1&sourceid=chrome&ie=UTF-8`)
}

// //////////////////////////////////////////////////////
//      Notes
/////////////////////////////////////////////////////////

// Add notes - Enter key
$("#note-text").onkeypress = (e) => {
     if (e.key === "Enter") addNote()
};

// Delete note
$$(".sect-unit-buts-del").forEach((e) => {
     e.onclick = (e) => {
          let id = e.target.id
          deleteNote(id)
     };
})














// console.log(new Date().toDateString())
// console.log(new Date().toISOString())
// console.log(new Date().toJSON())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toString())
// console.log(new Date().toTimeString())
// console.log(new Date().toUTCString())