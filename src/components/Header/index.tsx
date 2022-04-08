import { Link as ScrollLink } from 'react-scroll';
import styles from '../../styles/Header.module.scss';
import logo from '../../assets/tetheus.svg';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { ChangeEvent, SyntheticEvent, useEffect, useRef } from 'react';

const Header = () => {
  const nav = useRef<HTMLDivElement>(null);
  const blockground = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);
  const themeCheckbox = useRef<HTMLInputElement>(null);

  useEffect( () => {

    function getUserPageTheme(){
      const theme = localStorage.getItem('theme');
      changePageTheme(theme?.toString());
  
      if(theme === 'light'){
        themeCheckbox.current!.checked = true;
      }
    }

    const localHamburger = hamburger.current;
    const localBlockground = blockground.current;

    localHamburger?.addEventListener("click", toggleMenu);
    localHamburger?.addEventListener("touchstart", toggleMenu);

    localBlockground?.addEventListener("click", toggleMenu);
    localBlockground?.addEventListener("touchstart", toggleMenu);
    
    getUserPageTheme();

    return () => {
      localHamburger?.removeEventListener("touchstart", toggleMenu);
      localHamburger?.removeEventListener("click", toggleMenu);

      localBlockground?.removeEventListener("click", toggleMenu);
      localBlockground?.removeEventListener("touchstart", toggleMenu);
    }

  }, []);

  function toggleMenu(event: SyntheticEvent | TouchEvent | MouseEvent){
    if(event.type === 'touchstart') event.preventDefault();

    nav.current?.classList.toggle(styles.active);
    blockground.current?.classList.toggle(styles.active);
  }

  function handleThemeChange(event: ChangeEvent<HTMLInputElement>){
    if(event.target.checked){
      changePageTheme('light');
    } else {
      changePageTheme('dark');
    }
  }  

  function changePageTheme(theme: string = 'dark'){
    if(theme === 'light'){
      document.documentElement.style.setProperty('--background', '245,245,245');
      document.documentElement.style.setProperty('--color', '20,27,31');
    } else 
    if(theme === 'dark'){
      document.documentElement.style.setProperty('--background', '20,27,31');
      document.documentElement.style.setProperty('--color', '255,255,255');
    }
    localStorage.setItem('theme', theme);
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
          size="3.5rem"
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
          <li>
            <ScrollLink activeClass={styles.active} to="contact" spy={true} smooth={true} duration={650}>
              Contato
            </ScrollLink>  
          </li>
        </ul>
      </nav>

      <span className={styles.themeButton}>
        <input type="checkbox" id="theme" ref={themeCheckbox} onChange={e => handleThemeChange(e)}></input>
        <label htmlFor="theme">
          <BsFillMoonStarsFill className={styles.moon} size="1.2rem"/>
          <BsFillSunFill className={styles.sun} size="1.2rem"/>
          <span className={styles.tick}></span>
        </label>        
      </span>
      {/* <span className={styles.settings}><FaCog size="2rem"/></span> */}
    </header>
    </>  
  )
}

export default Header;