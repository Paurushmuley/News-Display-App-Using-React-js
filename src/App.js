import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News category={'general'} key="general" />} />
            <Route exact path="/Business" element={<News category={'business'} key="business" />} />
            <Route exact path="/Entertainment" element={<News category={'entertainment'} key="entertainment" />} />
            <Route exact path="/General" element={<News category={'general'} key="general" />} />
            <Route exact path="/Health" element={<News category={'health'} key="health" />} />
            <Route exact path="/Science" element={<News category={'science'} key="science" />} />
            <Route exact path="/Sports" element={<News category={'sports'} key="sports" />} />
            <Route exact path="/Technology" element={<News category={'technology'} key="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
