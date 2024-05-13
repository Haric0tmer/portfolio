import { Link } from 'react-router-dom';

function Header() {
   return (
      <nav>
         <Link to={'/projects'}>Projet</Link>
         <Link to={'/aboutme'}>A propos</Link>
         <Link to={'/contact'}>Contact</Link>
      </nav>
   );
}

export default Header;
