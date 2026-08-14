# Services Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 5 service landing pages (Arquitectura Cloud, Optimización de Costos, Seguridad Cloud, DevOps & CI/CD, AI/ML en AWS) with full ES/EN translations and updated navigation.

**Architecture:** Each service page follows the identical structure of `servicios/aws-migration.html`. All content is internationalized via `data-i18n` attributes with translations in `js/main.js`. Navigation dropdowns and footers are updated across all pages to link to the new service pages.

**Tech Stack:** HTML5, CSS3, JavaScript (vanilla), i18n via data attributes

## Global Constraints

- All text content must use `data-i18n` attributes for internationalization
- Follow existing BEM-style CSS class naming conventions
- Use relative paths from servicios/ folder (e.g., `../assets/`, `../css/`)
- Icons use inline SVG from Lucide icon set
- Maintain accessibility (aria labels, semantic HTML)

---

### Task 1: Create Arquitectura Cloud Landing Page

**Files:**
- Create: `servicios/cloud-architecture.html`
- Reference: `servicios/aws-migration.html` (template)

**Interfaces:**
- Consumes: CSS from `../css/styles.css`, `../css/components.css`, JS from `../js/main.js`
- Produces: Landing page accessible at `servicios/cloud-architecture.html`

- [ ] **Step 1: Copy aws-migration.html as template**

```bash
cp servicios/aws-migration.html servicios/cloud-architecture.html
```

- [ ] **Step 2: Update meta tags and title**

Replace lines 6-7 in `servicios/cloud-architecture.html`:

```html
<meta name="description" content="Arquitectura Cloud — Zervonix. Diseño de arquitecturas AWS escalables y resilientes con Well-Architected Framework.">
<title>Arquitectura Cloud — Zervonix Cloud Consulting</title>
```

- [ ] **Step 3: Update breadcrumb**

Replace breadcrumb span (around line 88):

```html
<span data-i18n="nav.architecture">Arquitectura Cloud</span>
```

- [ ] **Step 4: Update hero badge with git-branch icon**

Replace badge section (around line 91-94):

```html
<span class="badge badge--aws">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
  <span data-i18n="nav.architecture">Arquitectura Cloud</span>
</span>
```

- [ ] **Step 5: Update hero title and description**

Replace hero h1 and p (around lines 96-98):

```html
<h1 style="font-size:clamp(2rem,4vw,3.25rem);font-weight:800;color:var(--color-white);margin-bottom:20px;line-height:1.15" data-i18n="architecture.hero.title">Arquitectura Cloud</h1>
<p style="font-size:1.1rem;color:var(--color-text-secondary);max-width:600px;line-height:1.8;margin-bottom:36px" data-i18n="architecture.hero.desc">Diseñamos arquitecturas AWS escalables, resilientes y optimizadas. Revisión de los 6 pilares del Well-Architected Framework para que tu infraestructura crezca con tu negocio.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="architecture.hero.cta">Agenda una consulta →</a>
```

- [ ] **Step 6: Update "Qué incluye" section**

Replace includes-list items (lines 110-120):

```html
<div class="includes-item" data-i18n="architecture.inc.1">Revisión de arquitectura actual y pain points</div>
<div class="includes-item" data-i18n="architecture.inc.2">Análisis de los 6 pilares Well-Architected</div>
<div class="includes-item" data-i18n="architecture.inc.3">Diseño de arquitectura target con diagramas</div>
<div class="includes-item" data-i18n="architecture.inc.4">Selección de servicios AWS óptimos</div>
<div class="includes-item" data-i18n="architecture.inc.5">Definición de estrategia multi-AZ/multi-región</div>
<div class="includes-item" data-i18n="architecture.inc.6">Diseño de networking (VPC, subnets, conectividad)</div>
<div class="includes-item" data-i18n="architecture.inc.7">Plan de disaster recovery y backup</div>
<div class="includes-item" data-i18n="architecture.inc.8">Estimación de costos de la arquitectura</div>
<div class="includes-item" data-i18n="architecture.inc.9">Documentación técnica y runbooks</div>
<div class="includes-item" data-i18n="architecture.inc.10">Sesión de transferencia de conocimiento</div>
```

- [ ] **Step 7: Update process steps**

Replace process-steps content (lines 131-150):

```html
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">01</div>
  <h3 class="process-step__title" data-i18n="architecture.step1.title">Diagnóstico</h3>
  <p class="process-step__desc" data-i18n="architecture.step1.desc">Evaluación de arquitectura actual, identificación de pain points y definición de objetivos.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">02</div>
  <h3 class="process-step__title" data-i18n="architecture.step2.title">Diseño</h3>
  <p class="process-step__desc" data-i18n="architecture.step2.desc">Arquitectura target con diagramas, selección de servicios y estrategia de implementación.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">03</div>
  <h3 class="process-step__title" data-i18n="architecture.step3.title">Validación</h3>
  <p class="process-step__desc" data-i18n="architecture.step3.desc">Revisión con stakeholders, ajustes y aprobación del diseño final.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">04</div>
  <h3 class="process-step__title" data-i18n="architecture.step4.title">Entrega</h3>
  <p class="process-step__desc" data-i18n="architecture.step4.desc">Documentación completa, runbooks y sesión de transferencia de conocimiento.</p>
</div>
```

- [ ] **Step 8: Update benefits section**

Replace benefits-grid content (lines 162-181):

```html
<div class="benefit-card">
  <div class="benefit-card__metric">99.99%</div>
  <h3 class="benefit-card__title" data-i18n="architecture.ben1.title">Disponibilidad con diseño multi-AZ</h3>
  <p class="benefit-card__desc" data-i18n="architecture.ben1.desc">Arquitecturas distribuidas en múltiples zonas de disponibilidad eliminan puntos únicos de falla.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">40-60%</div>
  <h3 class="benefit-card__title" data-i18n="architecture.ben2.title">Reducción de incidentes</h3>
  <p class="benefit-card__desc" data-i18n="architecture.ben2.desc">Diseño con auto-scaling, health checks y failover automático reduce incidentes operativos.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">3x</div>
  <h3 class="benefit-card__title" data-i18n="architecture.ben3.title">Capacidad de escalar sin rediseñar</h3>
  <p class="benefit-card__desc" data-i18n="architecture.ben3.desc">Arquitecturas modulares y desacopladas permiten escalar componentes independientemente.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">50%</div>
  <h3 class="benefit-card__title" data-i18n="architecture.ben4.title">Menos tiempo en troubleshooting</h3>
  <p class="benefit-card__desc" data-i18n="architecture.ben4.desc">Observabilidad integrada y arquitectura clara reduce tiempo de diagnóstico.</p>
</div>
```

- [ ] **Step 9: Update audience section**

Replace the 4 audience cards (lines 193-220) with architecture-specific audiences. Use building icon for startups, layers icon for legacy, users icon for teams without architect, rocket icon for greenfield:

```html
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="architecture.aud1.title">Startups en crecimiento</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="architecture.aud1.desc">Necesitan arquitectura que escale con su producto sin reescribir todo.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="architecture.aud2.title">Empresas con arquitectura legacy</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="architecture.aud2.desc">Sistemas monolíticos que necesitan modernización gradual.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="architecture.aud3.title">Equipos sin arquitecto cloud</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="architecture.aud3.desc">Desarrolladores que necesitan guía para decisiones de infraestructura.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="architecture.aud4.title">Proyectos greenfield</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="architecture.aud4.desc">Nuevos proyectos que quieren empezar con las mejores prácticas desde día uno.</p>
</div>
```

- [ ] **Step 10: Update CTA section**

Replace CTA title and button (lines 229-231):

```html
<h2 class="cta-final__title" data-i18n="architecture.cta.title">¿Listo para diseñar tu arquitectura?</h2>
<p class="cta-final__subtitle" data-i18n="cta.subtitle">Hablemos de tu proyecto. Primera consulta sin costo.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="architecture.cta.btn">Hablemos de tu arquitectura →</a>
```

- [ ] **Step 11: Verify file renders correctly**

Open `servicios/cloud-architecture.html` in browser and verify:
- Page loads without errors
- All sections display correctly
- Navigation works
- CTA buttons link to contacto.html

- [ ] **Step 12: Commit**

```bash
git add servicios/cloud-architecture.html
git commit -m "feat: add Arquitectura Cloud landing page"
```

---

### Task 2: Create Optimización de Costos Landing Page

**Files:**
- Create: `servicios/cost-optimization.html`
- Reference: `servicios/cloud-architecture.html` (template)

**Interfaces:**
- Consumes: CSS from `../css/styles.css`, `../css/components.css`, JS from `../js/main.js`
- Produces: Landing page accessible at `servicios/cost-optimization.html`

- [ ] **Step 1: Copy cloud-architecture.html as template**

```bash
cp servicios/cloud-architecture.html servicios/cost-optimization.html
```

- [ ] **Step 2: Update meta tags and title**

