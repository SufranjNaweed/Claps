import React, {createContext, useState, useEffect} from 'react';
import Toast from 'react-native-simple-toast';

export const FavoriteContext = createContext();

const FavoriteContextProvider = (props) => {
    const [favoritesGifs, setFavoriteGifs] = useState([]);

    const toggleToFavorites = (typeOfMedia, data) => {
        const dataItem = data.item;
        if(typeOfMedia === "gifs"){
            const findMyMedia = favoritesGifs.filter((favGif) => favGif.id === dataItem.id)
            if (findMyMedia.length === 0){
                setFavoriteGifs([dataItem, ...favoritesGifs]); 
                Toast.show('📼 This gif has been add to your favorite ! 🚀', Toast.LONG, Toast.BOTTOM);
            }
            if (findMyMedia.length > 0){
                const newFavoritesGifs = favoritesGifs.filter((favGif) => favGif.id !== dataItem.id);
                setFavoriteGifs([...newFavoritesGifs]);
                Toast.show('📼 This gif has been remove from your favorite 😥', Toast.SHORT, Toast.BOTTOM);
            }   
        }
    }

    return (
        <FavoriteContext.Provider 
            value={{
                favoritesGifs : favoritesGifs,
                toggleToFavorites : toggleToFavorites
            }}
        >
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;