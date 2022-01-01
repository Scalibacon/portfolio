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
          <li><a href='#'>Início</a></li>
          <li><a href='#'>Resumão</a></li>
          <li><a href='#'>Habilidades</a></li>
          <li><a href='#'>Projetos</a></li>
        </ul>
      </nav>

      <span className={styles.settings}><FaCog size="2rem"/></span>
    </header>
  )
}

export default Header;