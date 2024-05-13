import { Link } from 'react-router-dom';
import { Button } from './ui/button';
function Header() {
   return (
      <nav className="flex m-2 justify-between items-center border h-[90px]">
         <img src="/bdh" alt="logo" />
         <div className="flex justify-between w-[350px]">
            <Button variant={'ghost'}>
               <Link to={'/'}>Homepage</Link>
            </Button>
            <Button variant={'ghost'}>
               <Link to={'/contact'}>Contact</Link>
            </Button>
            <Button variant={'ghost'}>
               <Link to={'/projects'}>Projet</Link>
            </Button>
            <Button variant={'secondary'} className="bg-slate-300">
               <Link to={'/aboutme'}>À propos</Link>
            </Button>
         </div>
      </nav>
   );
}

export default Header;
