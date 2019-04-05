import React from 'react'
import '../../css/ServiceCategoryTabs.scss'

const ServiceCategoryTabs = ({serviceCategories, updateScore, handleTabClick, services, activeCategory}) => {
    const renderServiceTabs = serviceCategories.map( (item, index) => {
        console.log("HERE!")
        if (item !== activeCategory) {
            console.log("1.")
            return (
                <a className="nav-item nav-link" key={item.title} id={"nav-tab-" + item.title.toLowerCase()} data-toggle="tab" href={"#nav-tab-" + item.title.toLowerCase()}
                    role="tab" aria-controls={"nav-" + item.title.toLowerCase()} aria-selected="false" onClick={() => handleTabClick(item)}>
                    {item.title}</a>
            )
        } else {
            console.log("2.")
            return (
                <a className="nav-item nav-link active" key={item.title} id={"nav-tab-" + item.title.toLowerCase()} data-toggle="tab"
                    role="tab" aria-controls={"nav-" + item.title.toLowerCase()} aria-selected="true" onClick={() => handleTabClick(item)}>
                    {item.title}</a>
            )
        }
        
    } )

    let renderCategoryContent = (activeCategory != null) ? 
                            <div className="tab-pane fade show active" 
                                id={"nav-" + activeCategory.title.toLowerCase()} 
                                role="tabpanel" aria-labelledby={"nav-tab-" + activeCategory.title.toLowerCase()}>
                                { services.map(service => 
                                // <a>{service.title}</a>
                                <div className="card col-4 no-border service-card">
                                    <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card image cap"></img>
                                    <div className="card-body">
                                        <a href="/providers" className="card-text">{service.title}</a>
                                    </div>
                                </div>
                                ) 
                                } 
                            </div> : 
                            <div className="tab-pane fade show active"></div>
        
    
    return(
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {renderServiceTabs}
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                {renderCategoryContent}
            </div>
        </div>
    )
}

export default ServiceCategoryTabs