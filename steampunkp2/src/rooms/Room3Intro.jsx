import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room3intro.png';
import '../styles/Room3Intro.scss';

export default function Room3Intro() {
    const navigate = useNavigate();

    return (
        <div className="room3intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-content">
                <p>
                    As you enter, a deep hum vibrates beneath your feet. Suspended in the air is an enormous orrery planets, moons, and astral rings turning in hypnotic rhythm, each orbit governed by brass gears and ancient logic. The light here shifts with the motion, casting shadows that crawl like time itself.
                    <br />
                    <br />  
                    Along the walls are fractured timelines, looping clocks, and glowing dials labeled with terms like "Catalyst," "Era," and "Event." Journals left open tell tales of experiments that altered time's flow some succeeded, others... erased the days that followed.
                    <br />
                    <br />  
                    To move forward, you must align the orrery to match a historic celestial event and adjust the vault's dials accordingly. The wrong combination may reset everything your progress lost to temporal drift.
                    <br />
                    <br />  
                    "Time is not a line it is a spiral. Align its center, and the path will unwind."

                </p>
                <button onClick={() => navigate('/room3')}>Enter The Orrery</button>
            </div>
        </div>
    );
}
