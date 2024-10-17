import {useState} from 'react';
import '../styles/Navbar.css';
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    const tampilMenu = () => {
        if(statusTampil === ''){
            setStatusTampil('tampil');
        } else {
            setStatusTampil('');
        }
    }
  return (
  
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="#">Egal Assegaf</a>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == '' ? (<TiThMenu />) : (  <RiCloseLargeFill />)
                }
                
              
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar