import pythonLogo from '../assets/python.svg';
import figmaLogo from '../assets/figma.svg';
// import kyojuImage from '../assets/kyoju.png';

import { Button } from './ui/button';
import { useState } from 'react';
import ModalKyoju from './modals/ModalKyoju';

interface HopefieldCardProps {
   locale: string;
}

function Kyoju({ locale }: HopefieldCardProps) {
   const [showModal, setShowModal] = useState(false);

   return (
      <div className="border-4 border-slate-400 flex flex-col justify-center items-center rounded-md w-fit p-5 mt-5">
         <h3 className="text-center text-white text-3xl">
            Ky0ju's Reminiscence
         </h3>
         <div className="flex w-full justify-start items-center my-4">
            <span className="text-white">Technos :</span>
            <div className="logos flex">
               <img
                  src={pythonLogo}
                  alt="logoHTML"
                  className="w-[48px] h-[48px]"
               />
               <img
                  src={figmaLogo}
                  alt="logoFigma"
                  className="w-[48px] h-[48px]"
               />
               {/* <img src={jsLogo} alt="logoJS" className="w-[48px] h-[48px]" />
               <img src={phpLogo} alt="logoPHP" className="w-[48px] h-[48px]" />
               <img src={pgLogo} alt="logoPG" className="w-[48px] h-[48px]" /> */}
            </div>
         </div>
         {/* <img
            src={kyojuImage}
            alt="Kyoju image"
            className="w-[530px] h-[288px]"
         /> */}
         <Button
            variant={'secondary'}
            className="rounded-full text-slate-800 hover:bg-slate-600 hover:text-white transition ease-in-out duration-300 w-28 mt-5"
            onClick={() => setShowModal(true)}>
            {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
         </Button>
         <ModalKyoju
            locale={locale}
            showModal={showModal}
            setShowModal={setShowModal}></ModalKyoju>
      </div>
   );
}

export default Kyoju;
