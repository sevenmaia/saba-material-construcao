# SABÁ MATERIAL DE CONSTRUÇÃO
## DESIGN SYSTEM + ESPECIFICAÇÃO DE INTERFACE + GUIA DE IMPLEMENTAÇÃO
### Landing Page Institucional/Comercial + Bio Site (Link da Bio) — Desktop, Tablet e Mobile

**Versão:** 1.0 — 08/10/2026  
**Status:** especificação para implementação, sujeita à validação de dados comerciais  
**Idioma:** pt-BR  
**Entregáveis:** `/(landing page)` e `/bio` (biosite); componentes e tokens compartilhados  
**Prioridade:** fidelidade à direção visual, conteúdo legítimo, conversão via WhatsApp, responsividade real  
**Fontes de referência:** imagens da página atual da Sabá, Instagram da empresa e os dois conceitos visuais aprovados nesta conversa. **São referências de estilo e arquitetura visual, nunca arquivos a recortar ou publicar.**

---

# 0. LEIA ANTES DE CODIFICAR — REGRAS INEGOCIÁVEIS

> **O ANTIGRAVITY DEVE IMPLEMENTAR DUAS EXPERIÊNCIAS REAIS, NÃO REPRODUZIR UMA CAPTURA DE TELA.** A landing page e o biosite devem funcionar como páginas HTML/CSS/JS acessíveis e responsivas, com conteúdo, textos, imagens e botões independentes.

1. **PROIBIDO utilizar prints, crops, recortes, screenshots, montagens da referência, mockups de celulares ou imagens de telas anteriores como se fossem banners, fotos, cards ou seções do site.** NÃO inserir qualquer screenshot em `<img>`, `<picture>`, `background-image`, `canvas`, pseudo-elemento ou CSS. Não recriar a página como uma imagem grande ou como vários recortes.
2. **PROIBIDO inventar ou desenhar ícones do zero.** Não gerar ícones com IA. Não desenhar SVGs proprietários à mão, não fazer pseudoícones com CSS, emojis ou caracteres Unicode. Utilizar **Lucide**, **Tabler Icons** ou **Heroicons** mediante importação por pacote; respeitar proporção, espessura e consistência. Logotipos de fabricantes e da Sabá são **arquivos oficiais**, não ícones a inventar.
3. **IMAGENS OBRIGATORIAMENTE INDEPENDENTES, REAIS OU CRIADAS PARA O PROJETO.** Obter de acervo da própria empresa (preferencial), bancos com licença adequada (Unsplash, Pexels ou bancos comerciais) ou gerar novas fotografias ilustrativas por IA. Nunca extrair imagens das capturas de referência.
4. **Não alterar identidades reais.** Fotos de equipe, fachada ou proprietários devem ser **fotos originais autorizadas**; jamais gerar uma “equipe real” falsa ou modificar rostos de pessoas identificáveis. Se ainda não foram entregues, manter placeholders elegantes com `TODO: foto real pendente` na configuração editorial, sem print nem imagem pessoal falsificada.
5. **CANTOS POUCO ARREDONDADOS.** É proibido usar `rounded-2xl`, `rounded-3xl`, `rounded-full` em cards, painéis, janelas, banners ou CTAs. Raio máximo dos cards: **10 px desktop / 8 px tablet / 6 px mobile**. Botões: **8 px desktop / 6 px mobile**. Bordas mais retas e industriais. Círculos são permitidos apenas para avatares, botões/ícones realmente circulares e badges redondos.
6. **Mobile é uma implementação de primeira classe.** Nunca apenas reduzir o desktop. Testar individualmente em **320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440 e 1920 px**; não pode haver texto cortado, overflow horizontal, cards estourados, imagens distorcidas ou curvatura exagerada.
7. **Sem inventar informações comerciais.** Validar horário, endereço, links, telefone, marcas revendidas, entregas e afirmações com o cliente antes de publicar. Conteúdos de exemplo ficam marcados em `site.config` como `PENDENTE_VALIDACAO`, nunca fabricados silenciosamente.
8. **O layout dos dois celulares na referência representa trechos diferentes de uma única página `/bio` rolável.** NÃO criar “celular esquerdo” e “celular direito” como duas colunas no site; NÃO desenhar moldura de aparelho dentro do biosite.
9. **Botões precisam funcionar.** Links reais para WhatsApp, Instagram, Google Maps e âncoras, com mensagens contextuais, estados hover/focus, teclado e acessibilidade.
10. **Entrega = código-fonte + assets individuais + páginas navegáveis.** Caso falte um arquivo, não substitua por print. Documente pendência e use um placeholder correto, sem causar quebra de layout.

## 0.1 Critérios de aprovação imediata

- [ ] Nenhuma captura de referência foi incorporada ao projeto como asset.
- [ ] Ícones são importados de biblioteca reconhecida; marcas usam logotipos oficiais autorizados.
- [ ] Imagens individuais possuem origem/licença ou foram produzidas especificamente; nenhuma é crop de captura.
- [ ] `/` e `/bio` são páginas reais, integradas, navegáveis e responsivas.
- [ ] Raios de card/botão respeitam tokens no desktop E no mobile.
- [ ] Área principal visível em 390 px sem horizontal scroll; botões WhatsApp funcionam.
- [ ] Dados não confirmados estão centralizados para validação.

---

# 1. PROPÓSITO E ARQUITETURA DA EXPERIÊNCIA

**Negócio:** Sabá Material de Construção, Manaus/AM. Referências fornecidas enfatizam poço artesiano, materiais de construção, tintas, hidráulica, elétrica e ferramentas, histórico desde 2010 e contato comercial por WhatsApp.

**Objetivo de negócio principal:** gerar conversas de orçamento e pedidos por WhatsApp.  
**Objetivos secundários:** mostrar categorias, transmitir confiança, orientar localização/horário e levar visitantes do Instagram à loja.  
**Público:** consumidores finais, profissionais da construção, instaladores, equipes de obras e pessoas que buscam materiais para poço artesiano.

## 1.1 Rotas

| Rota | Tipo | Papel | Conversão |
|---|---|---|---|
| `/` | Landing Page (LP) | Apresentar a empresa de modo mais completo e captar leads locais | “Solicitar orçamento” via WhatsApp |
| `/bio` | Microsite mobile-first (link da bio) | Facilitar o caminho Instagram → categorias/WhatsApp/localização | “Fazer orçamento” e atalhos |
| `/politica-de-privacidade` | Página informativa opcional conforme coleta/analytics | Transparência e LGPD | Sem CTA comercial obrigatório |

**As duas páginas compartilham identidade visual, marcas e categorias, mas NÃO compartilham a mesma ordem ou densidade de seções.** A LP tem narrativa institucional; o biosite tem atalhos rápidos para a ação.

## 1.2 Hierarquia de ações

1. **CTA primário:** conversar/orçar pelo WhatsApp.
2. **CTA secundário:** ver categorias e especialidades.
3. **CTA terciário:** localização, horário e Instagram.

**Tom de voz:** direto, acolhedor, prestativo, orientado à obra, sem exageros promocionais ou superlativos não comprovados.

---

# 2. DESIGN TOKENS — FONTE ÚNICA DE VERDADE

## 2.1 Paleta

| Token | HEX | Uso |
|---|---|---|
| `--color-brand` | `#FFE600` | Amarelo principal da interface; títulos destacados e CTA |
| `--color-brand-hover` | `#F4D900` | Hover do CTA amarelo |
| `--color-ink` | `#111214` | Texto principal e superfícies pretas |
| `--color-ink-soft` | `#232428` | Cards escuros e variações |
| `--color-charcoal` | `#34363B` | Textos secundários sobre claro |
| `--color-paper` | `#FFFFFF` | Base clara |
| `--color-surface` | `#F5F5F2` | Fundo neutro de seção |
| `--color-surface-2` | `#ECEDEA` | Separação suave |
| `--color-border` | `#DDDEDA` | Divisórias e linhas |
| `--color-whatsapp` | `#0CBF54` | CTA WhatsApp dedicado; verificar contraste |
| `--color-whatsapp-hover` | `#099E46` | Hover CTA WhatsApp |
| `--color-focus` | `#1469F2` | Outline acessível de foco |
| `--color-danger` | `#B42318` | Mensagens de erro |

**Proporção visual recomendada para LP:** 55–60% branco/neutro, 25–30% preto, 10–15% amarelo. **Bio:** mais amarelo, mas manter alternância com blocos brancos e pretos para legibilidade. Não preencher toda a página com amarelo intenso sem respiro.

**Contraste:** preferir preto sobre amarelo e sobre branco. Textos brancos sobre preto. Verde WhatsApp com texto branco somente após validação WCAG; se necessário, escurecer o verde do botão para assegurar contraste.

## 2.2 Tipografia

- **Headline/display:** `Barlow Condensed`, pesos 700/800/900, fallback `Arial Narrow, Impact, sans-serif`.
- **Texto/interface:** `Inter`, pesos 400/500/600/700, fallback `Arial, sans-serif`.
- Não “desenhar texto em imagem”; todos os textos essenciais são HTML selecionável e responsivo.
- Aplicar `font-display: swap`; carregar preferencialmente subsets latinos.

