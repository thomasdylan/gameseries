import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>GameSeries</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Create Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default Navbar;
