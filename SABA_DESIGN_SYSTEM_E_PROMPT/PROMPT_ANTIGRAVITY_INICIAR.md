# PROMPT DE INÍCIO — ANTIGRAVITY / SABÁ

**Anexe `DESIGN_SYSTEM_SABA_COMPLETO.md` ao projeto e cole este prompt no Antigravity.**

Implemente **duas páginas funcionais**, uma Landing Page institucional/comercial em `/` e um Bio Site mobile-first em `/bio`, para **Sabá Material de Construção**. Leia o arquivo `DESIGN_SYSTEM_SABA_COMPLETO.md` do início ao fim e trate-o como **especificação de implementação obrigatória**. Em particular, siga os layouts X/Y, os componentes, as tabelas de responsividade, os tokens e o manifesto de assets. Não comece a codificar sem entender as restrições.

## BLOQUEIOS OBRIGATÓRIOS

**1. ZERO SCREENSHOTS COMO IMAGENS DO SITE.** As referências enviadas (Canva, Instagram, mockup de landing page, dois celulares) são exclusivamente direção visual. É proibido recortar, reaproveitar, reproduzir em fundo, copiar, editar, embaçar ou usar essas capturas como fotos, banners, cards, logos ou qualquer asset final. Site deve ser HTML/CSS/JS verdadeiro, com texto, botões, cards e imagens independentes. Para cada foto de categoria/hero, encontre um asset licenciado ou **gere uma imagem NOVA**. Documente origens em `ASSET_MANIFEST.md`.

**2. ZERO ÍCONES INVENTADOS.** Proibido desenhar ícones ou gerar iconografia por IA. Use imports de `lucide-react`, `@tabler/icons-react`, `@heroicons/react` ou `react-icons`. A logo da Sabá e logos das marcas devem ser arquivos **oficiais**, não recriações.

**3. REDUZIR MUITO AS CURVAS.** Cards e painéis: desktop `border-radius` máximo de **10px**, tablet **8px**, mobile **6px**. Botões: desktop **8px**, mobile **6px**. NÃO usar `rounded-2xl`, `rounded-3xl`, `rounded-full` em cartões, banners, painéis, inputs e CTAs. Círculo só para ícone/avatares redondos. Testar estilo computado em 320, 390, 768, 1024 e 1440px.

**4. MOBILE REAL.** Não reduzir a tela inteira, não permitir overflow horizontal, não sobrepor texto e rosto. Ajustar grid e ordem de componentes em cada breakpoint. Biosite é **uma página única rolável**; os 2 celulares da referência são duas visões do fluxo, não dois aparelhos a renderizar. Em desktop, `/bio` fica centralizada com `max-width: 560px`.

**5. NÃO FABRICAR FOTOS/INFORMAÇÕES REAIS.** Equipe e fachada da Sabá só podem ser mostradas com arquivos originais autorizados; nunca gerar pessoas ou prédios fictícios apresentando-os como verdadeiros. Sem foto disponível, renderizar placeholder correto e registrar pendência. Telefone/endereço/horários devem ser validados em `site.config.ts`, nunca inventados.

## ORDEM DE EXECUÇÃO

1. Criar/ajustar tokens globais, fontes (`Barlow Condensed`, `Inter`) e componentes compartilhados.
2. Criar `site.config.ts` com valores conferidos ou claramente pendentes; criar `ASSET_MANIFEST.md`.
3. Providenciar imagens individuais de hero e categorias; adicionar origem e licença ao manifesto. Não reutilizar as imagens de referência.
4. Implementar LP `/` na ordem: Header → Hero → Especialidades → Diferenciais → Sobre → Marcas → Contato/Localização → Footer.
5. Implementar Bio `/bio` na ordem: Header → Hero → Categorias → Confiança → Diferenciais → Nossa História → Marcas → Localização → Horários confirmados → CTA → Redes → Footer.
6. Inserir links WhatsApp com mensagem pré-preenchida por contexto, menus e atalhos funcionais.
7. Testar viewport **320 / 360 / 375 / 390 / 414 / 430 / 768 / 1024 / 1280 / 1440 / 1920**. Validar raios, overflow, acessibilidade, legibilidade e fotos.
8. Auditar `/public`: **nenhum print de referência pode ter sido usado**.
9. Entregar URLs locais de `/` e `/bio`, resumo dos testes e lista das informações/fotos pendentes. **Não declare completo se qualquer bloqueio foi violado.**

## VALORES VISUAIS

- Amarelo `#FFE600`, preto `#111214`, branco `#FFFFFF`, superfície `#F5F5F2`.
- Layout industrial moderno e elegante, com fonte de impacto para títulos e bastante respiro.
- Landing Page container `max-width:1248px` em desktop; categorias 6 colunas em 1440, 3 no tablet, 2 no mobile.
- Bio mobile-first, container `max-width:560px`, 2 colunas de categorias e CTA em destaque.
- Botões de orçamento para WhatsApp; dados e links do negócio centralizados em configuração.
- Imagens reais ou novas, alto nível fotográfico, **NUNCA capturas da referência**.

**Faça o projeto fiel à direção de arte, mas construa cada elemento como componente real. O documento completo prevalece sobre decisões automáticas da ferramenta.**
