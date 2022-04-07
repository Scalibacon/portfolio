import { FaSteam, FaLinkedin, FaFacebookSquare, FaGithub, FaYoutube } from 'react-icons/fa';
import styles from '../../styles/Contact.module.scss';

const Contact = () => {
  return (
    <main className={styles.contactForm}>
      <section className={styles.socials}>
        
        <a href="https://www.linkedin.com/in/matheus-f-nascimento/" target="_blank" rel="noreferrer">
          <FaLinkedin size="2rem"/>
          <figcaption>/matheus-f-nascimento</figcaption>
        </a>

        <a href="https://web.facebook.com/matheus.ferreiradonascimento/" target="_blank" rel="noreferrer">
          <FaFacebookSquare size="2rem"/>
          <figcaption>Matheus Ferreira</figcaption>
        </a>

        <a href="https://github.com/Scalibacon" target="_blank" rel="noreferrer">
          <FaGithub size="2rem"/>
          <figcaption>/scalibacon</figcaption>
        </a>

        <a href="https://www.youtube.com/channel/UCC5yrRtwpkoCRBoAHkvJsgg" target="_blank" rel="noreferrer">
          <FaYoutube size="2rem"/>
          <figcaption>Matheus Ferreira</figcaption>
        </a>              

        <a href="https://steamcommunity.com/id/scalibacon/" target="_blank" rel="noreferrer">
          <FaSteam size="2rem"/>
          <figcaption>/scalibacon</figcaption>
        </a>
        
      </section>

      <form>
        <input type="text" placeholder="Digite seu nome" required className={styles.name}/>
        <input type="email" placeholder="Digite seu e-mail" required className={styles.email}/>
        <input type="text" placeholder="Digite seu telefone" required className={styles.phone}/>                
        <textarea placeholder="Digite sua mensagem para mim >.<" required className={styles.text}></textarea>
        <button>Enviar e-mail</button>
      </form>
    </main>
  )
}

export default Contact;