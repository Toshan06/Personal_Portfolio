import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from '../components/hero'
import About from "../components/about"

function Home(){
    return <div className="overflow-hidden">
        <Navbar/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
}

export default Home