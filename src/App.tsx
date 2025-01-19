import Contact from './components/Contact';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { useState } from 'react';

function App() {
   const [locale, setLocale] = useState('fr');
   return (
      <div className="bg__svg">
         <Header locale={locale} setLocale={setLocale}></Header>
         <Aboutme locale={locale}></Aboutme>
         <Projects locale={locale}></Projects>
         <Timeline locale={locale}></Timeline>
         <Contact locale={locale}></Contact>
      </div>
   );
}

export default App;
