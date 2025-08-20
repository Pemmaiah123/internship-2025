import React, { useState, useMemo } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  List,
  ListItem,
} from "@mui/material";

const items = [
  { company: "Neon", shareValue: "120" },
  { company: "Radon", shareValue: "450" },
  { company: "Krypton", shareValue: "320" },
  { company: "Uranus", shareValue: "780" },
  { company: "Koramangala", shareValue: "95" },
  { company: "Indiranagar", shareValue: "210" },
  { company: "Microsoft", shareValue: "999" },
];

function App() {
  const [searchItem, setSearchItem] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchItem) return items;

    const word = searchItem.toLowerCase();

    const matches = items.filter(
      (item) =>
        item.company.toLowerCase().includes(word) ||
        item.shareValue.toLowerCase().includes(word)
    );

    const nonMatches = items.filter(
      (item) =>
        !item.company.toLowerCase().includes(word) &&
        !item.shareValue.toLowerCase().includes(word)
    );

    return [...matches, ...nonMatches];
  }, [searchItem]);

  const highlightText = (text) => {
    if (!searchItem) return text;

    const lowerText = text.toLowerCase();
    const lowerItem = searchItem.toLowerCase();
    const startIndex = lowerText.indexOf(lowerItem);

    if (startIndex === -1) return text;

    const endIndex = startIndex + searchItem.length;
    return (
      <>
        {text.substring(0, startIndex)}
        <span style={{ backgroundColor: "#ffeb3b", fontWeight: "bold" }}>
          {text.substring(startIndex, endIndex)}
        </span>
        {text.substring(endIndex)}
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "#f5f7fa",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
          QuickFind
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by company or share value..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography variant="h6" gutterBottom fontWeight="600" color="black">
          Company List
        </Typography>

        <List
          sx={{
            maxHeight: 250,
            overflowY: "auto",
            textAlign: "left",
            bgcolor: "#fafafa",
            borderRadius: 2,
            p: 1,
          }}
        >
          {filteredItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                borderRadius: 1,
                py: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                {highlightText(item.company)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {highlightText(item.shareValue)}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default App;
