import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Notes from './components/Notes'
import EditModal from './components/EditModal'

export default function App() {
  const [title, settitle] = useState("")
  const [desc, setDesc] = useState("")
  const [notes, setNotes] = useState(getNotesFromls)
  const [editid, seteditid] = useState("")
  const [check,setcheck ] = useState([])
  localStorage.setItem("notes", JSON.stringify(notes))
  // console.log(notes)
  return (
    <>  
      <EditModal editid={editid} notes={notes} setNotes={setNotes} />
      <Navbar />
      <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}  />
      <div className=" container ">
        <div className="row d-flex ">
          <div className="card-group mt-1 justify-content-start">
            <h1 className='mb-3 d-flex justify-content-center '>Your Notes</h1>
            {
              notes.length===0?<div className="card  mb-3">
              <div className="card-body">
                <h5 className="card-title">Message</h5>
                <p className="card-text">No Notes Found.</p>                          
              </div>
            </div>
            :notes.map((element) =>{
              return <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} seteditid={seteditid} check={check} setcheck={setcheck}/>
            })
            }

          </div>
        </div>
      </div>

    </>
  )
  function getNotesFromls(){
    const notes = JSON.parse(localStorage.getItem("notes"));
    if(notes){
      return notes }
      
      else{
        return []
    }
  }
}
