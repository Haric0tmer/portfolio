import { Button } from './ui/button';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LinksMenu from './LinksMenu';

interface HeaderProps {
   locale: string;
   setLocale: (locale: string) => void;
}

function Header({ locale, setLocale }: HeaderProps) {
   const [showMenu, setShowMenu] = useState(false);
   
   useEffect(() => {
      console.log(showMenu)
   }, [showMenu])
   return (
      <nav className="flex justify-end items-center w-full p-4">
         <div className="flex justify-between items-center">

            <div className="flex items-center">
               <Button
                  variant={'ghost'}
                  className="rounded-full m-2 hover:bg-slate-600">
                  <a href="https://github.com/Haric0tmer" target="_blank">
                     <Github strokeWidth={1} color="white"></Github>
                  </a>
               </Button>
               <Button
                  variant={'ghost'}
                  className="rounded-full m-2 hover:bg-slate-600">
                  <a
                     href="https://www.linkedin.com/in/laurent-boualavong"
                     target="_blank">
                     <Linkedin strokeWidth={1} color="white"></Linkedin>
                  </a>
               </Button>
            </div>
            <div className=" hidden laptop:flex items-center">
               <LinksMenu locale={locale} setLocale={setLocale}></LinksMenu>
            </div>
            <div className={`flex ${showMenu ? 'flex-col bg-slate-700 rounded p-1 absolute top-20 right-1 min-w-20' : 'hidden'} laptop:hidden`}>
               <LinksMenu locale={locale} setLocale={setLocale}></LinksMenu>
            </div>
            {showMenu ?  <X onClick={() => setShowMenu(!showMenu)} className='laptop:hidden m-3 hover:cursor-pointer' color='white'></X>: <Menu color='white' className='laptop:hidden m-3 hover:cursor-pointer' onClick={() => setShowMenu(!showMenu)}></Menu>}
           
                      

            
         </div>
      </nav>
   );
}

export default Header;
