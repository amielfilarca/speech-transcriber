import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'

import Settings from '../containers/settings'
import Transcribe from '../containers/transcribe'
import Transcripts from '../containers/transcripts'

const Tabs = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        component={Transcribe}
        name="Transcribe"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={Foundation}
              color={color}
              name="hearing-aid"
              size={size}
              textAlign="center"
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Transcripts}
        name="Transcripts"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={AntDesign}
              color={color}
              name="inbox"
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={Settings}
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={AntDesign}
              color={color}
              name="user"
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

export default TabsNavigator