```html
<meta name="description" content="Optimización de Costos AWS — Zervonix. FinOps, rightsizing y Reserved Instances para reducir tu factura cloud.">
<title>Optimización de Costos — Zervonix Cloud Consulting</title>
```

- [ ] **Step 3: Update breadcrumb**

```html
<span data-i18n="nav.costs">Optimización de Costos</span>
```

- [ ] **Step 4: Update hero badge with trending-down icon**

```html
<span class="badge badge--aws">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
  <span data-i18n="nav.costs">Optimización de Costos</span>
</span>
```

- [ ] **Step 5: Update hero content**

```html
<h1 style="font-size:clamp(2rem,4vw,3.25rem);font-weight:800;color:var(--color-white);margin-bottom:20px;line-height:1.15" data-i18n="costs.hero.title">Optimización de Costos</h1>
<p style="font-size:1.1rem;color:var(--color-text-secondary);max-width:600px;line-height:1.8;margin-bottom:36px" data-i18n="costs.hero.desc">Reduce tu factura AWS sin sacrificar rendimiento. Identificamos desperdicio, implementamos FinOps y maximizamos el valor de cada dólar en la nube.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="costs.hero.cta">Agenda una consulta →</a>
```

- [ ] **Step 6: Update "Qué incluye" section**

```html
<div class="includes-item" data-i18n="costs.inc.1">Análisis detallado de facturación AWS actual</div>
<div class="includes-item" data-i18n="costs.inc.2">Identificación de recursos sin uso o sobredimensionados</div>
<div class="includes-item" data-i18n="costs.inc.3">Estrategia de Reserved Instances y Savings Plans</div>
<div class="includes-item" data-i18n="costs.inc.4">Implementación de tagging para cost allocation</div>
<div class="includes-item" data-i18n="costs.inc.5">Configuración de alertas y budgets</div>
<div class="includes-item" data-i18n="costs.inc.6">Rightsizing de instancias EC2 y RDS</div>
<div class="includes-item" data-i18n="costs.inc.7">Optimización de almacenamiento (S3, EBS)</div>
<div class="includes-item" data-i18n="costs.inc.8">Revisión de transferencia de datos y networking</div>
<div class="includes-item" data-i18n="costs.inc.9">Dashboard de costos en tiempo real</div>
<div class="includes-item" data-i18n="costs.inc.10">Plan de governance y políticas de costos</div>
```

- [ ] **Step 7: Update process steps**

```html
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">01</div>
  <h3 class="process-step__title" data-i18n="costs.step1.title">Análisis</h3>
  <p class="process-step__desc" data-i18n="costs.step1.desc">Revisión detallada de facturación, identificación de patrones y anomalías de gasto.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">02</div>
  <h3 class="process-step__title" data-i18n="costs.step2.title">Identificación</h3>
  <p class="process-step__desc" data-i18n="costs.step2.desc">Mapeo de quick wins, recursos sin uso y oportunidades de optimización.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">03</div>
  <h3 class="process-step__title" data-i18n="costs.step3.title">Implementación</h3>
  <p class="process-step__desc" data-i18n="costs.step3.desc">Rightsizing, Reserved Instances, tagging y configuración de alertas.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">04</div>
  <h3 class="process-step__title" data-i18n="costs.step4.title">Monitoreo</h3>
  <p class="process-step__desc" data-i18n="costs.step4.desc">Dashboard de costos, reportes periódicos y governance continuo.</p>
</div>
```

- [ ] **Step 8: Update benefits section**

```html
<div class="benefit-card">
  <div class="benefit-card__metric">25-40%</div>
  <h3 class="benefit-card__title" data-i18n="costs.ben1.title">Reducción promedio en factura AWS</h3>
  <p class="benefit-card__desc" data-i18n="costs.ben1.desc">Combinando rightsizing, Reserved Instances y eliminación de desperdicio.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">72hrs</div>
  <h3 class="benefit-card__title" data-i18n="costs.ben2.title">Tiempo para identificar quick wins</h3>
  <p class="benefit-card__desc" data-i18n="costs.ben2.desc">Análisis inicial identifica ahorros inmediatos en las primeras 72 horas.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">100%</div>
  <h3 class="benefit-card__title" data-i18n="costs.ben3.title">Visibilidad de costos por proyecto</h3>
  <p class="benefit-card__desc" data-i18n="costs.ben3.desc">Tagging y cost allocation permiten saber exactamente qué consume cada área.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">ROI 5x</div>
  <h3 class="benefit-card__title" data-i18n="costs.ben4.title">Retorno típico del proyecto</h3>
  <p class="benefit-card__desc" data-i18n="costs.ben4.desc">El ahorro generado supera ampliamente la inversión en el proyecto.</p>
</div>
```

- [ ] **Step 9: Update audience section**

Use dollar icon for growing bill, eye-off for no visibility, building for multi-account, chart for CFO:

```html
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="costs.aud1.title">Empresas con factura AWS creciente</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="costs.aud1.desc">La factura crece más rápido que el negocio y no saben por qué.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="costs.aud2.title">Equipos sin visibilidad de costos</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="costs.aud2.desc">No pueden responder cuánto cuesta cada aplicación o ambiente.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="costs.aud3.title">Organizaciones con múltiples cuentas</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="costs.aud3.desc">AWS Organizations sin governance de costos centralizado.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="costs.aud4.title">CFOs buscando eficiencia</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="costs.aud4.desc">Presión por reducir costos operativos sin afectar el negocio.</p>
</div>
```

- [ ] **Step 10: Update CTA section**

```html
<h2 class="cta-final__title" data-i18n="costs.cta.title">¿Listo para optimizar tus costos?</h2>
<p class="cta-final__subtitle" data-i18n="cta.subtitle">Hablemos de tu proyecto. Primera consulta sin costo.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="costs.cta.btn">Hablemos de tu optimización →</a>
```

- [ ] **Step 11: Verify and commit**

```bash
git add servicios/cost-optimization.html
git commit -m "feat: add Optimización de Costos landing page"
```

---

### Task 3: Create Seguridad Cloud Landing Page

**Files:**
- Create: `servicios/cloud-security.html`

**Interfaces:**
- Consumes: CSS, JS from parent directory
- Produces: Landing page at `servicios/cloud-security.html`

- [ ] **Step 1: Copy template**

```bash
cp servicios/cost-optimization.html servicios/cloud-security.html
```

- [ ] **Step 2: Update meta tags**

```html
<meta name="description" content="Seguridad Cloud AWS — Zervonix. IAM, detección de amenazas, compliance y respuesta a incidentes para proteger tu infraestructura.">
<title>Seguridad Cloud — Zervonix Cloud Consulting</title>
```

- [ ] **Step 3: Update breadcrumb**

```html
<span data-i18n="nav.security">Seguridad Cloud</span>
```

- [ ] **Step 4: Update hero badge with shield-check icon**

```html
<span class="badge badge--aws">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  <span data-i18n="nav.security">Seguridad Cloud</span>
</span>
```

- [ ] **Step 5: Update hero content**

```html
<h1 style="font-size:clamp(2rem,4vw,3.25rem);font-weight:800;color:var(--color-white);margin-bottom:20px;line-height:1.15" data-i18n="security.hero.title">Seguridad Cloud</h1>
<p style="font-size:1.1rem;color:var(--color-text-secondary);max-width:600px;line-height:1.8;margin-bottom:36px" data-i18n="security.hero.desc">Protege tu infraestructura AWS con controles de seguridad enterprise. IAM, detección de amenazas, compliance y respuesta a incidentes alineados a frameworks como SOC 2 e ISO 27001.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="security.hero.cta">Agenda una consulta →</a>
```

- [ ] **Step 6: Update includes**

```html
<div class="includes-item" data-i18n="security.inc.1">Assessment de seguridad actual y gap analysis</div>
<div class="includes-item" data-i18n="security.inc.2">Diseño e implementación de IAM con least-privilege</div>
<div class="includes-item" data-i18n="security.inc.3">Configuración de AWS Security Hub y GuardDuty</div>
<div class="includes-item" data-i18n="security.inc.4">Hardening de recursos (EC2, S3, RDS)</div>
<div class="includes-item" data-i18n="security.inc.5">Implementación de cifrado en reposo y tránsito</div>
<div class="includes-item" data-i18n="security.inc.6">Configuración de CloudTrail y logging centralizado</div>
<div class="includes-item" data-i18n="security.inc.7">Políticas de seguridad y SCPs para Organizations</div>
<div class="includes-item" data-i18n="security.inc.8">Plan de respuesta a incidentes</div>
<div class="includes-item" data-i18n="security.inc.9">Remediación de hallazgos críticos</div>
<div class="includes-item" data-i18n="security.inc.10">Documentación para auditorías de compliance</div>
```

- [ ] **Step 7: Update process steps**

