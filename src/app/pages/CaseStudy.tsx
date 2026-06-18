import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProject, getNextProject, getPreviousProject } from '../data/projects';
import { useEffect } from 'react';

interface CaseStudyProps {
  projectId: string;
}

export function CaseStudy({ projectId }: CaseStudyProps) {
  const project = getProject(projectId);
  const nextProject = getNextProject(projectId);
  const previousProject = getPreviousProject(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      {/* Hero Section */}
      <section className="px-8 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap gap-8 text-sm text-black/50">
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-1">Year</span>
                  <span className="text-black">{project.year}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-1">Role</span>
                  <span className="text-black">{project.role}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-1">Client</span>
                  <span className="text-black">{project.client}</span>
                </div>
                {project.company && (
                  <div>
                    <span className="block text-xs uppercase tracking-widest mb-1">Company</span>
                    <span className="text-black">{project.company}</span>
                  </div>
                )}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-black/5 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-20"
      >
        <div className="w-full aspect-[21/9] bg-gray-100 overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* Overview / Challenge */}
      <section className="px-8 mb-32">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm text-black/40 uppercase tracking-widest font-medium">Challenge</p>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Contribution */}
      <section className="px-8 mb-32">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm text-black/40 uppercase tracking-widest font-medium">
              My Contribution
            </p>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              {project.sections[0]?.content || 'Strategic product leadership and design direction.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      {project.sections.slice(1).map((section, index) => (
        <section key={index} className="mb-32">
          <div className="max-w-[900px] mx-auto px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-sm text-black/40 uppercase tracking-widest font-medium">
                {index % 2 === 0 ? 'Strategy' : 'Execution'}
              </p>
              <h2 className="text-3xl md:text-4xl">{section.title}</h2>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          </div>

          {section.images && section.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`space-y-8 ${
                section.images.length === 1 ? '' : 'px-8 max-w-[1400px] mx-auto'
              }`}
            >
              {section.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`${
                    section.images!.length === 1
                      ? 'w-full aspect-[21/9]'
                      : 'aspect-[16/9] rounded-lg overflow-hidden'
                  } bg-gray-100`}
                >
                  <img
                    src={image}
                    alt={`${section.title} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </section>
      ))}

      {/* Navigation */}
      <section className="px-8 mt-32 pt-20 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/"
              className="group flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">Back to Home</span>
            </Link>

            {previousProject && (
              <Link
                to={`/work/${previousProject.id}`}
                className="group space-y-2 hover:opacity-60 transition-opacity"
              >
                <p className="text-sm text-black/40">Previous</p>
                <p className="text-lg">{previousProject.title}</p>
              </Link>
            )}

            {nextProject && (
              <Link
                to={`/work/${nextProject.id}`}
                className="group space-y-2 hover:opacity-60 transition-opacity md:text-right"
              >
                <p className="text-sm text-black/40">Next</p>
                <p className="text-lg">{nextProject.title}</p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
