import { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import firebase from 'firebase'
import '@/components/fire'
import { useRouter } from 'next/router'

const db = firebase.firestore()
const auth = firebase.auth()

export default function RealTimeTest() {
  const mydata = []
  const [data, setData] = useState(mydata);

  const [message, setMessage] = useState('logined: ' + auth.currentUser?.displayName)
  const router = useRouter()

  const goBack = () => {
    router.push('/varification')
  }

  useEffect(() => {
    if (auth.currentUser != null) {
      const unsubscribe = db.collection('mydata').onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((document) => {
          const doc = document.data()
          return (
            <tr key={document.id}>
              <td>{document.id}</td>
              <td>{doc.name}</td>
              <td>{doc.mail}</td>
              <td>{doc.age}</td>
            </tr>
          )
        });
        setData(newData);
      });
      return () => unsubscribe();
    } else {
      setMessage('not logined.')
    }
  }, [message])

  return (
    <div>
      <Layout header="Next.js" title="RealTime Test.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <table className="table bg-white text-left">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
          <hr />
          <button className="btn btn-primary" onClick={goBack}>Go Back</button>
        </div>
      </Layout>
    </div>
  )
}