| Estilo | Desktop ≥ 1200 px | Tablet 768–1199 px | Mobile ≤ 767 px | Entrelinha |
|---|---:|---:|---:|---:|
| Display Hero LP | 76 px | 60 px | 48 px (42 px em 320) | 0.96 |
| Display Hero Bio | 64 px | 52 px | 46 px (40 px em 320) | 0.98 |
| H2 seção | 44 px | 38 px | 32 px | 1.05 |
| H3 | 25 px | 23 px | 21 px | 1.12 |
| Card title | 19 px | 18 px | 17 px | 1.2 |
| Body large | 18 px | 17 px | 16 px | 1.55 |
| Body | 16 px | 16 px | 15 px | 1.5 |
| Small/helper | 13 px | 13 px | 12 px | 1.45 |
| CTA | 15 px | 15 px | 14 px | 1.2 |
| Eyebrow | 12 px | 12 px | 11 px | 1.25 |

**Text wrapping:** títulos com `max-width` controlado; nunca usar texto embutido na hero image. Preferir quebras semânticas explícitas somente onde necessário. Evitar linhas órfãs. Usar `text-wrap: balance` nos títulos e `text-wrap: pretty` nos parágrafos onde houver suporte.

## 2.3 Espaçamentos e dimensões

**Escala de espaço de 4 px:** `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128`. Usar tokens `space-*`; evitar valores aleatórios.

| Componente | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Container máximo LP | 1248 px | largura − 64 px | largura − 32 px |
| Container máximo Bio | 560 px para coluna central | largura − 48 px | largura − 32 px |
| Margem externa LP em 1440 | 96 px | 32 px | 16 px |
| Header LP altura | 80 px | 72 px | 64 px |
| Header Bio altura | 80 px | 72 px | 72 px |
| Padding vertical seção LP | 96 px | 72 px | 56 px |
| Padding horizontal card | 24 px | 20 px | 14 px |
| Espaço entre cards | 16–20 px | 16 px | 10–12 px |
| Altura mínima CTA | 52 px | 48 px | 48 px |
| Touch target mínimo | 44×44 px | 44×44 px | 44×44 px |
| Largura máxima parágrafo | 640 px | 580 px | 100% |

## 2.4 Bordas — AJUSTE CRÍTICO

**NÃO USAR RAIO EXAGERADO. Esta regra tem prioridade sobre qualquer impressão visual dos mockups.**

| Elemento | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Card de categoria | **10 px** | **8 px** | **6 px** |
| Card de benefício | **8 px** | **8 px** | **6 px** |
| Painel de seção | **10 px** | **8 px** | **6 px** |
| Banner/hero photo | **0–10 px** | **0–8 px** | **0–6 px** |
| Botão/CTA | **8 px** | **8 px** | **6 px** |
| Input | **6 px** | **6 px** | **6 px** |
| Tag/chip | **4 px** | **4 px** | **4 px** |
| Avatar/ícone circular | `50%` | `50%` | `50%` |

- Evitar molduras de cápsula/pill em botões de ação. **Nem botões nem cards são ovalados.**
- Aplicar `overflow: hidden` nos containers de imagem e no card para respeitar o raio sem vazar conteúdo.
- Não compensar a redução do raio com sombras pesadas. Usar borda sutil e sombra curta.
- Regra explícita de CSS em `@media (max-width: 767px)`: raio dos cards **6 px** — NÃO herdar 20/24/32 px do desktop.

## 2.5 Bordas, sombras e ícones

- Borda padrão: `1px solid #DDDEDA`.
- Sombra leve: `0 8px 24px rgba(0,0,0,.08)` em cards elevados.
- Sombra hero text / imagem: discreta; evitar brilho neon.
- Ícones: biblioteca **lucide-react**, stroke `2` ou `2.25`, tamanhos `18/20/24/28 px` conforme contexto.
- NÃO misturar desenhos diferentes nem criar iconografia proprietária.
- Fotografias principais: cor realista, luz natural, contraste comercial sem pele plastificada.

## 2.6 CSS tokens obrigatórios

```css
:root {
  --brand: #FFE600;
  --brand-hover: #F4D900;
  --ink: #111214;
  --ink-soft: #232428;
  --paper: #FFFFFF;
  --surface: #F5F5F2;
  --surface-2: #ECEDEA;
  --border: #DDDEDA;
  --whatsapp: #0CBF54;
  --focus: #1469F2;
  --radius-card: 10px;
  --radius-panel: 10px;
  --radius-button: 8px;
  --container-lp: 1248px;
  --container-bio: 560px;
  --section-gap: 96px;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 88px; }
body { margin: 0; min-width: 320px; color: var(--ink); background: var(--paper); }
img, svg, video { max-width: 100%; }
img { display: block; height: auto; }
button, a { -webkit-tap-highlight-color: transparent; }
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
.container-lp { width: min(100% - 64px, var(--container-lp)); margin-inline: auto; }
.container-bio { width: min(100% - 32px, var(--container-bio)); margin-inline: auto; }
.card { border-radius: var(--radius-card); overflow: hidden; }
.button { border-radius: var(--radius-button); min-height: 52px; }
@media (max-width: 767px) {
  :root { --radius-card: 6px; --radius-panel: 6px; --radius-button: 6px; --section-gap: 56px; }
  html { scroll-padding-top: 72px; }
  .container-lp { width: calc(100% - 32px); }
  .button { min-height: 48px; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
```

---

# 3. SISTEMA DE COORDENADAS E REGRAS DE COMPOSIÇÃO

## 3.1 Como ler `X`, `Y`, `W`, `H`

- **X:** distância em px da BORDA ESQUERDA do viewport de referência.
- **Y:** distância em px da BORDA SUPERIOR da página (documento completo, não a viewport após rolagem).
- **W:** largura do bloco.
- **H:** altura aproximada; textos e conteúdo podem expandir naturalmente.
- **Pontos de referência:** desktop **1440 px** de largura; mobile **390 px** de largura. Há especificações adicionais para tablet 768 e 1024.
- **IMPORTANTE:** números são **guias de composição**, não instrução para `position:absolute` em toda a página. Layout real deve usar `max-width`, `grid`, `flex`, `gap`, `minmax`, padding e posicionamento responsivo. `absolute` somente para elementos decorativos e fotos sobrepostas *dentro de um container relativo*.
- O Y abaixo é **aproximado e cumulativo**, válido como referência para visualização. Altura final deve respeitar conteúdo, fonte, zoom e acessibilidade. Nunca forçar `height` que corte textos.

## 3.2 Grid de referência

**Desktop ≥ 1200:** viewport 1440; 12 colunas dentro de container 1248, x=96 a 1344; gutters de 20 px; coluna teórica `(1248 - 11×20)/12 = 85.67 px`.  
**Tablet 768–1199:** container = viewport − 64 px, 8 colunas e gap 16 px.  
**Mobile 320–767:** container = viewport − 32 px, 4 colunas, gap 10 px; em 390, começa x=16 e termina x=374, largura 358.  
**Desktop Bio:** conteúdo estreito central de até 560 px, sem simular moldura de smartphone.

---

# 4. LANDING PAGE `/` — ESTRUTURA FINAL

## 4.1 Ordem semântica obrigatória

1. Header/Navegação sticky.
2. Hero com mensagem principal, foto independente e CTA.
3. Especialidades/categorias.
4. Motivos para escolher a Sabá.
5. Sobre a empresa/equipe real.
6. Marcas oficiais representadas.
7. Contato, localização e WhatsApp.
8. Footer.
9. Botão flutuante WhatsApp (sobreposto de modo acessível, não como seção).

## 4.2 Mapa global desktop — referência 1440 px

| Seção | X | Y inicial | W | H previsto | Fundo |
|---|---:|---:|---:|---:|---|
| Header | 0 | 0 | 1440 | 80 | amarelo |
| Hero | 0 | 80 | 1440 | 600 | preto + foto |
| Categorias | 0 | 680 | 1440 | 620 | branco |
| Diferenciais | 0 | 1300 | 1440 | 390 | neutro |
| Sobre | 0 | 1690 | 1440 | 500 | branco |
| Marcas | 0 | 2190 | 1440 | 250 | neutro |
| Contato / Localização | 0 | 2440 | 1440 | 540 | preto e imagens |
| Footer | 0 | 2980 | 1440 | 150 | preto |

**Escala de referência, não altura fixa.** Imagens podem alterar levemente as seções após carregamento; reservar `aspect-ratio` para evitar layout shift.

## 4.3 LP / Header desktop e mobile

**Desktop 1440:**

| Elemento | X | Y | W | H | Detalhe |
|---|---:|---:|---:|---:|---|
| Área principal header | 96 | 0 | 1248 | 80 | `display:flex; justify-content:space-between; align-items:center` |
| Logo oficial | 96 | 16 | 190 | 48 | `object-fit: contain`, NÃO refazer a logo |
| Links | 500 | 28 | 360 | 24 | Início, Produtos, Sobre, Contato |
| Botão WhatsApp | 1120 | 17 | 224 | 46 | fundo preto, texto branco, raio 8 |

**Mobile 390:** header `X0 Y0 W390 H64`; logo `X16 Y11 W164 H42`; menu hambúrguer da biblioteca `X330 Y12 W44 H40`. Não mostrar 4 links horizontalmente; usar menu expansível com foco e `aria-expanded`, ou âncoras em menu vertical. Menu com fundo branco/preto e borda suave, raio 6. Logo nunca deve ficar espremida por botão enorme.

**Header sticky:** `position: sticky; top:0; z-index:50; background: var(--brand)`; sombra mínima somente após scroll; âncoras devem considerar altura do header.

## 4.4 LP / Hero — DESKTOP

