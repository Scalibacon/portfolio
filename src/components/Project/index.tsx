import styles from '../../styles/Project.module.scss';
import { FiGithub } from 'react-icons/fi';
import { ReactNode } from 'react';

type ProjectProps = {
  title: string,
  repository: string,
  imgUrl: string,
  children: ReactNode
}

const Project = (props: ProjectProps) => {
  return (
    <article className={styles.project}>
      <figure>
        <img src={props.imgUrl} alt="project1"/>
        
      </figure>      
      <main>
        <h3>{ props.title }</h3>

        <p>{ props.children }</p>

        <a href={props.repository} target="_blank" rel='noreferrer'>
          <FiGithub size={"1.3rem"}/>GitHub
        </a>
      </main>     
    </article>
  )
}

export default Project;