import { X } from 'lucide-react';
import { Button } from '../ui/button';
interface ModalProps {
   locale: string;
   showModal: boolean;
   setShowModal: (showModal: boolean) => void;
}

export default function Modal({ locale, showModal, setShowModal }: ModalProps) {
   return locale === 'fr' ? (
      showModal ? (
         <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
               <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 outline-none focus:outline-none">
                     {/*header*/}
                     <h3 className="text-4xl text-white text-center mt-5">
                        À propos de moi
                     </h3>
                     {/*body*/}
                     <div className="relative p-6 flex-auto">
                        <p className="text-lg text-white font-extralight mt-5 text-justify">
                           Bonjour, je suis Laurent Boualavong, actuellement en
                           3ème année de BUT informatique à l'IUT2 de Grenoble
                           en alternance. Principalement intéressé par le
                           développement web et logiciel, j'aime pouvoir
                           utiliser mes capacités afin d'assiter au mieux
                           possible dans leur vie. De nature curieux, j'adore
                           apprendre à faire de nouvelles choses.
                        </p>
                        <p className="text-lg text-white font-extralight mt-3 text-justify">
                           Lors du premier confinement de la pandémie de
                           COVID-19, j'ai cherché une manière d'occuper mon
                           temps libre. Étant fan de culture japonaise, je me
                           suis donc lancé dans l'apprentissage du japonais.
                           Lors de mon entrée dans le supérieur j'ai dû mettre
                           en pause mon apprentissage par manque de temps. Lors
                           de mon BUT j'ai eu l'occasion de reprendre le
                           japonais avec des cours à l'université à côté de ma
                           formation pendant trois semestres.
                        </p>
                        <p className="text-lg text-white font-extralight mt-3 text-justify">
                           Passionné de sport, je pratique du volleyball en
                           compétition depuis 5 ans et suis capitaine de mon
                           équipe depuis 4 ans. Avant cela, j'ai fait du tennis
                           en compétition pendant 10 ans. Lorsque je ne fais pas
                           de sport, j'aime cuisiner ou jouer à des jeux vidéo
                           comme Valorant ou Celeste. Par le passé, j'ai aussi
                           fait de la guitare pendant 4 ans.
                        </p>
                     </div>
                     {/*footer*/}
                     <div className="flex items-center justify-end p-6 rounded-b">
                        <Button
                           variant={'ghost'}
                           className="rounded-full mx-auto text-white transition ease-in-out duration-300"
                           onClick={() => setShowModal(false)}>
                           <X size={24} strokeWidth={1}></X>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
         </>
      ) : null
   ) : showModal ? (
      <>
         <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                  {/*header*/}
                  <h3 className="text-4xl text-white text-center mt-5">
                     About me
                  </h3>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                     <p className="text-lg text-white font-extralight mt-5">
                        Hello, I am Laurent Boualavong, currently in 3rd year of
                        a bachelor's degree in computer science at the IUT2 of
                        Grenoble as a work-study student. Mainly interested in
                        web and software development, I like to use my abilities
                        to assist people as best as possible in their lives.
                        Curious by nature, I love learning new skills.
                     </p>
                     <p className="text-lg text-white font-extralight mt-3">
                        During the first lockdown of the COVID-19 pandemic, I
                        was looking for a way to spend some of my free time.
                        Being a fan of Japanese culture, I started to learn
                        Japanese on my own. As I finished my High School, I
                        unfortunatly had to stop my learning because I lacked
                        free time. However, during my bachelor's degree, I had
                        the opportunity to take Japanese classes at the
                        university alongside my main classes for three
                        semesters.
                     </p>
                     <p className="text-lg text-white font-extralight mt-3">
                        Sport lover, I have been playing volleyball copetitively
                        for 5 years and have been team captain for 4 years.
                        Before that, I played tennis competitively for 10 years.
                        When I am not doing sport, I enjoy cooking or playing
                        video games such as Valorant or Celeste. In the past, I
                        played guitar for 4 years.
                     </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b">
                     <Button
                        variant={'ghost'}
                        className="rounded-full mx-auto text-white transition ease-in-out duration-300"
                        onClick={() => setShowModal(false)}>
                        <X size={24} strokeWidth={1}></X>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
   ) : null;
}
