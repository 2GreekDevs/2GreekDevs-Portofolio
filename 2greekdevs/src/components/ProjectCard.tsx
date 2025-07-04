import { motion } from "framer-motion";
import { CheckCircle, Clock, ExternalLink, Github } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  status: "Live" | "In Development" | "Coming Soon";
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusIcon = () => {
    switch (project.status) {
      case "Live":
        return <CheckCircle className="text-green-500" size={18} />;
      case "In Development":
        return <Clock className="text-blue-500" size={18} />;
      case "Coming Soon":
        return <Clock className="text-yellow-500" size={18} />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (project.status) {
      case "Live":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "In Development":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "Coming Soon":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-xl ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
        {project.imageUrl && (
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={project.imageUrl} 
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.featured && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
        )}
        
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
            <div className="flex items-center gap-1">
              {getStatusIcon()}
            </div>
          </div>
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
              <Badge variant="secondary" className={`text-xs ${getStatusColor()}`}>
                {project.status}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0 gap-2">
          {project.liveUrl && (
            <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} className="mr-1" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} className="mr-1" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;