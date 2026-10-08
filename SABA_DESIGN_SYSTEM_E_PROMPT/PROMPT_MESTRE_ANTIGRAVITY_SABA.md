# PROMPT MESTRE — SABÁ MATERIAL DE CONSTRUÇÃO
## Leia as pastas, organize os assets e implemente a landing page + biosite

Você está trabalhando **dentro do projeto local da Sabá Material de Construção**. Sua tarefa é **inspecionar todo o material já fornecido, classificar corretamente os arquivos, estudar o design system e implementar dois produtos funcionais e responsivos**, com fidelidade às referências visuais e usando os assets certos.

**NÃO comece programando nem gerando imagens antes da auditoria das pastas.** Não presuma o conteúdo de arquivos que ainda não abriu. Não alegue que leu um documento, viu uma imagem ou testou uma tela se isso não aconteceu.

---

## 1. RAIZ DO PROJETO E PASTAS OBRIGATÓRIAS

O projeto foi preparado pelo usuário no Windows:

`Downloads/ANTIGRAVITY PROJETOS & SKILLS/saba construção - sites/`

Esta é a **raiz lógica do trabalho**. Use o diretório efetivamente aberto no workspace, sem inventar caminhos absolutos. As cinco pastas visíveis são:

1. `logo saba/` — variantes da logo oficial da Sabá, em especial versões preta e amarela, sem fundo.
2. `REFERENCIA SITE E BIO/` — mockups e capturas de referência da LP e do biosite. **Somente referência visual.**
3. `LOGOS PARCEIROS/` — logos separadas das marcas para o carrossel contínuo.
4. `SITE IMAGENS/` — fotos e imagens destinadas ao site, como banner/hero e fachada.
5. `SABA_DESIGN SYSTEM E PROMPT/` — arquivos `.md` com design system, instruções anteriores, estrutura, tokens, posicionamento e responsividade.

**Ação inicial obrigatória:** listar recursivamente essas pastas e ler/inspecionar efetivamente os arquivos dentro delas, incluindo subpastas. Ler **todos** os arquivos `.md` relevantes, não apenas seus nomes. Visualizar ou inspecionar cada imagem candidata para determinar o que ela mostra. Se alguma pasta não estiver acessível no workspace, **pare e informe precisamente o que falta**, pedindo acesso antes de inventar materiais.

### Entrega da auditoria, ANTES de mexer no código

Produza um relatório curto, dentro da conversa ou em `docs/ASSET_AUDIT.md`, com:

- Arquivo original e caminho relativo, extensão, dimensões e transparência quando aplicável.
- Categoria: `logo-saba`, `logo-parceiro`, `foto-real`, `banner`, `produto`, `referencia-visual`, `documentacao` ou `nao-classificado`.
- Onde será usado (`/`, `/bio`, ambos ou somente documentação).
- Necessidade de otimização e eventuais ausências/arquivos corrompidos.
- Lista explícita dos documentos `.md` lidos e suas principais instruções, incluindo possíveis conflitos.

A partir dessa auditoria, faça um **plano resumido de implementação** e então execute-o sem ficar aguardando autorização a cada passo, salvo bloqueios de acesso ou informações comerciais essenciais ausentes.

---

## 2. HIERARQUIA DE INSTRUÇÕES

Prioridade em caso de conflito:

1. Este prompt e as correções diretas do usuário.
2. O design system `.md` da pasta `SABA_DESIGN SYSTEM E PROMPT/`.
3. Os mockups da pasta `REFERENCIA SITE E BIO/`, apenas como referência de composição.
4. Decisões de implementação necessárias para acessibilidade, performance e responsividade.

**Correção obrigatória do design:** os cards dos mockups ficaram arredondados demais. **Reduza o arredondamento em TODA a interface, no desktop e principalmente no mobile**, mesmo que as capturas mostrem cantos maiores. Não siga cegamente raios presentes em documentos antigos que conflitem com esta correção.

---

## 3. REGRAS ABSOLUTAS SOBRE IMAGENS, LOGOS E ÍCONES

### 3.1. PROIBIDO usar prints como imagens do site

A pasta `REFERENCIA SITE E BIO/` serve EXCLUSIVAMENTE para entender o layout.

**É PROIBIDO:**

- Recortar imagens de capturas ou mockups para inseri-las no HTML, CSS ou componentes.
- Usar uma screenshot inteira como `background-image`, `<img>` de hero, produto, fachada ou qualquer seção.
- Transformar uma screenshot em WebP/JPEG e dizer que é um asset original.
- Usar a imagem de um celular/mockup contendo uma página como se fosse o biosite real.
- Fingir que uma tela está funcionando ao exibir uma montagem estática.
- Recriar um logo por IA, por texto CSS, por fontes aproximadas ou por desenho improvisado se o arquivo oficial já existe.

