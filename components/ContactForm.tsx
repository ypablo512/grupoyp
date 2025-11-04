import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const ContactForm: React.FC = () => {
    const whatsappNumber = '541160537259';
    const emailAddress = 'grupoyp.net@gmail.com';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        const mailtoBody = `
            Nombre: ${name}
            Email de contacto: ${email}
            
            Mensaje:
            ${message}
        `;

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody.trim())}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-800 bg-opacity-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Póngase en Contacto</h2>
                    <p className="text-gray-300 text-lg mb-12">
                        Estamos listos para escuchar sobre su próximo proyecto o consulta. Complete el formulario o contáctenos directamente.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nombre</label>
                            <input type="text" name="name" id="name" placeholder="Su Nombre" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Su Email" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300" />
                        </div>
                         <div>
                            <label htmlFor="subject" className="sr-only">Asunto</label>
                            <input type="text" name="subject" id="subject" placeholder="Asunto" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensaje</label>
                            <textarea name="message" id="message" rows={4} placeholder="Su Mensaje" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col justify-center space-y-6">
                         <a href={`mailto:${emailAddress}`} className="flex items-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300">
                           <MailIcon className="h-8 w-8 text-blue-400 mr-4"/>
                           <div>
                               <h3 className="text-lg font-semibold text-white">Enviar un Email</h3>
                               <p className="text-blue-400">{emailAddress}</p>
                           </div>
                        </a>
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300">
                           <WhatsAppIcon className="h-8 w-8 text-green-400 mr-4"/>
                           <div>
                               <h3 className="text-lg font-semibold text-white">Chatear por WhatsApp</h3>
                               <p className="text-green-400">Inicia una conversación</p>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;