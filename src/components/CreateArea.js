import React,{useState} from 'react'

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote =>{
      return{
        ...prevNote,
        [name]:value
      }
    })
  }
    function submitNote(event){
      props.onAdd(note)
      setNote({
        title:"",
        content:""
        
      })
      event.preventDefault()
    }
    
  
  return (
    <div>
      <form>
        <input name="title" className="input-text"
         onChange={handleChange} value={note.title}
          placeholder="Title"/><br/>
        <textarea name="content" className="input-textarea" 
        onChange={handleChange} value={note.content} 
        placeholder="Take a note" rows="4"/><br/>
        <button className="Addbtn"
        onClick={submitNote}
        >Add Note</button>
      </form>
    </div>
  )
}

export default CreateArea
