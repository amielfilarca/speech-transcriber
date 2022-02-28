import Voice from '@react-native-voice/voice'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { AuthContext } from '../contexts/auth.context'
import { TranscriptContext } from '../contexts/transcript.context'
import TranscribeScreen from '../screens/transcribe.screen'

const Transcribe = () => {
  const { user } = useContext(AuthContext)
  const { addTranscript } = useContext(TranscriptContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])
  const [partialResults, setPartialResults] = useState([])
  const [volume, setVolume] = useState(null)

  const onSpeechStart = () => {
    setError(null)
    setIsListening(true)
  }

  const onSpeechRecognized = () => {}

  const onSpeechError = (event) => {
    setError(event.error.message.split('/')[1])
    setIsListening(false)
  }

  const onSpeechEnd = () => {
    setIsListening(false)
  }

  const onSpeechResults = (event) => {
    setResults(event.value)
    setIsListening(false)
  }

  const onSpeechPartialResults = (event) => {
    setPartialResults(event.value)
  }

  const onSpeechVolumeChanged = (event) => {
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

  const resetState = () => {
    setIsLoading(null)
    setIsListening(null)
    setError(null)
    setResults([])
    setPartialResults([])
    setVolume(null)
  }

  const startRecognizing = async () => {
    setIsLoading(true)
    try {
      await Voice.start()
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  const stopRecognizing = async () => {
    setIsLoading(true)
    try {
      await Voice.stop()
      setIsListening(false)
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  const saveTranscript = () => {
    addTranscript(results[0])
    resetState()
  }

  const discardTranscript = () => {
    resetState()
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
      buttonText={buttonText}
      discardTranscript={discardTranscript}
      error={error}
      isLoading={isLoading}
      partialResults={partialResults[0]}
      results={results[0]}
      saveTranscript={saveTranscript}
      user={user}
      volume={volume}
      onPress={onPress}
    />
  )
}

export default Transcribe
