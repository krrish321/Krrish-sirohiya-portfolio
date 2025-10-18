"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Mail, ChevronDown } from "lucide-react"

// --- Light Hero Component ---
const LightHero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Frontend Developer", "React.js Developer", "MERN Stack Enthusiast", "Full Stack Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home-light" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-pink-400/20 to-blue-400/20 rounded-full"
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Krish Developer
            </span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
            <AnimatePresence mode="wait">
              <motion.span key={currentRole} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="inline-block">
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications using modern technologies. I love turning ideas into reality through code.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo("#projects")} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Projects
            </button>
            <button onClick={() => scrollTo("#contact")} className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center">
              <Mail className="mr-2 h-4 w-4" /> Hire Me
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="cursor-pointer" onClick={() => scrollTo("#about")}>
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


// --- Dark Hero Component ---
const useMagneticEffect = (ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const handleMouseMove = (e) => {
      const rect = currentRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    currentRef.addEventListener("mousemove", handleMouseMove);
    currentRef.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [ref, x, y]);
  return { x, y };
};

const MagneticButton = ({ children, ...props }) => {
  const ref = useRef(null);
  const { x, y } = useMagneticEffect(ref);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.1 });
  return (
    <motion.button ref={ref} style={{ x: springX, y: springY }} {...props}>
      {children}
    </motion.button>
  );
};

const DarkHero = () => {
  const roles = ["Frontend Developer", "React.js Specialist", "MERN Stack Enthusiast", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];

  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const charVariants = { hidden: { opacity: 0, y: 20, filter: 'blur(5px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] } } };

  return (
    <>
      <style jsx global>{`
        @keyframes aurora { 0% { transform: translate(-50%, -50%) rotate(0deg) scale(2); } 50% { transform: translate(-50%, -50%) rotate(180deg) scale(2.5); } 100% { transform: translate(-50%, -50%) rotate(360deg) scale(2); } }
        .aurora-1 { animation: aurora 20s linear infinite; } .aurora-2 { animation: aurora 25s linear infinite reverse; } .aurora-3 { animation: aurora 30s linear infinite; }
      `}</style>
      <section ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} id="home-dark" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-white" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vw] bg-gradient-to-tr from-purple-600/50 via-blue-500/50 to-transparent rounded-full aurora-1 opacity-20" />
          <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] bg-gradient-to-tl from-pink-500/50 via-indigo-600/50 to-transparent rounded-full aurora-2 opacity-20" />
          <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vw] bg-gradient-to-br from-sky-400/50 via-teal-400/50 to-transparent rounded-full aurora-3 opacity-20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="container mx-auto px-6 text-center relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4" style={{ textShadow: "0 0 15px rgba(192, 132, 252, 0.3)" }}>
              <span className="bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 bg-clip-text text-transparent">Krish Developer</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="text-xl md:text-2xl text-purple-200 mb-8 h-8 font-light">
              <motion.div key={currentRoleIndex} initial="hidden" animate="visible" className="flex justify-center" variants={{ visible: { transition: { staggerChildren: 0.03 } } }}>
                {currentRole.split("").map((char, index) => (<motion.span key={`${char}-${index}`} variants={charVariants} className="inline-block">{char === " " ? "\u00A0" : char}</motion.span>))}
              </motion.div>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">Passionate about creating beautiful, functional, and user-friendly web applications using modern technologies. I love turning ideas into reality through code.</motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton onClick={() => scrollTo("#projects")} className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:border-white/40"><span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span><span className="relative z-10">View Projects</span></MagneticButton>
              <MagneticButton onClick={() => scrollTo("#contact")} className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-gray-200 bg-transparent border border-white/20 transition-all duration-300 hover:text-white hover:border-white/40"><span className="relative z-10 flex items-center"><Mail className="mr-2 h-4 w-4" />Hire Me</span></MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div onClick={() => scrollTo("#about")} className="cursor-pointer group flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 group-hover:border-white transition-colors">
              <motion.div animate={{ y: [0, 10], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }} className="w-1 h-2 bg-gray-400 rounded-full group-hover:bg-white transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};


// --- Main Exported Component ---
const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return <div className="min-h-screen" />;
  }

  return (
    <div className="relative">
       <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'dark' ? <DarkHero /> : <LightHero />}
          </motion.div>
       </AnimatePresence>
    </div>
  )
}

export default HeroSection

