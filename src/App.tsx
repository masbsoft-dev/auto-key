import './App.css'
import Logo from './assets/Logo.png'
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
      <>
          <div className="relative w-full min-h-80 p-12 bg-wallpaper">
              <div className="flex justify-center items-center p-6">
                  <img alt="" src={Logo} className="max-w-[420px]"/>
              </div>
              <div className="text-center p-6 uppercase">
                  <h1 className="md:text-7xl text-5xl font-black">Chaveiro em Recife</h1>
                  <p className="text-purple-800 md:text-3xl text-xl font-black pt-3">Automotivo e Residencial</p>
              </div>
              <div className="flex justify-center text-center items-center gap-10">
                  <a href="tel:8131329121"
                     className="bg-purple-800 hover:bg-white md:text-lg text-xs hover:text-purple-900 font-semibold rounded-md md:px-12 px-6 py-3 duration-500">
                      LIGAR AGORA
                  </a>
                  <a href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o."
                     target="_blank"
                     className="bg-green-500 hover:bg-emerald-700 md:text-lg text-xs font-semibold rounded-md md:px-12 px-6 py-3 duration-500">
                      FALAR NO WHATSAPP
                  </a>
              </div>
          </div>
          <div className="relative w-full min-h-80 py-12 bg-white">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12">Nossos serviços</h1>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4 justify-center items-center text-black p-5">
                  <div
                      className="flex bg-purple-100 p-4 items-center flex-col text-center min-h-[300px] rounded-md hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Cópias De Chave</h1>
                      <img className="max-w-[280px] p-5" src={Logo}/>
                      <p>Realizamos Cópias de Chaves Codificadas em geral. Entre em contato agora mesmo.</p>
                  </div>
                  <div
                      className="flex bg-purple-100  p-4 items-center flex-col text-center min-h-[300px] rounded-md hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Chaves Canivetes</h1>
                      <img className="max-w-[280px] p-5" src={Logo}/>
                      <p>Chaves Canivetes e Presenciais Nacionais e Importadas. Entre em contato agora mesmo.</p>
                  </div>
                  <div
                      className="flex bg-purple-100  p-4 items-center flex-col text-center min-h-[300px] rounded-md hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Trocas De Carcaça</h1>
                      <img className="max-w-[280px] p-5" src={Logo}/>
                      <p>A carcaça da sua chave esta danificada ou feia? Nós trocamos para você.</p>
                  </div>
                  <div
                      className="flex bg-purple-100  p-4 items-center flex-col text-center min-h-[300px] rounded-md hover:bg-purple-200 duration-500 cursor-pointer">
                      <h1 className="font-bold mb-2 uppercase">Chaves Codificadas</h1>
                      <img className="max-w-[280px] p-5" src={Logo}/>
                      <p>Profissionais prontos para realizarem as mais diversas codificações de chaves.</p>
                  </div>
              </div>
          </div>
          <div className="w-full min-h-80 py-12 bg-purple-900">
              <div className="items-center text-center">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12">O Seu carro em boas mãos</h1>
              </div>
          </div>
          <div className="bg-white py-16">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl pb-12">Nossa Localização</h1>
              </div>
              <div className="">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.455954193127!2d-34.91362963514109!3d-8.054885436140138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fb863d4777%3A0x1ef0c3aacaf21832!2sChaveiro%20Auto%20Key!5e0!3m2!1spt-BR!2sbr!4v1716633545563!5m2!1spt-BR!2sbr"
                      width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full bg-white min-h-80 p-12">
              <div className="items-center text-center text-black">
                  <h1 className="uppercase font-black md:text-5xl text-3xl">O que dizem nossos clientes?</h1>
              </div>
              <div className="w-full">
                  <iframe src="https://fbed4b6ad06541d58f3ac42f8200fc35.elf.site"
                          className="md:w-full min-w-[100%] md:min-h-[500px] min-h-[600px] " loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full p-12">
              <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="w-[80%] uppercase font-black md:text-5xl text-xl text-wrap">NÃO CORRA RISCOS, CONFIE EM
                      QUEM SABE!</h1>
                  <p className="w-[80%] p-2 text-center">Ao escolher um profissional inadequado, você corre o risco de
                      danificar a programação eletrônica do seu veículo. A falta de técnica e conhecimento avançado pode
                      levar a erros graves, resultando em custosas correções e até mesmo na necessidade de substituição
                      de componentes essenciais.</p>
                  <a href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o."
                     target="_blank"
                     className="bg-green-500 mt-6 hover:bg-emerald-700 md:text-lg text-xs font-semibold rounded-md md:px-12 px-6 py-3 duration-500">
                      FALAR NO WHATSAPP
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
          <div className="flex flex-col items-center text-center justify-center p-6">
              <a href="https://www.instagram.com/autokeyy" target="_blank" className=""><FaInstagram /></a>
          </div>
      </>
  )
}

export default App
