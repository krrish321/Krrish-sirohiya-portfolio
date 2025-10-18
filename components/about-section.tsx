"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const AboutSection = () => {
  const quickInfo = [
    { icon: MapPin, label: "Location", value: "Indore, MP" },
    { icon: Calendar, label: "Age", value: "22 Years" },
    { icon: Briefcase, label: "Experience", value: "Fresher" },
    { icon: Mail, label: "Email", value: "Krrishsirohiya321@gmail.com" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                <img
                  src="/WhatsApp Image 2025-10-18 at 3.13.04 PM.jpeg?height=300&width=300"
                  alt="Profile"
                  className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                      I'm a passionate <strong>Full Stack Developer</strong>  Self-driven Full-Stack Developer skilled in the MERN stack (MongoDB, Express.js,React.js,Node.js) with
                      a focus on building scalable, user-centric web apps. Strong grasp of real-world project development, clean
                      code practices, and modern tools like Redux, REST APIs, and Git. Passionate about learning, problem-
                      solving, and delivering high-impact digital solutions in fast-paced environments.
                                    </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I love turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me
                contributing to open source projects, learning new technologies, or sharing knowledge with the developer
                community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
