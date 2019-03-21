import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import Users from './Users'
import UserDetails from './UserDetails'
import ServiceCategoriesContainer from './ServiceCategoriesContainer'
import ServiceCategoryDetailsContainer from './ServiceCategoryDetailsContainer'
import ServiceQuestions from './ServiceQuestions'
import Services from './Services'
import ServiceDetails from './ServiceDetails'
import FAQs from './FAQs'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'
import ServiceAnswers from './ServiceAnswers'
import ServiceQuestionDetails from './ServiceQuestionDetails'
import ServiceAnswerDetails from './ServiceAnswerDetails'

const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/users">Users</Link>
                    <br/>
                    <Link to="/admin/users/1">User Details</Link>
                    <br/>
                    <Link to="/admin/service-categories">Service Categories</Link>
                    <br/>
                    <Link to="/admin/service-categories/1">Service Category Details</Link>
                    <br/>
                    <Link to="/admin/service-questions">Service Questions</Link>
                    <br/>
                    <Link to="/admin/service-questions/1">Service Question Details</Link>
                    <br/>
                    <Link to="/admin/service-answers">Service Answers</Link>
                    <br/>
                    <Link to="/admin/service-answers/1">Service Answers Details</Link>
                    <br/>
                    <Link to="/admin/service">Services</Link>
                	<br/>
                	<Link to="/admin/service/1">Service Details</Link>
                	<br/>
                    <Link to="/admin/faqs/page/0/count/10">FAQs</Link>
                    <br/>
                    <Link to="/admin/faqs/1">FAQ Details</Link>
                    <br/>
                    <Link to="/admin/faq-answers">FAQ Answers</Link>
                    <br/>
                    <Link to="/admin/faq-answers/1">FAQ Answer Details</Link>
                    <br/>
                    {/* THE CURLY BRACKETS ARE PART OF THE COMMENT. IF REMOVED,
                    THE CODE BELOW WILL BE RUNNED, EVEN THOUGH IT IS COMMENTED OUT.
                    JUST CUT OUT WHAT YOU NEED AND PASTE IT ABOVE.
                <Link to="/admin/services">Services</Link>
                <br/>
                <Link to="/admin/services/1">Service Details</Link>
                <br/>
                <Link to="/admin/service-answers/1">Service Answers Details</Link>

                */}
                </div>
                <div className="col-9">
                    <Route path="/admin/service-categories" exact component={ServiceCategoriesContainer}/>
                    <Route path="/admin/service-categories/:id" exact component={ServiceCategoryDetailsContainer}/>
                    <Route path="/admin/users" exact component={Users}/>
                    <Route path="/admin/users/:id" exact component={UserDetails}/>
                    <Route path="/admin/service-questions" exact component={ServiceQuestions}/>
                    <Route path="/admin/service-questions/:id" exact component={ServiceQuestionDetails}/>
                    <Route path="/admin/service" exact component={Services}/>
                	<Route path="/admin/service/:id" exact component={ServiceDetails}/>
                    <Route path="/admin/faqs/page/:page/count/:count" exact component={FAQs}/>
                    <Route path="/admin/faqs/:id" exact component={FAQDetails}/>
                    <Route path="/admin/faq-answers" exact component={FAQAnswers}/>
                    <Route path="/admin/faq-answers/:id" exact component={FAQAnswerDetails}/>
                    <Route path="/admin/service-answers" exact component={ServiceAnswers}/>
                    <Route path="/admin/service-answers/:id" exact component={ServiceAnswerDetails}/>
                    {/* THE CURLY BRACKETS ARE PART OF THE COMMENT. IF REMOVED,
                    THE CODE BELOW WILL BE RUNNED, EVEN THOUGH IT IS COMMENTED OUT.
                    JUST CUT OUT WHAT YOU NEED AND PASTE IT ABOVE.
                <Route
                    path="/admin/services"
                    exact
                    component={Services}/>
                <Route
                    path="/admin/services/:id"
                    exact
                    component={ServiceDetails}/>
                <Route
                */}
                </div>
            </div>
        </Router>
    </div>

export default Admin
