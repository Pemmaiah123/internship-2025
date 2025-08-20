import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ task, toggleComplete, deleteTask }) {
  const priorityColors = {
    red: "#f44336",
    yellow: "#ffeb3b",
    green: "#4caf50",
  };

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 1.5,
        borderLeft: `6px solid ${priorityColors[task.priority]}`,
        borderRadius: 2,
        p: 1,
      }}
    >
      <ListItem
        secondaryAction={
          <IconButton edge="end" color="error" onClick={() => deleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <Checkbox
          edge="start"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <ListItemText
          primary={
            <Typography
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.6 : 1,
              }}
            >
              {task.text}
            </Typography>
          }
          secondary={
            <Box>
              <Typography variant="caption" color="text.secondary">
                Created: {task.createdAt}
              </Typography>
              {task.completed && (
                <Typography
                  variant="caption"
                  color="success.main"
                  display="block"
                >
                   Completed at: {task.completedAt}
                </Typography>
              )}
            </Box>
          }
        />
      </ListItem>
    </Paper>
  );
}

export default TodoItem;
