// Realio imports
import realioImg01 from '../../imports/case-realio-img-01.png';
import realioImg02 from '../../imports/case-realio-img-02.png';
import realioImg03 from '../../imports/case-realio-img-03.png';
import realioImg04 from '../../imports/case-realio-img-04.png';
import realioImg05 from '../../imports/case-realio-img-05.png';
import realioImg06 from '../../imports/case-realio-img-06.png';

// Unifyre imports
import unifyre01 from '../../imports/case-unifyre-img-01.png';
import unifyre02 from '../../imports/case-unifyre-img-02.png';

// TRST imports
import trst01 from '../../imports/case-trst-img-01.png';
import trst02 from '../../imports/case-trst-img-02.png';
import trst03 from '../../imports/case-trst-img-03.png';
import trst04 from '../../imports/case-trst-img-04.png';
import trst06 from '../../imports/case-trst-img-06.png';
import trst07 from '../../imports/case-trst-img-07.png';
import trst08 from '../../imports/case-trst-img-08.png';

// Cartesi imports
import cartesi01 from '../../imports/case-cartesi-img-01.png';
import cartesi02 from '../../imports/case-cartesi-img-02.png';
import cartesi03 from '../../imports/case-cartesi-img-03.png';

// PING imports
import ping01 from '../../imports/case-ping-img-01.png';
import ping02 from '../../imports/case-ping-img-02.png';
import ping03 from '../../imports/case-ping-img-03.png';
import ping04 from '../../imports/case-ping-img-04.png';
import ping05 from '../../imports/case-ping-img-05.png';
import ping06 from '../../imports/case-ping-img-06.png';

// Opslock imports
import opslock01 from '../../imports/case-opslock-img-01.png';
import opslock02 from '../../imports/case-opslock-img-02.png';
import opslock03 from '../../imports/case-opslock-img-03.png';
import opslock04 from '../../imports/case-opslock-img-04.png';
import opslock05 from '../../imports/case-opslock-img-05.png';
import opslock06 from '../../imports/case-opslock-img-06.png';

// Circuito Mangabeira imports
import circuito01 from '../../imports/case-circuito-mangabeira-img-01.jpeg';
import circuito02 from '../../imports/case-circuito-mangabeira-img-02.jpeg';
import circuito03 from '../../imports/case-circuito-mangabeira-img-03.jpeg';
import circuito04 from '../../imports/case-circuito-mangabeira-img-04.jpeg';
import circuito05 from '../../imports/case-circuito-mangabeira-img-05.jpeg';
import circuito06 from '../../imports/case-circuito-mangabeira-img-06.jpeg';
import circuito07 from '../../imports/case-circuito-mangabeira-img-07.jpeg';
import circuito08 from '../../imports/case-circuito-mangabeira-img-08.jpeg';

