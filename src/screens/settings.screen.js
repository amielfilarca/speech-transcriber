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
      bg="orange.50"
      justifyContent="space-between"
    >
      <Center flex={1}>
        <VStack space={4}>
          <Center>
            <Center
              borderRadius={'full'}
              bgColor="orange.100"
            >
              <Avatar
                source={{ uri: user?.photoURL }}
                m={6}
              />
            </Center>
          </Center>
          <Center>
            <Text fontSize={'lg'} fontWeight={700}>
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
