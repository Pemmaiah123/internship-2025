import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import NoteItem from "./NoteItem";

const Sidebar = ({
  notes,
  onNewNote,
  onSelectNote,
  activeNoteId,
  onDeleteNote,
  isOpen,
  isMobileView,
  onCloseSidebar,
  drawerWidth,
}) => {
  const content = (
    <Box
      sx={{
        p: 2,
        height: "100vh",
        minWidth: drawerWidth,
        bgcolor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* Spacer for fixed AppBar */}
      <Toolbar sx={{ p: 0, minHeight: { xs: 56, sm: 64 } }} />
      <Button
        variant="contained"
        fullWidth
        onClick={onNewNote}
        sx={{ mb: 2, flexShrink: 0 }}
      >
        New +
      </Button>
      {/* Static notes list - no internal scroll */}
      <Box sx={{ flex: 1 /* Remove overflowY: auto for static list*/ }}>
        {notes.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 4, fontStyle: "italic" }}
          >
            No notes yet. Click 'New +' to create one.
          </Typography>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onSelectNote={onSelectNote}
              onDeleteNote={onDeleteNote}
              isActive={note.id === activeNoteId}
            />
          ))
        )}
      </Box>
    </Box>
  );

  return isMobileView ? (
    <Drawer
      open={isOpen}
      onClose={onCloseSidebar}
      variant="temporary"
      anchor="left"
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          maxWidth: "75vw",
          height: "100vh",
          boxSizing: "border-box",
          overflowX: "hidden",
          p: 0,
        },
      }}
    >
      {content}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      open
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          position: "relative",
          width: drawerWidth,
          height: "100vh",
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
