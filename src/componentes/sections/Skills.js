import Styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import figma from '../../image/skills/figma.svg'



function Skills(){
    return (
        <div className={Styles.skill} id="Skills">

            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt='ERROR'/>
                <img src={html} alt='ERROR'/>
                <img src={css} alt='ERROR'/>
                <img src={react} alt='ERROR'/>
                <img src={figma} alt='ERROR'/>
            </div>
        </div>
    )
}

export default Skills