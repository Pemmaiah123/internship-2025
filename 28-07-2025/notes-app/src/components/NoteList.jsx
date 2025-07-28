import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NoteList = ({ notes, onNewNote, onSelectNote }) => {
  return (
    <Box
      sx={{
        height: "100%",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onNewNote}
        sx={{ mb: 2 }}
      >
        New 
      </Button>

      <List sx={{ overflowY: "auto", flexGrow: 1 }}>
        {notes.map((note, index) => (
          <ListItem
            button
            key={index}
            onClick={() => onSelectNote(index)}
            sx={{
              mb: 1,
              borderRadius: 1,
              bgcolor: "#f5f5f5",
              "&:hover": { bgcolor: "#e0e0e0" },
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText
              primary={note.text.length > 30 ? `${note.text.slice(0, 30)}...` : note.text}
              secondary={
                <Typography variant="caption" color="text.secondary">
                  {note.time}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NoteList;
