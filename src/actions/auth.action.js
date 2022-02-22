import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId:
    '449715880728-mle7tsnuqt6ktlfgfnbmp3r5nm08cqcv.apps.googleusercontent.com',
})

const signInWithGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn()
  const googleCredential =
    auth.GoogleAuthProvider.credential(idToken)
  const user = await auth().signInWithCredential(
    googleCredential
  )
  return user
}

const signOutWithGoogle = async () => {
  const user = await GoogleSignin.signOut()
  return user
}

const signOut = async () => {
  const user = await auth().signOut()
  return user
}

export { signInWithGoogle, signOut, signOutWithGoogle }
