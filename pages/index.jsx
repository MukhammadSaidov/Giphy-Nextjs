import Head from 'next/head'
import React from 'react'
import HomeContainer from '../containers/HomeContainer';

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Giphy | App</title>
        <meta name="description" content="This is a Giphy search app. Find giphys " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <HomeContainer data={props.dogGiphys.data} />
    </div>
  )
}


export async function getStaticProps() {
  let dogGiphys = await fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=BrNVZ4CPcI6f5sKol2xwxz3PMLPD07Xj&limit=10')
  dogGiphys = await dogGiphys.json()
  return {props: {dogGiphys}}
}