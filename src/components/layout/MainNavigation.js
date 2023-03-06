import { useContext } from "react"
import { Link } from "react-router-dom"
import FavouriteContext from "../../store/Context"

const MainNavigation = () => {
    const FavCtx = useContext(FavouriteContext);
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Conferences </Link>
                        </li>
                        <li>
                            <Link to={"/new-conference"}>New Conference</Link>
                        </li>
                        <li>
                            <Link to={"/favourite-conferences"}>Favourite Conference <span>{ FavCtx.totalFavourites }</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavigation