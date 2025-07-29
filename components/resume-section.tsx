"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ResumeSection = () => {
  const handleViewResume = () => {
    // In a real application, this would open a PDF viewer or modal
    window.open("/Krish Sirohiya IT.pdf", "_blank")
  }

  const handleDownloadResume = () => {
    // In a real application, this would trigger a download
    const link = document.createElement("a")
    link.href = "/Krish Sirohiya IT.pdf"
    link.download = "Krish Sirohiya IT.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Krish Sirohiya</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <p>• Street Food Hub App </p>
                          <p>• Blockchain Money Transaction Of Security </p>
                          <p>• Chat App For Live Chatting </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <p>Bachelor's in Computer Science</p>
                          <p>Laxminarayan Collage Of Technology, RGPV University (2021-2025)</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "JavaScript", "Node.js", "MongoDB"].map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center items-center text-center space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-32 h-40 bg-white dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200 dark:border-gray-600"
                  >
                    <div className="text-center">
                      <div className="w-16 h-20 bg-gradient-to-b from-blue-500 to-purple-500 rounded mx-auto mb-2"></div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Resume Preview</p>
                    </div>
                  </motion.div>

                  <div className="space-y-4 w-full">
                    <Button onClick={handleViewResume} variant="outline" className="w-full bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      onClick={handleDownloadResume}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
