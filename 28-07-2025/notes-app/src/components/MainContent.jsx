import React, { useState, useEffect } from 'react';

// Added onDoneEditing prop
const MainContent = ({ noteContent, onUpdateNoteContent, isNoteActive, onDoneEditing }) => {
    const [currentContent, setCurrentContent] = useState(noteContent);

    useEffect(() => {
        setCurrentContent(noteContent);
    }, [noteContent, isNoteActive]);

    const handleChange = (e) => {
        const newContent = e.target.value;
        setCurrentContent(newContent);
        onUpdateNoteContent(newContent);
    };

    return (
        <main style={{
            flexGrow: 1,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        }}>
            <div style={{ // Re-added action buttons container
                position: 'absolute',
                top: '15px',
                right: '20px',
                display: 'flex',
                gap: '10px',
                zIndex: 10,
            }}>
                {isNoteActive && ( // Only show button if a note is active
                    <button
                        onClick={onDoneEditing} // Call the new handler
                        style={{
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px',
                        }}
                    >
                        Done
                    </button>
                )}
            </div>
            <textarea
                placeholder={isNoteActive ? "Start typing your note here..." : "Select a note or click 'New +' to begin."}
                value={currentContent}
                onChange={handleChange}
                disabled={!isNoteActive}
                style={{
                    flex: 1,
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'none',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.08)',
                    lineHeight: '1.6',
                    marginTop: '40px', // Add space for the button now
                    backgroundColor: isNoteActive ? 'white' : '#e9ecef',
                    cursor: isNoteActive ? 'text' : 'not-allowed'
                }}
            />
        </main>
    );
};

export default MainContent;
