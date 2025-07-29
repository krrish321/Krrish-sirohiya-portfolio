"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Krrishsirohiya321@gmail.com")
      setEmailCopied(true)
      toast({
        title: "Email copied!",
        description: "Email address has been copied to clipboard.",
      })
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually: Krrishsirohiya321@gmail.com",
        variant: "destructive",
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Krrishsirohiya321@gmail.com",
      action: copyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9770929799",
      action: () => window.open("tel:+91-9770929799"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, MP, India",
      action: () => window.open("https://maps.app.goo.gl/4U5Vzpq7YrfWeGgA6"),
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/krrish321",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/krrish-sirohiya-211405224/",
      color: "hover:text-blue-600",
    },
  
    {
      icon: Mail,
      label: "Mail",
      url: "mailto:Krrishsirohiya321@gmail.com",
      color: "hover:text-blue-400",
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-800/50">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={info.action}
                    >
                      <CardContent className="p-4 flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                        </div>
                        {info.label === "Email" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              copyEmail()
                            }}
                          >
                            {emailCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <h4 className="font-semibold mb-2">Let's work together!</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
