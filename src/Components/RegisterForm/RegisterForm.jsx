import React, { useState } from 'react'

import { auth, createUserProfileDocument } from 'Firebase/firebase.utils'
import { CustomButton, PasswordInput, TextInput } from 'Components'

const RegisterForm = () => {
  const [credentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (credentials.password !== credentials.confirmPassword) {
      alert('passwords dont match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(credentials.email, credentials.password)

      await createUserProfileDocument(user, { displayName: credentials.displayName })

      setCredentials({ displayName: '', email: '', password: '', confirmPassword: '' })
    } catch (error) {
      console.log('error signing up', error.message)
    }
  }

  const handleChange = (name, value) => setCredentials({ ...credentials, [name]: value })

  return (
    <div className="row">
      <div className="col-12">
        <h1>Register</h1>
      </div>
      <div className="col-12">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <TextInput
                value={credentials.displayName}
                onChange={(name, value) => handleChange(name, value)}
                label="Name"
                name="displayName"
              />
            </div>
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
              <PasswordInput
                value={credentials.confirmPassword}
                onChange={(name, value) => handleChange(name, value)}
                label="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <div className="col-12">
              <CustomButton type="submit">Register with E-Mail</CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
