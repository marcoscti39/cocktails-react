import React from 'react'

import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router'

export default function CkDetails() {
    const {cocktailsData} = useGlobalContext()
    const params = useParams()
    
    
    const cocktailChosen = cocktailsData.drinks?.find((item) => item.idDrink === params.cocktailId)

    return (
        <>
            <Link to='/' className="drink-details-btn back-home">back home</Link>
            <h1 className="drink-details-title">{cocktailChosen && cocktailChosen.strDrink}</h1>

            <main className="drink-details-main">
                {cocktailChosen && [cocktailChosen]?.map((item,index) => {
                    const {
                        strCategory,
                        strDrink,
                        strGlass,
                        strDrinkThumb,
                        strInstructions,
                        strAlcoholic,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strIngredient11,
                        strIngredient12,
                        strIngredient13,
                        strIngredient14,
                        strIngredient15

                    } = item
                    return (
                        <div className="drink-details-wrapper" key={index}>
                            <img className="drink-details-img" src={strDrinkThumb} alt="" />
                            <section className="drink-details-info-wrapper">
                                <div className="drink-details-name">
                                     <span>name:</span>
                                      {strDrink} 
                                </div>
                                <div className="drink-details-category">
                                    <span>category:</span>
                                    {strCategory}
                                </div>
                                <div className="drink-details-info">
                                    <span>info:</span>
                                    {strAlcoholic}
                                </div>
                                <div className="drink-details-glass">
                                    <span>glass:</span>
                                    {strGlass}
                                </div>
                                <div className="drink-details-instructions">
                                    <span>instructions:</span>
                                    {strInstructions}
                                </div>
                                <div className="drink-details-ingridients">
                                    <span>ingridients:</span>
                                    {strIngredient1 && (`${strIngredient1}`) }
                                    {strIngredient2 && (` ${strIngredient2}`) }
                                    {strIngredient3 && (` ${strIngredient3}`) }
                                    {strIngredient4 && (` ${strIngredient4}`) }
                                    {strIngredient5 && (` ${strIngredient5}`) }
                                    {strIngredient6 && (` ${strIngredient6}`) }
                                    {strIngredient7 && (` ${strIngredient7}`) }
                                    {strIngredient8 && (` ${strIngredient8}`) }
                                    {strIngredient9 && (` ${strIngredient9}`) }
                                    {strIngredient10 && (` ${strIngredient10}`) }
                                    {strIngredient11 && (` ${strIngredient11}`) }
                                    {strIngredient12 && (` ${strIngredient12}`) }
                                    {strIngredient13 && (` ${strIngredient13}`) }
                                    {strIngredient14 && (` ${strIngredient14}`) }
                                    {strIngredient15 && (` ${strIngredient15}`) }
                                   

                                </div>
                            </section>

                        </div>
                    )
                })}
                
            </main>
            
        </>
    )
}
