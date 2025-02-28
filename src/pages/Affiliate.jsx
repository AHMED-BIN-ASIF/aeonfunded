import React from 'react'
import CenterBanner from '../components/CenterBanner'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'
import JoinDiscord from '../components/JoinDiscord'
import Partner from '../components/Partner'
import Educational from '../components/Educational'
import Support from '../components/Support'
import Refferals from '../components/Refferals'

const Affiliate = ({mode}) => {
  return (
    <main>
      <div className="px-6 max-md:px-4">
        <CenterBanner mode={mode} />
      </div>
      <Refferals mode={mode}/>
      <Educational mode={mode}/>
      <Support mode={mode}/>
      <div className="px-6 max-md:px-4">
        <Partner mode={mode} />
        <Reviews mode={mode} />
      </div>
      <Faqs mode={mode} />
      <JoinDiscord mode={mode}/>
    </main>
  )
}

export default Affiliate
