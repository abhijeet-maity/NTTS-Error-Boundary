import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import ErrorBoundary from './Components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
        <Routes>
          <Route to="/" element={<Home/>}/>
          <Route to="/about" element={<About/>}/>
          <Route to="/contact" element={<Contact/>}/>
          <Route to="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
