# Documentação - Portfólio Pessoal Breno De Almeida Santos

## 1. Definição do Projeto

### Nome do Projeto
**Portfólio Pessoal - Breno De Almeida Santos**

### Problema ou Necessidade Atendida
Desenvolvedores Full Stack necessitam de uma apresentação profissional online que demonstre suas competências técnicas, projetos realizados e experiências de forma clara e acessível a recrutadores, clientes e outros profissionais da área.

### Objetivo Principal
Criar um portfólio responsivo que apresente de forma clara, profissional e minimalista as competências, projetos, experiências e formas de contato de um desenvolvedor Full Stack, permitindo que visitantes entendam rapidamente o perfil e as capacidades técnicas do profissional.

### Público-Alvo
- Recrutadores e gerentes de RH
- Clientes potenciais
- Outros desenvolvedores e profissionais de TI
- Professores e avaliadores acadêmicos

### Proposta Visual
Design **claro e minimalista** com:
- Paleta de cores neutra e profissional (branco, cinzas, azul profissional)
- Tipografia limpa e legível (Source Sans Pro)
- Espaçamento generoso para respirabilidade visual
- Efeitos hover sutis em elementos interativos
- Navegação clara e acessível
- Totalmente responsivo para desktop e mobile

### Conteúdo Principal
- Apresentação pessoal com foto
- Formação acadêmica
- Conhecimentos e competências (tecnologias)
- Projetos realizados com descrição e links
- Experiências profissionais
- Links de contato (email, LinkedIn, GitHub)
- Hobbies e lazer

### Principais Funcionalidades
1. Navegação por seções (menu sticky)
2. Efeitos hover em cards de projetos
3. Links funcionais para contato e redes sociais
4. Formulário de contato com validação
5. Alternância de tema (claro/escuro - toggle)
6. Scroll suave entre seções
7. Ícones para technologies e social media

### Tecnologias Utilizadas
- **HTML 5** - Estrutura semântica
- **CSS 3** - Estilização e responsividade (sem frameworks)
- **JavaScript Vanilla** - Interações e funcionalidades
- **Bootstrap 5** - Únicamente para grid system (permitido)
- **Google Fonts** - Tipografia (Source Sans Pro)

---

## 2. Prompts Utilizados

### Prompt 1: Definição da Estrutura e Conteúdo

**Objetivo:** Obter orientação sobre a melhor estrutura de um portfólio minimalista para desenvolvedor Full Stack.

**Texto Enviado:**
```
Preciso criar um portfólio pessoal para um desenvolvedor Full Stack chamado Breno. 
O design deve ser claro e minimalista. Quais seções são essenciais em um portfólio 
e como organizá-las de forma que recrutadores entendam rapidamente o perfil técnico?
```

**Resultado Obtido:**
Recomendação de seções: Apresentação, Sobre, Tecnologias, Projetos, Experiência, Contato e Rodapé. Sugestão de usar cards para projetos e uma navegação simples.

**Análise Crítica:**
Resposta genérica, mas útil. Precisei adaptar para incluir seções adicionais como Hobbies e tornar o layout mais específico para Full Stack.

**Decisão Tomada:**
Mantive a estrutura sugerida e expandir com seções adicionais conforme exigências do documento. Adicionar links funcionais de contato.

**Ajustes Realizados:**
Incluir seção de habilidades com categorias (Frontend, Backend, Ferramentas), melhorar hierarquia visual das seções.

---

### Prompt 2: Design Minimalista e Acessibilidade

**Objetivo:** Obter recomendações de paleta de cores e tipografia para um portfólio minimalista profissional.

**Texto Enviado:**
```
Qual é uma boa paleta de cores para um portfólio minimalista e profissional? 
Preciso de cores que funcionem bem tanto em desktop quanto em mobile, 
com bom contraste para acessibilidade. Também, qual tipografia você recomenda?
```

**Resultado Obtido:**
Recomendação de paleta neutra (branco, cinzas, uma cor de destaque) e tipografia sans-serif como Open Sans ou Source Sans Pro. Sugestão de testar contraste WCAG AA.

