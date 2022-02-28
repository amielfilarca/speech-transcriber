import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { Box, Center, Heading, Text } from 'native-base'
import React from 'react'

const SignIn = ({ signInWithGoogle, isValidating }) => {
  return (
    <Box flex={1} p={5}>
      <Center flex={1}>
        <Heading>Speech Transcriber</Heading>
        <Text color={'gray.500'} fontSize={'xs'}>
          Powered by Google Speech Recognition
        </Text>
      </Center>
      <Center flex={1}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
          disabled={isValidating}
        />
      </Center>
    </Box>
  )
}

export default SignIn
