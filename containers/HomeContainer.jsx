import SearchForm from '../components/SearchForm/SearchForm'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const HomeContainer = (props) => {
    const [formInputs, setFormInputs] = useState()
    const [searchTerm, setSearchTerm] = useState('cats')
    const [searchResults, setSearchResults] = useState([])

    const handleInputs = (e) => {
        let {value} = e.target
        setFormInputs(value)
        console.log(formInputs);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${formInputs}&api_key=BrNVZ4CPcI6f5sKol2xwxz3PMLPD07Xj&limit=10`)
        giphys = await giphys.json()
        setSearchResults(giphys.data)
        setSearchTerm(formInputs)
    }

    useEffect(() => {
        setSearchResults(props.data)
    }, [formInputs]);

    return (
        <>
            <h1>Giphy Search App: {searchTerm}</h1>
            <SearchForm name='searchTerm' actionHandler={handleInputs}  handleSubmit={handleSubmit} />
            <br /><br />
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
            <Link href="/search/Orphanage">
                <button className="btn">Orphanage</button>
            </Link>
            <div className="giphy-search-results-grid">
            {searchResults.map((item, idx) => {
                return (
                <div key={idx}>
                    <h3>{item.title}</h3>
                    <img src={item.images.original.url} alt={item.title} />
                </div>
                )
             })}
            </div>
        </>
    )
}

export default HomeContainer;