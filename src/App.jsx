

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'


import VideoPage from './assets/pages/VideoPage'
import HomePage from './assets/pages/HomePage'

function App() {




  return (
 <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="video/:id" element={<VideoPage/>}/>


  
      
    </Routes>
 </Router>
  )
}

export default App
