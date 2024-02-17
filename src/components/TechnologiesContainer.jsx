import "./sass_components/TechnologiesContainer.scss"

import {FaHtml5,FaCss3Alt,FaSass,FaGitAlt,FaReact} from 'react-icons/fa'
import {SiJavascript,SiTypescript } from 'react-icons/si'

const TechnologiesContainer = () => {
    const techs = [
      
      {id:'react',name:'React',icon:<FaReact/>, description: `Uma das bibliotecas de desenvolvimento mais famosas e utilizada
        por empresas como Facebook, Instagram, Airbnb, Uber, entre outras.`},
      {id:'typescript',name:'Typescript',icon:<SiTypescript/>, description: `O superset de javascript, usado para incluir recursos como tipagem estática,
       interfaces orientação a objetos e mais confiabilidade ao código.`},
      {id:'html',name:'HTML5',icon:<FaHtml5/>,description:`Linguagem de marcação web utilizada para limitar e
        definir a estrutura dos seus componentes.`},
      {id:'css',name:'CSS3',icon:<FaCss3Alt/>,description:`Cascading Style Sheets , ou folhas de estilo em cascata, 
       utilizada na estilização dos elementos html.`},
      {id:'js',name:'Javascript',icon:<SiJavascript/> ,description:`Uma das mais famosas linguagens de programação, 
       presente em quase todos os ecossistemas da TI.`},
      {id:'sass',name:'SASS',icon:<FaSass/>,description:`Pré-processador de CSS, usado para melhorar a produtividade
        e proporcionar funcionalidades únicas.`},
      {id:'git',name:'GIT',icon:<FaGitAlt/>,description:`A ferramenta essencial para desenvolvedores versionarem seus códigos
        e manterem seus trabalhos salvos e atualizados.`}
    ]

  return (
    <div> 
       <div className="title-technologies">
         <h1>Habilidades</h1>
         <div className="line-title"></div>
       </div>       

   <div className="technologies-container">
     {techs.map(tech => (
          <div key={tech.id} className="container-tech">
              <div  id={tech.id} className="container-svg">
                {tech.icon}
              </div>
              <div className="information-tech">
                 <h2 className="title-tech">{tech.name}</h2>
                 <p>{tech.description}</p>
              </div>
          </div>
       ))}
   </div>

    </div>
  )
}

export default TechnologiesContainer