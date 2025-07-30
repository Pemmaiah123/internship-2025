import React from 'react';
import NoteItem from './NoteItem';

const Sidebar = ({ notes, onNewNote, onSelectNote, activeNoteId, onDeleteNote, isOpen, isMobileView }) => {
    return (
        <aside style={{
            width: isMobileView ? '75%' : '250px', // 75% width on mobile, fixed 250px on desktop
            backgroundColor: '#f7f7f7',
            borderRight: '1px solid #ddd',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            transition: 'transform 0.3s ease-in-out', // Smooth transition for sliding
            zIndex: 99, // Below Navbar
            boxShadow: '2px 0 5px rgba(0,0,0,0.2)', // Always show shadow for visual separation

            // Mobile specific positioning
            position: isMobileView ? 'absolute' : 'relative',
            height: isMobileView ? '100%' : 'auto',
            top: 0,
            left: 0,
            transform: isMobileView && !isOpen ? 'translateX(-100%)' : 'translateX(0)', // Slide out/in
        }}>
            <button
                onClick={onNewNote}
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            >
                New +
            </button>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {notes.length === 0 ? (
                    <p style={{ color: '#666', fontStyle: 'italic', textAlign: 'center', marginTop: '20px' }}>
                        No notes yet. Click 'New +' to create one.
                    </p>
                ) : (
                    notes.map(note => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onSelectNote={onSelectNote}
                            onDeleteNote={onDeleteNote}
                            isActive={note.id === activeNoteId}
                        />
                    ))
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
