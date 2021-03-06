import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useState } from 'react'

GoogleSignin.configure({
  webClientId:
    '449715880728-mle7tsnuqt6ktlfgfnbmp3r5nm08cqcv.apps.googleusercontent.com',
})

export const useSignInWithGoogle = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isValidating, setIsValidating] = useState()

  const signInWithGoogle = async () => {
    setIsValidating(true)

    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential =
        auth.GoogleAuthProvider.credential(idToken)
      const user = await auth().signInWithCredential(
        googleCredential
      )
      setData(user)
    } catch (error) {
      setError(error)
    }

    setIsValidating(false)
  }

  return { signInWithGoogle, data, error, isValidating }
}

export const useSignOutWithGoogle = () => {
  const [error, setError] = useState()
  const [isValidating, setIsValidating] = useState()

  const signOutWithGoogle = async () => {
    setIsValidating(true)

    try {
      await GoogleSignin.signOut()
    } catch (error) {
      setError(error)
    }

    setIsValidating(false)
  }

  return { signOutWithGoogle, error, isValidating }
}

export const useSignOut = () => {
  const [error, setError] = useState()
  const [isValidating, setIsValidating] = useState()

  const signOut = async () => {
    setIsValidating(true)

    try {
      await auth().signOut()
    } catch (error) {
      setError(error)
    }

    setIsValidating(false)
  }

  return { signOut, error, isValidating }
}

export const useSignInAnonymously = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isValidating, setIsValidating] = useState()

  const signInAnonymously = async () => {
    setIsValidating(true)

    try {
      const user = await auth().signInAnonymously()
      setData(user)
    } catch (error) {
      setError(error)
    }

    setIsValidating(false)
  }

  return { signInAnonymously, data, error, isValidating }
}

export const useLinkToGoogleAccount = () => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isValidating, setIsValidating] = useState()

  const linkToGoogleAccount = async () => {
    setIsValidating(true)

    try {
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential =
        auth.GoogleAuthProvider.credential(idToken)
      const user =
        await auth().currentUser.linkWithCredential(
          googleCredential
        )
      setData(user)
    } catch (error) {
      setError(error)
    }

    setIsValidating(false)
  }

  return { linkToGoogleAccount, data, error, isValidating }
}
