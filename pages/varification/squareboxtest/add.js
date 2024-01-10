import { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import firebase from 'firebase'
import { useRouter } from 'next/router'
import '@/components/fire'

const db = firebase.firestore()
const auth = firebase.auth()

export default function Add() {
  const [message, setMessage] = useState('add SquareBox')
  const [id, setId] = useState('')
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [border, setBorder] = useState(0)
  const [bordercolor, setBorderColor] = useState('')
  const [backgroundcolor, setBackgroudColor] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (auth.currentUser === null) {
      router.push('/varification/squareboxtest')
    }
  }, [])

  const onChangeId = (e) => {
    setId(e.target.value)
  }

  const onChangeLeft = (e) => {
    setLeft(e.target.value)
  }

  const onChangeTop = (e) => {
    setTop(e.target.value)
  }

  const onChangeWidth = (e) => {
    setWidth(e.target.value)
  }

  const onChangeHeight = (e) => {
    setHeight(e.target.value)
  }

  const onChangeBorder = (e) => {
    setBorder(e.target.value)
  }

  const onChangeBorderColor = (e) => {
    setBorderColor(e.target.value)
  }

  const onChangeBackgroundColor = (e) => {
    setBackgroudColor(e.target.value)
  }

  const doAction = (() => {
    const ob = {
      left: left,
      top: top,
      width: width,
      height: height,
      border: border,
      bordercolor: bordercolor,
      backgroundcolor: backgroundcolor,
    }
    db.collection('squarebox').doc(id)
      .set(ob).then(ref => {
        router.push('/varification/squareboxtest')
      })
  });

  const goBack = () => {
    router.push('/varification/squareboxtest')
  };

  return (
    <div>
      <Layout header="Next.js" title="Create data.">
        <div className="alert alert-primary text-center">
          <div className="d-flex">
            <h5 className="mb-4 flex-grow-1">{message}</h5>
            <button className="btn btn-primary" onClick={doAction}>Add</button>
          </div>
          <div className="text-left">
            <div className="form-group">
              <label>Id:</label>
              <input type="text" onChange={onChangeId} className="form-control" />
            </div>
            <div className="form-group">
              <label>Left:</label>
              <input type="number" onChange={onChangeLeft} className="form-control" />
            </div>
            <div className="form-group">
              <label>Top:</label>
              <input type="number" onChange={onChangeTop} className="form-control" />
            </div>
            <div className="form-group">
              <label>Width:</label>
              <input type="number" onChange={onChangeWidth} className="form-control" />
            </div>
            <div className="form-group">
              <label>Height:</label>
              <input type="number" onChange={onChangeHeight} className="form-control" />
            </div>
            <div className="form-group">
              <label>Border:</label>
              <input type="number" onChange={onChangeBorder} className="form-control" />
            </div>
            <div className="form-group">
              <label>BorderColor:</label>
              <input type="text" onChange={onChangeBorderColor} className="form-control" />
            </div>
            <div className="form-group">
              <label>BackgroundColor:</label>
              <input type="text" onChange={onChangeBackgroundColor} className="form-control" />
            </div>
          </div>
          <button className="btn btn-primary" onClick={goBack}>Go Back</button>
        </div>
      </Layout>
    </div>
  )
}