import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = ({ signInWithGoogle, isValidating }) => {
  return (
    <View>
      <Text>SignIn</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
        disabled={isValidating}
      />
    </View>
  )
}

export default SignIn