**Caixa da hero:** `(X=0, Y=80, W=1440, H≈600)`; fundo `#111214` com foto de ambiente de materiais à direita e gradiente preto à esquerda. `position:relative; overflow:hidden`.

| Componente | X | Y | W | H | Especificação |
|---|---:|---:|---:|---:|---|
| Background hero | 0 | 80 | 1440 | 600 | foto independente + overlay |
| Gradiente de leitura | 0 | 80 | 920 | 600 | esquerda 92% preto, direita transparente |
| Eyebrow | 96 | 153 | 500 | 18 | `SABÁ MATERIAL DE CONSTRUÇÃO`, amarelo, tracking 0.18em |
| H1 | 96 | 184 | 655 | 230 | `Tudo para sua obra, do poço artesiano ao acabamento.` |
| Parágrafo | 96 | 421 | 555 | 76 | 17–18 px, branco, máximo ~3–4 linhas |
| CTA primário amarelo | 96 | 522 | 242 | 52 | `Solicitar orçamento` + `ArrowUpRight` Lucide |
| CTA secundário contorno | 352 | 522 | 230 | 52 | `Falar no WhatsApp` + `MessageCircle` Lucide |
| Destaques de confiança | 96 | 602 | 665 | 54 | 3 indicadores alinhados; `ShieldCheck`, `BadgeCheck`, `Users` |
| Profissional da hero | 770 | 95 | 500 | 585 | foto nova de modelo licenciado/gerado, não funcionário inventado |

**Organização z-index:** foto `z=0`; gradiente `z=1`; texto/CTA `z=2`; elementos decorativos opcionais discretos `z=2`. O recorte do personagem deve ser uma IMAGEM AUTÔNOMA, sem fundo de screenshot. Aceitável: fundo de loja na própria foto com gradiente. Não recortar pessoa do layout de referência.

**Tratamento da H1:** `Barlow Condensed 800/900 76px`, cor branca com a primeira expressão ou palavra-chave em amarelo. Exemplo renderizável:

> Tudo para sua obra,  
> **do poço artesiano**  
> ao acabamento.

Manter sentido original; não colocar mais de duas cores em um título. Possível pequeno selo textual `SUA OBRA EM BOAS MÃOS` no lado direito, somente se a foto permitir sem poluição.

**Hero image prompts:** ver seção 9; escolher foto sem letras, sem logotipos inventados e sem pessoas identificáveis do cliente. NÃO gerar texto dentro da imagem.

## 4.5 LP / Hero — MOBILE

**Caixa da hero:** `(X=0, Y=64, W=390, H≈690)`; não reaproveitar grid horizontal.

| Elemento | X | Y | W | H | Regra |
|---|---:|---:|---:|---:|---|
| Eyebrow | 16 | 91 | 358 | 16 | 11 px amarelo |
| H1 | 16 | 118 | 350 | 174–220 | 48 px / 0.96, máximo 4–5 linhas |
| Parágrafo | 16 | 323 | 340 | 72 | 15–16 px |
| CTA primário | 16 | 417 | 358 | 50 | largura total, amarelo |
| CTA secundário | 16 | 477 | 358 | 48 | largura total, contorno |
| Foto de apoio | 0 | 535 | 390 | 219 | imagem ocupa a parte inferior, `object-position:center top` |

- **O texto nunca pode ficar por cima do rosto nem da área de maior detalhe.** Usar foto abaixo do conteúdo + degradê, ou foto como segundo bloco.
- O elemento H1 NÃO pode tocar nas bordas; `padding-inline:16px`.
- Não aplicar hero `height: 100vh` em mobile: o conteúdo cresce conforme teclado, fonte e aparelho.
- Em 320 px: H1 40 px; CTAs empilhados; prioridade para legibilidade e toque.
- Indicadores de confiança podem mover-se para faixa compacta após o hero, em duas ou três colunas, com texto pequeno e sem overcrowding.

## 4.6 LP / Especialidades

**Título:** `Nossas Especialidades` / apoio `Soluções completas para sua obra, reforma ou projeto.`  
**Anchor:** `id="produtos"`.  
**Seção:** desktop Y≈680–1300; fundo branco; heading central e grid de **6 cards**, 1 linha em desktop 1440, 3×2 no tablet, 2×3 no mobile.

**Desktop 1440:** contêiner x96–1344; heading `(X=320 Y=763 W=800 H=92)`; cards iniciam `Y≈900`, altura 290–310, gap 16. Largura aproximada `(1248-5×16)/6 = 194.7 px`.

**Mobile 390:** seção começa após a hero real; padding top 56. Cabeçalho x16 w358 e H~85. Cards 2 colunas, gap 10, largura `(358-10)/2 = 174 px`; imagem/card media 160–174px de altura e legenda 56–90px; cards **raio 6px**. A altura da descrição pode variar; alinhar por CSS grid.

**Categorias e ordem:**

| Ordem | Nome exibido | Foto independente (nunca crop) | Texto breve | Link/ação |
|---|---|---|---|---|
| 01 | Poço Artesiano | tubos, bombas e conexões adequadas, foto real de produtos | `Tubos, bombas e acessórios para poço artesiano.` | WhatsApp pré-preenchido da categoria |
| 02 | Materiais de Construção | tijolos/blocos/cimento em ambiente real | `Cimento, blocos, argamassa e materiais para obra.` | WhatsApp |
| 03 | Tintas e Acabamentos | latas reais de tinta autorizadas / tintas genéricas sem marcas fictícias | `Soluções para pintura e acabamento.` | WhatsApp |
| 04 | Hidráulica | conexões de PVC, registros, tubos | `Tubos, conexões, registros e acessórios.` | WhatsApp |
| 05 | Elétrica | fios, tomadas e disjuntores organizados | `Fios, cabos e materiais elétricos.` | WhatsApp |
| 06 | Ferramentas | ferramentas manuais e elétricas | `Equipamentos para todas as etapas da obra.` | WhatsApp |

**Card anatomy:** imagem com `aspect-ratio:4/3` (`object-fit: cover`, foco no produto); título sólido abaixo, 1–2 linhas; texto pequeno opcional no desktop, ocultar quando comprometer legibilidade no mobile; CTA pequeno com ícone `ArrowUpRight`/`ArrowRight` importado de Lucide. Não fazer textos queimados na fotografia.

**Hover:** translateY(-3px) somente desktop, sombra suave, foto scale(1.02), 200ms; `prefers-reduced-motion: reduce` desliga. **Sem bordas grandes.**

## 4.7 LP / Diferenciais

**Seção:** desktop Y≈1300, H≈390; fundo `#F5F5F2`; heading central `Por que escolher a Sabá?`.

**Desktop:** heading `(X=330, Y≈1360, W=780)`; grid x96–1344, y≈1470, 4 colunas, gap 16, card h~170;  
**Mobile:** cards em grid 2×2 se títulos couberem; em 320px usar 1 coluna se necessário. Raio 6. Ícones circulares amarelos de 44px (círculo é exceção à regra de bordas).

Quatro cards:

1. `Atendimento especializado` — ícone `UsersRound`.
2. `Marcas reconhecidas` — ícone `BadgeCheck`.
3. `Variedade para sua obra` — ícone `PackageCheck`.
4. `Desde 2010` — ícone `CalendarDays` (confirmar ano antes da publicação).

**Não afirmar** “entrega rápida”, “menor preço”, “estoque imediato” ou outros atributos que não foram validados.

## 4.8 LP / Sobre a Sabá

**Seção:** desktop Y≈1690–2190. Layout imagem real à esquerda e texto à direita, alinhamento central.

| Elemento | Desktop X | Desktop Y | W | H |
|---|---:|---:|---:|---:|
| Foto da equipe/loja REAL | 0 ou 96 | 1690 | 620 | 500 |
| Coluna de texto | 760 | 1770 | 565 | ~330 |
| Eyebrow `SOBRE NÓS` | 760 | 1780 | 320 | 16 |
| H2 `Sabá Material de Construção` | 760 | 1815 | 565 | 105 |
| Destaque `Desde 2010 em Manaus` | 760 | 1930 | 565 | 45 |
| Texto institucional | 760 | 1980 | 565 | 120 |

**Mobile:** primeiro foto verdadeira (`X=16, W=358, aspect-ratio:4/3, radius 6`), abaixo eyebrow + H2 + texto em fluxo normal. Não sobrepor caracteres de equipe com ícones. Texto sugerido:

> Desde 2010, a Sabá Material de Construção atende clientes em Manaus, com opções para poço artesiano, obra e acabamento. Nossa proposta é oferecer atendimento próximo e orientar você na escolha dos materiais para cada etapa do projeto.

Usar somente fatos confirmados. **A foto real da equipe da captura NÃO pode ser obtida recortando aquela captura.** Solicitar original no drive/cliente; enquanto não existir, foto neutra de loja licenciada e sem identificar pessoas como funcionários.

## 4.9 LP / Marcas

**Seção:** desktop Y≈2190, H≈250; título `Marcas que você conhece, encontra na Sabá` ou texto aprovado pelo cliente. Fundo cinza-neutro.

Logotipos citados nas referências, **sujeitos à validação de revenda/uso:** Suvinil, Tigre, Lorenzetti, Docol, Bosch, Fortlev, Ilumi, Emar, Ebara, Tramontina, Leão e outros confirmados.

