import React from 'react'

export default function AddNote() {
    
  return (
    <div className='note-new'>

        <textarea  cols='3' rows='1' placeholder='Title'></textarea>
            <textarea
              cols="10"
             rows="8"
              placeholder='Type a note'>

              </textarea>
              <div className='note-footer'>
                <button className='save'>Submit</button>
              </div>
    </div>
  )
}