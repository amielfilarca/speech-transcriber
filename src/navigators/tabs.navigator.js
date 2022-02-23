import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Settings from '../containers/settings'
import Transcribe from '../containers/transcribe'
import TranscriptsScreen from '../screens/transcripts.screen'

const Tabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Transcribe"
        component={Transcribe}
      />
      <Tabs.Screen
        name="Transcripts"
        component={TranscriptsScreen}
      />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  )
}

export default TabsNavigator
