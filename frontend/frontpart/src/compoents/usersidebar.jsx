import React from 'react';
import { Link } from 'react-router-dom';
import './usersidebar.css'; // Assuming you have a separate CSS file for styling

function UserSidebar() {
    return (
        <div className="sidebar">
            <h2><Link to="/home" className='text-white'>Dash Board</Link></h2>
            <ul>
                <li>
                    <Link to="/home" className='text-white'>Home</Link>
                </li>
            
                <li>
                    <Link to="/take-exam" className='text-white'>Take Exam</Link>
                </li>
                <li>
                    <Link to="/results" className='text-white'>My Results</Link>
                </li>
                <li>
                    <a to="/profile" className='text-white'>Profile Settings</a>
                </li>
                <li>
                    <a to="/help" className='text-white'>Help and Support</a>
                </li>
            </ul>
        </div>
    );
}



export default UserSidebar;