```html
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">01</div>
  <h3 class="process-step__title" data-i18n="security.step1.title">Assessment</h3>
  <p class="process-step__desc" data-i18n="security.step1.desc">Evaluación de postura de seguridad actual, gap analysis contra frameworks de compliance.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">02</div>
  <h3 class="process-step__title" data-i18n="security.step2.title">Diseño</h3>
  <p class="process-step__desc" data-i18n="security.step2.desc">Arquitectura de seguridad, políticas IAM y estrategia de detección de amenazas.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">03</div>
  <h3 class="process-step__title" data-i18n="security.step3.title">Hardening</h3>
  <p class="process-step__desc" data-i18n="security.step3.desc">Implementación de controles, cifrado, logging y remediación de hallazgos.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">04</div>
  <h3 class="process-step__title" data-i18n="security.step4.title">Monitoreo</h3>
  <p class="process-step__desc" data-i18n="security.step4.desc">Detección continua de amenazas, alertas y plan de respuesta a incidentes.</p>
</div>
```

- [ ] **Step 8: Update benefits**

```html
<div class="benefit-card">
  <div class="benefit-card__metric">90%</div>
  <h3 class="benefit-card__title" data-i18n="security.ben1.title">Reducción de hallazgos críticos</h3>
  <p class="benefit-card__desc" data-i18n="security.ben1.desc">Remediación sistemática de vulnerabilidades y misconfigurations.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">24/7</div>
  <h3 class="benefit-card__title" data-i18n="security.ben2.title">Detección automatizada de amenazas</h3>
  <p class="benefit-card__desc" data-i18n="security.ben2.desc">GuardDuty y Security Hub monitorean continuamente tu infraestructura.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">100%</div>
  <h3 class="benefit-card__title" data-i18n="security.ben3.title">Cobertura de logs para auditoría</h3>
  <p class="benefit-card__desc" data-i18n="security.ben3.desc">CloudTrail y logging centralizado para cumplir requisitos de compliance.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">80%</div>
  <h3 class="benefit-card__title" data-i18n="security.ben4.title">Menos tiempo en preparación de compliance</h3>
  <p class="benefit-card__desc" data-i18n="security.ben4.desc">Documentación y controles listos para auditorías SOC 2, ISO 27001.</p>
</div>
```

- [ ] **Step 9: Update audience**

Use landmark icon for regulated industries, award for certifications, alert for post-incident, briefcase for enterprise startups:

```html
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="security.aud1.title">Empresas en industrias reguladas</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="security.aud1.desc">Finanzas, salud, seguros con requisitos estrictos de compliance.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="security.aud2.title">Equipos preparando certificaciones</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="security.aud2.desc">Necesitan SOC 2, ISO 27001 o PCI-DSS para cerrar ventas enterprise.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="security.aud3.title">Organizaciones post-incidente</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="security.aud3.desc">Sufrieron un breach y necesitan fortalecer su postura de seguridad.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="security.aud4.title">Startups con clientes enterprise</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="security.aud4.desc">Prospects piden evidencia de controles de seguridad para comprar.</p>
</div>
```

- [ ] **Step 10: Update CTA**

```html
<h2 class="cta-final__title" data-i18n="security.cta.title">¿Listo para fortalecer tu seguridad?</h2>
<p class="cta-final__subtitle" data-i18n="cta.subtitle">Hablemos de tu proyecto. Primera consulta sin costo.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="security.cta.btn">Hablemos de tu seguridad →</a>
```

- [ ] **Step 11: Commit**

```bash
git add servicios/cloud-security.html
git commit -m "feat: add Seguridad Cloud landing page"
```

---

### Task 4: Create DevOps & CI/CD Landing Page

**Files:**
- Create: `servicios/devops-cicd.html`

- [ ] **Step 1: Copy template**

```bash
cp servicios/cloud-security.html servicios/devops-cicd.html
```

- [ ] **Step 2: Update meta tags**

```html
<meta name="description" content="DevOps &amp; CI/CD en AWS — Zervonix. Pipelines automatizados, Terraform, CDK y Kubernetes para acelerar tu delivery.">
<title>DevOps &amp; CI/CD — Zervonix Cloud Consulting</title>
```

- [ ] **Step 3: Update breadcrumb**

```html
<span data-i18n="nav.devops">DevOps &amp; CI/CD</span>
```

- [ ] **Step 4: Update hero badge with git-merge icon**

```html
<span class="badge badge--aws">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
  <span data-i18n="nav.devops">DevOps &amp; CI/CD</span>
</span>
```

- [ ] **Step 5: Update hero content**

```html
<h1 style="font-size:clamp(2rem,4vw,3.25rem);font-weight:800;color:var(--color-white);margin-bottom:20px;line-height:1.15" data-i18n="devops.hero.title">DevOps &amp; CI/CD</h1>
<p style="font-size:1.1rem;color:var(--color-text-secondary);max-width:600px;line-height:1.8;margin-bottom:36px" data-i18n="devops.hero.desc">Acelera tu delivery con pipelines automatizados e infraestructura como código. CI/CD, Terraform, CDK y Kubernetes para que tu equipo despliegue con confianza.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="devops.hero.cta">Agenda una consulta →</a>
```

- [ ] **Step 6: Update includes**

```html
<div class="includes-item" data-i18n="devops.inc.1">Assessment de madurez DevOps actual</div>
<div class="includes-item" data-i18n="devops.inc.2">Diseño de pipelines CI/CD (CodePipeline, GitHub Actions)</div>
<div class="includes-item" data-i18n="devops.inc.3">Implementación de Infrastructure as Code (Terraform/CDK)</div>
<div class="includes-item" data-i18n="devops.inc.4">Configuración de ambientes (dev, staging, prod)</div>
<div class="includes-item" data-i18n="devops.inc.5">Containerización con Docker y ECR</div>
<div class="includes-item" data-i18n="devops.inc.6">Orquestación con EKS o ECS</div>
<div class="includes-item" data-i18n="devops.inc.7">Implementación de GitOps y branching strategy</div>
<div class="includes-item" data-i18n="devops.inc.8">Monitoreo con CloudWatch, X-Ray y alertas</div>
<div class="includes-item" data-i18n="devops.inc.9">Runbooks y documentación operativa</div>
<div class="includes-item" data-i18n="devops.inc.10">Capacitación al equipo de desarrollo</div>
```

- [ ] **Step 7: Update process steps**

```html
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">01</div>
  <h3 class="process-step__title" data-i18n="devops.step1.title">Assessment</h3>
  <p class="process-step__desc" data-i18n="devops.step1.desc">Evaluación de madurez DevOps, tooling actual y pain points del equipo.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">02</div>
  <h3 class="process-step__title" data-i18n="devops.step2.title">Diseño</h3>
  <p class="process-step__desc" data-i18n="devops.step2.desc">Arquitectura de pipelines, estrategia de IaC y flujo de trabajo GitOps.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">03</div>
  <h3 class="process-step__title" data-i18n="devops.step3.title">Implementación</h3>
  <p class="process-step__desc" data-i18n="devops.step3.desc">Pipelines CI/CD, containerización, ambientes y monitoreo.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">04</div>
  <h3 class="process-step__title" data-i18n="devops.step4.title">Capacitación</h3>
  <p class="process-step__desc" data-i18n="devops.step4.desc">Transferencia de conocimiento, runbooks y acompañamiento inicial.</p>
</div>
```

- [ ] **Step 8: Update benefits**

```html
<div class="benefit-card">
  <div class="benefit-card__metric">10x</div>
  <h3 class="benefit-card__title" data-i18n="devops.ben1.title">Más despliegues por semana</h3>
  <p class="benefit-card__desc" data-i18n="devops.ben1.desc">Pipelines automatizados eliminan cuellos de botella en el proceso de release.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">95%</div>
  <h3 class="benefit-card__title" data-i18n="devops.ben2.title">Reducción de errores manuales</h3>
  <p class="benefit-card__desc" data-i18n="devops.ben2.desc">IaC y automatización eliminan errores humanos en configuración y deploy.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">15min</div>
  <h3 class="benefit-card__title" data-i18n="devops.ben3.title">Tiempo promedio de deploy</h3>
  <p class="benefit-card__desc" data-i18n="devops.ben3.desc">De commit a producción en minutos, no horas o días.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">70%</div>
  <h3 class="benefit-card__title" data-i18n="devops.ben4.title">Menos tiempo en tareas operativas</h3>
  <p class="benefit-card__desc" data-i18n="devops.ben4.desc">El equipo dedica más tiempo a features y menos a operaciones manuales.</p>
</div>
```

- [ ] **Step 9: Update audience**

Use hand icon for manual deploys, trending-up for scaling, boxes for microservices, zap for CTOs:

```html
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="devops.aud1.title">Equipos con deploys manuales</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="devops.aud1.desc">Procesos de release lentos, propensos a errores y que dependen de una persona.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="devops.aud2.title">Startups escalando desarrollo</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="devops.aud2.desc">Necesitan infraestructura que soporte más desarrolladores y más features.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="devops.aud3.title">Empresas adoptando microservicios</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="devops.aud3.desc">Transición de monolito a microservicios requiere pipelines maduros.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="devops.aud4.title">CTOs buscando agilidad</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="devops.aud4.desc">Presión por entregar más rápido sin sacrificar calidad o estabilidad.</p>
</div>
```

