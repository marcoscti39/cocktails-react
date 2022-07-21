import React, {useEffect} from 'react'

import { useGlobalContext } from '../context'

import '.././styles/cocktailContainer.css'
import CocktailItem from './cocktailItem'
import NotFound from './notFound'

export default function CocktailContainer() {
    const [cocktailsNotFound, setCocktailsNotFound] = React.useState(false)
    const {cocktailsData} = useGlobalContext()
    useEffect(() => {
         if(cocktailsData.drinks === null){
            setCocktailsNotFound(true)
        } else{
            setCocktailsNotFound(false)
        }
        
        
    }, [cocktailsData])
   
    return (
        <main className='cocktails-main'>

            {cocktailsNotFound ? <NotFound/>: (
                <>
                    <h1 className='title'>cocktails</h1>
                    <section className="cocktails-container" >
                        {cocktailsData.drinks?.map(item => (
                            <CocktailItem key={item.idDrink} {...item}/>
                        ))}
                    </section>
                </>
            )}
            
            

            
        </main>
    )
}
