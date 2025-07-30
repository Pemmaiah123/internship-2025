import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
    const [notes, setNotes] = useState([]);
    console.log(notes);
    
    const [activeNoteId, setActiveNoteId] = useState(null);
    console.log(activeNoteId);
    
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNewNote = () => {
        const newNote = {
            id: Date.now(),
            content: '',
            date: new Date().toLocaleString()
        };
        setNotes([newNote, ...notes]);
        setActiveNoteId(newNote.id);
        if (isMobileView) {
            setSidebarOpen(false);
        }
    };

    // Auto-save function as user types
    const handleUpdateNoteContent = (newContent) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === activeNoteId ? { ...note, content: newContent } : note
            )
        );
    };

    const handleDeleteNote = (idToDelete) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== idToDelete));
        if (activeNoteId === idToDelete) {
            setActiveNoteId(null);
        }
    };

    const getActiveNoteContent = () => {
        const activeNote = notes.find(note => note.id === activeNoteId);
        return activeNote ? activeNote.content : '';
    };

    // NEW FUNCTION: To handle clicking the "Done" button in MainContent
    const handleDoneEditing = () => {
        setActiveNoteId(null); // Deselect the currently active note
    };

    return (
        <div ref={appContainerRef} style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', overflow: 'hidden' ,}}>
            <Navbar
                onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                showHamburger={isMobileView}
            />
            <div style={{ display: 'flex', flexGrow: 1, position: 'relative' }}>
                <Sidebar
                    notes={notes}
                    onNewNote={handleNewNote}
                    onSelectNote={(id) => {
                        setActiveNoteId(id);
                        if (isMobileView) {
                            setSidebarOpen(false);
                        }
                    }}
                    activeNoteId={activeNoteId}
                    onDeleteNote={handleDeleteNote}
                    isOpen={sidebarOpen}
                    isMobileView={isMobileView}
                />
                <MainContent
                    noteContent={getActiveNoteContent()}
                    onUpdateNoteContent={handleUpdateNoteContent}
                    isNoteActive={activeNoteId !== null}
                    onDoneEditing={handleDoneEditing} // Pass the new done handler
                    style={{ flexGrow: 1, overflowY: 'auto' }}
                />
            </div>
        </div>
    );
};

export default App;
