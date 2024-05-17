interface ProjectProps {
   locale: string;
}

function Projects({ locale }: ProjectProps) {
   return locale === 'fr' ? (
      <div id="projects">Projets</div>
   ) : (
      <div id="projects">Projects</div>
   );
}

export default Projects;
