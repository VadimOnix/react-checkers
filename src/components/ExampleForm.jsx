import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';

export default function ExampleForm() {
  const { isAuth, error, login } = useAuth();

  const [formData, setFormData] = useState({
    pass: '',
    email: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    login(formData.email, formData.pass)
  }

  const inputChangeHandler = e => {
    const newState = {...formData}
    newState[e.target.name] = e.target.value

    setFormData(newState)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h4>Моя первая форма</h4>

        <p>Состояние авторизации: {isAuth ? 'АВТОРИЗОВАН' : 'НЕ АВТОРИЗОВАН'}</p>

        <div>
          <label htmlFor="#email">
            <input
              type="text"
              id="#email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={inputChangeHandler}
            />
          </label>
        </div>

        <br />

        <div>
          <label htmlFor="#pass">
            <input
              type="password"
              name="pass"
              id="#pass"
              placeholder="пароль"
              value={formData.fio}
              onChange={inputChangeHandler}
            />
          </label>
        </div>

        <br />

        <button type="submit">Отправить</button>

        {!!error && <p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  );
}
