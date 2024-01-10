import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import firebase from 'firebase';
import '@/components/fire'

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default function Index() {
  const [message, setMessage] = useState('')
  const [btncaption, setBtncaption] = useState("Login")
  const router = useRouter()

  const googlelogin = (
    <div>
      <img src="google.svg" alt="Google Logo" width="24px" height="24px" />
      <span className="m-3">Login</span>
    </div>
  )

  const login = () => {
    auth.signInWithPopup(provider).then(result => {
      setMessage('logined: ' + result.user.displayName)
      setBtncaption('Logout')
    }).catch((error) => {
      setMessage('not logined.')
      console.log("error:" + error)
      setBtncaption(googlelogin)
    })
  }

  useEffect(() => {
    if (auth.currentUser !== null) {
      setMessage('logined: ' + auth.currentUser.displayName)
      setBtncaption('Logout')
    } else {
      setMessage("Please login with your Google account...")
      setBtncaption(googlelogin)
    }
  }, [])

  const logout = () => {
    auth.signOut()
    setMessage('Please login with your Google account...')
    setBtncaption(googlelogin)
  }

  const doLogin = () => {
    if (auth.currentUser === null) {
      login()
    } else {
      logout()
    }
  }

  const goRealTimeTest = () => {
    if (auth.currentUser !== null) {
      router.push('/varification/realtimetest')
    } else {
      alert("先にログインしてください。");
    }
  };

  const goSquareBoxTest = () => {
    if (auth.currentUser !== null) {
      router.push('/varification/squareboxtest')
    } else {
      alert("先にログインしてください。");
    }
  };

  const goPanelTest = () => {
    if (auth.currentUser !== null) {
      router.push('/varification/panel')
    } else {
      alert("先にログインしてください。");
    }
  };

  return (
    <div>
      <Layout header="Next.js" title="Auth Test.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <button className="btn btn-primary" onClick={doLogin}>{btncaption}</button>
          <hr />
          <h5>Acquire data and update display in real time</h5>
          <button className="btn btn-warning" onClick={goRealTimeTest}>Realtime Test</button>
          <hr />
          <h5>Display a square box anywhere</h5>
          <button className="btn btn-warning" onClick={goSquareBoxTest}>SquereBox Test</button>
          <hr />
          <h5>Split the screen with panels</h5>
          <button className="btn btn-warning" onClick={goPanelTest}>Panel Test</button>
        </div>
      </Layout>
    </div>
  )
}