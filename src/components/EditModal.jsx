import React from 'react'

export default function EditModal({title,desc,editid,notes, setNotes }) {
  // console.log(editid);
  const updateHandler = () => {
   const updateNotes= notes.map((elem)=>{
    
    
    //  console.log(elem);
    if(editid === elem.id  ){
   
    return(  {...elem,title:document.getElementById("edittitle").value ,
                desc:document.getElementById("editdesc").value 
              })
    }else{
      return elem
    }

    })

    // console.log(updateNotes);
    
    setNotes(updateNotes);
    
  }
  
  return (
    <>




      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" id="edittitle" placeholder='Enter Title' />

                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea name="desc" id="editdesc" cols="50" rows="3" className='form-control' placeholder='Enter Your Description'></textarea>
                </div>


              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Notes</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