As imagens de referência **não são** imagens de produção. A página deve ser construída de verdade, com HTML/React e conteúdo separado em elementos semânticos, e não composta com fatias de screenshot.

### 3.2. Ordem correta de obtenção das imagens

1. **Prioridade máxima:** reutilize fotos reais e assets finais de `SITE IMAGENS/` e `logo saba/`.
2. Se faltar uma imagem de categoria ou ambientação, obtenha foto adequada de banco de imagens com licença compatível, ou use um recurso de geração de imagens **apenas se ele estiver realmente disponível**.
3. Se não houver ferramenta disponível ou não conseguir obter o recurso, prepare um placeholder neutro identificado e registre `TODO: substituir por imagem original/licenciada`; **não substitua por print**.
4. Nunca invente uma foto documental da fachada real, da equipe real, de um funcionário específico ou do interior real da Sabá. Use as fotos disponibilizadas para essas seções; se faltarem, sinalize a ausência.
5. Para marcas comerciais, use as logos fornecidas, conservando suas proporções e cores. Não invente logomarcas.

### 3.3. Logo Sabá e logos das marcas

- Localize as versões **preta** e **amarela** oficiais em `logo saba/`.
- Use a preta em fundos amarelos ou claros e a amarela em fundos pretos ou escuros.
- Preserve transparência, contorno, tipografia e proporções; `object-fit: contain`.
- Não estique, não distorça, não redesenhe e não aplique fundo amarelo em arquivo que deve ser transparente.
- Em `LOGOS PARCEIROS/`, use arquivos **individuais**, não um recorte da faixa de logos no mockup.
- Carrossel: Suvinil, Tigre, Lorenzetti, Deca, Bosch, Fortlev, Ilumi, Emar e Ebara, **apenas se os arquivos corretos estiverem disponíveis**; reporte ausências. Não invente parcerias adicionais.

### 3.4. Ícones

**PROIBIDO desenhar ícones do zero ou usar emojis como substituto dos ícones reais da interface.** Use bibliotecas existentes, preferencialmente `lucide-react` (ou `lucide`/`tabler-icons` equivalente compatível com a stack). WhatsApp, Instagram e outras marcas devem usar logos/ícones oficiais provenientes de bibliotecas ou assets licenciados, não desenhos manuais improvisados. Padronize tamanho, stroke e alinhamento.

---

## 4. IDENTIDADE VISUAL — SABÁ

- Identidade: **amarelo e preto**, forte, comercial, moderna, industrial e limpa.
- Amarelo principal: `#FFEA00` (ou token exato do design system, se definido com mais precisão).
- Preto principal: `#111111`.
- Fundo claro: `#F5F5F2` / branco.
- Cinzas neutros para linhas, bordas e textos secundários.
- Verde apenas nos CTAs explicitamente associados ao WhatsApp; não transforme o site em verde.
- Tipografia com títulos fortes e condensados, se prevista no design system; corpo legível. Carregue fontes adequadamente, com fallback e sem depender de imagem de texto.
- Fotografia verdadeira, bom contraste, espaço em branco, hierarquia clara e sensação de loja profissional.
- Animações discretas e performáticas, sem atrapalhar leitura ou conversão.

### Regra inegociável: border-radius

Defina tokens globais e respeite-os sem exceção para retângulos:

```css
:root {
  --radius-xs: 3px;
  --radius-sm: 5px;
  --radius-card: 8px;
  --radius-panel: 10px;
  --radius-button: 7px;
}
@media (max-width: 767px) {
  :root {
    --radius-card: 6px;
    --radius-panel: 8px;
    --radius-button: 6px;
  }
}
```

- **Desktop:** cards preferencialmente `8px`, painéis no máximo `10px`.
- **Mobile:** cards preferencialmente `6px`, painéis no máximo `8px`.
- Nada de `rounded-2xl`, `rounded-3xl`, `rounded-[30px]`, `border-radius: 24px`, etc., em cards e blocos comuns.
- `border-radius: 50%` somente para objetos realmente circulares (ex.: ícone/botão redondo), não para containers retangulares.
- Não usar `rounded-full` em CTAs retangulares nem deixar cards parecendo cápsulas.
- Se estiver usando Tailwind, crie classes/tokens consistentes e busque/remova os `rounded-*` inadequados.

---

## 5. PRODUTOS DIGITAIS QUE DEVEM EXISTIR

