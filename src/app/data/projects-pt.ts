import type { Project, MetricsItem, LinkItem } from './projects';

// Novo Ciclo imports
import novocicloImg from '../../imports/novociclo-interface.png';

// Espremedor de Papel imports
import espremedorImg from '../../imports/espremedor.png';

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

export const projectsPt: Project[] = [
  {
    id: 'realio',
    title: 'Realio: Infraestrutura Web3 & Inovação em Ativos Digitais',
    subtitle: 'Liderando design de produto e estratégia para um ecossistema de ativos digitais, transformando fluxos complexos de tokenização e blockchain em experiências intuitivas para investidores.',
    client: 'Realio Network',
    period: '2021–2025',
    role: 'Diretor de Produto',
    tags: ['Product Leadership', 'Web3', 'Product Design', 'Selected work'],
    summary: 'Liderando design de produto e estratégia para um ecossistema de ativos digitais.',
    coverImage: realioImg01,
    content: [
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'A Realio estava construindo uma ponte entre finanças tradicionais e infraestrutura descentralizada através de ativos do mundo real tokenizados, tecnologia blockchain e produtos de investimento digital.\n\nO desafio não era apenas projetar experiências intuitivas para fluxos de trabalho financeiros altamente complexos, mas também ajudar a empresa a evoluir de uma plataforma de produto único para um ecossistema Web3 mais amplo, atendendo investidores, emissores e participantes de ativos digitais.',
      },
      {
        type: 'text',
        title: 'Visão Estratégica do Produto',
        content: 'Como Diretor de Produto, fui responsável pela estratégia de produto, design de produto e colaboração multifuncional em diversas iniciativas dentro do ecossistema Realio.\n\nAlém do UX e design de interface, meu trabalho se estendeu para descoberta de produto, processos de garantia de qualidade, fluxos de suporte ao cliente e comunicações de marketing. Ao aplicar design thinking em toda a organização, ajudei a criar sistemas que melhoraram a qualidade do produto, a eficiência operacional e a consistência da experiência do usuário.',
      },
      {
        type: 'text',
        title: 'Da Plataforma ao Ecossistema',
        content: 'Durante minha gestão, a Realio expandiu de uma plataforma de tokenização primária para um ecossistema mais amplo de produtos, incluindo infraestrutura blockchain, ativos digitais e novas oportunidades de mercado.',
      },
      {
        type: 'text',
        title: 'Realio Network',
        content: 'Realio Network é a infraestrutura blockchain que impulsiona o ecossistema da empresa.\n\nLiderei iniciativas de design de produto para o lançamento e evolução de experiências relacionadas à rede, incluindo staking, gestão de ativos e interações do ecossistema.',
        images: [realioImg02],
      },
      {
        type: 'text',
        title: 'Districts — Metaverso da Indústria Criativa',
        content: 'Districts explorou como a propriedade tokenizada poderia se estender além do setor imobiliário tradicional para a economia criativa.\n\nParticipei desde a definição do conceito até o lançamento, ajudando a moldar a visão do produto, arquitetura da informação, experiência do usuário e processos de validação.',
        images: [realioImg03, realioImg04],
      },
      {
        type: 'text',
        title: 'Freehold Mobile Wallet',
        content: 'Freehold foi projetada para fornecer um ponto de entrada acessível para ativos digitais.\n\nMinha contribuição focou em estratégia de produto, experiência do usuário e design de interação, ajudando a criar uma experiência mobile que reduziu a barreira de entrada sem sacrificar a flexibilidade.',
        images: [realioImg05],
      },
      {
        type: 'text',
        title: 'Impacto',
        content: '• Ajudei a expandir a Realio de uma plataforma de produto único para um ecossistema multi-produto.\n• Apoiei o lançamento de infraestrutura blockchain, produtos de ativos digitais e novas iniciativas de mercado.\n• Estabeleci fluxos de QA que melhoraram a qualidade do produto.\n• Criei maior alinhamento entre produto, marketing e suporte ao cliente.',
      },
      {
        type: 'text',
        title: 'Filosofia de Liderança',
        content: 'Acredito que o design deve influenciar todos os aspectos de um produto, não apenas a interface do usuário.\n\nAo aplicar design thinking na estratégia de produto, garantia de qualidade, suporte ao cliente e comunicação, ajudei a criar experiências mais coerentes e melhores resultados de negócio.',
      },
    ],
  },
  {
    id: 'espremedor-de-papel',
    title: 'Espremedor de Papel',
    subtitle: 'Transformando incerteza em produtos validados através da inovação colaborativa.',
    client: 'Contra Criativos',
    period: '2015 – Presente',
    role: 'Criador · Estrategista de Produto · Designer de Serviço · Facilitador',
    tags: ['Product Strategy & Leadership', 'Selected work', 'Signature Framework'],
    summary: 'Um framework de cocriação aplicado em mais de 30 projetos em 10 indústrias, ajudando organizações a transformar ideias em produtos, serviços e estratégias de negócio validados.',
    cardImage: espremedorImg,
    content: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/237230025',
      },
      {
        type: 'metrics',
        title: 'Impacto em Números',
        items: [
          {
            value: '30+',
            label: 'Projetos Realizados',
            sublabel: 'Workshops de cocriação sob medida para o contexto e desafios de cada organização.',
          },
          {
            value: '10 Indústrias',
            label: 'Experiência Multissetorial',
            sublabel: 'Alimentação & Hospitalidade · Arquitetura & Construção · B2B · Consultoria · RH · Startups · Setor Público · Educação · Universidades · Tecnologia Assistiva',
          },
          {
            value: '100% Sob Medida',
            label: 'Cada Workshop Foi Único',
            sublabel: 'Ao invés de seguir uma metodologia fixa, cada projeto combinou e adaptou frameworks estabelecidos de acordo com os objetivos do cliente.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'Espremedor de Papel é um framework de inovação colaborativa criado para ajudar organizações a transformar incerteza em produtos, serviços e estratégias de negócio validados.\n\nAo invés de aplicar um workshop pré-definido, cada projeto foi desenhado do zero, combinando abordagens como Design Thinking, Design Sprint, Service Design, Lean Startup e Business Design.\n\nOriginalmente concebido como meu projeto final do programa de Estratégia Digital na Hyper Island em Estocolmo, o framework evoluiu para se tornar a metodologia principal da Contra Criativos.',
      },
      {
        type: 'text',
        title: 'Origem',
        content: 'A ideia surgiu durante meu tempo na Hyper Island.\n\nO que mais me impressionou não foi um framework específico, mas a filosofia de facilitação da escola. O aprendizado acontecia através de colaboração, reflexão guiada e experiências cuidadosamente projetadas.\n\nQuando voltei ao Brasil, adaptei esses princípios à realidade das organizações brasileiras, criando um processo que engajava clientes como participantes ativos na construção de soluções.',
      },
      {
        type: 'text',
        title: 'O Desafio',
        content: 'Muitas organizações começam projetos guiadas por suposições ao invés de evidências.\n\nDiferentes partes interessadas têm perspectivas diversas, prioridades competem, e decisões importantes são tomadas antes que o problema real seja completamente compreendido.\n\nO desafio era criar um processo colaborativo capaz de alinhar equipes, questionar suposições e validar ideias antes de investimentos significativos em execução.',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/215751162',
      },
      {
        type: 'text',
        title: 'O Framework',
        content: 'Cada workshop do Espremedor de Papel foi construído sob medida.\n\nWorkshops eram conduzidos tanto remota quanto presencialmente, reunindo partes interessadas multidisciplinares para colaborativamente:\n\nEntender o problema\nAlinhar necessidades de negócio e usuários\nQuestionar suposições\nGerar e avaliar ideias\nPriorizar oportunidades\nDefinir próximos passos estratégicos',
      },
      {
        type: 'text',
        title: 'Meu Papel',
        content: 'Criei o framework e facilitei cada projeto desde a descoberta até a definição estratégica.\n\nMinhas responsabilidades incluíam:\n\nProjetar cada workshop de acordo com o contexto do cliente.\nSelecionar e adaptar métodos de facilitação.\nLiderar sessões com partes interessadas multidisciplinares.\nSintetizar pesquisas e insights dos workshops.\nTraduzir resultados em estratégias de produto, serviço e negócio.',
      },
      {
        type: 'text',
        title: 'Resultado Selecionado',
        content: 'Uma das aplicações mais representativas do framework foi o PING, um dispositivo de tecnologia assistiva para ajudar pessoas com deficiência visual a administrar colírios de forma independente.\n\nO projeto foi selecionado pelo Programa Centelha, garantindo financiamento público de inovação após competir com mais de 500 startups.',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/vYX-vcUVVNw',
      },
      {
        type: 'chips',
        title: 'Indústrias',
        items: [
          'Alimentação & Hospitalidade',
          'Arquitetura & Construção',
          'B2B',
          'Consultoria',
          'Recursos Humanos',
          'Startups',
          'Setor Público',
          'Educação',
          'Universidades',
          'Tecnologia Assistiva',
        ],
      },
      {
        type: 'text',
        title: 'Impacto',
        content: 'Com o tempo, o Espremedor de Papel se tornou muito mais que um formato de workshop.\n\nTornou-se a forma da Contra Criativos abordar a incerteza.\n\nEm mais de 30 projetos, o framework ajudou organizações a:\n\nAlinhar partes interessadas multidisciplinares em torno de objetivos compartilhados.\nSubstituir suposições por evidências.\nValidar ideias antes de investir em execução.\nIdentificar novas oportunidades de negócio.',
      },
      {
        type: 'text',
        title: 'Reflexão',
        content: 'Design é frequentemente associado à criação de interfaces ou produtos.\n\nO Espremedor de Papel reforçou uma perspectiva diferente.\n\nA contribuição mais valiosa do design é criar as condições para que melhores decisões emergem.',
      },
    ],
  },
  {
    id: 'unifyre',
    title: 'Unifyre: Segurança & Acessibilidade em Wallets Web3',
    client: 'Ferrum Network — Unifyre Wallet',
    company: 'Startup Kit',
    year: '2021',
    role: 'Lead Designer',
    tags: ['Product Design', 'Web3', 'Design Leadership', 'Selected work'],
    summary: 'Tornando a segurança avançada acessível enquanto simplifica transações para novos usuários Web3.',
    coverImage: unifyre01,
    content: [
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'Unifyre foi projetado para ajudar usuários a gerenciar ativos digitais dentro do ecossistema Ferrum Network.\n\nNossa análise revelou um desafio maior: reduzir a complexidade e ansiedade frequentemente associadas à segurança Web3, mantendo o nível de proteção esperado por usuários experientes.',
      },
      {
        type: 'text',
        title: 'Projetando Confiança Através da Segurança',
        content: 'Uma das maiores barreiras para a adoção Web3 é a percepção de que segurança é difícil e intimidadora.\n\nReformulamos os requisitos de segurança como conquistas progressivas que ajudavam os usuários a fortalecer suas contas ao longo do tempo.',
      },
      {
        type: 'text',
        title: 'Gamificando a Segurança',
        content: 'Redesenhamos o fluxo de configuração de segurança como um sistema de conquistas progressivas.\n\nOs usuários eram guiados por uma lista de verificação dinâmica que categorizava sua prontidão de segurança e recompensava ações concluídas com maior proteção.',
        images: [unifyre02],
      },
      {
        type: 'text',
        title: 'Transações Pré-Configuradas',
        content: 'Elevamos a funcionalidade de links de transação a um recurso principal.\n\nUsuários podiam gerar links de transação pré-configurados, simplificar transferências de tokens e adicionar camadas de verificação antes da execução.',
        images: [unifyre01],
      },
      {
        type: 'text',
        title: 'Resultado',
        content: 'O Unifyre redesenhado demonstrou que produtos blockchain sofisticados podem se tornar mais acessíveis sem simplificar excessivamente a tecnologia subjacente.',
      },
    ],
  },
  {
    id: 'trst',
    title: 'Trst — Visão Estratégica de Produto & Rebranding',
    client: 'Trst',
    year: '2025',
    role: 'Estrategista de Produto & Lead de Design',
    tags: ['Branding & Comms', 'Product Strategy & Leadership', 'Startup', 'Selected work'],
    summary: 'Evoluindo de uma narrativa tecnológica para um posicionamento orientado a benefícios.',
    coverImage: trst01,
    content: [
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'A Trst precisava evoluir de uma narrativa tecnológica para um posicionamento mais claro e orientado a benefícios, capaz de ressoar com clientes empresariais.',
      },
      {
        type: 'text',
        title: 'Posicionamento Estratégico',
        content: 'Trabalhei em estreita colaboração com a equipe Trst para redefinir como a empresa comunicava seu valor.\n\nMudamos o foco de capacidades técnicas para resultados tangíveis: segurança sem atrito, conformidade sem complexidade.',
        images: [trst02],
      },
      {
        type: 'text',
        title: 'Rebrand Visual',
        content: 'A identidade visual foi projetada para reforçar a nova direção estratégica.\n\nExplorei referências do movimento Atypography e sistemas de design de informação, focando em clareza, hierarquia e simplicidade cognitiva.',
        images: [trst03, trst04],
      },
      {
        type: 'text',
        title: 'TrstType — Sistema de Tipografia Personalizada',
        content: 'Projetei TrstType, uma tipografia modular personalizada que emergiu da interseção entre tecnologia, acessibilidade e design experimental.',
        images: [trst06, trst07, trst08],
      },
      {
        type: 'text',
        title: 'Impacto',
        content: '• Reposicionou a empresa de uma narrativa tecnocêntrica para uma proposta de valor orientada a benefícios.\n• Criou uma linguagem visual distintiva no mercado de segurança cibernética.\n• Desenvolveu um sistema tipográfico proprietário.',
      },
    ],
  },
  {
    id: 'cartesi',
    title: 'Cartesi: Parceria Multifase de Design',
    client: 'Cartesi',
    company: 'Startup Kit',
    year: '2019 - 2022',
    role: 'Design Partner',
    tags: ['Branding & Comms', 'Web3', 'Startup', 'Selected work'],
    summary: 'Parceria de longo prazo abrangendo identidade de marca, websites, redes sociais e comunicação de produto.',
    coverImage: cartesi01,
    content: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/284222165',
      },
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'Cartesi é um protocolo blockchain modular que permite aos desenvolvedores construir aplicações descentralizadas escaláveis usando ferramentas Linux familiares.\n\nEstabelecemos uma parceria estratégica de longo prazo que evoluiu muito além do branding tradicional.',
      },
      {
        type: 'text',
        title: 'Construindo uma Parceria de Longo Prazo',
        content: 'A colaboração se desenvolveu através de múltiplas fases ao longo de vários anos, incluindo evolução da marca, websites, landing pages, sistemas de redes sociais e comunicações do ecossistema.',
        images: [cartesi02],
      },
      {
        type: 'text',
        title: 'Comunicando Tecnologia Complexa',
        content: 'Um dos principais desafios foi traduzir conceitos blockchain altamente técnicos em comunicação acessível sem sacrificar a credibilidade.',
        images: [cartesi03],
      },
      {
        type: 'text',
        title: 'Sistemas de Comunicação Escaláveis',
        content: 'Desenvolvemos estruturas visuais repetíveis e padrões de comunicação que podiam ser adaptados em múltiplos formatos e canais.',
        images: [cartesi01],
      },
      {
        type: 'text',
        title: 'Impacto',
        content: '• Estabeleceu uma parceria estratégica de design de longo prazo.\n• Criou sistemas de comunicação escaláveis.\n• Ajudou a traduzir conceitos complexos de blockchain para diferentes públicos.',
      },
    ],
  },
  {
    id: 'ping',
    title: 'PING — Conta-Gotas para Pessoas Cegas',
    client: 'PING — Tecnologia Assistiva (UFPB)',
    company: 'Contra Criativos',
    year: '2019–2022',
    role: 'Investidor, Gerente de Produto & Estrategista de Design',
    tags: ['Funding', 'Product Strategy & Leadership', 'Startup', 'Selected work'],
    summary: 'Transformando tecnologia assistiva em um produto viável através de design estratégico.',
    coverImage: ping03,
    content: [
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'PING é uma tecnologia assistiva projetada para ajudar pessoas cegas e com deficiência visual a administrar medicamentos líquidos de forma segura e independente.\n\nDesenvolvido originalmente na Universidade Federal da Paraíba, o projeto enfrentou o desafio comum de transformar pesquisa em produto viável.',
      },
      {
        type: 'text',
        title: 'O Desafio',
        content: 'Muitas pessoas com deficiência visual dependem de terceiros para administrar medicamentos líquidos, criando barreiras à autonomia.\n\nO desafio ia além de construir um dispositivo funcional — envolvia criar um produto capaz de gerar impacto significativo em escala.',
      },
      {
        type: 'text',
        title: 'Estratégia & Liderança de Produto',
        content: 'Meu papel focou em transformar a inovação em um produto pronto para o mercado.\n\nIsso incluiu estratégia de produto, análise de necessidades dos usuários, modelagem de negócios e coordenação do redesign.',
        images: [ping01, ping02],
      },
      {
        type: 'links',
        title: 'Cobertura Selecionada',
        items: [
          { url: 'https://gizbr.uol.com.br/brasileiros-criam-tecnologia-deficiencia-visual-controlar-medicamentos/', text: 'Gizmodo Brasil — Brasileiros criam tecnologia para ajudar deficientes visuais' },
          { url: 'https://www.tecmundo.com.br/produto/208415-brasileiros-criam-conta-gotas-sonoro-deficientes-visuais.htm', text: 'TecMundo — Conta-gotas sonoro para deficientes visuais' },
          { url: 'https://saude.abril.com.br/medicina/invencao-de-cientistas-paraibanos-ajuda-cegos-a-tomarem-remedio/', text: 'Veja Saúde — Invenção ajuda cegos a tomar remédio' },
          { url: 'https://canaltech.com.br/saude/pesquisadores-brasileiros-criam-conta-gotas-sonoro-para-ajudar-pessoas-cegas-176303/', text: 'Canaltech — Tecnologia assistiva para medicação' },
        ],
      },
      {
        type: 'text',
        title: 'Status Atual',
        content: 'O PING continua sua jornada rumo à comercialização. O projeto recebeu apoio do programa federal Centelha.',
        images: [ping04, ping05, ping06],
      },
    ],
  },
  {
    id: 'opslock',
    title: 'Website Opslock',
    client: 'Opslock',
    company: 'Startup Kit',
    year: '2020',
    role: 'Estratégia UX & Design',
    tags: ['UX', 'Branding & Comms', 'Startup', 'Selected work'],
    summary: 'Experiência de site com dupla narrativa para dois grupos de usuários.',
    coverImage: opslock01,
    content: [
      {
        type: 'text',
        title: 'Desafio Estratégico',
        content: 'A pesquisa revelou dois grupos distintos de usuários: equipes de gestão baseadas em escritório e profissionais de campo offshore.',
        images: [opslock02, opslock03],
      },
      {
        type: 'text',
        title: 'Solução Inovadora',
        content: 'Criamos uma experiência de site com dupla narrativa. A navegação da gestão começa na superfície e rola para baixo; a dos profissionais de campo começa no rodapé e rola para cima.',
        images: [opslock04, opslock05],
      },
      {
        type: 'text',
        title: 'Impacto no Negócio',
        content: 'O projeto melhorou significativamente o posicionamento de mercado e a clareza de comunicação da Opslock.',
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
    role: 'Estrategista de Produto',
    tags: ['Product Strategy & Leadership', 'Business Design', 'Selected work'],
    summary: 'Estratégia de negócio abrangente para um parque de bike inovador no Nordeste do Brasil.',
    coverImage: circuito01,
    content: [
      {
        type: 'text',
        title: 'Papel & Processo',
        content: 'Trabalhando com a equipe da Contra, contribuí para pesquisa de público-alvo, análise competitiva, design de modelo de negócio e definição de produto.',
        images: [circuito02, circuito03, circuito04, circuito05, circuito06],
      },
      {
        type: 'text',
        title: 'Entregável & Resultado',
        content: 'Um manual de negócio abrangente para gestão, comunicação e relações com investidores. O Circuito Mangabeira está hoje operacional e é referência regional no esporte.',
        images: [circuito07, circuito08],
      },
    ],
  },
  {
    id: 'emurgo',
    title: 'Website Emurgo',
    client: 'Emurgo',
    company: 'Startup Kit',
    year: '2020',
    role: 'UX Design',
    tags: ['UX', 'Web3', 'Branding & Comms'],
    summary: 'Traduzindo complexidade blockchain em comunicação web eficaz para o ecossistema Cardano.',
    coverImage: emurgo01,
    content: [
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/278812370',
      },
    ],
  },
  {
    id: 'startup-kit',
    title: 'Startup Kit',
    subtitle: 'Transformando uma necessidade recorrente em um serviço escalável para startups.',
    client: 'Startup Kit',
    company: 'Contra Criativos',
    period: '2018 – 2021',
    role: 'Co-fundador · Estrategista de Produto · Lead de Design',
    tags: ['Entrepreneurship', 'Startup', 'Branding & Comms'],
    summary: 'Transformando uma necessidade recorrente em um serviço escalável para startups.',
    coverImage: startupkitHero,
    cardImage: startupkitHeader,
    content: [
      {
        type: 'metrics',
        title: 'Impacto em Números',
        items: [
          {
            value: '7 Países',
            label: 'Alcance Global',
            sublabel: 'Projetos entregues nos EUA, Taiwan, Japão, Singapura, Israel, Chile e Brasil.',
          },
          {
            value: 'Principais Aceleradoras',
            label: 'Fundadores apoiados por aceleradoras líderes',
            sublabel: 'Y Combinator (YC) · 500 Startups · SOSV · Startup Chile · Capital Factory',
          },
          {
            value: 'Serviço Produtizado',
            label: 'Construído a partir de comportamento recorrente',
            sublabel: 'Transformando um serviço de agência em um produto repetível para startups em estágio inicial.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Visão Geral',
        content: 'Startup Kit nasceu de uma observação simples.\n\nNa Contra Criativos, começamos a notar que muitas startups nos procuravam no mesmo momento da jornada. Tinham acabado de levantar investimento ou se formado em um programa de aceleração e precisavam comunicar seus produtos com mais clareza e credibilidade.',
      },
      {
        type: 'text',
        title: 'A Oportunidade',
        content: 'A oportunidade não era construir outro estúdio de design.\n\nEra transformar um serviço recorrente de consultoria em um produto repetível.\n\nStartups em estágio inicial frequentemente atingem um marco importante antes de terem as ferramentas de comunicação necessárias.',
      },
      {
        type: 'text',
        title: 'O Produto',
        content: 'Startup Kit empacotou múltiplos serviços especializados em um único produto projetado para fundadores de startups.\n\nEngajamentos típicos incluíam:\n\n• Identidade de marca\n• Sistema visual\n• Website de marketing\n• Mensagens de produto\n• Animação explicativa\n• Ativos de comunicação para investidores',
        images: [startupkitBrandSystem],
      },
      {
        type: 'text',
        title: 'Meu Papel',
        content: 'Como co-fundador, ajudei a moldar tanto a estratégia de negócio quanto o produto em si.\n\nMinhas responsabilidades incluíam:\n\n• Identificar a oportunidade de mercado.\n• Definir o modelo de serviço produtizado.\n• Estruturar a jornada do cliente.\n• Liderar a estratégia de produto e comunicação.\n• Projetar soluções para clientes.\n• Liderar equipes multidisciplinares de design.\n• Garantir qualidade em branding, UX e experiências digitais.\n\nO papel combinava empreendedorismo, pensamento de produto, liderança de design e execução prática.',
      },
      {
        type: 'chips',
        title: 'Clientes',
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
        title: 'Impacto',
        content: 'Startup Kit demonstrou que problemas recorrentes de clientes podem se tornar produtos.\n\nAo transformar uma oferta fragmentada em uma solução estruturada, reduzimos a complexidade para fundadores enquanto criávamos um modelo de negócio mais escalável.',
      },
    ],
  },
  {
    id: 'novo-ciclo',
    title: 'Novo Ciclo',
    subtitle: 'Um time de agentes de IA documentando a volta do Brasil rumo à Copa do Mundo',
    year: '2026',
    role: 'Product Owner, AI Systems & Product Design',
    tags: ['Product Design', 'AI', 'Selected work'],
    summary: 'Um agregador de notícias automatizado onde oito agentes de IA pesquisam, selecionam, escrevem e publicam capítulos diários sobre a jornada da seleção brasileira até a Copa do Mundo de 2030 — sem intervenção humana.',
    coverImage: novocicloImg,
    content: [
      {
        type: 'text',
        content: 'Novo Ciclo é um agregador de notícias automatizado que acompanha, dia após dia, a jornada da seleção brasileira em direção à Copa do Mundo de 2030. Cada capítulo é pesquisado, selecionado, escrito e publicado por um time de oito agentes de IA, com zero intervenção humana — da coleta à publicação.\n\nO projeto está disponível em novociclo.xyz.',
      },
      {
        type: 'text',
        title: 'O ponto de partida',
        content: 'O projeto começou com uma frase. Após a eliminação do Brasil para a Noruega na Copa do Mundo de 2026, o técnico Carlo Ancelotti resumiu o momento: "Não é o fim, é o começo de um novo ciclo." Essa frase capturou algo que eu já vinha sentindo sobre meu próprio trabalho: depois de duas décadas construindo produtos, queria testar, na prática, até onde a IA poderia sustentar um produto de ponta a ponta — não como assistente ocasional, mas como parte estrutural do time.\n\nEu também sabia que, sozinho, não conseguiria acompanhar a seleção tão de perto quanto gostaria. Em vez de abandonar a ideia, projetei um sistema que faria esse acompanhamento por mim — de forma confiável e automática.',
      },
      {
        type: 'text',
        title: 'Abordagem: processo antes do código',
        content: 'Antes de escrever uma linha de código, defini os requisitos que guiariam cada decisão técnica e editorial do produto:\n\n• Operar de forma autônoma, sem curadoria manual diária;\n• Usar apenas fontes jornalísticas confiáveis (Globo Esporte, UOL Esporte, ESPN Brasil, CBF, FIFA);\n• Curar as notícias, nunca gerá-las — o produto não escreve reportagens, ele organiza e contextualiza o jornalismo que já existe;\n• Sempre linkar para a matéria original, nunca reproduzir conteúdo;\n• Estruturar informações em capítulos e semanas diários, construindo um diário da caminhada até 2030.\n\nEsses requisitos funcionaram como o sistema de design do produto: qualquer novo agente, prompt ou funcionalidade precisa respeitá-los antes de ser lançado. Essa disciplina — regras claras definidas antes da automação, não depois — é o que separa um experimento de IA de um produto que pode se sustentar sozinho.',
      },
      {
        type: 'video',
        url: 'https://player.vimeo.com/video/1211838573?background=1',
      },
      {
        type: 'text',
        title: 'Arquitetura: oito agentes, um pipeline',
        content: 'Montei um time de oito agentes de IA, cada um com uma única responsabilidade no pipeline editorial: pesquisar, coletar, filtrar por relevância e escrever a manchete e o resumo do dia. O fluxo roda de ponta a ponta sem checkpoint humano, publicando o capítulo diário automaticamente às 18h.\n\nO conteúdo é gerado como arquivos estáticos, versionados dentro do próprio repositório do projeto — a história editorial do produto é, literalmente, sua história de código. A stack (Next.js, TypeScript, Tailwind CSS) roda na Vercel, com deploy automatizado via GitHub Actions a cada novo capítulo.',
      },
      {
        type: 'text',
        title: 'Meu papel',
        content: 'Trabalhei em todo o ciclo de vida: defini o problema e os requisitos do produto, projetei a arquitetura dos agentes e as responsabilidades individuais de cada um, orquestrei o pipeline de coleta, curadoria e publicação, e liderei a implementação junto com ferramentas de codificação com IA. Foi uma oportunidade rara de assumir um fluxo completo de produto — dos pixels ao código — usando IA não como atalho, mas como parte do time de produto.',
      },
      {
        type: 'text',
        title: 'Resultado',
        content: 'O Novo Ciclo está no ar, publicando capítulos diários de forma totalmente automatizada desde o primeiro dia do novo ciclo da seleção. O produto entrega valor sem competir com o jornalismo esportivo: ele existe porque o jornalismo esportivo sério existe, e direciona tráfego de volta para essas fontes em vez de substituí-las.',
      },
    ],
  },
];

export function getProjectPt(id: string): Project | undefined {
  return projectsPt.find((p) => p.id === id);
}

export function getNextProjectPt(currentId: string): Project | null {
  const currentIndex = projectsPt.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === projectsPt.length - 1) {
    return projectsPt[0];
  }
  return projectsPt[currentIndex + 1];
}

export function getPreviousProjectPt(currentId: string): Project | null {
  const currentIndex = projectsPt.findIndex((p) => p.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return projectsPt[projectsPt.length - 1];
  }
  return projectsPt[currentIndex - 1];
}
