import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const drawerWidth = 250;

const App = () => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const appContainerRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (appContainerRef.current) {
        setIsMobileView(appContainerRef.current.offsetWidth < 768);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      content: "",
      date: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
    if (isMobileView) setSidebarOpen(false);
  };

  const handleUpdateNoteContent = (newContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNoteId ? { ...note, content: newContent } : note
      )
    );
  };

  const handleDeleteNote = (idToDelete) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
    if (activeNoteId === idToDelete) setActiveNoteId(null);
  };

  const getActiveNoteContent = () => {
    const activeNote = notes.find((note) => note.id === activeNoteId);
    return activeNote ? activeNote.content : "";
  };

  const handleDoneEditing = () => setActiveNoteId(null);

  return (
    <Box
      ref={appContainerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        bgcolor: "#f0f2f5",
        overflowX: "hidden", // prevent global horizontal scroll
      }}
    >
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        showHamburger={isMobileView}
      />
      {/* Toolbar spacer to offset fixed AppBar */}
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0, // help flex children shrink properly
          overflowX: "hidden",
        }}
      >
        <Sidebar
          notes={notes}
          onNewNote={handleNewNote}
          onSelectNote={(id) => {
            setActiveNoteId(id);
            if (isMobileView) setSidebarOpen(false);
          }}
          activeNoteId={activeNoteId}
          onDeleteNote={handleDeleteNote}
          isOpen={sidebarOpen}
          isMobileView={isMobileView}
          onCloseSidebar={() => setSidebarOpen(false)}
          drawerWidth={drawerWidth}
        />
        <MainContent
          noteContent={getActiveNoteContent()}
          onUpdateNoteContent={handleUpdateNoteContent}
          isNoteActive={activeNoteId !== null}
          onDoneEditing={handleDoneEditing}
        />
      </Box>
    </Box>
  );
};

export default App;
