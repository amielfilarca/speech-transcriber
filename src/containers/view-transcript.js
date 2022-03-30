import {
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Keyboard, Share } from 'react-native'

import { useTranscript } from '../actions/firestore.action'
import { AuthContext } from '../contexts/auth.context'
import { TranscriptContext } from '../contexts/transcript.context'
import ViewTranscriptScreen from '../screens/view-transcript.screen'
import { parsePayload } from '../utils'

const ViewTranscript = () => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const { user } = useContext(AuthContext)
  const route = useRoute()
  const transcript = route.params.transcript
  const { data, isValidating, mutate } = useTranscript(
    user,
    transcript
  )
  const { updateTranscriptAsync } = useContext(
    TranscriptContext
  )
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!data) return
    setTitle(data.title)
    setBody(data.body)
  }, [data])

  const onEditTitle = (title) => setTitle(title)
  const onEditBody = (body) => setBody(body)

  const isEdited = useMemo(() => {
    if (!data) return false
    if (title !== data.title) return true
    if (body !== data.body) return true
    return false
  }, [data, title, body])

  const onSave = useCallback(async () => {
    setIsSaving(true)
    Keyboard.dismiss()
    const payload = parsePayload({
      ...data,
      title,
      body,
    })
    await updateTranscriptAsync(payload)
    await mutate()
    setIsSaving(false)
  }, [updateTranscriptAsync, data, title, body, mutate])

  const onExport = useCallback(() => {
    Share.share({ message: data.body })
  }, [data])

  return (
    <ViewTranscriptScreen
      goBack={goBack}
      isEdited={isEdited}
      isSaving={isSaving}
      isValidating={isValidating}
      transcript={data}
      onEditBody={onEditBody}
      onEditTitle={onEditTitle}
      onExport={onExport}
      onRefresh={mutate}
      onSave={onSave}
    />
  )
}

export default ViewTranscript
