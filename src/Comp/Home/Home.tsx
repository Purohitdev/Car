import Footer from '../Footer'
import Nav from '../Nav'
import About from './About'
import AdvantageSection from './AdvantageSection'
import FeaturedCarsSection from './Car'
import ComingSoon from './Coming'
import ContactSection from './Contact'
import FaqSection from './Faq'
import FranchiseSection from './Frach'
import Hero from './Hero'
import LeadershipCard from './LeadershipCard'
import Plans from './Plan'
import PopularBrands from './PopularBrands'
import PopularCarBrands from './PopularCar'
import Search from './Serch'
import Service from './Service'
import TestimonialsSection from './Test'
import { FaWhatsapp } from "react-icons/fa";


function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <Search />
            <About />
            <AdvantageSection />
            <ComingSoon />
            <Service />
            <FeaturedCarsSection />
            {/* <PopularCarModels/> */}
            <PopularCarBrands/>
            <PopularBrands/>
            <Plans />
            <LeadershipCard />
            <FaqSection />

            <TestimonialsSection />
            <FranchiseSection/>

            <ContactSection />
            <Footer />
            <a
                href="https://wa.me/8432312345" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
            >
               <FaWhatsapp className="w-6 h-6" />


            </a>

        </div>
    )
}

export default Home