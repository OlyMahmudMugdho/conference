import { useState, useEffect } from "react"
import ConferenceList from "../components/conferences/ConferenceList";
const AllConference = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPost] = useState([]);

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

            for (const key in data) {
              const conference = {
                id: key,
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
  if (isLoading) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <ConferenceList conferences={posts} />
    </div>
  )
}

export default AllConference;