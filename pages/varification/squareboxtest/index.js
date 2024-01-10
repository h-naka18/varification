import { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import firebase from 'firebase'
import '@/components/fire'
import { useRouter } from 'next/router'
import Draggable from 'react-draggable';

const db = firebase.firestore()
const auth = firebase.auth()

export default function SquareBoxTest() {
  const squarebox = []
  const [data, setData] = useState(squarebox);
  const [message, setMessage] = useState('')
  const router = useRouter()

  const area = {
    position: "relative",
    height: "500px",
    border: "3px solid blue",
  }

  const goAdd = () => {
    router.push('/varification/squareboxtest/add')
  }

  const goBack = () => {
    router.push('/varification')
  }

  useEffect(() => {
    if (auth.currentUser != null) {
      setMessage('logined: ' + auth.currentUser.displayName)
      const unsubscribe = db.collection('squarebox').onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((document) => {
          const doc = document.data()
          let s = {
            position: "absolute",
            left: doc.left + "px",
            top: doc.top + "px",
            width: doc.width + "px",
            height: doc.height + "px",
            border: doc.border + "px" + " " + "solid" + " " + doc.bordercolor,
            backgroundColor: doc.backgroundcolor,
          }
          return (
            <Draggable key={document.id} bounds="parent">
              <div id={document.id} style={s}>
                <p>{document.id}</p>
              </div>
            </Draggable>
          )
        });
        setData(newData);
      });
      return () => unsubscribe();
    } else {
      setMessage('not logined.')
    }
  }, [])

  return (
    <div>
      <Layout header="Next.js" title="SquareBox Test.">
        <div className="alert alert-primary text-center">
          <div className="d-flex m-2">
            <h5 className="mb-4 flex-grow-1">{message}</h5>
            <button className="btn btn-primary" onClick={goAdd}>Add</button>
          </div>
          <div className="text-center" style={area}>
            {data}
          </div>
          <hr />
          <button className="btn btn-primary" onClick={goBack}>Go Back</button>
        </div>
      </Layout>
    </div>
  )
}