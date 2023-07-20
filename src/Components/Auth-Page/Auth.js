import React from "react";
// Styles Import
import './Assets/Styles/Login.css'
function Auth() {
    return (
        <section>
            <div class="login__background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
                <h3>Admin Login Here</h3>
                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
                <div class="social">
                    <div class="go"><i class="fab fa-google"></i>  Google</div>
                    <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </section>
    );
}

export default Auth;