import React from 'react'
import s from './Form.module.css'

const Form = () => {

    const [data, setData] = React.useState([
        { title: 'email', value: '', valid: true },
        { title: 'password', value: '', valid: true },
    ])

    const validation = data => {
        if (data[0].value == '') {
            setData([{ title: 'email', value: data[0].value, valid: false }, data[1]])
            return false
        }
        if (data[1].value == '') {
            setData([data[0], { title: 'password', value: data[1].value, valid: false, }])
            return false
        }
        return true
    }

    const login = async data => {
        if (validation(data)) {
            fetch('', {
                method: 'POST',
                headers: { 'Content-type': 'aplication/json' },
                body: JSON.stringify(data)
            }).then((response) => {
                console.log(response)
            });
        }
    }

    return (
        <div className={s.form}>
            <p className={s.title}>Авторизация</p>

            <input type="text" className={s.input} placeholder="Email" style={{ border: (data[0].valid) ? "" : "3px solid red" }}
                value={data[0].value}
                onChange={event => setData([{ title: 'email', value: event.target.value, valid: true }, data[1]])}
            />

            <input type="text" className={s.input} placeholder="Пароль" style={{ border: (data[1].valid) ? "" : "3px solid red" }}
                value={data[1].value}
                onChange={event => setData([data[0], { title: 'password', value: event.target.value, valid: true }])}
            />

            <button type='submit' className={s.button} onClick={() => login(data)}>Войти</button>
        </div>
    )
}

export default Form