# Zervonix Website - Minimalist Redesign

**Fecha:** 2026-08-08
**Estado:** Aprobado
**Enfoque:** Refinamiento Conservador + Micro-interacciones (A + C)

---

## Resumen Ejecutivo

Rediseño minimalista moderado del sitio Zervonix manteniendo la identidad corporativa púrpura existente. Se preservan todas las secciones actuales pero se reduce el ruido visual, se aumenta el whitespace, se reemplazan emojis por iconos SVG, y se agregan micro-interacciones sutiles para una experiencia premium.

**Cambio principal en equipo:** Transformar la sección de equipo individual a un panel de "Experticia Colectiva" con métricas agregadas.

---

## Decisiones de Diseño

| Aspecto | Decisión |
|---------|----------|
| Paleta de colores | Púrpura actual (`#8A65E8`) - sin cambios |
| Nivel de minimalismo | Moderado (todas las secciones, menos ruido) |
| Sección de equipo | Experticia colectiva (sin individuos) |
| Hero SVG | Mantener animación de esfera AWS |
| Challenge panel | Mantener interactivo |
| Servicios | Mantener los 6 (1 activo, 5 próximamente) |
| Iconos | Reemplazar emojis por Lucide SVG |

---

## 1. Cambios Globales (CSS/Sistema)

### Variables CSS

```css
/* Espaciado aumentado */
--section-py-desktop: 100px;  /* era 80px */
--section-py-mobile: 60px;    /* era 48px */
--card-gap: 24px;             /* era 20px */

/* Opacidades reducidas para glows */
--glow-opacity: 0.15;         /* era ~0.3-0.5 */

/* Transiciones más lentas (premium feel) */
--transition-base: 0.25s ease;  /* era 0.2s */
--transition-slow: 0.4s ease;   /* era 0.3s */
```

### Animaciones de Scroll

```css
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Librería de Iconos

- **Lucide Icons** (SVG inline)
- Tamaño estándar: 24px en cards, 20px en badges
- Stroke width: 1.5px

---

## 2. Hero Section

### Cambios

| Elemento | Antes | Después |
|----------|-------|---------|
| Badge | Borde + fondo púrpura | Solo texto con dot animado, sin borde |
| Subtítulo | `font-weight: 500` | `font-weight: 400` (más ligero) |
| Descripción | 2 líneas | 1 línea: "Diseñamos, migramos y optimizamos tu AWS." |
| Sombra botones | Opacidad alta | Opacidad `0.2` |
| SVG bg-aura | Opacidad `0.18` | Opacidad `0.10` |

### Animaciones

- Contenido izquierdo: fade-in + slide desde izquierda (0.5s delay)
- SVG derecho: fade-in (0.3s delay)

---

## 3. Stats Bar

### Cambios

| Elemento | Antes | Después |
|----------|-------|---------|
| Valores | Estáticos | Counter animation al entrar en viewport |
| Tipografía valores | Tamaño actual | +10% más grande, `font-weight: 700` |
| Labels | Color muted | Agregar `letter-spacing: 0.05em` |
| Layout | Sin separadores | Líneas verticales sutiles entre stats |

### Separadores

```css
/* Línea vertical entre stats */
border-left: 1px solid rgba(138, 101, 232, 0.15);
height: 40px;
```

### Counter Animation

- Números animan de 0 → valor final en 1.5s
- Trigger: intersection observer
- Easing: ease-out

---

## 4. Challenge Panel

### Iconos Lucide

| Desafío | Emoji Actual | Icono Lucide |
|---------|--------------|--------------|
| Migrar infraestructura | ☁️ | `cloud-upload` |
| Diseñar arquitectura | 📐 | `git-branch` |
| Reducir costos | 💰 | `trending-down` |
| Fortalecer seguridad | 🔒 | `shield-check` |
| Implementar DevOps | ⚙️ | `git-merge` |
| Integrar AI/ML | 🤖 | `brain` |

### Hover State

```css
.challenge__option:hover {
  border-color: var(--color-purple);
  background: rgba(138, 101, 232, 0.05);
  transform: translateY(-2px);
  transition: all 0.25s ease;
}
```

### Descripción Expandida

- Transición fade-in más suave: 0.4s (era instantáneo)

---

## 5. Services Grid

### Iconos Lucide

| Servicio | Emoji Actual | Icono Lucide |
|----------|--------------|--------------|
| Migración AWS | 🚀 | `cloud-upload` |
| Arquitectura Cloud | 📐 | `git-branch` |
| Optimización Costos | 💰 | `trending-down` |
| Seguridad Cloud | 🔒 | `shield-check` |
| DevOps & CI/CD | ⚙️ | `git-merge` |
| AI / ML en AWS | 🤖 | `brain` |

### Cards

| Elemento | Antes | Después |
|----------|-------|---------|
| Borde + sombra | Siempre visible | Solo borde sutil, sombra en hover |
| "Próximamente" | Texto + opacidad 0.6 | Badge pequeño + opacidad 0.7 |
| Link "Ver más" | Flecha texto | Icono `arrow-right` Lucide |

### Animación

- Cards entran con stagger: 0.1s entre cada una
- Fade-in + slide up

---

## 6. AWS Expertise (antes "AWS Partner")

### Cambios Críticos

- **ELIMINAR** toda referencia a "Partner" o "Cloud Partner"
- **ELIMINAR** badge grande "AWS / Cloud Partner"

### Nuevo Contenido

```html
<h2>Especialistas AWS Certificados</h2>
<p>Nuestro equipo cuenta con certificaciones en las especialidades más demandadas.</p>
```

### Badges de Certificación

```css
.aws-cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(255, 153, 0, 0.08);
  border: 1px solid rgba(255, 153, 0, 0.2);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}
