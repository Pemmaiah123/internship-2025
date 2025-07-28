
import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Typography
} from "@mui/material";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import NavBar from "./components/NavBar";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleNewNote = () => {
    if (currentNote.trim()) {
      const timestamp = new Date().toLocaleString();
      if (selectedNoteIndex !== null) {
        const updated = [...notes];
        updated[selectedNoteIndex] = { text: currentNote, time: timestamp };
        setNotes(updated);
      } else {
        setNotes([...notes, { text: currentNote, time: timestamp }]);
      }
    }
    setCurrentNote("");
    setSelectedNoteIndex(null);
  };

  const handleDeleteNote = () => {
    if (selectedNoteIndex !== null) {
      const updated = [...notes];
      updated.splice(selectedNoteIndex, 1);
      setNotes(updated);
      setCurrentNote("");
      setSelectedNoteIndex(null);
    }
  };

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
    setCurrentNote(notes[index].text);
  };

  return (
    <>
      <CssBaseline />
      <NavBar /> 
      <Grid container sx={{ height: "calc(100vh - 64px)" }}>
        {/* Adjust height to account for navbar */}
        <Grid item xs={12} md={3}>
          <NoteList
            notes={notes}
            onNewNote={handleNewNote}
            onSelectNote={handleSelectNote}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <NoteEditor
            currentNote={currentNote}
            onChange={setCurrentNote}
            onSave={handleNewNote}
            onDelete={handleDeleteNote}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
