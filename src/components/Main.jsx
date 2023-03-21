import "./sass_components/MainContainer.scss"

//components
import AboutContainer from "./AboutContainer"
import TechnologiesContainer from "./TechnologiesContainer"

const Main = () => {
  return (
    <div className="main-container">
       <AboutContainer/>
       <TechnologiesContainer/>
    </div>
  )
}

export default Main