import Footer from '@/src/components/footer/footer'

import Hero from '@/src/components/about/hero'
import React from 'react'
import OverviewSection from '@/src/components/about/OverviewSection'
import InvestigatorsSection from '@/src/components/about/InvestigatorsSection'
import AchievementsSection from '@/src/components/about/AchievementsSection'
import AdvisoryBoardSection from '@/src/components/about/AdvisoryBoardSection'

const page = () => {
  return (
    <section>
      <Hero />
      <OverviewSection />
      <InvestigatorsSection />
      <AchievementsSection />
      <AdvisoryBoardSection />
      <Footer></Footer>
    </section>
  )
}

export default page
