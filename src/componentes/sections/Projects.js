import Styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'


function Projects() {
    return (
        <div className='projects' id="Project">
            <h1>  Projetos </h1>
             <p>Cards</p>  
            <ButtonB text='Acesse meu repositório' link='https://github.com/GabSJ91?tab=repositories'/>
        </div>
    )
}

export default Projects