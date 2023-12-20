import React from 'react'

const CustomerReview = ({ reviewerName, title, text}) => {

  return (
    <article className="site-reviews">
        <h2>{reviewerName}</h2>
        <h3>{title}</h3>
        <p>
            {text}
        </p>
    </article>
  )
}

export default CustomerReview