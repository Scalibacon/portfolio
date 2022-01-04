import styles from '../../styles/Project.module.scss';
import { FiGithub } from 'react-icons/fi';

const Project = () => {
  return (
    <article className={styles.project}>      
      <main>
        <h3>Projeto do Tetheus</h3>

        <p>Um projeto teste só pra eu ver como fica nessa bagaça. Neste projeto foram utilizadas as seguintes tecnologias: Node.js no lado do servidor, React juntamente com HTML e CSS no lado do cliente, com o auxílio do fabuloso TypeScript.</p>

        <a>
          <FiGithub size={"1.3rem"}/>GitHub
        </a>
      </main>     
    </article>
  )
}

export default Project;