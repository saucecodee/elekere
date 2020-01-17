

// Search with google
// $("#google-search").onkeypress = (e) => {
//      let searchText = $("#google-search").value
//      if (e.key === "Enter") window.location.replace(`https://www.google.com/search?q=${searchText}&rlz=1C1CHBF_enNG853NG853&oq=iff&aqs=chrome..69i57.723j0j1&sourceid=chrome&ie=UTF-8`)
// }

// //////////////////////////////////////////////////////
//      Tabs
/////////////////////////////////////////////////////////

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

const noteModal = $("#note-modal")

$("#open-note-modal").onclick = (e) => {
     noteModal.style.display = "flex"
}

$("#close-note-modal").onclick = (e) => {
     noteModal.style.display = "none"
}


// //////////////////////////////////////////////////////
//      Todos
/////////////////////////////////////////////////////////

const todoModal = $("#todo-modal")

$("#open-todo-modal").onclick = (e) => {
     todoModal.style.display = "flex"
}

$("#close-todo-modal").onclick = (e) => {
     todoModal.style.display = "none"
}


// //////////////////////////////////////////////////////
//      Events
/////////////////////////////////////////////////////////

const eventModal = $("#event-modal")

$("#open-event-modal").onclick = (e) => {
     eventModal.style.display = "flex"
}

$("#close-event-modal").onclick = (e) => {
     eventModal.style.display = "none"
}


// //////////////////////////////////////////////////////
//      Setting
/////////////////////////////////////////////////////////

const settingsModal = $("#settings-modal")

$("#open-settings-modal").onclick = (e) => {
     settingsModal.style.display = "flex"
}

$("#close-settings-modal").onclick = (e) => {
     settingsModal.style.display = "none"
}











// console.log(new Date().toDateString())
// console.log(new Date().toISOString())
// console.log(new Date().toJSON())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toLocaleString())
// console.log(new Date().toLocaleTimeString())
// console.log(new Date().toString())
// console.log(new Date().toTimeString())
// console.log(new Date().toUTCString())