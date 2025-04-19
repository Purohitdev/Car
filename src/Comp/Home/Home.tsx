import Footer from '../Footer'
import Nav from '../Nav'
import About from './About'
import FeaturedCarsSection from './Car'
import ContactSection from './Contact'
import FaqSection from './Faq'
import Hero from './Hero'
import Plans from './Plan'
import Search from './Serch'
import Service from './Service'
import TestimonialsSection from './Test'

function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <Search/>
            <About/>
            <Service/>
            <FeaturedCarsSection/>
            <Plans/>
            <FaqSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <Footer/>

        </div>
    )
}

export default Home