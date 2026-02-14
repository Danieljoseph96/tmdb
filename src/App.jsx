import { useState, useEffect } from 'react'
import Access_Token,{Api_Key, movie} from './assets/config/keys'   // make sure this is correct

import './App.css'

import CardsGrid from './assets/pages/CardGrid'
import BannerCard from './assets/pages/BannerCard'  
import VideoPage from './assets/pages/VideoPage'

function App() {

  const [data, setData] = useState(null)


  return (
    <>
      <VideoPage />
       <BannerCard />
      <CardsGrid data={data} /> 
    </>
  )
}

export default App
