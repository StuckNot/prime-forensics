import Footer from '@/src/components/footer/footer'

import Hero from '@/src/components/about/hero'
import React from 'react'
import OverviewSection from '@/src/components/about/OverviewSection'
import AdvisoryBoardSection from '@/src/components/about/AdvisoryBoardSection'
import InvestigatorsSection from '@/src/components/about/InvestigatorsSection'

const page = () => {
  return (
    <section>
      {/* <Hero></Hero> */}
      <OverviewSection />
      <InvestigatorsSection />
      <AdvisoryBoardSection />
      <Footer></Footer>
    </section>
  )
}

export default page
