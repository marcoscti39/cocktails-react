import React from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

import '.././styles/cocktailItem.css'

export default function CocktailItem({strDrinkThumb, strGlass, strDrink, strAlcoholic, idDrink}) {
    const {setCocktailsId} = useGlobalContext()
    return (
        <article className="drink-container">
            <img className="drink-img" src={strDrinkThumb} alt="" />
            <div className="drink-info-wrapper">
                <h2 className="drink-name" >{strDrink}</h2>
                <strong className="drink-cup-type">{strGlass}</strong>
                <span className="drink-type">{strAlcoholic}</span>
                <Link to={`cocktail/${idDrink}`} onClick={() => setCocktailsId(idDrink)} className="drink-details-btn" >details</Link>
                
            </div>
            
            
        </article>
    )
}
