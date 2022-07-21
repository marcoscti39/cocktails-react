import React from 'react'

import { useGlobalContext } from '../context'

import '../styles/searchBar.css'

export default function SearchBar() {
    const {setSearchedCocktail, searchedCocktail} = useGlobalContext()
    return (
        <section className="cocktail-search">
            <label className="cocktail-label" htmlFor="cocktail">Search Your Favorite Cocktail</label>
            <input onChange={(e) => setSearchedCocktail(e.target.value)} value={searchedCocktail} className="cocktail-input" type="search" id="cocktail" />
            
        </section>
    )
}