- [ ] **Step 10: Update CTA**

```html
<h2 class="cta-final__title" data-i18n="devops.cta.title">¿Listo para acelerar tu delivery?</h2>
<p class="cta-final__subtitle" data-i18n="cta.subtitle">Hablemos de tu proyecto. Primera consulta sin costo.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="devops.cta.btn">Hablemos de tu DevOps →</a>
```

- [ ] **Step 11: Commit**

```bash
git add servicios/devops-cicd.html
git commit -m "feat: add DevOps & CI/CD landing page"
```

---

### Task 5: Create AI / ML en AWS Landing Page

**Files:**
- Create: `servicios/ai-ml-aws.html`

- [ ] **Step 1: Copy template**

```bash
cp servicios/devops-cicd.html servicios/ai-ml-aws.html
```

- [ ] **Step 2: Update meta tags**

```html
<meta name="description" content="AI / ML en AWS — Zervonix. SageMaker, Bedrock y GenAI para integrar inteligencia artificial en tus procesos de negocio.">
<title>AI / ML en AWS — Zervonix Cloud Consulting</title>
```

- [ ] **Step 3: Update breadcrumb**

```html
<span data-i18n="nav.aiml">AI / ML en AWS</span>
```

- [ ] **Step 4: Update hero badge with brain icon**

```html
<span class="badge badge--aws">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
  <span data-i18n="nav.aiml">AI / ML en AWS</span>
</span>
```

- [ ] **Step 5: Update hero content**

```html
<h1 style="font-size:clamp(2rem,4vw,3.25rem);font-weight:800;color:var(--color-white);margin-bottom:20px;line-height:1.15" data-i18n="aiml.hero.title">AI / ML en AWS</h1>
<p style="font-size:1.1rem;color:var(--color-text-secondary);max-width:600px;line-height:1.8;margin-bottom:36px" data-i18n="aiml.hero.desc">Integra inteligencia artificial en tus procesos con SageMaker, Bedrock y servicios de AI de AWS. Desde PoC hasta producción, con MLOps para mantener tus modelos actualizados.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="aiml.hero.cta">Agenda una consulta →</a>
```

- [ ] **Step 6: Update includes**

```html
<div class="includes-item" data-i18n="aiml.inc.1">Discovery de casos de uso de AI/ML en tu negocio</div>
<div class="includes-item" data-i18n="aiml.inc.2">Evaluación de datos disponibles y calidad</div>
<div class="includes-item" data-i18n="aiml.inc.3">Diseño de arquitectura ML en AWS</div>
<div class="includes-item" data-i18n="aiml.inc.4">Desarrollo de PoC/MVP con SageMaker o Bedrock</div>
<div class="includes-item" data-i18n="aiml.inc.5">Integración con APIs de AI (Rekognition, Comprehend, Textract)</div>
<div class="includes-item" data-i18n="aiml.inc.6">Implementación de pipelines MLOps</div>
<div class="includes-item" data-i18n="aiml.inc.7">Despliegue de modelos en producción</div>
<div class="includes-item" data-i18n="aiml.inc.8">Monitoreo de drift y performance de modelos</div>
<div class="includes-item" data-i18n="aiml.inc.9">Integración con aplicaciones existentes</div>
<div class="includes-item" data-i18n="aiml.inc.10">Transferencia de conocimiento al equipo</div>
```

- [ ] **Step 7: Update process steps**

```html
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">01</div>
  <h3 class="process-step__title" data-i18n="aiml.step1.title">Discovery</h3>
  <p class="process-step__desc" data-i18n="aiml.step1.desc">Identificación de casos de uso de AI/ML con mayor impacto en el negocio.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">02</div>
  <h3 class="process-step__title" data-i18n="aiml.step2.title">PoC</h3>
  <p class="process-step__desc" data-i18n="aiml.step2.desc">Desarrollo rápido de prueba de concepto para validar viabilidad técnica.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">03</div>
  <h3 class="process-step__title" data-i18n="aiml.step3.title">Producción</h3>
  <p class="process-step__desc" data-i18n="aiml.step3.desc">Despliegue de modelos con infraestructura escalable y monitoreo.</p>
</div>
<div class="process-step">
  <div class="process-step__num" aria-hidden="true">04</div>
  <h3 class="process-step__title" data-i18n="aiml.step4.title">MLOps</h3>
  <p class="process-step__desc" data-i18n="aiml.step4.desc">Pipelines de reentrenamiento, monitoreo de drift y mejora continua.</p>
</div>
```

- [ ] **Step 8: Update benefits**

```html
<div class="benefit-card">
  <div class="benefit-card__metric">60%</div>
  <h3 class="benefit-card__title" data-i18n="aiml.ben1.title">Automatización de tareas repetitivas</h3>
  <p class="benefit-card__desc" data-i18n="aiml.ben1.desc">AI procesa documentos, imágenes y texto que antes requerían trabajo manual.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric" data-i18n="aiml.ben2.metric">3 semanas</div>
  <h3 class="benefit-card__title" data-i18n="aiml.ben2.title">Tiempo promedio de PoC a demo</h3>
  <p class="benefit-card__desc" data-i18n="aiml.ben2.desc">Validación rápida de casos de uso antes de invertir en implementación completa.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">85%</div>
  <h3 class="benefit-card__title" data-i18n="aiml.ben3.title">Precisión típica en modelos</h3>
  <p class="benefit-card__desc" data-i18n="aiml.ben3.desc">Modelos entrenados con datos de calidad alcanzan precisión production-ready.</p>
</div>
<div class="benefit-card">
  <div class="benefit-card__metric">40%</div>
  <h3 class="benefit-card__title" data-i18n="aiml.ben4.title">Reducción de procesamiento manual</h3>
  <p class="benefit-card__desc" data-i18n="aiml.ben4.desc">Automatización de workflows que antes consumían horas de trabajo humano.</p>
</div>
```

- [ ] **Step 9: Update audience**

Use compass for exploring AI, database for untapped data, repeat for manual processes, sparkles for GenAI:

```html
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="aiml.aud1.title">Empresas explorando AI</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="aiml.aud1.desc">Saben que AI puede ayudar pero no saben por dónde empezar.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="aiml.aud2.title">Equipos con datos sin explotar</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="aiml.aud2.desc">Tienen datos valiosos pero no los están usando para tomar decisiones.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="aiml.aud3.title">Organizaciones con procesos manuales</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="aiml.aud3.desc">Tareas repetitivas que consumen tiempo y podrían automatizarse.</p>
</div>
<div style="padding:20px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:10px">
  <div style="margin-bottom:10px" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
  </div>
  <h3 style="font-size:0.95rem;font-weight:700;color:var(--color-white);margin-bottom:6px" data-i18n="aiml.aud4.title">CTOs evaluando GenAI</h3>
  <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.6" data-i18n="aiml.aud4.desc">Quieren entender cómo Bedrock y LLMs pueden integrarse a sus productos.</p>
</div>
```

- [ ] **Step 10: Update CTA**

```html
<h2 class="cta-final__title" data-i18n="aiml.cta.title">¿Listo para integrar AI en tu negocio?</h2>
<p class="cta-final__subtitle" data-i18n="cta.subtitle">Hablemos de tu proyecto. Primera consulta sin costo.</p>
<a href="../contacto.html" class="btn btn--primary btn--large" data-i18n="aiml.cta.btn">Hablemos de tu proyecto AI →</a>
```

- [ ] **Step 11: Commit**

```bash
git add servicios/ai-ml-aws.html
git commit -m "feat: add AI / ML en AWS landing page"
```

---

### Task 6: Add All Translations to main.js

**Files:**
- Modify: `js/main.js` (translations object, lines 6-617)

**Interfaces:**
- Consumes: i18n keys from all 5 new service pages
- Produces: Complete translations for ES and EN

- [ ] **Step 1: Add Arquitectura Cloud translations (ES)**

Add after line 179 (after migration translations) in the `es` object:

