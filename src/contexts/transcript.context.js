import React, {
  createContext,
  useEffect,
  useState,
} from 'react'
import uuid from 'react-native-uuid'

import { getCurrentDate, sortBy } from '../utils'

export const TranscriptContext = createContext()

const TranscriptContextProvider = ({ children }) => {
  const [transcripts, setTranscripts] = useState([])

  useEffect(() => {
    sortBy(transcripts, (transcript) => [
      -new Date(transcript.createdAt),
      -transcript.id,
    ])
  }, [transcripts])

  const addTranscript = ({ title, body }) => {
    const now = getCurrentDate()

    const transcript = {
      id: uuid.v4(),
      title: title
        ? title
        : `Transcript #${transcripts.length + 1}`,
      body,
      createdAt: now,
      updatedAt: now,
    }

    setTranscripts([transcript, ...transcripts])

    return transcript
  }

  const getTranscript = (id) => {
    return transcripts.find((t) => t.id === id)
  }

  const updateTranscript = (transcript) => {
    setTranscripts([
      ...transcripts.map((t) =>
        t.id === transcript.id
          ? {
              ...t,
              ...transcript,
              updatedAt: getCurrentDate(),
            }
          : t
      ),
    ])
    return transcript
  }

  const deleteTranscript = (id) => {
    setTranscripts([
      ...transcripts.filter(
        (transcript) => transcript.id !== id
      ),
    ])
    return true
  }

  return (
    <TranscriptContext.Provider
      value={{
        transcripts,
        addTranscript,
        getTranscript,
        updateTranscript,
        deleteTranscript,
      }}
    >
      {children}
    </TranscriptContext.Provider>
  )
}

export default TranscriptContextProvider
