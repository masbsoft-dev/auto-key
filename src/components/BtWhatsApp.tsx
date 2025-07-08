import { FaWhatsapp } from 'react-icons/fa';

const BtWhatsApp: React.FC = () => {
    const handleClick = () => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                send_to: 'AW-11018362697/rSCJCPj0vOwaEMm--4Up',
                value: 1.0,
                currency: 'BRL',
            });
            console.log('Conversão registrada no gtag');
        }
    };

    return (
        <a
            href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex gap-2 items-center content-center bg-green-500 hover:bg-emerald-700 text-lg justify-center font-semibold rounded-md md:px-12 w-full md:w-[25%] px-12 py-3 duration-500"
        >
            <FaWhatsapp className="md:text-2xl text-xl" /> FALAR NO WHATSAPP
        </a>
    );
};

export default BtWhatsApp;