import Header from "../components/Header";
import Postit from "../components/Postit";
import styles from '../styles/Home.module.scss';
import Nerdola from '../assets/nerdola.svg';
import { FaQuoteLeft, FaQuoteRight, FaCode } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { useState } from "react";

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

          <p>
            Salve, visitante! Meu nome é Matheus Ferreira do Nascimento e eu sou um programador. Mais precisamente um <strong>desenvolvedor web</strong> que manja um pouco de <b>front-end</b> e de <b>back-end</b>. Sou um grande fã da stack <strong>JavaScript</strong> e por conta disto me desenvolvi um pouco mais em <b> Node.js</b>, <b>ReactJS</b> e <b>TypeScript</b>, mas já tive contato com outras linguagens, como Java e PHP.
          </p>

          <p>
            Esse nome <b>"Scali" </b>se originou de um <i>nickname</i> que eu usava em jogos já há bastante tempo, e deste <i> nickname</i> surgiram algumas variações, como Scaliba, Scalibacon e, para a minha versão de desenvolvedor, o <strong>ScaliDev</strong>. Acabei adotando esse apelido pra dar uma diferenciada, já que o meu nome é beeem comum. Só no meu quarto já tem uns 3 com esse nome. Então se você acabar esbarrando com algum Scali por aí, provavelmente sou eu. Ou algum impostor. 🐱‍👤
          </p>

          <p>
            Comecei a trabalhar de fato na área da tecnologia no ano de 2021, mas tenho contato com programação desde o ano de 2015, quando ingressei no curso técnico. Atualmente sou formado em <b>Análise e Desenvolvimento de Sistemas</b> pela Fatec Zona Leste e gosto bastante de programar, principalmente aplicações que vão além daquele CRUD padrão. Pode ser um joguinho online, um clone mais simples de alguma aplicação já existente ou qualquer coisa que envolva alguma <b>doideira</b>, desde que tenha algum desafio novo que me ajude a <strong>evoluir</strong>.
          </p>

        </section>  

        <section className={styles.skills}>
          <header className={styles.sectionTitle}>
            <FaCode className={styles.icon}/><h2>Habilidades</h2>
          </header>

          <section className={styles.wall}>

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
                'Jest ✔',
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
            />

            <Postit
              title="TO-DO"
              rotation={-8}
              items={[
                'CI/CD',
                'Docker',                  
                'AWS',
                'Lambda Functions'              
              ]}
            />

            <Postit
              title="TO-DO²"
              rotation={7}
              items={[
                'Apache Kafka',
                'Shell Script',
                'Elastic Search',
                'Redis'
              ]}
              draw={2}
            />
              
          </section>
        </section>     
      </main>
    </>
  )    
}

export default Home;