```javascript
// Arquitectura Cloud
'architecture.hero.title': 'Arquitectura Cloud',
'architecture.hero.desc': 'Diseñamos arquitecturas AWS escalables, resilientes y optimizadas. Revisión de los 6 pilares del Well-Architected Framework para que tu infraestructura crezca con tu negocio.',
'architecture.hero.cta': 'Agenda una consulta →',
'architecture.inc.1': 'Revisión de arquitectura actual y pain points',
'architecture.inc.2': 'Análisis de los 6 pilares Well-Architected',
'architecture.inc.3': 'Diseño de arquitectura target con diagramas',
'architecture.inc.4': 'Selección de servicios AWS óptimos',
'architecture.inc.5': 'Definición de estrategia multi-AZ/multi-región',
'architecture.inc.6': 'Diseño de networking (VPC, subnets, conectividad)',
'architecture.inc.7': 'Plan de disaster recovery y backup',
'architecture.inc.8': 'Estimación de costos de la arquitectura',
'architecture.inc.9': 'Documentación técnica y runbooks',
'architecture.inc.10': 'Sesión de transferencia de conocimiento',
'architecture.step1.title': 'Diagnóstico',
'architecture.step1.desc': 'Evaluación de arquitectura actual, identificación de pain points y definición de objetivos.',
'architecture.step2.title': 'Diseño',
'architecture.step2.desc': 'Arquitectura target con diagramas, selección de servicios y estrategia de implementación.',
'architecture.step3.title': 'Validación',
'architecture.step3.desc': 'Revisión con stakeholders, ajustes y aprobación del diseño final.',
'architecture.step4.title': 'Entrega',
'architecture.step4.desc': 'Documentación completa, runbooks y sesión de transferencia de conocimiento.',
'architecture.ben1.title': 'Disponibilidad con diseño multi-AZ',
'architecture.ben1.desc': 'Arquitecturas distribuidas en múltiples zonas de disponibilidad eliminan puntos únicos de falla.',
'architecture.ben2.title': 'Reducción de incidentes',
'architecture.ben2.desc': 'Diseño con auto-scaling, health checks y failover automático reduce incidentes operativos.',
'architecture.ben3.title': 'Capacidad de escalar sin rediseñar',
'architecture.ben3.desc': 'Arquitecturas modulares y desacopladas permiten escalar componentes independientemente.',
'architecture.ben4.title': 'Menos tiempo en troubleshooting',
'architecture.ben4.desc': 'Observabilidad integrada y arquitectura clara reduce tiempo de diagnóstico.',
'architecture.aud1.title': 'Startups en crecimiento',
'architecture.aud1.desc': 'Necesitan arquitectura que escale con su producto sin reescribir todo.',
'architecture.aud2.title': 'Empresas con arquitectura legacy',
'architecture.aud2.desc': 'Sistemas monolíticos que necesitan modernización gradual.',
'architecture.aud3.title': 'Equipos sin arquitecto cloud',
'architecture.aud3.desc': 'Desarrolladores que necesitan guía para decisiones de infraestructura.',
'architecture.aud4.title': 'Proyectos greenfield',
'architecture.aud4.desc': 'Nuevos proyectos que quieren empezar con las mejores prácticas desde día uno.',
'architecture.cta.title': '¿Listo para diseñar tu arquitectura?',
'architecture.cta.btn': 'Hablemos de tu arquitectura →',
```

- [ ] **Step 2: Add Optimización de Costos translations (ES)**

```javascript
// Optimización de Costos
'costs.hero.title': 'Optimización de Costos',
'costs.hero.desc': 'Reduce tu factura AWS sin sacrificar rendimiento. Identificamos desperdicio, implementamos FinOps y maximizamos el valor de cada dólar en la nube.',
'costs.hero.cta': 'Agenda una consulta →',
'costs.inc.1': 'Análisis detallado de facturación AWS actual',
'costs.inc.2': 'Identificación de recursos sin uso o sobredimensionados',
'costs.inc.3': 'Estrategia de Reserved Instances y Savings Plans',
'costs.inc.4': 'Implementación de tagging para cost allocation',
'costs.inc.5': 'Configuración de alertas y budgets',
'costs.inc.6': 'Rightsizing de instancias EC2 y RDS',
'costs.inc.7': 'Optimización de almacenamiento (S3, EBS)',
'costs.inc.8': 'Revisión de transferencia de datos y networking',
'costs.inc.9': 'Dashboard de costos en tiempo real',
'costs.inc.10': 'Plan de governance y políticas de costos',
'costs.step1.title': 'Análisis',
'costs.step1.desc': 'Revisión detallada de facturación, identificación de patrones y anomalías de gasto.',
'costs.step2.title': 'Identificación',
'costs.step2.desc': 'Mapeo de quick wins, recursos sin uso y oportunidades de optimización.',
'costs.step3.title': 'Implementación',
'costs.step3.desc': 'Rightsizing, Reserved Instances, tagging y configuración de alertas.',
'costs.step4.title': 'Monitoreo',
'costs.step4.desc': 'Dashboard de costos, reportes periódicos y governance continuo.',
'costs.ben1.title': 'Reducción promedio en factura AWS',
'costs.ben1.desc': 'Combinando rightsizing, Reserved Instances y eliminación de desperdicio.',
'costs.ben2.title': 'Tiempo para identificar quick wins',
'costs.ben2.desc': 'Análisis inicial identifica ahorros inmediatos en las primeras 72 horas.',
'costs.ben3.title': 'Visibilidad de costos por proyecto',
'costs.ben3.desc': 'Tagging y cost allocation permiten saber exactamente qué consume cada área.',
'costs.ben4.title': 'Retorno típico del proyecto',
'costs.ben4.desc': 'El ahorro generado supera ampliamente la inversión en el proyecto.',
'costs.aud1.title': 'Empresas con factura AWS creciente',
'costs.aud1.desc': 'La factura crece más rápido que el negocio y no saben por qué.',
'costs.aud2.title': 'Equipos sin visibilidad de costos',
'costs.aud2.desc': 'No pueden responder cuánto cuesta cada aplicación o ambiente.',
'costs.aud3.title': 'Organizaciones con múltiples cuentas',
'costs.aud3.desc': 'AWS Organizations sin governance de costos centralizado.',
'costs.aud4.title': 'CFOs buscando eficiencia',
'costs.aud4.desc': 'Presión por reducir costos operativos sin afectar el negocio.',
'costs.cta.title': '¿Listo para optimizar tus costos?',
'costs.cta.btn': 'Hablemos de tu optimización →',
```

- [ ] **Step 3: Add Seguridad Cloud translations (ES)**

```javascript
// Seguridad Cloud
'security.hero.title': 'Seguridad Cloud',
'security.hero.desc': 'Protege tu infraestructura AWS con controles de seguridad enterprise. IAM, detección de amenazas, compliance y respuesta a incidentes alineados a frameworks como SOC 2 e ISO 27001.',
'security.hero.cta': 'Agenda una consulta →',
'security.inc.1': 'Assessment de seguridad actual y gap analysis',
'security.inc.2': 'Diseño e implementación de IAM con least-privilege',
'security.inc.3': 'Configuración de AWS Security Hub y GuardDuty',
'security.inc.4': 'Hardening de recursos (EC2, S3, RDS)',
'security.inc.5': 'Implementación de cifrado en reposo y tránsito',
'security.inc.6': 'Configuración de CloudTrail y logging centralizado',
'security.inc.7': 'Políticas de seguridad y SCPs para Organizations',
'security.inc.8': 'Plan de respuesta a incidentes',
'security.inc.9': 'Remediación de hallazgos críticos',
'security.inc.10': 'Documentación para auditorías de compliance',
'security.step1.title': 'Assessment',
'security.step1.desc': 'Evaluación de postura de seguridad actual, gap analysis contra frameworks de compliance.',
'security.step2.title': 'Diseño',
'security.step2.desc': 'Arquitectura de seguridad, políticas IAM y estrategia de detección de amenazas.',
'security.step3.title': 'Hardening',
'security.step3.desc': 'Implementación de controles, cifrado, logging y remediación de hallazgos.',
'security.step4.title': 'Monitoreo',
'security.step4.desc': 'Detección continua de amenazas, alertas y plan de respuesta a incidentes.',
'security.ben1.title': 'Reducción de hallazgos críticos',
'security.ben1.desc': 'Remediación sistemática de vulnerabilidades y misconfigurations.',
'security.ben2.title': 'Detección automatizada de amenazas',
'security.ben2.desc': 'GuardDuty y Security Hub monitorean continuamente tu infraestructura.',
'security.ben3.title': 'Cobertura de logs para auditoría',
'security.ben3.desc': 'CloudTrail y logging centralizado para cumplir requisitos de compliance.',
'security.ben4.title': 'Menos tiempo en preparación de compliance',
'security.ben4.desc': 'Documentación y controles listos para auditorías SOC 2, ISO 27001.',
'security.aud1.title': 'Empresas en industrias reguladas',
'security.aud1.desc': 'Finanzas, salud, seguros con requisitos estrictos de compliance.',
'security.aud2.title': 'Equipos preparando certificaciones',
'security.aud2.desc': 'Necesitan SOC 2, ISO 27001 o PCI-DSS para cerrar ventas enterprise.',
'security.aud3.title': 'Organizaciones post-incidente',
'security.aud3.desc': 'Sufrieron un breach y necesitan fortalecer su postura de seguridad.',
'security.aud4.title': 'Startups con clientes enterprise',
'security.aud4.desc': 'Prospects piden evidencia de controles de seguridad para comprar.',
'security.cta.title': '¿Listo para fortalecer tu seguridad?',
'security.cta.btn': 'Hablemos de tu seguridad →',
```

- [ ] **Step 4: Add DevOps & CI/CD translations (ES)**

