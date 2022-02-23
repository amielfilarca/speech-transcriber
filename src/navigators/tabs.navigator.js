import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Settings from '../containers/settings'
import Transcribe from '../containers/transcribe'
import Transcripts from '../containers/transcripts'
import TranscriptContextProvider from '../contexts/transcript.context'

const Tabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <TranscriptContextProvider>
      <Tabs.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen
          name="Transcribe"
          component={Transcribe}
        />
        <Tabs.Screen
          name="Transcripts"
          component={Transcripts}
        />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
    </TranscriptContextProvider>
  )
}

export default TabsNavigator
