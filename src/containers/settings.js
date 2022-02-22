import React from 'react'

import { useSignOut } from '../actions/auth.action'
import SettingsScreen from '../screens/settings.screen'

const Settings = () => {
  const { signOut, isValidating } = useSignOut()

  return (
    <SettingsScreen
      signOut={signOut}
      isValidating={isValidating}
    />
  )
}

export default Settings
