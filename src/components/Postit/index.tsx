import { CSSProperties } from "react";
import { JsxElement } from "typescript";
import styles from '../../styles/Postit.module.scss';

type PostitProps = {
  title?: string,
  items: string[],
  rotation?: number,
  draw?: number,
  children?: JsxElement | JsxElement[]
}

const Postit = ({ items, rotation, draw, title}: PostitProps) => {

  return (
    <article 
      className={`${styles.postit} ${styles['draw' + draw]}`} 
      style={ {'--deg': `${rotation || 0}deg`} as CSSProperties}
    >
      <h2>{title}</h2>
      <ul>
        { items.map( (item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </article>
  )
}

export default Postit;