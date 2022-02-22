import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'

import AppNavigator from './src/navigators/app.navigator'

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
