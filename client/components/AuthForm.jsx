import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase-config'
import { useDispatch } from 'react-redux'
import { setUserToken } from '../actions'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
    console.log(isLogin)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [userInfo, setUserInfo] = useState({})

  console.log('USER TOKEN: ', userInfo?.accessToken)

  const token = userInfo?.accessToken ? userInfo.accessToken : ''

  console.log('USER TOKEN: ', token)

  onAuthStateChanged(auth, (currentUser) => {
    setUserInfo(currentUser)
  })

  const register = async (e) => {
    e.preventDefault()

    console.log('Loged in? ', isLogin)
    console.log('Auth: ', auth)
    console.log('Register Email: ', registerEmail)
    console.log('register password: ', registerPassword)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log('USER INFO: ', userInfo)
      dispatch(setUserToken(user.user.accessToken))
      alert(`user ${registerEmail} created successfully`)
      navigate('/')
    } catch (err) {
      alert('Register Error: ', err)
    }
  }

  const login = async (e) => {
    e.preventDefault()

    console.log('Loged in? ', isLogin)
    console.log('Auth: ', auth)
    console.log('Register Email: ', registerEmail)
    console.log('register password: ', registerPassword)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log('USER INFO: ', user)
      console.log('TOKEN INFO: ', user.user.accessToken)
      dispatch(setUserToken(user.user.accessToken))
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
              //   value={isLogin ? loginPassword || '' : registerPassword || ''}
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
            {/* <button onClick={logout}>Log Out</button> */}
            <h1>{userInfo?.email}</h1>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AuthForm
