import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Authentication from '../containers/authentication'
import OnboardingScreen from '../screens/onboarding.screen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={Authentication}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
