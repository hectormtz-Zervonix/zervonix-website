# Services Landing Pages Design Spec

**Date:** 2026-08-14
**Status:** Approved
**Scope:** 5 service landing pages for Zervonix website

## Overview

Create landing pages for the 5 remaining services currently marked as "coming soon":
1. Arquitectura Cloud
2. Optimización de Costos
3. Seguridad Cloud
4. DevOps & CI/CD
5. AI / ML en AWS

## Structure

All pages follow the same structure as `servicios/aws-migration.html`:

1. **Hero** - breadcrumb, badge with icon, title, description, CTA
2. **¿Qué incluye?** - list of 10 items
3. **Nuestro proceso** - 4 numbered steps
4. **Beneficios** - 4 cards with metrics
5. **¿Para quién es?** - 4 audience cards
6. **CTA final** - call to action

## Files to Create

| Service | File Path |
|---------|-----------|
| Arquitectura Cloud | `servicios/cloud-architecture.html` |
| Optimización de Costos | `servicios/cost-optimization.html` |
| Seguridad Cloud | `servicios/cloud-security.html` |
| DevOps & CI/CD | `servicios/devops-cicd.html` |
| AI / ML en AWS | `servicios/ai-ml-aws.html` |

## Files to Update

- `js/main.js` - add translations for all 5 services (ES/EN)
- `index.html` - update nav dropdown links, remove "coming soon"
- `contacto.html` - update nav dropdown links
- `nosotros.html` - update nav dropdown links
- `servicios/aws-migration.html` - update nav dropdown links
- `productos/cygma.html` - update nav dropdown links
- All footer links across all pages

## Content Per Service

### 1. Arquitectura Cloud

**Hero Description (ES):**
Diseñamos arquitecturas AWS escalables, resilientes y optimizadas. Revisión de los 6 pilares del Well-Architected Framework para que tu infraestructura crezca con tu negocio.

**Hero Description (EN):**
We design scalable, resilient, and optimized AWS architectures. Review of the 6 Well-Architected Framework pillars so your infrastructure grows with your business.

**Includes:**
1. Revisión de arquitectura actual y pain points
2. Análisis de los 6 pilares Well-Architected
3. Diseño de arquitectura target con diagramas
4. Selección de servicios AWS óptimos
5. Definición de estrategia multi-AZ/multi-región
6. Diseño de networking (VPC, subnets, conectividad)
7. Plan de disaster recovery y backup
8. Estimación de costos de la arquitectura
9. Documentación técnica y runbooks
10. Sesión de transferencia de conocimiento

**Process:**
1. Diagnóstico - Evaluación de arquitectura actual, identificación de pain points y definición de objetivos.
2. Diseño - Arquitectura target con diagramas, selección de servicios y estrategia de implementación.
3. Validación - Revisión con stakeholders, ajustes y aprobación del diseño final.
4. Entrega - Documentación completa, runbooks y sesión de transferencia de conocimiento.

**Benefits:**
| Metric | Title | Description |
|--------|-------|-------------|
| 99.99% | Disponibilidad con diseño multi-AZ | Arquitecturas distribuidas en múltiples zonas de disponibilidad eliminan puntos únicos de falla. |
| 40-60% | Reducción de incidentes con arquitectura resiliente | Diseño con auto-scaling, health checks y failover automático reduce incidentes operativos. |
| 3x | Capacidad de escalar sin rediseñar | Arquitecturas modulares y desacopladas permiten escalar componentes independientemente. |
| 50% | Menos tiempo en troubleshooting | Observabilidad integrada y arquitectura clara reduce tiempo de diagnóstico. |

**Audience:**
1. Startups en crecimiento - Necesitan arquitectura que escale con su producto sin reescribir todo.
2. Empresas con arquitectura legacy - Sistemas monolíticos que necesitan modernización gradual.
3. Equipos sin arquitecto cloud - Desarrolladores que necesitan guía para decisiones de infraestructura.
4. Proyectos greenfield - Nuevos proyectos que quieren empezar con las mejores prácticas desde día uno.

---

### 2. Optimización de Costos

**Hero Description (ES):**
Reduce tu factura AWS sin sacrificar rendimiento. Identificamos desperdicio, implementamos FinOps y maximizamos el valor de cada dólar en la nube.

**Hero Description (EN):**
Reduce your AWS bill without sacrificing performance. We identify waste, implement FinOps, and maximize the value of every cloud dollar.

**Includes:**
1. Análisis detallado de facturación AWS actual
2. Identificación de recursos sin uso o sobredimensionados
3. Estrategia de Reserved Instances y Savings Plans
4. Implementación de tagging para cost allocation
5. Configuración de alertas y budgets
6. Rightsizing de instancias EC2 y RDS
7. Optimización de almacenamiento (S3, EBS)
8. Revisión de transferencia de datos y networking
9. Dashboard de costos en tiempo real
10. Plan de governance y políticas de costos