```javascript
// DevOps & CI/CD
'devops.hero.title': 'DevOps & CI/CD',
'devops.hero.desc': 'Acelera tu delivery con pipelines automatizados e infraestructura como código. CI/CD, Terraform, CDK y Kubernetes para que tu equipo despliegue con confianza.',
'devops.hero.cta': 'Agenda una consulta →',
'devops.inc.1': 'Assessment de madurez DevOps actual',
'devops.inc.2': 'Diseño de pipelines CI/CD (CodePipeline, GitHub Actions)',
'devops.inc.3': 'Implementación de Infrastructure as Code (Terraform/CDK)',
'devops.inc.4': 'Configuración de ambientes (dev, staging, prod)',
'devops.inc.5': 'Containerización con Docker y ECR',
'devops.inc.6': 'Orquestación con EKS o ECS',
'devops.inc.7': 'Implementación de GitOps y branching strategy',
'devops.inc.8': 'Monitoreo con CloudWatch, X-Ray y alertas',
'devops.inc.9': 'Runbooks y documentación operativa',
'devops.inc.10': 'Capacitación al equipo de desarrollo',
'devops.step1.title': 'Assessment',
'devops.step1.desc': 'Evaluación de madurez DevOps, tooling actual y pain points del equipo.',
'devops.step2.title': 'Diseño',
'devops.step2.desc': 'Arquitectura de pipelines, estrategia de IaC y flujo de trabajo GitOps.',
'devops.step3.title': 'Implementación',
'devops.step3.desc': 'Pipelines CI/CD, containerización, ambientes y monitoreo.',
'devops.step4.title': 'Capacitación',
'devops.step4.desc': 'Transferencia de conocimiento, runbooks y acompañamiento inicial.',
'devops.ben1.title': 'Más despliegues por semana',
'devops.ben1.desc': 'Pipelines automatizados eliminan cuellos de botella en el proceso de release.',
'devops.ben2.title': 'Reducción de errores manuales',
'devops.ben2.desc': 'IaC y automatización eliminan errores humanos en configuración y deploy.',
'devops.ben3.title': 'Tiempo promedio de deploy',
'devops.ben3.desc': 'De commit a producción en minutos, no horas o días.',
'devops.ben4.title': 'Menos tiempo en tareas operativas',
'devops.ben4.desc': 'El equipo dedica más tiempo a features y menos a operaciones manuales.',
'devops.aud1.title': 'Equipos con deploys manuales',
'devops.aud1.desc': 'Procesos de release lentos, propensos a errores y que dependen de una persona.',
'devops.aud2.title': 'Startups escalando desarrollo',
'devops.aud2.desc': 'Necesitan infraestructura que soporte más desarrolladores y más features.',
'devops.aud3.title': 'Empresas adoptando microservicios',
'devops.aud3.desc': 'Transición de monolito a microservicios requiere pipelines maduros.',
'devops.aud4.title': 'CTOs buscando agilidad',
'devops.aud4.desc': 'Presión por entregar más rápido sin sacrificar calidad o estabilidad.',
'devops.cta.title': '¿Listo para acelerar tu delivery?',
'devops.cta.btn': 'Hablemos de tu DevOps →',
```

- [ ] **Step 5: Add AI/ML translations (ES)**

```javascript
// AI / ML en AWS
'aiml.hero.title': 'AI / ML en AWS',
'aiml.hero.desc': 'Integra inteligencia artificial en tus procesos con SageMaker, Bedrock y servicios de AI de AWS. Desde PoC hasta producción, con MLOps para mantener tus modelos actualizados.',
'aiml.hero.cta': 'Agenda una consulta →',
'aiml.inc.1': 'Discovery de casos de uso de AI/ML en tu negocio',
'aiml.inc.2': 'Evaluación de datos disponibles y calidad',
'aiml.inc.3': 'Diseño de arquitectura ML en AWS',
'aiml.inc.4': 'Desarrollo de PoC/MVP con SageMaker o Bedrock',
'aiml.inc.5': 'Integración con APIs de AI (Rekognition, Comprehend, Textract)',
'aiml.inc.6': 'Implementación de pipelines MLOps',
'aiml.inc.7': 'Despliegue de modelos en producción',
'aiml.inc.8': 'Monitoreo de drift y performance de modelos',
'aiml.inc.9': 'Integración con aplicaciones existentes',
'aiml.inc.10': 'Transferencia de conocimiento al equipo',
'aiml.step1.title': 'Discovery',
'aiml.step1.desc': 'Identificación de casos de uso de AI/ML con mayor impacto en el negocio.',
'aiml.step2.title': 'PoC',
'aiml.step2.desc': 'Desarrollo rápido de prueba de concepto para validar viabilidad técnica.',
'aiml.step3.title': 'Producción',
'aiml.step3.desc': 'Despliegue de modelos con infraestructura escalable y monitoreo.',
'aiml.step4.title': 'MLOps',
'aiml.step4.desc': 'Pipelines de reentrenamiento, monitoreo de drift y mejora continua.',
'aiml.ben1.title': 'Automatización de tareas repetitivas',
'aiml.ben1.desc': 'AI procesa documentos, imágenes y texto que antes requerían trabajo manual.',
'aiml.ben2.metric': '3 semanas',
'aiml.ben2.title': 'Tiempo promedio de PoC a demo',
'aiml.ben2.desc': 'Validación rápida de casos de uso antes de invertir en implementación completa.',
'aiml.ben3.title': 'Precisión típica en modelos',
'aiml.ben3.desc': 'Modelos entrenados con datos de calidad alcanzan precisión production-ready.',
'aiml.ben4.title': 'Reducción de procesamiento manual',
'aiml.ben4.desc': 'Automatización de workflows que antes consumían horas de trabajo humano.',
'aiml.aud1.title': 'Empresas explorando AI',
'aiml.aud1.desc': 'Saben que AI puede ayudar pero no saben por dónde empezar.',
'aiml.aud2.title': 'Equipos con datos sin explotar',
'aiml.aud2.desc': 'Tienen datos valiosos pero no los están usando para tomar decisiones.',
'aiml.aud3.title': 'Organizaciones con procesos manuales',
'aiml.aud3.desc': 'Tareas repetitivas que consumen tiempo y podrían automatizarse.',
'aiml.aud4.title': 'CTOs evaluando GenAI',
'aiml.aud4.desc': 'Quieren entender cómo Bedrock y LLMs pueden integrarse a sus productos.',
'aiml.cta.title': '¿Listo para integrar AI en tu negocio?',
'aiml.cta.btn': 'Hablemos de tu proyecto AI →',
```

- [ ] **Step 6: Add all EN translations**

Add corresponding English translations in the `en` object (after line 484):

