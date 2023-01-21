import React from "react";
// import { useRef  } from "react";


export default function Notes({element,notes,setNotes,seteditid,check,setcheck}) {




const onCheck = (id) =>{
  if(check.includes(id)){
  setcheck(check.filter((elem)=> elem !==id));
  }else{
    setcheck([...check,id])
  }
}


  const removeHandler =(id)=>{
    const newNotes = notes.filter((elem)=>{
      if(elem.id!==id){
        return elem
      }
      // console.log(elem)
      
    })
  setNotes(newNotes)
    // console.log(notes);
 

  }
  const editHandler = (id) =>{
    console.log(id);
  notes.filter((elem)=>{
    seteditid(id)
    if(elem.id === id){
      document.getElementById("edittitle").value = elem.title;
      document.getElementById("editdesc").value = elem.desc;
    }
  })
  }
 
  return (
    <>
<div className="card-row m-5">
  {/* <div className="card p-4 ml-4 "> */}
    <div className={`card ${check.includes(element.id)? 'bg-info':''}`}>
  <div className="card-body " style={{textTransform:"capitalize"}}>
    <h5 className="card-title">{element.title}</h5>
    <p className="card-text">{element.desc}</p>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() =>
    onCheck(element.id)
    // console.log(element.id)
  }/>
  <label className="form-check-label mb-6" htmlFor="flexCheckDefault">
    Done
  </label>
</div>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
    editHandler(element.id)
    
   }}>
  Edit
</button>
   <button className="btn btn-danger mx-2" onClick={()=>{
    removeHandler(element.id)
    
   }}>Delete</button>
  </div>
</div>
</div>
{/* </div> */}
    </>
  );
}
