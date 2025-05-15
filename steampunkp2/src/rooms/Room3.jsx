import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room3.png';
import '../styles/Room3.scss';

const eventOptions = ['Collapse of Steam', 'Time Rift Opening', 'The Engine Unveiling'];
const eraOptions = ['Industrial Age', 'The Awakening', 'The Collapse'];
const catalystOptions = ['Sand Reversal', 'Stellar Stasis', 'Clockwork Shatter'];

const dialAnswers = {
    event: 2,
    era: 1,
    catalyst: 1
};

const dialImages = import.meta.glob('../assets/game-elements/orrery/dial_*.png', {
    eager: true,
    import: 'default'
});

export default function Room3() {
    const navigate = useNavigate();

    const [dialIndexes, setDialIndexes] = useState({ event: 0, era: 0, catalyst: 0 });
    const [error, setError] = useState(false);
    const [showPuzzle, setShowPuzzle] = useState(false);
    const [showProjection, setShowProjection] = useState(false);
    const [visibleClues, setVisibleClues] = useState({
        clue1: false,
        clue2: false,
        clue3: false
    });

    const toggleClue = (key) => {
        setVisibleClues((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleDialClick = (key, options) => {
        setDialIndexes((prev) => ({
            ...prev,
            [key]: (prev[key] + 1) % options.length
        }));
        setError(false);
    };

    const handleSubmit = () => {
        const dialsCorrect =
            dialIndexes.event === dialAnswers.event &&
            dialIndexes.era === dialAnswers.era &&
            dialIndexes.catalyst === dialAnswers.catalyst;

        if (dialsCorrect) {
            setShowProjection(true);
            setTimeout(() => navigate('/room4intro'), 2000);
        } else {
            setError(true);
        }
    };

    return (
        <div className="room3" style={{ backgroundImage: `url(${background})` }}>
            <h2>The Orrery Chamber</h2>

            {/* Clue Nodes & Reveal */}
            <div className="hint-node" style={{ top: '42%', left: '24%' }} onClick={() => toggleClue('clue1')} />
            {visibleClues.clue1 && (
                <div className="clue" style={{ top: '46%', left: '24%' }}>
                    Reveiling the engine marked the beginning of his calibration experiments.
                </div>
            )}

            <div className="hint-node" style={{ top: '56%', left: '68%' }} onClick={() => toggleClue('clue2')} />
            {visibleClues.clue2 && (
                <div className="clue" style={{ top: '66%', left: '70%' }}>
                    His awakeness said it echoed his consciousness like no other era.
                </div>
            )}

            <div className="hint-node" style={{ top: '80%', left: '30%' }} onClick={() => toggleClue('clue3')} />
            {visibleClues.clue3 && (
                <div className="clue" style={{ top: '80%', left: '12%' }}>
                    When the stars stood still the Orrery became stable long enough for a temporal jump.
                </div>
            )}

            {!showPuzzle && (
                <div className="puzzle-trigger" onClick={() => setShowPuzzle(true)}>
                    🌀 Initialize Orrery Console
                </div>
            )}

            {showPuzzle && (
                <div className="orrery-overlay">
                    <div className="orrery-container">
                        <h3>Realign the Chrono Orrery</h3>
                        <p className="puzzle-subtext">
                            Use the Professor’s notes to restore the Orrery’s settings. Only the correct combination will reveal the next jump node.
                        </p>
                    </div>

                    <div className="dials">
                        <div className="dial-group">
                            <label>Event Dial</label>
                            <div className="dial" onClick={() => handleDialClick('event', eventOptions)}>
                                <img src={dialImages['../assets/game-elements/orrery/dial_event.png']} alt="Event Dial" />
                                <p>{eventOptions[dialIndexes.event]}</p>
                            </div>
                        </div>

                        <div className="dial-group">
                            <label>Era Dial</label>
                            <div className="dial" onClick={() => handleDialClick('era', eraOptions)}>
                                <img src={dialImages['../assets/game-elements/orrery/dial_era.png']} alt="Era Dial" />
                                <p>{eraOptions[dialIndexes.era]}</p>
                            </div>
                        </div>

                        <div className="dial-group">
                            <label>Catalyst Dial</label>
                            <div className="dial" onClick={() => handleDialClick('catalyst', catalystOptions)}>
                                <img src={dialImages['../assets/game-elements/orrery/dial_catalyst.png']} alt="Catalyst Dial" />
                                <p>{catalystOptions[dialIndexes.catalyst]}</p>
                            </div>
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="submit-button" onClick={handleSubmit}>
                            Confirm Chrono Alignment
                        </button>
                        <button className="close-button" onClick={() => setShowPuzzle(false)}>
                            ❌ Close Console
                        </button>
                    </div>
                </div>
            )}

            {error && <p className="error">❌ Orrery misaligned. Review the Professor’s notes.</p>}

            {showProjection && (
                <div className="projection">
                    ✨ The Orrery pulses with temporal light. A starfield map appears, revealing a hidden sanctuary in the next sector...
                </div>
            )}
        </div>
    );
}
