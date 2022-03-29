import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import {
  Button,
  Center,
  Heading,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

import AppLogo from '../components/AppLogo'

const SignIn = ({
  signInWithGoogle,
  signInAnonymously,
  isValidating,
}) => {
  return (
    <VStack bg="white" flex={1} p={5}>
      <Center flex={1}>
        <AppLogo />
        <VStack mt={4}>
          <Heading>Speech Transcriber</Heading>
          <Text color="gray.500" fontSize="xs">
            Powered by Google Speech Recognition
          </Text>
        </VStack>
      </Center>
      <VStack
        alignItems="center"
        flex={1}
        justifyContent="center"
        space={4}
      >
        <Button
          _pressed={{ opacity: 0.6, bg: 'black' }}
          bg="black"
          color="white"
          disabled={isValidating}
          w="304"
          onPress={signInAnonymously}
        >
          Sign in as Guest
        </Button>
        <GoogleSigninButton
          color={GoogleSigninButton.Color.Dark}
          disabled={isValidating}
          size={GoogleSigninButton.Size.Wide}
          onPress={signInWithGoogle}
        />
      </VStack>
    </VStack>
  )
}

export default SignIn
