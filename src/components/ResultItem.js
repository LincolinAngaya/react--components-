import React from 'react'

const ResultItem = (props) => {
  return (
    <div>
       <h2>{props.name}</h2>
      <p>Price: {props.price}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}

export default ResultItem;
