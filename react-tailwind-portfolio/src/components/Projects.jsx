import ProjectItem from "./ProjectItem"
import propertyImg from "../assets/property.png"
import cryptoImg from "../assets/crypto.png"
import netflixImg from "../assets/netflix.png"
import twithcImg from "../assets/twitch.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
        <p className="text-center py-8">Elit cupidatat ut dolor pariatur labore pariatur ad ad. Ipsum nostrud sit reprehenderit in velit proident. Sunt aliquip minim anim magna. Voluptate duis sint cupidatat duis sunt labore culpa aliqua sit proident laboris dolore. Elit tempor proident sit veniam commodo duis ex aliqua laboris aliquip voluptate non. Fugiat dolore ullamco ullamco aliquip veniam do anim esse fugiat magna sint nulla incididunt.</p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={cryptoImg} title="Crypto App" />
            <ProjectItem img={propertyImg} title="Property App" />
            <ProjectItem img={netflixImg} title="Netflix App" />
            <ProjectItem img={twithcImg} title="Twitch App" />
        </div>
    </div>
  )
}

export default Projects
