"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Street Food Hub app",
      shortDescription: "Verified Food and Food Product with React and Node.js",
      fullDescription:
        "Hygiene Verified To proceed, you need to submit your warehouse details on streetfood@gmail.com. Within 24 hours, our team will visit your location for a hygiene and safety inspection. If your facility meets our standards, youll be approved to sell on our site. If not, unfortunately, you won’t be eligible. You must submit your request within 7 days to be considered",
      image: "/Project.jpg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "TailwindCSS"],
      github: "https://github.com/krrish321/streetfoodhub-app",
      live: "https://streetfoodhub-oi1o89w7u-krrish321s-projects.vercel.app",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      shortDescription: "Collaborative task management with real-time updates",
      fullDescription:
        "A modern task management application inspired by Trello and Asana. Built with React and Firebase, it features real-time collaboration, drag-and-drop functionality, team management, and progress tracking. Perfect for agile teams and project management.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Firebase", "Redux", "Material-UI", "React DnD"],
      github: "https://github.com/johndoe/taskmanager",
      live: "https://taskmanager-demo.vercel.app",
      features: [
        "Real-time collaboration with multiple users",
        "Drag and drop task organization",
        "Team management and role-based permissions",
        "Progress tracking and analytics",
        "File attachments and comments",
        "Mobile-responsive design",
      ],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      shortDescription: "Beautiful weather app with location-based forecasts",
      fullDescription:
        "An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations. Uses OpenWeatherMap API for accurate data and includes features like location detection, favorite cities, and weather alerts.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Styled Components"],
      github: "https://github.com/johndoe/weather-dashboard",
      live: "https://weather-dashboard-demo.vercel.app",
      features: [
        "Current weather and 7-day forecast",
        "Interactive weather maps",
        "Location-based weather detection",
        "Favorite cities management",
        "Weather alerts and notifications",
        "Beautiful data visualizations",
      ],
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      shortDescription: "Analytics dashboard for social media management",
      fullDescription:
        "A comprehensive social media analytics dashboard that helps businesses track their social media performance across multiple platforms. Features include engagement metrics, audience insights, content scheduling, and detailed reporting.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js", "NextAuth"],
      github: "https://github.com/johndoe/social-dashboard",
      live: "https://social-dashboard-demo.vercel.app",
      features: [
        "Multi-platform social media integration",
        "Real-time analytics and metrics",
        "Content scheduling and management",
        "Audience insights and demographics",
        "Custom reporting and exports",
        "Team collaboration tools",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-800/50">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.live, "_blank")}
                      className="flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6">
                  <img
                    src={projects.find((p) => p.id === selectedProject)?.image || "/placeholder.svg"}
                    alt={projects.find((p) => p.id === selectedProject)?.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {projects.find((p) => p.id === selectedProject)?.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {projects
                        .find((p) => p.id === selectedProject)
                        ?.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects
                        .find((p) => p.id === selectedProject)
                        ?.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => window.open(projects.find((p) => p.id === selectedProject)?.github, "_blank")}
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(projects.find((p) => p.id === selectedProject)?.live, "_blank")}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default ProjectsSection
