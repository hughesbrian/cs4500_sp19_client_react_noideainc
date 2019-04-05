import React from 'react'
const Review = ({review}) =>
    <div>
        <h4>{review.reviewer.firstName} {review.reviewer.lastName}</h4>
        <br/>
        <div>{review.review}</div>
        <br/>
        <hr/>
    </div>

export default Review