import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Snackbar, Alert } from "@mui/material";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks"); // optional: clear when empty
    }
  }, [tasks]);

 
  const addTask = (task) => {
    setTasks([...tasks, task]);
    setSnackbar({ open: true, message: "📝 Task Added!", type: "success" });
  };

  
  const completeTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);

    const hasHigherPriorityPending =
      (taskToComplete.priority === "Low" &&
        tasks.some((t) => !t.completed && t.priority !== "Low")) ||
      (taskToComplete.priority === "Medium" &&
        tasks.some((t) => !t.completed && t.priority === "High"));

    if (hasHigherPriorityPending) {
      setSnackbar({
        open: true,
        message: `⚠️ Complete higher priority tasks first!`,
        type: "warning",
      });
      return;
    }

    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: true, completedAt: new Date().toLocaleString() }
        : task
    );
    setTasks(updated);
    setSnackbar({ open: true, message: "✅ Task Completed!", type: "success" });
  };

  
  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    setSnackbar({ open: true, message: "🗑️ Task Deleted!", type: "info" });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      {/* Heading */}
      <Paper sx={{ p: 2, mb: 3, textAlign: "center" }} elevation={3}>
        <Typography variant="h4" fontWeight="bold">
          MindBoard - ToDo List
        </Typography>
      </Paper>

      {/* Input */}
      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <TodoInput addTask={addTask} tasks={tasks} />
      </Paper>

      {/* Task List */}
      <Paper sx={{ p: 2 }} elevation={3}>
        <TodoList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2500}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
