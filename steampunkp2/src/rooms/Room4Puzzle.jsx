import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room4Puzzle.scss';

import echo_cylinder_a from '../assets/game-elements/cylinder/echo_cylinder_a.png';
import echo_cylinder_b from '../assets/game-elements/cylinder/echo_cylinder_b.png';
import echo_cylinder_c from '../assets/game-elements/cylinder/echo_cylinder_c.png';
import echo_cylinder_d from '../assets/game-elements/cylinder/echo_cylinder_d.png';
import echo_cylinder_e from '../assets/game-elements/cylinder/echo_cylinder_e.png';

const cylinderImages = {
    a: echo_cylinder_a,
    b: echo_cylinder_b,
    c: echo_cylinder_c,
    d: echo_cylinder_d,
    e: echo_cylinder_e,
};

const correctOrder = ['c', 'b', 'e', 'a', 'd'];

export default function Room4Puzzle() {
    const navigate = useNavigate();

    const [selectedOrder, setSelectedOrder] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSelect = (id) => {
        if (selectedOrder.includes(id) || success) return;
        setSelectedOrder([...selectedOrder, id]);
        setError(false);
    };

    const handleSubmit = () => {
        if (selectedOrder.length !== 5) {
            setError(true);
            return;
        }
        if (JSON.stringify(selectedOrder) === JSON.stringify(correctOrder)) {
            setSuccess(true);
            setTimeout(() => {
                window.location.href = 'https://steampunkp3.netlify.app/';
            }, 2000);
        } else {
            setError(true);
            setSelectedOrder([]);
        }
    };

    const resetPuzzle = () => {
        setSelectedOrder([]);
        setError(false);
        setSuccess(false);
    };

    return (
        <div className="room4-puzzle">
            <h2>Echo Cylinder Interface</h2>
            <p>Select 5 cylinders in the correct order based on clues from Room 4.</p>

            <div className="cylinder-grid">
                {Object.keys(cylinderImages).map((id) => (
                    <img
                        key={id}
                        src={cylinderImages[id]}
                        alt={`Cylinder ${id}`}
                        className={`cylinder ${selectedOrder.includes(id) ? 'selected' : ''}`}
                        onClick={() => handleSelect(id)}
                    />
                ))}
            </div>

            <div className="buttons">
                <button onClick={handleSubmit} disabled={success}>Submit Sequence</button>
                <button onClick={resetPuzzle}>Reset</button>
                <button onClick={() => navigate('/room4')}>Review Clues</button>
            </div>

            {error && <p className="error">❌ Incorrect or incomplete sequence. Try again.</p>}
            {success && <p className="success">✅ Success! The cylinders hum in harmony and a hidden panel opens.</p>}
        </div>
    );
}