**Desktop:** logo grid ou faixa com wrap, x96–1344, marcas de ~130×64 px com `object-fit:contain` e espaçamento constante. **Mobile:** grade 3 colunas (2 em 320), logos com altura máx 38–44px e sem ultrapassar limites. Não colocar marcas inventadas ou nomes feitos com uma fonte parecida. Não utilizar print da faixa de marcas.

Se faltarem logos oficiais autorizados, exibir somente marcas validadas com seus arquivos originais. Não renderizar logotipos incorretos por IA.

## 4.10 LP / Contato e localização

**Desktop:** bloco 3 colunas em Y≈2440–2980: (1) CTA preto à esquerda, (2) fotografia real da fachada ao centro, (3) mapa/localização/horário à direita.

| Bloco | X | Y | W | H | Conteúdo |
|---|---:|---:|---:|---:|---|
| Contato | 0 | 2440 | 505 | 540 | título, texto, CTA verde ou amarelo |
| Fachada REAL | 505 | 2440 | 470 | 540 | foto individual autorizada |
| Endereço, mapa, horário | 975 | 2440 | 465 | 540 | informações validadas e link mapa |

**Mobile:** empilhar: (1) CTA e texto, (2) foto da fachada, (3) endereço/mapa, (4) horários. Todos com largura 100%, bordas pequenas, padding 20. Não inserir mapa fictício nem imagem da tela do Google Maps recortada de mockup; preferir mapa embutido oficial do Maps (se autorizado) ou bloco de endereço com botão para Maps.

**Dados recolhidos das referências, PENDENTES DE CONFIRMAÇÃO:**

```yaml
empresa: "Sabá Material de Construção"
telefone_exibicao: "(92) 99103-9337" # CONFIRMAR
telefone_whatsapp_e164: "5592991039337" # CONFIRMAR
endereco_linha_1: "Av. Praia da Ponta Negra, nº 15" # CONFIRMAR
bairro_referencia: "Parque Solimões / Tarumã, Manaus - AM" # CONFIRMAR A GRAFIA
cep: "69041-410" # CONFIRMAR
ano_inicio: 2010 # CONFIRMAR
horarios: null # NÃO PUBLICAR HORÁRIO NÃO CONFIRMADO
instagram: "https://www.instagram.com/sabamaterialdeconstrucao/" # VERIFICAR
```

**Não assumir horário da imagem conceitual:** mockup não é fonte confiável para horário comercial. O link de mapa deve ser construído após conferência do endereço; não inventar pino ou coordenadas.

## 4.11 LP / Footer e botão flutuante

**Desktop footer:** 150px altura aproximada, x96–1344 com logo, links âncora, Instagram, telefone validado e privacidade.  
**Mobile footer:** layout empilhado, padding 32; CTA sticky ou flutuante WhatsApp no lado direito com margem 16 e respeito a `env(safe-area-inset-bottom)`.

**Somente um elemento de contato flutuante visível por vez.** No mobile, se existir **barra sticky inferior** com CTA de 48–56px, ocultar o FAB circular para não duplicar controles. Reservar espaço ao final da página para que a barra fixa não tampe conteúdo.

---

# 5. BIOSITE `/bio` — ARQUITETURA MOBILE-FIRST

## 5.1 Conceito

Microsite de conversão para acesso vindo do Instagram. O visitante precisa descobrir em poucos segundos **o que a Sabá vende, como pedir orçamento e onde fica a loja**. Reaproveitar identidade, não replicar o site institucional inteiro.

**Crítico:** a imagem conceitual com dois smartphones **é um mockup de apresentação**. A página `/bio` é **um único fluxo de rolagem vertical**. Sem frame de celular, sem dividir tela em dois mockups, sem usar o screenshot como conteúdo.

## 5.2 Fluxo completo, uma única página

1. Header com logo original e menu discreto.
2. Hero amarelo/preto com frase curta e CTA para orçamento.
3. Grid de 6 categorias com imagens independentes.
4. Faixa curta de confiança/experiência.
5. Mini-seção “Por que escolher a Sabá?”.
6. “Nossa história” com fotografia REAL da equipe, caso disponível.
7. Marcas representadas.
8. Localização com foto REAL da fachada e botão Maps.
9. Horários de atendimento confirmados.
10. CTA grande “Precisa de orçamento?”.
11. Atalhos Instagram / Ligar / Compartilhar.
12. Footer simples.

**A CTA primária aparece no hero, no conteúdo final e opcionalmente em um rodapé sticky discreto.** Não encher todo card com botão verde.

## 5.3 Coordenadas mobile de referência — viewport 390 px

São guias de **ordem e proporção**, não alturas travadas; cada seção empurra a próxima conforme seu conteúdo.

| Região | X | Y aproximado | W | H estimado | Notas |
|---|---:|---:|---:|---:|---|
| Header | 0 | 0 | 390 | 72 | amarelo, logo centro/esquerda e menu |
| Hero | 0 | 72 | 390 | 550 | headline à esquerda, imagem separada à direita/baixo |
| Categorias | 16 | 622 | 358 | 740 | 2×3 cards, gap 10 |
| Prova de confiança | 16 | 1374 | 358 | 116 | 4 destaques compactos |
| Por que escolher | 16 | 1502 | 358 | 280 | bloco texto + foto fachada verdadeira |
| Nossa história | 16 | 1794 | 358 | 290 | fundo preto, foto real com legibilidade |
| Marcas | 16 | 2096 | 358 | 230 | logos oficiais em grid |
| Localização | 16 | 2338 | 358 | 380 | foto fachada + dados |
| Horário | 16 | 2730 | 358 | 170 | mostrar somente após confirmação |
| Grande CTA | 16 | 2912 | 358 | 285 | bloco escuro, WhatsApp |
| Links sociais | 16 | 3209 | 358 | 116 | 3 atalhos |
| Footer | 0 | 3337 | 390 | 160 | amarelo, logo, dados legais |

Se horários ainda não confirmados: seção omitida e o fluxo encurta. O X de conteúdos segue sempre margem lateral mínima de 16px.

## 5.4 Header Bio

- `X=0, Y=0, W=390, H=72` mobile; `background:#FFE600`.
- Logo oficial: `X=16, Y=15, W≈176, H≈40`. Não tentar extrair logo da referência.
- Botão menu: `X=330, Y=15, W=44, H=44` com `Menu` da Lucide; contraste preto e raio 6 no invólucro.
- Em desktop: biosite continua centralizado com largura máxima 560px; header pode alinhar logo e menu dentro desse container, sem expandir todo conteúdo para 1440.

## 5.5 Hero Bio

**Mobile 390:** seção `(X=0, Y=72, W=390, H≈550)`; usar amarelo como predominante com bloco escuro complementar. O personagem comercial deve ser **foto isolada independente** de um profissional genérico com EPI; não imitar funcionário real ou copiar o homem da arte anterior.

| Elemento | X | Y | W | H | Estilo |
|---|---:|---:|---:|---:|---|
| Headline | 16 | 125 | 215–230 | 175 | Barlow Condensed 800, 46 px; preto |
| Apoio | 16 | 315 | 216 | 75 | Inter 15px, preto |
| Foto profissional | 204 | 133 | 186 | 305 | foto individual, sem texto embutido |
| CTA WhatsApp | 16 | 453 | 358 | 64 | preto, ícone WA do pacote aprovado, raio 6 |
| Subchamada opcional | 16 | 534 | 358 | 48 | detalhe de confiança sem obstruir CTA |

Copy:

**H1:** `Tudo para sua obra, do início ao acabamento.`  
**Descrição:** `Materiais para construção e poço artesiano, com atendimento especializado em Manaus.`  
**CTA:** `Fazer orçamento pelo WhatsApp`.

**Colisão de conteúdo:** o texto e a foto jamais podem se sobrepor a ponto de prejudicar a leitura em 320/360 px. Em 320, posicionar foto após o texto ou reduzir a imagem; headline usa 40px. Nenhum `position:absolute` fora da caixa hero.

## 5.6 Grade de categorias Bio

**Mobile 390:** X16 W358; 2 colunas com gap 10, cada card W174; cartão completo h≈230, foto h≈155, título/bloco escuro h≈75. `radius:6px` (sem arredondamento exagerado). Cada card é link acessível com nome da categoria e CTA WhatsApp pré-preenchido.

**Ordem:** Poço Artesiano; Materiais de Construção; Tintas e Acabamentos; Hidráulica e Elétrica; Ferramentas e Equipamentos; Telhas e Estruturas.

A LP usa seis categorias parcialmente distintas; o biosite agrupa Hidráulica/Elétrica e adiciona Telhas/Estruturas conforme conceito. **Confirmar que a empresa atende essa sexta categoria antes de publicar**; caso contrário, substituir por categoria efetiva.

**Fotografia:** um arquivo exclusivo para cada card, aspecto 4:3, `object-fit:cover`, sem texto. Não reutilizar recorte do card visual do mockup.

**Desktop Bio ≥768:** largura máxima 560, 2 colunas. Não fazer cards enormes; ao atingir 560, cada card ≈272px e imagens proporcionais. Em desktop 1440, biosite centralizado, com superfícies laterais neutras e sem parecer um app dentro de um smartphone desenhado.

## 5.7 Faixa de confiança

**Mobile:** grid 4 colunas compactas, X16 W358; cada item com ícone Lucide 20px em fundo amarelo circular de 36px, texto 11–12 px. Itens: `Desde 2010` (validar), `Atendimento especializado`, `Marcas reconhecidas`, `Variedade de produtos`.

Em 320px, usar 2×2 se houver sobreposição. Sem promessas comerciais não confirmadas.