**Process:**
1. Análisis - Revisión detallada de facturación, identificación de patrones y anomalías de gasto.
2. Identificación - Mapeo de quick wins, recursos sin uso y oportunidades de optimización.
3. Implementación - Rightsizing, Reserved Instances, tagging y configuración de alertas.
4. Monitoreo - Dashboard de costos, reportes periódicos y governance continuo.

**Benefits:**
| Metric | Title | Description |
|--------|-------|-------------|
| 25-40% | Reducción promedio en factura AWS | Combinando rightsizing, Reserved Instances y eliminación de desperdicio. |
| 72hrs | Tiempo para identificar quick wins | Análisis inicial identifica ahorros inmediatos en las primeras 72 horas. |
| 100% | Visibilidad de costos por proyecto/equipo | Tagging y cost allocation permiten saber exactamente qué consume cada área. |
| ROI 5x | Retorno típico del proyecto de optimización | El ahorro generado supera ampliamente la inversión en el proyecto. |

**Audience:**
1. Empresas con factura AWS creciente - La factura crece más rápido que el negocio y no saben por qué.
2. Equipos sin visibilidad de costos - No pueden responder cuánto cuesta cada aplicación o ambiente.
3. Organizaciones con múltiples cuentas - AWS Organizations sin governance de costos centralizado.
4. CFOs buscando eficiencia - Presión por reducir costos operativos sin afectar el negocio.

---

### 3. Seguridad Cloud

**Hero Description (ES):**
Protege tu infraestructura AWS con controles de seguridad enterprise. IAM, detección de amenazas, compliance y respuesta a incidentes alineados a frameworks como SOC 2 e ISO 27001.

**Hero Description (EN):**
Protect your AWS infrastructure with enterprise security controls. IAM, threat detection, compliance, and incident response aligned to frameworks like SOC 2 and ISO 27001.

**Includes:**
1. Assessment de seguridad actual y gap analysis
2. Diseño e implementación de IAM con least-privilege
3. Configuración de AWS Security Hub y GuardDuty
4. Hardening de recursos (EC2, S3, RDS)
5. Implementación de cifrado en reposo y tránsito
6. Configuración de CloudTrail y logging centralizado
7. Políticas de seguridad y SCPs para Organizations
8. Plan de respuesta a incidentes
9. Remediación de hallazgos críticos
10. Documentación para auditorías de compliance

**Process:**
1. Assessment - Evaluación de postura de seguridad actual, gap analysis contra frameworks de compliance.
2. Diseño - Arquitectura de seguridad, políticas IAM y estrategia de detección de amenazas.
3. Hardening - Implementación de controles, cifrado, logging y remediación de hallazgos.
4. Monitoreo - Detección continua de amenazas, alertas y plan de respuesta a incidentes.

**Benefits:**
| Metric | Title | Description |
|--------|-------|-------------|
| 90% | Reducción de hallazgos críticos de seguridad | Remediación sistemática de vulnerabilidades y misconfigurations. |
| 24/7 | Detección automatizada de amenazas | GuardDuty y Security Hub monitorean continuamente tu infraestructura. |
| 100% | Cobertura de logs para auditoría | CloudTrail y logging centralizado para cumplir requisitos de compliance. |
| 80% | Menos tiempo en preparación de compliance | Documentación y controles listos para auditorías SOC 2, ISO 27001. |

**Audience:**
1. Empresas en industrias reguladas - Finanzas, salud, seguros con requisitos estrictos de compliance.
2. Equipos preparando certificaciones - Necesitan SOC 2, ISO 27001 o PCI-DSS para cerrar ventas enterprise.
3. Organizaciones post-incidente - Sufrieron un breach y necesitan fortalecer su postura de seguridad.
4. Startups con clientes enterprise - Prospects piden evidencia de controles de seguridad para comprar.

---

### 4. DevOps & CI/CD

**Hero Description (ES):**
Acelera tu delivery con pipelines automatizados e infraestructura como código. CI/CD, Terraform, CDK y Kubernetes para que tu equipo despliegue con confianza.

**Hero Description (EN):**
Accelerate your delivery with automated pipelines and infrastructure as code. CI/CD, Terraform, CDK, and Kubernetes so your team deploys with confidence.

**Includes:**
1. Assessment de madurez DevOps actual
2. Diseño de pipelines CI/CD (CodePipeline, GitHub Actions)
3. Implementación de Infrastructure as Code (Terraform/CDK)
4. Configuración de ambientes (dev, staging, prod)
5. Containerización con Docker y ECR
6. Orquestación con EKS o ECS
7. Implementación de GitOps y branching strategy
8. Monitoreo con CloudWatch, X-Ray y alertas
9. Runbooks y documentación operativa
10. Capacitación al equipo de desarrollo

