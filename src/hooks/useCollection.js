import { useState, useEffect } from 'react'

//firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    let ref = collection(db, c)

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.empty) {
          setError('No Recipes to load')
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id })
          })
          setDocuments(results)
          setIsPending(false)
        }
      },
      (err) => {
        setError(err.message)
        setIsPending(false)
      }
    )

    return () => unsub()
  }, [c])

  return { documents, isPending, error }
}
