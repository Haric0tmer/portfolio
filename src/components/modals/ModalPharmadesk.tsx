import { X } from "lucide-react";
import { Button } from "../ui/button";
import pharmaForm from "../../assets/pharmadesk-form.png";
import pharmaLocation from "../../assets/pharmadesk-location.png";
import pharmaContact from "../../assets/pharmadesk-contact.png";
interface ModalProps {
  locale: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export default function ModalHopeField({
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
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 outline-none focus:outline-none max-h-screen">
              {/*header*/}
              <h3 className="text-4xl text-white text-center mt-5">
                Ky0ju's Reminiscence
              </h3>
              {/*body*/}
              <div className="relative p-6 flex-auto overflow-y-auto max-h-[calc(100vh-200px)]">
                <p className="text-lg text-white font-extralight mt-5 text-justify">
                  PharmaDesk est mon deuxieme projet professionel. Il a été
                  réalisé à la suite de mon stage de deuxième année durant l'été
                  2023. PharmaDesk est une application web faite en PHP, HTML,
                  CSS et JavaScript. Elle permet à une pharmacie de gérer
                  certains aspect backoffice du métier comme la location de
                  matériel médical. Elle permet aussi d'enregistrer des
                  documents administratif et procédures afin de les rendre
                  facilement accéssible pour les employés. Il est aussi possible
                  d'enrigistrer des contacts afin de se construire un annuaire
                  des contacts utiles.
                </p>
                <p className="text-lg text-white font-extralight mt-5 text-justify">
                  Pour faire ce projet j'ai eu un total de 4 semaines pour
                  prendre en compte tous les aspects du développement d'une
                  application de la conception à la mise en production. Au cours
                  de ce projet j'ai eu l'occasion d'utilisé toutes les
                  connaissances acquises durant mon stage afin de produire une
                  application du même niveau dans un laps de temps trois fois
                  plus court.
                </p>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={pharmaContact}
                      alt="PharmaDesk Contact"
                      className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
                    />
                    <img
                      src={pharmaLocation}
                      alt="PharmaDesk Location"
                      className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
                    />

                    <img
                      src={pharmaForm}
                      alt="PharmaDesk Form"
                      className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
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
                PharmaDesk is my second professional project. It was done after
                my second year internship during the summer of 2023. PharmaDesk
                is a web application made in PHP, HTML, CSS and JavaScript. It
                allows a pharmacy to manage some backoffice aspects of the
                business such as the rental of medical equipment. It also allows
                to register administrative documents and procedures to make them
                easily accessible for employees. It also gives the opportunity to register
                contacts in order to build a directory of useful contacts.
              </p>
              <p className="text-lg text-white font-extralight mt-5">
                  To do this project I had a total of 4 weeks to take into account
                  all aspects of developing an application from design to
                  production. During this project I had the opportunity to use all
                  the knowledge acquired during my internship to produce an
                  application of the same level in a time frame three times
                  shorter.
              </p>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={pharmaContact}
                  alt="Kyoju 1"
                  className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
                />
                <img
                  src={pharmaLocation}
                  alt="Kyoju 2"
                  className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
                />

                <img
                  src={pharmaForm}
                  alt="Kyoju 3"
                  className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
                />
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