## 5.8 “Por que escolher a Sabá?” / Bio

- Painel editorial com fundo amarelo e foto independente da fachada/livre de texto.
- Mobile X16 W358; altura determinada pelo conteúdo, ~280–340px.
- Título em Barlow Condensed 32 px; 4 pontos com `CheckCircle2` da Lucide.
- Em desktop Bio, pode usar 2 colunas 52/48 dentro da largura 560.
- Foto real da fachada somente se enviada pelo cliente; caso indisponível, foto de loja neutra sem marca da Sabá + `PENDENTE_FOTO_FACHADA` no config.
- Cantos de painel 6 px mobile; não 24 px.

## 5.9 Nossa história / Bio

- Bloco preto `#111214`, texto branco, título amarelo `NOSSA HISTÓRIA`.
- Copy resumida de 2–4 linhas e link `Conheça nossa história` que leva a `/#sobre`.
- **Foto real de equipe** opcional e só com arquivo independente. Não gerar rostos supostamente reais. Não usar screenshot da página atual.
- Layout mobile em coluna, imagem abaixo ou à direita com gradiente; boa legibilidade e padding 20.

## 5.10 Marcas / Bio

- Título `Trabalhamos com marcas reconhecidas` (validar lista).
- Grid 3×N em mobile 390; cada célula fundo branco, altura 58–72, padding 8, logo oficial com `contain`.
- Sem “desenhar” logotipos com texto, sem gerar marcas por IA e sem capturar logos de uma montagem existente.
- Se a marca não disponibilizou arquivo, omitir temporariamente.

## 5.11 Localização e horário / Bio

**Card localização:** fotografia verdadeira da fachada à esquerda/acima; do outro lado endereço textual conferido; `MapPin` Lucide; botão `Ver no Google Maps` com link correto (abrir nova aba/Google Maps). Não usar print de mapa.

**Card horário:** `Clock3` Lucide. **Exibir somente horários confirmados**. Em vez de inserir os horários imaginados no mockup, usar dados de configuração.

Desktop centralizado: cada cartão pode ter layout foto/texto horizontal dentro dos 560px. Mobile 390: foto e texto empilhados se faltar espaço.

## 5.12 CTA final / Bio

**Bloco:** preto, detalhes amarelos, `X=16, W=358`, `padding 20`, raio 6; copy `Precisa de orçamento?` + `Fale com nossa equipe pelo WhatsApp e conte o que você precisa para sua obra.`; botão WhatsApp verde-escuro acessível, largura 100%, mínimo 52px.

Não utilizar ilustração de uma mão segurando celular copiada do material de referência; caso uma ilustração original seja desejada, gerar nova imagem independente, opcional. Preferência: CTA com tipografia forte e fundo limpo (melhor performance e leitura).

## 5.13 Atalhos e rodapé / Bio

Atalhos interativos: `Instagram` (`Instagram` Lucide), `Ligar agora` (`Phone` Lucide), `Compartilhar` (`Share2` Lucide).  
**Share:** usar `navigator.share` quando disponível e fallback para `navigator.clipboard.writeText(location.href)` com feedback; cuidado com disponibilidade e contexto seguro.  
**Ligar:** `tel:+5592991039337` apenas após validação.  
**Instagram:** URL oficial conferida.

Footer amarelo com logo oficial, copyright dinâmico, links essenciais e crédito opcional aprovado. Sem screenshot e sem contorno de iPhone.

---

# 6. RESPONSIVIDADE: REGRAS ESPECÍFICAS POR BREAKPOINT

| Intervalo | Container LP | Grid categorias LP | Grid bio | Hero | Radius cards |
|---|---|---|---|---|---|
| 320–359 | `100%-32px` | 2 colunas se legível, caso contrário 1 | 2 ou 1 conforme largura | texto antes da imagem | 6 px |
| 360–479 | `100%-32px` | 2 colunas | 2 colunas | texto e imagem separados | 6 px |
| 480–767 | `100%-40px` | 2 ou 3 colunas | 2 colunas | pilha equilibrada | 6 px |
| 768–1023 | `100%-64px` | 3 colunas | 2 colunas (até 560px) | layout adaptado 2 colunas ou pilha | 8 px |
| 1024–1199 | `100%-64px` | 3 colunas | 2 colunas | 2 colunas LP | 10 px |
| ≥1200 | máximo 1248px | 6 colunas | 2 colunas (até 560px) | 2 colunas LP | 10 px |

## 6.1 Comportamentos obrigatórios

- **Zero overflow horizontal** em todas as larguras listadas.
- Em 320 px, o texto principal e CTAs não podem colidir com foto, menu ou bordas.
- Imagens sempre com `object-fit` correto e `aspect-ratio` definido.
- Fontes não devem depender de `vw` sem mínimo/máximo: usar `clamp()`.
- Texto ampliado a 200% deve continuar utilizável; nunca cortar com `overflow:hidden` onde há conteúdo textual.
- Mostrar botão fixo sem cobrir footer/último CTA: `padding-bottom:calc(84px + env(safe-area-inset-bottom))` enquanto sticky estiver ativo.
- Breakpoints não devem apenas reduzir `font-size`; também reorganizam grid, ordem, gap, comprimento do texto e posição da foto.
- Não copiar `border-radius` desktop em mobile por esquecimento. Testar computed style em `.card`, `.panel`, `.button`.
- Acessos por teclado funcionam inclusive no menu mobile e todos os cards.

## 6.2 CSS de grids e CTA — implementação esperada

```css
.lp-category-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}
.bio-category-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.category-card {
  min-width: 0;
  overflow: hidden;
  border-radius: var(--radius-card);
  border: 1px solid var(--border);
  background: var(--paper);
}
.category-card img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
@media (min-width: 768px) and (max-width: 1199px) {
  .lp-category-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 767px) {
  .lp-category-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .category-card { border-radius: 6px !important; }
  .panel { border-radius: 6px !important; }
  .button, .cta { border-radius: 6px !important; }
}
@media (max-width: 335px) {
  .lp-category-grid .category-card__description { display: none; }
}
```

**Observação:** `!important` acima é uma trava protetiva para o gerador, mas o código final pode usar tokens e cascade corretamente; a condição de aceitação é o raio computado `≤6px` no mobile.

---

# 7. COMPONENTES E ANATOMIA EXATA

## 7.1 Componentes compartilhados

| Componente | Conteúdo | Estados | A11y |
|---|---|---|---|
| `BrandLogo` | Logo SVG/PNG original, alt curto | dark/light conforme fundo | link para `/` |
| `SiteHeader` | Logo, navegação, CTA ou menu | normal, scrolled, mobile-open | `nav`, `aria-expanded`, escape menu |
| `PrimaryButton` | ícone biblioteca + rótulo + arrow | default/hover/focus/pressed | tamanho 44+, foco visível |
| `WhatsappButton` | rótulo específico e link | hover/focus | acessível por nome claro |
| `CategoryCard` | foto própria, title, summary, arrow | hover/focus | card inteiro `a`, alt complementar |
| `FeatureCard` | ícone lucide em círculo + título + texto | default/hover | não depender apenas do ícone |
| `BrandGrid` | logos oficiais e opcionais | carregamento/placeholder | alt com nome da marca |
| `MediaBlock` | foto isolada com proporção | loading/loaded | width/height especificados |
| `SectionHeading` | eyebrow + H2 + subheading | — | um H2 por seção |
| `LocationCard` | fachada / dados / Maps | sem foto / com foto | endereço em texto real |
| `HoursCard` | horários confirmados | oculto se pendente | label da informação |
| `StickyWhatsapp` | CTA mobile fixo opcional | visível/oculto próximo footer | não cobrir o conteúdo |
| `SiteFooter` | marca, links, legal | normal | links descritivos |

## 7.2 Hero — texto vs imagem

- Foto e texto são camadas/componentes independentes.
- O texto H1 **não** faz parte do arquivo WebP/JPEG.
- A foto não contém marcas/textos inventados. Se imagem de profissional for gerada por IA, não ostentar logo da Sabá fabricado no uniforme. Usar uniforme genérico e branding em HTML ao redor.
- Não reproduzir exatamente o rosto dos personagens presentes nas referências; a pessoa é apenas direção de pose e estilo.
- Se faltar imagem ideal, trabalhar com fundo preto + foto de estoque de construção de acervo: **nunca substituí-la por print do protótipo**.

## 7.3 Escala de ícones Lucide sugeridos

```ts
import {
  Menu, X, ArrowRight, ArrowUpRight, MessageCircle,
  MapPin, Clock3, Phone, Instagram, Share2,
  BadgeCheck, ShieldCheck, UsersRound, PackageCheck,
  CalendarDays, CheckCircle2, ExternalLink, Truck,
} from "lucide-react";
```

**WhatsApp:** para marca oficial pode usar `react-icons/si` (`SiWhatsapp`) ou arquivo SVG oficial autorizado, **não desenhar ícone próprio**. Para marcas sociais como Instagram, optar por biblioteca com ícone reconhecível (`lucide-react` ou `react-icons`), nunca geração IA.

---

# 8. MICROINTERAÇÕES E ANIMAÇÃO

**Intenção:** deixar moderno sem sacrificar desempenho e usabilidade. Não fazer site de animações extravagantes.

