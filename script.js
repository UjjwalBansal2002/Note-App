let addBtn = document.getElementsByTagName('button')[0]
let main=document.querySelector(".main")
let saveNotes=()=>{
    let notes=document.querySelectorAll('.note textarea');
    let data=[]
    notes.forEach((note)=>{data.push(note.value)})
    // console.log(notes,data)
        if(data===[]){
            localStorage.removeItem('notes')
        }else{
            localStorage.setItem('notes',JSON.stringify(data))
        }
    localStorage.setItem('notes',JSON.stringify(data))
}


// self calling function



addBtn.addEventListener('click', () => {
    addNote()
})


{/* <div class="note m-5 ">
<div class="tool text-light d-flex justify-content-end p-2">
<i class="fa-solid fa-floppy-disk mx-1 fs-5 p-1"></i>
<i class="fa-solid fa-trash mx-1 fs-5 p-1"></i>
</div>

<textarea class="p-3 fs-4"></textarea>
</div>  */}

const addNote = (text = '') => {
    let note = document.createElement("div")
    note.classList.add('note', 'm-5')
    note.innerHTML = `
    <div class="tool text-light d-flex justify-content-end p-2">
    <i class="save fa-solid fa-floppy-disk mx-1 fs-5 p-1"></i>
    <i class="trash fa-solid fa-trash mx-1 fs-5 p-1"></i>
    </div>
    <textarea class="p-3 fs-4">${text}</textarea>`;
    note.querySelector('.trash').addEventListener('click',()=>{
        note.remove()
        saveNotes()
    })
    note.querySelector('.save').addEventListener('click',()=>{
        saveNotes()
    })
    note.querySelector('textarea').addEventListener('focusout',()=>{
        saveNotes()
    })
    main.appendChild(note);
    saveNotes()
    
    
}
(
    ()=>{
        const notes=JSON.parse(localStorage.getItem('notes'))
        if(notes===null){
            addNote();
        }else{
            notes.forEach(note => addNote(note))
            
        }
    }
)()