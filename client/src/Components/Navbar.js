import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand">GameSeries</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/register' className="nav-link">Sign up</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
