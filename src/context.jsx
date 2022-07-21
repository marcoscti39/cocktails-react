import React,{useState, useEffect, useContext} from 'react'



const GlobalContext = React.createContext()

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


export default function ContextProvider({children}) {
    const [cocktailsData, setCocktailsData] = useState([])
    const [searchedCocktail, setSearchedCocktail] = useState('')
    const [cocktailsId, setCocktailsId] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedCocktail}`


    useEffect(()=>{
        const getCockTails = async () =>{
            try{
                const response = await fetch(url)
                const data = await response.json()
                setCocktailsData(data)

            } catch(error){
                console.log('test')
            }
            
            
        }
        getCockTails()
    },[searchedCocktail])
    return (
        <GlobalContext.Provider  
        value={{
            cocktailsData,
            setCocktailsData,
            inputValue,
            setInputValue,
            setSearchedCocktail,
            searchedCocktail,
            cocktailsId,
            setCocktailsId
        }}>
            {children}

        </GlobalContext.Provider>
            
    )
}
