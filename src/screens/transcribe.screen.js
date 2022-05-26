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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Center>
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
        <Button isDisabled={isLoading} onPress={onPress}>
          {buttonText}
        </Button>
      )}
      {results && (
        <VStack space={4}>
          <Button
            colorScheme="success"
            onPress={saveTranscript}
          >
            Save
          </Button>
          <Button
            colorScheme="danger"
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
