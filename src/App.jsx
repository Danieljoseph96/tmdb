import { useState, useEffect } from 'react'
import Access_Token,{movieurl} from './assets/config/keys'   // make sure this is correct

import './App.css'

import CardsGrid from './assets/pages/CardGrid'
import BannerCard from './assets/pages/BannerCard'  
import VideoPage from './assets/pages/VideoPage'

function App() {

  const [data, setData] = useState(null)

  const movieurl1 =  movieurl

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Access_Token}`
      }
    };

    fetch(movieurl, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData(json)
      })
      .catch(err => console.error(err));

  }, [])

  return (
    <>
      <VideoPage />
      {/* <BannerCard />
      <CardsGrid data={data} /> */}
    </>
  )
}

export default App
