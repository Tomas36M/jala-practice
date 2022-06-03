import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home';
import PostWork from './views/PostWork';
import { UseWorkProvider } from './context/WorkContext';

const App = () => {

  return (
    <div className="App">
      <Router>
        <UseWorkProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post' element={<PostWork />} />
          </Routes>
        </UseWorkProvider>
      </Router>
    </div>
  );
}

export default App;