```

### Iconos Lucide

| Certificación | Icono |
|---------------|-------|
| Solutions Architect | `cloud` |
| DevOps Engineer | `git-merge` |
| Security Specialty | `shield-check` |
| Networking | `network` |

---

## 7. ¿Por qué Zervonix?

### Descripciones Acortadas

| Item | Antes | Después |
|------|-------|---------|
| AWS Puro | "No somos multi-cloud genérico. Toda nuestra expertise es AWS — más profundidad, mejores resultados." | "100% AWS. Más profundidad, mejores resultados." |
| LATAM Nativo | "Entendemos el contexto regulatorio y de negocio de la región. Hablamos tu idioma y tu realidad." | "Tu contexto, tu idioma, tu realidad." |
| Resultados medibles | "Cada proyecto tiene métricas claras de éxito desde el día uno. Sin sorpresas, sin promesas vacías." | "Métricas claras desde el día uno." |

### Números

- Mantener 01, 02, 03 pero con `opacity: 0.6`

### Separadores

- Línea vertical sutil entre items

---

## 8. Nuestro Expertise (antes "Equipo")

### Rediseño Completo

**ELIMINAR:**
- 5 tarjetas individuales con avatares A, B, C, D, E
- Nombres placeholder "Ingeniero 1", "Ingeniero 2"...
- Nota "Nombres y fotos reales se agregan antes del lanzamiento"

**NUEVO DISEÑO:**

```html
<section class="expertise">
  <h2>Nuestro Expertise</h2>
  <p>Un equipo de ingenieros certificados AWS con experiencia en proyectos enterprise.</p>

  <div class="expertise__metrics">
    <div class="expertise__metric">
      <span class="expertise__metric-value">5</span>
      <span class="expertise__metric-label">Ingenieros AWS</span>
    </div>
    <div class="expertise__metric">
      <span class="expertise__metric-value">15+</span>
      <span class="expertise__metric-label">Años combinados</span>
    </div>
    <div class="expertise__metric">
      <span class="expertise__metric-value">20+</span>
      <span class="expertise__metric-label">Proyectos entregados</span>
    </div>
    <div class="expertise__metric">
      <span class="expertise__metric-value">4</span>
      <span class="expertise__metric-label">Certificaciones AWS</span>
    </div>
  </div>

  <div class="expertise__specialties">
    <span>Solutions Architecture</span>
    <span>DevOps Engineering</span>
    <span>Security Specialty</span>
    <span>Networking Specialty</span>
  </div>
</section>
```

### CSS

```css
.expertise__metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 40px;
  background: rgba(138, 101, 232, 0.05);
  border: 1px solid rgba(138, 101, 232, 0.15);
  border-radius: 16px;
  text-align: center;
}

.expertise__metric-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-purple-bright);
}

.expertise__metric-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-top: 8px;
}
```

### Animaciones

- Counter animation en métricas
- Badges con stagger fade-in

---

## 9. CTA Final

### Cambios

| Elemento | Antes | Después |
|----------|-------|---------|
| Subtítulo | "Hablemos de tu proyecto. Primera consulta sin costo." | "Primera consulta sin costo." |
| Sombra botón | Opacidad alta | Reducida a `0.25` |
| Fondo | Gradiente/glow | Solo línea superior púrpura sutil |
| Padding | 80px | 100px |

### Animación

- Fade-in al entrar en viewport
- Botón con pulse sutil cada 3s

---

## 10. Footer

### Cambios

| Elemento | Antes | Después |
|----------|-------|---------|
| Gap columnas | 32px | 48px |
| Borde superior | `rgba(138,101,232,0.2)` | `rgba(138,101,232,0.1)` |
| Transición links | 0.2s | 0.25s |

---

## Archivos a Modificar

1. `css/styles.css` - Variables globales
2. `css/components.css` - Componentes actualizados
3. `index.html` - Estructura HTML actualizada
4. `js/main.js` - Animaciones scroll + counter
5. `nosotros.html` - Aplicar mismos cambios de expertise
6. `contacto.html` - Consistencia visual
7. `servicios/aws-migration.html` - Consistencia visual

---

## Dependencias Nuevas

- **Lucide Icons**: CDN o SVG inline
  - Opción A: `<script src="https://unpkg.com/lucide@latest"></script>`
  - Opción B: SVG inline (recomendado para performance)

---

## Métricas de Éxito

1. Reducción de elementos visuales decorativos en 40%
2. Aumento de whitespace (section padding +25%)
3. Consistencia de iconografía (0 emojis, 100% Lucide SVG)
4. Animaciones sutiles que no afecten performance móvil
5. Sección de equipo sin información personal individual

---

## Notas de Implementación

- Usar Intersection Observer para animaciones de scroll
- Counter animation: usar requestAnimationFrame para suavidad
- Testear en móvil antes de deploy (animaciones pueden afectar performance)
- Mantener fallbacks para navegadores sin soporte de CSS custom properties
