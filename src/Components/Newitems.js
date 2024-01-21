import React, { Component } from 'react'

export class Newitems extends Component {
    render() {
        let{title, description, imageUrl, newsUrl, publishedAt, publishedDate}=this.props;
        return (
            <div>
                <div className="card m-4">
                    <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/01/18/1600x900/372048746_0-7_1627035512332_1705561479907.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">AT {publishedAt} ON {publishedDate}</p>
                        <p className="card-text mt-0"></p>
                        <a rel="noopener" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">View Details</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Newitems