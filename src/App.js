import "./App.css";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<News key="home" pageSize={9} country="in" category="general" news="Top Headlines" />}/>
          <Route path="/business" element={<News key="business" pageSize={9} country="in" category="business" news="Top Business News" />}/>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" news="Top Entertainment News" />}/>
          <Route path="/general" element={<News key="general" pageSize={9} country="in" category="general" news="Top General News" />}/>
          <Route path="/health" element={<News key="health" pageSize={9} country="in" category="health" news="Top Health News" />}/>
          <Route path="/science" element={<News key="science" pageSize={9} country="in" category="science" news="Top Science News" />}/>
          <Route path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" news="Top Sports News" />}/>
          <Route path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" news="Top Technology News" />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