**Análise Crítica:**
Resposta prática e alinhada com princípios de design moderno. Informações sobre acessibilidade foram valiosas.

**Decisão Tomada:**
Usar Source Sans Pro como tipografia principal, paleta com #FFFFFF, #F5F5F5, #333333 e azul profissional #0066CC como destaque.

**Ajustes Realizados:**
Testar contraste em todos os elementos para garantir WCAG AA. Adicionar suporte a modo escuro com toggle.

---

### Prompt 3: Estrutura de Histórias de Usuário

**Objetivo:** Definir formato correto e exemplos de histórias de usuário para um portfólio.

**Texto Enviado:**
```
Como estruturo histórias de usuário para um portfólio pessoal? 
Posso usar o formato "Como [tipo de usuário], quero [ação], para [benefício]"? 
Qual seria um exemplo aplicado a um portfólio de desenvolvedor?
```

**Resultado Obtido:**
Confirmação do formato de história de usuário e exemplos práticos como "Como recrutador, quero visualizar os projetos do desenvolvedor para avaliar suas competências técnicas".

**Análise Crítica:**
Resposta muito útil e diretamente aplicável. Exemplos fornecidos foram adaptados para o contexto.

**Decisão Tomada:**
Usar o formato padrão e criar histórias específicas para cada funcionalidade principal do portfólio.

**Ajustes Realizados:**
Criar 8 histórias de usuário cobrindo todas as seções e funcionalidades principais.

---

### Prompt 4: Interações JavaScript Simples

**Objetivo:** Definir quais interações JavaScript são apropriadas para um portfólio minimalista.

**Texto Enviado:**
```
Quais interações JavaScript são essenciais e não excessivas para um portfólio minimalista? 
Deve ter animações? Menu mobile responsivo? Validação de formulário?
```

**Resultado Obtido:**
Recomendação de incluir: navegação responsiva com menu mobile, scroll suave, validação de formulário e hover states sutis. Evitar animações complexas.

**Análise Crítica:**
Resposta alinhada com o design minimalista. Confirmou que validações de formulário são importantes mesmo em portfólio.

**Decisão Tomada:**
Implementar menu responsivo, scroll suave, validação de formulário de contato, hover states sutis e toggle de tema claro/escuro.

**Ajustes Realizados:**
Adicionar feedback visual ao enviar formulário e armazenar preferência de tema em localStorage.

---

## 3. Histórias de Usuário

### US01 - Visualizar Apresentação Pessoal
**Como** visitante,  
**quero** visualizar uma apresentação clara do desenvolvedor com foto e biografia,  
**para** entender rapidamente quem é Breno e qual é seu perfil profissional.

---

### US02 - Explorar Projetos Realizados
**Como** recrutador,  
**quero** visualizar uma listagem de projetos com título, descrição e tecnologias utilizadas,  
**para** avaliar as competências técnicas e experiência prática do desenvolvedor.

---

### US03 - Conhecer Tecnologias e Habilidades
**Como** cliente potencial,  
**quero** ver quais tecnologias e ferramentas o desenvolvedor domina, organizadas por categoria,  
**para** verificar se suas competências atendem meus requisitos de projeto.

---

### US04 - Acessar Experiências Profissionais
**Como** recrutador,  
**quero** visualizar o histórico de experiências profissionais do desenvolvedor,  
**para** entender sua trajetória e responsabilidades anteriores.

---

### US05 - Conhecer Formação Acadêmica
**Como** avaliador,  
**quero** visualizar a formação e qualificações do desenvolvedor,  
**para** validar sua preparação técnica.

---

### US06 - Fazer Contato Direto
**Como** cliente interessado,  
**quero** enviar uma mensagem ao desenvolvedor através de um formulário,  
**para** iniciar uma conversa sobre possíveis projetos.

---

### US07 - Acessar Perfis Sociais e Repositórios
**Como** outro desenvolvedor,  
**quero** acessar os perfis de GitHub e LinkedIn do Breno,  
**para** conhecer seus projetos e profissional networking.

