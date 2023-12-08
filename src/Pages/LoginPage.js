import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import '../styles/LoginPage.css'
import {auth} from '../firebaseConfig'

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const signIn = e => {
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      //redirect to home page
      navigate('/')
    })
    .catch(e => alert(e.message))
  }

  const register = e => {
    e.preventDefault()

    auth
    .createUserWithEmailAndPassword(email,password)
    .then(auth => {
      //created user and logged in 
      navigate('/')

    })
    .catch(e => alert(e.message))

  }
  
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
        
          <h5>Email</h5>
          <input value={email} onChange={e => setEmail(e.target.value)} type='text'/>
          <h5>Password</h5>
          <input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
        
          <button
          onClick={signIn}
          type='submit'
          className='login__signInBtn amazonBtn'
          >Sign in</button>

        </form>
          
        <p>
          By Signing in you agree to Amazon's Conditions of Use & Sale.
          Please see our Privacy Notice,
          our Cookies Notice and our Interest-based Ads Notice.
        </p>
        <button
        onClick={register} 
        type='submit' 
        className='login__registerbtn'
        >Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default LoginPage