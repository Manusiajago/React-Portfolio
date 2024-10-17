import '../styles/About.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const About = () => {
    return (
        <section id="about">
            <div className="wrapper"> 
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, animi error ducimus fugit, illo temporibus accusantium sapiente dicta eveniet blanditiis culpa at velit rerum inventore dignissimos vel nobis dolorem voluptates.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat beatae qui, accusantium ad dignissimos necessitatibus, quae iusto excepturi totam ab eum. Placeat, exercitationem corrupti laborum at veniam alias minima est molestias recusandae nemo quasi dignissimos maiores eum error doloribus.</p>
                <h4>Skills Tech & Programming Languages</h4>
                <div className="skills">
                     <FaHtml5 /><FaCss3 /><IoLogoJavascript /> <FaReact /><FaGit /><FaNodeJs /><FaPhp /> <FaPython />
                </div>
            </div>
        </section>
    )
}


export default About;