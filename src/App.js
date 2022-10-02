import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress,setProgress] = useState(10)
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key='general' message='general'/>}/>
        <Route exact path="/business" element={<News setProgress={setProgress} key='business' message='business'/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' message='entertainment'/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} key='health' message='health'/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} key='science' message='science'/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' message='sports'/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' message='technology'/>}/> 
        </Routes>
        </Router>
      </div>
    )
}
export default App;