interface ProjectProps {
   locale: string;
}

import Hopefield from './Hopefield';
import Kyoju from './Kyoju';
function Projects({ locale }: ProjectProps) {
   return locale === 'fr' ? (
      <div id="projects">
         <h2>Mes projets</h2>
         <p>La faudra mettre un peu de blabla</p>
         <div className="flex flex-col justify-center items-center">
            <Hopefield locale={locale}></Hopefield>
            <Kyoju locale={locale}></Kyoju>
         </div>
      </div>
   ) : (
      <div id="projects">
         <h2>My projects</h2>
         <p>La faudra mettre un peu de blabla</p>
         <div className="flex flex-col justify-center items-center">
            <Hopefield locale={locale}></Hopefield>
            <Kyoju locale={locale}></Kyoju>
         </div>
      </div>
   );
}

export default Projects;
