import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import uuid from 'react-native-uuid'

import {
  useCreateTranscript,
  useDeleteTranscript,
  useTranscripts,
  useUpdateTranscript,
} from '../actions/firestore.action'
import {
  getCurrentDate,
  getDefaultTitle,
  sortBy,
} from '../utils'
import { AuthContext } from './auth.context'

export const TranscriptContext = createContext()

const TranscriptContextProvider = ({ children }) => {
  const [transcripts, setTranscripts] = useState([])
  const { user } = useContext(AuthContext)
  const transcriptsResponse = useTranscripts(user)
  const { createTranscript } = useCreateTranscript()
  const { updateTranscript } = useUpdateTranscript()
  const { deleteTranscript } = useDeleteTranscript()

  useEffect(() => {
    if (!transcriptsResponse.data) return
    const sortedData = sortBy(
      transcriptsResponse.data,
      (transcript) => [
        -new Date(transcript.updatedAt),
        -new Date(transcript.createdAt),
        -transcript.id,
      ]
    )
    setTranscripts(sortedData)
  }, [transcriptsResponse])

  const addTranscriptAsync = useCallback(
    async (transcript) => {
      const now = getCurrentDate()
      const payload = {
        id: uuid.v4(),
        user: user.uid,
        title: getDefaultTitle(transcript),
        body: transcript,
        createdAt: now,
        updatedAt: now,
      }
      await createTranscript(user, payload)
      await transcriptsResponse.mutate()
    },
    [user, createTranscript, transcriptsResponse]
  )

  const updateTranscriptAsync = useCallback(
    async (transcript) => {
      const payload = {
        ...transcript,
        updatedAt: getCurrentDate(),
      }
      await updateTranscript(user, payload)
      await transcriptsResponse.mutate()
    },
    [user, updateTranscript, transcriptsResponse]
  )

  const deleteTranscriptAsync = useCallback(
    async (transcript) => {
      await deleteTranscript(user, transcript)
      await transcriptsResponse.mutate()
    },
    [user, deleteTranscript, transcriptsResponse]
  )

  return (
    <TranscriptContext.Provider
      value={{
        transcriptsResponse,
        transcripts,
        addTranscriptAsync,
        updateTranscriptAsync,
        deleteTranscriptAsync,
      }}
    >
      {children}
    </TranscriptContext.Provider>
  )
}

export default TranscriptContextProvider
