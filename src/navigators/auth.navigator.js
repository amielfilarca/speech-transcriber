import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import OnboardingScreen from '../screens/onboarding.screen'
import SignInScreen from '../screens/sign-in.screen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
