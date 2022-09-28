import logo from './logo.svg';
import './App.css';
import NoteList from './Components/NoteList'
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './Components/Search';
import Popup from './Components/Popup';
import AddNote from './Components/AddNote';


function App() {

  const [buttonPopup,setButtonPopup] = useState(false);


  const[notes,setNotes] = useState([
    {
    id:nanoid(),
    
    text:"The Moon is a barren, rocky world without air and water. "
   
  },
  {
    id:nanoid(),
    text:"moon The sun is a huge ball of gases. It has a diameter of 1,392,000 km.."
    
  },
  {
    id:nanoid(),
    text:"The Solar System consists of the Sun Moon and Planets. It also consists of comets, "
   
  },
  {
    id:nanoid(),
    text:"The Mahabharata is a story about a great battle between the Kauravas and the Pandavas. "
    
  },
  {
    id:nanoid(),
    text:"The Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan "
    
  }


]);

const[searchText,setSearchText]=useState('');

const deletNote = (id) =>{
  const newNotes = notes.filter((note)=> note.id !== id)
  setNotes(newNotes)
}

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText}/>
      
      <div className='popup'>
      <main>
        <h1>Note Book</h1>
        <button onClick={() => setButtonPopup(true)}>ADDNote</button>
        
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <AddNote/>
        </Popup>
 </div>

     <NoteList
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
    
     /> 
    </div>
  );
}

export default App;