import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuth = () => {

  const token = useState<string | null>('token', () => null)

  async function signIn(email: string, password: string) {
    return await new Promise<any>((resolve, reject) => {
      const auth = getAuth()
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
            .then((idToken) => {
              token.value = idToken
              return resolve(true)
            })
            .catch((error) => reject(error))
        })
        .catch((error) => reject(error))
    })
  }

  async function signOut() {
    return await new Promise<any>((resolve, reject) => {
      const auth = getAuth()
      firebaseSignOut(auth)
        .then(() => {
          token.value = null
          return resolve(true)
        })
        .catch((error) => reject(error))
    })
  }

  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      if (process.server) return resolve()
      const auth = getAuth()
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken
                resolve()
              })
              .catch((error) => reject(error))
          } else {
            token.value = null
            resolve()
          }
        },
        (error) => reject(error)
      )
    })
  }

  return {
    signIn,
    signOut,
    token,
    checkAuthState,
  }
}
