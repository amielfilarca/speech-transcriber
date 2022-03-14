import {
  Avatar,
  Button,
  Center,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

const Settings = ({
  signOut,
  isValidating,
  user,
  linkToGoogleAccount,
}) => {
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
            <Avatar
              bg="gray.100"
              source={{
                uri: user?.providerData[0]?.photoURL,
              }}
            />
          </Center>
          <Center>
            {user?.isAnonymous ? (
              <Text fontSize="lg" fontWeight="bold">
                Guest
              </Text>
            ) : (
              <Text fontSize="lg" fontWeight="bold">
                {user?.providerData[0]?.displayName}
              </Text>
            )}
            <Text color="gray.500">
              {user?.providerData[0]?.email}
            </Text>
          </Center>
        </VStack>
      </Center>
      <VStack space={4}>
        {user?.isAnonymous && (
          <Button
            isDisabled={isValidating}
            onPress={linkToGoogleAccount}
          >
            Link to Google Account
          </Button>
        )}
        <Button
          colorScheme="danger"
          isDisabled={isValidating}
          onPress={signOut}
        >
          Sign out
        </Button>
      </VStack>
    </VStack>
  )
}

export default Settings
