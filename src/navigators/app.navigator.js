import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import AuthContextProvider from '../contexts/auth.context'
import AuthNavigator from './auth.navigator'
import TabNavigator from './tabs.navigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <AuthContextProvider>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          component={AuthNavigator}
          name="Auth"
        />
        <Stack.Screen component={TabNavigator} name="App" />
      </Stack.Navigator>
    </AuthContextProvider>
  )
}

export default AppNavigator
