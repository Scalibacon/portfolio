import Header from "../components/Header";
import styles from '../styles/Home.module.scss';
import Nerdola from '../assets/nerdola.svg';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <header>
          <figure className={styles.intro}>
            <img src={Nerdola}/>
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
          <input type="range" min="1" max="5" />
          <ul className={styles.coments}>
            <blockquote>Menózin é bala nesses bagulho de tecnologia aí, sehloko família</blockquote>
            <hr/>
            <cite>Marcão da ZL</cite>
          </ul>
        </section>        
      </main>
    </>
  )    
}

export default Home;