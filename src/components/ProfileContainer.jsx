import "./sass_components/ProfileContainer.scss";

import {FaLinkedinIn,FaInstagram,FaGithub} from 'react-icons/fa';

 
const socialMedias = [
    {id:'linkedin',icon:<FaLinkedinIn/>,link:"https://linkedin.com/in/allan-cândido-8ba476260"},
    {id:'instagram',icon:<FaInstagram/>,link:"https://www.instagram.com/allancandido78/?next=%2F"},
    {id:'github',icon:<FaGithub/>,link:"https://github.com/AllanC12"}
]

const ProfileContainer = () => {
  return (
    <div className='profile-container'>
        <div className="photo-profile"></div>
        <p className="title-developer">Desenvolvedor Front-End</p>
        <div className="social-medias">
          {socialMedias.map(socialMedia => (
             <a className={socialMedia.id} 
             target="_blank"
               key={socialMedia.id} 
               href={socialMedia.link}>
               {socialMedia.icon}
             </a>
          ))}
        </div>

     </div>
  )
}

export default ProfileContainer