Você deve entregar **dois layouts verdadeiros e navegáveis no mesmo projeto**:

- `/` — **landing page institucional/comercial** (desktop e mobile).
- `/bio` — **biosite para Instagram**, otimizado prioritariamente para mobile, com boa apresentação também no desktop.

A LP e o biosite compartilham marca, tokens e assets, porém **não são uma única página responsiva nem uma imagem colada**. Ambos devem existir com conteúdo e componentes próprios.

Se o projeto já tiver stack, rotas ou componentes, aproveite sem destruir código útil. Caso esteja vazio, configure uma solução simples, por exemplo React + TypeScript + Vite e CSS/Tailwind, com roteamento adequado, sem complexidade desnecessária. Mantenha o projeto executável com comandos documentados.

---

## 6. LANDING PAGE `/` — ORDEM E ESTRUTURA

Seguir a composição do mockup de referência, reconstruindo cada item em interface real:

1. **Header/navbar:** fundo amarelo, logo preta, links Início, Produtos, Sobre e Contato; CTA WhatsApp. Desktop horizontal, mobile com navegação compacta acessível. Menu não pode cobrir conteúdo.
2. **Hero:** imagem final de `SITE IMAGENS/` como fundo/camada visual, preferencialmente homem com uniforme preto da Sabá à direita e ambiente da loja. **O texto é HTML sobreposto à esquerda, não impresso na imagem.** Headline forte: “Tudo para sua obra, do poço artesiano ao acabamento.” Subtítulo e dois CTAs (“Solicitar orçamento” e “Falar no WhatsApp”). Área de texto tem overlay/gradiente de contraste independente da foto.
3. **Categorias/especialidades:** seção “Nossas Especialidades”, com cards distintos: Poço Artesiano, Materiais de Construção, Tintas, Hidráulica, Elétrica e Ferramentas. Use fotos reais/adequadas por categoria, jamais recortes do mockup. Cada card tem título, breve descrição e ação de contato/filtro de orçamento.
4. **Diferenciais:** atendimento especializado, marcas reconhecidas, variedade e histórico da loja. Não faça alegações de entrega garantida, quantidade de anos ou horários sem respaldo nos arquivos.
5. **Sobre a Sabá:** foto documental real da equipe, se fornecida; conteúdo institucional, localização em Manaus e informação “Desde 2010”, pois o número de anos das referências pode estar desatualizado. Se a foto de equipe não existir, marcar para inclusão posterior.
6. **Carrossel de marcas:** “Marcas que você confia, aqui na Sabá”. Use logos individuais em carrossel horizontal contínuo/infinito, loop sem salto perceptível, mantendo cores, transparência e proporções. Ofereça pausa no hover/foco e respeite `prefers-reduced-motion` (exibir lista estática ou reduzir movimento).
7. **CTA e contato:** chamada para pedido via WhatsApp; foto real da fachada da pasta `SITE IMAGENS/`; endereço e link para Google Maps apenas após verificar os dados, e horário somente se confirmado.
8. **Footer:** logo adequada ao fundo, navegação, contato, redes e informação institucional válida. Sem ano fixo desatualizado de mockup.

### Hero — orientação de composição (não layout fixo)

- Em desktop de referência `1440px`, use container central com largura máxima aproximada de `1200–1280px` e gutters de `24–40px`.
- Área textual aproximadamente nos primeiros `45–52%` do hero; personagem/foto à direita. Use CSS Grid/Flex e `background-position` ou `<picture>` responsável pelo crop.
- Em mobile `360–430px`, o texto e os CTAs precisam permanecer legíveis e sem sobrepor o rosto; reposicione a imagem ou divida visualmente texto e foto conforme a referência mobile.
- Coordenadas X/Y e dimensões descritas no design system são **referências de composição**, não justificativa para posicionar toda a página com `position:absolute` ou travar larguras.

---

## 7. BIOSITE `/bio` — ESTRUTURA PRÓPRIA

O biosite deve parecer uma **mini landing page premium para acesso pelo Instagram**, não uma lista genérica do Linktree.

Ordem sugerida com base na referência mobile:

