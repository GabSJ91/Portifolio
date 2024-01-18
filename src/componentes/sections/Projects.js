
import Styles from './Project.module.css'
import Card from '../elements/Cards'
import img1 from '../../image/Projects/img1.svg'
import img2 from '../../image/Projects/img1.svg'

function projects() {
    return (
        <div className={Styles.projects} id="Project">
            <h1>  Projetos </h1>
             <Card
                 img={img1}
                 title="Conversor de medidas"
                 tech="HTML, CSS e JS"
                 description="Pagina simples e rapida para conversões de medidas."
                 repo="https://github.com/GabSJ91/Conversor-de-Medidas"
                 site="https://converter-medidas.netlify.app/"
             /> 
             <Card
                 img={img2}
                 title="LP - DNC"
                 tech="HTML, CSS"
                 description="Landigpage do site DNC."
                 repo="https://github.com/GabSJ91/Desafio-DNC?tab=readme-ov-file"
                 site="https://flourishing-capybara-5e3b32.netlify.app/"
             /> 
             <Card
                 img={img2}
                 title="Bootcamp DNC"
                 tech="HTML, CSS"
                 description="Landigpage do site Bootcamp DNC."
                 repo="https://github.com/https://github.com/GabSJ91/Bootcamp-DNC?tab=readme-ov-file/Desafio-DNC?tab=readme-ov-file"
                 site="https://https://b00tcamp-dnc.netlify.app/-capybara-5e3b32.netlify.app/"
             /> 
            
        </div>
    )
}

export default projects