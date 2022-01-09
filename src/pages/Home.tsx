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
            >
              Interrompemos este resumo para exibir uma entrevista exclusiva com ScaliDev. Poderia começar nos dizendo o que você faz da vida?
            </ChatBox>

            <ChatBox
              author="scalidev"
              isFromLeft={true}
            >
              Olá a todos! Eu sou um desenvolvedor de sistemas e manjo um pouco de <b>Front End</b> e de <b>Back End</b>. Gosto bastante de trabalhar com a stack JavaScript, por isso acabei me desenvolvendo um pouco mais em <b>Node.js</b>, <b>React</b> e <b>TypeScript</b>.
            </ChatBox>

            <ChatBox
              author="interviewer"
            >
              Agora uma curiosidade que muitas pessoas têm é sobre sua experiência nessa área de tecnologia. Poderia nos contar um pouco sobre a sua trajetória?
            </ChatBox>

            <ChatBox
              author="scalidev"
              isFromLeft={true}
            >
              Bom, eu comecei nessa área quando caí de paraquedas num curso técnico de informática da ETEC em 2015. Fui pegando gosto pela coisa e acabei fazendo um curso superior em <b>Análise e Desenvolvimento de Sistemas</b> na FATEC Zona Leste. Agora tô trabalhando na área, mas aberto pra novas oportunidades.
            </ChatBox>

            <ChatBox
              author="interviewer"
            >
              E em quais tipos de projeto você já trabalhou? O que você costuma fazer?
            </ChatBox>

            <ChatBox
              author="scalidev"
              isFromLeft={true}
            >
              Já trabalhei em diversos projetos diferentes, indo desde <strong>dashboards e relatórios</strong> até <b>jogos de cartas online</b>. Eu costumo fazer o que precisa ser feito, mas eu gosto bastante de fazer aplicações que vão além daquele CRUD padrão. Pode ser um joguinho, um clone mais simples de uma aplicação ou qualquer coisa que envolva alguma <b>doideira</b>, desde que tenha algum desafio novo que me ajude a <strong>evoluir</strong>.
            </ChatBox>
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
              repository="https://github.com/Scalibacon/Neverland-Heroes-Java"
              imgUrl="https://raw.githubusercontent.com/Scalibacon/Neverland-Heroes-Java/master/WebContent/img/board.jpg"
            >
              Um jogo de cartas estratégico desenvolvido para ser jogado no navegador. É possível montar um baralho e jogar contra uma IA de qualidade duvidosa. Existem mais de 100 cartas diferentes programadas individualmente. Nesse projeto usei Java e SQL Server no backend e HTML, CSS e JavaScript no frontend.
            </Project>

            <Project
              title="Web Service OCR + TTS"
              repository="https://github.com/Scalibacon/webservice-ocr-tts/"
              imgUrl="https://raw.githubusercontent.com/Scalibacon/webservice-ocr-tts/master/client/public/assets/client_screenshot.png"
            >
              Um web service, feito como parte do meu TCC, capaz de receber imagens, reconhecer e extrair o texto presente nelas e retornar o texto para o client. Também foi desenvolvido um protóripo de client para consumir o web service e utilizar um TTS para ler o texto extraído para o usuário. Utilizei Node.js e o OCR Tesseract no lado do web service e React para fazer o protótipo de client.
            </Project>
          </main>
        </section>           
      </main>
    </>
  )    
}

export default Home;