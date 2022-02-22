import React from 'react'
import { Button, Text, View } from 'react-native'

import { signInWithGoogle } from '../actions/auth.action'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="Google Sign-In"
        onPress={signInWithGoogle}
      />
    </View>
  )
}

export default SignIn
