import React from 'react'

function renderStar(ratingNumber) {
    let stars = [];
    for (let i = 1; i <= ratingNumber && i <= 5; i++) {
        stars.push(<i className="fa fa-star"/>);
    }
    return stars;
}

const Review = ({review}) =>
    <div>
        <h4>{review.title}</h4>
        <h6>{review.reviewerName}</h6>
        {renderStar(review.rating)}
        <br/>
        <div>{review.review}</div>
        <br/>
        <div>{review.date}</div>
        <br/>
        <div className="alert alert-secondary" role="alert">
            {review.reply}
        </div>
        <hr/>
    </div>

export default Review