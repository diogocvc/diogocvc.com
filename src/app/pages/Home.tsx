import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const capabilities = [
  {
    title: 'Product Leadership',
    description: 'Building and scaling products, teams and operational systems from concept to launch.',
  },
  {
    title: 'Product Strategy',
    description: 'Connecting user needs, business goals and execution.',
  },
  {
    title: 'Product Management',
    description: 'Transforming ideas into products through research, prioritization and strategic planning.',
  },
  {
    title: 'Brand Systems',
    description: 'Creating communication frameworks that help complex ideas become understandable and scalable.',
  },
  {
    title: 'Service & Business Design',
    description: 'Designing products beyond software through services, operations and business models.',
  },
];

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight">
              Senior Designer<br />&amp; Product Leader<br />
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black/60">
                building products from ideation to launch
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-black/60 max-w-4xl">
              20+ years across product design, design leadership and brand-driven experiences
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:gap-5"
            >
              <span>Learn more</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl mb-20"
          >
            Selected Work
          </motion.h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 px-8 bg-primary text-primary-foreground">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl mb-20"
          >
            Capabilities
          </motion.h2>
          <div className="flex flex-col divide-y divide-white/10">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid gap-4 py-12 first:pt-0 last:pb-0 md:grid-cols-[80px_1fr_2fr] md:py-16"
              >
                <span className="text-2xl font-medium text-white/40 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-3xl md:text-4xl font-medium">
                  {cap.title}
                </h3>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <Link
        to={`/work/${project.id}`}
        className="group block"
      >
        <div className="space-y-8">
          <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
            <motion.img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-black/40 uppercase tracking-widest">
              {project.client}
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl group-hover:opacity-60 transition-opacity">
              {project.title}
            </h3>
            <p className="text-lg md:text-xl text-black/60 max-w-3xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
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
        </div>
      </Link>
    </motion.div>
  );
}
