import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />

      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-1 px-4 py-2 rounded-full
                cursor-pointer transition-all hover:scale-110 animate-bounce-slow z-50">

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
          alt="Chatbot Icon"
          className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_5px_15px_rgba(139,92,246,0.6)]"
        />

        <a
          href="https://pallab-portfolio-updated.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 font-semibold text-xs sm:text-sm text-center"
        >
          Contact Developer
        </a>
      </div>

      <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-bounce-slow {
                    animation: float 2.5s ease-in-out infinite;
                }
      `}</style>

    </div>
  )
}

export default Home