```javascript
// Architecture - EN
'architecture.hero.title': 'Cloud Architecture',
'architecture.hero.desc': 'We design scalable, resilient, and optimized AWS architectures. Review of the 6 Well-Architected Framework pillars so your infrastructure grows with your business.',
'architecture.hero.cta': 'Book a consultation →',
'architecture.inc.1': 'Current architecture review and pain points',
'architecture.inc.2': '6 Well-Architected pillars analysis',
'architecture.inc.3': 'Target architecture design with diagrams',
'architecture.inc.4': 'Optimal AWS services selection',
'architecture.inc.5': 'Multi-AZ/multi-region strategy definition',
'architecture.inc.6': 'Networking design (VPC, subnets, connectivity)',
'architecture.inc.7': 'Disaster recovery and backup plan',
'architecture.inc.8': 'Architecture cost estimation',
'architecture.inc.9': 'Technical documentation and runbooks',
'architecture.inc.10': 'Knowledge transfer session',
'architecture.step1.title': 'Assessment',
'architecture.step1.desc': 'Current architecture evaluation, pain points identification and objectives definition.',
'architecture.step2.title': 'Design',
'architecture.step2.desc': 'Target architecture with diagrams, services selection and implementation strategy.',
'architecture.step3.title': 'Validation',
'architecture.step3.desc': 'Stakeholder review, adjustments and final design approval.',
'architecture.step4.title': 'Delivery',
'architecture.step4.desc': 'Complete documentation, runbooks and knowledge transfer session.',
'architecture.ben1.title': 'Availability with multi-AZ design',
'architecture.ben1.desc': 'Distributed architectures across multiple availability zones eliminate single points of failure.',
'architecture.ben2.title': 'Incident reduction',
'architecture.ben2.desc': 'Design with auto-scaling, health checks and automatic failover reduces operational incidents.',
'architecture.ben3.title': 'Scale without redesigning',
'architecture.ben3.desc': 'Modular and decoupled architectures allow scaling components independently.',
'architecture.ben4.title': 'Less troubleshooting time',
'architecture.ben4.desc': 'Integrated observability and clear architecture reduces diagnosis time.',
'architecture.aud1.title': 'Growing startups',
'architecture.aud1.desc': 'Need architecture that scales with their product without rewriting everything.',
'architecture.aud2.title': 'Companies with legacy architecture',
'architecture.aud2.desc': 'Monolithic systems that need gradual modernization.',
'architecture.aud3.title': 'Teams without cloud architect',
'architecture.aud3.desc': 'Developers who need guidance for infrastructure decisions.',
'architecture.aud4.title': 'Greenfield projects',
'architecture.aud4.desc': 'New projects that want to start with best practices from day one.',
'architecture.cta.title': 'Ready to design your architecture?',
'architecture.cta.btn': "Let's discuss your architecture →",

// Costs - EN
'costs.hero.title': 'Cost Optimization',
'costs.hero.desc': 'Reduce your AWS bill without sacrificing performance. We identify waste, implement FinOps, and maximize the value of every cloud dollar.',
'costs.hero.cta': 'Book a consultation →',
'costs.inc.1': 'Detailed analysis of current AWS billing',
'costs.inc.2': 'Identification of unused or oversized resources',
'costs.inc.3': 'Reserved Instances and Savings Plans strategy',
'costs.inc.4': 'Tagging implementation for cost allocation',
'costs.inc.5': 'Alerts and budgets configuration',
'costs.inc.6': 'EC2 and RDS instance rightsizing',
'costs.inc.7': 'Storage optimization (S3, EBS)',
'costs.inc.8': 'Data transfer and networking review',
'costs.inc.9': 'Real-time cost dashboard',
'costs.inc.10': 'Governance plan and cost policies',
'costs.step1.title': 'Analysis',
'costs.step1.desc': 'Detailed billing review, pattern identification and spend anomalies.',
'costs.step2.title': 'Identification',
'costs.step2.desc': 'Quick wins mapping, unused resources and optimization opportunities.',
'costs.step3.title': 'Implementation',
'costs.step3.desc': 'Rightsizing, Reserved Instances, tagging and alerts configuration.',
'costs.step4.title': 'Monitoring',
'costs.step4.desc': 'Cost dashboard, periodic reports and continuous governance.',
'costs.ben1.title': 'Average AWS bill reduction',
'costs.ben1.desc': 'Combining rightsizing, Reserved Instances and waste elimination.',
'costs.ben2.title': 'Time to identify quick wins',
'costs.ben2.desc': 'Initial analysis identifies immediate savings within the first 72 hours.',
'costs.ben3.title': 'Cost visibility per project',
'costs.ben3.desc': 'Tagging and cost allocation let you know exactly what each area consumes.',
'costs.ben4.title': 'Typical project ROI',
'costs.ben4.desc': 'Generated savings far exceed the project investment.',
'costs.aud1.title': 'Companies with growing AWS bill',
'costs.aud1.desc': 'The bill grows faster than the business and they don\'t know why.',
'costs.aud2.title': 'Teams without cost visibility',
'costs.aud2.desc': 'Can\'t answer how much each application or environment costs.',
'costs.aud3.title': 'Organizations with multiple accounts',
'costs.aud3.desc': 'AWS Organizations without centralized cost governance.',
'costs.aud4.title': 'CFOs seeking efficiency',
'costs.aud4.desc': 'Pressure to reduce operational costs without affecting the business.',
'costs.cta.title': 'Ready to optimize your costs?',
'costs.cta.btn': "Let's discuss your optimization →",

// Security - EN
'security.hero.title': 'Cloud Security',
'security.hero.desc': 'Protect your AWS infrastructure with enterprise security controls. IAM, threat detection, compliance, and incident response aligned to frameworks like SOC 2 and ISO 27001.',
'security.hero.cta': 'Book a consultation →',
'security.inc.1': 'Current security assessment and gap analysis',
'security.inc.2': 'IAM design and implementation with least-privilege',
'security.inc.3': 'AWS Security Hub and GuardDuty configuration',
'security.inc.4': 'Resource hardening (EC2, S3, RDS)',
'security.inc.5': 'Encryption implementation at rest and in transit',
'security.inc.6': 'CloudTrail and centralized logging configuration',
'security.inc.7': 'Security policies and SCPs for Organizations',
'security.inc.8': 'Incident response plan',
'security.inc.9': 'Critical findings remediation',
'security.inc.10': 'Documentation for compliance audits',
'security.step1.title': 'Assessment',
'security.step1.desc': 'Current security posture evaluation, gap analysis against compliance frameworks.',
'security.step2.title': 'Design',
'security.step2.desc': 'Security architecture, IAM policies and threat detection strategy.',
'security.step3.title': 'Hardening',
'security.step3.desc': 'Controls implementation, encryption, logging and findings remediation.',
'security.step4.title': 'Monitoring',
'security.step4.desc': 'Continuous threat detection, alerts and incident response plan.',
'security.ben1.title': 'Critical findings reduction',
'security.ben1.desc': 'Systematic remediation of vulnerabilities and misconfigurations.',
'security.ben2.title': 'Automated threat detection',
'security.ben2.desc': 'GuardDuty and Security Hub continuously monitor your infrastructure.',
'security.ben3.title': 'Log coverage for audit',
'security.ben3.desc': 'CloudTrail and centralized logging to meet compliance requirements.',
'security.ben4.title': 'Less compliance prep time',
'security.ben4.desc': 'Documentation and controls ready for SOC 2, ISO 27001 audits.',
'security.aud1.title': 'Regulated industry companies',
'security.aud1.desc': 'Finance, healthcare, insurance with strict compliance requirements.',
'security.aud2.title': 'Teams preparing certifications',
'security.aud2.desc': 'Need SOC 2, ISO 27001 or PCI-DSS to close enterprise sales.',
'security.aud3.title': 'Post-incident organizations',
'security.aud3.desc': 'Suffered a breach and need to strengthen their security posture.',
'security.aud4.title': 'Startups with enterprise clients',
'security.aud4.desc': 'Prospects ask for evidence of security controls to buy.',
'security.cta.title': 'Ready to strengthen your security?',
'security.cta.btn': "Let's discuss your security →",

// DevOps - EN
'devops.hero.title': 'DevOps & CI/CD',
'devops.hero.desc': 'Accelerate your delivery with automated pipelines and infrastructure as code. CI/CD, Terraform, CDK, and Kubernetes so your team deploys with confidence.',
'devops.hero.cta': 'Book a consultation →',
'devops.inc.1': 'Current DevOps maturity assessment',
'devops.inc.2': 'CI/CD pipeline design (CodePipeline, GitHub Actions)',
'devops.inc.3': 'Infrastructure as Code implementation (Terraform/CDK)',
'devops.inc.4': 'Environment configuration (dev, staging, prod)',
'devops.inc.5': 'Containerization with Docker and ECR',
'devops.inc.6': 'Orchestration with EKS or ECS',
'devops.inc.7': 'GitOps and branching strategy implementation',
'devops.inc.8': 'Monitoring with CloudWatch, X-Ray and alerts',
'devops.inc.9': 'Runbooks and operational documentation',
'devops.inc.10': 'Development team training',
'devops.step1.title': 'Assessment',
'devops.step1.desc': 'DevOps maturity evaluation, current tooling and team pain points.',
'devops.step2.title': 'Design',
'devops.step2.desc': 'Pipeline architecture, IaC strategy and GitOps workflow.',
'devops.step3.title': 'Implementation',
'devops.step3.desc': 'CI/CD pipelines, containerization, environments and monitoring.',
'devops.step4.title': 'Training',
'devops.step4.desc': 'Knowledge transfer, runbooks and initial support.',
'devops.ben1.title': 'More deployments per week',
'devops.ben1.desc': 'Automated pipelines eliminate bottlenecks in the release process.',
'devops.ben2.title': 'Manual error reduction',
'devops.ben2.desc': 'IaC and automation eliminate human errors in configuration and deploy.',
'devops.ben3.title': 'Average deploy time',
'devops.ben3.desc': 'From commit to production in minutes, not hours or days.',
'devops.ben4.title': 'Less time on operational tasks',
'devops.ben4.desc': 'Team spends more time on features and less on manual operations.',
'devops.aud1.title': 'Teams with manual deploys',
'devops.aud1.desc': 'Slow release processes, error-prone and dependent on one person.',
'devops.aud2.title': 'Startups scaling development',
'devops.aud2.desc': 'Need infrastructure that supports more developers and more features.',
'devops.aud3.title': 'Companies adopting microservices',
'devops.aud3.desc': 'Monolith to microservices transition requires mature pipelines.',
'devops.aud4.title': 'CTOs seeking agility',
'devops.aud4.desc': 'Pressure to deliver faster without sacrificing quality or stability.',
'devops.cta.title': 'Ready to accelerate your delivery?',
'devops.cta.btn': "Let's discuss your DevOps →",

// AI/ML - EN
'aiml.hero.title': 'AI / ML on AWS',
'aiml.hero.desc': 'Integrate artificial intelligence into your processes with SageMaker, Bedrock, and AWS AI services. From PoC to production, with MLOps to keep your models current.',
'aiml.hero.cta': 'Book a consultation →',
'aiml.inc.1': 'AI/ML use case discovery in your business',
'aiml.inc.2': 'Available data evaluation and quality',
'aiml.inc.3': 'ML architecture design on AWS',
'aiml.inc.4': 'PoC/MVP development with SageMaker or Bedrock',
'aiml.inc.5': 'AI API integration (Rekognition, Comprehend, Textract)',
'aiml.inc.6': 'MLOps pipeline implementation',
'aiml.inc.7': 'Model deployment to production',
'aiml.inc.8': 'Drift and model performance monitoring',
'aiml.inc.9': 'Integration with existing applications',
'aiml.inc.10': 'Knowledge transfer to team',
'aiml.step1.title': 'Discovery',
'aiml.step1.desc': 'Identification of AI/ML use cases with highest business impact.',
'aiml.step2.title': 'PoC',
'aiml.step2.desc': 'Rapid proof of concept development to validate technical feasibility.',
'aiml.step3.title': 'Production',
'aiml.step3.desc': 'Model deployment with scalable infrastructure and monitoring.',
'aiml.step4.title': 'MLOps',
'aiml.step4.desc': 'Retraining pipelines, drift monitoring and continuous improvement.',
'aiml.ben1.title': 'Repetitive task automation',
'aiml.ben1.desc': 'AI processes documents, images and text that previously required manual work.',
'aiml.ben2.metric': '3 weeks',
'aiml.ben2.title': 'Average PoC to demo time',
'aiml.ben2.desc': 'Fast validation of use cases before investing in full implementation.',
'aiml.ben3.title': 'Typical model accuracy',
'aiml.ben3.desc': 'Models trained with quality data achieve production-ready accuracy.',
'aiml.ben4.title': 'Manual processing reduction',
'aiml.ben4.desc': 'Workflow automation that previously consumed hours of human work.',
'aiml.aud1.title': 'Companies exploring AI',
'aiml.aud1.desc': 'Know AI can help but don\'t know where to start.',
'aiml.aud2.title': 'Teams with untapped data',
'aiml.aud2.desc': 'Have valuable data but aren\'t using it to make decisions.',
'aiml.aud3.title': 'Organizations with manual processes',
'aiml.aud3.desc': 'Repetitive tasks that consume time and could be automated.',
'aiml.aud4.title': 'CTOs evaluating GenAI',
'aiml.aud4.desc': 'Want to understand how Bedrock and LLMs can integrate into their products.',
'aiml.cta.title': 'Ready to integrate AI in your business?',
'aiml.cta.btn': "Let's discuss your AI project →",
```

