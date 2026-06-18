import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const experience = [
  {
    company: 'Realio Network',
    role: 'Director of Product',
    period: '2022–2025',
    description:
      'Led product strategy and design for a Web3 ecosystem focused on tokenized real-world assets, blockchain infrastructure, wallets and investor experiences.',
  },
  {
    company: 'Contra Criativos',
    role: 'Co-Founder & Design Director',
    period: '2010–2022',
    description:
      'Led multidisciplinary projects spanning branding, digital products, strategy, business design and innovation.',
  },
  {
    company: 'Startup Kit',
    role: 'Partner & Product Strategist',
    period: '2018–2022',
    description:
      'Collaborated with startups and technology companies on product strategy, UX design and growth initiatives.',
  },
  {
    company: 'PING',
    role: 'Investor, Product Manager & Design Strategist',
    period: '2016–Present',
    description:
      'Supporting the development and commercialization of an assistive technology helping blind people administer medication independently.',
  },
];

const industries = [
  'Web3 & Blockchain',
  'Financial Technology',
  'Real Estate Technology',
  'Healthcare',
  'Assistive Technology',
  'Industrial Safety',
  'Sports & Recreation',
  'Developer Tools',
  'Enterprise Software',
];

export function About() {
  return (
    <div className="pt-32 pb-32 px-8">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          {/* Header - Editorial Statement */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight">
              Design should extend<br />beyond interfaces.
            </h1>
            <div className="h-px bg-black/10" />
          </div>

          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-2xl md:text-3xl leading-relaxed">
              I&apos;m a multidisciplinary designer with over 20 years of experience across
              industries such as advertising, branding, graphic design, physical and digital
              product design, and business design consulting.
            </p>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              Throughout my career, I&apos;ve worn many hats — from hands-on design execution
              to leading cross-functional design and product teams — collaborating with
              startups, large organizations and Web3 companies around the world.
            </p>
          </section>

          {/* Professional Journey */}
          <section className="space-y-12">
            <h2 className="text-4xl md:text-5xl">Professional Journey</h2>
            <div className="space-y-12">
              {experience.map((exp) => (
                <div key={exp.company} className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
                  <div>
                    <p className="text-sm text-black/40 font-medium">{exp.period}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium">{exp.company}</h3>
                    <p className="text-lg text-black/60 mt-1">{exp.role}</p>
                    <p className="text-lg text-black/70 mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education + Philosophy */}
          <section className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl">Education</h2>
              <div className="space-y-3">
                <p className="text-xl font-medium">Bachelor Degree in Graphic Design</p>
                <p className="text-lg text-black/70">Specialization in Digital Strategy</p>
                <p className="text-sm text-black/40 mt-1">Hyper Island — Sweden</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl">Design Philosophy</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                I believe design should extend beyond interfaces. By applying design thinking
                across product strategy, marketing, quality assurance, customer support and
                business operations, it becomes possible to create solutions that generate
                both user value and organizational impact.
              </p>
            </div>
          </section>

          {/* Talks & Community */}
          <section className="space-y-6">
            <h2 className="text-4xl md:text-5xl">Talks &amp; Community</h2>
            <div className="space-y-4">
              {['TEDx João Pessoa', 'UXDX', 'Interaction Latin America (IxDA)'].map((talk) => (
                <p key={talk} className="text-xl text-black/70">
                  {talk}
                </p>
              ))}
              <p className="text-lg text-black/50 mt-4">
                Speaker and contributor across design, product and innovation communities.
              </p>
            </div>
          </section>

          {/* Industries */}
          <section className="space-y-6">
            <h2 className="text-4xl md:text-5xl">Industries</h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-5 py-3 bg-black/5 rounded-full text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-6 pt-8">
            <div className="h-px bg-black/10" />
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">Let&apos;s Connect</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-black/40 mb-2">Email</p>
                  <a
                    href="mailto:diogocvc@gmail.com"
                    className="text-xl hover:opacity-60 transition-opacity"
                  >
                    diogocvc@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-black/40 mb-3">Links</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://www.linkedin.com/in/diogocvc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:opacity-60 transition-opacity"
                    >
                      LinkedIn &rarr;
                    </a>
                    <a
                      href="https://diogocvc.substack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:opacity-60 transition-opacity"
                    >
                      Substack &rarr;
                    </a>
                    <a
                      href="https://www.behance.net/diogocvc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:opacity-60 transition-opacity"
                    >
                      Behance &rarr;
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1NBmwsEah_2700J4FyLqd-fqYuWHUUfG7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
