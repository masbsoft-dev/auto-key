import { motion } from "framer-motion";

interface ServicoCardProps {
    titulo: string;
    descricao: string;
    imagem: string;
    alt: string;
    delay?: number;
}

export const ServiceCard = ({ titulo, descricao, imagem, alt, delay = 0 }: ServicoCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: delay / 1000 }}
        data-aos="fade-up"
        className="flex flex-col items-center text-center bg-purple-100 rounded-lg p-5 w-full sm:w-[300px] max-w-sm shadow-md hover:bg-purple-200 hover:shadow-xl transition duration-500 cursor-pointer"
    >
    <h2 className="text-lg font-semibold uppercase mb-3">{titulo}</h2>
        <img src={imagem} alt={alt} className="w-2/3 mb-4" />
        <p className="text-sm max-w-[90%]">{descricao}</p>
    </motion.div>
);