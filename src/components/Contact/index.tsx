import { SyntheticEvent, useRef, useState } from 'react';
import { FaSteam, FaLinkedin, FaFacebookSquare, FaGithub, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const sendMail = async () => {
    return new Promise( async (resolve, reject) => {
      const result = await fetch('https://scali-email-service.herokuapp.com/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: email,
          subject: "E-mail enviado do Portfas do Scaliba",
          content: message,
          phone: phone
        })
      });

      console.log('result ', result);

      if(result.status === 200 || result.status === 202){
        return resolve(true);
      } 

      return reject(false);           
    })
  }

  const handleSendMail = async (event: SyntheticEvent) => {  
    event.preventDefault();

    if(!validateForm()) return;
    
    const promise = sendMail();

    toast.promise(
      promise,
      {
        pending: 'Tô encaminhando seu e-mail pro chefe...',
        success: 'E-mail enviado com sucesso!',
        error: 'Vish! Ocorreu algum erro. Verifique se o e-mail está certo e tente novamente.'
      }
    );
  }

  const validateForm = () => {
    
    if(!emailInput.current?.checkValidity()){
      toast.error("E-mail inválido!");
      emailInput.current?.classList.add(styles.error);
      return false;
    }

    if(!nameInput.current?.checkValidity()){
      toast.error("Digita seu nome aí, pô");
      nameInput.current?.classList.add(styles.error);
      return false;
    }

    if(!messageInput.current?.checkValidity()){
      toast.error("Seria bom escrever uma mensagem, né?");
      messageInput.current?.classList.add(styles.error);
      return false;
    }

    return true;
  }

  const handleSetPhone = (value: string) => {
    let formatedPhone:string;

    formatedPhone = value.replace(/[^-0-9*()+ ]/g,'');
    setPhone(formatedPhone)
  }

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
        
        
        <a href="https://api.whatsapp.com/send?phone=5511981116773&amp;text=Salve!%20Bora%20ter%20uma%20troca%C3%A7%C3%A3o%20franca%20de%20ideias?" target="_blank" rel="noreferrer">
          <FaWhatsapp size="2rem"/>
          <figcaption>+55 (11)98111-6773</figcaption>
        </a>        
        
      </section>

      <form onSubmit={ event => handleSendMail(event) }>
        <input type="text" placeholder="Digite seu nome" required className={styles.name} 
          ref={nameInput} value={ name } onChange={ e => setName(e.target.value) } onFocus={ e => e.target.classList.remove(styles.error) }
        />
        <input type="email" placeholder="Digite seu e-mail" required className={styles.email} 
          ref={emailInput} value={ email } onChange={ e => setEmail(e.target.value) } onFocus={ e => e.target.classList.remove(styles.error) }
        />
        <input type="text" placeholder="Digite seu telefone (opcional)" required className={styles.phone} 
          ref={phoneInput} value={ phone } onChange={ e => handleSetPhone(e.target.value) } onFocus={ e => e.target.classList.remove(styles.error) }
        />                
        <textarea placeholder="Digite sua mensagem para mim >.<" required className={styles.text} 
          ref={messageInput} value={ message } onChange={ e => setMessage(e.target.value) } onFocus={ e => e.target.classList.remove(styles.error) }
        ></textarea>
        <input type="submit" value="Enviar e-mail"/>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  )
}

export default Contact;