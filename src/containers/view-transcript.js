import {
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import React, { useContext, useMemo, useState } from 'react'
import { Keyboard } from 'react-native'

import { TranscriptContext } from '../contexts/transcript.context'
import ViewTranscriptScreen from '../screens/view-transcript.screen'

const ViewTranscript = () => {
  const { getTranscript, updateTranscript } = useContext(
    TranscriptContext
  )

  const route = useRoute()

  const transcript = useMemo(
    () => getTranscript(route.params.id),
    [getTranscript, route]
  )

  const [title, setTitle] = useState(transcript.title)

  const [body, setBody] = useState(transcript.body)

  const isEdited = useMemo(() => {
    if (title !== transcript.title) return true
    if (body !== transcript.body) return true
    return false
  }, [transcript, title, body])

  const onEditTitle = (title) => {
    setTitle(title)
  }

  const onEditBody = (body) => {
    setBody(body)
  }

  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const onSave = () => {
    Keyboard.dismiss()
    updateTranscript({ ...transcript, title, body })
  }

  return (
    <ViewTranscriptScreen
      transcript={transcript}
      goBack={goBack}
      isEdited={isEdited}
      onEditTitle={onEditTitle}
      onEditBody={onEditBody}
      onSave={onSave}
    />
  )
}

export default ViewTranscript
