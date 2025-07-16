import TagManager from 'react-gtm-module'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const tagManagerArgs = {
    gtmId: 'AW-11018362697'
}
TagManager.initialize(tagManagerArgs)
import './App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from './assets/logo.png';
import Chave from './assets/chave.png';
import ChaveCanivete from './assets/chave-canivete.png';
import ChaveCarcaca from './assets/carcaca.png';
import ChaveCodificada from './assets/chave-codificada.png';
import { FaInstagram } from "react-icons/fa";
import {useState, useEffect} from "react";
import { SlArrowUp } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import BtWhatsApp from "./components/BtWhatsApp.tsx";
import GoogleReviews from "./components/GoogleReviews.tsx";
import {ServiceCard} from "./components/ServiceCard.tsx";

function App() {

    const importAll = import.meta.glob("./assets/fotos/*.{png,jpg,jpeg,webp}", { eager: true });
    const imagens: string[] = Object.values(importAll).map((mod) => (mod as { default: string }).default);

    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        const handleScroll = () => {
            window.scrollY > 200 ? setShowButton(true): setShowButton(false);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const servicos = [
        {
            titulo: "Cópias de Chave",
            imagem: Chave,
            alt: "Chave comum",
            descricao: "Realizamos cópias de chaves codificadas em geral. Entre em contato agora mesmo.",
        },
        {
            titulo: "Chaves Canivetes",
            imagem: ChaveCanivete,
            alt: "Chave canivete",
            descricao: "Chaves Canivetes e Presenciais nacionais e importadas. Entre em contato agora mesmo.",
        },
        {
            titulo: "Troca de Carcaça",
            imagem: ChaveCarcaca,
            alt: "Carcaça de chave",
            descricao: "A carcaça da sua chave está danificada ou desgastada? Nós trocamos pra você.",
        },
        {
            titulo: "Chaves Codificadas",
            imagem: ChaveCodificada,
            alt: "Codificação de chave",
            descricao: "Profissionais prontos para realizar as mais diversas codificações de chaves.",
        },
    ];

    return (
      <div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex flex-col justify-center p-12 bg-wallpaper">
              <div className="flex justify-center items-center p-6">
                  <img alt="" src={Logo} className="max-w-[350px]"/>
              </div>
              <div data-aos="fade-up" className="text-center p-6 uppercase">
                  <h1 className="md:text-7xl text-5xl font-black text-white">Chaveiro em Recife</h1>
                  <p className="text-purple-800 md:text-3xl text-xl font-black pt-3">Automotivo e Residencial</p>
              </div>
              <div data-aos="fade-down" className="flex md:flex-row flex-col justify-center text-center items-center gap-10">
                  <a href="tel:81987444125"
                     className="flex gap-2 items-center content-center bg-purple-800 hover:bg-white text-lg
                     hover:text-purple-900 justify-center font-semibold rounded-md md:px-12 w-full md:w-[25%] px-12 py-3 duration-500">
                      <BsTelephone className="md:text-2xl text-xl"/> LIGAR AGORA
                  </a>
                  <BtWhatsApp/>
              </div>
          </motion.div>
          <div className="relative w-full min-h-80 py-12 bg-white">
              <div data-aos="fade-down" className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-purple-900">Nossos serviços</h1>
              </div>
              <div className="flex flex-wrap justify-center gap-6 p-6 text-black">
                  {servicos.map((servico, index) => (
                      <ServiceCard key={index} {...servico} delay={index * 150} />
                  ))}
              </div>
          </div>
          <div className="w-full min-h-80 py-12 bg-purple-900 transition duration-500">
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }} className="items-center text-center">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-white">O Seu carro em boas mãos</h1>
                  <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={2500} infinite={true} transitionDuration={500}>
                      {imagens.map((src, index) => (
                          <img key={index} src={src} className="max-w-[300px]" alt="carousel"/>
                      ))}
                  </Carousel>
              </motion.div>
          </div>
          <div className="bg-white py-16">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-purple-900">Nossa Localização</h1>
              </div>
              <div data-aos="fade-up" className="transition duration-500">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.455954193127!2d-34.91362963514109!3d-8.054885436140138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fb863d4777%3A0x1ef0c3aacaf21832!2sChaveiro%20Auto%20Key!5e0!3m2!1spt-BR!2sbr!4v1716633545563!5m2!1spt-BR!2sbr"
                      width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full bg-white min-h-80 p-12">
              <div className="items-center text-center text-black mb-6">
                  <h1 className="uppercase font-black md:text-5xl text-3xl text-purple-900">O que dizem nossos clientes?</h1>
              </div>
              <div className="w-full">
                  <GoogleReviews/>
              </div>
          </div>
          <div className="w-full p-12">
              <div className="flex flex-col items-center text-center justify-center text-white">
                  <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="w-[80%] uppercase font-black md:text-5xl text-xl text-wrap text-white">NÃO CORRA RISCOS, CONFIE EM
                      QUEM SABE!</motion.h1>
                  <p className="w-[60%] p-2 text-center">Ao escolher um profissional inadequado, você corre o risco de
                      danificar a programação eletrônica do seu veículo. A falta de técnica e conhecimento avançado pode
                      levar a erros graves, resultando em custosas correções e até mesmo na necessidade de substituição
                      de componentes essenciais.</p>
                  <BtWhatsApp/>
              </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center bg-gray-950 p-6">
              <div className="w-full flex flex-col font-bold text-lg">
                  <h1>Horário de Funcionamento:</h1>
                  <div>
                      <span>Seg - Sex: 08:00 às 18:00 | </span>
                      <span>Sáb: 08:00 às 14:00</span>
                  </div>
              </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center p-6 text-3xl">
              <a href="https://www.instagram.com/autokeyy" target="_blank" className=""><FaInstagram/></a>
          </div>
          {showButton && (
              <div>
                  <button className="fixed m-2 bottom-8 right-8 bg-gray-800/70 p-3 text-white text-lg font-bold
                  rounded-md" aria-label="Filter" onClick={scrollToTop}>
                      <SlArrowUp />
                  </button>
              </div>
          )}
      </div>
  )
}
export default App
