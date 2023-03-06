import { useContext } from "react";
import FavouriteContext from "../../store/Context";

const ConferenceItem = ({ item }) => {
    const favouriteCtx = useContext(FavouriteContext);
    const isFavItem = favouriteCtx.isFavourite(item.id);
    
    const toggleFavourite = () => {
        if (isFavItem) {
            favouriteCtx.removeFavourite(item.id)
        }
        else {
            favouriteCtx.addFavourite({
                id: item.id,
                title: item.title,
                body: item.body
            });
        }
    }

    return (
        <div>

            <div key={item.id}>
                <h4 >
                    {item.title}
                </h4>
                <p>
                    {item.body}
                </p>
                <button onClick={toggleFavourite}>
                    {(isFavItem) ? 'Remove from favourite' : 'To Favourite'}
                </button>
            </div>
        </div>
    )
}

export default ConferenceItem