import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.footer}>
            
            <ul>
                <li className={styles.anima}><a href='https://www.instagram.com/sr.g4bsj/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/gabriel-augusto-san-juan/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/GabSJ91'><FaGithub size={30}/></a></li>
            </ul>
            <p>gkva91@gmail.com</p>
            <p>Gabriel Augusto © 2024</p>
        </div>
    )
}

export default Footer