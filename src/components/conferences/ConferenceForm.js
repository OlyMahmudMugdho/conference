import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const ConferenceForm = () => {
    const history = useNavigate();
    const title = useRef();
    const postBody = useRef();

    const sendData = (event) => {
        event.preventDefault();
        console.log(title.current.value);
        console.log(postBody.current.value);

        fetch("https://conference-ebf03-default-rtdb.firebaseio.com/conference.json", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    title: title.current.value,
                    body: postBody.current.value
                }
            )
        })
        .then(
            () => 
            history("../", {replace : true})
        )
            .catch(
                error => console.log(error)
            )
    }

    return (
        <div>
            <form onSubmit={sendData}>
                <label htmlFor='title'>
                    Title
                </label>
                <input name="title" type="text" ref={title} /> <br />

                <label htmlFor='body'>Body</label> <br />
                <textarea name="body" id="post-body" cols="30" rows="10" ref={postBody}>
                </textarea> <br />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ConferenceForm