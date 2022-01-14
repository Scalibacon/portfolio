import { Link as ScrollLink } from 'react-scroll';
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/nerdola.svg';
import { FaCog } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { SyntheticEvent, useEffect, useRef } from 'react';

const Header = () => {
  const nav = useRef<HTMLDivElement>(null);
  const blockground = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  useEffect( () => {

    hamburger.current?.addEventListener("click", toggleMenu);
    hamburger.current?.addEventListener("touchstart", toggleMenu);

    blockground.current?.addEventListener("click", toggleMenu);
    blockground.current?.addEventListener("touchstart", toggleMenu);

    return () => {
      hamburger.current?.removeEventListener("touchstart", toggleMenu);
      hamburger.current?.removeEventListener("click", toggleMenu);

      blockground.current?.removeEventListener("click", toggleMenu);
      blockground.current?.removeEventListener("touchstart", toggleMenu);
    }

  }, []);

  function toggleMenu(event: SyntheticEvent | any){
    if(event.type === 'touchstart') event.preventDefault();

    nav.current?.classList.toggle(styles.active);
    blockground.current?.classList.toggle(styles.active);
  }

  return (
    <>
    <div 
      ref={blockground} 
      className={styles.blockground}
    >
    </div>
    <header className={styles.header}>   
      <span ref={hamburger} className={styles.hamburger}>
        <FiMenu        
          size="2.5rem"
        />
      </span>          

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