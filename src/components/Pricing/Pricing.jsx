import React from "react"
import Back from "./back"
import PriceCard from "./PricingCard"
import "./prince.css"

import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing