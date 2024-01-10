import { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import firebase from 'firebase'
import '@/components/fire'
import { useRouter } from 'next/router'

const db = firebase.firestore()
const auth = firebase.auth()

const menuItems = [
  { label: "メニュー1", url: "#1" },
  { label: "メニュー2", url: "#2" },
  { label: "メニュー3", url: "#3" },
  { label: "メニュー4", url: "#4" }
];

export default function SquareBoxTest() {
  const squarebox = []
  const [data, setData] = useState(squarebox);
  const [message, setMessage] = useState('')
  const router = useRouter()

  const goBack = () => {
    router.push('/varification')
  }

  useEffect(() => {
    if (auth.currentUser != null) {
      setMessage('logined: ' + auth.currentUser.displayName)
    } else {
      setMessage('not logined.')
    }
  }, [])

  return (
    <div>
      <Layout header="Next.js" title="SquareBox Test.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <div className="container">
            <div className="row">
              <div className="col-6 h-50">
                <div className="row">
                  <div className="col border border-primary">
                    <div className="tab-content">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="#asub" id="tab1" className="nav-link active" role="tab" data-bs-toggle="tab" aria-selected="true">Aサブ</a>
                        </li>
                        <li className="nav-item">
                          <a href="#bsub" id="tab2" className="nav-link" role="tab" data-bs-toggle="tab" aria-selected="false">Bサブ</a>
                        </li>
                        <li className="nav-item">
                          <a href="#recordingcenter" id="tab3" className="nav-link" role="tab" data-bs-toggle="tab" aria-selected="false">収録センター</a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="asub" className="tab-pane active" role="tabpanel" aria-labelledby="tab1">
                          <img src="../google.svg" className="img-fluid" alt="google logo" width="100px" height="100px" />
                        </div>
                        <div id="bsub" className="tab-pane" role="tabpanel" aria-labelledby="tab2">
                          <img src="../next.svg" className="img-fluid" alt="image" width="100px" height="100px" />
                        </div>
                        <div id="recordingcenter" className="tab-pane" role="tabpanel" aria-labelledby="tab3">
                          <img src="../vercel.svg" className="img-fluid" alt="next.js" width="100px" height="100px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col border border-primary">
                    左下パネル
                  </div>
                </div>
              </div>
              <div className="col-6 border border-primary">
                右側パネル
              </div>
            </div>
          </div>
          <hr />
          <button className="btn btn-primary" onClick={goBack}>Go Back</button>
        </div>
      </Layout>
    </div>
  )
}