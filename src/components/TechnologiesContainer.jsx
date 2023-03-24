import "./sass_components/TechnologiesContainer.scss"

import {FaHtml5,FaCss3Alt,FaSass,FaGitAlt,FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

const TechnologiesContainer = () => {
    const techs = [
        {id:'html',name:'HTML5',icon:<FaHtml5/>},
        {id:'css',name:'CSS3',icon:<FaCss3Alt/>},
        {id:'js',name:'Javascript',icon:<SiJavascript/>},
        {id:'sass',name:'SASS',icon:<FaSass/>},
        {id:'react',name:'React',icon:<FaReact/>},
        {id:'git',name:'GIT',icon:<FaGitAlt/>}
    ]
  return (
    <div className="technologies-container">
       {techs.map(tech => (
          <div className="container-tech">
              <div id={tech.id} className="container-svg">
                {tech.icon}
              </div>
              <div className="information-tech">
                 <h2 className="title-tech">{tech.name}</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
       ))}
    </div>
  )
}

export default TechnologiesContainer