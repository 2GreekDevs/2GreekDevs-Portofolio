import { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, SortAsc, SortDesc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { projectData, allCategories } from '@/data/projectsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectData.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
      const matchesFeatured = !showFeaturedOnly || project.featured;

      return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        case 'status':
          aValue = a.status.toLowerCase();
          bValue = b.status.toLowerCase();
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedStatus, sortBy, sortOrder, showFeaturedOnly]);

  const projectStats = useMemo(() => {
    const stats = {
      total: projectData.length,
      live: projectData.filter(p => p.status === 'Live').length,
      inDevelopment: projectData.filter(p => p.status === 'In Development').length,
      wip: projectData.filter(p => p.status === 'Coming Soon').length,
      featured: projectData.filter(p => p.featured).length,
    };
    return stats;
  }, []);

  const allStatuses = ['All', 'Live', 'In Development', 'Coming Soon'];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of web applications, Discord bots, mobile apps, and design projects.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{projectStats.total}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{projectStats.live}</div>
              <div className="text-sm text-muted-foreground">Live</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{projectStats.inDevelopment}</div>
              <div className="text-sm text-muted-foreground">In Development</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{projectStats.wip}</div>
              <div className="text-sm text-muted-foreground">WIP</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{projectStats.featured}</div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter size={20} />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search projects, technologies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {allCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {allStatuses.map(status => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
              </Button>

              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              >
                Featured Only
              </Button>

              <div className="flex gap-2 ml-auto">
                <Button
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List size={16} />
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'All' || selectedStatus !== 'All' || showFeaturedOnly || searchTerm) && (
              <div className="flex flex-wrap gap-2 pt-2 border-t">
                {searchTerm && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                    Search: "{searchTerm}" ✕
                  </Badge>
                )}
                {selectedCategory !== 'All' && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('All')}>
                    Category: {selectedCategory} ✕
                  </Badge>
                )}
                {selectedStatus !== 'All' && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedStatus('All')}>
                    Status: {selectedStatus} ✕
                  </Badge>
                )}
                {showFeaturedOnly && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setShowFeaturedOnly(false)}>
                    Featured Only ✕
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProjects.length} of {projectData.length} projects
          </p>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          {filteredAndSortedProjects.length > 0 ? (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredAndSortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground mb-4">
                No projects found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                  setShowFeaturedOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;