import Voice from '@react-native-voice/voice'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import TranscribeScreen from '../screens/transcribe.screen'

const Transcribe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])
  const [partialResults, setPartialResults] = useState([])
  const [volume, setVolume] = useState(null)

  const onSpeechStart = (event) => {
    console.log('onSpeechStart:', event)
    setIsListening(true)
  }

  const onSpeechRecognized = (event) => {
    console.log('onSpeechRecognized:', event)
  }

  const onSpeechError = (event) => {
    console.log('onSpeechError:', event)
    setError(event.error.message.split('/')[1])
  }

  const onSpeechEnd = (event) => {
    console.log('onSpeechEnd:', event)
    setIsListening(false)
  }

  const onSpeechResults = (event) => {
    console.log('onSpeechResults:', event)
    setResults(event.value)
    setIsListening(false)
  }

  const onSpeechPartialResults = (event) => {
    console.log('onSpeechPartialResults:', event)
    setPartialResults(event.value)
  }

  const onSpeechVolumeChanged = (event) => {
    console.log('onSpeechVolumeChanged:', event)
    setVolume(event.value)
  }

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart
    Voice.onSpeechRecognized = onSpeechRecognized
    Voice.onSpeechEnd = onSpeechEnd
    Voice.onSpeechError = onSpeechError
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechPartialResults = onSpeechPartialResults
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged

    return () =>
      Voice.destroy().then(Voice.removeAllListeners)
  }, [])

  const startRecognizing = async () => {
    setIsLoading(true)
    try {
      await Voice.start()
    } catch (error) {
      console.log('start:', error)
    }
    setIsLoading(false)
  }

  const stopRecognizing = async () => {
    setIsLoading(true)
    try {
      await Voice.stop()
      setIsListening(false)
    } catch (error) {
      console.log('stop:', error)
    }
    setIsLoading(false)
  }

  const onPress = useCallback(
    () =>
      isListening ? stopRecognizing() : startRecognizing(),
    [isListening]
  )

  const buttonText = useMemo(
    () => (isListening ? 'Stop' : 'Start'),
    [isListening]
  )

  return (
    <TranscribeScreen
      onPress={onPress}
      isLoading={isLoading}
      buttonText={buttonText}
      error={error}
      results={results[0]}
      partialResults={partialResults[0]}
      volume={volume}
    />
  )
}

export default Transcribe
