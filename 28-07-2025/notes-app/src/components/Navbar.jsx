import React from 'react';

const Navbar = ({ onToggleSidebar, showHamburger }) => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#333',
            color: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 100 // THIS wwill ensure navbar is above sidebar on mobile
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {showHamburger && ( // Only show hamburger if showHamburger prop is true
                    <button
                        onClick={onToggleSidebar}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            marginRight: '15px',
                        }}
                    >
                        ☰
                    </button>
                )}
                <span   style={{ fontSize: '20px', fontWeight: 'bold', }}>Notes App</span>
            </div>
        </nav>
    );
};

export default Navbar;