1. Topo amarelo com logo oficial Sabá e menu/atalhos funcionais.
2. Hero com headline clara, uniforme da Sabá e CTA destacado para orçamento via WhatsApp. Reaproveite o banner/asset real, com corte mobile próprio quando necessário.
3. Grid compacto de categorias, preferencialmente **2 colunas no mobile** quando houver espaço: Poço Artesiano, Construção, Tintas e Acabamentos, Hidráulica/Elétrica, Ferramentas e outras categorias respaldadas por assets.
4. Indicadores de confiança e vantagens em layout compacto, sem cards exageradamente arredondados.
5. Bloco “Por que escolher a Sabá?” com foto verdadeira da fachada.
6. Seção “Nossa história”, com imagem verdadeira disponível e texto institucional resumido.
7. Carrossel/faixa das marcas parceiras com os mesmos arquivos oficiais usados na LP.
8. Endereço/localização e horário **somente com dados verificados**.
9. CTA final forte para orçamento por WhatsApp.
10. Atalhos para Instagram, ligar e compartilhar link; rodapé com logo e informações essenciais.

**Não implemente um desenho de iPhone na tela:** os mockups com celulares são referência de como a página deve se comportar dentro do telefone do visitante. O `/bio` é uma página web real, largura total da viewport mobile.

---

## 8. RESPONSIVIDADE OBRIGATÓRIA

Projete e **teste de fato** pelo menos estas larguras:

- `360px` (Android estreito)
- `390px` (mobile de referência)
- `430px` (mobile largo)
- `768px` (tablet)
- `1024px` (desktop pequeno)
- `1440px` (desktop de referência)
- `1920px` (desktop grande)

Critérios de aprovação:

- Nunca haver scroll horizontal acidental ou texto cortado.
- Navbar realmente usável; botões com alvos de toque confortáveis (aproximadamente `44px` de altura mínima).
- Mobile: espaçamentos controlados; cards com cantos pequenos, títulos legíveis, fotos sem distorção e CTAs visíveis.
- LP: grid de categorias adaptativo (desktop 6 colunas se couber, tablet 3, mobile 2 ou 1 conforme legibilidade).
- Bio: primeira dobra mobile atraente e foco na ação principal.
- Imagens: `object-fit`, `object-position`, versões responsivas quando existirem, `loading="lazy"` fora da dobra.
- Carrossel não pode causar overflow da página, pular ao reiniciar, achatar logos ou animar contra preferências do usuário.
- Sem tamanhos fixos que dependam de um modelo específico de celular.
- Revise especialmente `border-radius` em 360px, 390px e 430px: o problema de bordas muito curvas deve estar definitivamente resolvido.

---

## 9. ORGANIZAÇÃO DO REPOSITÓRIO E ASSETS

Após ler o conteúdo real das pastas, organize o projeto de forma limpa. **Não mova nem apague os arquivos originais fornecidos** sem motivo; copie os assets selecionados para a estrutura usada pelo app.

Estrutura-alvo ilustrativa (adapte à stack existente):

```text
saba construção - sites/
├── logo saba/                         # fontes originais, preservadas
├── REFERENCIA SITE E BIO/             # somente material de referência
├── LOGOS PARCEIROS/                   # fontes originais
├── SITE IMAGENS/                      # fontes originais
├── SABA_DESIGN SYSTEM E PROMPT/       # documentação original
├── docs/
│   ├── ASSET_AUDIT.md
│   ├── IMPLEMENTATION_NOTES.md
│   └── ASSETS_TODO.md
├── public/
│   └── assets/
│       ├── branding/                 # logo-saba-preta, logo-saba-amarela
│       ├── partners/                 # suvinil, tigre, ...
│       ├── hero/                     # imagem hero real
│       ├── company/                  # fachada/equipe
│       └── categories/               # imagens por categoria
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── common/
│   │   └── sections/
│   ├── pages/
│   │   ├── LandingPage.*
│   │   └── BioPage.*
│   ├── data/
│   │   ├── brandAssets.*
│   │   ├── categories.*
│   │   └── siteContent.*
│   └── styles/
└── ...configuração da stack...
```

- Renomeie cópias de assets para nomes estáveis, sem espaços e semanticamente claros; mantenha rastreabilidade com o nome original no relatório.
- Diferencie `reference-only` de `production-ready` para nunca importar screenshots de referência por engano.
- Não use caminhos absolutos como `C:\Users\...` em `src`/CSS. Utilize caminhos relativos/public URL corretos.
- Logos com transparência preferencialmente em SVG oficial ou PNG transparente; não converta de forma que perca alfa.
- Fotos podem ser otimizadas em WebP/AVIF com arquivo de origem preservado, quando as ferramentas existirem.
- Centralize conteúdo editável (links, textos, categorias, nome e contato) em objetos de dados/configuração, não espalhados por dezenas de componentes.

---

## 10. LINKS E DADOS COMERCIAIS

