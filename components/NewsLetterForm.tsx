"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/lib/api";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
//   const [name,setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsLoading(true);

//     // Simulate newsletter signup
//     setTimeout(() => {
//       setIsSubmitted(true);
//       setIsLoading(false);
//     }, 1000);
    
//   };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const res = await subscribeToNewsletter({ email });
      if (res.success) {
        setIsSubmitted(true);
      } else {
        alert(res.message || "Subscription failed");
      }
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
          }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cinematic-gold/20">
          <svg
            className="w-6 h-6 text-cinematic-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-white font-medium">
        You&apos;re in! We&apos;ll notify you when the first collection drops.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-black/30 border-white/20 text-white placeholder:text-white/70 focus:border-cinematic-gold focus:ring-cinematic-gold/50 h-12 px-4 py-3 text-sm"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className=" text-black font-semibold px-8 lg:h-12 whitespace-nowrap bg-amber-300 hover:bg-amber-200/90 "
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              Joining...
            </div>
          ) : (
            "Get Notified"
          )}
        </Button>
      </div>
      <p className="text-white/60 text-sm mt-3 text-center">
        Be the first to know when iconic movie-inspired tees drop.
      </p>
    </form>
  );
}
