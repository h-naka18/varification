import { useState } from 'react'
import Layout from '../components/layout'

export default function Home({data}) {
  const [datas, setData] = useState(data)

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {datas.message}
          </h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {datas.data.map((value, key) => (
                <tr key={key}>
                  <th>{value.name}</th>
                  <th>{value.mail}</th>
                  <th>{value.age}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}