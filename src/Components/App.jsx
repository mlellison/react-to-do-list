import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);
  function addNote(newNote) {
    setList((prevValue) => {return [...prevValue, newNote]})
  }

  function deleteNote(id) {
    setList((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {list.map((noteItem, index) => <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />)}
      <Footer />
    </div>
  );
}

export default App;