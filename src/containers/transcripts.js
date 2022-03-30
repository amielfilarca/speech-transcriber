import { useNavigation } from '@react-navigation/core'
import { useToast } from 'native-base'
import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import AlertDialog from '../components/AlertDialog'
import { COMMON_PROPS } from '../constants'
import { TranscriptContext } from '../contexts/transcript.context'
import TranscriptsScreen from '../screens/transcripts.screen'

const Transcripts = () => {
  const {
    transcripts,
    deleteTranscriptAsync,
    transcriptsResponse,
  } = useContext(TranscriptContext)

  const navigation = useNavigation()

  const viewTranscript = (transcript) => {
    navigation.navigate('View Transcript', { transcript })
  }

  const [transcript, setTranscript] = useState()
  const isOpen = useMemo(() => !!transcript, [transcript])
  const cancelRef = useRef(null)

  const onDelete = (transcript) => {
    setTranscript(transcript)
  }

  const onCancel = () => {
    setTranscript()
  }

  const toast = useToast()

  const onConfirm = useCallback(() => {
    deleteTranscriptAsync(transcript)
    toast.show({
      ...COMMON_PROPS.TOAST,
      title: 'Success',
      description: 'Deleted transcript',
      status: 'success',
    })
    setTranscript()
  }, [deleteTranscriptAsync, toast, transcript])

  return (
    <>
      <TranscriptsScreen
        refreshing={transcriptsResponse.isValidating}
        transcripts={transcripts}
        viewTranscript={viewTranscript}
        onDelete={onDelete}
        onRefresh={transcriptsResponse.mutate}
      />
      <AlertDialog
        body="This will delete the transcript. This action
      cannot be reversed. Deleted data can not be
      recovered."
        confirm="Delete"
        header="Delete Transcript"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        status="danger"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default Transcripts
