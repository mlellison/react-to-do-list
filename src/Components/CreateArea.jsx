import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  })
  function captureInput(event) {
    const {value, name} = event.target
    setInput((prevValue) => {
        if (name === "title") {
          return {
            title: value,
            content: prevValue.content
          }
        } else if (name === "content") {
          return {
            title: prevValue.title,
            content: value
          }
        }
    })
  }

  function addItem(event) {
    props.onAdd(input);
    setInput({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input value={input.title} onChange={captureInput} name="title" placeholder="Title" />
        <textarea value={input.content} onChange={captureInput} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
