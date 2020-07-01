import React from 'react';

const Login = () => {
    return (
        <div className='login'>
            <form className='login-form'>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="loginPassword" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
