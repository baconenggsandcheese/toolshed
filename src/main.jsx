import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//Import The Pages you want to go to
import Tools from './routes/Tools'
import Tool_1 from './routes/Tool_1'
import About from './routes/About'
import Tool_2 from './routes/Tool_2'
import Tool_3 from './routes/Tool_3'
import Tool_4 from './routes/Tool_4'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tools" element={<Tools />} />
      <Route path="/about" element={<About />} />
      <Route path="/tool_1" element={<Tool_1 />} />
      <Route path="/tool_2" element={<Tool_2 />} />
      <Route path="/tool_3" element={<Tool_3 />} />
      <Route path="/tool_4" element={<Tool_4 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
