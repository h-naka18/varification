import Head from 'next/head'
import style from '../styles/Home.module.css'
import Header from './header'
import Footer from './Footer'
import Script from 'next/script'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        />
      <Header header={props.header} />
      <div className="container">
        <h3 className="my-3 text-primary text-center">{props.title}</h3>
        {props.children}
      </div>
      <Footer footer="(c) 2024 System Creates Corporation, All Rights Reserved" />
    </div>
  )
}