import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useProjects } from '../data/useProjects';
import { Watcher } from '../components/watcher/Watcher';

const FILTER_TAGS = [
  'Selected work',
  'Product Strategy & Leadership',
  'Web3',
  'Product Design',
  'Design Leadership',
  'Branding & Comms',
  'Funding',
  'Startup',
  'Signature Framework',
  'Service Design',
  'Entrepreneurship',
  'All',
];

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
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  const projects = useProjects();
  const [activeTag, setActiveTag] = useState('Selected work');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const linkPrefix = isPt ? '/br' : '';

  const tagScrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  const updateScrollButtons = () => {
    const el = tagScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scrollTagsRight = () => {
    tagScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollTagsLeft = () => {
    tagScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100dvh-80px)] md:h-[calc(100dvh-80px)] relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] md:h-full px-8 py-20 md:py-0 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:flex-1 md:self-end py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
              className="space-y-8"
            >
              <h1 className="text-hero leading-display tracking-display font-medium">
                {isPt ? (
                  <>
                    Designer Sênior<br />&amp; Líder de Produto<br />
                    <span className="text-h2 text-muted-foreground">
                      criando produtos da ideação ao lançamento
                    </span>
                  </>
                ) : (
                  <>
                    Senior Designer<br />&amp; Product Leader<br />
                    <span className="text-h2 text-muted-foreground">
                      building products from ideation to launch
                    </span>
                  </>
                )}
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-4xl">
                {isPt
                  ? 'Mais de 20 anos em design de produto, liderança de design e experiências orientadas por marca'
                  : '20+ years across product design, design leadership and brand-driven experiences'}
              </p>
              <Button asChild variant="accent" size="lg" className="rounded-full px-8 py-6 text-body-lg shadow-sm">
                <Link to={isPt ? '/br/sobre' : '/about'}>
                  <span className="text-surface-0">{isPt ? 'Saiba mais' : 'Learn more'}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <Watcher />
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <span className="eyebrow mb-6">{isPt ? 'Projetos' : 'Projects'}</span>

          <div className="relative mb-16">
            <div
              ref={tagScrollRef}
              onScroll={updateScrollButtons}
              className="overflow-x-auto no-scrollbar"
            >
              <div className="flex gap-3 min-w-max pb-2">
                {FILTER_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      tag === activeTag
                        ? 'bg-accent text-surface-0'
                        : tag === 'Signature Framework'
                          ? 'bg-muted text-foreground ring-1 ring-border hover:ring-foreground/40'
                          : 'bg-muted text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {tag === 'Signature Framework' && activeTag !== tag ? '✦ ' : ''}
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            {canScrollLeft && (
              <button
                onClick={scrollTagsLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md shadow-md rounded-full p-2 hover:bg-card transition-all duration-200"
                aria-label="Scroll tags left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={scrollTagsRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md shadow-md rounded-full p-2 hover:bg-card transition-all duration-200"
                aria-label="Scroll tags right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          <motion.h2
            key={activeTag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 mb-20"
          >
            {activeTag}
          </motion.h2>

          <div className="space-y-32">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} linkPrefix={linkPrefix} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-body text-muted-foreground text-center py-20">
              {isPt ? 'Nenhum projeto encontrado para esta tag.' : 'No projects found for this tag.'}
            </p>
          )}
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 px-8 bg-card text-card-foreground">
        <div className="max-w-[1400px] mx-auto">
          <span className="eyebrow mb-6">{isPt ? 'O que eu faço' : 'What I do'}</span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h1 mb-20"
          >
            {isPt ? 'Capacidades' : 'Capabilities'}
          </motion.h2>
          <div className="flex flex-col divide-y divide-border">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid gap-4 py-12 first:pt-0 last:pb-0 md:grid-cols-[80px_1fr_2fr] md:py-16"
              >
                <span className="text-2xl font-medium text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-h3" style={{ color: 'inherit' }}>
                  {cap.title}
                </h3>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
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
  project: ReturnType<typeof useProjects>[number];
  index: number;
  linkPrefix: string;
}

function ProjectCard({ project, index, linkPrefix }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <Link
        to={`${linkPrefix}/work/${project.id}`}
        className="group block"
      >
        <div className="space-y-8">
          {(project.cardImage || project.coverImage) && (
            <div className="aspect-[16/9] bg-muted rounded-xl overflow-hidden shadow-sm transition-shadow duration-200 group-hover:shadow-md">
              <motion.img
                src={project.cardImage || project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
              />
            </div>
          )}

          <div className="space-y-4">
            {project.client && (
              <p className="text-small text-muted-foreground uppercase tracking-widest">
                {project.client}
              </p>
            )}
            <h3 className="text-h1 group-hover:opacity-60 transition-opacity">
              {project.title}
            </h3>
            <p className="text-body-lg text-muted-foreground max-w-3xl">
              {project.subtitle || project.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