| Interação | Duração | Curva | Intensidade |
|---|---:|---|---|
| Link nav hover | 150ms | ease-out | underline ou alteração de opacidade |
| Botão hover | 180ms | ease-out | mudança de cor, y=-1 px |
| Card hover desktop | 200ms | ease-out | y=-3px, imagem 1.02 |
| Seção entrando | 450ms | ease-out | opacity 0→1 + translateY 12px |
| Menu mobile | 200ms | ease-out | slide/fade sem travamento |
| CTA fixo | 200ms | ease-out | mostrar/ocultar sem pular layout |

- Desligar animações com `prefers-reduced-motion`.
- Usar IntersectionObserver apenas se necessário; renderizar conteúdo mesmo sem JS.
- Não animar todo o texto letra por letra.
- Proibido parallax pesado em mobile e rolagem que prende a página.

---

# 9. MANIFESTO DE ASSETS — IMAGENS REAIS, GERADAS OU DE BANCO

## 9.1 Política obrigatória de origem

**Permitidas:**

1. **Originais da própria Sabá**: logo, fachadas, equipe, produtos, postagens em alta qualidade fornecidas pela empresa.
2. **Fotografia licenciada**: Unsplash, Pexels, Adobe Stock, Shutterstock etc., guardando URL/origem/licença no manifesto.
3. **Geração de nova imagem por IA**: apenas cenas genéricas, personagens fictícios e composições de produtos genéricos; sem afirmar que retratam colaboradores/loja real.
4. **Logotipos oficiais**: arquivos disponibilizados pelo fabricante/cliente com direitos adequados.

**Proibidas:** print do Canva, screenshot do Instagram, frame de mockup, imagem com card/botão/texto já embutido, recorte da hero da imagem conceitual, crop de captura de referência e logo inventado.

**Cada arquivo** deve existir de forma independente em `/public/images/...` e ser referenciado pelo seu caminho local individual. Em caso de ausência, registrar no manifesto `status: pendente` e renderizar placeholder neutro com aspect-ratio estável.

## 9.2 Assets esperados (inventário mínimo)

| ID / filename sugerido | Aplicação | Proporção / export | Origem preferida | Regra |
|---|---|---|---|---|
| `brand/saba-logo.svg` | LP + Bio | vetorial transparente | cliente | logo original, sem reconstruir |
| `hero/loja-construcao.webp` | LP hero BG | 16:9, 1920×1080 | foto real/stock | imagem sem textos |
| `hero/profissional-epi.webp` | LP e/ou Bio hero | 4:5, 1200×1500 | stock/IA novo | pessoa fictícia, uniforme neutro |
| `categorias/poco-artesiano.webp` | categoria | 4:3, ≥1000×750 | stock/foto | bombas, tubos, conexões |
| `categorias/materiais.webp` | categoria | 4:3, ≥1000×750 | stock/foto | tijolos/cimento/blocos |
| `categorias/tintas.webp` | categoria | 4:3, ≥1000×750 | foto real/oficial | sem marca falsa |
| `categorias/hidraulica.webp` | categoria | 4:3, ≥1000×750 | stock/foto | tubos/conexões |
| `categorias/eletrica.webp` | categoria | 4:3, ≥1000×750 | stock/foto | cabos/disjuntores |
| `categorias/ferramentas.webp` | categoria | 4:3, ≥1000×750 | stock/foto | furadeira/chaves etc. |
| `categorias/telhas-estruturas.webp` | Bio | 4:3, ≥1000×750 | stock/foto | validar disponibilidade comercial |
| `institucional/equipe-real.webp` | LP + Bio sobre | 4:3, ≥1400×1050 | **somente cliente** | não gerar pessoas como equipe |
| `institucional/fachada-real.webp` | LP + Bio location | 4:3, ≥1400×1050 | **somente cliente** | não gerar como se fosse a loja |
| `institucional/loja-interior.webp` | apoio institucional | 16:9 | cliente/stock | se stock, não afirmar que é a Sabá |
| `marcas/*.svg` | faixas das marcas | vetorial | logos oficiais | não desenhar ou gerar |

**Entrega de cada asset:** path, dimensão real, origem, licença/status, alt e onde será usado. Remover metadados sensíveis não necessários.

## 9.3 Prompts para geração de IMAGENS NOVAS (somente cenas genéricas)

**Prompt A — foto profissional hero (sem logo):**

> Fotografia publicitária hiper-realista para loja de materiais de construção no Brasil, profissional adulto fictício em uniforme neutro preto e amarelo ou camiseta branca com equipamentos de proteção, capacete e óculos de segurança adequados, expressão acessível e confiante, composição de meio corpo, iluminação natural cinematográfica, lente 50mm, proporções anatômicas realistas, mãos corretas, pele natural, fundo de loja de materiais desfocado, cores amarelo e preto pontuais, espaço negativo para texto inserido depois por HTML, alta nitidez. **Sem textos, sem logotipos, sem marca d'água, sem recorte de site ou UI, sem reproduzir pessoa real.**

**Prompt B — categoria poço artesiano:**

> Fotografia comercial de equipamentos para poço artesiano: tubos metálicos, bombas submersas, conexões e acessórios organizados em ambiente de distribuidora, fotografia de produto de alta qualidade, foco nítido, iluminação industrial natural, cores autênticas, enquadramento 4:3, sem pessoas, sem textos, sem marcas fictícias, sem interface gráfica.

**Prompt C — materiais de construção:**

> Fotografia comercial de pilhas organizadas de tijolos cerâmicos, blocos de concreto, sacos de cimento genéricos e materiais de obra em depósito limpo, luz de manhã, detalhes realistas, imagem horizontal 4:3, sem palavras legíveis, sem marca d'água, sem colagens, sem layout de site.

**Prompt D — tintas:**

> Fotografia editorial realista de latas genéricas de tintas para parede e acessórios de pintura organizados em loja de construção brasileira, paleta predominantemente neutra com amarelo como detalhe, 4:3, iluminação fotográfica de estúdio misturada com ambiente de loja, sem logos inventados, sem textos e sem interface.

**Prompt E — hidráulica:**

> Close-up fotográfico de tubos e conexões de PVC, registros e joelhos hidráulicos em expositor de material de construção, composição limpa, nitidez premium, fundo sutilmente desfocado, 4:3, sem marcas d'água, sem textos.

**Prompt F — elétrica:**

> Fotografia comercial de cabos elétricos enrolados, tomadas, interruptores e disjuntores em bancada técnica limpa, qualidade publicitária, produto realista, 4:3, sem palavras legíveis, sem logotipos falsos, sem UI.

**Prompt G — ferramentas:**

> Fotografia de ferramentas manuais e elétricas sobre bancada industrial: furadeira sem marca, trena, alicates e chaves, luz comercial contrastada, textura realista, enquadramento 4:3, alta definição, sem texto e sem marcas fictícias.

**Prompt H — telhas/estruturas:**

> Fotografia realista de perfis metálicos galvanizados, telhas de cobertura e materiais estruturais organizados em armazém de construção, perspectiva limpa, alta nitidez, 4:3, sem marca d'água, sem textos, sem layouts.

**Proibido pedir para IA gerar a fachada real, equipe real ou logo da Sabá.** Para esses itens, solicitar arquivos ao cliente.

## 9.4 Manifesto de assets (schema recomendado)

```ts
export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  sourceType: "client" | "licensed-stock" | "ai-generated" | "official-logo" | "placeholder";
  sourceUrl?: string;
  licenseNote?: string;
  width: number;
  height: number;
  status: "ready" | "pending-approval" | "missing";
};
```

**Não criar arquivo com nome `screenshot-reference-crop.webp`, `print-hero.png`, `canvas-banner.png`, `mockup-card-crop.png` nem equivalentes.** Auditar assets antes de deploy.

---

# 10. CONTEÚDO DE INTERFACE (MICROCOPY APROVÁVEL)

## 10.1 LP

| Onde | Texto principal | Texto apoio/CTA |
|---|---|---|
| Hero | `Tudo para sua obra, do poço artesiano ao acabamento.` | `Materiais e atendimento especializado em Manaus.` / `Solicitar orçamento` |
| Categorias | `Nossas Especialidades` | `Soluções para cada etapa da sua obra.` |
| Benefícios | `Por que escolher a Sabá?` | `Experiência, variedade e atenção em cada atendimento.` |
| Sobre | `Sabá Material de Construção` | `Desde 2010, ajudando Manaus a construir.` (validar) |
| Marcas | `Trabalhamos com marcas reconhecidas` | exibir somente logos aprovados |
| Contato | `Faça seu pedido pelo WhatsApp` | `Converse com nossa equipe e solicite seu orçamento.` |
| Mapa | `Venha nos visitar` | Endereço aprovado + `Ver no Google Maps` |

## 10.2 Bio

| Onde | Texto principal | CTA |
|---|---|---|
| Hero | `Tudo para sua obra, do início ao acabamento.` | `Fazer orçamento pelo WhatsApp` |
| Categorias | `Encontre o que você precisa` | `Consultar esta categoria` |
| História | `Nossa história` | `Saiba mais sobre a Sabá` |
| Marcas | `Trabalhamos com marcas reconhecidas` | sem CTA |
| Localização | `Nossa localização` | `Ver no Google Maps` |
| Horário | `Horário de atendimento` | conforme dados validados |
| Final | `Precisa de orçamento?` | `Falar com a equipe` |
| Sociais | `Acompanhe a Sabá` | Instagram / Ligar / Compartilhar |

---

# 11. COMPORTAMENTO DOS LINKS E WHATSAPP

## 11.1 Telefone como fonte única

