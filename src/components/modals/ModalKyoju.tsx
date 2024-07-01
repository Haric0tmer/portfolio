import { X } from "lucide-react";
import { Button } from "../ui/button";
import kyoju1 from "../../assets/kyoju-1.png";
import kyoju2 from "../../assets/kyoju-2.png";
import kyoju3 from "../../assets/kyoju-3.png";
import kyojuFin from "../../assets/kyoju-fin.png";
interface ModalProps {
  locale: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export default function ModalKyoju({
  locale,
  showModal,
  setShowModal,
}: ModalProps) {
  return locale === "fr" ? (
    showModal ? (
      <>
        <div className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none max-h-screen">
              {/*header*/}
              <h3 className="text-4xl text-white text-center mt-5">
                Ky0ju's Reminiscence
              </h3>
              {/*body*/}
              <div className="relative p-6 flex-auto overflow-y-auto max-h-[calc(100vh-200px)]">
                <p className="text-lg text-white font-extralight mt-5">
                  Ky0ju's Reminiscence est un projet universitaire réalisé à
                  l'occasion d'une GameJam la première semaine du semestre 5.
                  Cette GameJam se déroulait sur 4 jours et avait pour thème
                  "Gravité" et "Robot". La technologie imposée était la
                  bibliothèque Pygame de Python et la taille des équipes était
                  de 4 personnes. Nous avons donc décidé de créer un jeu de
                  plateforme en 2D où le joueur incarne Jeremy, un enfant parti
                  en quête de composants pour réparer Ky0ju, une création de son
                  père qui permet d'altérer la gravité à ses alentours.
                </p>
                <p className="text-lg text-white font-extralight mt-5">
                  Mon rôle dans le projet a été de coder certaines mécaniques de
                  jeu comme les collisions ou les déplacements du joueur. Au
                  total nous étions 2 programmeurs dédiés à la partie gameplay.
                  Un autre s'occupait du level design et le dernier d'occupait
                  du design des sprites de Jeremy et Ky0ju ainsi que des
                  interfaces utilisateurs.
                </p>
                <div className="flex flex-col justify-center items-center">
                  <div className="laptop:flex laptop:justify-center laptop:items-center">
                    <img
                      src={kyoju1}
                      alt="Kyoju 1"
                      className="w-[320px] h-[288px] mx-4 my-2"
                    />
                    <img
                      src={kyoju2}
                      alt="Kyoju 2"
                      className="w-[320px] h-[288px] mx-4 my-2"
                    />
                  </div>
                  <div className="laptop:flex laptop:justify-center laptop:items-center">
                    <img
                      src={kyoju3}
                      alt="Kyoju 3"
                      className="w-[320px] h-[288px] mx-4 my-2"
                    />
                    <img
                      src={kyojuFin}
                      alt="Kyoju Fin"
                      className="w-[320px] h-[288px] mx-4 my-2"
                    />
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 rounded-b">
                <Button
                  variant={"ghost"}
                  className="rounded-full mx-auto text-white transition ease-in-out duration-300"
                  onClick={() => setShowModal(false)}
                >
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
      <div className="justify-center items-center flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none max-h-screen">
            {/*header*/}
            <h3 className="text-4xl text-white text-center mt-5">
              Ky0ju's Reminiscence
            </h3>
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto max-h-[calc(100vh-200px)]">
              <p className="text-lg text-white font-extralight mt-5">
                Ky0ju's Reminiscence is a university project developped during
                the first week of our fifth semester. This GameJam lasted 4 days
                and had the theme "Gravity" and "Robot". The imposed technology
                was the Pygame library of Python and we were limited to 4
                students per team. We decided to create a 2D platform game where
                the player plays Jeremy, a child who goes in search of
                components to repair Ky0ju, a creation of his father that allows
                it to alter gravity around him.
              </p>
              <p className="text-lg text-white font-extralight mt-5">
                My role in the project was to code some of the game mechanics
                like collisions or player movements. In total we were 2
                programmers dedicated to the gameplay part. Another one was in
                charge of the level design and the last one was in charge of
                designing the sprites of Jeremy and Ky0ju as well as the user
                interfaces.
              </p>
              <div className="flex flex-col justify-center items-center">
                <div className="laptop:flex laptop:justify-center laptop:items-center">
                  <img
                    src={kyoju1}
                    alt="Kyoju 1"
                    className="w-[320px] h-[288px] mx-4 my-2"
                  />
                  <img
                    src={kyoju2}
                    alt="Kyoju 2"
                    className="w-[320px] h-[288px] mx-4 my-2"
                  />
                </div>
                <div className="laptop:flex laptop:justify-center laptop:items-center">
                  <img
                    src={kyoju3}
                    alt="Kyoju 3"
                    className="w-[320px] h-[288px] mx-4 my-2"
                  />
                  <img
                    src={kyojuFin}
                    alt="Kyoju Fin"
                    className="w-[320px] h-[288px] mx-4 my-2"
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 rounded-b">
              <Button
                variant={"ghost"}
                className="rounded-full mx-auto text-white transition ease-in-out duration-300"
                onClick={() => setShowModal(false)}
              >
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
