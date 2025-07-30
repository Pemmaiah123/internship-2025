import React from 'react';

const NoteItem = ({ note, onSelectNote, onDeleteNote, isActive }) => {
    // Take the first line of content, truncate if too long, or default to 'New Note'
    const previewContent = note.content.split('\n')[0].substring(0, 30) || 'New Note';

    return (
        <div
            onClick={() => onSelectNote(note.id)}
            style={{
                backgroundColor: isActive ? '#e6f2ff' : 'white',
                border: isActive ? '2px solid #007bff' : '1px solid #eee',
                borderRadius: '5px',
                padding: '10px 15px',
                marginBottom: '10px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
        >
            <div style={{ flexGrow: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>{previewContent}</p>
                <span style={{ fontSize: '11px', color: '#888', display: 'block', marginTop: '2px' }}>
                    {note.date}
                </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
                {/* Edit icon (clicking the item itself also edits) */}
                <span
                    onClick={(e) => { e.stopPropagation(); onSelectNote(note.id); }} // Stop propagation to prevent parent click
                    style={{ cursor: 'pointer', fontSize: '16px', color: '#555' }}
                >
                    ✏️
                </span>
                {/* Delete icon */}
                <span
                    onClick={(e) => { e.stopPropagation(); onDeleteNote(note.id); }} // Stop propagation to prevent parent click
                    style={{ cursor: 'pointer', fontSize: '16px', color: '#555' }}
                >
                    🗑️
                </span>
            </div>
        </div>
    );
};

export default NoteItem;
