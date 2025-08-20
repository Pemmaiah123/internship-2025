import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      priority,
      createdAt: new Date().toLocaleString(),
      completed: false,
      completedAt: null,
    };

    addTask(newTask);
    setTask("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Enter task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="High">🔴 High</MenuItem>
              <MenuItem value="Medium">🟡 Medium</MenuItem>
              <MenuItem value="Low">🟢 Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TodoInput;
