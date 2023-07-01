import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,sourceUrl } = this.props;
    return (
      <div className="container" style={{ width: "33rem", height:"100%" }}>
        <div className="card" style={{ width: "33rem", height:"100%" }} >
          <img src={imageUrl} style={{height: "300px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
