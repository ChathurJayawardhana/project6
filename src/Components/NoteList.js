import React from 'react';
import Note from './Note'

export default function NoteList({ notes,handleDeleteNote }) {
  return (
    <div className='note-list'>
        {notes.map((note) => (
            <Note 
            id={note.id} 
            text={note.text} 
            date={note.date} 
            handleDeleteNote={handleDeleteNote}
            />
        )
        )}
      
       
    </div>
  )
}