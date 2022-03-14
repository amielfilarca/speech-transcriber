import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/core'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  useSignInAnonymously,
  useSignInWithGoogle,
} from '../actions/auth.action'
import { AuthContext } from '../contexts/auth.context'
import SignInScreen from '../screens/sign-in.screen'

const Authentication = () => {
  const navigation = useNavigation()
  const { signInWithGoogle, isSignInWithGoogleValidating } =
    useSignInWithGoogle()
  const {
    signInAnonymously,
    isSignInAnonymouslyValidating,
  } = useSignInAnonymously()
  const { user, setUser } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true)

  const isValidating = useMemo(
    () =>
      isSignInWithGoogleValidating ||
      isSignInAnonymouslyValidating,
    [
      isSignInWithGoogleValidating,
      isSignInAnonymouslyValidating,
    ]
  )

  const onAuthStateChanged = useCallback(
    (user) => {
      setUser(user)
      if (initializing) setInitializing(false)
    },
    [setUser, initializing]
  )

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      onAuthStateChanged
    )
    return subscriber
  }, [onAuthStateChanged])

  useEffect(() => {
    user
      ? navigation.navigate('App')
      : navigation.navigate('Auth')
  }, [navigation, user])

  if (initializing || user) return null

  return (
    <SignInScreen
      isValidating={isValidating}
      signInAnonymously={signInAnonymously}
      signInWithGoogle={signInWithGoogle}
    />
  )
}

export default Authentication
