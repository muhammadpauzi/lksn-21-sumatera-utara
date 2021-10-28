import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from '../api';
import { isLoggedIn } from '../utils';

export default function Login() {
    const [idCardNumber, setIdCardNumber] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_card_number: idCardNumber,
                    password
                })
            });
            const data = await res.json();
            localStorage.setItem('loggedIn', 1);
            localStorage.setItem('data', JSON.stringify(data));
            return window.location.reload();
        } catch (error) {
            alert("Cannot login, something went wrong.");
        }
    }

    return (
        <main>
            {isLoggedIn() && <Redirect to="/" />}
            <header className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">Vaccination Platform</h1>
                </div>
            </header>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="card card-default" onSubmit={handleSubmit}>
                            <div className="card-header">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">ID Card Number</div>
                                    <div className="col-8"><input type="number" required value={idCardNumber} onChange={e => setIdCardNumber(e.target.value)} className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">Password</div>
                                    <div className="col-8"><input type="text" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center mt-4">
                                    <div className="col-4"></div>
                                    <div className="col-8"><button className="btn btn-primary">Login</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
