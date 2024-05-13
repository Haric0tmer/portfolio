import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/aboutme" element={<Aboutme />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
         </Routes>
      </Router>
   );
}

export default App;
