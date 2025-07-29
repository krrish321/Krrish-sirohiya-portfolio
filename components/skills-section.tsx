"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const SkillsSection = () => {
  const coreSkills = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 88 },
    { name: "TailwindCSS", level: 85 },
    { name: "Redux", level: 80 },
    { name: "Firebase", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "REST APIs", level: 82 },
  ]

  const learningSkills = [
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 75 },
    { name: "MongoDB", level: 65 },
    { name: "Express.js", level: 60 },
    { name: "Phython", level: 65 },
    { name: "Node.js", level: 68 },
  ]

  const SkillCard = ({ title, skills, delay = 0 }: { title: string; skills: typeof coreSkills; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="relative">
                <Progress value={0} className="h-2" />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: delay + index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50/50 dark:bg-gray-800/50">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <SkillCard title="Core Skills" skills={coreSkills} delay={0} />
          <SkillCard title="Learning & Exploring" skills={learningSkills} delay={0.2} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
