import { Link as ScrollLink } from 'react-scroll';
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/nerdola.svg';
import { FaCog } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { SyntheticEvent, useRef } from 'react';

const Header = () => {
  const nav = useRef<HTMLDivElement>(null);
  const blockground = useRef<HTMLDivElement>(null);

  const toggleMenu = (event: SyntheticEvent) => {
    if(event.type === 'touchstart') event.preventDefault();

    nav.current?.classList.toggle(styles.active);
    blockground.current?.classList.toggle(styles.active);
  }

  return (
    <>
    <div 
      ref={blockground} 
      className={styles.blockground}
      onClick={ event => toggleMenu(event) }
    >
    </div>
    <header className={styles.header}>       
      <FiMenu 
        size="2.5rem" 
        className={styles.hamburger}
        onClick={ event => toggleMenu(event) }
      />

      <figure>
        <img src={logo} alt="logo"/>
      </figure>

      <nav ref={nav}>
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
          <li><a href='#ovo'>Curiosidades</a></li>
        </ul>
      </nav>

      <span className={styles.settings}><FaCog size="2rem"/></span>
    </header>
    </>
    
  )
}

export default Header;