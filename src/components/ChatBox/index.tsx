import styles from '../../styles/ChatBox.module.scss';

import imgInterviewer from '../../assets/interviewer.png';
import imgNerdola from '../../assets/nerdola.svg';

import { useEffect, useState } from 'react';

/*
  deixar as imagens importadas aqui e selecionar baseado no  author
*/

type ChatBoxProps = {
  text: string,
  author: string,
  isFromLeft?: boolean,
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

      <p>
        { props.text }
      </p>
    </div>
  )
}

export default ChatBox;