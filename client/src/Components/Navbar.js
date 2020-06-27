import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" to='/'>GameSeries</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to='/register'>Create Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default Navbar;
