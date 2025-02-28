import React from 'react'
// import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import WorkBanner from '../components/WorkBanner'
import MasterTrading from '../components/MasterTrading'
import TradeConfidence from '../components/TradeConfidence'
import OneStep from '../components/OneStep'
import Challenge from '../components/Challenge'
import CareerTrading from '../components/CareerTrading'
import Rules from '../components/Rules'
import ComparePlan from '../components/ComparePlan'

const HowitWorksPage = ({mode}) => {
  return (
    <main>
      <div className="px-6 max-md:px-4">
        <WorkBanner mode={mode}/>
      </div>
      <MasterTrading mode={mode}/>
      <CareerTrading mode={mode}/>
      <Rules mode={mode}/>
      <ComparePlan mode={mode}/>
      <Challenge mode={mode}/>
      <OneStep mode={mode}/>
      <div className="px-6 max-md:px-4">
      <TradeConfidence mode={mode}/>
        <Reviews mode={mode} />
      </div>
      <Faqs mode={mode} />
      <JoinDiscord mode={mode}/>
    </main>
  )
}

export default HowitWorksPage
