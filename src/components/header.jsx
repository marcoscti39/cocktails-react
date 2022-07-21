import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/header.css'

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <img src="/logo.svg" alt="logo" />
                
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li> <Link to="/">home</Link> </li>
                        <li> <Link to="/about">about</Link></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
