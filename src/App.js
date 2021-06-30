import React, { useEffect } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from 'Redux/user.actions'
import { selectCurrentUser } from 'Redux/user.selectors'
import { auth, createUserProfileDocument } from 'Firebase/firebase.utils'
import { AboutPage, CheckoutPage, HomePage, LoginPage, RegisterPage, StorePage } from 'Pages'
import { Tabs } from 'Components'

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
  
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }

      // uploadLocalJsonToFirebase('collections', collectionSectionsArray.map(({ title, items }) => {
      //   return { title, items }
      // }))
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <Router>
      <Tabs />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/store" component={StorePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage /> } />
          <Route exact path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage /> } />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  )
}

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapState, mapDispatch)(App)
