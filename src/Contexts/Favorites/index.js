import React, {createContext, useState, useEffect} from 'react';

export const FavoriteContext = createContext();

const FavoriteContextProvider = (props) => {
    const [favoritesGifs, setFavoriteGifs] = useState([]);
    const [favoritesStickers, setFavoriteStickers] = useState([]);

    // useEffect(() => console.log("favoritesGifs useEffect -> ", favoritesGifs), [favoritesGifs]);

    const toggleToFavorites = (typeOfMedia, data) => {
        const dataItem = data.item;
        console.log('---------------------------');

        console.log("dataItem.id -> ", dataItem.id);
        setFavoriteGifs([dataItem, ...favoritesGifs]);
        console.log("toggleToFavorites -> favoritesGifs", favoritesGifs)
        
       
        if(typeOfMedia === "gifs"){

        }

        console.log('---------------------------');
    }

    return (
        <FavoriteContext.Provider 
            value={{
                favoritesGifs : favoritesGifs, 
                favoritesStickers : favoritesStickers, 
                toggleToFavorites : toggleToFavorites
            }}
        >
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;