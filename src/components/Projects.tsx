interface ProjectProps {
   locale: string;
}

import ProjectCard from './ProjectCard';

function Projects({ locale }: ProjectProps) {
   return locale === 'fr' ? (
      <div id="projects">
         <h2>Mes projets</h2>
         <p>La faudra mettre un peu de blabla</p>
         <div className="flex flex-col justify-center items-center">
            <ProjectCard locale={locale}></ProjectCard>
         </div>
      </div>
   ) : (
      <div id="projects">
         <h2>My projects</h2>
         <p>La faudra mettre un peu de blabla</p>
         <div className="flex flex-col justify-center items-center">
            <ProjectCard locale={locale}></ProjectCard>
         </div>
      </div>
   );
}

export default Projects;
