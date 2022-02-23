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
      <VStack space={4}>
        <Center>
          <Center
            borderRadius={'full'}
            bgColor="orange.100"
          >
            <Avatar
              source={{ uri: user?.photoURL }}
              size={'lg'}
              m={8}
            />
          </Center>
        </Center>
        <Center>
          <Text fontSize={'2xl'} fontWeight={900}>
            {user?.displayName}
          </Text>
          <Text color={'gray.500'} fontWeight={500}>
            {user?.email}
          </Text>
        </Center>
      </VStack>
      <Button
        onPress={signOut}
        isDisabled={isValidating}
        _text={{ fontSize: 'md', fontWeight: 900 }}
        colorScheme="danger"
        variant={'subtle'}
      >
        Sign out
      </Button>
    </VStack>
  )
}

export default Settings
