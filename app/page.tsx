import React from 'react'
import "./globals.css";
import { NewsletterForm } from '@/components/NewsLetterForm';

function Home() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://storage.googleapis.com/uxpilot-auth.appspot.com/ee383477f3-2ce7738b6f478a4aa269.png')" }}>
    {/* <div className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-cinematic-gold to-transparent transform -rotate-45 animate-pulse" />
              <div className="absolute top-1/2 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-cinematic-silver to-transparent transform rotate-45 animate-pulse delay-1000" />
              <div className="absolute bottom-1/4 left-1/3 w-96 h-1 bg-gradient-to-r from-transparent via-cinematic-blue to-transparent transform -rotate-12 animate-pulse delay-2000" /> */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col space-y-10.5 text-white">
      <h1 className="text-6xl font-bold text-gradient-gold font-cinzel">Welcome to Goito</h1>
      <h1 className="text-2xl font-bold text-gradient-gold">
      Wear the Scene. Live the Cinema.
      </h1>
      <p>Iconic movie moments printed on premium t-shirts. Created by five friends who believe every great film deserves to be worn.</p>
      <div className='justify-center flex-col flex items-center space-y-5'>
         <h1 className='text-2xl font-bold text-gradient-gold'>Stay in the Loop</h1>
      <p>Be the first to know about new releases and exclusive movie collections</p>
      

    <NewsletterForm />

      
      </div>
     
    </div>
    
  </div>
  )
}

export default Home