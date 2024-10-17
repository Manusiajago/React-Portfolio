import profilePicture from '../assets/profile3.png';
import '../styles/Header.css';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
           <div className="header-jumbotron">
                <img src={profilePicture}></img>
                <h3>Egal Assegaf</h3>
                <p>Programmer - Workout - enthusiastic historian</p>
                <div className="socialMedia">
                    <a href="#Instagram"><FaInstagram /></a>
                    <a href="#Github"><FaGithub /></a>
                    <a href="#Facebook"><FaFacebook /></a>
                    <a href="#Threads"><FaThreads /></a>
                </div>
           </div>

        </header>
    )
}

export default Header