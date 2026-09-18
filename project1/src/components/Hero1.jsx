import React, { useRef } from 'react'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Hero1 = () => {

  const hero = useRef();

  useGSAP(() => {

    gsap.from(".t", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    const an = new SplitText(".l", {
      type: "words"
    });

    gsap.from(an.words, {
      y: 5,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "bounce.in"
    });

  }, { scope: hero });

  return (
    <div ref={hero}>

      <div className="hero1 min-h-screen flex flex-col items-center justify-center text-center gap-4 p-8">

        <div className="t">
          AI powered DSA Tracker{" "}
          <button className="theme-button">
            New
          </button>
        </div>

        <div className="t">
          <h1 className="text-4xl font-bold">
            Master DSA with
          </h1>
        </div>

        <div className="t">
          <h1 className="text-4xl font-bold">
            AI-Powered Insights
          </h1>
        </div>

        <p className="w-3/5 l text-center">
          Track your progress across{" "}
          <span className="text-amber-300">LeetCode</span>{" "}
          and{" "}
          <span className="text-fuchsia-500">Codeforces</span>.
          Get personalized AI recommendations, build streaks, and level up your coding skills
        </p>

        <button className="cursor-pointer bg-emerald-500/90 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-3xl border border-emerald-300/30 shadow-lg shadow-emerald-500/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Hero1