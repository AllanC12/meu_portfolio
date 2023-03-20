 import './App.scss';

//components
import Main from './components/Main';
import Aside from './components/Aside';

 

function App() {
  return (
    <div className="App">
      <h1 className="title-developer">Allan Cândido</h1>
        <div className="components">
          <Aside/>
          <Main/>
        </div>
    </div>
  );
}

export default App;
