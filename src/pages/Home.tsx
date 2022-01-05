import Header from "../components/Header";
import Postit from "../components/Postit";
import Project from "../components/Project";
import styles from '../styles/Home.module.scss';
import Nerdola from '../assets/nerdola.svg';
import { FaQuoteLeft, FaQuoteRight, FaCode } from 'react-icons/fa';
import { FiBookOpen, FiMonitor } from 'react-icons/fi';
import { useState } from "react";
import ChatBox from "../components/ChatBox";


type comment = {
  author: string,
  quote: string
}

const Home = () => {
  const [activeComment, setActiveComment] = useState(1);

  const comments = [
    {
      author: 'Leo Stronda',
      quote: 'C@r#lh#, o maluco é brabo!'
    },    
    {
      author: 'Minha Mãe',
      quote: 'Não fez mais do que sua obrigação, moleque!'
    },
    {
      author: 'Evandson Cruz',
      quote: 'Agora eu sei por que sua cabeça é grande... Só assim pra caber tanta coisa nela.'
    },
    {
      author: 'Meu amigo imaginário',
      quote: 'O Matheus é um cara super divertido, inteligente e manja demais de programação!'
    },
  ] as comment[];

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <header>
          <figure className={styles.intro}>
            <img src={Nerdola} alt="Nerdola"/>
            <figcaption>
              <p>MATHEUS</p>
              <mark>"SCALI"</mark>
              <p>NASCIMENTO</p>
            </figcaption>
          </figure>

          <span className={styles.roles}>
            <span>Desenvolvedor Web </span> 
            <span>Desenvolvedor Full Stack</span>
            <span>Eterno Aprendiz</span>
          </span>
        </header>

        <section className={styles.testimonial}>
          <input 
            type="range" min="0" max="3" 
            value={activeComment}
            onChange={e => setActiveComment(parseInt(e.target.value))}
          />
          <ul className={styles.comments}>
            <li>
              <blockquote>
                <FaQuoteLeft className={styles.openQuote} />
                { comments[activeComment].quote }
                <FaQuoteRight  className={styles.closeQuote}/>
              </blockquote>
              <hr/>
              <cite>{ comments[activeComment].author }</cite>
            </li>
          </ul>
        </section> 

        <section className={styles.resume}>
          <header className={styles.sectionTitle}>
            <FiBookOpen className={styles.icon}/><h2>RESUMÃO</h2>
          </header>
   
          <main>
            <ChatBox
              author="interviewer"
              text="Olá! Eu sou um texto chumbado e estou aqui para testar esse container."
            />

            <ChatBox
              author="scalidev"
              text="Olá! Eu sou um texto chumbado e estou aqui para testar esse container."
              isFromLeft={true}
            />
          </main> 
        </section>  

        <section className={styles.skills}>
          <header className={styles.sectionTitle}>
            <FaCode className={styles.icon}/><h2>Habilidades</h2>
          </header>          

          <main className={styles.wall}>

            <Postit 
              rotation={-7}
              items={[
                'JavaScript ✔',
                'React ✔',
                'Node.js ✔',
                'HTML5 ✔',
                'CSS3 ✔'
              ]} 
              draw={0}
            />

            <Postit
            rotation={5}
              items={[
                'TypeScript 💜',
                'PostgreSQL ✔',
                'TypeORM ✔',
                'Express ✔',
                'Socket.io ✔'
              ]}
            />

            <Postit
              rotation={-6}
              items={[
                'Jest + Supertest ✔',
                'SQL Server ✔',
                'Java ✔',
                'MongoDB ✔',
                'SQLite ✔',
              ]}
              draw={1}
            />

            <Postit
              rotation={4}
              items={[
                'Git ✔',
                'Github ✔',                  
                'API RESTful ✔',
                'JWT ✔',
                'Scrum ✔'
              ]}
            />

            <Postit
              rotation={-3}
              items={[
                'NextJS ✔',
                'JSP ✔',
                'EJS ✔',
                'Multer ✔',
                'SASS ✔',
                'Insomnia ✔'
              ]}
              draw={3}
            />

            <Postit
              title="TO-DO*"
              rotation={-8}
              items={[
                'React Native',
                'CI/CD',
                'Docker',                  
                'AWS',
                'Lambda Functions'              
              ]}
            />

            <Postit
              title="TO-DO*"
              rotation={7}
              items={[
                'Elastic Search',                
                'Apache Kafka',
                'Shell Script',
                'Redis',
                'Electron'        
              ]}
              draw={2}
            />
              
          </main>
          <h4>*Ainda não domino, mas tenho interesse em aprender mais</h4>
        </section> 

        <section className={styles.projects}>
          <header className={styles.sectionTitle}>
            <FiMonitor  className={styles.icon}/><h2>Projetos</h2>
          </header> 

          <main>
            <Project
              title="Neverland Heroes"
              description="Um jogo de cartas estratégico desenvolvido para ser jogado no navegador. É possível montar um baralho e jogar contra uma IA de qualidade duvidosa. Existem mais de 100 cartas diferentes programadas individualmente. Nesse projeto usei Java e SQL Server no backend e HTML, CSS e JavaScript no frontend."
              repository="https://github.com/Scalibacon/Neverland-Heroes-Java"
              imgUrl="https://raw.githubusercontent.com/Scalibacon/Neverland-Heroes-Java/master/WebContent/img/board.jpg"
            />
          </main>
        </section>           
      </main>
    </>
  )    
}

export default Home;