---

### US08 - Visualizar Portfólio em Dispositivos Móveis
**Como** visitante usando smartphone,  
**quero** que o portfólio se adapte perfeitamente ao meu dispositivo,  
**para** acessar todas as informações sem dificuldade.

---

## 4. Critérios de Aceitação

### US01 - Visualizar Apresentação Pessoal
- [ ] A seção de apresentação está visível no topo da página (after header/navigation)
- [ ] O nome "Breno De Almeida Santos" é exibido de forma destacada
- [ ] Uma foto/avatar é exibida de forma clara e responsiva
- [ ] Uma biografia concisa (2-3 linhas) apresenta o perfil profissional
- [ ] A seção possui ID identificável (#about ou similar)
- [ ] O texto é legível em desktop e mobile
- [ ] A foto possui aspect ratio consistente em todos os dispositivos

---

### US02 - Explorar Projetos Realizados
- [ ] Existe uma seção identificada claramente como "Projetos"
- [ ] Cada projeto é exibido em um card/elemento visual distinct
- [ ] Cada projeto contém: título, descrição (50-100 palavras), tecnologias utilizadas
- [ ] Cada projeto possui links funcionais (se existirem: demo, repositório)
- [ ] Os links abrem em nova aba (target="_blank")
- [ ] A seção é responsiva e adapta-se a mobile (cards em coluna única)
- [ ] Ao menos 3 projetos são exibidos (ou todos os que o desenvolvedor possui)
- [ ] Efeitos hover sutis são aplicados aos cards de projetos

---

### US03 - Conhecer Tecnologias e Habilidades
- [ ] Existe uma seção identificada como "Habilidades" ou "Tecnologias"
- [ ] As habilidades são organizadas por categoria (Frontend, Backend, Ferramentas)
- [ ] Cada tecnologia é claramente nomeada
- [ ] As tecnologias são exibidas de forma visual (badges, tags ou ícones)
- [ ] A lista inclui pelo menos 15-20 tecnologias distribuídas entre categorias
- [ ] A seção é responsiva e adapta-se ao tamanho da tela
- [ ] As categorias são claramente diferenciadas visualmente

---

### US04 - Acessar Experiências Profissionais
- [ ] Existe uma seção de "Experiência" ou "Histórico Profissional"
- [ ] Cada experiência contém: empresa, cargo, período, descrição das responsabilidades
- [ ] As experiências estão listadas em ordem cronológica (mais recente primeiro)
- [ ] O período (datas) é claramente visível
- [ ] A descrição das responsabilidades é concisa mas informativa
- [ ] A seção é legível e bem organizada em mobile

---

### US05 - Conhecer Formação Acadêmica
- [ ] Existe uma seção de "Formação" ou "Educação"
- [ ] Cada formação contém: instituição, curso/grau, ano de conclusão/previsão
- [ ] As informações estão organizadas de forma clara
- [ ] A seção é responsiva

---

### US06 - Fazer Contato Direto
- [ ] Existe um formulário de contato com campos: Nome, Email, Mensagem
- [ ] O campo de email valida formato (deve conter @)
- [ ] O campo de mensagem possui limite de caracteres adequado
- [ ] O botão de envio é claramente identificável
- [ ] Ao clicar em enviar, uma validação é realizada
- [ ] Se validado, uma mensagem de sucesso é exibida ao usuário
- [ ] Se houver erro, uma mensagem clara de erro é exibida
- [ ] O formulário possibilita envio real (ou simulado com feedback visual)

---

### US07 - Acessar Perfis Sociais e Repositórios
- [ ] Existe uma seção de contato/social media (no header, footer ou ambos)
- [ ] Links para GitHub, LinkedIn estão presentes e funcionam
- [ ] Links para email (mailto:) funcionam
- [ ] Cada link possui ícone visual identificável
- [ ] Os links abrem em nova aba ou aplicativo correto
- [ ] Todos os URLs estão corretos e ativos

---

### US08 - Visualizar Portfólio em Dispositivos Móveis
- [ ] O portfólio é responsivo (testado em viewport mínimo de 320px)
- [ ] A navegação é acessível em mobile (menu hamburger ou adaptado)
- [ ] Imagens redimensionam proporcionalmente
- [ ] Textos permanecem legíveis sem zoom
- [ ] Os cards/seções não excedem a largura da tela
- [ ] Espaçamento é apropriado para toque (botões com mínimo 44px)
- [ ] Não há scroll horizontal indesejado

---

## 5. Priorização MoSCoW

| ID | História | Prioridade | Justificativa |
|----|-----------|-----------|----|
| US01 | Visualizar Apresentação Pessoal | **Must Have** | Seção essencial para criar primeira impressão e contextualizar o visitante |
| US02 | Explorar Projetos Realizados | **Must Have** | Elemento central do portfólio que demonstra competência técnica prática |
| US03 | Conhecer Tecnologias e Habilidades | **Must Have** | Informação crítica para recrutadores e clientes avaliarem fit técnico |
| US04 | Acessar Experiências Profissionais | **Should Have** | Importante para comprovar experiência, mas secundário em relação a projetos |
| US05 | Conhecer Formação Acadêmica | **Should Have** | Relevante, mas nem sempre decisória para oportunidades técnicas |
| US06 | Fazer Contato Direto | **Must Have** | Funcionalidade crítica para facilitar comunicação com visitantes |
| US07 | Acessar Perfis Sociais | **Must Have** | Essencial para permitir validação da identidade e histórico profissional |
| US08 | Visualizar em Dispositivos Móveis | **Must Have** | Requisito técnico obrigatório para acessibilidade moderna |

---

## 6. Descrição do MVP

### Produto Mínimo Viável - MVP

O MVP do portfólio é uma página responsiva, funcional e profissional que apresenta o desenvolvedor e suas competências. Ele é o ponto de partida mínimo para que o portfólio seja publicado e receba visitantes.

### Necessidades Atendidas pelo MVP
1. ✅ Apresentação clara da identidade profissional do desenvolvedor
2. ✅ Demonstração de competências técnicas (projetos e habilidades)
3. ✅ Facilitação de contato (formulário e redes sociais)
4. ✅ Acessibilidade em todos os dispositivos (responsividade)

### Seções Disponíveis no MVP
1. **Header/Navigation** - Menu navegável com links para seções principais
2. **Hero/Apresentação** - Seção inicial com foto, nome e tagline
3. **Sobre** - Breve biografia profissional
4. **Projetos** - Listagem com mínimo de 3 projetos principais
5. **Habilidades** - Tecnologias organizadas por categoria
6. **Contato** - Formulário de contato funcional + links sociais
7. **Footer** - Informações de copyright e links adicionais

### Interações Implementadas no MVP
- ✅ Navegação por menu (desktop e mobile com responsividade)
- ✅ Links internos suaves entre seções (scroll suave)
- ✅ Hover states nos cards de projetos
- ✅ Validação e feedback de formulário de contato
- ✅ Toggle de tema claro/escuro (armazenado em localStorage)
- ✅ Menu responsivo com hambúrguer em mobile

### Histórias de Usuário no MVP
- US01: Visualizar Apresentação Pessoal ✅
- US02: Explorar Projetos Realizados ✅
- US03: Conhecer Tecnologias e Habilidades ✅
- US06: Fazer Contato Direto ✅
- US07: Acessar Perfis Sociais ✅
- US08: Visualizar em Dispositivos Móveis ✅

### O que Fica Fora do MVP (Could/Won't Have)
- Blog ou artigos técnicos (Could Have - futura)
- Integração com serviço de email real (Could Have - requer backend)
- Certificações detalhadas (Could Have - futura)
- Seção de "Hobbies e Viagens" - por simplicidade (Could Have)
- Modo escuro totalmente integrado (Could Have - atual tem toggle)

### Condições de Conclusão do MVP
O MVP está concluído quando:
1. ✅ Todas as 6 histórias Must Have (US01, US02, US03, US06, US07, US08) estão implementadas
2. ✅ O código está organizado em arquivos separados (HTML, CSS, JS)
3. ✅ A página é responsiva e funciona em desktop e mobile
4. ✅ Todos os links são funcionais
5. ✅ Formulário de contato valida e fornece feedback
6. ✅ A página respeita as restrições técnicas (HTML5, CSS3, JS vanilla + Bootstrap 5)
7. ✅ Documentação está completa e rastreável

---

## 7. Backlog Acionável

| ID | Item do Backlog | História | Prioridade | Status |
|----|-----------------|----------|-----------|--------|
| BL01 | Criar estrutura HTML semântica base | US08 | Must | ✅ Concluído |
| BL02 | Implementar navegação fixa (header) | US08 | Must | ✅ Concluído |
| BL03 | Criar seção hero com apresentação pessoal | US01 | Must | ✅ Concluído |
| BL04 | Adicionar foto/avatar responsivo | US01 | Must | ✅ Concluído |
| BL05 | Escrever biography/tagline | US01 | Must | ✅ Concluído |
| BL06 | Criar seção "Sobre" com background do desenvolvedor | US01 | Should | ✅ Concluído |
| BL07 | Implementar grid de projetos com cards | US02 | Must | ✅ Concluído |
| BL08 | Adicionar título, descrição e tecnologias em cada projeto | US02 | Must | ✅ Concluído |
| BL09 | Implementar links funcionais (demo/repo) em projetos | US02 | Must | ✅ Concluído |
| BL10 | Criar hover effects nos cards de projetos | US02 | Should | ✅ Concluído |
| BL11 | Implementar seção de habilidades com categorização | US03 | Must | ✅ Concluído |
| BL12 | Organizar tecnologias por categoria (Frontend/Backend/Tools) | US03 | Must | ✅ Concluído |
| BL13 | Estilizar badges/tags de tecnologias | US03 | Should | ✅ Concluído |
| BL14 | Adicionar seção de experiência profissional | US04 | Should | ✅ Concluído |
| BL15 | Listar experiências com empresa, cargo, período, descrição | US04 | Should | ✅ Concluído |
| BL16 | Criar formulário de contato com campos (nome, email, msg) | US06 | Must | ✅ Concluído |
| BL17 | Implementar validação de email e campos obrigatórios | US06 | Must | ✅ Concluído |
| BL18 | Adicionar feedback visual ao submit (mensagem sucesso/erro) | US06 | Must | ✅ Concluído |
| BL19 | Implementar links sociais (GitHub, LinkedIn, Email) | US07 | Must | ✅ Concluído |
| BL20 | Adicionar ícones sociais visuais | US07 | Should | ✅ Concluído |
| BL21 | Implementar design responsivo CSS (mobile-first) | US08 | Must | ✅ Concluído |
| BL22 | Testar navegação responsiva em viewport 320px | US08 | Must | ✅ Concluído |
| BL23 | Criar menu hamburger para mobile | US08 | Must | ✅ Concluído |
| BL24 | Implementar toggle de tema claro/escuro | - | Could | ✅ Concluído |
| BL25 | Adicionar scroll suave entre seções | - | Should | ✅ Concluído |
| BL26 | Criar arquivo README.md com instruções | - | Must | ✅ Concluído |
| BL27 | Organizar código em estrutura pasta/arquivos | - | Must | ✅ Concluído |
| BL28 | Implementar meta tags e SEO básico | - | Should | ✅ Concluído |
| BL29 | Adicionar favicon | - | Could | ✅ Concluído |
| BL30 | Publicar portfólio online | - | Should | ⏳ Pendente |

---

## Resumo Executivo

Este portfólio é um projeto bem definido e documentado que transforma requisitos claros em uma aplicação funcional. Seguindo princípios de desenvolvimento orientado por requisitos, utilizamos IA para apoio no planejamento, resultando em uma solução limpa, responsiva e profissional que atende a todos os critérios de aceitação definidos.

**Desenvolvedor:** Breno De Almeida Santos  
**Data de Criação:** 2024  
**Status:** MVP Concluído
