import "./sass_components/ProfileContainer.scss"

import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const socialMedias = [
    {id:'linkedin',icon:<FaLinkedinIn/>},
    {id:'instagram',icon:<FaInstagram/>},
    {id:'github',icon:<FaGithub/>}
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
             <a className={socialMedia.id} key={socialMedia.id} href="">{socialMedia.icon}</a>
          ))}
        </div>

     </div>
  )
}

export default ProfileContainer