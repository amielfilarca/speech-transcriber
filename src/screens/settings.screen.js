import {
  Avatar,
  Button,
  Center,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

const Settings = ({ signOut, isValidating, user }) => {
  return (
    <VStack
      bg="white"
      flex={1}
      justifyContent="space-between"
      p={5}
    >
      <Center flex={1}>
        <VStack space={4}>
          <Center>
            <Avatar source={{ uri: user?.photoURL }} />
          </Center>
          <Center>
            <Text fontSize="lg" fontWeight="bold">
              {user?.displayName}
            </Text>
            <Text color="gray.500">{user?.email}</Text>
          </Center>
        </VStack>
      </Center>
      <Button
        colorScheme="danger"
        isDisabled={isValidating}
        onPress={signOut}
      >
        Sign out
      </Button>
    </VStack>
  )
}

export default Settings
