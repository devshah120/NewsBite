import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=ca3234321b7f4226a0c6d57783199c58&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,totalResults:parseData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ca3234321b7f4226a0c6d57783199c58&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
       page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ca3234321b7f4226a0c6d57783199c58&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
       page: this.state.page + 1,
      articles: parseData.articles,
    });
  };
  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center">Today's Top Headlines</h1>
        <div className="container row">
          {this.state.articles.map((elements) => {
            return (
              <div className="col my-2 md-3" key={elements.url}>
                <NewsItem
                  title={elements.title ? elements.title.slice(0, 99) : ""}
                  description={
                    elements.description
                      ? elements.description.slice(0, 120)
                      : elements.title
                  }
                  imageUrl={
                    !elements.urlToImage
                      ? "http://cdn.wionews.com/sites/default/files/2023/06/30/363366-indian-ocean.jpeg"
                      : elements.urlToImage
                  }
                  sourceUrl={elements.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button "
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)}
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
