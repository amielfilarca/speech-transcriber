import {
  Box,
  Button,
  Divider,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React, { useContext } from 'react'

import { AuthContext } from '../contexts/auth.context'

const Transcribe = ({
  onPress,
  isLoading,
  buttonText,
  error,
  results,
  partialResults,
  volume,
}) => {
  const { user } = useContext(AuthContext)

  return (
    <VStack flex={1} p={5} space={4} bg="orange.50">
      <Box>
        <Text
          fontFamily={'heading'}
          fontSize={'3xl'}
          fontWeight={900}
        >
          Hello,
        </Text>
        <Text
          fontFamily={'heading'}
          fontSize={'3xl'}
          fontWeight={900}
        >
          {user?.displayName || null}
        </Text>
      </Box>
      <VStack flex={1} space={4} justifyContent={'center'}>
        <Box>
          <Text fontWeight={600}>Error:</Text>
          <Text fontSize={'xl'} fontWeight={900}>
            {error || 'No error'}
          </Text>
        </Box>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text fontWeight={600}>Results:</Text>
            <Text fontSize={'xl'} fontWeight={900}>
              {results}
            </Text>
          </Box>
        </ScrollView>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text fontWeight={600}>Partial Results:</Text>
            <Text fontSize={'xl'} fontWeight={900}>
              {partialResults}
            </Text>
          </Box>
        </ScrollView>
        <Divider />
        <Box>
          <Text fontWeight={600}>Volume:</Text>
          <Text fontSize={'xl'} fontWeight={900}>
            {volume || 0}
          </Text>
        </Box>
      </VStack>
      <Button
        _text={{ fontSize: 'md', fontWeight: 900 }}
        onPress={onPress}
        isDisabled={isLoading}
      >
        {buttonText}
      </Button>
    </VStack>
  )
}

export default Transcribe
