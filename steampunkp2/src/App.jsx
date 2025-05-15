import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room3Intro from './rooms/Room3Intro';
import Room3 from './rooms/Room3';
import Room4Intro from './rooms/Room4Intro';
import Room4 from './rooms/Room4';
import Room4Puzzle from './rooms/Room4Puzzle';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Room3Intro />} />
                <Route path="/room3" element={<Room3 />} />
                <Route path="/room4intro" element={<Room4Intro />} />
                <Route path="/room4" element={<Room4 />} />
                <Route path="/room4puzzle" element={<Room4Puzzle />} />
            </Routes>
        </Router>
    );
}
