import { Link as ScrollLink, scroller } from 'react-scroll';
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/nerdola.svg';
import { FaCog } from 'react-icons/fa';

const Header = () => {

  return (
    <header className={styles.header}>      
      <figure>
        <img src={logo} />
      </figure>

      <nav>
        <ul>
          <li>
            <ScrollLink activeClass={styles.active} to="intro" spy={true} smooth={true} duration={650}>
              Início
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass={styles.active} to="resume" spy={true} smooth={true} duration={650}>
              Resumão
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass={styles.active} to="skills" spy={true} smooth={true} duration={650}>
              Habilidades
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass={styles.active} to="projects" spy={true} smooth={true} duration={650}>
              Projetos
            </ScrollLink>
          </li>
          <li><a href='#'>Curiosidades</a></li>
        </ul>
      </nav>

      <span className={styles.settings}><FaCog size="2rem"/></span>
    </header>
  )
}

export default Header;