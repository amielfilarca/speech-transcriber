import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import SettingsScreen from '../screens/settings.screen'
import TranscribeScreen from '../screens/transcribe.screen'
import TranscriptsScreen from '../screens/transcripts.screen'

const Tabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Transcribe"
        component={TranscribeScreen}
      />
      <Tabs.Screen
        name="Transcripts"
        component={TranscriptsScreen}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tabs.Navigator>
  )
}

export default TabsNavigator
