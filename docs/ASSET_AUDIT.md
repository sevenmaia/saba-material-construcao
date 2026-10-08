# AUDITORIA RECURSIVA DE ASSETS E DOCUMENTAÇÃO
**Projeto:** Sabá Material de Construção (Landing Page `/` + Biosite `/bio`)  
**Data:** 08/10/2026  
**Auditor:** Antigravity AI  

---

## 1. Pastas Inspecionadas

O projeto possui exatamente 5 pastas na raiz:
1. `logo saba/` (2 arquivos)
2. `LOGOS PARCEIROS/` (9 arquivos)
3. `REFERENCIA SITE E BIO/` (2 arquivos)
4. `SABA_DESIGN SYSTEM E PROMPT/` (3 arquivos markdown)
5. `SITE IMAGENS/` (2 arquivos)

Total de arquivos inspecionados: 18 arquivos.

---

## 2. Inventário e Classificação de Imagens

| Caminho Relativo Original | Dimensões | Formato / Alpha | Categoria | Destino de Uso | Observações / Ação |
|---|---|---|---|---|---|
| `logo saba/logo preta.png` | 1448 × 1086 | PNG 32-bit (Transparente) | `logo-saba` | `/` e `/bio` (fundos claros/amarelos) | Logo oficial preta sem fundo. Preservar proporções (`contain`). |
| `logo saba/logo amarela.png` | 1448 × 1086 | PNG 32-bit (Transparente) | `logo-saba` | `/` e `/bio` (fundos escuros/pretos) | Logo oficial amarela sem fundo. Preservar proporções (`contain`). |
| `LOGOS PARCEIROS/LOGOS (1).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Ilumi**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (2).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Deca**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (3).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Bosch**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (4).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Ebara**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (5).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Emar (Bombas submersas)**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (6).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Fortlev**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (7).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Lorenzetti**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (8).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Tigre**. Alta resolução, fundo transparente. |
| `LOGOS PARCEIROS/LOGOS (9).png` | 2172 × 724 | PNG 32-bit (Transparente) | `logo-parceiro` | `/` e `/bio` | Marca **Suvinil**. Alta resolução, fundo transparente. |
| `SITE IMAGENS/Fachada Amarela da Loja Sabá.png` | 1672 × 941 | PNG 24-bit (Opaco) | `foto-real` | `/` (Localização) e `/bio` (Por que escolher / Localização) | Fotografia real oficial da fachada amarela com letreiro da Sabá. Perfeita para produção. |
| `SITE IMAGENS/Retrato na Loja de Materiais SABÁ.png` | 1672 × 941 | PNG 24-bit (Opaco) | `foto-real` / `banner` | `/` (Hero) e `/bio` (Hero) | Fotografia real oficial de profissional com uniforme bordado da Sabá, em frente ao corredor da loja e painel amarelo Sabá. Perfeita para a Hero. |
| `REFERENCIA SITE E BIO/Homepage Sabá_ Materiais para Construção.png` | 935 × 1683 | PNG 24-bit | `referencia-visual` | **SOMENTE REFERÊNCIA** | Mockup completo de desktop da LP. **PROIBIDO cortar ou usar em produção.** |
| `REFERENCIA SITE E BIO/Mockups do Site Sabá Materiais de Construção.png` | 1024 × 1536 | PNG 24-bit | `referencia-visual` | **SOMENTE REFERÊNCIA** | Mockup de 2 smartphones com o fluxo do biosite mobile. **PROIBIDO cortar ou usar em produção.** |

---

## 3. Análise dos Documentos Lidos

1. **`PROMPT_MESTRE_ANTIGRAVITY_SABA.md` (332 linhas):**
   - Diretriz mestre do projeto.
   - Proibição absoluta de fatiar screenshots, desenhar ícones ou inventar informações comerciais.
   - Regra inegociável de `border-radius`: máximo 10px desktop, 8px tablet, 6px mobile para cards; botões 8px desktop, 6px mobile.
   - Exigência de rotas `/` (LP) e `/bio` (Biosite).
   - Carrossel infinito com logos parceiras individuais.
   - Não inventar foto documental de equipe se não houver foto oficial dedicada.

2. **`DESIGN_SYSTEM_SABA_COMPLETO.md` (1133 linhas):**
   - Especificação técnica profunda e arquitetura visual.
   - Tokens CSS: Amarelo `#FFE600` (ou `#FFEA00`), Preto `#111214`, Neutro Claro `#F5F5F2`, Branco `#FFFFFF`, WhatsApp `#0CBF54`.
   - Tipografia: `Barlow Condensed` para títulos/headlines e `Inter` para texto/UI.
   - Mapeamento detalhado de seções, grids responsivos, microinterações e manifestos de assets.
   - Microcopy e parâmetros de WhatsApp contextual (`waLink`).

