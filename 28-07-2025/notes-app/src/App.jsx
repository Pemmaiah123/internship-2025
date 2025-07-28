import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleNewNote = () => {
    if (currentNote.trim()) {
      if (selectedNoteIndex !== null) {
        const updated = [...notes];
        updated[selectedNoteIndex] = currentNote;
        setNotes(updated);
      } else {
        setNotes([...notes, currentNote]);
      }
    }
    setCurrentNote("");
    setSelectedNoteIndex(null);
  };

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
    setCurrentNote(notes[index]);
  };

  const handleDeleteNote = () => {
    if (selectedNoteIndex !== null) {
      const updated = [...notes];
      updated.splice(selectedNoteIndex, 1);
      setNotes(updated);
      setSelectedNoteIndex(null);
      setCurrentNote("");
    }
  };

  const handleDone = () => {
    setSelectedNoteIndex(null);
    setCurrentNote("");
  };

  return (
    <Container maxWidth="xl"  sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ display: "flex", height: "100vh" }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: "25%",
            borderRight: "1px solid #ccc",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>notes app </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleNewNote}
            fullWidth
          >
            New 
          </Button>

          <List sx={{ mt: 2, overflowY: "auto", flexGrow: 1 }}>
            {notes.map((note, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handleSelectNote(index)}
                sx={{
                  mb: 1,
                  bgcolor:
                    index === selectedNoteIndex ? "#238794ff" : "transparent",
                  borderRadius: 1,
                }}
              >
                <Typography
                  noWrap
                  sx={{ fontSize: "0.9rem", color: "#333", maxWidth: "100%" }}
                >
                  {note}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Editor Panel */}
        <Box sx={{ flexGrow: 1, p: 3, position: "relative" }}>
          {/* Top-right actions */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ mb: 2 }}
          >
            <IconButton
              color="success"
              onClick={handleDone}
              disabled={currentNote.trim() === ""}
            >
              <DoneIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={handleDeleteNote}
              disabled={selectedNoteIndex === null}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>

          {/* Editor */}
          <TextField
            fullWidth
            multiline
            minRows={15}
            maxRows={30}
            placeholder="Type your note here..."
            variant="outlined"
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            sx={{
              fontSize: "1.2rem",
              "& .MuiInputBase-root": {
                alignItems: "start",
              },
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
