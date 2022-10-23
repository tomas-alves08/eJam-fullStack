import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase-config'

import { useDispatch } from 'react-redux'
import { setUserToken } from '../actions'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const register = async (e) => {
    e.preventDefault()

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      dispatch(setUserToken(user.user.uid))
      alert(`user ${registerEmail} created successfully`)
      navigate('/')
    } catch (err) {
      alert('Register Error: ', err)
    }
  }

  const login = async (e) => {
    e.preventDefault()

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      dispatch(setUserToken(user.user.uid))
      navigate('/')
    } catch (err) {
      alert('Register Error: ', err)
    }
  }

  return (
    <div className="signup-container">
      <section className="auth">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              onChange={
                isLogin
                  ? (e) => setLoginEmail(e.target.value)
                  : (e) => setRegisterEmail(e.target.value)
              }
              required
            />
          </div>
          <div className="control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              onChange={
                isLogin
                  ? (e) => setLoginPassword(e.target.value)
                  : (e) => setRegisterPassword(e.target.value)
              }
              required
            />
          </div>
          <div className="actions">
            <button onClick={isLogin ? login : register}>
              {isLogin ? 'Login' : 'Create Account'}
            </button>

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
