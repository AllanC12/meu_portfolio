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
              {tech.icon}
              <div className="information-tech">
              {tech.name}
              </div>
          </div>
       ))}
    </div>
  )
}

export default TechnologiesContainer