import React from 'react'
import { Button, Text, View } from 'react-native'

import { signOut } from '../actions/auth.action'

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

export default Settings
