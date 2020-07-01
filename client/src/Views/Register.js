import React from 'react';


const Register = () => {
    return (
        <div className='register'>
            <form className='register-form'>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="registerPassword" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Register;
