---
title: PRD-Watcher

---

# PRD — Watcher

**Interactive Hero Portrait for diogocvc.com**

**Status:** Ready for implementation
**Priority:** High
**Owner:** Diogo Carvalho

---

# 1. Overview

Watcher é uma interação exclusiva da Hero do portfólio diogocvc.com.

O componente consiste em um retrato pixelado do autor que aparenta acompanhar o visitante com o olhar enquanto ele movimenta o cursor pela tela. Em dispositivos móveis, o comportamento é adaptado para responder à rolagem da página.

O objetivo não é reproduzir um movimento humano perfeitamente natural, mas criar uma sensação sutilmente estranha e memorável, reforçando a identidade visual do portfólio.

A troca das imagens deve ser instantânea, sem qualquer interpolação ou animação de transição.

---

# 2. Goals

## Primary Goal

Criar uma interação marcante que aumente a personalidade do site e diferencie o portfólio de outros portfólios de Product Designers.

## Secondary Goals

* Reforçar a identidade visual do site.
* Demonstrar atenção a microinterações.
* Manter excelente performance.
* Não comprometer a legibilidade da Hero.
* Não competir visualmente com o conteúdo principal.

---

# 3. Design Principles

Watcher deve transmitir:

* curiosidade
* presença
* personalidade
* estranheza controlada
* simplicidade técnica
* performance

Não deve parecer:

* um personagem animado
* um avatar 3D
* um efeito exagerado
* um gimmick visual

O comportamento deve parecer discreto, mas suficiente para ser percebido poucos segundos após o carregamento da página.

---

# 4. Assets

O componente utilizará exatamente nove imagens.

```
front.png

top.png
bottom.png

left.png
right.png

top-left.png
top-right.png

bottom-left.png
bottom-right.png
```

Todas as imagens deverão possuir:

* mesma resolução
* mesmo enquadramento
* mesmo tamanho
* mesmo alinhamento
* fundo transparente
* formato WebP

---

# 5. Desktop Behaviour

## Cursor Tracking

O Watcher acompanha o cursor utilizando a posição relativa entre:

* centro do retrato
* posição atual do cursor

A direção será calculada utilizando o vetor entre ambos.

A direção será convertida em um dos oito setores ao redor da imagem.

```
↖   ↑   ↗

←   •   →

↙   ↓   ↘
```

Cada setor corresponde diretamente a uma das imagens.

---

## Center State

Caso o cursor esteja suficientemente próximo ao centro do retrato, utilizar:

```
front.png
```

---

## Image Change

A troca entre imagens deve ser:

* instantânea
* sem fade
* sem dissolve
* sem blur
* sem interpolação
* sem animação CSS

A mudança deve parecer um sprite trocando de frame.

---

## Hysteresis

Adicionar uma pequena tolerância entre setores para evitar alternância rápida quando o cursor estiver exatamente sobre uma fronteira angular.

O objetivo é eliminar flickering sem alterar a sensação de troca abrupta.

---

## Update Frequency

Os cálculos deverão ocorrer através de:

```
requestAnimationFrame()
```

A imagem somente será atualizada quando o setor realmente mudar.

Movimentos dentro do mesmo setor não devem disparar re-renderizações.

---

# 6. Mobile Behaviour

Em dispositivos móveis não existe cursor.

O comportamento será substituído por uma interação baseada na rolagem.

Layout:

```
Portrait

↓

Headline

↓

Description

↓

CTA
```

A imagem deixa de ficar atrás do conteúdo e passa a ocupar uma posição acima do conteúdo principal da Hero.

Serão utilizados apenas três estados:

```
up

front

down
```

Durante a rolagem:

Topo da página

↓

up

↓

front

↓

down

Conforme o usuário retorna ao topo:

↓

front

↓

up

A troca permanece instantânea.

---

# 7. Visual Requirements

Desktop

* Background da Hero.
* Parcialmente atrás do conteúdo.
* Não bloquear interação.
* Pointer events desabilitados.
* Opacidade reduzida.
* Integrado à composição visual existente.

Mobile

* Posicionado acima do conteúdo.
* Centralizado.
* Mantém a mesma estética visual.
* Não ultrapassa a altura prevista da Hero.

---

# 8. Accessibility

Caso o usuário utilize:

```
prefers-reduced-motion
```

Watcher deverá:

* permanecer estático
* utilizar apenas front.webp
* não registrar eventos de mouse
* não registrar scroll listeners

---

# 9. Performance Requirements

O componente deverá:

* pré-carregar todas as imagens
* evitar layout shifts
* evitar re-renderizações desnecessárias
* utilizar apenas um listener de mouse
* utilizar requestAnimationFrame
* não utilizar Canvas
* não utilizar WebGL
* não utilizar bibliotecas externas
* manter bundle mínimo

---

# 10. Technical Architecture

```
Hero

├── HeroContent
│
├── Watcher
│
└── Background
```

Estrutura sugerida:

```
src/

components/

Hero/

Hero.tsx

Watcher/

Watcher.tsx

WatcherController.ts

Watcher.types.ts

watcher.css

public/

images/

watcher/

front.png

top.png

bottom.png

left.png

right.png

top-left.png

top-right.png

bottom-left.png

bottom-right.png
```

---

# 11. Acceptance Criteria

O componente será considerado concluído quando:

* Todas as nove imagens forem carregadas corretamente.
* O cursor controlar corretamente a direção do olhar.
* Não existir flickering perceptível.
* Não existir atraso perceptível.
* O comportamento mobile funcionar apenas com scroll.
* Desktop e mobile utilizarem layouts distintos.
* O componente respeitar prefers-reduced-motion.
* O conteúdo da Hero permanecer totalmente legível.
* Lighthouse não apresentar degradação significativa de performance.

---

# 12. Future Enhancements (Out of Scope)

As seguintes ideias não fazem parte desta entrega:

* piscadas automáticas
* pequenas mudanças de expressão
* efeitos sonoros
* animações faciais
* movimento do corpo
* IA ou visão computacional
* Canvas
* WebGL
* shaders
* Three.js

---

# 13. Implementation Plan

### Phase 1

Criar o componente Watcher.

---

### Phase 2

Adicionar carregamento e pré-carregamento das nove imagens.

---

### Phase 3

Implementar o cálculo da direção baseado no cursor.

---

### Phase 4

Implementar a troca instantânea das imagens.

---

### Phase 5

Adicionar histerese para evitar flickering.

---

### Phase 6

Integrar o componente à Hero Desktop.

---

### Phase 7

Implementar o comportamento específico para dispositivos móveis.

---

### Phase 8

Adicionar suporte a prefers-reduced-motion.

---

### Phase 9

Realizar otimizações finais de performance.

---

# 14. Definition of Done

Watcher será considerado finalizado quando:

* a interação funcionar de forma consistente em desktop e mobile;
* o componente permanecer desacoplado da lógica da Hero;
* toda a implementação estiver tipada e documentada;
* o código seguir a arquitetura existente do projeto;
* a solução não introduzir dependências externas;
* o desempenho permanecer excelente mesmo em dispositivos de entrada.



