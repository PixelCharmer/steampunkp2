import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room4intro.png';
import '../styles/Room4Intro.scss';

export default function Room4Intro() {
    const navigate = useNavigate();

    return (
        <div className="room4intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-content">
                <p>
                    The silence here is unnerving. The corridor opens into a soundproof vault, once used to preserve audio memories. Dozens of cylindrical echo cylinders line the chamber, most cracked or unreadable. A wall of speaker horns stare like blind eyes into the room, and flickering lights indicate residual memory pulses. In the center stands the Echo Archive Console, flickering with signs of residual energy. A final message etched in brass reads:
                    <br />
                    <br />  
                    "If you're reading this... the clockwork betrayed me. Only echoes remain."
                    <br />
                    <br />  
                    Your task: decode a sequence of memory echoes to reassemble the Professor's last warning. The playback must be triggered in the correct order using clues from past rooms. Some echoes lie - only one timeline is true.
                    <br />
                    <br />  
                    "Not all voices belong to the living. Listen closely. Truth lingers in distortion."
                </p>
                <button onClick={() => navigate('/room4')}>Enter The Audio Studio</button>
            </div>
        </div>
    );
}