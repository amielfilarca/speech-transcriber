import {
  Box,
  Button,
  Divider,
  Heading,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

const Transcribe = ({
  onPress,
  isLoading,
  buttonText,
  error,
  results,
  partialResults,
  volume,
  saveTranscript,
  discardTranscript,
}) => {
  return (
    <VStack flex={1} p={5} space={4} bg="orange.50">
      <Box>
        <Heading>Transcribe</Heading>
      </Box>
      <VStack flex={1} space={4} justifyContent={'center'}>
        <Box>
          <Text color={'gray.500'}>Error:</Text>
          <Text fontWeight={700}>
            {error || 'No error'}
          </Text>
        </Box>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text color={'gray.500'}>Results:</Text>
            <Text fontWeight={700}>{results}</Text>
          </Box>
        </ScrollView>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text color={'gray.500'}>Partial Results:</Text>
            <Text fontWeight={700}>{partialResults}</Text>
          </Box>
        </ScrollView>
        <Divider />
        <Box>
          <Text color={'gray.500'}>Volume:</Text>
          <Text fontWeight={700}>{volume || 0}</Text>
        </Box>
      </VStack>
      {!results && (
        <Button
          onPress={onPress}
          isDisabled={isLoading}
          shadow={'1'}
        >
          {buttonText}
        </Button>
      )}
      {results && (
        <VStack space={4}>
          <Button
            onPress={saveTranscript}
            colorScheme="success"
            shadow={1}
          >
            Save
          </Button>
          <Button
            onPress={discardTranscript}
            colorScheme="danger"
            shadow={1}
          >
            Discard
          </Button>
        </VStack>
      )}
    </VStack>
  )
}

export default Transcribe
