import React, { useState } from 'react'

import { auth, signInWithGoogle } from 'Firebase/firebase.utils'
import { CustomButton, PasswordInput, TextInput } from 'Components'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(credentials.email, credentials.password)

      setCredentials({ email: '', password: '' })
    } catch (error) {
      console.log('error signing in', error.message)
    }
  }

  const handleChange = (name, value) => setCredentials({ ...credentials, [name]: value })

  return (
    <div className="row">
      <div className="col-12">
        <h1>Login</h1>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <TextInput
                value={credentials.email}
                onChange={(name, value) => handleChange(name, value)}
                label="E-Mail"
                name="email"
              />
            </div>
            <div className="col-12">
              <PasswordInput
                value={credentials.password}
                onChange={(name, value) => handleChange(name, value)}
                label="Password"
                name="password"
              />
            </div>
            <div className="col-12">
              <CustomButton type="submit">Login with E-Mail</CustomButton>
            </div>
            <div className="col-12">
              <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Login with Google</CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
