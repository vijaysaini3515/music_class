import HeroSection from "@/components/Herosection";
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChoose from '@/components/WhyChoose'
import TestimonialCard from '@/components/TestimonialCard'
import UpcomingWeiners from '@/components/UpcomingWebinar'
import Instructor from '@/components/instructor'
import Footer from '@/components/Footer'

const Home =()=>{
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection />
       <FeaturedCourses />
       <WhyChoose/>
       <TestimonialCard/>
       <UpcomingWeiners/>
       <Instructor/>
       <Footer />
       
    </main>
  )
}

export default Home; 