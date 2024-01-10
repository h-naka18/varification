import Layout from '../components/layout'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('/data.json', fetcher)
  // const { data } = useSWR('/data.json')

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {data.message}
          </h5>
          <table className="table table-dark">
            <thead className="">
              <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((value, key) => (
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
