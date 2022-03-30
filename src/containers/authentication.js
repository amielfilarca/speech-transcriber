import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/core'
import { useToast } from 'native-base'
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
import { COMMON_PROPS } from '../constants'
import { AuthContext } from '../contexts/auth.context'
import SignInScreen from '../screens/sign-in.screen'

const Authentication = () => {
  const navigation = useNavigation()
  const {
    signInWithGoogle,
    isValidating: isSignInWithGoogleValidating,
    error: errorSignInWithGoogle,
  } = useSignInWithGoogle()
  const {
    signInAnonymously,
    isValidating: isSignInAnonymouslyValidating,
    error: errorSignInAnonymously,
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

  const error = useMemo(
    () => errorSignInWithGoogle || errorSignInAnonymously,
    [errorSignInWithGoogle, errorSignInAnonymously]
  )

  const toast = useToast()

  const toastError = useMemo(
    () => ({
      ...COMMON_PROPS.TOAST,
      id: error?.code,
      title: 'Error',
      status: 'error',
      description: error?.message,
    }),
    [error]
  )

  useEffect(() => {
    if (error && toast.isActive(error?.code)) {
      toast.close(error)
    }

    if (error && !toast.isActive(error?.code)) {
      toast.show(toastError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

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
