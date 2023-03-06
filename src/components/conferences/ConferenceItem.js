import { useContext } from "react";
import FavouriteContext from "../../store/Context";

const ConferenceItem = (props) => {
    const favouriteCtx = useContext(FavouriteContext);
    const isFavItem = favouriteCtx.isFavourite(props.id);

    function toggleFavourite () {
        if (isFavItem) {
            favouriteCtx.removeFavourite(props.id)
        }
        else {
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                body: props.body
            });
        }
    }

    return (
        <div>

            <div key={props.id}>
                <h4 >
                    {props.title}
                </h4>
                <p>
                    {props.body}
                </p>
                <button onClick={ toggleFavourite }>
                    {isFavItem ? 'Remove from favourite' : 'To Favourite'}
                </button>
            </div>
        </div>
    )
}

export default ConferenceItem