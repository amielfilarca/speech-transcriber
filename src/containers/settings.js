import { useToast } from 'native-base'
import React, {
  useContext,
  useEffect,
  useMemo,
} from 'react'

import {
  useLinkToGoogleAccount,
  useSignOut,
} from '../actions/auth.action'
import { AuthContext } from '../contexts/auth.context'
import SettingsScreen from '../screens/settings.screen'

const Settings = () => {
  const { user, setUser } = useContext(AuthContext)
  const { signOut, ...signOutResponse } = useSignOut()
  const {
    linkToGoogleAccount,
    ...linkToGoogleAccountResponse
  } = useLinkToGoogleAccount()

  const isValidating = useMemo(
    () =>
      signOutResponse.isValidating ||
      linkToGoogleAccountResponse.isValidating,
    [signOutResponse, linkToGoogleAccountResponse]
  )

  const error = useMemo(
    () =>
      signOutResponse.error ||
      linkToGoogleAccountResponse.error,
    [signOutResponse, linkToGoogleAccountResponse]
  )

  useEffect(() => {
    if (!linkToGoogleAccountResponse.data) return
    setUser(linkToGoogleAccountResponse.data.user)
  }, [setUser, linkToGoogleAccountResponse])

  const toast = useToast()

  const toastError = useMemo(
    () => ({
      id: error?.code,
      title: 'Error',
      status: 'error',
      description: error?.message,
      placement: 'top',
      mx: 5,
    }),
    [error]
  )

  useEffect(() => {
    if (error && toast.isActive(error?.code)) {
      toast.close(error)
    }

    if (error && !toast.isActive(error?.code)) {
      toast.show(toastError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <SettingsScreen
      isValidating={isValidating}
      linkToGoogleAccount={linkToGoogleAccount}
      signOut={signOut}
      user={user}
    />
  )
}

export default Settings
