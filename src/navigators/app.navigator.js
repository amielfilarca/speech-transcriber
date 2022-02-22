import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import AuthNavigator from './auth.navigator'
import TabNavigator from './tabs.navigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="App" component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator
