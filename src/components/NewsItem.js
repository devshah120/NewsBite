import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl,author,time,source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{height:"300px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span class="badge bg-secondary">{source}</span></h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">By {author} Last Updated On {new Date(time).toDateString()}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem