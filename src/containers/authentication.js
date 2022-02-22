import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/core'
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'

import SignInScreen from '../screens/sign-in.screen'

const Authentication = () => {
  const navigation = useNavigation()

  const [initializing, setInitializing] = useState(true)

  const onAuthStateChanged = useCallback(
    (user) => {
      user
        ? navigation.navigate('App')
        : navigation.navigate('Auth')
      if (initializing) setInitializing(false)
    },
    [navigation, initializing]
  )

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      onAuthStateChanged
    )
    return subscriber
  }, [onAuthStateChanged])

  if (initializing) return null

  return <SignInScreen />
}

export default Authentication
