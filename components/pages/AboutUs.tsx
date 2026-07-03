import AboutHero from '@/components/ui/about-us/sections/Hero'
import PastorProfile from '@/components/ui/about-us/sections/PastorProfile'
import Philosophy from '@/components/ui/about-us/sections/Philosophy'
import Affiliation from '@/components/ui/about-us/sections/Affiliation'

const AboutUs = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <PastorProfile />
      <Philosophy />
      <Affiliation />
    </div>
  )
}

export default AboutUs