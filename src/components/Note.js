import React from 'react'

function Note(props) {
    function handleClick(){
        props.onDelete(props.id);
    }
  return (
    <div className="note">
      <div className="Card">
        <h2 className="title">{props.title}</h2>
        <p className='content'>{props.content}
        </p>
        <button className="Addbtn" onClick={handleClick}>Delete</button>
      </div>
           
    </div>
  )
}

export default Note
