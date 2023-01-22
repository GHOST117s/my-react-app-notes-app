import React from 'react'

export default function EditModal({title,desc,editid,notes, setNotes }) {
  // console.log(editid);

  // old style to update the title and description without  validation

  // const updateHandler = () => {    
  //  const updateNotes= notes.map((elem)=>{       
  
  //   if(editid === elem.id){    
      
  //     console.log(elem.title,elem.desc);
      
      
  //   return(  {...elem,title:document.getElementById("edittitle").value ,
  //               desc:document.getElementById("editdesc").value 
  //             })
  //   }else{
  //     return elem
  //   }
    

  //   })

  //   // console.log(updateNotes);
    
  //   setNotes(updateNotes);
    
  // }

  // updateNotes with validation

  const updateHandler = () => {    
    const newTitle = document.getElementById("edittitle").value.trim();
    const newDesc = document.getElementById("editdesc").value.trim();
    
    if (!newTitle) {
      alert("Please Input a new title")
      // Show an error message or alert if the title is empty
      return;
    }
    
    if (!newDesc) {
      alert("Please Input a new description")
      // Show an error message or alert if the desc is empty
      return;
    }
    
    const updateNotes = notes.map((elem) => {       
      if(editid === elem.id){    
        return(  {...elem,title: newTitle, desc: newDesc});
      }else{
        return elem
      }
    });
    
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
