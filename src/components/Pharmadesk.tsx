import jsLogo from '../assets/js.svg';
import cssLogo from '../assets/css.svg';
import htmlLogo from '../assets/html.svg';
import phpLogo from '../assets/php.svg';
import pgLogo from '../assets/pg.svg';
import pharmadeskImage from '../assets/pharmadesk-home.png';

import { Button } from './ui/button';
import { useState } from 'react';
import ModalPharmadesk from './modals/ModalPharmadesk';

interface HopefieldCardProps {
   locale: string;
}

function Pharmadesk({ locale }: HopefieldCardProps) {
   const [showModal, setShowModal] = useState(false);

   return (
      <div className="border-4 border-slate-400 flex flex-col justify-center items-center rounded-md w-fit p-5 mt-5">
         <h3 className="text-center text-white text-3xl">PharmaDesk</h3>
         <div className="flex w-full justify-start items-center my-4">
            <span className="text-white">Technos :</span>
            <div className="logos flex">
               <img
                  src={htmlLogo}
                  alt="logoHTML"
                  className="w-[48px] h-[48px]"
               />
               <img src={cssLogo} alt="logoCSS" className="w-[48px] h-[48px]" />
               <img src={jsLogo} alt="logoJS" className="w-[48px] h-[48px]" />
               <img src={phpLogo} alt="logoPHP" className="w-[48px] h-[48px]" />
               <img src={pgLogo} alt="logoPG" className="w-[48px] h-[48px]" />
            </div>
         </div>
         <img
            src={pharmadeskImage}
            alt="PharmaDesk"
            className="w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2"
         />
         <Button
            variant={'secondary'}
            className="rounded-full text-slate-800 hover:bg-slate-600 hover:text-white transition ease-in-out duration-300 w-28 mt-5"
            onClick={() => setShowModal(true)}>
            {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
         </Button>
         <ModalPharmadesk
            locale={locale}
            showModal={showModal}
            setShowModal={setShowModal}></ModalPharmadesk>
      </div>
   );
}

export default Pharmadesk;
