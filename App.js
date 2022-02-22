import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import AppNavigator from './src/navigators/app.navigator'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App
