import { doc, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null)
  const [isPending, setIsPending] = useState(null)

  useEffect(() => {
    setIsPending(true)
    const docRef = doc(db, c, id)

    const unsub = onSnapshot(docRef, (doc) => {
      setIsPending(false)
      setDocument(doc.data(), doc.id)
    })

    return () => unsub()
  }, [c, id])

  return { document, isPending }
}
