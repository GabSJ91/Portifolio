import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
function presentation() {
    return (
        <div className={styles.presentation} id="Presentation">

        <h3><strong>Bem-vindo ao meu Portfólio</strong></h3>
        <h1>Olá, eu sou o Gabriel</h1>
        <p>Sou Gabriel Augusto, um desenvolvedor front-end e Certificado como UI UX Designer.<br/>
         Atualmente, trabalho como repositor na Organização Verdemar,<br/>
         onde organizo os setores e repõe as mercadorias. Antes disso, fui operador no Carrefour, <br/>onde atendi ao público e ofereci
         produtos para fidelizar os clientes. Estou cursando o penultimo<br/>
         ano de bacharelado em Sistemas de Informação na Faculdade de Americana,<br/>
        e também fiz cursos de tecnologia da informação na Escola DNC e de desig na EBAC.
        </p>
        <ButtonA link='https://github.com/GabSJ91' text={'CONECTE-SE COMIGO'}/>
        </div>
    )
}

export default presentation