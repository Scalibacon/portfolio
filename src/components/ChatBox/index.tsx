import styles from '../../styles/ChatBox.module.scss';

import imgInterviewer from '../../assets/interviewer.png';
import imgNerdola from '../../assets/nerdola.svg';

import { ReactNode, useEffect, useState } from 'react';

/*
  deixar as imagens importadas aqui e selecionar baseado no  author
*/

type ChatBoxProps = {
  author: string,
  isFromLeft?: boolean,
  children?: ReactNode 
}

const ChatBox = (props: ChatBoxProps) => {
  const [chatIcon, setChatIcon] = useState('');

  useEffect( () => {
    if(props.author === 'interviewer'){
      return setChatIcon(imgInterviewer);
    }

    if(props.author === 'scalidev'){
      return setChatIcon(imgNerdola);
    }
  }, []);

  return (
    <div className={`${styles.chatbox} ${props.isFromLeft ? styles.fromLeft : ''}`}>
      <section>
        <img src={chatIcon} alt={props.author}/>
      </section>

    <span>
      <p>
        { props.children }
      </p>
    </span>
      
    </div>
  )
}

export default ChatBox;