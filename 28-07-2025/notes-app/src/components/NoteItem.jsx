import React from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NoteItem = ({ note, onSelectNote, onDeleteNote, isActive }) => {
  const previewContent = note.content.split('\n')[0].substring(0, 30) || "New Note";
  return (
    <Paper
      elevation={isActive ? 4 : 1}
      sx={{
        mb: 1,
        bgcolor: isActive ? "#e6f2ff" : "white",
        border: isActive ? "2px solid #1976d2" : "1px solid #eee",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ListItem
        selected={isActive}
        onClick={() => onSelectNote(note.id)}
        sx={{ cursor: "pointer", p: 1 }}
        secondaryAction={
          <Box>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={(e) => {
                e.stopPropagation();
                onSelectNote(note.id);
              }}
              size="small"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteNote(note.id);
              }}
              size="small"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        }
      >
        <ListItemText
          primary={
            <Typography fontWeight="bold" fontSize={14} noWrap>
              {previewContent}
            </Typography>
          }
          secondary={
            <Typography fontSize={11} color="#888">
              {note.date}
            </Typography>
          }
        />
      </ListItem>
    </Paper>
  );
};

export default NoteItem;