// Emurgo imports
import emurgo01 from '../../imports/case-emurgo-img-01.png';

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  company?: string;
  tags: string[];
  summary: string;
  overview: string;
  sections: {
    title: string;
    content: string;
    images?: string[];
  }[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: 'realio',
    title: 'Realio: Web3 Infrastructure & Digital Asset Innovation',
    client: 'Realio',
    year: '2025',
    role: 'Director of Product (3.5 years)',
    tags: ['Product Leadership', 'Web3', 'Product Design'],
    summary: 'Building intuitive, enterprise-grade experiences for complex financial instruments while maintaining Web3 flexibility and decentralization principles.',
    overview: 'Realio operates at the intersection of blockchain, DeFi, and traditional finance, enabling investment and trading in tokenized Real Estate and Private Equity assets. The core challenge was building intuitive, enterprise-grade experiences for complex financial instruments while maintaining the flexibility and decentralization principles that define Web3.',
    coverImage: realioImg01,
    sections: [
      {
        title: 'Strategic Product Vision',
        content: 'My role encompassed maintaining and enhancing the core digital asset management platform while conceptualizing and launching new products that expanded Realio\'s market reach. I adopted a holistic approach to product growth, leveraging design thinking across multiple disciplines beyond traditional UX — actively contributing to marketing communications and quality assurance. In QA, I developed a comprehensive testing framework optimized for our lean team structure while creating workflows that supported customer support operations.',
        images: [realioImg02],
      },
      {
        title: 'Key Product Launches',
        content: 'Realio Network: A proprietary blockchain and the core of Realio\'s ecosystem. I contributed to designing new platform features for network interaction and the accompanying dApp — enabling greater user flexibility while supporting the company\'s decentralization vision.',
        images: [realioImg03],
      },
      {
        title: 'Districts — Creative Industry Metaverse',
        content: 'Expansion of real estate beyond traditional finance into the creative economy, targeting architecture, design professionals, and real estate markets. I contributed from initial concept through launch: ideation, UX design, navigation flows, and extensive testing protocols.',
        images: [realioImg04, realioImg05],
      },
      {
        title: 'Freehold Mobile Wallet',
        content: 'Creating an accessible entry point for both crypto-native users and traditional investors exploring digital assets. A simplified yet powerful mobile wallet balancing advanced functionality with intuitive UX.',
        images: [realioImg06],
      },
      {
        title: 'Leadership Philosophy & Result',
        content: 'My approach to Web3 product leadership centers on applying design systematically across the product — not just user experience. By viewing marketing, QA and customer support through a design lens, I created integrated solutions that drove both product quality and operational efficiency. Result: Transformation of Realio from a single-product company into a comprehensive Web3 ecosystem.',
      },
    ],
  },
  {
    id: 'unifyre',
    title: 'Unifyre: Security & Accessibility in Web3 Wallets',
    client: 'Ferrum Network — Unifyre Wallet',
    company: 'Contra Criativos',
    year: '2021',
    role: 'Lead Designer',
    tags: ['UX Design', 'Web3', 'Security'],
    summary: 'Making advanced security approachable while simplifying transactions and improving onboarding for Web3 newcomers.',
    overview: 'Ferrum Network\'s Unifyre wallet needed more than a visual refresh. While the initial brief called for a redesign aligned with the new brand identity, our analysis revealed deeper opportunities: making advanced security approachable, simplifying transactions, and improving onboarding for newcomers.',
    coverImage: unifyre01,
    sections: [
      {
        title: 'Gamifying Security Without Compromising Protection',
        content: 'We redesigned the security setup experience as a progressive achievement system. Instead of presenting security measures as technical barriers, we developed a dynamic checklist that classifies users into security profiles. Completed actions unlocked features and capabilities: 2FA, recovery phrase backup, and additional verification layers.',
        images: [unifyre02],
      },
      {
        title: 'Pre-Configured Transactions as a Trust Bridge',
        content: 'We elevated the wallet\'s transaction-link functionality into a primary feature. Users could generate shareable transaction links, create safer token transfers, and add verification layers before confirmation. This significantly reduced fear and friction for Web3 newcomers.',
        images: [unifyre01],
      },
      {
        title: 'Result',
        content: 'The redesigned Unifyre demonstrates how sophisticated blockchain technology can become more accessible without oversimplifying it.',
      },
    ],
  },
  {
    id: 'trst',
    title: 'Trst — Strategic Product Vision & Rebranding',
    client: 'Trst',
    year: '2025',
    role: 'Product Strategist & Design Lead',
    tags: ['Brand Strategy', 'Product Strategy', 'Visual Design'],
    summary: 'Evolving from a technology-first narrative to a benefits-driven positioning that resonates with enterprise clients.',
    overview: 'Trst needed to evolve from a technology-first narrative to a benefits-driven positioning that resonated with enterprise clients. The challenge was creating strategic clarity, visual differentiation, and scalable communication.',
    coverImage: trst01,
    sections: [
      {
        title: 'Strategy',
        content: 'I collaborated with the Trst team to define the strategic framework guiding all communication efforts. We shifted focus from technical capabilities to tangible outcomes: security without friction, compliance without complexity.',
        images: [trst02],
      },
      {
        title: 'Visual Rebrand',
        content: 'I led a complete visual rebrand embodying the "benefits-first" philosophy. Instead of typical tech aesthetics, I drew inspiration from the Atypography movement: complex typography systems, information hierarchy, and visual reduction of cognitive overload.',
        images: [trst03, trst04],
      },
      {
        title: 'TrstType — Custom Typeface',
        content: 'I developed TrstType, a custom modular typeface inspired by American Sign Language. The typeface became the foundation for brand patterns, communication systems, and visual identity applications.',
        images: [
          trst06,
          trst07,
          trst08,
        ],
      },
    ],
  },
  {
    id: 'cartesi',
    title: 'Cartesi: Multi-Phase Design Partnership',
    client: 'Cartesi',
    company: 'Contra Criativos',
    year: '2022',
    role: 'Design Partner',
    tags: ['Brand Design', 'Web3', 'Design Systems'],
    summary: 'Long-term partnership spanning brand identity, websites, landing pages, social media, and product communication.',
    overview: 'At Contra Criativos, we established a strategic long-term partnership with Cartesi, a modular blockchain protocol enabling scalable dApps using a Linux environment. The collaboration evolved from brand identity design into a comprehensive multi-phase design partnership.',
    coverImage: cartesi01,
    sections: [
      {
        title: 'Multi-Phase Collaboration',
        content: 'Our partnership included brand identity system, websites, landing pages, social media systems, and product communication.',
        images: [cartesi02],
      },
      {
        title: 'Technical Translation Challenge',
        content: 'We translated highly complex blockchain technology into accessible visual communication that resonated with developers, investors, and enterprise audiences.',
        images: [
          cartesi03,
          cartesi01,
        ],
      },
    ],
  },
  {
    id: 'ping',
    title: 'PING — A Medicine Drop Counter for Blind People',
    client: 'PING — Assistive Technology (UFPB)',
    company: 'Contra',
    year: '2019',
    role: 'Product Manager & Design Strategist',
    tags: ['Accessibility', 'Product Strategy', 'Physical Product'],
    summary: 'Transforming assistive technology into a viable product through strategic design and commercial strategy.',
    overview: 'PING is an assistive technology project created at the Federal University of Paraíba. At Contra, we worked alongside the inventors to transform the technology into a viable product. Responsibilities included product strategy, user needs analysis, commercial strategy, and investment attraction.',
    coverImage: ping03,
    sections: [
      {
        title: 'Role & Impact',
        content: 'As product manager, I led the strategic design stage that resulted in the product redesign in partnership with Spark Design & Innovation. The project was presented at TEDx and Interaction Latin America (IXDA).',
        images: [
          ping02,
          ping03,
          ping04,
          ping05,
        ],
      },
      {
        title: 'Current Status',
        content: 'I currently lead the project to finalize the product using investment funds raised through the federal program Centelha.',
        images: [ping06],
      },
    ],
  },
  {
    id: 'opslock',
    title: 'Opslock Website',
    client: 'Opslock',
    company: 'Startupkit',
    year: '2020',
    role: 'UX Strategy & Design',
    tags: ['UX Strategy', 'Website Design', 'B2B'],
    summary: 'Dual-narrative website experience designed for two distinct user groups with innovative scrolling interaction.',
    overview: 'Opslock developed a comprehensive industrial risk management platform. We designed a strategic digital experience capable of communicating the platform\'s value to both clients and investors.',
    coverImage: opslock01,
    sections: [
      {
        title: 'Strategic Challenge',
        content: 'Research revealed two distinct user groups: office-based management teams and offshore field professionals.',
        images: [opslock02, opslock03],
      },
      {
        title: 'Innovative Solution',
        content: 'We created a dual-narrative website experience. Management navigation starts from the surface and scrolls downward, representing deep-sea operations. Field professional navigation starts from the footer and scrolls upward, mirroring offshore operational environments.',
        images: [
          opslock04,
          opslock05,
        ],
      },
      {
        title: 'Business Impact',
        content: 'The project significantly improved Opslock\'s market positioning and communication clarity.',
        images: [opslock06],
      },
    ],
  },
  {
    id: 'circuito-mangabeira',
    title: 'Circuito Mangabeira',
    client: 'Circuito Mangabeira',
    company: 'Contra',
    year: '2020',
    role: 'Product Strategist',
    tags: ['Product Strategy', 'Research', 'Business Design'],
    summary: 'Comprehensive business strategy for an innovative bike park experience in Northeast Brazil.',
    overview: 'Circuito Mangabeira aimed to launch an innovative bike park experience connected to one of Brazil\'s most recognized trail circuits.',
    coverImage: circuito01,
    sections: [
      {
        title: 'Role & Process',
        content: 'Working alongside the Contra team, I contributed to target audience research, competitive analysis, business model design, product definition, delivery planning, and pricing strategy.',
        images: [
          circuito02,
          circuito03,
          circuito04,
          circuito05,
          circuito06,
        ],
      },
      {
        title: 'Deliverable & Outcome',
        content: 'A comprehensive business manual supporting management, communication and investor relations. Circuito Mangabeira is now fully operational and recognized as a regional reference in the sport.',
        images: [circuito07, circuito08],
      },
    ],
  },
  {
    id: 'emurgo',
    title: 'Emurgo Website',
    client: 'Emurgo',
    company: 'Startupkit',
    year: '2020',
    role: 'UX Design',
    tags: ['UX Design', 'Blockchain', 'Website Design'],
    summary: 'Translating blockchain complexity into effective web communication for the Cardano ecosystem.',
    overview: 'At Startupkit, we helped Emurgo translate the complexity of blockchain technology into effective web communication. I was responsible for the UX design of the institutional website.',
    coverImage: emurgo01,
    sections: [
      {
        title: 'Design Approach',
        content: 'The website needed to communicate complex blockchain technology in an accessible way while maintaining credibility with technical audiences.',
        images: [emurgo01],
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getNextProject(currentId: string): Project | null {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0];
  }
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentId: string): Project | null {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return projects[projects.length - 1];
  }
  return projects[currentIndex - 1];
}
