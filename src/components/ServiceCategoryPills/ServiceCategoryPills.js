import React from 'react'

const ServiceCategoryPills = ({serviceCategories, updateScore}) => {
    const listServiceCategory = serviceCategories.map( (item, index) => {
        let icon = <i className="fa fa-bookmark"></i>
        let iconRule = {
            "Pets": <i className="fa fa-paw"/>,
            "Wellness": <i className="fa fa-heart"/>,
            "Business": <i className="fa fa-briefcase"/>, 
            "Events": <i className="fa fa-calendar"></i>
        }
        if (item.title in iconRule) {
            icon = iconRule[item.title]
        }
        return (
            <li onClick={() => updateScore(item)} className="nav-item" key={index}>
                <a className="nav-link btn-lg text-center" href="/services">
                    {icon}
                    <br/>
                    {item.title}
                </a>
            </li>
        )
    } )

    return (<ul className="nav nav-pills nav-fill wd-shadow wd-padding-20">
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-home"/>
                <br/>
                Home
            </a>
        </li>
        {listServiceCategory}
        <li className="nav-item">
            <a className="nav-link btn-lg text-center"
               href="/services">
                <i className="fa fa-ellipsis-h"/>
                <br/>
                More
            </a>
        </li>
    </ul>)
}

export default ServiceCategoryPills