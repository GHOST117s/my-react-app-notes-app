import React from 'react'


export default function Form({title,settitle,desc,setDesc,notes,setNotes,check,setcheck}) {
  const inputHandler =(e) =>{
    if(e.target.id === "title"){
    settitle(e.target.value)
    }else{
      setDesc(e.target.value)
    }
    // console.log(title,desc)

  }
  const addNotesHandler = (e) =>{
    e.preventDefault()
    if(title.trim() ==='' && desc.trim()===''){
      alert("Please Input some text")
    }else{
      setNotes((notes) =>{
        return(
          [...notes,{
            title:title,
            desc:desc,
            id:new Date().getTime(),
            
          }]
        )
  
      })
    }
    settitle("")
    setDesc("")
  

  }
  

  return (
    <div>
  <div className="container my-5 ">
    <div className="row d-flex justify-content-center">
        <div className="col-md-5 ">
        <form style={{border:"2px solid #ced4da",borderRadius:"10px",padding:"30px"}} >
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" placeholder='Enter Title' value={title} onChange={inputHandler}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Description</label>
    <textarea name="desc" id="desc" cols="30" rows="3" className='form-control' placeholder='Enter Your Description' value={desc} onChange={inputHandler}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={addNotesHandler} >Add Notes</button>
</form>
        </div>
    </div>
  </div>
      
    </div>
  )
}
