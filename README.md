# Sabá Material de Construção — Sites (LP + Biosite)

Projeto desenvolvido com fidelidade às especificações de design system e diretrizes de identidade visual da **Sabá Material de Construção**.

O projeto conta com duas rotas completas e integradas no mesmo ecossistema:
- **`/`** — **Landing Page Institucional e Comercial** (Desktop, Tablet e Mobile).
- **`/bio`** — **Biosite para Instagram** (Mobile-first, centralizado em até 560px no desktop).

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ (testado e homologado no Node v24)
- NPM

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```
Acesse:
- Landing Page: `http://localhost:5173/`
- Biosite Instagram: `http://localhost:5173/bio`

### 3. Gerar build de produção
```bash
npm run build
```

---

## 🎨 Design System e Tokens

- **Amarelo Principal (Brand):** `#FFE600` (Hover: `#F4D900`)
- **Preto Principal (Ink):** `#111214` (Soft: `#232428`)
- **Superfície Clara:** `#F5F5F2` (Paper: `#FFFFFF`)
- **WhatsApp:** `#0CBF54` (Hover: `#099E46`)
- **Tipografia:**
  - Headlines/Display: `Barlow Condensed` (pesos 700, 800, 900)
  - Textos e UI: `Inter` (pesos 400, 500, 600, 700)

### 📐 Limites Rígidos de Border-Radius
Conforme regra inegociável do projeto, os cantos excessivamente arredondados foram eliminados:
- **Desktop:**
  - Cards: `8px` (máximo `10px`)
  - Painéis: `10px`
  - Botões: `8px`
- **Mobile:**
  - Cards: `6px`
  - Painéis: `8px`
  - Botões: `6px`
- Nenhuma classe `rounded-2xl`, `rounded-3xl` ou `rounded-full` em cards e containers retangulares.

---

## 📁 Estrutura de Pastas e Assets

```text
saba construção - sites/
├── docs/
│   ├── ASSET_AUDIT.md        # Relatório inicial de auditoria das 5 pastas
│   └── ASSET_MANIFEST.md     # Manifesto formal com origens de cada imagem
├── public/
│   └── assets/
│       ├── branding/         # Logos oficiais da Sabá (preta e amarela)
│       ├── partners/         # 9 logos individuais dos parceiros
│       ├── real/             # Fotos reais da loja e profissional
│       └── categories/       # 7 fotos dedicadas de categorias de produto
├── src/
│   ├── components/
│   │   ├── common/           # Carrossel infinito e componentes compartilhados
│   │   ├── layout/           # Header e Footer da Landing Page
│   │   ├── lp/               # Seções da Landing Page
│   │   └── bio/              # Seções do Biosite mobile-first
│   ├── data/
│   │   └── siteConfig.ts     # Configurações centralizadas, links e mensagens
│   ├── pages/
│   │   ├── LandingPage.tsx   # Página principal (/)
│   │   └── BioPage.tsx       # Biosite Instagram (/bio)
│   ├── App.tsx               # Roteamento React Router
│   ├── index.css             # Tokens CSS e regras de responsividade
│   └── main.tsx              # Ponto de entrada React
├── dist/                     # Build de produção otimizado
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛡️ Conformidade com as Regras do Projeto

1. **Zero Prints como Imagens de Produção:** Nem o mockup da LP nem a imagem dos dois celulares foram recortados ou usados como imagens de produção.
2. **Assets Oficiais Utilizados:** Logos oficiais da Sabá (preta e amarela), fotos reais da fachada e do profissional no corredor da loja, e as 9 logos individuais de parceiros (`Suvinil`, `Tigre`, `Lorenzetti`, `Deca`, `Bosch`, `Fortlev`, `Ilumi`, `Emar`, `Ebara`).
3. **Fotografias de Categorias Dedicadas:** Criadas especificamente conforme a especificação do design system para Poço Artesiano, Materiais de Construção, Tintas, Hidráulica, Elétrica, Ferramentas e Telhas/Estruturas.
4. **Ícones Homologados:** Utilização de `lucide-react` e `react-icons` (zero ícones desenhados manualmente).
5. **Carrossel Infinito:** Implementado com loop contínuo CSS, pausa ao passar o mouse (`pause-hover`) e respeito a `prefers-reduced-motion`.
6. **Informações Oficiais e Responsividade:** Telefones, links com mensagem pré-preenchida de WhatsApp, endereço e horário com base nas diretrizes documentadas.
