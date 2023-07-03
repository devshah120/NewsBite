import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App =()=> {
  let pagesize=9
  let apikey=process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<News key="home" pageSize={pagesize} country="in" category="general" news="Top Headlines" api={apikey}/>}/>
          <Route path="/business" element={<News key="business" pageSize={pagesize} country="in" category="business" news="Top Business News"api={apikey} />}/>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pagesize} country="in" category="entertainment" news="Top Entertainment News"api={apikey} />}/>
          <Route path="/general" element={<News key="general" pageSize={pagesize} country="in" category="general" news="Top General News"api={apikey} />}/>
          <Route path="/health" element={<News key="health" pageSize={pagesize} country="in" category="health" news="Top Health News"api={apikey} />}/>
          <Route path="/science" element={<News key="science" pageSize={pagesize} country="in" category="science" news="Top Science News"api={apikey} />}/>
          <Route path="/sports" element={<News key="sports" pageSize={pagesize} country="in" category="sports" news="Top Sports News"api={apikey} />}/>
          <Route path="/technology" element={<News key="technology" pageSize={pagesize} country="in" category="technology" news="Top Technology News"api={apikey} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;