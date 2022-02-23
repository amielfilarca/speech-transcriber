import { Button, Text, VStack } from 'native-base'
import React from 'react'

const Transcribe = ({
  onPress,
  isLoading,
  buttonText,
  error,
  results,
  partialResults,
  volume,
}) => {
  return (
    <VStack flex={1} p={5} space={4} bg="orange.50">
      <Text>Error:</Text>
      <Text>{JSON.stringify(error)}</Text>
      <Text>Results:</Text>
      <Text>{JSON.stringify(results)}</Text>
      <Text>Partial Results:</Text>
      <Text>{JSON.stringify(partialResults)}</Text>
      <Text>Volume:</Text>
      <Text>{JSON.stringify(volume)}</Text>
      <Button onPress={onPress} isDisabled={isLoading}>
        {buttonText}
      </Button>
    </VStack>
  )
}

export default Transcribe
