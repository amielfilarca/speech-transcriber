import { useNavigation } from '@react-navigation/core'
import React, {
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import AlertDialog from '../components/AlertDialog'
import { TranscriptContext } from '../contexts/transcript.context'
import TranscriptsScreen from '../screens/transcripts.screen'

const Transcripts = () => {
  const { transcripts, deleteTranscript } = useContext(
    TranscriptContext
  )

  const navigation = useNavigation()

  const viewTranscript = (id) => {
    navigation.navigate('View Transcript', { id })
  }

  const [id, setId] = useState()
  const isOpen = useMemo(() => !!id, [id])
  const cancelRef = useRef(null)

  const onDelete = (id) => {
    setId(id)
  }

  const onCancel = () => {
    setId()
  }

  const onConfirm = () => {
    deleteTranscript(id)
    setId()
  }

  return (
    <>
      <TranscriptsScreen
        transcripts={transcripts}
        viewTranscript={viewTranscript}
        onDelete={onDelete}
      />
      <AlertDialog
        header="Delete Transcript"
        body="This will delete the transcript. This action
      cannot be reversed. Deleted data can not be
      recovered."
        status="danger"
        confirm="Delete"
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default Transcripts
