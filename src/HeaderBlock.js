import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderBlock() {

    return (
        <div>
            <div className='header-container'>
                <h2 className='title-text'>TITLE</h2>
                <div className='header-actions'>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} to='/'>Hello</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} to='/about'>About</NavLink>
                </div>

            </div>
        </div>
    )
}