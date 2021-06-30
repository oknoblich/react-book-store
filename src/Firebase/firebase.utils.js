import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBFhRI7wSxsAgaVIsChy46OFXcEi1qR_-A",
  authDomain: "react-redux-shop-cd7f2.firebaseapp.com",
  projectId: "react-redux-shop-cd7f2",
  storageBucket: "react-redux-shop-cd7f2.appspot.com",
  messagingSenderId: "1096222963957",
  appId: "1:1096222963957:web:9994740a69e5d5770f6dbc"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

// firebase.initializeApp(config)
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

// export const uploadLocalJsonToFirebase = async (collectionKey, objectToAdd) => {
//   const collectionRef = firestore.collection(collectionKey)

//   const batch = firestore.batch()

//   objectToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc()
//     batch.set(newDocRef, obj)
//   })

//   return await batch.commit()
// }

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((acc, cur) => {
    acc[cur.title.toLowerCase()] = cur
    return acc
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
