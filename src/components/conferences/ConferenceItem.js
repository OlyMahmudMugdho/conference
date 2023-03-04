const ConferenceItem = ({ posts }) => {
    return (
        <div>
            {
                posts.map(
                    (post) =>

                        <div key={post.id}>
                            <h4 >
                                {post.title}
                            </h4>
                            <p>
                                {post.body}
                            </p>
                        </div>
                )}
        </div>
    )
}

export default ConferenceItem