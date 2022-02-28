import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'

import { TranscriptContext } from '../contexts/transcript.context'
import TranscriptsScreen from '../screens/transcripts.screen'

const Transcripts = () => {
  const { transcripts, deleteTranscript } = useContext(
    TranscriptContext
  )

  const navigation = useNavigation()

  const handleViewTranscript = (id) => {
    navigation.navigate('View Transcript', { id })
  }

  const handleEditTranscript = (id) => {
    navigation.navigate('View Transcript', { id })
  }

  return (
    <TranscriptsScreen
      deleteTranscript={deleteTranscript}
      transcripts={transcripts}
      handleViewTranscript={handleViewTranscript}
      handleEditTranscript={handleEditTranscript}
    />
  )
}

export default Transcripts
