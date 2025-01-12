import './App.css';
import Login from "./components/control/login" ;
import Language from "./components/control/language.js" ;
import "bootstrap/dist/css/bootstrap.min.css" ;
import HTML from "./components/control/HTML.js" ;
import CSS from "./components/control/CSS.js" ;
import { BrowserRouter , Link , Routes , Route } from 'react-router-dom';
import Score from "./components/control/Score.js"

function App(){

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Language" element={<Language/>} />
          <Route path="/HTML" element={<HTML />} />
          <Route path="/Score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
