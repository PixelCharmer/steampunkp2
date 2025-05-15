import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room4.png';
import '../styles/Room4.scss';

export default function Room4() {
    const navigate = useNavigate();
    const [visibleClue, setVisibleClue] = useState(null); // Track which clue is shown

    const toggleClue = (id) => {
        setVisibleClue(prev => (prev === id ? null : id)); // Toggle visibility
    };

    return (
        <div className="room4" style={{ backgroundImage: `url(${background})` }}>
            <h2>The Professor's Memory Archive</h2>
            <p>Explore the chamber for hidden messages left by the Professor.</p>

            <div
                className={`clue-container ${visibleClue === 'clue1' ? 'visible' : ''}`}
                style={{ top: '40%', left: '25%' }}
                onClick={() => toggleClue('clue1')}
            >
                <div className="clue-node" />
                <span className="clue-text">Cylinder C was always the first to resonate—its frequency aligned the entire archive</span>
            </div>

            <div
                className={`clue-container ${visibleClue === 'clue2' ? 'visible' : ''}`}
                style={{ top: '30%', left: '65%' }}
                onClick={() => toggleClue('clue2')}
            >
                <div className="clue-node" />
                <span className="clue-text">Cylinder B answered C’s call once—its echo chamber still hums beneath the observatory dome</span>
            </div>

            <div
                className={`clue-container ${visibleClue === 'clue3' ? 'visible' : ''}`}
                style={{ top: '67%', left: '12%' }}
                onClick={() => toggleClue('clue3')}
            >
                <div className="clue-node" />
                <span className="clue-text">Cylinder D has such a low tone that you know the melody is over</span>
            </div>

            <div
                className={`clue-container ${visibleClue === 'clue4' ? 'visible' : ''}`}
                style={{ top: '82%', left: '64%' }}
                onClick={() => toggleClue('clue4')}
            >
                <div className="clue-node" />
                <span className="clue-text">Cylinder E resonates with ancient frequency notes.</span>
            </div>

            <div className="buttons">
                <button onClick={() => navigate('/room4puzzle')}>Go to Puzzle</button>
            </div>
        </div>
    );
}
