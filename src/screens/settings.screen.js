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
      flex={1}
      p={5}
      bg={'white'}
      justifyContent="space-between"
    >
      <Center flex={1}>
        <VStack space={4}>
          <Center>
            <Avatar source={{ uri: user?.photoURL }} />
          </Center>
          <Center>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {user?.displayName}
            </Text>
            <Text color={'gray.500'}>{user?.email}</Text>
          </Center>
        </VStack>
      </Center>
      <Button
        onPress={signOut}
        isDisabled={isValidating}
        colorScheme="danger"
      >
        Sign out
      </Button>
    </VStack>
  )
}

export default Settings
