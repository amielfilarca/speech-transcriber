import { Box, Button } from 'native-base'
import React from 'react'

const SignIn = ({ signInWithGoogle, isValidating }) => {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        onPress={signInWithGoogle}
        isLoading={isValidating}
        isLoadingText="Signing in"
      >
        Sign in using Google
      </Button>
    </Box>
  )
}

export default SignIn
