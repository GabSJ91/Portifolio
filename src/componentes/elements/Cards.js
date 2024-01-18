import Styles from './Card.module.css'
import ButtonB from './ButtonB'


function Card({site, img, title, tech, description, repo }) {
    return(
        <div className={Styles.Card}>
            <a href={site}><img src={img} alt='ERROR'/></a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
             <ButtonB text='Acesse o Repositório' link={repo}></ButtonB>
            </section>
        </div>
    )
}

export default  Card