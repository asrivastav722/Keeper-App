import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  const [state, setState] = useState(true);
  function submitNote(event) {
    if (note.title === "") {
      alert("Please Enter Title");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
      setState(true);
      event.preventDefault();
    }
  }
  function inputField() {
    return (
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        required
      />
    );
  }

  function expand() {
    setState(false);
  }

  return (
    <div>
      <form className="create-note">
        {state === false && inputField()}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={state === false ? 3 : 1}
        />
        <Zoom in={!state}>
          <Fab type="submit" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>{" "}
      </form>
    </div>
  );
}

export default CreateArea;
