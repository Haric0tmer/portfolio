import Contact from './components/Contact';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import { useState } from 'react';

function App() {
   const [locale, setLocale] = useState('fr');
   return (
      <div className="bg-slate-800">
         <Header locale={locale} setLocale={setLocale}></Header>
         <Aboutme locale={locale}></Aboutme>
         <Projects locale={locale}></Projects>
         <Contact locale={locale}></Contact>
      </div>
   );
}

export default App;
