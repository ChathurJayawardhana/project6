import React from 'react';
import { MdDeleteForever } from 'react-icons/md';


export default function Note({ id,text,date,handleDelteNote }) {
  return (
    <div className='note'>
       <span>{text}</span>
     <div className='note-footer'>
     <button className='edit'>Edit</button>
     <button className='update'>Update</button>
     <button className='pin'>Pin</button>
        <MdDeleteForever onClick={()=>handleDelteNote} className='delete-icon'size='1.3em'/>

     </div>
    </div>
  )
}
