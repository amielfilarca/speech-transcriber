import { Box, Button } from 'native-base'
import React from 'react'

const Settings = ({ signOut, isValidating }) => {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        onPress={signOut}
        isLoading={isValidating}
        isLoadingText="Signing out"
      >
        Sign out
      </Button>
    </Box>
  )
}

export default Settings
