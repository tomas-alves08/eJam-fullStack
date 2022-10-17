import React, { useState } from 'react'
// import { container } from 'webpack'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  const signup = async () => {}

  const signin = async () => {}

  const logout = async () => {}

  return (
    <div className="signup-container">
      <section className="auth">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="control">
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="actions">
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AuthForm
