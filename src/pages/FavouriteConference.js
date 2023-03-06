import React from 'react';
import { useContext } from 'react';
import FavouriteContext from '../store/Context';
import ConferenceList from '../components/conferences/ConferenceList';

const FavouriteConference = () => {
    const FavCtx = useContext(FavouriteContext);

    let content;
    if (FavCtx.totalFavourites === 0) {
        content = <h1>No Favourite Item</h1>
    }
    else {
        content = <ConferenceList conferences={ FavCtx.favourites } />
    }
    return (
        <div>
            Favourites :
            {content}
        </div>
    )
}

export default FavouriteConference