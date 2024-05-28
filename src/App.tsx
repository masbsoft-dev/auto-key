import './App.css'
import Logo from './assets/Logo.png'

function App() {
  return (
      <>
      <div className="relative w-full min-h-80 p-12">
          <div className="flex justify-center items-center p-6">
              <img alt="" src={Logo} className="max-w-[420px]"/>
          </div>
          <div className="text-center p-6 uppercase">
              <h1 className="text-7xl font-black">Chaveiro em Recife</h1>
              <p className="text-purple-800 text-3xl font-black pt-3">Atendimento Especializado</p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <a href="tel:8131329121" className="bg-purple-800 hover:bg-white hover:text-purple-900 font-semibold rounded-md px-12 py-3 duration-500">
                LIGAR AGORA
            </a>
            <a href="https://wa.me/5581987444125?text=Ol%C3%A1%21+Vim+do+site.+Tenho+interesse+no+servi%C3%A7o."
               target="_blank" className="bg-green-500 hover:bg-emerald-700 font-semibold rounded-md px-12 py-3 duration-500">
                FALAR NO WHATSAPP
            </a>
          </div>
      </div>
      <div className="relative w-full min-h-80 py-12 bg-white">
          <div className="items-center text-center text-black">
              <h1 className="uppercase font-black text-5xl pb-12">Nossos serviços</h1>
          </div>
      </div>
      <div className="w-full min-h-80 py-24 bg-purple-900">
        <div className="">

        </div>
      </div>
          <div className="bg-white py-24">
              <div className="items-center text-center text-black">
                    <h1 className="uppercase font-black text-5xl pb-12">Nossa Localização</h1>
              </div>
              <div className="">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.455954193127!2d-34.91362963514109!3d-8.054885436140138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19fb863d4777%3A0x1ef0c3aacaf21832!2sChaveiro%20Auto%20Key!5e0!3m2!1spt-BR!2sbr!4v1716633545563!5m2!1spt-BR!2sbr"
                  width="100%" height="350"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
          <div className="w-full min-h-80 p-12">
              <div className="">

              </div>
          </div>
      </>
  )
}

export default App
