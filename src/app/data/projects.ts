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

// Startup Kit imports
import startupkitHeader from '../../imports/startupkit-header.png';
import startupkitHero from '../../imports/project-startupkit-hero.webp';
import startupkitBrandSystem from '../../imports/project-startupkit-brand-system.webp';

export interface MetricsItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface LinkItem {
  url: string;
  text: string;
}

interface BaseSection {
  title?: string;
  label?: string;
}

export interface TextSection extends BaseSection {
  type: 'text';
  content: string;
  images?: string[];
}

export interface VideoSection extends BaseSection {
  type: 'video';
  url: string;
}

export interface MetricsSection extends BaseSection {
  type: 'metrics';
  items: MetricsItem[];
}

export interface ChipsSection extends BaseSection {
  type: 'chips';
  items: string[];
}

export interface LinksSection extends BaseSection {
  type: 'links';
  items: LinkItem[];
}

export type ContentSection = TextSection | VideoSection | MetricsSection | ChipsSection | LinksSection;

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  client?: string;
  company?: string;
  period?: string;
  year?: string;
  role?: string;
  roles?: string[];
  tags: string[];
  summary: string;
  content: ContentSection[];
  coverImage?: string;
  cardImage?: string;
}

export const projects: Project[] = [
  {
    id: 'realio',
    title: 'Realio: Web3 Infrastructure & Digital Asset Innovation',
    subtitle: 'Leading product design and strategy for a digital asset ecosystem, transforming complex tokenization and blockchain workflows into intuitive investor experiences.',
    client: 'Realio Network',
    period: '2021–2025',
    role: 'Director of Product',
    tags: ['Product Leadership', 'Web3', 'Product Design', 'Selected work'],
    summary: 'Leading product design and strategy for a digital asset ecosystem, transforming complex tokenization and blockchain workflows into intuitive investor experiences.',
    coverImage: realioImg01,
    content: [
      {
        type: 'text',
        title: 'Overview',
        content: 'Realio was building a bridge between traditional finance and decentralized infrastructure through tokenized real-world assets, blockchain technology and digital investment products.\n\nThe challenge was not only designing intuitive experiences for highly complex financial workflows, but also helping evolve the company from a single-product platform into a broader Web3 ecosystem serving investors, issuers and digital asset participants.',
      },
      {
        type: 'text',
        title: 'Strategic Product Vision',
        content: 'As Director of Product, I was responsible for product strategy, product design and cross-functional collaboration across multiple initiatives within the Realio ecosystem.\n\nBeyond UX and interface design, my work extended into product discovery, quality assurance processes, customer support workflows and marketing communications. By applying design thinking across the organization, I helped create systems that improved product quality, operational efficiency and user experience consistency.\n\nWorking within a lean team structure, I also developed a QA framework that enabled non-technical team members to participate in product validation and release processes.',
      },
      {
        type: 'text',
        title: 'From Platform to Ecosystem',
        content: 'During my tenure, Realio expanded from a primary tokenization platform into a broader ecosystem of products supporting digital assets, blockchain infrastructure and new market opportunities.\n\nThe initiatives below represent key parts of that expansion strategy.',
      },
      {
        type: 'text',
        title: 'Realio Network',
        content: 'Realio Network is the blockchain infrastructure powering the company\'s ecosystem.\n\nI led product design initiatives supporting the launch and evolution of network-related experiences, including staking, asset management and ecosystem interactions. My role involved aligning product decisions with Realio\'s decentralization strategy while maintaining accessibility for both crypto-native and traditional investors.',
        images: [realioImg02],
      },
      {
        type: 'text',
        title: 'Districts — Creative Industry Metaverse',
        content: 'Districts explored how tokenized ownership could extend beyond traditional real estate into the creative economy.\n\nThe initiative targeted architects, designers, developers and real estate professionals, creating new opportunities for participation and ownership within virtual environments.\n\nI participated from concept definition through launch, helping shape the product vision, information architecture, user experience, navigation systems and validation processes.',
        images: [realioImg03, realioImg04],
      },
      {
        type: 'text',
        title: 'Freehold Mobile Wallet',
        content: 'Freehold was designed to provide an accessible entry point into digital assets for both crypto-native users and first-time investors.\n\nThe challenge was balancing powerful functionality with a simplified experience that reduced friction during onboarding, portfolio management and day-to-day interactions.\n\nMy contribution focused on product strategy, user experience and interaction design, helping create a mobile experience that lowered the barrier to entry without sacrificing flexibility.',
        images: [realioImg05],
      },
      {
        type: 'text',
        title: 'Impact',
        content: '• Helped expand Realio from a single-product platform into a multi-product ecosystem.\n• Supported the launch of blockchain infrastructure, digital asset products and new market initiatives.\n• Established QA workflows and validation processes that improved product quality within a lean team structure.\n• Created stronger alignment between product, marketing and customer support operations.\n• Applied design thinking beyond UX, contributing to product strategy, operational efficiency and organizational processes.',
      },
      {
        type: 'text',
        title: 'Leadership Philosophy',
        content: 'I believe design should influence every aspect of a product, not just the user interface.\n\nBy applying design thinking across product strategy, quality assurance, customer support and communication, I helped create more coherent experiences and stronger business outcomes.\n\nFor me, successful products emerge when customer needs, business goals and operational realities are treated as parts of the same system.',
      },
    ],
  },
  {
    id: 'espremedor-de-papel',
    title: 'Espremedor de Papel',
    subtitle: 'Turning uncertainty into validated products through collaborative innovation.',
    client: 'Contra Criativos',
    period: '2015 – Present',
    role: 'Creator · Product Strategist · Service Designer · Facilitator',
    tags: ['Product Strategy & Leadership', 'Selected work', 'Signature Framework'],
    summary: 'A custom co-creation framework applied in 30+ projects across 10 industries, helping organizations transform ideas into validated products, services and business strategies.',
    content: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/237230025',
      },
      {
        type: 'metrics',
        title: 'Impact at a Glance',
        items: [
          {
            value: '30+',
            label: 'Projects Delivered',
            sublabel: 'Custom-designed co-creation workshops tailored to each organization\'s context and challenges.',
          },
          {
            value: '10 Industries',
            label: 'Cross-sector Experience',
            sublabel: 'Food & Hospitality · Architecture & Construction · B2B · Consulting · Human Resources · Startups · Public Sector · Education · Universities · Assistive Technology',
          },
          {
            value: '100% Custom',
            label: 'Every Workshop Was Unique',
            sublabel: 'Rather than following a fixed methodology, each engagement combined and adapted established frameworks according to the client\'s goals, team dynamics and business context.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: 'Espremedor de Papel ("Paper Squeezer") is a collaborative innovation framework created to help organizations transform uncertainty into validated products, services and business strategies.\n\nInstead of applying a predefined workshop or rigid methodology, every engagement was designed from scratch. The framework combines and adapts approaches such as Design Thinking, Design Sprint, Service Design, Lean Startup and Business Design—often reinterpreting them to better fit each challenge.\n\nOriginally conceived as my final project for the Digital Strategy program at Hyper Island in Stockholm, Sweden, the framework evolved over the following years into Contra Criativos\' primary methodology for strategy, innovation and product discovery.',
      },
      {
        type: 'text',
        title: 'Origin',
        content: 'The idea emerged during my time at Hyper Island.\n\nWhat impressed me most wasn\'t a specific framework, but the school\'s facilitation philosophy. Learning happened through collaboration, guided reflection and carefully designed experiences rather than traditional teaching.\n\nWhen I returned to Brazil, I adapted those principles to the reality of Brazilian organizations, creating a process that engaged clients as active participants in building solutions instead of passive recipients of consulting recommendations.\n\nOver the years, continuous refinement through real client projects transformed the initial concept into Contra Criativos\' core innovation framework.',
      },
      {
        type: 'text',
        title: 'The Challenge',
        content: 'Many organizations begin projects driven by assumptions instead of evidence.\n\nDifferent stakeholders hold different perspectives, priorities compete, and important decisions are often made before the real problem is fully understood.\n\nThe challenge was to create a collaborative process capable of aligning teams, challenging assumptions and validating ideas before significant investments in execution.',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/215751162',
      },
      {
        type: 'text',
        title: 'The Framework',
        content: 'Every Espremedor de Papel workshop was custom-built.\n\nRather than applying a fixed sequence of activities, each engagement combined the most appropriate methods for the specific challenge.\n\nWorkshops were conducted both remotely and in person, bringing together multidisciplinary stakeholders to collaboratively:\n\nUnderstand the problem\nAlign business and user needs\nChallenge assumptions\nGenerate and evaluate ideas\nPrioritize opportunities\nDefine strategic next steps\n\nFrameworks commonly incorporated into the process included:\n\nDesign Thinking\nDesign Sprint\nService Design\nLean Startup\nBusiness Design\nSystems Thinking\nCollaborative Facilitation\n\nThe methodology itself was never the goal.\n\nBetter decisions were.',
      },
      {
        type: 'text',
        title: 'My Role',
        content: 'I created the framework and facilitated every engagement from discovery through strategic definition.\n\nMy responsibilities included:\n\nDesigning each workshop around the client\'s context.\nSelecting and adapting facilitation methods.\nLeading multidisciplinary stakeholder sessions.\nSynthesizing research and workshop insights.\nTranslating outcomes into product, service and business strategies.\nSupporting organizations through early product definition and innovation planning.',
      },
      {
        type: 'text',
        title: 'Selected Outcome',
        content: 'One of the most representative applications of the framework was PING, an assistive technology device designed to help visually impaired people administer eye drops independently.\n\nWhen the project arrived, it consisted of a technically promising academic prototype.\n\nThrough collaborative discovery, business strategy, product definition and ecosystem building, we helped transform the concept into a market-ready opportunity.\n\nThe project was later selected by Brazil\'s Programa Centelha, securing public innovation funding after competing against more than 500 startups.\n\nMore importantly, it demonstrated one of the framework\'s core beliefs:\n\nGreat ideas rarely fail because of technology.\n\nThey fail because they aren\'t properly validated, positioned or connected to the right people.',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/vYX-vcUVVNw',
      },
      {
        type: 'chips',
        title: 'Industries',
        items: [
          'Food & Hospitality',
          'Architecture & Construction',
          'B2B',
          'Consulting',
          'Human Resources',
          'Startups',
          'Public Sector',
          'Education',
          'Universities',
          'Assistive Technology',
        ],
      },
      {
        type: 'text',
        title: 'Impact',
        content: 'Over time, Espremedor de Papel became much more than a workshop format.\n\nIt became Contra Criativos\' way of approaching uncertainty.\n\nAcross more than 30 projects, the framework helped organizations:\n\nAlign multidisciplinary stakeholders around shared objectives.\nReplace assumptions with evidence.\nValidate ideas before investing in execution.\nIdentify new business opportunities.\nBuild ownership over strategic decisions.\nReduce uncertainty during product discovery.\n\nEvery workshop produced different outcomes, but the objective remained the same:\n\nCreate shared understanding before building solutions.',
      },
      {
        type: 'text',
        title: 'Reflection',
        content: 'Design is often associated with creating interfaces or products.\n\nEspremedor de Papel reinforced a different perspective.\n\nThe most valuable contribution of design is creating the conditions for better decisions to emerge.\n\nBy combining structured facilitation, strategic thinking and collaborative problem-solving, the framework helped organizations move from individual opinions to collective understanding—and from ideas to validated opportunities.',
      },
    ],
  },
  {
    id: 'unifyre',
    title: 'Unifyre: Security & Accessibility in Web3 Wallets',
    client: 'Ferrum Network — Unifyre Wallet',
    company: 'Startup Kit',
    year: '2021',
    role: 'Lead Designer',
    tags: ['Product Design', 'Web3', 'Design Leadership', 'Selected work'],
    summary: 'Making advanced security approachable while simplifying transactions and improving onboarding for Web3 newcomers.',
    coverImage: unifyre01,
    content: [
      {
        type: 'text',
        title: 'Overview',
        content: 'Unifyre was designed to help users manage digital assets within the Ferrum Network ecosystem.\n\nWhile the original project focused on aligning the wallet with a new visual identity, our analysis uncovered a broader challenge: reducing the complexity and anxiety often associated with Web3 security while maintaining the level of protection expected by experienced users.\n\nThe opportunity was to make advanced security feel approachable without sacrificing trust.',
      },
      {
        type: 'text',
        title: 'Designing Trust Through Security',
        content: 'One of the biggest barriers to Web3 adoption is the perception that security is difficult, intimidating and error-prone.\n\nRather than presenting security requirements as technical obstacles, we reframed them as progressive achievements that helped users strengthen their accounts over time.\n\nThe result was a security onboarding experience that encouraged adoption while educating users about best practices.',
      },
      {
        type: 'text',
        title: 'Gamifying Security Without Compromising Protection',
        content: 'We redesigned the security setup flow as a progressive achievement system.\n\nUsers were guided through a dynamic checklist that categorized their security readiness and rewarded completed actions with increased account protection and additional functionality.\n\nFeatures included:\n\n• Two-factor authentication setup\n• Recovery phrase backup\n• Additional verification layers\n• Security profile progression\n\nThis approach transformed security from a perceived burden into a visible indicator of trust and preparedness.',
        images: [unifyre02],
      },
      {
        type: 'text',
        title: 'Pre-Configured Transactions as a Trust Bridge',
        content: 'Another key challenge involved reducing friction around cryptocurrency transfers.\n\nTo address this, we elevated transaction-link functionality into a primary product feature.\n\nUsers could generate pre-configured transaction links, simplify token transfers and introduce additional verification layers before execution.\n\nThis reduced uncertainty during transactions and helped new users interact with blockchain technology more confidently.',
        images: [unifyre01],
      },
      {
        type: 'text',
        title: 'Outcome',
        content: 'The redesigned Unifyre wallet demonstrated that sophisticated blockchain products can become more approachable without oversimplifying the underlying technology.\n\nBy focusing on trust, education and progressive onboarding, the experience lowered barriers for newcomers while preserving the security standards expected by experienced Web3 users.',
      },
      {
        type: 'text',
        title: 'Key Takeaway',
        content: 'Security is not only a technical challenge — it is also a design challenge.\n\nThis project reinforced how thoughtful UX and product strategy can help transform complex security requirements into experiences that build user confidence, encourage adoption and support long-term engagement.',
      },
    ],
  },
  {
    id: 'trst',
    title: 'Trst — Strategic Product Vision & Rebranding',
    client: 'Trst',
    year: '2025',
    role: 'Product Strategist & Design Lead',
    tags: ['Branding & Comms', 'Product Strategy & Leadership', 'Startup', 'Selected work'],
    summary: 'Evolving from a technology-first narrative to a benefits-driven positioning that resonates with enterprise clients.',
    coverImage: trst01,
    content: [
      {
        type: 'text',
        title: 'Overview',
        content: 'Trst needed to evolve from a technology-first narrative into a clearer, benefits-driven positioning capable of resonating with enterprise clients.\n\nThe challenge extended beyond visual identity. It required defining a strategic framework that could simplify complex security and compliance concepts while creating a scalable communication system for future growth.',
      },
      {
        type: 'text',
        title: 'Strategic Positioning',
        content: 'I collaborated closely with the Trst team to redefine how the company communicated its value.\n\nRather than emphasizing technical capabilities and infrastructure details, we shifted the narrative toward tangible business outcomes: security without friction, compliance without complexity and trust without operational burden.\n\nThis strategic repositioning established a clearer connection between the product\'s capabilities and the real-world problems faced by enterprise customers.',
        images: [trst02],
      },
      {
        type: 'text',
        title: 'Visual Rebrand',
        content: 'The visual identity was designed to reinforce the new strategic direction.\n\nInstead of relying on conventional cybersecurity aesthetics, I explored references from the Atypography movement and information design systems, focusing on clarity, hierarchy and cognitive simplicity.\n\nThe resulting identity balanced technical sophistication with accessibility, helping communicate complex concepts through a more approachable visual language.',
        images: [trst03, trst04],
      },
      {
        type: 'text',
        title: 'TrstType — Custom Typeface System',
        content: 'To create a distinctive visual foundation for the brand, I designed TrstType, a modular custom typeface that emerged from the intersection of technology, accessibility and experimental design.\n\nThe system was inspired by three complementary sources: the geometric patterns generated by Trst\'s palm-biometric authentication technology, the visual structure of sign language systems, and the principles of the Atypography movement, which challenges conventional approaches to readability and visual communication.\n\nRather than functioning solely as a typeface, TrstType became a flexible communication system supporting brand patterns, layouts, marketing materials and digital experiences.\n\nThis approach allowed the visual identity to express the product\'s core concepts — trust, identity verification and human-centered technology — while establishing a distinctive visual language rooted in both technological innovation and contemporary design culture.',
        images: [trst06, trst07, trst08],
      },
      {
        type: 'text',
        title: 'Impact',
        content: '• Repositioned the company from a technology-centric narrative to a benefits-driven market proposition.\n• Created a scalable communication framework capable of supporting future product growth.\n• Established a distinctive visual language that increased differentiation within a crowded cybersecurity and identity verification market.\n• Developed a proprietary type system that became a core component of the brand ecosystem.\n• Improved clarity when communicating complex security, authentication and compliance concepts.',
      },
      {
        type: 'text',
        title: 'Key Takeaway',
        content: 'This project reinforced an idea that guides much of my work: products and brands succeed when complexity is translated into clarity.\n\nBy aligning product strategy, positioning and visual communication, it becomes possible to create stronger connections between technology and the people it serves.',
      },
    ],
  },
  {
    id: 'cartesi',
    title: 'Cartesi: Multi-Phase Design Partnership',
    client: 'Cartesi',
    company: 'Startup Kit',
    year: '2019 - 2022',
    role: 'Design Partner',
    tags: ['Branding & Comms', 'Web3', 'Startup', 'Selected work'],
    summary: 'Long-term partnership spanning brand identity, websites, landing pages, social media, and product communication.',
    coverImage: cartesi01,
    content: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/284222165',
      },
      {
        type: 'text',
        title: 'Overview',
        content: 'Cartesi is a modular blockchain protocol that enables developers to build scalable decentralized applications using familiar Linux-based tools and environments.\n\nAt Contra Criativos, we established a long-term design partnership that evolved far beyond traditional branding. As the ecosystem expanded, our role became helping Cartesi communicate increasingly complex technical concepts through cohesive visual systems and strategic communication.',
      },
      {
        type: 'text',
        title: 'Building a Long-Term Design Partnership',
        content: 'Rather than a single project, the collaboration developed through multiple phases over several years.\n\nOur work supported different stages of Cartesi\'s growth, including brand evolution, websites, landing pages, social media systems, campaign assets and ecosystem communications.\n\nThis long-term relationship allowed us to build consistency across multiple touchpoints while adapting communication to new audiences and product initiatives.',
        images: [cartesi02],
      },
      {
        type: 'text',
        title: 'Communicating Complex Technology',
        content: 'One of the primary challenges was translating highly technical blockchain concepts into communication that remained accessible without sacrificing credibility.\n\nCartesi\'s audience included developers, investors, partners and enterprise stakeholders — each with different levels of technical understanding and different informational needs.\n\nOur approach focused on creating visual systems and communication frameworks capable of simplifying complexity while preserving technical accuracy.',
        images: [cartesi03],
      },
      {
        type: 'text',
        title: 'Scalable Communication Systems',
        content: 'As the ecosystem evolved, maintaining consistency became increasingly important.\n\nTo support this growth, we developed repeatable visual structures, communication patterns and design assets that could be adapted across multiple formats and channels.\n\nThis systemized approach improved efficiency while ensuring a cohesive brand experience throughout the ecosystem.',
        images: [cartesi01],
      },
      {
        type: 'text',
        title: 'Impact',
        content: '• Established a long-term strategic design partnership supporting multiple phases of ecosystem growth.\n• Created scalable communication systems across digital and marketing channels.\n• Helped translate complex blockchain concepts for developers, investors and enterprise audiences.\n• Increased consistency across websites, campaigns, social media and product communication.\n• Supported the evolution of one of the leading blockchain infrastructure projects in the Web3 ecosystem.',
      },
      {
        type: 'text',
        title: 'Key Takeaway',
        content: 'Emerging technologies often fail not because of technical limitations, but because of communication barriers.\n\nThis project reinforced the importance of building systems that translate complexity into clarity, allowing innovative technologies to connect with broader audiences without losing their technical depth.',
      },
    ],
  },
  {
    id: 'ping',
    title: 'PING — A Medicine Drop Counter for Blind People',
    client: 'PING — Assistive Technology (Federal University of Paraíba)',
    company: 'Contra Criativos',
    year: '2019–2022',
    role: 'Investor, Product Manager & Design Strategist',
    tags: ['Funding', 'Product Strategy & Leadership', 'Startup', 'Selected work'],
    summary: 'Transforming assistive technology into a viable product through strategic design and commercial strategy.',
    coverImage: ping03,
    content: [
      {
        type: 'text',
        title: 'Overview',
        content: 'PING is an assistive technology designed to help blind and visually impaired people administer liquid medication safely and independently.\n\nOriginally developed within the Federal University of Paraíba, the project had proven technological potential but faced a common challenge experienced by many academic innovations: transforming research into a viable product capable of reaching the people who need it.\n\nI joined the initiative as an investor, product manager and design strategist, helping bridge the gap between innovation, market viability and real-world adoption.',
      },
      {
        type: 'text',
        title: 'The Challenge',
        content: 'Many visually impaired individuals rely on third parties when administering liquid medication, creating barriers to autonomy and increasing the risk of dosage errors.\n\nWhile the underlying technology addressed this problem, the project required a broader product vision encompassing user needs, commercial viability, product design and go-to-market strategy.\n\nThe challenge extended beyond building a functional device — it involved creating a product capable of generating meaningful impact at scale.',
      },
      {
        type: 'text',
        title: 'Product Strategy & Leadership',
        content: 'My role focused on transforming the innovation into a market-ready product.\n\nThis included product strategy, user needs analysis, business modeling, investment attraction and coordination of redesign efforts in partnership with Spark Design & Innovation.\n\nBy combining product thinking with accessibility principles, we redefined both the product experience and its positioning, creating a stronger foundation for future commercialization.',
        images: [ping01, ping02],
      },
      {
        type: 'text',
        title: 'Recognition & Media Coverage',
        content: 'PING gained national visibility as an example of how design, technology and accessibility can work together to create meaningful social impact.\n\nThe project was featured by major Brazilian technology and health publications and became part of broader conversations around innovation, assistive technology and inclusive product development.',
      },
      {
        type: 'links',
        title: 'Selected Coverage',
        items: [
          { url: 'https://gizbr.uol.com.br/brasileiros-criam-tecnologia-deficiencia-visual-controlar-medicamentos/', text: 'Gizmodo Brasil — Brazilians create technology to help visually impaired people manage medication' },
          { url: 'https://www.tecmundo.com.br/produto/208415-brasileiros-criam-conta-gotas-sonoro-deficientes-visuais.htm', text: 'TecMundo — Sound-based drop counter designed for blind users' },
          { url: 'https://saude.abril.com.br/medicina/invencao-de-cientistas-paraibanos-ajuda-cegos-a-tomarem-remedio/', text: 'Veja Saúde — Innovation helping blind people administer medication independently' },
          { url: 'https://canaltech.com.br/saude/pesquisadores-brasileiros-criam-conta-gotas-sonoro-para-ajudar-pessoas-cegas-176303/', text: 'Canaltech — Assistive technology for medication management' },
          { url: 'https://www.uol.com.br/tilt/noticias/redacao/2020/12/13/invencao-brasileira-para-cegos-emite-bip-ao-contar-gotas-de-remedios.htm', text: 'UOL Tilt — Brazilian innovation for accessibility and healthcare' },
          { url: 'https://www.techtudo.com.br/noticias/2020/12/ping-e-um-conta-gotas-sonoro-impresso-em-3d-que-ajuda-deficientes-visuais.ghtml', text: 'TechTudo — 3D-printed solution supporting visually impaired users' },
        ],
      },
      {
        type: 'text',
        title: 'Current Status',
        content: 'PING continues its journey toward commercialization through ongoing product development and investment initiatives.\n\nThe project received support through Brazil\'s federal innovation program Centelha, helping advance the product toward market readiness and future distribution.',
        images: [ping04, ping05, ping06],
      },
      {
        type: 'text',
        title: 'Why This Project Matters',
        content: 'PING represents the intersection of product management, accessibility and entrepreneurship.\n\nBeyond creating a functional product, the project demonstrates how strategic design can help transform academic innovation into solutions with the potential to generate meaningful social impact.',
      },
    ],
  },
  {
    id: 'opslock',
    title: 'Opslock Website',
    client: 'Opslock',
    company: 'Startup Kit',
    year: '2020',
    role: 'UX Strategy & Design',
    tags: ['UX', 'Branding & Comms', 'Startup', 'Selected work'],
    summary: 'Dual-narrative website experience designed for two distinct user groups with innovative scrolling interaction.',
    coverImage: opslock01,
    content: [
      {
        type: 'text',
        title: 'Strategic Challenge',
        content: 'Research revealed two distinct user groups: office-based management teams and offshore field professionals.',
        images: [opslock02, opslock03],
      },
      {
        type: 'text',
        title: 'Innovative Solution',
        content: 'We created a dual-narrative website experience. Management navigation starts from the surface and scrolls downward, representing deep-sea operations. Field professional navigation starts from the footer and scrolls upward, mirroring offshore operational environments.',
        images: [opslock04, opslock05],
      },
      {
        type: 'text',
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
    tags: ['Product Strategy & Leadership', 'Business Design', 'Selected work'],
    summary: 'Comprehensive business strategy for an innovative bike park experience in Northeast Brazil.',
    coverImage: circuito01,
    content: [
      {
        type: 'text',
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
        type: 'text',
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
    company: 'Startup Kit',
    year: '2020',
    role: 'UX Design',
    tags: ['UX', 'Web3', 'Branding & Comms'],
    summary: 'Translating blockchain complexity into effective web communication for the Cardano ecosystem.',
    coverImage: emurgo01,
    content: [
      {
        type: 'text',
        title: 'Design Approach',
        content: 'The website needed to communicate complex blockchain technology in an accessible way while maintaining credibility with technical audiences.',
        images: [emurgo01],
      },
    ],
  },
  {
    id: 'startup-kit',
    title: 'Startup Kit',
    subtitle: 'Productizing a recurring customer need into a scalable service for startups.',
    client: 'Startup Kit',
    company: 'Contra Criativos',
    period: '2018 – 2021',
    role: 'Co-founder · Product Strategist · Design Lead',
    tags: ['Entrepreneurship', 'Startup', 'Branding & Comms'],
    summary: 'Productizing a recurring customer need into a scalable service for startups.',
    coverImage: startupkitHero,
    cardImage: startupkitHeader,
    content: [
      {
        type: 'metrics',
        title: 'Impact at a Glance',
        items: [
          {
            value: '7 Countries',
            label: 'Global Reach',
            sublabel: 'Projects delivered across the USA, Taiwan, Japan, Singapore, Israel, Chile and Brazil.',
          },
          {
            value: 'Top Accelerators',
            label: 'Trusted by founders backed by leading accelerators',
            sublabel: 'Y Combinator (YC) · 500 Startups · SOSV · Startup Chile · Capital Factory',
          },
          {
            value: 'Productized Service',
            label: 'Built from recurring customer behavior',
            sublabel: 'Transforming a repeated agency engagement into a repeatable product designed specifically for early-stage startups.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Overview',
        content: 'Startup Kit was born from a simple observation.\n\nAt Contra Criativos, we began noticing that many startups approached us at exactly the same moment in their journey. They had just raised their first investment or graduated from an accelerator program and suddenly needed to communicate their products with greater clarity and credibility.\n\nAlthough the companies came from different countries and industries, the requests were remarkably similar.\n\nThey needed a stronger brand, a marketing website, an explainer animation and communication assets capable of attracting users, investors and partners.\n\nInstead of treating every project as a custom engagement, we recognized a recurring pattern and asked:\n\nWhat if this became a product?\n\nThat insight led to Startup Kit—a spin-off built specifically to provide early-stage startups with a complete communication package designed for their first stage of growth.',
      },
      {
        type: 'text',
        title: 'The Opportunity',
        content: 'The opportunity wasn\'t to build another design studio.\n\nIt was to transform a recurring consulting service into a repeatable product.\n\nEarly-stage startups often achieve an important milestone before they have the communication tools needed to support it.\n\nAfter fundraising or acceleration, founders must quickly establish credibility, explain complex products and present a compelling vision to customers, investors and partners.\n\nThe market didn\'t need isolated design services.\n\nIt needed an integrated solution built around that specific moment in a startup\'s lifecycle.',
      },
      {
        type: 'text',
        title: 'The Product',
        content: 'Startup Kit packaged multiple specialized services into a single product designed for startup founders.\n\nRather than purchasing branding, websites or animations separately, clients received a structured offering tailored to launch and growth.\n\nTypical engagements included:\n\nBrand identity\nVisual system\nMarketing website\nProduct messaging\nExplainer animation\nInvestor communication assets\nLaunch support\n\nThis productized approach simplified decision-making for founders while enabling our team to deliver a more consistent and scalable experience.',
        images: [startupkitBrandSystem],
      },
      {
        type: 'text',
        title: 'My Role',
        content: 'As co-founder, I helped shape both the business strategy and the product itself.\n\nMy responsibilities included:\n\nIdentifying the market opportunity.\nDefining the productized service model.\nStructuring the customer journey.\nLeading product and communication strategy.\nDesigning client solutions.\nLeading multidisciplinary design teams.\nEnsuring quality across branding, UX and digital experiences.\n\nThe role combined entrepreneurship, product thinking, design leadership and hands-on execution.',
      },
      {
        type: 'chips',
        title: 'Customers',
        items: [
          'Y Combinator (YC)',
          '500 Startups',
          'SOSV',
          'Startup Chile',
          'Capital Factory',
        ],
      },
      {
        type: 'text',
        title: 'Impact',
        content: 'Startup Kit demonstrated that recurring customer problems can become products.\n\nBy transforming a fragmented service offering into a structured solution, we reduced complexity for founders while creating a more scalable business model.\n\nThe experience also reinforced an important product principle:\n\nThe best opportunities often emerge not from inventing something entirely new, but from recognizing patterns in customer behavior and designing a better way to solve them.',
      },
      {
        type: 'text',
        title: 'Reflection',
        content: 'Looking back, Startup Kit was much more than a design business.\n\nIt was an exercise in product discovery.\n\nInstead of asking how we could deliver better projects, we asked how we could build a better product around the problems we solved repeatedly.\n\nThat shift—from custom execution to productized services—fundamentally shaped the way I approach product strategy today.\n\nIt reinforced a lesson that has stayed with me throughout my career:\n\nGreat products often begin by recognizing recurring customer needs before anyone else does.',
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
