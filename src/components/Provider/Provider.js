import React from 'react'
import Review from './Review'
import FAQ from './FAQ'
import Rating from './Rating'
import SearchBar from '../SearchBar/SearchBar'

function renderStar(ratingNumber) {
    let stars = [];
    for (let i = 1; i <= ratingNumber && i <= 5; i++) {
        stars.push(<i className="fa fa-star"/>);
    }
    return stars;
}

const Provider = ({provider, history}) =>
    <div>

        <div className="row">
            <div className="col-8">
                <SearchBar/>
            </div>
            <div className="col-3 text-right">
                <a href="#">Sign up</a>
            </div>
            <div className="col-1">
                <a href="#">Log in</a>
            </div>
        </div>
        <br/>
        <br/>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#faqs">FAQs</a>
            </li>
        </ul>
        <div className="row">
            <div className="col-2">
                <a name="about"/>
                <img src="https://picsum.photos/150/150"/>
            </div>
            <div className="col-10">
                <h3>{provider.title}</h3>
                {renderStar(provider.rating)}
                ({provider.reviewsOfMe ? provider.reviewsOfMe.length : ''})
            </div>
        </div>
        <div>
            <br/>
            <p>
                {provider.services[0].description}
            </p>
        </div>
        <hr/>
        <div className="row">
            <div className="col-8">
                <a name="reviews"/>
                <h3>
                    Reviews
                </h3>
            </div>
            <hr/>
        </div>
        <div className="row">
            <div className="col-4">
                {provider.reviewsOfMe.length} reviews
            </div>
        </div>
        <br/>
        <div>
            {
                provider.reviewsOfMe.map(review =>
                    <Review key={review.id} review={review}/>
                )
            }
            <div className="center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                              <span className="page-link">
                                2
                                <span className="sr-only">(current)</span>
                              </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div>
            <hr/>
            <a name="faqs"/>
            <h3>FAQs</h3>
            {
                provider.frequentlyAskedAnswers.map(faq =>
                    <FAQ key={faq.id} faq={faq}/>
                )
            }
        </div>
    </div>

export default Provider