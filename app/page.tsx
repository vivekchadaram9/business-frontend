
import React from "react";
import "./globals.css";
import { NewsletterForm } from "@/components/NewsLetterForm";
import Image from "next/image";

function Home() {
  return (
    <div className="w-full min-h-screen">
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/background-home.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 py-12 text-white">
        <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 sm:space-y-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gradient-gold font-cinzel leading-tight">
            Welcome to Goito
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gradient-gold font-semibold">
            Wear the Scene. Live the Cinema.
          </h2>
          <p className="text-sm sm:text-base max-w-2xl text-white/80">
            Iconic movie moments printed on premium t-shirts. Created by five friends who believe every great film deserves to be worn.
          </p>

          <div className="mt-8 w-full max-w-lg space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gradient-gold">
              Stay in the Loop
            </h3>
            <p className="text-sm sm:text-base text-white/70">
              Be the first to know about new releases and exclusive movie collections.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
    </section> 

    
    <section
      className="w-full min-h-screen bg-cover bg-zinc-700"
      
    >
      {/* why goito */}
       <div className=" text-center  bg-black/60 flex items-center justify-center px-4 py-12 text-white flex-col">
          <h1 className="text-3xl md:text-4xl font-cinematic font-semibold mb-8 text-gradient-gold">
            Why Goito?
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-amber-300/20 rounded-full flex items-center justify-center group-hover:bg-amber-300/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6"
                    />
                    <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-modern font-semibold mb-3 text-white">
                Storytelling Through Clothing
              </h3>
              <p className="text-white/70 font-modern">
                Every design captures an iconic cinematic moment, turning your
                wardrobe into a gallery of film history.
              </p>
            </div>

            <div className="group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-amber-300/20 rounded-full flex items-center justify-center group-hover:bg-amber-300/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-modern font-semibold mb-3 text-white">
                Film Culture Love
              </h3>
              <p className="text-white/70 font-modern">
                Created by cinephiles, for cinephiles. We breathe movies and
                translate that passion into wearable art.
              </p>
            </div>

            <div className="group">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-amber-300/20 rounded-full flex items-center justify-center group-hover:bg-amber-300/30 transition-colors">
                  <svg
                    className="w-8 h-8 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-modern font-semibold mb-3 text-white">
                Design Authenticity
              </h3>
              <p className="text-white/70 font-modern">
                Original, in-house printed designs that honor the artistry of
                cinema without compromising on style or quality.
              </p>
            </div>
          </div>
        </div>
{/* about us */}
<div className="text-center bg-black/60 flex items-center justify-center px-4 py-12 text-white">
  <div className="flex flex-col items-center w-full max-w-6xl space-y-10">
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-cinematic font-semibold mb-6 text-gradient-gold">
        About Us
      </h1>
      <p className="text-sm sm:text-base text-white/80">
        Five friends. One passion. Countless Stories
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4">
      <Image
        src="/images/friends.jpg"
        alt="Iconic Movie Tee"
        className="rounded-xl object-cover"
        width={280}
        height={300}
        loading="lazy"
      />

      <div className="text-left max-w-xl space-y-5 text-sm sm:text-base text-white/80">
        <p>
          Goito was born from late-night movie marathons and endless discussions
          about the power of cinema. We're five friends who believe that the greatest
          scenes in film history deserve to live beyond the screen.
        </p>

        <p>
          Our journey began in a small apartment, surrounded by movie posters and
          sketches. What started as a shared love for cinema has evolved into a brand
          that celebrates the artistry of filmmaking through wearable art.
        </p>

        <p>
          Each design is a love letter to the movies that shaped us, created with the
          same passion and attention to detail that our favorite directors put into
          their masterpieces.
        </p>
      </div>
    </div>
  </div>
</div>

    </section> 
    </div>
  );
}

export default Home;
