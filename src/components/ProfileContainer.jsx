import "./sass_components/ProfileContainer.scss"

import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const socialMedias = [
    {id:'linkedin',name:'Linkedin',icon:<FaLinkedin/>},
    {id:'instagram',name:'Instagram',icon:<FaInstagram/>},
    {id:'github',name:'Github',icon:<FaGithub/>}
]

const ProfileContainer = () => {
  return (
    <div className='profile-container'>
        <div className="photo-profile">
           {/* <img src="" alt="Foto perfil" /> */}
        </div>
        <p className="title-developer">Desenvolvedor</p>
        <div className="social-medias">
          {socialMedias.map(socialMedia => (
             <a calssName="social-media" key={socialMedia.id} href="">{socialMedia.icon}</a>
          ))}
        </div>

     </div>
  )
}

export default ProfileContainer