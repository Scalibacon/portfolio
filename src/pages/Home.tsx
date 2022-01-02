import Header from "../components/Header";
import styles from '../styles/Home.module.scss';
import Nerdola from '../assets/nerdola.svg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
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
      </main>
    </>
  )    
}

export default Home;