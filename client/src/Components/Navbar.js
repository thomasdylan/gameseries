import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li className='nav-bar-left'>
                            <Link to='/'>GameSeries</Link>
                        </li>
                        <li className='nav-bar-right'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='nav-bar-right'>
                            <Link to='/register'>Create Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default Navbar;
