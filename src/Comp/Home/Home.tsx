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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12.01 2.01c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.34 4.94L2 22l5.2-1.35a9.96 9.96 0 004.81 1.22c5.52 0 10-4.48 10-10s-4.48-10-10-10zM12 20c-1.39 0-2.75-.36-3.94-1.05l-.28-.16-3.07.8.82-2.98-.18-.3A7.954 7.954 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.29-5.71c-.17-.09-1.01-.5-1.17-.56-.16-.06-.27-.09-.38.09-.11.17-.44.56-.54.67-.1.11-.2.13-.37.04a6.504 6.504 0 01-1.9-1.17 7.01 7.01 0 01-1.3-1.63c-.13-.23-.01-.35.1-.45.1-.1.23-.26.34-.39.11-.13.15-.23.22-.38.07-.15.04-.29-.02-.41-.07-.12-.38-.92-.52-1.26-.14-.34-.28-.29-.38-.29-.1 0-.22-.01-.34-.01s-.41.06-.62.28c-.21.22-.81.8-.81 1.94s.83 2.26.95 2.41c.12.15 1.64 2.5 3.97 3.51.55.24.98.38 1.31.49.55.18 1.05.15 1.44.09.44-.06 1.01-.41 1.15-.81.14-.4.14-.74.1-.81-.05-.07-.15-.11-.32-.2z" />
                </svg>
            </a>

        </div>
    )
}

export default Home