import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Liberté Maisonettes - Website",
    description: "A modern, responsive website for Liberté Maisonettes, showcasing their luxury accommodations with stunning visuals and user-friendly navigation.",
    image: "#",
    link: "#",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    status: "Live"
  },
  {
    id: 2,
    title: "Classic Snake Game",
    description: "A nostalgic Snake game with modern touches, featuring progressive difficulty, high score tracking, and retro-inspired visual effects.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1374&auto=format",
    link: "#",
    category: "Game Development",
    technologies: ["JavaScript", "Canvas API", "HTML5"],
    status: "In Development"
  },
  {
    id: 3,
    title: "Tavern Sotiris - Website",
    description: "A sleek, modern website for Tavern Sotiris, featuring a menu showcase, reservation system, and location map integration.",
    image: "#",
    link: "#",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    status: "In Development"
  },
  {
    id: 4,
    title: "Creative Portfolio Template",
    description: "A stunning portfolio template designed for creative professionals with smooth animations, dark mode support, and optimized performance.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format",
    link: "#",
    category: "Design",
    technologies: ["React", "Framer Motion", "SCSS"],
    status: "Coming Soon"
  }
];

const ProjectsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'In Development': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'Coming Soon': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };


  return (
    <section id="projects" className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-greekteal/10 border border-greekteal/20 mb-4">
              <div className="w-1.5 h-1.5 bg-greekteal rounded-full"></div>
              <span className="text-sm font-medium text-greekteal">Featured Work</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Latest <span className="text-greekteal">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of innovative web applications, games, and digital solutions crafted with modern technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-greekteal/30 transition-all duration-300 hover:shadow-lg hover:shadow-greekteal/5">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 justify-center">
                        {project.status === 'Live' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white text-black text-xs px-2 py-1 h-7 mr-52 "
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Visit
                            </a>
                          </Button>
                        )}
                        {project.status === 'In Development' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white text-black text-xs px-2 py-1 h-7  mr-52 "
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Preview
                          </Button>
                        )}
                        {project.status === 'Coming Soon' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/40 cursor-not-allowed text-black text-xs px-2 py-1 h-7 mr-52"
                            disabled
                          >
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className={`${getStatusColor(project.status)} font-medium text-xs px-2 py-0.5`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3 pt-4 px-4">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs font-medium w-fit">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold leading-tight group-hover:text-greekteal transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow pt-0 px-4">
                    <p className="text-muted-foreground leading-relaxed mb-3 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-muted/50 hover:bg-greekteal/10 hover:border-greekteal/30 transition-colors px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-muted/50 px-2 py-0.5">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>


                           {/***************************************************/}
                          {/***************** Card Footer Buttons *************/}
                         {/***************************************************/}


                  <CardFooter className="pt-0 px-4 pb-4">
                    {project.status === 'Live' ? (
                      <Button
                        asChild
                        className="w-full bg-greekteal hover:bg-greekteal/90 text-white font-medium text-sm h-8"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="h-3 w-3 ml-1.5" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className="w-full bg-greekteal hover:bg-greekteal/90 text-white font-medium text-sm h-8"
                        disabled={project.status === 'Coming Soon'}
                      >
                        <a href={project.link}>
                          {project.status === 'Coming Soon' ? 'Explore Project' : 'Explore Project'}
                          {project.status !== 'Explore Project' && (
                            <ExternalLink className="h-3 w-3 ml-1.5" />
                          )}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
              
                variant="outline"
                size="lg"
                className="bg-background hover:bg-greekteal hover:text-white border-greekteal/30 hover:border-greekteal transition-all duration-300 font-medium px-8"
              >
                <a 
                  href="/projects" 
                  className="inline-flex items-center gap-2"
                >
                  View All Projects
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
