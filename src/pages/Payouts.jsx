import React from 'react'
import Partner from '../components/Partner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import PayoutBanner from '../components/PayoutBanner'
import Statistics from '../components/Statistics'

const Payouts = ({mode}) => {
  return (
    <main>
        <div className="px-6 max-md:px-4">
        <PayoutBanner mode={mode} />
      </div>
      <Statistics mode={mode}/>
      <div className="px-6 max-md:px-4">
      <Partner mode={mode} />
        <Reviews mode={mode} />
      </div>
      <Faqs mode={mode} />
      <JoinDiscord mode={mode}/>
    </main>
  )
}

export default Payouts
