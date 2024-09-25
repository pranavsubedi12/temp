import React, { useState } from 'react'

export default function AuthForm() {
    const[isLogin, setIsLogin]= useState(false);
  return (
    <form>
    <div className='container'>
         <div className='form-container'>
            <div className='form-toggle'>
                <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>

            </div>
            {isLogin ? <>
            <div className='form'>
                <h1>Login</h1>
                <input type='tel' placeholder='Phone Number' required pattern='[0-9]{10}'/>
                <input type='email' placeholder='Email' required /> 
               
                <input type='password' placeholder='Password' required />
                <a href='#'onClick={() => setIsLogin(false)}>Forgot Password?</a>
                <button type='submit'>Login</button>
                <p>Don't have an account?<a href='#'onClick={() => setIsLogin(false)}> Signup</a></p>

            </div>
            
            </> : <>
            <div className='form'>
            <h1>SignUp</h1>
                <input type='name' placeholder='First Name' pattern='[a-z/A-Z]'required/>
                <input type='name' placeholder='Last Name' pattern='[a-z/A-Z]' required/>
                <input type='tel' placeholder='Phone Number' required pattern='[0-9]{10}'/>
                <input type='email' placeholder='Email' required />
                <input type='password' placeholder='Password' required />
                <input type='password' placeholder='Confirm Password' required />
                <button type='submit'>SignUp</button>
                </div>

            
            </>}

         </div>

      
    </div>
    </form>
  )
}
 