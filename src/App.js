import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pagesize=9
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<News key="home" pageSize={this.pagesize} country="in" category="general" news="Top Headlines" api={this.apikey}/>}/>
          <Route path="/business" element={<News key="business" pageSize={this.pagesize} country="in" category="business" news="Top Business News"api={this.apikey} />}/>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pagesize} country="in" category="entertainment" news="Top Entertainment News"api={this.apikey} />}/>
          <Route path="/general" element={<News key="general" pageSize={this.pagesize} country="in" category="general" news="Top General News"api={this.apikey} />}/>
          <Route path="/health" element={<News key="health" pageSize={this.pagesize} country="in" category="health" news="Top Health News"api={this.apikey} />}/>
          <Route path="/science" element={<News key="science" pageSize={this.pagesize} country="in" category="science" news="Top Science News"api={this.apikey} />}/>
          <Route path="/sports" element={<News key="sports" pageSize={this.pagesize} country="in" category="sports" news="Top Sports News"api={this.apikey} />}/>
          <Route path="/technology" element={<News key="technology" pageSize={this.pagesize} country="in" category="technology" news="Top Technology News"api={this.apikey} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
