import {
  Button,
  Center,
  Heading,
  Progress,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

const Transcribe = ({
  onPress,
  isLoading,
  buttonText,
  transcript,
  results,
  volume,
  saveTranscript,
  discardTranscript,
}) => {
  return (
    <VStack bg="white" flex={1} p={5} space={4}>
      <Heading>Transcribe</Heading>
      <ScrollView _contentContainerStyle={{ flex: 1 }}>
        <Center flex={1}>
          {transcript ? (
            <Text fontSize="xl">{transcript}</Text>
          ) : (
            <Text color="gray.500" fontSize="xs">
              Press the start button to begin recognizing
              speech
            </Text>
          )}
        </Center>
      </ScrollView>
      <Progress value={volume} />
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
