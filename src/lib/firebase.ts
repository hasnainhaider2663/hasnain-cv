import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyC0FFst_LssQq0LKNwT3Uy8dy1sQnOL6pM',
  authDomain: 'hasnain-cv.firebaseapp.com',
  projectId: 'hasnain-cv',
  storageBucket: 'hasnain-cv.firebasestorage.app',
  messagingSenderId: '735222813492',
  appId: '1:735222813492:web:755b5127169e8d025b8b61',
  measurementId: 'G-S2416LL0EB',
}

const app = initializeApp(firebaseConfig)

export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null
