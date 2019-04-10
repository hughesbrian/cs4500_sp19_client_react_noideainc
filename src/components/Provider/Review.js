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
            {renderStar(review.rating)}
        <br/>
        <div>{review.review}</div>
        <br/>
        <hr/>
    </div>

export default Review