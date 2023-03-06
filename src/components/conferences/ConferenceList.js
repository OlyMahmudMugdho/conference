import ConferenceItem from "./ConferenceItem";

import React from 'react'

const ConferenceList = (props) => {
  return (
    <div>
        {
            props.conferences.map(
                (item) => {
                    return (<ConferenceItem key={item.id} id={item.id} title={item.title} body={item.body} />)
                }
            )
}
    </div>
  )
}

export default ConferenceList