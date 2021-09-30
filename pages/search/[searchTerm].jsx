import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function searchTerm(props) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Search {router.query.searchTerm}</title> 
                <link rel="icon" href=".favicon.icon" />
                <link rel="stylesheet" href="/styles.css" />
                <link name="description" content={props.giphys.map((each,) => each.title )}/>
            </Head>
            <h1>Search {router.query.searchTerm}</h1>
            <Link href="/">
                <button className="btn">Home</button>
            </Link>
            <Link href="/search/JohnWick">
                <button className="btn">John Wick</button>
            </Link>
            <Link href="/search/Khaby Lame">
                <button className="btn">Khaby Lame</button>
            </Link>
            <Link href="/search/CS GO">
                <button className="btn">CS GO</button>
            </Link>
            <Link href="/search/Asus Zenbook">
                <button className="btn">Asus Zenbook</button>
            </Link>
            <div className="giphy-search-results-grid">
            {props.giphys.map((item, idx)=> {
                return (
                    <div key={idx}>
                        <h3>{item.title}</h3>
                        <img src={item.images.original.url} alt={item.title} />
                    </div>
                )
            })}
            </div>
        </div>
    );
};


export async function getServerSideProps(context) {
    let searchTerm = context.query.searchTerm;
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=BrNVZ4CPcI6f5sKol2xwxz3PMLPD07Xj&limit=10`)
    giphys = await giphys.json()
    return {props: { giphys: giphys.data }}
}