```ts
export const siteConfig = {
  companyName: "Sabá Material de Construção",
  whatsappE164: "5592991039337", // PENDENTE_VALIDACAO
  displayPhone: "(92) 99103-9337", // PENDENTE_VALIDACAO
  instagramUrl: "https://www.instagram.com/sabamaterialdeconstrucao/", // VALIDAR
  addressDisplay: "Av. Praia da Ponta Negra, nº 15, Parque Solimões, Tarumã, Manaus - AM", // VALIDAR
  mapsUrl: "", // PREENCHER APÓS VALIDAR ENDEREÇO
  openingHours: null as null | Array<{ day: string; hours: string }>,
  sinceYear: 2010, // VALIDAR
  assets: { logo: "/images/brand/saba-logo.svg" },
};

export function waLink(message: string): string {
  const phone = siteConfig.whatsappE164.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

**Mensagens contextuais sugeridas:**

- Geral: `Olá! Vim pelo site da Sabá e gostaria de solicitar um orçamento.`
- Bio: `Olá! Vim pelo Instagram da Sabá e gostaria de atendimento.`
- Card Poço Artesiano: `Olá! Gostaria de saber mais sobre materiais para poço artesiano.`
- Card Materiais: `Olá! Gostaria de orçamento de materiais de construção.`
- Card Tintas: `Olá! Gostaria de orçamento de tintas e acabamentos.`
- Card Hidráulica: `Olá! Preciso de materiais hidráulicos. Podem me ajudar?`
- Card Elétrica: `Olá! Gostaria de consultar materiais elétricos.`
- Card Ferramentas: `Olá! Gostaria de consultar ferramentas e equipamentos.`

**Jamais usar números inventados em múltiplos componentes.** Centralizar em configuração e validar antes de publicar. `target="_blank" rel="noopener noreferrer"` para links externos. Não disparar WhatsApp automaticamente sem clique do usuário.

---

# 12. STACK, ARQUITETURA DE PROJETO E ORGANIZAÇÃO

## 12.1 Stack recomendada

- **Next.js (App Router) + TypeScript** ou framework equivalente já existente no projeto.
- **CSS Modules/Tailwind/CSS variables** com tokens declarados em um só lugar. Se Tailwind: criar utilitários `rounded-card` que respeitem breakpoint; não usar `rounded-3xl` ou `rounded-full` por hábito.
- **Lucide React** para ícones de interface; `react-icons/si` apenas quando exigir ícone social oficial.
- **next/image** ou `<picture>` nativo otimizado para carregar fotos separadas com responsive sizes.
- Animações CSS simples; Framer Motion só se já fizer parte do projeto e sem dependência excessiva.
- Estrutura sem backend obrigatório, pois o objetivo é orçamento via WhatsApp.

## 12.2 Estrutura de pastas sugerida

```text
src/
  app/
    layout.tsx
    page.tsx                       # LP /
    bio/page.tsx                   # Biosite /bio
    politica-de-privacidade/page.tsx
    globals.css
  components/
    layout/SiteHeader.tsx
    layout/SiteFooter.tsx
    shared/BrandLogo.tsx
    shared/WhatsappButton.tsx
    shared/CategoryCard.tsx
    shared/SectionHeading.tsx
    shared/FeatureCard.tsx
    shared/BrandGrid.tsx
    shared/LocationCard.tsx
    shared/HoursCard.tsx
    lp/LpHero.tsx
    lp/LpCategories.tsx
    lp/LpFeatures.tsx
    lp/LpAbout.tsx
    lp/LpContact.tsx
    bio/BioHeader.tsx
    bio/BioHero.tsx
    bio/BioCategories.tsx
    bio/BioTrust.tsx
    bio/BioAbout.tsx
    bio/BioBrands.tsx
    bio/BioLocation.tsx
    bio/BioFinalCta.tsx
    bio/BioSocialLinks.tsx
  data/
    site.config.ts
    categories.ts
    assets.ts
  styles/
    tokens.css
    utilities.css
public/
  images/
    brand/
    hero/
    categorias/
    institucional/
    marcas/
