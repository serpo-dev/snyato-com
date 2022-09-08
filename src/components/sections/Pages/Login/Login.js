import React from 'react';
import stylesheet from './Login.module.css';


const Login = (props) => {


    return (
        <>
            <h1>Please login</h1>
            <form>
                <div className={stylesheet.dataInput}>
                    <input placeholder='enter email here...' />
                    <input placeholder='enter password here...' />
                </div>
                <div>
                    <input type='checkbox' /> remember me
                </div>
            </form>
        </>
    )
}

export default Login;