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
    <VStack bg="white" flex={1} p={5} space={4}>
      <Box>
        <Heading>Transcribe</Heading>
      </Box>
      <VStack flex={1} justifyContent="center" space={4}>
        <Box>
          <Text color="gray.500">Error:</Text>
          <Text fontWeight="bold">
            {error || 'No error'}
          </Text>
        </Box>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text color="gray.500">Results:</Text>
            <Text fontWeight="bold">{results}</Text>
          </Box>
        </ScrollView>
        <Divider />
        <ScrollView flex={1}>
          <Box>
            <Text color="gray.500">Partial Results:</Text>
            <Text fontWeight="bold">{partialResults}</Text>
          </Box>
        </ScrollView>
        <Divider />
        <Box>
          <Text color="gray.500">Volume:</Text>
          <Text fontWeight="bold">{volume || 0}</Text>
        </Box>
      </VStack>
      {!results && (
        <Button
          isDisabled={isLoading}
          shadow={1}
          onPress={onPress}
        >
          {buttonText}
        </Button>
      )}
      {results && (
        <VStack space={4}>
          <Button
            colorScheme="success"
            shadow={1}
            onPress={saveTranscript}
          >
            Save
          </Button>
          <Button
            colorScheme="danger"
            shadow={1}
            onPress={discardTranscript}
          >
            Discard
          </Button>
        </VStack>
      )}
    </VStack>
  )
}

export default Transcribe
