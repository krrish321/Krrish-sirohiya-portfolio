"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import TechStackSection from "@/components/tech-stack-section"
import ProjectsSection from "@/components/projects-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import ScrollToTop from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Loading Portfolio Mystery...
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <TechStackSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
