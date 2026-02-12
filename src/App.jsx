import { useState } from 'react'

import './App.css'

import CardsGrid from './assets/pages/CardGrid'
import BannerCard from './assets/pages/BannerCard'  
import VideoPage from './assets/pages/VideoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VideoPage/>
{/*    
    <BannerCard/>
   
    <CardsGrid/> */}
    
    </>
  )
}

export default App
