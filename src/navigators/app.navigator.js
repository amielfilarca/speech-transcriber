import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import ViewTranscript from '../containers/view-transcript'
import AuthContextProvider from '../contexts/auth.context'
import TranscriptContextProvider from '../contexts/transcript.context'
import AuthNavigator from './auth.navigator'
import TabNavigator from './tabs.navigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <AuthContextProvider>
      <TranscriptContextProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            component={AuthNavigator}
            name="Auth"
          />
          <Stack.Screen
            component={TabNavigator}
            name="App"
          />
          <Stack.Screen
            component={ViewTranscript}
            name="View Transcript"
          />
        </Stack.Navigator>
      </TranscriptContextProvider>
    </AuthContextProvider>
  )
}

export default AppNavigator
