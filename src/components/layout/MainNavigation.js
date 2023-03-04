import { Link } from "react-router-dom"

const MainNavigation = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">All Conferences </a>
                        </li>
                        <li>
                            <Link to={"/new-conference"}>New Conference</Link>
                        </li>
                        <li>
                            <Link to={"/favourite-conferences"}>Favourite Conference</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavigation