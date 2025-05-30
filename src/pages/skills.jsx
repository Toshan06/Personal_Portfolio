import Navbar from "../components/navbar"
import Footer from "../components/footer"
import HeroImg2 from "../components/heroImg2"
import SkillShow from "../components/skillShow"

function Skills(){
    return <div>
        <Navbar/>
        <HeroImg2 heading='SKILLS' text='The skills I developed in the journey'/>
        <SkillShow/>
        <Footer/>
    </div>
}

export default Skills