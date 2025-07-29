"use client"

import { motion } from "framer-motion"
import { Code, Github, Figma, Chrome, Zap, FileText, Database, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const TechStackSection = () => {
  const tools = [
    { name: "VS Code", icon: Code, color: "from-blue-500 to-blue-600", description: "Primary code editor" },
    {
      name: "GitHub",
      icon: Github,
      color: "from-gray-700 to-gray-800",
      description: "Version control & collaboration",
    },
    { name: "Figma", icon: Figma, color: "from-purple-500 to-pink-500", description: "UI/UX design tool" },
    { name: "Chrome DevTools", icon: Chrome, color: "from-green-500 to-blue-500", description: "Debugging & testing" },
    { name: "Postman", icon: Zap, color: "from-orange-500 to-red-500", description: "API testing" },
    { name: "Thunder Client", icon: Database, color: "from-purple-600 to-blue-600", description: "VS Code API client" },
    { name: "Notion", icon: FileText, color: "from-gray-600 to-gray-700", description: "Project management" },
    { name: "Canva", icon: Palette, color: "from-blue-400 to-purple-500", description: "Design & graphics" },
    { name: "AWS", icon: Zap, color: "from-orange-500 to-orange-600", description: "Cloud services" },
    { name: "Vercel", icon: Zap, color: "from-black-500 to-black-600", description: "Deployment platform" },
    
  ]

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🔥 Tech I Use
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and software that help me build amazing projects every day
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TooltipProvider>
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-lg`}
                        >
                          <tool.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tool.description}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
