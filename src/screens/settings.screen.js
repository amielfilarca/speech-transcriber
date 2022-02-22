import React from 'react'
import { Button, Text, View } from 'react-native'

const Settings = ({ signOut, isValidating }) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Sign Out"
        onPress={signOut}
        disabled={isValidating}
      />
    </View>
  )
}

export default Settings