- [ ] **Step 7: Verify translations load**

Open any page in browser, switch languages, verify no missing translation warnings in console.

- [ ] **Step 8: Commit**

```bash
git add js/main.js
git commit -m "feat: add translations for 5 new service landing pages"
```

---

### Task 7: Update Navigation Across All Pages

**Files:**
- Modify: `index.html`
- Modify: `contacto.html`
- Modify: `nosotros.html`
- Modify: `servicios/aws-migration.html`
- Modify: `servicios/cloud-architecture.html`
- Modify: `servicios/cost-optimization.html`
- Modify: `servicios/cloud-security.html`
- Modify: `servicios/devops-cicd.html`
- Modify: `servicios/ai-ml-aws.html`
- Modify: `productos/cygma.html`

**Interfaces:**
- Consumes: New service page URLs
- Produces: Working navigation with links to all services

- [ ] **Step 1: Update nav dropdown in index.html**

Replace `<span>` with `<a>` for each service, remove "(Próximamente)":

```html
<div class="nav__dropdown-menu" role="menu">
  <a href="servicios/aws-migration.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.migration">Migración AWS</a>
  <a href="servicios/cloud-architecture.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.architecture">Arquitectura Cloud</a>
  <a href="servicios/cost-optimization.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.costs">Optimización de Costos</a>
  <a href="servicios/cloud-security.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.security">Seguridad Cloud</a>
  <a href="servicios/devops-cicd.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.devops">DevOps &amp; CI/CD</a>
  <a href="servicios/ai-ml-aws.html" class="nav__dropdown-item" role="menuitem" data-i18n="nav.aiml">AI / ML en AWS</a>
</div>
```

- [ ] **Step 2: Update mobile menu in index.html**

Add all services to mobile menu:

```html
<div class="mobile-menu" id="mobile-menu">
  <a href="servicios/aws-migration.html" class="mobile-menu__link" data-i18n="nav.migration">Migración AWS</a>
  <a href="servicios/cloud-architecture.html" class="mobile-menu__link" data-i18n="nav.architecture">Arquitectura Cloud</a>
  <a href="servicios/cost-optimization.html" class="mobile-menu__link" data-i18n="nav.costs">Optimización de Costos</a>
  <a href="servicios/cloud-security.html" class="mobile-menu__link" data-i18n="nav.security">Seguridad Cloud</a>
  <a href="servicios/devops-cicd.html" class="mobile-menu__link" data-i18n="nav.devops">DevOps &amp; CI/CD</a>
  <a href="servicios/ai-ml-aws.html" class="mobile-menu__link" data-i18n="nav.aiml">AI / ML en AWS</a>
  <a href="productos/cygma.html" class="mobile-menu__link">Cygma</a>
  <a href="nosotros.html" class="mobile-menu__link" data-i18n="nav.about">Nosotros</a>
  <a href="contacto.html" class="mobile-menu__link" data-i18n="nav.contact">Contacto</a>
  ...
</div>
```

- [ ] **Step 3: Repeat for contacto.html, nosotros.html**

Apply same nav dropdown and mobile menu updates.

- [ ] **Step 4: Update servicios pages with relative paths**

For pages in servicios/, use relative paths like `aws-migration.html`, `cloud-architecture.html`, etc. and `../productos/cygma.html`.

- [ ] **Step 5: Update productos/cygma.html**

Use `../servicios/` prefix for service links.

- [ ] **Step 6: Set active state on each service page**

Add `nav__dropdown-item--active` class to the current page link on each service page.

- [ ] **Step 7: Test all navigation links**

Click through all nav links on each page, verify they work.

- [ ] **Step 8: Commit**

```bash
git add index.html contacto.html nosotros.html servicios/*.html productos/cygma.html
git commit -m "feat: update navigation with links to all service pages"
```

---

### Task 8: Update Footer Links Across All Pages

**Files:**
- Modify: All HTML files (same as Task 7)

**Interfaces:**
- Consumes: New service page URLs
- Produces: Footer with working links to all services

- [ ] **Step 1: Update footer in index.html**

Replace contacto.html links with actual service pages:

```html
<div class="footer__col">
  <div class="footer__col-title" data-i18n="footer.services_col">Servicios</div>
  <ul class="footer__links">
    <li><a href="servicios/aws-migration.html" class="footer__link" data-i18n="nav.migration">Migración AWS</a></li>
    <li><a href="servicios/cloud-architecture.html" class="footer__link" data-i18n="nav.architecture">Arquitectura Cloud</a></li>
    <li><a href="servicios/cost-optimization.html" class="footer__link" data-i18n="nav.costs">Optimización de Costos</a></li>
    <li><a href="servicios/cloud-security.html" class="footer__link" data-i18n="nav.security">Seguridad Cloud</a></li>
  </ul>
</div>
<div class="footer__col">
  <div class="footer__col-title">&nbsp;</div>
  <ul class="footer__links">
    <li><a href="servicios/devops-cicd.html" class="footer__link" data-i18n="nav.devops">DevOps &amp; CI/CD</a></li>
    <li><a href="servicios/ai-ml-aws.html" class="footer__link" data-i18n="nav.aiml">AI / ML en AWS</a></li>
  </ul>
</div>
```

- [ ] **Step 2: Update footer in contacto.html, nosotros.html**

Same footer structure with root-relative paths.

- [ ] **Step 3: Update footer in servicios/*.html**

Use relative paths: `aws-migration.html`, `cloud-architecture.html`, etc.

- [ ] **Step 4: Update footer in productos/cygma.html**

Use `../servicios/` prefix.

- [ ] **Step 5: Test all footer links**

Click through footer links on each page.

- [ ] **Step 6: Commit**

```bash
git add index.html contacto.html nosotros.html servicios/*.html productos/cygma.html
git commit -m "feat: update footer with links to all service pages"
```

---

### Task 9: Final Verification and Deploy

**Files:**
- All modified files

- [ ] **Step 1: Verify all pages load without errors**

Open each new service page in browser, check for console errors.

- [ ] **Step 2: Test language switching**

Switch between ES/EN on each page, verify all translations appear.

- [ ] **Step 3: Test responsive design**

Check mobile menu works on all pages.

- [ ] **Step 4: Run final git status**

```bash
git status
```

Ensure no uncommitted changes.

- [ ] **Step 5: Push to remote**

```bash
git push origin main
```

- [ ] **Step 6: Deploy to S3**

```bash
aws s3 sync . s3://www.zervonix.com --exclude ".git/*" --exclude "*.md" --exclude ".DS_Store" --exclude ".claude/*" --delete
```

- [ ] **Step 7: Invalidate CloudFront cache**

```bash
aws cloudfront create-invalidation --distribution-id E2KYTVMIK6U36A --paths "/*"
```

- [ ] **Step 8: Verify on production**

Visit https://zervonix.com and test all new service pages.