**Process:**
1. Assessment - Evaluación de madurez DevOps, tooling actual y pain points del equipo.
2. Diseño - Arquitectura de pipelines, estrategia de IaC y flujo de trabajo GitOps.
3. Implementación - Pipelines CI/CD, containerización, ambientes y monitoreo.
4. Capacitación - Transferencia de conocimiento, runbooks y acompañamiento inicial.

**Benefits:**
| Metric | Title | Description |
|--------|-------|-------------|
| 10x | Más despliegues por semana | Pipelines automatizados eliminan cuellos de botella en el proceso de release. |
| 95% | Reducción de errores manuales | IaC y automatización eliminan errores humanos en configuración y deploy. |
| 15min | Tiempo promedio de deploy a producción | De commit a producción en minutos, no horas o días. |
| 70% | Menos tiempo en tareas operativas | El equipo dedica más tiempo a features y menos a operaciones manuales. |

**Audience:**
1. Equipos con deploys manuales - Procesos de release lentos, propensos a errores y que dependen de una persona.
2. Startups escalando desarrollo - Necesitan infraestructura que soporte más desarrolladores y más features.
3. Empresas adoptando microservicios - Transición de monolito a microservicios requiere pipelines maduros.
4. CTOs buscando agilidad - Presión por entregar más rápido sin sacrificar calidad o estabilidad.

---

### 5. AI / ML en AWS

**Hero Description (ES):**
Integra inteligencia artificial en tus procesos con SageMaker, Bedrock y servicios de AI de AWS. Desde PoC hasta producción, con MLOps para mantener tus modelos actualizados.

**Hero Description (EN):**
Integrate artificial intelligence into your processes with SageMaker, Bedrock, and AWS AI services. From PoC to production, with MLOps to keep your models current.

**Includes:**
1. Discovery de casos de uso de AI/ML en tu negocio
2. Evaluación de datos disponibles y calidad
3. Diseño de arquitectura ML en AWS
4. Desarrollo de PoC/MVP con SageMaker o Bedrock
5. Integración con APIs de AI (Rekognition, Comprehend, Textract)
6. Implementación de pipelines MLOps
7. Despliegue de modelos en producción
8. Monitoreo de drift y performance de modelos
9. Integración con aplicaciones existentes
10. Transferencia de conocimiento al equipo

**Process:**
1. Discovery - Identificación de casos de uso de AI/ML con mayor impacto en el negocio.
2. PoC - Desarrollo rápido de prueba de concepto para validar viabilidad técnica.
3. Producción - Despliegue de modelos con infraestructura escalable y monitoreo.
4. MLOps - Pipelines de reentrenamiento, monitoreo de drift y mejora continua.

**Benefits:**
| Metric | Title | Description |
|--------|-------|-------------|
| 60% | Automatización de tareas repetitivas | AI procesa documentos, imágenes y texto que antes requerían trabajo manual. |
| 3 semanas | Tiempo promedio de PoC a demo | Validación rápida de casos de uso antes de invertir en implementación completa. |
| 85% | Precisión típica en modelos de clasificación | Modelos entrenados con datos de calidad alcanzan precisión production-ready. |
| 40% | Reducción de tiempo en procesamiento manual | Automatización de workflows que antes consumían horas de trabajo humano. |

**Audience:**
1. Empresas explorando AI - Saben que AI puede ayudar pero no saben por dónde empezar.
2. Equipos con datos sin explotar - Tienen datos valiosos pero no los están usando para tomar decisiones.
3. Organizaciones con procesos manuales repetitivos - Tareas que consumen tiempo y podrían automatizarse.
4. CTOs evaluando GenAI - Quieren entender cómo Bedrock y LLMs pueden integrarse a sus productos.

---

## Technical Implementation

### HTML Structure
- Copy `servicios/aws-migration.html` as template
- Replace content with service-specific copy
- Update breadcrumb and badge
- Use appropriate Lucide icon for each service badge

### Icons per Service
| Service | Icon |
|---------|------|
| Arquitectura Cloud | `git-branch` or custom architecture icon |
| Optimización de Costos | `trending-down` |
| Seguridad Cloud | `shield-check` |
| DevOps & CI/CD | `git-merge` |
| AI / ML en AWS | `brain` |

### Translations
Add to `js/main.js` translations object:
- `architecture.*` keys for Arquitectura Cloud
- `costs.*` keys for Optimización de Costos
- `security.*` keys for Seguridad Cloud
- `devops.*` keys for DevOps & CI/CD
- `aiml.*` keys for AI / ML en AWS

### Navigation Updates
- Change `<span>` to `<a>` for each service in nav dropdown
- Remove `(Próximamente)` badges
- Add `nav__dropdown-item--active` class when on that page
- Update all pages: index, contacto, nosotros, aws-migration, cygma

### Footer Updates
- Update footer links to point to new service pages instead of contacto.html
