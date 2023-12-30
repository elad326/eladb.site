import React from 'react'

const ExampleWork = ({ imgUrl, title }) => {
  return (
    <div>
        <img src={imgUrl} alt="עבודה לדוגמא"/>
        <h4>{title}</h4>
    </div>
  )
}

export default ExampleWork