import React, { useContext } from 'react'

import { TranscriptContext } from '../contexts/transcript.context'
import TranscriptsScreen from '../screens/transcripts.screen'

const Transcripts = () => {
  const { transcripts, deleteTranscript } = useContext(
    TranscriptContext
  )

  return (
    <TranscriptsScreen
      transcripts={transcripts}
      deleteTranscript={deleteTranscript}
    />
  )
}

export default Transcripts