3. **`PROMPT_ANTIGRAVITY_INICIAR.md` (41 linhas):**
   - Síntese rápida e reforço dos bloqueios obrigatórios.
   - Enfatiza a não renderização de "molduras de celular" no biosite (é uma página web corrida real, max-width 560px em desktop).

### Identificação de Conflitos e Resoluções:
- **Arredondamento nos mockups vs. Regra do Prompt:** Os mockups mostram cantos de 20-30px, mas as instruções em ambos os prompts determinam enfaticamente: **máximo de 10px desktop, 8px tablet e 6px mobile**. A regra textual prevalece.
- **Número de anos de história:** Os mockups mencionam "Há mais de 14 anos", enquanto os prompts alertam que pode estar desatualizado e orientam a usar "Desde 2010" como informação confirmada. Adotaremos "Desde 2010".
- **Foto da Equipe para a seção "Sobre Nós":** Na referência há uma foto de equipe, mas ela NÃO foi entregue como arquivo isolado na pasta `SITE IMAGENS/`. Como é terminantemente proibido recortar a referência, usaremos para o institucional uma composição de respeito com a fachada/loja real da Sabá e marcaremos a pendência para upload futuro da foto de equipe no manifesto.
- **Categorias (6 itens):** Serão providenciadas fotografias independentes de alta qualidade para cada categoria, sem qualquer recorte das referências.

---

## 4. Plano de Implementação

1. **Estrutura Técnica:**
   - Inicializar projeto com React + TypeScript + Vite + Tailwind CSS + Lucide React + React Router.
   - Copiar assets oficiais (logos Sabá, logos de parceiros, fachada e retrato da loja) para `public/assets/` com nomes semânticos e sem espaços.
   - Obter/gerar imagens dedicadas e independentes para as categorias de produtos.
2. **Landing Page (`/`):**
   - Header fixo com logo Sabá preta em fundo amarelo, navegação e CTA WhatsApp.
   - Hero com imagem real da loja e uniforme Sabá, gradiente de contraste e tipografia de alto impacto.
   - Seção Especialidades (6 categorias com cards de cantos industriais retos).
   - Seção Diferenciais (4 benefícios com ícones Lucide padronizados).
   - Seção Sobre a Sabá (histórico desde 2010 em Manaus).
   - Carrossel Infinito das 9 marcas parceiras oficiais com pausa no hover e respeito a `prefers-reduced-motion`.
   - Seção Contato / Localização com foto real da fachada, endereço oficial e link para Google Maps.
   - Footer institucional completo e botão WhatsApp flutuante inteligente.
3. **Biosite (`/bio`):**
   - Experiência fluida vertical mobile-first (centralizada até 560px no desktop, sem moldura de celular).
   - Hero dinâmico amarelo com foto real e CTA direto para orçamento.
   - Grid 2 colunas com as 6 categorias e botões de ação rápida.
   - Vantagens e bloco "Por que escolher a Sabá" com a foto real da fachada.
   - Seção de marcas parceiras com as 9 logos oficiais.
   - Localização com mapa/endereço e botão do Google Maps.
   - Horários de atendimento e CTA final de conversão.
   - Ações de atalho: Instagram, Ligar e Compartilhar com fallback clipboard.
4. **Validação & QA:**
   - Verificação em viewports 360, 390, 430, 768, 1024, 1440px.
   - Verificação estrita de `border-radius` (≤10px desktop, ≤6px mobile).
   - Teste de build estático e execução do servidor de desenvolvimento.
