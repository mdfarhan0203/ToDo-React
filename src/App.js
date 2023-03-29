import React, { useEffect, useState } from 'react'

import './style.css'
import Header from './components/Header'
import InputFields from './components/InputField';
import Note from './components/Note';
import Footer from './components/Footer';


// Get Local Storage 
const getLocalStorageData=()=>{
  let noteData=localStorage.getItem('Notes')
  return noteData? JSON.parse(localStorage.getItem('Notes')):[];
}

function App() {
  const [notes, setNotes] = useState(getLocalStorageData())

  function addToDo(newItem) {
    setNotes(preValue => {
      return [...preValue, newItem]
    })
  }

  function onDelete(id) {
    setNotes(preValue=>{
      return preValue.filter((item,index)=>index!==id)
    })
  }
  useEffect(()=>{
    localStorage.setItem('Notes',JSON.stringify(notes))
  },[notes])

  return (
    <div className="App">
      <Header />
      <InputFields addToDo={addToDo} />
      {notes.map((note,index) => {
        return <Note  key={index} id={index} title={note.title} content={note.content} onDelete={onDelete} />
      })}
      <Footer />
    </div>
  );
}

export default App;