README.md
ASSET_MANIFEST.md
```

## 12.3 Regras de implementação contra o erro de recortar prints

**Antes de criar qualquer elemento visual:**

1. Identifique se é **conteúdo HTML**, **ícone de biblioteca**, **logo original** ou **fotografia independente**.
2. Para textos, cards, botões e layout: **HTML/CSS real**. Nunca usar imagens desses elementos.
3. Para ícones: **importar pacote**. Nunca recriar do print.
4. Para fotos: buscar asset de acervo/licenciado ou gerar **nova foto** conforme briefing da seção; salvar individualmente.
5. Se o asset não estiver disponível, usar **placeholder temporário real**, documentando o que falta.
6. A referência visual é apenas para aferição de proporções, cores, ritmo, direção criativa. **NUNCA é fonte de pixels**.
7. Fazer auditoria de `/public/images`: cada item precisa de nome, origem, uso; qualquer screenshot precisa ser excluído da build.
8. Não usar CSS `background-image` apontando para a imagem inteira da LP/Bio aprovada, mesmo que fique visualmente idêntico.

## 12.4 Acessibilidade/SEO

- Um único H1 por página. H2 nos blocos principais; headings hierárquicos.
- Descrever imagens informativas em `alt`; decorativas recebem `alt=""`.
- Contraste AA alvo para textos e CTAs; não usar texto amarelo pequeno sobre branco.
- `lang="pt-BR"`; metas title/description específicos para `/` e `/bio`.
- Metadados Open Graph com imagem OG nova e independente, não screenshot da interface.
- Links externos sinalizados sem obrigar modal. Ícones de social com `aria-label`.
- `aria-expanded`, `aria-controls`, `Escape` e foco no menu mobile.
- JSON-LD `LocalBusiness` somente com dados verificados (endereço, horário, telefone).
- Canonical da LP e do Bio individual; não duplicar todo o SEO entre ambos.
- Se usar analytics/pixels, adequar política de privacidade, consentimento aplicável e LGPD.

## 12.5 Performance

- WebP/AVIF responsive (`srcset`) e dimensões explícitas; preferir arquivo LP hero otimizado < 400–600 KB quando possível sem perda visível; cards 60–160 KB quando compatível.
- `priority`/preload só para imagem hero LCP; lazy load imagens abaixo da dobra.
- Evitar fontes demais; fallback de fonte segura.
- Não carregar 14 plugins para uma LP estática.
- Metas orientativas: LCP ≤ 2,5 s, CLS ≤ 0,1 e INP ≤ 200 ms em condições de campo, sem prometer nota 100 automaticamente.

---

# 13. TESTES E CRITÉRIOS DE ACEITE (CHECKLIST EXTENSIVO)

## 13.1 Fidelidade visual

- [ ] Preto/amarelo com bastante respiro, tipografia condensada forte e fotografia comercial realista.
- [ ] Logo não foi redesenhada, esticada, extraída de print ou alterada arbitrariamente.
- [ ] Cards são **quase retos**: `≤10px` desktop, `≤8px` tablet, `≤6px` mobile.
- [ ] Botões são retangulares com cantos suaves: `≤8px` desktop, `≤6px` mobile.
- [ ] Imagens e textos não foram achatados em screenshot.
- [ ] O biosite é uma página rolável, **não dois celulares renderizados**.
- [ ] Nenhuma marca tem logo falso.

## 13.2 Mobile — testar 320/360/375/390/414/430

- [ ] Header cabe sem quebrar; botão menu abre/fecha por toque e teclado.
- [ ] H1 não corta as palavras nem invade a foto.
- [ ] CTA tem largura viável, altura ≥ 44px e fica clicável.
- [ ] Categorias exibem duas colunas sem elementos esmagados; 320 adapta se preciso.
- [ ] Imagens têm proporções corretas e bordas **6 px**.
- [ ] Texto continua legível em zoom 200%.
- [ ] Endereço não sai do card; palavras e links quebram corretamente.
- [ ] Sem scroll horizontal.
- [ ] Barra WhatsApp não cobre último link ou o footer.
- [ ] Espaços verticais não se tornam buracos gigantes.
- [ ] Sem bug de `100vh` no Safari/Chrome mobile.

## 13.3 Tablet 768/1024

- [ ] LP categorias 3 colunas, conteúdo centralizado.
- [ ] Texto e imagem hero se reorganizam sem colisão.
- [ ] Bio mantém coluna confortável e não fica com largura de site desktop gigante.
- [ ] Header funciona com nav/CTA adaptados.
- [ ] Radius conforme tabela, não `24px`.

## 13.4 Desktop 1280/1440/1920

- [ ] Conteúdo LP não cresce além de 1248px; margem automática simétrica.
- [ ] Hero possui hierarquia de texto e foto distinta, botões íntegros.
- [ ] Cards de categorias com mesmo alinhamento e espaços constantes.
- [ ] Faixa de marcas não distorce logos.
- [ ] Bio permanece coluna central até 560px com aparência de microsite web, sem moldura de celular.
- [ ] Margens laterais não provocam composição perdida em 1920px.

## 13.5 QA funcional

- [ ] Todos os CTAs WhatsApp têm telefone correto + mensagem contextual codificada.
- [ ] `tel:` e Maps funcionam com dados comerciais validados.
- [ ] Links de âncora apontam para IDs existentes.
- [ ] Logo leva à home.
- [ ] Instagram aponta para perfil validado.
- [ ] Compartilhar oferece fallback de cópia.
- [ ] Missing asset não produz imagem quebrada nem conteúdo sobreposto.
- [ ] Sem warnings fatais, erros de console, React hydration errors.
- [ ] Verificação de contraste AA, Lighthouse e teste por teclado.

## 13.6 QA proibitivo de screenshot/ícones

- [ ] Não existe `<img src="/screenshot...">`, crops `canva`, capturas das referências ou screenshot no CSS.
- [ ] Todos os assets listados possuem origem e tamanho no manifesto.
- [ ] Cada card de categoria referencia foto própria de produto/categoria.
- [ ] Ícones têm imports de `lucide-react`, `@tabler/icons-react`, `@heroicons/react` ou `react-icons`; sem desenho ad hoc.
- [ ] Ninguém simulou logo de marca em imagem generativa.
- [ ] A screenshot de referência pode estar guardada fora do diretório público, mas **jamais** importada pelos componentes.

## 13.7 Teste visual computado dos raios (opcional, recomendado)

Em Playwright ou DevTools validar `getComputedStyle(element).borderRadius` por tamanho de tela. Exemplo conceitual:

```ts
for (const width of [320, 360, 390, 414, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto("/");
  const horizontalOverflow = await page.evaluate(() =>
    document.documentElement.scrollWidth > window.innerWidth
  );
  expect(horizontalOverflow).toBe(false);
  const radius = await page.locator(".category-card").first().evaluate(
    (el) => parseFloat(getComputedStyle(el).borderTopLeftRadius)
  );
  expect(radius).toBeLessThanOrEqual(width <= 767 ? 6 : width <= 1023 ? 8 : 10);
}
```

**Importante:** usar `data-testid`/seletores reais do projeto. Repetir para `/bio`, `.button` e `.panel`.

---

# 14. SEQUÊNCIA DE EXECUÇÃO OBRIGATÓRIA PARA O ANTIGRAVITY

**Fase 1 — Preparar projeto**

1. Ler integralmente este documento.
2. Verificar stack atual; não recriar projeto existente sem necessidade.
3. Criar tokens CSS, fontes e componentes base.
4. Criar `site.config.ts` com dados pendentes rotulados.
5. Criar `ASSET_MANIFEST.md` com todos os assets e estado de cada um.

**Fase 2 — Garantir assets corretos**

6. Obter/registrar logo oficial em qualidade adequada; caso indisponível, `TODO` editorial sem recorte de print.
7. Obter fotos da empresa e lojas quando autorizadas.
8. Criar/buscar imagens **separadas** para hero e cada categoria; documentar origem. Não fazer screenshot de mockups.
9. Importar ícones de biblioteca e marcas oficiais verificadas.

**Fase 3 — Implementar LP `/`**

10. Header + Hero desktop/mob; conferir leitura e CTA.
11. Categorias reais (6) com cards de pouco raio.
12. Diferenciais, Sobre, Marcas, Contato e Footer.
13. Rodapé ou FAB WhatsApp sem conflito.

**Fase 4 — Implementar Bio `/bio`**

14. Criar fluxo **mobile-first** em uma única página.
15. Hero compacto + 2×3 categorias + confiança.
16. Sobre, marcas, localização, CTA, atalhos e footer.
17. Em desktop, limitar largura a 560px; NÃO adicionar frame de celular.

**Fase 5 — QA visual/funções**

18. Testar todos os breakpoints e `border-radius` calculado.
19. Revisar acessibilidade, overflow, imagens, links e performance.
20. Auditar `/public/`: excluir prints de referência e imagens proibidas.
21. Apresentar capturas do SITE RENDERIZADO **somente para aprovação visual**, não como assets para a versão final.
22. Entregar resumo com arquivos implementados, pendências comerciais e checklists passados.

---

# 15. PROMPT OPERACIONAL PARA COLAR NO ANTIGRAVITY

> **Tarefa:** implementar do zero (ou adaptar no projeto existente) uma Landing Page `/` e um Bio Site `/bio` para **Sabá Material de Construção**, seguindo EXATAMENTE o documento `DESIGN_SYSTEM_SABA_COMPLETO.md`. Este documento é a única fonte de verdade da interface; as capturas visuais recebidas são APENAS referências de estética, não são assets.
>
> **Leitura obrigatória:** antes de codificar, leia as seções 0, 2, 3, 4, 5, 6, 9, 13 e 14 integralmente. Execute na ordem especificada.
>
> **ERRO QUE NÃO PODE ACONTECER:** NÃO use screenshot, print do Canva, imagem do Instagram capturada, mockup dos celulares ou qualquer recorte dessas referências como imagem final. NÃO disfarce screenshot com cropping, backgrounds, sobreposição ou blur. A página precisa ser HTML/CSS/JS autêntico com fotos individuais novas/licenciadas e dados reais. Para cada imagem, registre o arquivo e origem em `ASSET_MANIFEST.md`.
>
> **ÍCONES:** NÃO desenhe ícones novos, nem use IA para criar ícones. Importe ícones de Lucide/Tabler/Heroicons; para WhatsApp use pacote de ícones reconhecido; para marcas e logo da Sabá use arquivos oficiais. Não fabrique logotipos com gerador de imagem.
>
> **BORDAS:** NÃO use cards excessivamente arredondados! Cards/painéis no desktop `border-radius ≤10px`, tablet `≤8px`, MOBILE `≤6px`. Botões desktop `≤8px`, MOBILE `≤6px`. Não usar `rounded-2xl`, `rounded-3xl` nem `rounded-full` em cards, painéis e CTA. Confira CSS computado em 320, 390, 768, 1024 e 1440 px.
>
> **RESPONSIVIDADE:** implemente mobile explicitamente, sem apenas escalar o desktop. LP com container 1248px e 6 cards em 1440, 3 no tablet e 2 no mobile. Biosite único, rolável e mobile-first; em desktop fica centralizado com `max-width:560px`. NÃO renderize uma moldura de iPhone e NÃO crie duas páginas lado a lado a partir do mockup aprovado.
>
> **DADOS:** telefone `(92) 99103-9337`, endereço, redes, ano e horários são pontos a confirmar no `site.config.ts`; não inventar dados faltantes. Use CTA WhatsApp contextual e todos os links clicáveis.
>
> **DESIGN:** amarelo `#FFE600`, preto `#111214`, branco `#FFFFFF`, `Barlow Condensed` para headlines e `Inter` para UI, layout industrial sofisticado, fotos realistas, contraste forte, pequenas animações. Preservar a identidade, não transformar a empresa em loja genérica.
>
> **OBRIGATÓRIO ENTREGAR:** rotas `/` e `/bio`, componentes reutilizáveis, CSS tokens, assets individuais, manifesto de imagens, links funcionando, QA de telas e resumo das pendências. Não declarar concluído se houver cards feitos com screenshot, ícones inventados, mobile quebrado, cantos excessivamente arredondados ou links fictícios.

---

# 16. MATRIZ DE DECISÃO — O QUE FAZER QUANDO FALTA ALGO

| Situação | Fazer | Nunca fazer |
|---|---|---|
| Falta foto de fachada | placeholder discreto + solicitar original | recortar fachada do print ou gerar fachada “real” falsa |
| Falta foto da equipe | usar bloco textual ou placeholder neutro | gerar rosto de suposto funcionário |
| Falta foto de produto | buscar stock licenciado ou gerar nova foto genérica | recortar card de referência |
| Falta logo Sabá | solicitar original; temporário só texto editável sinalizado | print de logo com fundo, desenho falso |
| Falta logo de fabricante | omitir até obter asset oficial | escrever logo com fonte similar ou gerar IA |
| Falta ícone | procurar símbolo adequado em biblioteca | desenhar do zero |
| Layout mobile estoura | alterar grid/fontes/ordem com CSS responsivo | reduzir página inteira com `transform:scale()` |
| Card fica arredondado | aplicar raio 6 px mobile/10 desktop e validar | manter borda 24–32 px do mockup |
| Falta horário | ocultar card ou exibir “Consulte pelo WhatsApp” | inventar horário da loja |
| Falta mapa verificado | endereço + CTA Maps após confirmação | mapa fake ou screenshot |

---

# 17. DEFINIÇÃO DE PRONTO (DOD)

O projeto só está concluído quando:

1. Landing Page `/` e Bio Site `/bio` estão implementados como interfaces reais, não imagens.
2. As duas páginas têm boa fidelidade visual à linguagem aprovada e composição descrita.
3. Em **390 px**, a LP e o biosite funcionam perfeitamente, com cards **6 px de raio**, textos legíveis, menus utilizáveis e CTAs visíveis.
4. Em **1440 px**, a LP usa layout em colunas e o biosite é centralizado, sem ser mostrado dentro de um smartphone.
5. Nenhum print das referências foi usado para suprir imagens, logos ou componentes.
6. Nenhum ícone foi inventado; apenas bibliotecas e arquivos oficiais.
7. Fotos da Sabá só foram usadas se originais e autorizadas; imagens geradas representam cenas genéricas.
8. Toda informação comercial não verificada está sinalizada e pode ser confirmada/editada facilmente.
9. Todos os caminhos e links foram testados.
10. O repositório contém `ASSET_MANIFEST.md` e um resumo claro do que foi validado.

**Princípio final:** usar as referências para orientar o DESIGN, nunca para preencher os pixels. A fidelidade deve vir de estrutura, tipografia, hierarquia, fotografia própria e acabamento profissional — não de screenshot disfarçado.
