interface ContactProps {
   locale: string;
}

function Contact({ locale }: ContactProps) {
   return locale === 'fr' ? (
      <div id="contact">Contact</div>
   ) : (
      <div id="contact">Contact</div>
   );
}

export default Contact;