- CTA principal: abrir conversa de WhatsApp com a empresa. A referência indica `(92) 99103-9337`; **confirme o número nos arquivos oficiais disponíveis antes de fixá-lo**. Se confirmado, formato `https://wa.me/5592991039337` com mensagem de orçamento opcional e codificada.
- Endereço mostrado em referências: `Av. Praia da Ponta Negra, nº 15, Pq. Solimões, Tarumã, Manaus – AM`; confira com os materiais oficiais antes de publicar.
- Não invente URLs de redes sociais, link do Maps, horários, selos ou depoimentos.
- A empresa comunica atuação **desde 2010**. Evite escrever automaticamente “14 anos” ou outro total de anos vindo de mockup antigo; use “Desde 2010” ou informação comprovada e atualizada.
- Todos os botões devem ter destino ou ação real; não deixe botões decorativos que pareçam funcionar.

---

## 11. IMPLEMENTAÇÃO, SEO E QUALIDADE

- Semântica HTML correta (`header`, `main`, `section`, `nav`, `footer`, títulos com H1 único por página).
- `alt` apropriado, contraste adequado, foco visível, navegação por teclado e respeito a movimento reduzido.
- `<title>`, meta description, Open Graph e metadados locais básicos, usando apenas informações confirmadas.
- Imagens responsivas, lazy loading, compressão prudente, evitar layout shift e otimizar a primeira dobra.
- Carrossel estável, sem dependências enormes desnecessárias.
- Logo, fotos e textos são **elementos separados**. Nunca faça rasterização de uma seção inteira para imitar a captura.
- Nenhum texto de teste, lorem ipsum ou arte aleatória deve ficar disfarçado de conteúdo final.

---

## 12. PLANO DE EXECUÇÃO OBRIGATÓRIO

Trabalhe nesta ordem:

**FASE A — Auditoria:** identifique a stack, leia integralmente os `.md`, liste as cinco pastas, classifique todas as imagens e reporte faltas. Não pule.

**FASE B — Preparação:** estabeleça design tokens e os limites rígidos de cantos, escolha assets reais, copie-os para `public/assets/` e configure o inventário/rastreabilidade.

**FASE C — LP:** implemente header, hero, categorias, diferenciais, sobre, carrossel de parceiros, localização/CTA e footer, usando conteúdo HTML real.

**FASE D — Biosite:** implemente `/bio` como página mobile-first distinta, compartilhando componentes/ativos quando adequado.

**FASE E — Refinamento:** ajuste posições, proporções, tipografia e espaçamentos com base nas referências, mas **não use prints como assets**. Corrija de forma especial o excesso de bordas arredondadas no mobile e desktop.

**FASE F — Validação:** execute build/lint/testes disponíveis, abra/valide `/` e `/bio` nas larguras indicadas, verifique os caminhos de imagens e links, elimine overflow e registre resultados. Se algum comando ou preview não funcionar, relate exatamente qual falhou.

---

## 13. CRITÉRIOS DE REPROVAÇÃO — NÃO CONSIDERE CONCLUÍDO SE...

- Não leu os documentos `.md` existentes.
- Não inspecionou os cinco diretórios.
- Usou um screenshot da LP, dos mockups ou do Instagram como imagem de produção.
- Usou uma captura recortada para fingir uma foto de produto/fachada/pessoa.
- Redesenhou a logo ou inventou símbolos em vez de usar assets/bibliotecas.
- Criou apenas a LP e esqueceu o `/bio`, ou vice-versa.
- Cards continuam excessivamente arredondados no mobile ou desktop.
- A página mobile tem overflow horizontal, textos cortados ou CTAs fora da área visível.
- O carrossel não faz loop ou usa logos distorcidas/agrupadas num único print.
- Há links sem destino, conteúdo fabricado como se fosse dado real da empresa ou imagens quebradas.
- Disse que verificou algo sem executar a verificação correspondente.

## 14. RESPOSTA FINAL QUE ESPERO DE VOCÊ

Ao concluir, informe em linguagem objetiva:

1. Quais pastas e `.md` foram lidos.
2. Quais assets reais foram selecionados para hero, fachada, logos e categorias, e quais ainda faltam.
3. Qual estrutura de arquivos foi criada e onde estão `/` e `/bio`.
4. Como executar o projeto (`install`, `dev`, `build`, de acordo com a stack real).
5. Quais larguras foram verificadas e quais ajustes de bordas/responsividade você realizou.
6. O que permanece pendente (se houver), sem afirmar que está pronto quando não está.

**Comece AGORA pela FASE A: auditoria recursiva de todas as cinco pastas e leitura dos documentos `.md`. Só depois implemente o site.**
