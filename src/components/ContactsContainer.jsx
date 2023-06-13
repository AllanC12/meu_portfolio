import "./sass_components/ContactsContainer.scss";

import {FaMapMarkerAlt,FaPhone,FaEnvelope} from 'react-icons/fa';

const ContactsContainer = () => {

  return (
    <div className="contacts-container">
            <div className="contact">
                <FaPhone className="phone"/>
               <div className="value-contacts">
                  <p>Telefone</p>
                  <a target="_blank" href="https://wa.me/+5537988551832">(37)98855-1832</a>
               </div>
           </div>

           <div className="contact">
                <FaEnvelope className="email"/>
               <div className="value-contacts">
                  <p>E-mail</p>
                  <a target="_blank" href="mailto:allandevfront@gmail.com">allandevfront@gmail.com</a>
               </div>
           </div>

           <div className="contact">
                <FaMapMarkerAlt className="location"/>
               <div className="value-contacts">
                  <p>Localização</p>
                  <a target="_blank" href="https://goo.gl/maps/Zcam5JgKzBux35W48">São Francisco de Paula MG</a>
               </div>
           </div>

           <a href="https://allanc12.github.io/archives/curriculo_allan.pdf" download className="btn">Baixar currículo em PDF</a>
      </div>
  )
}

export default ContactsContainer