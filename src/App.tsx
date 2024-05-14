import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Header from './components/Header';

function App() {
   return (
      <div className="bg-gradient-to-t from-slate-500 to-slate-800 m-0 p-0">
         <Header></Header>
         <Homepage></Homepage>
         <Contact></Contact>
         <Projects></Projects>
         <Aboutme></Aboutme>
      </div>
   );
}

export default App;
