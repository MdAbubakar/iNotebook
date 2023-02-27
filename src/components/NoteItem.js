import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="bi bi-trash3 mx-1 text-warning"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Note deleted successfully", "warning");
              }}
            ></i>
            <i
              className="bi bi-pencil-square mx-1 text-primary"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text text-muted">{note.tag}</p>
          <p className="card-text text-muted">
            {new Date(note.date).toGMTString()}
          </p>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
