import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

import UsersContainer from './UsersContainer'
import UserDetailsContainer from './UserDetailsContainer'
import ServiceCategoriesContainer from './ServiceCategoriesContainer'
import ServiceCategoryDetailsContainer from './ServiceCategoryDetailsContainer'
import ServiceAnswerDetailsContainer from './ServiceAnswerDetailsContainer'
import ServiceQuestionsContainer from './ServiceQuestionsContainer'
import ServicesContainer from './ServicesContainer'
import ServiceDetailsContainer from './ServiceDetailsContainer'
import FAQContainer from './FAQContainer'
import FAQDetails from './FAQDetails'
import FAQAnswers from './FAQAnswers'
import FAQAnswerDetails from './FAQAnswerDetails'
import ServiceAnswers from './ServiceAnswers'
import ServiceQuestionDetails from './ServiceQuestionDetails'
import ServiceAnswerDetails from './ServiceAnswerDetails'
import ServiceProviderNavigator from "./SearchProviders/ServiceProviderNavigator";
import ServiceProviderNavigatorContainer from "./SearchProviders/ServiceProviderNavigatorContainer"

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
                    <Link to="/admin/services">Services</Link>
                	<br/>
                	<Link to="/admin/services/1">Service Details</Link>
                	<br/>
                    <Link to="/admin/faqs/page/0/count/10">FAQs</Link>
                    <br/>
                    <Link to="/admin/faqs/1">FAQ Details</Link>
                    <br/>
                    <Link to="/admin/faq-answers">FAQ Answers</Link>
                    <br/>
                    <Link to="/admin/faq-answers/1">FAQ Answer Details</Link>
                    <br/>
                    <Link to="/admin/provider-search/">Provider Search</Link>
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
                    <Route path="/admin/users" exact component={UsersContainer}/>
                    <Route path="/admin/users/:id" exact component={UserDetailsContainer}/>
                    <Route path="/admin/service-questions" exact component={ServiceQuestionsContainer}/>
                    <Route path="/admin/service-questions/:id" exact component={ServiceQuestionDetails}/>
                    <Route path="/admin/services" exact component={ServicesContainer}/>
                	<Route path="/admin/services/:id" exact component={ServiceDetailsContainer}/>
                    <Route path="/admin/faqs/page/:page/count/:count" exact component={FAQContainer}/>
                    <Route path="/admin/faqs/:id" exact component={FAQDetails}/>
                    <Route path="/admin/faq-answers" exact component={FAQAnswers}/>
                    <Route path="/admin/faq-answers/:id" exact component={FAQAnswerDetails}/>
                    <Route path="/admin/service-answers" exact component={ServiceAnswers}/>
                    <Route path="/admin/service-answers/:id" exact component={ServiceAnswerDetailsContainer}/>
                    <Route path="/admin/provider-search" exact component = {ServiceProviderNavigatorContainer}/>
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

/*
'123','House Cleaners',NULL
'234','Exterior Painters',NULL
'321','Math Tutoring',NULL
'345','Handymen',NULL
'432','Piano Lessons',NULL
'456','Photographers',NULL
'543','Personal Training',NULL
'567','Makeup Artists',NULL
'678','Dog Groomers',NULL
'789','Dog Trainers',NULL
'890','Pet Sitters',NULL
'902','CPR Training',NULL
'912','CPR Training',NULL
'922','CPR Training',NULL
'942','CPR Training',NULL
'952','Exterior Painters',NULL
'962','CPR Training',NULL
'972','CPR Training',NULL
'982','CPR Training',NULL
'992','CPR Training',NULL
'1002','CPR Training',NULL
'1012','Interior Painters',NULL
'1022','Interior Painters',NULL
'1032','Interior Painters',NULL
'1042','Interior Painters',NULL
'1052','Interior Painters',NULL
'1072','CPR Training',NULL
'1082','CPR Training',NULL
'1092','CPR Training',NULL
'1102','CPR Training',NULL
'1112','123',NULL
'1122','',NULL
'1132','','ssdsds'
'1142','','CHDEA'

'1','Tutorings'
'2','Home'
'12','Weddings'
'22','Events'
'32','Wellness'
'42','Lessons'
*/
