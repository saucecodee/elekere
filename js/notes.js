let notes = JSON.parse(localStorage.getItem("notes")) || []

function getNote(id) {

}

function addNote() {
     let note = $("#note-text").value
     notes.push({ id: new Date().toJSON(), text: note })

     $("#note-text").value = ''

     storeNote()
}

function editNote(id) {
     let note = $("#note-text").value
     let index = notes.findIndex(n => n.id == id)
     notes[index].text = note

     storeNote()
}

function deleteNote(id) {
     let index = notes.findIndex((n) => n.id == id)
     notes.splice(index, 1)

     storeNote()
}

function showNotes() {
     noteList = ""
     disNum = notes.length

     for (let i = disNum - 1; i > -1; i--) {
          noteList += `<li class="sect-unit">
                    <p class="sect-unit-text"> ${notes[i].text} </p>
                    <div class="sect-unit-buts">
                         <button id="${notes[i].id}" class="sect-unit-buts-del"></button>
                    </div>
               </li>`
     }

     $("#notes").innerHTML = noteList
}

function storeNote() {
     localStorage.setItem("notes", JSON.stringify(notes))
     showNotes()
}

//Display notes
showNotes()