import React from 'react'
const Review = ({review}) =>
    <div>
        <h4>{review.title}</h4>
        <br/>
        <div>{review.review}</div>
        <br/>
        <hr/>
    </div>

export default Review