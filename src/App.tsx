import './App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from './assets/Logo.png'
import Chave from './assets/chave.png'
import ChaveCanivete from './assets/chave-do-carro.png'
import ChaveCarcaca from './assets/chave-carcaca.png'
import ChaveCodificada from './assets/chave-codificada.png'
import { FaInstagram } from "react-icons/fa";
import {useState, useEffect} from "react";
import { SlArrowUp } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import img1 from "./assets/fotos/01.jpg"
import img2 from "./assets/fotos/02.jpg"
import img3 from "./assets/fotos/03.jpg"
import img4 from "./assets/fotos/04.jpg"
import img5 from "./assets/fotos/05.jpg"
import img6 from "./assets/fotos/06.jpg"
import img7 from "./assets/fotos/07.jpg"
import img8 from "./assets/fotos/08.jpg"
import img9 from "./assets/fotos/09.jpg"
import img10 from "./assets/fotos/10.jpg"

function App() {
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
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
            // the naming can be any, depends on you.
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
  return (
      <div>
          <div className="relative w-full min-h-80 p-12 bg-wallpaper">
              <div className="flex justify-center items-center p-6">
                  <img alt="" src={Logo} className="max-w-[453px]"/>
              </div>
              <div className="text-center p-6 uppercase">
                  <h1 className="md:text-7xl text-5xl font-black text-white">Chaveiro em Recife</h1>
                  <p className="text-purple-800 md:text-3xl text-xl font-black pt-3">Automotivo e Residencial</p>
              </div>
              <div className="flex md:flex-row flex-col justify-center text-center items-center gap-10">
                  <a href="tel:8131329121"
                     className="flex gap-2 items-center content-center bg-purple-800 hover:bg-white text-lg
                     hover:text-purple-900 justify-center font-semibold rounded-md md:px-12 w-full md:w-[25%] px-12 py-3 duration-500">
                      <BsTelephone className="md:text-2xl text-xl"/> LIGAR AGORA
                  </a>
                  <a href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o." target="_blank"
                     className="flex gap-2 items-center content-center bg-green-500 hover:bg-emerald-700 text-lg
                     justify-center font-semibold rounded-md md:px-12 w-full md:w-[25%] px-12 py-3 duration-500">
                      <FaWhatsapp className="md:text-2xl text-xl"/> FALAR NO WHATSAPP
                  </a>
              </div>
          </div>
          <div className="relative w-full min-h-80 py-12 bg-white">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-purple-900">Nossos serviços</h1>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4 justify-center items-center text-black p-5">
                  <div className="flex bg-purple-100 p-4 items-center flex-col text-center max-h-[320px] w-[80%] rounded-md
                  hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Cópias de Chave</h1>
                      <img src={Chave} className="w-[40%]"/>
                      <p className="max-w-[80%]">Realizamos Cópias de Chaves Codificadas em geral. Entre em contato agora mesmo.</p>
                  </div>
                  <div className="flex bg-purple-100 p-4 items-center flex-col text-center max-h-[320px] w-[80%] rounded-md
                  hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Chaves Canivetes</h1>
                      <img src={ChaveCanivete} className="w-[40%]"/>
                      <p className="">Chaves Canivetes e Presenciais Nacionais e Importadas. Entre em contato agora mesmo.</p>
                  </div>
                  <div className="flex bg-purple-100 p-4 items-center flex-col text-center max-h-[320px] w-[80%] rounded-md
                  hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Troca de Carcaça</h1>
                      <img src={ChaveCarcaca} className="w-[40%]"/>
                      <p className="max-w-[80%]">A carcaça da sua chave esta danificada ou feia? Nós trocamos para você.</p>
                  </div>
                  <div className="flex bg-purple-100 p-4 items-center flex-col text-center max-h-[320px] w-[80%] rounded-md
                  hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Chaves Codificadas</h1>
                      <img src={ChaveCodificada} className="w-[40%]"/>
                      <p className="max-w-[80%]">Profissionais prontos para realizarem as mais diversas codificações de chaves.</p>
                  </div>
              </div>
          </div>
          <div className="w-full min-h-80 py-12 bg-purple-900">
              <div className="items-center text-center">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-white">O Seu carro em boas mãos</h1>
                  <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={2500} infinite={true} transitionDuration={500}>
                      <img src={img1} className="max-w-[300px]" />
                      <img src={img2} className="max-w-[300px]" />
                      <img src={img3} className="max-w-[300px]" />
                      <img src={img4} className="max-w-[300px]" />
                      <img src={img5} className="max-w-[300px]" />
                      <img src={img6} className="max-w-[300px]" />
                      <img src={img7} className="max-w-[300px]" />
                      <img src={img8} className="max-w-[300px]" />
                      <img src={img9} className="max-w-[300px]" />
                      <img src={img10} className="max-w-[300px]" />
                  </Carousel>
              </div>
          </div>
          <div className="bg-white py-16">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12 text-purple-900">Nossa Localização</h1>
              </div>
              <div className="">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.455954193127!2d-34.91362963514109!3d-8.054885436140138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fb863d4777%3A0x1ef0c3aacaf21832!2sChaveiro%20Auto%20Key!5e0!3m2!1spt-BR!2sbr!4v1716633545563!5m2!1spt-BR!2sbr"
                      width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full bg-white min-h-80 p-12">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl text-purple-900">O que dizem nossos clientes?</h1>
              </div>
              <div className="w-full">
                  <iframe src="https://fbed4b6ad06541d58f3ac42f8200fc35.elf.site"
                          className="md:w-full min-w-[100%] md:min-h-[500px] min-h-[600px] " loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full p-12">
              <div className="flex flex-col items-center text-center justify-center text-white">
                  <h1 className="w-[80%] uppercase font-black md:text-5xl text-xl text-wrap text-white">NÃO CORRA RISCOS, CONFIE EM
                      QUEM SABE!</h1>
                  <p className="w-[60%] p-2 text-center">Ao escolher um profissional inadequado, você corre o risco de
                      danificar a programação eletrônica do seu veículo. A falta de técnica e conhecimento avançado pode
                      levar a erros graves, resultando em custosas correções e até mesmo na necessidade de substituição
                      de componentes essenciais.</p>
                  <a href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o." target="_blank"
                     className="flex gap-2 mt-6 items-center content-center bg-green-500 hover:bg-emerald-700 text-lg
                     justify-center font-semibold rounded-md md:px-12 w-full md:w-[25%] px-12 py-3 duration-500">
                      <FaWhatsapp className="text-2xl"/> FALAR NO WHATSAPP
                  </a>
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
              <a href="https://www.instagram.com/autokeyy" target="_blank" className=""><FaInstagram /></a>
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
