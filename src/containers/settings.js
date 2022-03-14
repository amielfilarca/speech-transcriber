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
  const {
    signOut,
    isValidating: isSignOutValidating,
    error: errorSignOut,
  } = useSignOut()
  const {
    linkToGoogleAccount,
    data,
    isValidating: isLinkToGoogleAccountValidating,
    error: errorLinkToGoogleAccount,
  } = useLinkToGoogleAccount()

  const isValidating = useMemo(
    () =>
      isSignOutValidating ||
      isLinkToGoogleAccountValidating,
    [isSignOutValidating, isLinkToGoogleAccountValidating]
  )

  const error = useMemo(
    () => errorSignOut || errorLinkToGoogleAccount,
    [errorSignOut, errorLinkToGoogleAccount]
  )

  useEffect(() => {
    if (!data) return
    setUser(data.user)
  }, [setUser, data])

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
