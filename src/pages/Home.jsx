import React from 'react'
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import CocktailContainer from "../components/cocktailContainer"

export default function Home() {
    return (
        <>
            <Header/>
            <SearchBar/>
            <CocktailContainer/>
        </>
    )
}
