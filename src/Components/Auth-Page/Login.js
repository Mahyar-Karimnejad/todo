import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';

// Styles Import
import './Assets/Styles/Login.css'
import './Assets/Styles/Login-Responsive.css'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        LoginToken();
    }, [])
    function LoginToken() {
        if (localStorage.getItem('token') === null) {

        }
        else (
            navigate('/')

        )
    }

    const Login = async (props) => {
        if (email === "", password === "") {
            // setEmpty(true)
            alert("khli")
        } else {
            let body = {
                email: email,
                password: password
            };
            let response = await fetch("https://api.escuelajs.co/api/v1/auth/login/",
                {
                    headers: { 'Content-type': 'application/json' },
                    method: 'POST',
                    body: JSON.stringify(body)
                },
                // setLoading(true)
            )
            if (response.ok) {
                let data = await response.json();
                localStorage.setItem("token", data.access);
                navigate('/todo');
                console.log(data);
            }
            if (response.status === 401) {
                let data = await response.json();
                console.log(data);
                // setWrong(true)
            }
            // setLoading(false)
        }
    }
    return (
        <section>
            <div class="login__background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <div className="auth__form">
                <h3>برنامه‌ریزی هوشمند، زندگی پرانرژی!</h3>
                <label className="auth__label" for="username">Username</label>
                <input className="auth__input" type="text" placeholder="Email or Phone" id="username" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label className="auth__label" for="password">Password</label>
                <input className="auth__input" type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button className="auth__button" onClick={Login} style={{ color: "black" }}>وارد شوید</button>
                <div className="sighn-up-page">
                    <a href="/register">ثبت نام کنید.</a>
                </div>
                <div class="social">
                    <div class="go"><i class="fab fa-google"></i>  Google</div>
                    <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                </div>
            </div>
        </section>
    );
}

export default Login;