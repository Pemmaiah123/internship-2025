import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MainContent = ({
  noteContent,
  onUpdateNoteContent,
  isNoteActive,
  onDoneEditing,
}) => {
  const [currentContent, setCurrentContent] = useState(noteContent);

  useEffect(() => {
    setCurrentContent(noteContent);
  }, [noteContent, isNoteActive]);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setCurrentContent(newContent);
    onUpdateNoteContent(newContent);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
        minWidth: 0,
      }}
    >
      <Box sx={{ position: "absolute", top: 8, right: 24, zIndex: 2 }}>
        {isNoteActive && (
          <Button
            onClick={onDoneEditing}
            variant="contained"
            color="success"
            size="small"
          >
            Done
          </Button>
        )}
      </Box>
      <TextField
        multiline
        minRows={16}
        placeholder={
          isNoteActive
            ? "Start typing your note here..."
            : "Select a note or click 'New +' to begin."
        }
        value={currentContent}
        onChange={handleChange}
        disabled={!isNoteActive}
        fullWidth
        sx={{
          mt: 5,
          background: isNoteActive ? "white" : "#e9ecef",
          borderRadius: 2,
          width: "100%",
          maxWidth: "100%",
        }}
        inputProps={{
          style: { width: "100%", maxWidth: "100%" },
        }}
      />
    </Box>
  );
};

export default MainContent;
