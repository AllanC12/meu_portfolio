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
        {contacts.map(contact => (
           <div key={contact.id} className="contact">
               <span className={contact.id}>{contact.icon}</span>
               <div className="value-contacts">
                  <p>{contact.name}</p>
                  <h4>{contact.value}</h4>
               </div>
           </div>
        ))}

        <a href="" className="btn">Baixar currículo em PDF</a>
     </div>
  )
}

export default ContactsContainer