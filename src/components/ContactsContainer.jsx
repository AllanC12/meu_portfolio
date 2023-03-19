import "./sass_components/ContactsContainer.scss";

import {FaMapMarkerAlt,FaPhone,FaEnvelope} from 'react-icons/fa';

const ContactsContainer = () => {

    const contacts = [
        {id:"phone",name:"Telefone",value:'(37)98855-1832',icon: <FaPhone/>},
        {id:"email",name:"E-mail",value:'allandevfront@gmail.com',icon:<FaEnvelope/>},
        {id:"location",name:"Localização",value:'São Francisco de Paula MG',icon:<FaMapMarkerAlt/>}
    ]

  return (
    <div className="contacts-container">
            <div className="contact">
                <FaPhone className="phone"/>
               <div className="value-contacts">
                  <p>Telefone</p>
                  <a href="">(37)98855-1832</a>
               </div>
           </div>

           <div className="contact">
                <FaEnvelope className="email"/>
               <div className="value-contacts">
                  <p>E-mail</p>
                  <a href="">allandevfront@gmail.com</a>
               </div>
           </div>

           <div className="contact">
                <FaMapMarkerAlt className="location"/>
               <div className="value-contacts">
                  <p>Localização</p>
                  <a href="">São Francisco de Paula MG</a>
               </div>
           </div>
 
        <a href="" className="btn">Baixar currículo em PDF</a>
     </div>
  )
}

export default ContactsContainer