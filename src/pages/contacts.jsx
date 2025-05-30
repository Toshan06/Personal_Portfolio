import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroImg2 from "../components/heroImg2"
import Form from "../components/form"

function Contacts(){
    return <div>
        <Navbar/>
        <HeroImg2 heading='CONTACT ME' text='LETS HAVE A CHAT...'/>
        <Form/>
        <Footer/>
    </div>
}

export default Contacts
