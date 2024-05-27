import './components/NAVBAR/navbar_math.css'
import './components/HOME/home1.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NAVBAR/navbar_math.jsx';
import Home1 from './components/HOME/home1.jsx';
export default function Ap() {
    const blankSpace = {
        marginTop: '1000px'
    }
    return (
        <div >
            <NavBar />
            <Home1 />

        </div>
    );
}