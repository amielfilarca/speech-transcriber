import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'

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
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={Foundation}
                name="hearing-aid"
                color={color}
                size={size}
                textAlign={'center'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Transcripts"
          component={Transcripts}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={AntDesign}
                name="inbox"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={AntDesign}
                name="setting"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </TranscriptContextProvider>
  )
}

export default TabsNavigator
