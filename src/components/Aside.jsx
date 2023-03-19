import "./sass_components/Aside.scss" 

import ProfileContainer from "./ProfileContainer"
import ContactsContainer from "./ContactsContainer"

const Aside = () => {
  return (
    <aside className="aside">
       <ProfileContainer/>
       <ContactsContainer/>
    </aside>
  )
}

export default Aside