import { Button } from './ui/button';
import { Github, Linkedin } from 'lucide-react';
function Header() {
   return (
      <nav className="flex justify-between items-center h-[90px] w-full">
         <img src="/bdh" alt="logo" />
         <div className="flex justify-between items-center">
            <div className="flex justify-between items-center ">
               <Button
                  variant={'ghost'}
                  className="rounded-full m-2 hover:bg-slate-600">
                  <Github strokeWidth={1} color="white"></Github>
               </Button>
               <Button
                  variant={'ghost'}
                  className="rounded-full m-2 hover:bg-slate-600">
                  <Linkedin strokeWidth={1} color="white"></Linkedin>
               </Button>
            </div>
            <a href="#homepage">
               <Button
                  variant={'ghost'}
                  className="text-white hover:bg-slate-600 hover:text-white">
                  Homepage
               </Button>
            </a>
            <a href="#contact">
               <Button
                  variant={'ghost'}
                  className="text-white hover:bg-slate-600 hover:text-white">
                  Contact
               </Button>
            </a>
            <a href="#project">
               <Button
                  variant={'ghost'}
                  className="text-white hover:bg-slate-600 hover:text-white">
                  Projet
               </Button>
            </a>
            <a href="#aboutme">
               <Button variant={'secondary'} className="bg-slate-300 ">
                  À propos
               </Button>
            </a>
         </div>
      </nav>
   );
}

export default Header;
