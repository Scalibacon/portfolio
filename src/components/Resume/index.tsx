import styles from '../../styles/Resume.module.scss';
import TetheusBombado from '../../assets/tetheus-bombado-censurado.jpg';
import TetheusSombra from '../../assets/tetheus-bombado-shadow.png';

const Resume = () => {
  return (
    <div className={styles.resume}>
      <section className={styles.upperHalf}>
        <figure>
          
          <img src ={TetheusBombado} alt="Tetheuzão"/>
          <img src ={TetheusSombra} alt="silhuetheus"/>
        </figure>
        <div>
          <fieldset>
            <legend>NOME</legend>
            <p>Matheus F. Nascimento</p>
          </fieldset>

          <fieldset>
            <legend>APELIDO</legend>
            <p>Scali | Scalibacon</p>
          </fieldset>

          <fieldset>
            <legend>PROFISSÃO</legend>
            <p>FullStack Developer</p>
          </fieldset>

          <fieldset>
            <legend>STACK</legend>
            <p>React | Node.js | TypeScript | SQL</p>
          </fieldset>

          <fieldset>
            <legend>IDADE</legend>
            <p>23 anos</p>
          </fieldset>

          <fieldset>
            <legend>ALTURA</legend>
            <p><span>1,65m</span> 3,70m</p>
          </fieldset>
        </div>
      </section>

      <p>* 50% de chances de a foto ter sido adulterada</p>
      <section className={styles.bottomHalf}>
        <fieldset>
          <legend>DESCRIÇÃO</legend>
          <p>É formado em Análise e Desenvolvimento de Sistemas pela FATEC Zona Leste. Trabalha com programação desde 2021, mas desenvolve coisas desde 2015. Já participou de diversos tipos de projetos, de dashboards até jogos de cartas online. Curte desenvolver coisas fora do CRUD padrão, preferindo programar jogos simples, clones de outras aplicações ou qualquer doideira que traga algum conhecimento novo. Gosta de jogar e assistir animes. Costuma ser bem animado e <span>preguiçoso</span>.</p> 
        </fieldset>
      </section>      
    </div>
  )
}

export default Resume;