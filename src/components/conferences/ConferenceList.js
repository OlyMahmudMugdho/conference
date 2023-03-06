import { useState, useEffect } from "react"
import ConferenceItem from "./ConferenceItem";

const ConferenceList = () => {
    const [posts, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(
        
        () => {
            setLoading(true);
            fetch("https://conference-ebf03-default-rtdb.firebaseio.com/conference.json")
                .then(
                    response => {
                        return response.json()
                    }
                )
                .then(
                    (data) => {
                        const conferences = [];

                        for (const key in data){
                            const conference = {
                                id : key,
                                ...data[key]
                            }
                            conferences.push(conference)
                        }

                        setLoading(false);
                        setPost(conferences);
                    }
                )

        },
        []);
    if(isLoading){
        return(
            <div>
                <h2>Loading..</h2>
            </div>
        )
    }
    return (
        <div>
            {posts && posts.map(
                (item) => {
                    return (<ConferenceItem key={item.id} item={item} />)
                }
            )}
        </div>
    )
}

export default ConferenceList