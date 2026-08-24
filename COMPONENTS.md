# 🎨 Guia de Componentes e Padrões

## Índice
1. [Cores](#cores)
2. [Tipografia](#tipografia)
3. [Componentes](#componentes)
4. [Padrões CSS](#padrões-css)
5. [Padrões JavaScript](#padrões-javascript)

---

## 🎨 Cores

### Paleta Principal

```css
--color-primary: #0066CC;        /* Azul profissional */
--color-primary-light: #E6F0FF;  /* Azul claro */
--color-primary-hover: #0052A3;  /* Azul escuro */
--color-primary-dark: #003D7A;   /* Azul mais escuro */
```

### Paleta Secundária

```css
--color-secondary: #00D9FF;      /* Cyan */
--color-accent: #FF6B6B;         /* Vermelho suave */
```

### Paleta Neutra

```css
--color-white: #FFFFFF;          /* Branco */
--color-light: #F8FAFC;          /* Muito claro */
--color-light-gray: #E2E8F0;     /* Cinza claro */
--color-gray: #94A3B8;           /* Cinza médio */
--color-dark-gray: #475569;      /* Cinza escuro */
--color-dark: #1E293B;           /* Muito escuro */
```

### Paleta Funcional

```css
--color-success: #10B981;        /* Verde */
--color-warning: #F59E0B;        /* Amarelo */
--color-error: #EF4444;          /* Vermelho */
```

### Uso Recomendado

```html
<!-- Elementos principais -->
<button class="btn-primary">Ação Principal</button>

<!-- Elementos secundários -->
<button class="btn-outline-primary">Ação Secundária</button>

<!-- Alertas e mensagens -->
<div class="alert-success">Sucesso!</div>
<div class="alert-error">Erro!</div>
<div class="alert-warning">Atenção!</div>
```

---

## 📝 Tipografia

### Fontes

```css
--font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-size-base: 16px;
--line-height-base: 1.6;
```

### Escalas Recomendadas

```css
/* Headings */
h1 { font-size: 2.5rem;  font-weight: 700; }  /* Títulos principais */
h2 { font-size: 2rem;    font-weight: 700; }  /* Títulos seções */
h3 { font-size: 1.5rem;  font-weight: 700; }  /* Subtítulos */
h4 { font-size: 1.25rem; font-weight: 600; }  /* Labels grandes */
h5 { font-size: 1.1rem;  font-weight: 600; }  /* Labels médios */
h6 { font-size: 1rem;    font-weight: 600; }  /* Labels pequenos */

/* Body */
p  { font-size: 1rem;    font-weight: 400; line-height: 1.8; }
small { font-size: 0.875rem; font-weight: 400; }
.text-muted { color: var(--color-gray); }
```

---

## 🧩 Componentes

### Botões

#### Primário
```html
<button class="btn btn-primary">Enviar</button>
```
**Uso:** Ações principais, CTAs importantes

#### Outline (Secundário)
```html
<button class="btn btn-outline-primary">Saber Mais</button>
```
**Uso:** Ações secundárias, alternativas

#### Link
```html
<a href="#" class="btn-link">GitHub</a>
```
**Uso:** Links internos, navegação

#### Small
```html
<button class="btn btn-primary btn-sm">Ação</button>
```
**Uso:** Espaços compactados

---

### Cards

#### Project Card
```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Título</h3>
        <p class="project-date">2024</p>
    </div>
    <p class="project-description">Descrição...</p>
    <div class="project-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Node.js</span>
    </div>
</div>
```

#### Skill Card
```html
<div class="skill-category">
    <h3 class="skill-title">Frontend</h3>
    <div class="skills-list">
        <span class="skill-badge">HTML5</span>
        <span class="skill-badge">CSS3</span>
    </div>
</div>
```

#### Doc Card
```html
<div class="doc-card">
    <div class="doc-icon">
        <i class="fas fa-file-alt"></i>
    </div>
    <h3>Título</h3>
    <p>Descrição...</p>
</div>
```

---

### Formulário

#### Campo de Texto
```html
<div class="form-group">
    <label for="formName" class="form-label">Nome</label>
    <input type="text" class="form-control" id="formName" name="name">
    <small class="form-error"></small>
</div>
```

#### Classe de Validação
```html
<!-- Válido -->
<input class="form-control is-valid" type="email" value="test@example.com">

<!-- Inválido -->
<input class="form-control is-invalid" type="email" value="invalid">
```

#### Feedback
```html
<div id="formFeedback" class="form-feedback"></div>

<!-- JavaScript -->
<script>
feedback.textContent = 'Mensagem enviada!';
feedback.classList.add('success');
</script>
```

---

### Navbar

```html
<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#home">
            <span class="brand-icon">B</span> Breno
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#sobre">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
```

**Classes Dinâmicas:**
- `.active` - Seção atual
- `.scrolled` - Header com scroll

---

### Timeline

```html
<div class="timeline">
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <h3 class="experience-title">Título</h3>
            <p class="experience-company">Empresa</p>
            <p class="experience-period">Jan 2024 - Dec 2024</p>
            <p class="experience-description">Descrição...</p>
        </div>
    </div>
</div>
```

---

### Social Links

```html
<div class="social-links">
    <a href="https://github.com" target="_blank" class="social-link" title="GitHub">
        <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://linkedin.com" target="_blank" class="social-link" title="LinkedIn">
        <i class="fab fa-linkedin"></i> LinkedIn
    </a>
</div>
```

---

## 🎯 Padrões CSS

### Variáveis CSS
```css
:root {
    --color-primary: #0066CC;
    --spacing-md: 1rem;
    --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Usar Sempre Variáveis
```css
/* ❌ Evitar */
.button {
    background-color: #0066CC;
    padding: 16px;
}

/* ✅ Recomendado */
.button {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
}
```

### Transições Suaves
```css
/* Usar sempre transições predefinidas */
.element {
    transition: all var(--transition-smooth);
}

/* Transições disponíveis */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Gradientes
```css
/* Gradiente Primário */
background: var(--gradient-primary);
/* linear-gradient(135deg, #0066CC 0%, #0052A3 100%) */

/* Gradiente Secundário */
background: var(--gradient-secondary);

/* Gradiente Acento */
background: var(--gradient-accent);
```

### Sombras
```css
/* Usar variáveis de shadow */
box-shadow: var(--shadow-sm);   /* Leve */
box-shadow: var(--shadow-md);   /* Médio */
box-shadow: var(--shadow-lg);   /* Grande */
box-shadow: var(--shadow-xl);   /* Muito Grande */
```

### Media Queries
```css
/* Mobile First */
@media (min-width: 768px) {
    /* Tablets */
}

@media (min-width: 1024px) {
    /* Desktop */
}

@media (min-width: 1440px) {
    /* Desktop Grande */
}
```

---

## 🤖 Padrões JavaScript

### Módulos
```javascript
class MyModule {
    constructor() {
        this.init();
    }

    init() {
        // Inicialização
    }

    method() {
        // Método
    }
}

// Instanciar
new MyModule();
```

### Event Listeners
```javascript
// ✅ Bom
element.addEventListener('click', (e) => this.handleClick(e));

// ❌ Evitar
element.onclick = () => this.handleClick();
```

### Seletor de Elementos
```javascript
// ✅ Usar querySelectorAll para múltiplos
const elements = document.querySelectorAll('.class');
elements.forEach(el => { /* ... */ });

// ✅ Usar querySelector para um
const element = document.querySelector('.class');
```

### Async/Await
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Validação
```javascript
validateField(field) {
    const value = field.value.trim();
    
    if (!value) {
        this.showError(field, 'Campo obrigatório');
        return false;
    }
    
    return true;
}
```

### Armazenamento Local
```javascript
// Salvar
localStorage.setItem('theme', 'dark');

// Recuperar
const theme = localStorage.getItem('theme') || 'light';

// Remover
localStorage.removeItem('theme');
```

---

## 📐 Spacing/Espaçamento

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 3rem     /* 48px */
--spacing-3xl: 4rem     /* 64px */
```

### Uso
```html
<!-- Margin -->
<div class="mt-3">Margem top 48px</div>

<!-- Padding -->
<div class="p-2">Padding 32px</div>
```

---

## 🔄 Padrões de Animação

### Scroll Reveal
```css
.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s var(--transition-smooth), transform 0.6s var(--transition-smooth);
}

.scroll-reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}
```

### Hover Effects
```css
.element:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

### Keyframes
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.element {
    animation: fadeInUp 0.6s var(--transition-smooth) forwards;
}
```

---

## ✅ Checklist de Estilo

- [ ] Usar variáveis CSS para cores
- [ ] Usar transições suaves (var(--transition-smooth))
- [ ] Mobile-first em media queries
- [ ] Sem valores hard-coded
- [ ] Nomes de classe descritivos
- [ ] Comentários em seções maiores
- [ ] Responsividade testada

---

**Última atualização:** 2024  
**Versão:** 1.0.0
