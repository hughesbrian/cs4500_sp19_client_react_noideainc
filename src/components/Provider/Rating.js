import React from 'react'

function renderStar(ratingNumber) {
    let stars = [];
    for (let i = 1; i <= ratingNumber && i <= 5; i++) {
        stars.push(<i className="fa fa-star"/>);
    }
    return stars;
}

const Rating = ({score, index}) =>
    <div>
        <div className="row">
            <div className="col-2 text-right">
                {index}&nbsp;
                {renderStar(score)}
            </div>
            <div className="col-8">
                <div class="progress">
                    <div class="progress-bar"
                         role="progressbar"
                         style={{width: `${score}%`}}
                         aria-valuenow="25"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
            <div className="col-2 text-left">
                {score}%
            </div>
        </div>
    </div>

export default Rating