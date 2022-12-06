import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonalInfo from './pages/PersonalInfo';
import ProjectList from './pages/ProjectList';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personalinfo" element={<PersonalInfo />} />
            <Route path="/projectlist" element={<ProjectList />} />
          </Routes>
          
        </div>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
