import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useProject, useNextProject, usePreviousProject } from '../data/useProjects';
import type { ContentSection, TextSection, VideoSection, MetricsSection, ChipsSection, LinksSection } from '../data/projects';

interface CaseStudyProps {
  projectId: string;
}

export function CaseStudy({ projectId }: CaseStudyProps) {
  const location = useLocation();
  const isPt = location.pathname.startsWith('/br');
  const project = useProject(projectId);
  const nextProject = useNextProject(projectId);
  const previousProject = usePreviousProject(projectId);
  const linkPrefix = isPt ? '/br' : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 mb-4">Project not found</h1>
          <Link to={linkPrefix || '/'} className="text-accent hover:underline">
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
              <div className="flex flex-wrap gap-8 text-small text-foreground/50">
                {project.period && (
                  <div>
                    <span className="block text-caption uppercase tracking-widest mb-1">{isPt ? 'Período' : 'Period'}</span>
                    <span className="text-foreground">{project.period}</span>
                  </div>
                )}
                {project.year && !project.period && (
                  <div>
                    <span className="block text-caption uppercase tracking-widest mb-1">{isPt ? 'Ano' : 'Year'}</span>
                    <span className="text-foreground">{project.year}</span>
                  </div>
                )}
                <div>
                  <span className="block text-caption uppercase tracking-widest mb-1">{isPt ? 'Função' : 'Role'}</span>
                  <span className="text-foreground">{project.role}</span>
                </div>
                {project.client && (
                  <div>
                    <span className="block text-caption uppercase tracking-widest mb-1">{isPt ? 'Cliente' : 'Client'}</span>
                    <span className="text-foreground">{project.client}</span>
                  </div>
                )}
                {project.company && (
                  <div>
                    <span className="block text-caption uppercase tracking-widest mb-1">{isPt ? 'Empresa' : 'Company'}</span>
                    <span className="text-foreground">{project.company}</span>
                  </div>
                )}
              </div>

              <h1 className="text-hero leading-display tracking-display font-medium">
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="text-h4 text-foreground/60 max-w-4xl leading-relaxed">
                  {project.subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {project.coverImage && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20"
        >
          <div className="w-full overflow-hidden shadow-sm">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full"
            />
          </div>
        </motion.section>
      )}

      {/* Content Sections */}
      {project.content.map((section, index) => (
        <ContentSectionRenderer key={index} section={section} index={index} isPt={isPt} />
      ))}

      {/* Navigation */}
      <section className="px-8 mt-32 pt-20 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to={linkPrefix || '/'}>
                <ArrowLeft className="w-5 h-5" />
                <span className="text-body-lg">{isPt ? 'Voltar ao Início' : 'Back to Home'}</span>
              </Link>
            </Button>

            <div className="flex gap-8">
              {previousProject && (
                <Link
                  to={`${linkPrefix}/work/${previousProject.id}`}
                  className="group space-y-2 hover:opacity-60 transition-opacity"
                >
                  <p className="text-small text-foreground/40">{isPt ? 'Anterior' : 'Previous'}</p>
                  <p className="text-body-lg">{previousProject.title}</p>
                </Link>
              )}

              {nextProject && (
                <Link
                  to={`${linkPrefix}/work/${nextProject.id}`}
                  className="group space-y-2 hover:opacity-60 transition-opacity md:text-right"
                >
                  <p className="text-small text-foreground/40">{isPt ? 'Próximo' : 'Next'}</p>
                  <p className="text-body-lg">{nextProject.title}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContentSectionRenderer({ section, index, isPt }: { section: ContentSection; index: number; isPt: boolean }) {
  switch (section.type) {
    case 'text':
      return <TextSectionRenderer section={section} index={index} />;
    case 'video':
      return <VideoSectionRenderer section={section} />;
    case 'metrics':
      return <MetricsSectionRenderer section={section} />;
    case 'chips':
      return <ChipsSectionRenderer section={section} />;
    case 'links':
      return <LinksSectionRenderer section={section} />;
    default:
      return null;
  }
}

function TextSectionRenderer({ section, index }: { section: TextSection; index: number }) {
  const label = index % 2 === 0 ? 'Strategy' : 'Execution';

  return (
    <section className="mb-32">
      <div className="max-w-[900px] mx-auto px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {index !== 0 && (
            <p className="text-small text-foreground/40 uppercase tracking-widest font-medium">
              {label}
            </p>
          )}
          {section.title && (
            <h2 className="text-h2">{section.title}</h2>
          )}
          {section.content.split('\n').map((paragraph, i) => (
            paragraph.trim() ? (
              <p key={i} className="text-body-lg text-foreground/60 leading-relaxed">
                {paragraph}
              </p>
            ) : null
          ))}
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
                  : 'aspect-[16/9] rounded-xl overflow-hidden shadow-sm'
              } bg-muted`}
            >
              <img
                src={image}
                alt={`${section.title || ''} - Image ${imgIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

function VideoSectionRenderer({ section }: { section: VideoSection }) {
  return (
    <section className="mb-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-sm" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={section.url}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: 0 }}
            />
          </div>
          {section.title && (
            <h2 className="text-h2 mt-8">{section.title}</h2>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function MetricsSectionRenderer({ section }: { section: MetricsSection }) {
  return (
    <section className="mb-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h1 mb-20"
          >
            {section.title}
          </motion.h2>
        )}
        <div className="grid md:grid-cols-3 gap-16">
          {section.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <p className="text-h1 tracking-tight">
                {item.value}
              </p>
              <p className="text-h4 text-foreground/80">
                {item.label}
              </p>
              {item.sublabel && (
                <p className="text-body text-foreground/50 leading-relaxed">
                  {item.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChipsSectionRenderer({ section }: { section: ChipsSection }) {
  return (
    <section className="mb-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 mb-10"
          >
            {section.title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {section.items.map((item) => (
            <Badge key={item} variant="secondary" className="px-5 py-3">
              {item}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LinksSectionRenderer({ section }: { section: LinksSection }) {
  return (
    <section className="mb-32 px-8">
      <div className="max-w-[900px] mx-auto">
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 mb-10"
          >
            {section.title}
          </motion.h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {section.items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-body-lg text-accent hover:opacity-60 transition-opacity"
            >
              {item.text} &rarr;
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
