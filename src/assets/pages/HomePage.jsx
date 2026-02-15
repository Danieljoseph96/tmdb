import React from "react";
import { useState } from "react";
import CardsGrid from './CardGrid'
import BannerCard from './BannerCard'  

export default function HomePage(){
      const [data, setData] = useState(null)


      return(<>
       <BannerCard />
       <CardsGrid data={data} /> 
      </>)

}