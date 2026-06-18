# Diogo Carvalho — Portfolio Site

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | React 18 + TypeScript |
| Bundler | Vite 6 |
| Roteamento | React Router v7 (SPA) |
| Estilização | Tailwind CSS v4 + shadcn/ui tokens |
| Animação | Motion (Framer Motion) |
| Fontes | Manrope (headings) + Inter (body) — Google Fonts |
| Deploy | Vercel (Hobby Plan) — SPA com `vercel.json` rewrites |
| Analytics | Google Analytics GA4 (G-P0S0BNDS93) |

## Estrutura de Pastas

```
src/
├── main.tsx                          # Entry point
├── styles/
│   ├── index.css                     # Agregador (imports fonts, tailwind, theme)
│   ├── fonts.css                     # Google Fonts (Manrope + Inter)
│   ├── tailwind.css                  # Tailwind v4 setup
│   └── theme.css                     # CSS custom properties / design tokens
├── app/
│   ├── App.tsx                       # Root React component
│   ├── routes.tsx                    # React Router config
│   ├── layouts/
│   │   └── Root.tsx                  # Layout (Nav + Outlet + Footer)
│   ├── pages/
│   │   ├── Home.tsx                  # Página inicial
│   │   ├── About.tsx                 # Sobre
│   │   ├── CaseStudy.tsx             # Estudo de caso dinâmico
│   │   └── NotFound.tsx              # 404
│   ├── data/
│   │   └── projects.ts              # Dados dos 8 projetos + imagens
│   └── components/
│       ├── Navigation.tsx            # Navbar fixa com scroll-aware
│       ├── Footer.tsx                # Footer escuro com email e links
│       ├── figma/
│       │   └── ImageWithFallback.tsx # Imagem com fallback
│       └── ui/                       # 47 componentes shadcn (não utilizados diretamente)
├── imports/                          # Imagens estáticas (42 assets)
│   ├── case-*.png / .jpeg           # Imagens dos projetos
│   └── pasted_text/                  # Conteúdo fonte em markdown
└── assets/                           # (não utilizado)
```

## Páginas

| Rota | Componente | Seções |
|------|-----------|--------|
| `/` | Home | Hero (editorial 3 linhas) → Selected Work (8 projetos) → Capabilities (escuro, numerado 01-05) → Talks & Publications (escuro) |
| `/about` | About | Declaração editorial → Bio → Jornada Profissional (timeline) → Educação + Filosofia → Talks & Community → Indústrias → Contato + CV |
| `/work/:id` | CaseStudy | Hero (meta) → Imagem → Challenge → My Contribution → Strategy/Execution (alternados com imagens) → Prev/Next |
| `*` | NotFound | 404 |

### Projetos (8)
1. Realio (6 imagens)
2. Unifyre (2 imagens)
3. TRST (7 imagens, skip img-05)
4. Cartesi (3 imagens)
5. PING (6 imagens)
6. Opslock (6 imagens)
7. Circuito Mangabeira (8 imagens, .jpeg)
8. Emurgo (1 imagem)

## Design System

### Cores
| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#000000` | Fundo escuro, botões |
| `--background` | `#ffffff` | Fundo claro |
| `--foreground` | `#191c1f` | Texto principal |
| `--muted-foreground` | `#505a63` | Texto secundário |
| `--border` | `rgba(0,0,0,0.1)` | Hairlines claras |
| `--primary-foreground` | `#ffffff` | Texto em fundo escuro |

Modo escuro (`.dark`) definido mas não utilizado — o site opera em modo claro com seções escuras via classe `bg-primary text-primary-foreground`.

### Tipografia
- **Headings**: Manrope, weight 500
- **Body**: Inter, weight 400
- Tamanhos: fluidos via Tailwind (`text-6xl` a `text-sm`)

### Componentes Visuais
- Botões: `rounded-full`, `bg-primary text-primary-foreground`, padding `px-8 py-4`
- Tags: `rounded-full`, `bg-black/5`, `text-sm`
- Seções escuras: `bg-primary text-primary-foreground`
- Cards de projeto: `aspect-[16/9]`, `rounded-lg`, hover com scale
- Animações: fade + slide via `motion` (initial/whileInView)

## Histórico de Iterações

### v1 — Next.js (descontinuado)
- Primeira implementação com Next.js 16 + App Router + Tailwind v4
- SSG com `output: "export"`
- 10 páginas estáticas
- Substituído pela versão v2 do Figma Make

### v2 — Vite + React (atual)
- Gerado a partir de design no Figma Make
- Migrado para Vite + React + React Router
- Conteúdo alinhado com CONTENT.md e DESIGN-DIRECTION.md
- Seções adicionadas: Capabilities, Talks & Publications, My Contribution
- Tema ajustado para true black (`#000000`) conforme DESIGN-DIRECTION.md
- Google Analytics GA4 configurado

## Deploy

```bash
npm run build    # Saída em dist/
```

**Vercel**: Projeto configurado como Vite (Framework Preset) com `vercel.json` para SPA rewrites. Auto-deploy ativado no branch `main`.

## Links
- Repositório: https://github.com/diogocvc/diogocvc.com
- Analytics: G-P0S0BNDS93
- Docs fonte: `/docs/CONTENT.md`, `/docs/DESIGN-DIRECTION.md`, `/docs/PORTFOLIO-ARCHITECTURE.md`
