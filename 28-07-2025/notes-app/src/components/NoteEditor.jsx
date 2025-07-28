import React from "react";
import {
  Box,
  IconButton,
  TextField,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteEditor = ({ currentNote, onChange, onSave, onDelete }) => {
  return (
    <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
      <Stack direction="row" spacing={2} sx={{ mb: 2, justifyContent: "flex-end" }}>
        <Tooltip title="Save">
          <IconButton color="primary" onClick={onSave}>
            <DoneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <TextField
        value={currentNote}
        onChange={(e) => onChange(e.target.value)}
        multiline
        fullWidth
        variant="outlined"
        placeholder="Type your note here..."
        sx={{ flexGrow: 1 }}
      />
    </Box>
  );
};

export default NoteEditor;
