/* eslint-disable no-unused-vars */
import React from 'react'
import { RegisterUser, Auth } from '../APIRequest'
import '../App.css'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function AuthPage(props) {
  const [cookies, setCookie] = useCookies(['name', 'email', 'roleName']);
  const navigate = useNavigate();

  var name = '';
  var password = '';
  var eMail = '';
  var authPassword = '';
  var login = '';

  var onChangeHandlerName = (e) => {
    name = e.currentTarget.value;
  }
  var onChangeHandlerPassword = (e) => {
    password = e.currentTarget.value;
  }
  var onChangeHandlerEMail = (e) => {
    eMail = e.currentTarget.value;
  }
  var onChangeHandlerAuthPassword = (e) => {
    authPassword = e.currentTarget.value;
  }
  var onChangeHandlerLogin = (e) => {
    login = e.currentTarget.value;
  }
  var register = () => {
    var user = RegisterUser(name, password, eMail);
    console.log(user);
  }
  var auth = () => {
    Auth(login, authPassword).then((data) => {
      if (data) {
        setCookie('name', data.name);
        setCookie('email', data.email);
        setCookie('roleName', data.roleName);
        navigate('/');
      } else {
        alert('Неверный логин или пароль');
      }
    });
  }

  return (
    <div className='auth-reg-body'>
      <div>
        <h3>Имя пользователя</h3>
        <input type='text' onChange={onChangeHandlerName} />
        <h3>Пароль</h3>
        <input type='password' onChange={onChangeHandlerPassword} />
        <h3>EMail</h3>
        <input type='text' onChange={onChangeHandlerEMail} />
        <br />
        <button onClick={register}>Регистрация</button>
      </div>

      <div>
        <h3>Логин</h3>
        <input type='text' onChange={onChangeHandlerLogin} />
        <h3>Пароль</h3>
        <input type='password' onChange={onChangeHandlerAuthPassword} />
        <br />
        <button onClick={auth}>Авторизация</button>
      </div>

    </div>
  )
}
