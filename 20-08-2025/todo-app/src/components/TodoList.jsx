import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TodoList({ tasks, completeTask, deleteTask }) {
  // Decide chip color based on priority
  const getColor = (priority, completed) => {
    if (completed) return "default"; // grey out if task is done
    if (priority === "High") return "error";
    if (priority === "Medium") return "warning";
    return "success";
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            mb: 1,
            bgcolor: task.completed ? "#f9f9f9" : "white",
          }}
          secondaryAction={
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip
                label={task.priority}
                color={getColor(task.priority, task.completed)}
                size="small"
              />
              {!task.completed && (
                <IconButton
                  edge="end"
                  color="success"
                  onClick={() => completeTask(task.id)}
                >
                  <CheckCircleIcon />
                </IconButton>
              )}
              <IconButton
                edge="end"
                color="error"
                onClick={() => deleteTask(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          }
        >
          <ListItemText
            primary={task.text}
            secondary={
              task.completed
                ? `✅ Completed at: ${task.completedAt}`
                : `🕒 Created at: ${task.createdAt}`
            }
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
