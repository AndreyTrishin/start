/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCookies } from "react-cookie";

export default function HeaderBlock() {
    const [cookies, setCookie, removeCookie] = useCookies(['name', 'email', 'roleName']);


    var exit = () => {
        if(cookies.name) {

            removeCookie('name');
            removeCookie('email');
            removeCookie('roleName');
        }
    }
    return (
        <div>
            <div className='header-container'>
                <h2 className='title-text'>TITLE</h2>
                <div className='header-actions'>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} to='/'>Hello</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} to='/addCource'>Добавить курс</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "action-button" : "")} onClick={exit} to='/auth'>{cookies.email ? cookies.name + ' | Выйти' : 'Регистрация'}</NavLink>
                </div>

            </div>
        </div>
    )
}