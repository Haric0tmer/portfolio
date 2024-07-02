import { useState, ChangeEvent, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { Mail, Linkedin } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
   locale: string;
   
}

function Contact( { locale }: ContactProps ) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_idegr87",
        "template_jzimovc",
        e.target as HTMLFormElement,
        "2jU5LybM9zpowq9E8"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          sendAutoReply(formData.email, formData.firstName);
          alert("Message envoyé avec succès!");
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message, veuillez réessayer.");
        }
      );
    e.currentTarget.reset();
  };

  const sendAutoReply = (userEmail: string, firstName: string): void => {
    const templateParams = {
      to_email: userEmail,
      to_name: firstName,
      reply_subject: "Merci pour votre message!",
      reply_message:
        "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_AUTO_REPLY_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log("Auto-reply sent", result.text);
        },
        (error) => {
          console.log("Auto-reply error", error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center bg-slate-800 p-4">
      <div className="flex mx-auto items-center">
        <h2 className="text-2xl font-bold text-center text-white">
          {locale === 'fr' ? 'Contactez-moi via' : 'Contact me via'}{" "}
        </h2>
        <a href="mailto:laurent.boualavong@hotmail.fr" className="mx-4">
          <Mail color="white"></Mail>
        </a>
        <a href="https://www.linkedin.com/in/laurent-boualavong">
          <Linkedin color="white"></Linkedin>
        </a>
      </div>
      <h2 className="text-2xl font-bold text-center text-white">
         {locale === 'fr' ? 'Ou' : 'Or'}
      </h2>
      <h2 className="text-2xl font-bold text-center text-white">
         {locale === 'fr' ? 'Directement via ce formulaire' : 'Directly with this form'}{" "}
      </h2>

      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg shadow-lg w-full "
      >
        <div className="flex w-full">
          <div className="mb-4 mr-2 w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-300"
            >
              {locale === 'fr' ? 'Prénom' : 'First name'}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-slate-800 text-white"
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-300"
            >
              {locale === 'fr' ? 'Nom' : 'Last name'}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-slate-800 text-white"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-slate-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            {locale === 'fr' ? 'Objet' : 'Object'}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-slate-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-slate-800 text-white"
            rows={4}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {locale === 'fr' ? 'Envoyer' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
