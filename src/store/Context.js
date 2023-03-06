import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (conferenceName) => { },
    removeFavourite: (conferenceId) => { },
    isFavourite: (conferenceId) => { }
})

export function FavouriteContextProvider(props) {
    const [favourites, setFavourites] = useState([]);

    function addFavouriteHandler(conferenceName) {
        setFavourites(
            prevConference => {
                return prevConference.concat(conferenceName);
            }
        );
    }

    function removeFavouriteHandler(conferenceId) {
        setFavourites(
            prevConference => {
                return prevConference.filter(
                    (conf) => {
                        return (conferenceId !== conf.id)
                    }
                )
            }
        )
    }

    function isFavouriteHandler(conferenceId) {
        return favourites.some(
            conference => conference.id === conferenceId
        )
    }

    const favouriteContextObj = {
        favourites: favourites,
        totalFavourites : favourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        isFavourite: isFavouriteHandler
    }

    return (
        <FavouriteContext.Provider value={favouriteContextObj}>
            {props.children}
        </FavouriteContext.Provider>
    )
}





export default FavouriteContext