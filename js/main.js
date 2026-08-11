'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  es: {
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos →',
    'nav.migration': 'Migración AWS',
    'nav.architecture': 'Arquitectura Cloud',
    'nav.costs': 'Optimización de Costos',
    'nav.security': 'Seguridad Cloud',
    'nav.devops': 'DevOps & CI/CD',
    'nav.aiml': 'AI / ML en AWS',
    'nav.coming_soon': '(Próximamente)',
    'hero.badge': '● Cloud Consulting LATAM',
    'hero.title': 'Cloud That Scales',
    'hero.subtitle': 'Tu infraestructura AWS, diseñada para crecer.',
    'hero.desc': 'Diseñamos, migramos y optimizamos tu AWS.',
    'hero.cta1': 'Agenda una consulta →',
    'hero.cta2': 'Ver servicios',
    'stats.engineers_label': 'Ingenieros AWS',
    'stats.specs_label': 'Especialidades AWS',
    'stats.focus_label': 'AWS Focus',
    'stats.coverage_label': 'Cobertura regional',
    'challenge.title': '¿Cuál es tu desafío?',
    'challenge.subtitle': 'Selecciona tu reto y te mostramos cómo lo resolvemos.',
    'challenge.opt1': 'Migrar mi infraestructura a AWS',
    'challenge.opt2': 'Diseñar una arquitectura escalable',
    'challenge.opt3': 'Reducir costos en cloud',
    'challenge.opt4': 'Fortalecer la seguridad de mi infraestructura',
    'challenge.opt5': 'Implementar DevOps y automatización',
    'challenge.opt6': 'Integrar AI/ML en mis procesos',
    'challenge.desc1': 'Te acompañamos en cada etapa de tu migración a AWS: desde el diagnóstico inicial hasta el cutover. Lift & shift, re-platforming o re-architecting según lo que mejor se adapte a tu negocio.',
    'challenge.desc2': 'Diseñamos arquitecturas AWS Well-Architected que escalan con tu negocio. Revisión de los 6 pilares: Operational Excellence, Security, Reliability, Performance, Cost Optimization y Sustainability.',
    'challenge.desc3': 'Identificamos desperdicio y optimizamos tu gasto cloud con FinOps, rightsizing, Reserved Instances y Savings Plans. Resultados medibles desde el primer mes.',
    'challenge.desc4': 'Implementamos controles de seguridad AWS: IAM con least-privilege, GuardDuty, Security Hub, CloudTrail, y planes de respuesta a incidentes alineados a frameworks como SOC 2 y ISO 27001.',
    'challenge.desc5': 'Construimos pipelines CI/CD, implementamos IaC con Terraform y CDK, y orquestamos workloads con EKS o ECS. Tu equipo de desarrollo entrega más rápido y con mayor confianza.',
    'challenge.desc6': 'Integramos capacidades de AI/ML en tus procesos con SageMaker, Bedrock y Rekognition. Desde PoC hasta producción, con MLOps para mantener tus modelos actualizados.',
    'challenge.cta': 'Ver más →',
    'services.title': 'Nuestros servicios',
    'services.subtitle': 'Soluciones AWS especializadas para cada etapa de tu journey cloud.',
    'services.s1.name': 'Migración AWS',
    'services.s1.desc': 'Lift & shift, re-platforming y re-architecting con mínimo riesgo.',
    'services.s2.name': 'Arquitectura Cloud',
    'services.s2.desc': 'Well-Architected Framework, diseño escalable y resiliente.',
    'services.s3.name': 'Optimización de Costos',
    'services.s3.desc': 'FinOps, rightsizing y Reserved Instances para reducir tu gasto.',
    'services.s4.name': 'Seguridad Cloud',
    'services.s4.desc': 'IAM, compliance, threat detection y respuesta a incidentes.',
    'services.s5.name': 'DevOps & CI/CD',
    'services.s5.desc': 'Pipelines, IaC con Terraform/CDK, Kubernetes y monitoreo.',
    'services.s6.name': 'AI / ML en AWS',
    'services.s6.desc': 'SageMaker, Bedrock y GenAI integrations para escalar con IA.',
    'services.learn_more': 'Ver más →',
    'services.coming_soon': 'Próximamente',
    'aws.title': 'Especialistas AWS Certificados',
    'aws.subtitle': 'Nuestro equipo cuenta con certificaciones en las especialidades más demandadas.',
    'why.title': '¿Por qué Zervonix?',
    'why.1.title': 'AWS Puro',
    'why.1.desc': '100% AWS. Más profundidad, mejores resultados.',
    'why.2.title': 'LATAM Nativo',
    'why.2.desc': 'Tu contexto, tu idioma, tu realidad.',
    'why.3.title': 'Resultados medibles',
    'why.3.desc': 'Métricas claras desde el día uno.',
    'expertise.title': 'Nuestro Expertise',
    'expertise.subtitle': 'Un equipo de ingenieros certificados AWS con experiencia en proyectos enterprise.',
    'expertise.engineers': 'Ingenieros AWS',
    'expertise.years': 'Años combinados',
    'expertise.projects': 'Proyectos entregados',
    'expertise.certs': 'Certificaciones AWS',
    'team.title': 'Nuestro equipo',
    'team.subtitle': 'Ingenieros certificados AWS con experiencia en proyectos enterprise para Latinoamérica.',
    'cta.title': '¿Listo para transformar tu infraestructura?',
    'cta.subtitle': 'Primera consulta sin costo.',
    'cta.btn': 'Agenda tu consulta gratuita →',
    'footer.tagline': 'Cloud Consulting LATAM',
    'footer.services_col': 'Servicios',
    'footer.products_col': 'Productos',
    'footer.company_col': 'Compañía',
    'footer.legal_col': 'Legal',
    'footer.about': 'Nosotros',
    'footer.contact': 'Contacto',
    'footer.linkedin': 'LinkedIn',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.copyright': '© 2026 Zervonix. Todos los derechos reservados.',
    'about.hero.title': 'El equipo detrás de tu cloud',
    'about.hero.subtitle': 'Somos 5 ingenieros AWS especializados en transformación cloud para Latinoamérica.',
    'about.mission.title': 'Nuestra misión',
    'about.mission.desc': 'Acelerar la adopción cloud en Latinoamérica con precisión técnica, transparencia y resultados medibles. Creemos que las empresas de la región merecen acceso a expertise AWS de clase mundial.',
    'about.values.title': 'Nuestros valores',
    'about.values.v1.title': 'Precisión',
    'about.values.v1.desc': 'Cada decisión técnica tiene fundamento. Nada al azar.',
    'about.values.v2.title': 'Escalabilidad',
    'about.values.v2.desc': 'Diseñamos pensando en el crecimiento, no solo en hoy.',
    'about.values.v3.title': 'Confianza',
    'about.values.v3.desc': 'Transparencia total en cada proyecto, desde el primer día.',
    'about.values.v4.title': 'Innovación',
    'about.values.v4.desc': 'Adoptamos lo nuevo cuando tiene sentido para el cliente.',
    'about.values.v5.title': 'Claridad',
    'about.values.v5.desc': 'Comunicamos sin jerga. El cliente siempre sabe qué está pasando.',
    'about.team.title': 'Conoce al equipo',
    'about.team.subtitle': 'Certificados, con experiencia real y apasionados por AWS.',
    'about.certs.title': 'Certificaciones AWS del equipo',
    'about.cta.title': '¿Listos para trabajar juntos?',
    'about.cta.btn': 'Contáctanos →',
    'contact.hero.title': 'Hablemos de tu proyecto',
    'contact.hero.subtitle': 'Primera consulta sin costo. Respondemos en menos de 24 horas.',
    'contact.form.title': 'Cuéntanos sobre tu proyecto',
    'contact.form.name': 'Tu nombre',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Email corporativo',
    'contact.form.service': 'Servicio de interés',
    'contact.form.service_default': 'Selecciona un servicio',
    'contact.form.message': 'Cuéntanos sobre tu proyecto',
    'contact.form.submit': 'Enviar mensaje →',
    'contact.form.success': '¡Mensaje enviado! Te contactamos pronto.',
    'contact.info.title': 'Información de contacto',
    'contact.info.email_label': 'Email',
    'contact.info.linkedin_label': 'LinkedIn',
    'contact.info.hours_label': 'Tiempo de respuesta',
    'contact.info.hours_val': 'Menos de 24 horas hábiles',
    'contact.faq.title': 'Preguntas frecuentes',
    'contact.faq.q1': '¿Cuánto cuesta la primera consulta?',
    'contact.faq.a1': 'La primera consulta es completamente sin costo. En esa sesión entendemos tu situación actual y te damos una perspectiva inicial de qué opciones tienes.',
    'contact.faq.q2': '¿Trabajan con empresas fuera de LATAM?',
    'contact.faq.a2': 'Nuestro foco es LATAM, pero trabajamos con equipos globales que tienen operaciones en la región. Coordinamos en español e inglés.',
    'contact.faq.q3': '¿Cuánto dura un proyecto típico?',
    'contact.faq.a3': 'Depende del alcance. Una migración puede durar de 4 a 16 semanas. Proyectos de optimización o seguridad pueden comenzar a mostrar resultados en 2-4 semanas.',
    'migration.hero.title': 'Migración AWS',
    'migration.hero.desc': 'Mueve tu infraestructura a AWS con mínimo riesgo y máxima confianza. Lift & shift, re-platforming o re-architecting — la estrategia que mejor se adapta a tu negocio.',
    'migration.hero.cta': 'Agenda una consulta →',
    'migration.includes.title': '¿Qué incluye?',
    'migration.process.title': 'Nuestro proceso',
    'migration.benefits.title': 'Beneficios',
    'migration.ideal.title': '¿Para quién es este servicio?',
    'migration.ideal.desc': 'Empresas que corren en data centers propios o en otros clouds que quieren migrar a AWS. Equipos que ya están en AWS con arquitecturas heredadas que necesitan modernización.',
    'migration.cta.title': '¿Listo para migrar?',
    'migration.cta.btn': 'Hablemos de tu migración →',
    'migration.inc.1': 'Evaluación del estado actual (discovery y assessment)',
    'migration.inc.2': 'Diseño de arquitectura target en AWS',
    'migration.inc.3': 'Definición de estrategia: lift & shift, re-platform o re-architect',
    'migration.inc.4': 'Plan de migración con cronograma y milestones',
    'migration.inc.5': 'Migración y validación de workloads',
    'migration.inc.6': 'Configuración de networking (VPC, subnets, security groups)',
    'migration.inc.7': 'Implementación de monitoreo con CloudWatch y alertas',
    'migration.inc.8': 'Optimización post-migración (rightsizing, Reserved Instances)',
    'migration.inc.9': 'Documentación técnica completa',
    'migration.inc.10': 'Soporte durante período de estabilización (4 semanas)',
    'migration.step1.title': 'Diagnóstico',
    'migration.step1.desc': 'Assessment del estado actual, inventario de workloads y definición de objetivos de negocio.',
    'migration.step2.title': 'Diseño',
    'migration.step2.desc': 'Arquitectura target en AWS, selección de servicios y plan de migración con fases y cronograma.',
    'migration.step3.title': 'Migración',
    'migration.step3.desc': 'Ejecución por fases, validación continua y cutover controlado con rollback plan definido.',
    'migration.step4.title': 'Optimización',
    'migration.step4.desc': 'Rightsizing, monitoreo, ajuste de costos y transferencia de conocimiento al equipo interno.',
    'migration.ben1.title': 'Reducción de costos de infraestructura',
    'migration.ben1.desc': 'Con rightsizing y Reserved Instances, la mayoría de las migraciones generan ahorro significativo vs. on-premises.',
    'migration.ben2.title': 'Disponibilidad con multi-AZ',
    'migration.ben2.desc': 'Arquitecturas de alta disponibilidad usando múltiples zonas de disponibilidad y balanceadores de carga.',
    'migration.ben3.metric': '0 días',
    'migration.ben3.title': 'Downtime en migraciones bien planificadas',
    'migration.ben3.desc': 'Estrategias blue/green y canary permiten migraciones sin interrupción del servicio para los usuarios.',
    'migration.ben4.title': 'Mayor velocidad de despliegue',
    'migration.ben4.desc': 'Con CI/CD y IaC implementado durante la migración, los equipos despliegan cambios más rápido y con mayor confianza.',
    'migration.aud1.title': 'Empresas en on-premises',
    'migration.aud1.desc': 'Con data centers propios o en colocation que quieren reducir CAPEX y mejorar agilidad.',
    'migration.aud2.title': 'Empresas en otro cloud',
    'migration.aud2.desc': 'Con cargas en Azure o GCP que quieren consolidar en AWS o aprovechar servicios específicos.',
    'migration.aud3.title': 'Equipos con deuda técnica AWS',
    'migration.aud3.desc': 'Ya en AWS pero con arquitecturas legacy que necesitan modernización y optimización.',
    'migration.aud4.title': 'Proyectos con requisitos de compliance',
    'migration.aud4.desc': 'Industrias reguladas (finanzas, salud) que necesitan cumplir SOC 2, ISO 27001 o similares en AWS.',
    'cygma.nav.access': 'Acceder a Cygma',
    'cygma.nav.demo': 'Solicitar demo',
    'cygma.hero.badge': 'AWS Intelligence Platform',
    'cygma.hero.title': 'Toda tu infraestructura AWS. Una sola vista.',
    'cygma.hero.subtitle': 'Cygma conecta con tu cuenta AWS en minutos y te muestra exactamente que tienes, cuanto gastas y donde estan los riesgos. Sin agentes. Sin configuracion compleja.',
    'cygma.hero.cta_demo': 'Solicitar una demo',
    'cygma.hero.cta_access': 'Acceder a Cygma',
    'cygma.hero.trust': 'Read-only. No modifica tu infraestructura.',
    'cygma.screenshot.dashboard': 'Dashboard principal de Cygma',
    'cygma.screenshot.inventory': 'Vista de inventario de recursos',
    'cygma.screenshot.security': 'Panel de analisis de seguridad',
    'cygma.screenshot.finops': 'Panel de optimizacion de costos',
    'cygma.screenshot.network': 'Diagrama de topologia de red',
    'cygma.problem.title': 'El problema que resolvemos',
    'cygma.problem.subtitle': 'Las cuentas AWS crecen rapido. La visibilidad desaparece mas rapido.',
    'cygma.problem.card1.title': 'Recursos olvidados',
    'cygma.problem.card1.desc': 'EC2 de pruebas que nadie apago. EBS sin montar. IPs elasticas sin usar. Cada mes pagan por recursos que nadie recuerda.',
    'cygma.problem.card2.title': 'Riesgos invisibles',
    'cygma.problem.card2.desc': 'Security groups abiertos a 0.0.0.0/0. S3 publicos por error. Secretos sin rotar. Los problemas existen. No los ven.',
    'cygma.problem.card3.title': 'Multiples cuentas',
    'cygma.problem.card3.desc': 'Desarrollo, staging, produccion. Cada cuenta es un mundo aparte. Nadie tiene la foto completa.',
    'cygma.problem.card4.title': 'Costos sorpresa',
    'cygma.problem.card4.desc': 'La factura llega. Es mas alta de lo esperado. Nadie sabe exactamente por que. El mes siguiente se repite.',
    'cygma.platform.title': 'Una plataforma. Visibilidad total.',
    'cygma.platform.subtitle': 'Cygma escanea tu cuenta AWS y construye un mapa completo de tu infraestructura.',
    'cygma.capabilities.title': 'Que puedes hacer con Cygma',
    'cygma.capabilities.inventory.title': 'Inventario completo',
    'cygma.capabilities.inventory.desc': 'Ve cada EC2, RDS, S3, Lambda y mas de 50 servicios AWS en una sola pantalla. Filtra, busca, exporta.',
    'cygma.capabilities.security.title': 'Analisis de seguridad',
    'cygma.capabilities.security.desc': 'Detecta security groups abiertos, S3 publicos, IAM con permisos excesivos. Prioriza por severidad.',
    'cygma.capabilities.costs.title': 'Optimizacion de costos',
    'cygma.capabilities.costs.desc': 'Identifica recursos sin uso, instancias sobredimensionadas, oportunidades de Reserved Instances.',
    'cygma.capabilities.topology.title': 'Topologia de red',
    'cygma.capabilities.topology.desc': 'Visualiza VPCs, subnets, peerings y flujos de trafico. Entiende como se conecta todo.',
    'cygma.capabilities.multicloud.title': 'Multi-cuenta',
    'cygma.capabilities.multicloud.desc': 'Conecta todas tus cuentas AWS. Ve la infraestructura completa de tu organizacion en un solo lugar.',
    'cygma.capabilities.reports.title': 'Reportes ejecutivos',
    'cygma.capabilities.reports.desc': 'Genera reportes PDF listos para presentar. Metricas claras para stakeholders tecnicos y no tecnicos.',
    'cygma.how.title': 'Como funciona',
    'cygma.how.subtitle': 'De cero a visibilidad total en menos de 10 minutos.',
    'cygma.how.step1.title': 'Conecta tu cuenta AWS',
    'cygma.how.step1.desc': 'Despliega un rol IAM read-only con nuestro template CloudFormation. Un clic. Sin credenciales en texto plano.',
    'cygma.how.step2.title': 'Cygma escanea',
    'cygma.how.step2.desc': 'En minutos, Cygma descubre todos tus recursos, relaciones y configuraciones. El escaneo es automatico y continuo.',
    'cygma.how.step3.title': 'Obtén insights',
    'cygma.how.step3.desc': 'Ve tu inventario completo, problemas de seguridad, oportunidades de ahorro y topologia de red. Todo en tiempo real.',
    'cygma.security.badge': 'Seguridad',
    'cygma.security.title': 'Detecta vulnerabilidades antes de que sean incidentes',
    'cygma.security.item1': 'Security groups con puertos abiertos a internet',
    'cygma.security.item2': 'Buckets S3 con acceso publico',
    'cygma.security.item3': 'Usuarios IAM sin MFA habilitado',
    'cygma.security.item4': 'Roles con permisos excesivos',
    'cygma.security.item5': 'Secretos y credenciales sin rotar',
    'cygma.security.item6': 'Recursos sin cifrado habilitado',
    'cygma.security.cta': 'Ver demo de seguridad',
    'cygma.finops.badge': 'FinOps',
    'cygma.finops.title': 'Encuentra el dinero que estas perdiendo',
    'cygma.finops.item1': 'EC2 e instancias RDS sobredimensionadas',
    'cygma.finops.item2': 'Volumenes EBS sin usar o detached',
    'cygma.finops.item3': 'Elastic IPs sin asociar',
    'cygma.finops.item4': 'Snapshots antiguos acumulando costos',
    'cygma.finops.item5': 'Oportunidades de Reserved Instances',
    'cygma.finops.item6': 'NAT Gateways con bajo uso',
    'cygma.finops.cta': 'Ver demo de FinOps',
    'cygma.network.title': 'Entiende tu red de un vistazo',
    'cygma.network.subtitle': 'Visualiza VPCs, subnets, route tables, peerings y flujos de trafico en diagramas interactivos.',
    'cygma.pricing.title': 'Planes simples. Sin sorpresas.',
    'cygma.pricing.subtitle': 'Elige el plan que se ajusta a tu infraestructura.',
    'cygma.pricing.promo.badge': 'Early Adopter',
    'cygma.pricing.promo.title': 'Precio especial de lanzamiento',
    'cygma.pricing.promo.desc': 'Para los primeros 50 clientes. Plan Starter a <strong>USD $199/mes</strong> de por vida.',
    'cygma.pricing.period': '/mes',
    'cygma.pricing.popular': 'Mas popular',
    'cygma.pricing.cta_start': 'Comenzar',
    'cygma.pricing.cta_contact': 'Contactar ventas',
    'cygma.pricing.starter.name': 'Starter',
    'cygma.pricing.starter.desc': 'Para equipos que empiezan con AWS',
    'cygma.pricing.starter.f1': '1 cuenta AWS',
    'cygma.pricing.starter.f2': 'Hasta 500 recursos',
    'cygma.pricing.starter.f3': 'Inventario completo',
    'cygma.pricing.starter.f4': 'Analisis de seguridad basico',
    'cygma.pricing.starter.f5': 'Reportes mensuales',
    'cygma.pricing.starter.f6': 'Soporte por email',
    'cygma.pricing.business.name': 'Business',
    'cygma.pricing.business.desc': 'Para empresas en crecimiento',
    'cygma.pricing.business.f1': 'Hasta 5 cuentas AWS',
    'cygma.pricing.business.f2': 'Recursos ilimitados',
    'cygma.pricing.business.f3': 'Todo de Starter, mas:',
    'cygma.pricing.business.f4': 'Analisis de costos avanzado',
    'cygma.pricing.business.f5': 'Topologia de red',
    'cygma.pricing.business.f6': 'Alertas y notificaciones',
    'cygma.pricing.business.f7': 'Soporte prioritario',
    'cygma.pricing.enterprise.name': 'Enterprise',
    'cygma.pricing.enterprise.desc': 'Para organizaciones grandes',
    'cygma.pricing.enterprise.price': 'Personalizado',
    'cygma.pricing.enterprise.f1': 'Cuentas ilimitadas',
    'cygma.pricing.enterprise.f2': 'Todo de Business, mas:',
    'cygma.pricing.enterprise.f3': 'SSO / SAML',
    'cygma.pricing.enterprise.f4': 'API access',
    'cygma.pricing.enterprise.f5': 'Integraciones personalizadas',
    'cygma.pricing.enterprise.f6': 'SLA garantizado',
    'cygma.pricing.enterprise.f7': 'Customer Success dedicado',
    'cygma.faq.title': 'Preguntas frecuentes',
    'cygma.faq.q1': 'Es seguro conectar mi cuenta AWS?',
    'cygma.faq.a1': 'Si. Cygma usa un rol IAM read-only. No puede modificar, crear o eliminar recursos en tu cuenta. Solo lee metadatos y configuraciones.',
    'cygma.faq.q2': 'Cuanto tarda el primer escaneo?',
    'cygma.faq.a2': 'Depende del numero de recursos. Una cuenta con 500 recursos se escanea en menos de 5 minutos. Cuentas grandes pueden tomar hasta 30 minutos.',
    'cygma.faq.q3': 'Puedo conectar cuentas de AWS Organizations?',
    'cygma.faq.a3': 'Si. Cygma soporta AWS Organizations. Puedes conectar la cuenta de management y descubrir automaticamente todas las cuentas miembro.',
    'cygma.faq.q4': 'Que pasa con mis datos?',
    'cygma.faq.a4': 'Tus datos se almacenan cifrados en AWS (us-east-1). No vendemos ni compartimos tu informacion. Puedes eliminar todos tus datos en cualquier momento.',
    'cygma.faq.q5': 'Hay periodo de prueba?',
    'cygma.faq.a5': 'Ofrecemos una demo personalizada donde conectamos tu cuenta y te mostramos los resultados en vivo. Contactanos para agendar.',
    'cygma.faq.q6': 'Soportan otras nubes?',
    'cygma.faq.a6': 'Actualmente Cygma se enfoca exclusivamente en AWS. Soporte para Azure y GCP esta en el roadmap para 2027.',
    'cygma.cta.title': 'Deja de adivinar. Empieza a ver.',
    'cygma.cta.subtitle': 'Conecta tu cuenta AWS y obten visibilidad total en minutos.',
    'cygma.cta.demo': 'Solicitar una demo',
    'cygma.cta.access': 'Acceder a Cygma',
  },
  en: {
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Talk →",
    'nav.migration': 'AWS Migration',
    'nav.architecture': 'Cloud Architecture',
    'nav.costs': 'Cost Optimization',
    'nav.security': 'Cloud Security',
    'nav.devops': 'DevOps & CI/CD',
    'nav.aiml': 'AI / ML on AWS',
    'nav.coming_soon': '(Coming soon)',
    'hero.badge': '● Cloud Consulting LATAM',
    'hero.title': 'Cloud That Scales',
    'hero.subtitle': 'Your AWS infrastructure, built to grow.',
    'hero.desc': 'We design, migrate, and optimize your AWS.',
    'hero.cta1': 'Book a consultation →',
    'hero.cta2': 'View services',
    'stats.engineers_label': 'AWS Engineers',
    'stats.specs_label': 'AWS Specialties',
    'stats.focus_label': 'AWS Focus',
    'stats.coverage_label': 'Regional coverage',
    'challenge.title': "What's your challenge?",
    'challenge.subtitle': "Select your challenge and we'll show you how we solve it.",
    'challenge.opt1': 'Migrate my infrastructure to AWS',
    'challenge.opt2': 'Design a scalable architecture',
    'challenge.opt3': 'Reduce cloud costs',
    'challenge.opt4': 'Strengthen my infrastructure security',
    'challenge.opt5': 'Implement DevOps and automation',
    'challenge.opt6': 'Integrate AI/ML into my processes',
    'challenge.desc1': 'We accompany you through every stage of your AWS migration: from initial assessment to cutover. Lift & shift, re-platforming or re-architecting — whatever fits your business best.',
    'challenge.desc2': 'We design AWS Well-Architected architectures that scale with your business. Six pillars review: Operational Excellence, Security, Reliability, Performance, Cost Optimization, and Sustainability.',
    'challenge.desc3': 'We identify waste and optimize your cloud spend with FinOps, rightsizing, Reserved Instances and Savings Plans. Measurable results from month one.',
    'challenge.desc4': 'We implement AWS security controls: IAM with least-privilege, GuardDuty, Security Hub, CloudTrail, and incident response plans aligned to SOC 2 and ISO 27001.',
    'challenge.desc5': 'We build CI/CD pipelines, implement IaC with Terraform and CDK, and orchestrate workloads with EKS or ECS. Your dev team ships faster with more confidence.',
    'challenge.desc6': 'We integrate AI/ML capabilities into your processes with SageMaker, Bedrock and Rekognition. From PoC to production, with MLOps to keep your models current.',
    'challenge.cta': 'Learn more →',
    'services.title': 'Our services',
    'services.subtitle': 'Specialized AWS solutions for every stage of your cloud journey.',
    'services.s1.name': 'AWS Migration',
    'services.s1.desc': 'Lift & shift, re-platforming and re-architecting with minimal risk.',
    'services.s2.name': 'Cloud Architecture',
    'services.s2.desc': 'Well-Architected Framework, scalable and resilient design.',
    'services.s3.name': 'Cost Optimization',
    'services.s3.desc': 'FinOps, rightsizing and Reserved Instances to reduce your spend.',
    'services.s4.name': 'Cloud Security',
    'services.s4.desc': 'IAM, compliance, threat detection and incident response.',
    'services.s5.name': 'DevOps & CI/CD',
    'services.s5.desc': 'Pipelines, IaC with Terraform/CDK, Kubernetes and monitoring.',
    'services.s6.name': 'AI / ML on AWS',
    'services.s6.desc': 'SageMaker, Bedrock and GenAI integrations to scale with AI.',
    'services.learn_more': 'Learn more →',
    'services.coming_soon': 'Coming soon',
    'aws.title': 'Certified AWS Specialists',
    'aws.subtitle': 'Our team holds certifications in the most in-demand specialties.',
    'why.title': 'Why Zervonix?',
    'why.1.title': 'Pure AWS',
    'why.1.desc': '100% AWS. More depth, better results.',
    'why.2.title': 'LATAM Native',
    'why.2.desc': 'Your context, your language, your reality.',
    'why.3.title': 'Measurable results',
    'why.3.desc': 'Clear metrics from day one.',
    'expertise.title': 'Our Expertise',
    'expertise.subtitle': 'A team of certified AWS engineers with enterprise project experience.',
    'expertise.engineers': 'AWS Engineers',
    'expertise.years': 'Combined Years',
    'expertise.projects': 'Projects Delivered',
    'expertise.certs': 'AWS Certifications',
    'team.title': 'Our team',
    'team.subtitle': 'AWS-certified engineers with real enterprise experience across Latin America.',
    'cta.title': 'Ready to transform your infrastructure?',
    'cta.subtitle': "Free first consultation.",
    'cta.btn': 'Book your free consultation →',
    'footer.tagline': 'Cloud Consulting LATAM',
    'footer.services_col': 'Services',
    'footer.products_col': 'Products',
    'footer.company_col': 'Company',
    'footer.legal_col': 'Legal',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.linkedin': 'LinkedIn',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2026 Zervonix. All rights reserved.',
    'about.hero.title': 'The team behind your cloud',
    'about.hero.subtitle': 'We are 5 AWS engineers specialized in cloud transformation for Latin America.',
    'about.mission.title': 'Our mission',
    'about.mission.desc': 'Accelerate cloud adoption in Latin America with technical precision, transparency and measurable results. We believe companies in the region deserve access to world-class AWS expertise.',
    'about.values.title': 'Our values',
    'about.values.v1.title': 'Precision',
    'about.values.v1.desc': 'Every technical decision has a reason. Nothing is arbitrary.',
    'about.values.v2.title': 'Scalability',
    'about.values.v2.desc': 'We design for growth, not just for today.',
    'about.values.v3.title': 'Trust',
    'about.values.v3.desc': 'Full transparency on every project, from day one.',
    'about.values.v4.title': 'Innovation',
    'about.values.v4.desc': 'We adopt new tech when it makes sense for the client.',
    'about.values.v5.title': 'Clarity',
    'about.values.v5.desc': "We communicate without jargon. The client always knows what's happening.",
    'about.team.title': 'Meet the team',
    'about.team.subtitle': 'Certified, with real experience and passionate about AWS.',
    'about.certs.title': 'Team AWS certifications',
    'about.cta.title': 'Ready to work together?',
    'about.cta.btn': 'Contact us →',
    'contact.hero.title': "Let's talk about your project",
    'contact.hero.subtitle': 'First consultation is free. We respond in less than 24 hours.',
    'contact.form.title': 'Tell us about your project',
    'contact.form.name': 'Your name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Work email',
    'contact.form.service': 'Service of interest',
    'contact.form.service_default': 'Select a service',
    'contact.form.message': 'Tell us about your project',
    'contact.form.submit': 'Send message →',
    'contact.form.success': "Message sent! We'll be in touch soon.",
    'contact.info.title': 'Contact information',
    'contact.info.email_label': 'Email',
    'contact.info.linkedin_label': 'LinkedIn',
    'contact.info.hours_label': 'Response time',
    'contact.info.hours_val': 'Less than 24 business hours',
    'contact.faq.title': 'Frequently asked questions',
    'contact.faq.q1': 'How much does the first consultation cost?',
    'contact.faq.a1': 'The first consultation is completely free. In that session we understand your current situation and give you an initial perspective on your options.',
    'contact.faq.q2': 'Do you work with companies outside LATAM?',
    'contact.faq.a2': 'Our focus is LATAM, but we work with global teams with operations in the region. We coordinate in Spanish and English.',
    'contact.faq.q3': 'How long does a typical project take?',
    'contact.faq.a3': 'It depends on scope. A migration can take 4 to 16 weeks. Optimization or security projects can start showing results in 2-4 weeks.',
    'migration.hero.title': 'AWS Migration',
    'migration.hero.desc': 'Move your infrastructure to AWS with minimal risk and maximum confidence. Lift & shift, re-platforming or re-architecting — the strategy that best fits your business.',
    'migration.hero.cta': 'Book a consultation →',
    'migration.includes.title': "What's included?",
    'migration.process.title': 'Our process',
    'migration.benefits.title': 'Benefits',
    'migration.ideal.title': 'Who is this service for?',
    'migration.ideal.desc': 'Companies running on-premises or on other clouds looking to migrate to AWS. Teams already on AWS with legacy architectures that need modernization.',
    'migration.cta.title': 'Ready to migrate?',
    'migration.cta.btn': "Let's discuss your migration →",
    'migration.inc.1': 'Current state assessment (discovery and assessment)',
    'migration.inc.2': 'Target architecture design in AWS',
    'migration.inc.3': 'Strategy definition: lift & shift, re-platform, or re-architect',
    'migration.inc.4': 'Migration plan with timeline and milestones',
    'migration.inc.5': 'Workload migration and validation',
    'migration.inc.6': 'Networking configuration (VPC, subnets, security groups)',
    'migration.inc.7': 'Monitoring implementation with CloudWatch and alerts',
    'migration.inc.8': 'Post-migration optimization (rightsizing, Reserved Instances)',
    'migration.inc.9': 'Complete technical documentation',
    'migration.inc.10': 'Support during stabilization period (4 weeks)',
    'migration.step1.title': 'Assessment',
    'migration.step1.desc': 'Current state assessment, workload inventory, and business objectives definition.',
    'migration.step2.title': 'Design',
    'migration.step2.desc': 'Target architecture in AWS, service selection, and migration plan with phases and timeline.',
    'migration.step3.title': 'Migration',
    'migration.step3.desc': 'Phased execution, continuous validation, and controlled cutover with defined rollback plan.',
    'migration.step4.title': 'Optimization',
    'migration.step4.desc': 'Rightsizing, monitoring, cost adjustment, and knowledge transfer to internal team.',
    'migration.ben1.title': 'Infrastructure cost reduction',
    'migration.ben1.desc': 'With rightsizing and Reserved Instances, most migrations generate significant savings vs. on-premises.',
    'migration.ben2.title': 'Multi-AZ availability',
    'migration.ben2.desc': 'High availability architectures using multiple availability zones and load balancers.',
    'migration.ben3.metric': '0 days',
    'migration.ben3.title': 'Downtime in well-planned migrations',
    'migration.ben3.desc': 'Blue/green and canary strategies allow migrations without service interruption for users.',
    'migration.ben4.title': 'Faster deployment speed',
    'migration.ben4.desc': 'With CI/CD and IaC implemented during migration, teams deploy changes faster and with more confidence.',
    'migration.aud1.title': 'On-premises companies',
    'migration.aud1.desc': 'With their own data centers or colocation looking to reduce CAPEX and improve agility.',
    'migration.aud2.title': 'Companies on other clouds',
    'migration.aud2.desc': 'With workloads on Azure or GCP looking to consolidate on AWS or use specific services.',
    'migration.aud3.title': 'Teams with AWS technical debt',
    'migration.aud3.desc': 'Already on AWS but with legacy architectures that need modernization and optimization.',
    'migration.aud4.title': 'Projects with compliance requirements',
    'migration.aud4.desc': 'Regulated industries (finance, healthcare) that need to meet SOC 2, ISO 27001 or similar on AWS.',
    'cygma.nav.access': 'Access Cygma',
    'cygma.nav.demo': 'Request demo',
    'cygma.hero.badge': 'AWS Intelligence Platform',
    'cygma.hero.title': 'Your entire AWS infrastructure. One view.',
    'cygma.hero.subtitle': 'Cygma connects to your AWS account in minutes and shows you exactly what you have, how much you spend, and where the risks are. No agents. No complex setup.',
    'cygma.hero.cta_demo': 'Request a demo',
    'cygma.hero.cta_access': 'Access Cygma',
    'cygma.hero.trust': 'Read-only. Does not modify your infrastructure.',
    'cygma.screenshot.dashboard': 'Cygma main dashboard',
    'cygma.screenshot.inventory': 'Resource inventory view',
    'cygma.screenshot.security': 'Security analysis panel',
    'cygma.screenshot.finops': 'Cost optimization panel',
    'cygma.screenshot.network': 'Network topology diagram',
    'cygma.problem.title': 'The problem we solve',
    'cygma.problem.subtitle': 'AWS accounts grow fast. Visibility disappears faster.',
    'cygma.problem.card1.title': 'Forgotten resources',
    'cygma.problem.card1.desc': 'Test EC2 instances nobody turned off. Unattached EBS volumes. Unused Elastic IPs. Every month you pay for resources nobody remembers.',
    'cygma.problem.card2.title': 'Invisible risks',
    'cygma.problem.card2.desc': 'Security groups open to 0.0.0.0/0. Accidentally public S3 buckets. Unrotated secrets. The problems exist. You just cannot see them.',
    'cygma.problem.card3.title': 'Multiple accounts',
    'cygma.problem.card3.desc': 'Development, staging, production. Each account is its own world. Nobody has the complete picture.',
    'cygma.problem.card4.title': 'Surprise costs',
    'cygma.problem.card4.desc': 'The bill arrives. Higher than expected. Nobody knows exactly why. Next month it repeats.',
    'cygma.platform.title': 'One platform. Total visibility.',
    'cygma.platform.subtitle': 'Cygma scans your AWS account and builds a complete map of your infrastructure.',
    'cygma.capabilities.title': 'What you can do with Cygma',
    'cygma.capabilities.inventory.title': 'Complete inventory',
    'cygma.capabilities.inventory.desc': 'See every EC2, RDS, S3, Lambda and 50+ AWS services on a single screen. Filter, search, export.',
    'cygma.capabilities.security.title': 'Security analysis',
    'cygma.capabilities.security.desc': 'Detect open security groups, public S3, IAM with excessive permissions. Prioritize by severity.',
    'cygma.capabilities.costs.title': 'Cost optimization',
    'cygma.capabilities.costs.desc': 'Identify unused resources, oversized instances, Reserved Instance opportunities.',
    'cygma.capabilities.topology.title': 'Network topology',
    'cygma.capabilities.topology.desc': 'Visualize VPCs, subnets, peerings and traffic flows. Understand how everything connects.',
    'cygma.capabilities.multicloud.title': 'Multi-account',
    'cygma.capabilities.multicloud.desc': 'Connect all your AWS accounts. See your entire organization infrastructure in one place.',
    'cygma.capabilities.reports.title': 'Executive reports',
    'cygma.capabilities.reports.desc': 'Generate presentation-ready PDF reports. Clear metrics for technical and non-technical stakeholders.',
    'cygma.how.title': 'How it works',
    'cygma.how.subtitle': 'From zero to total visibility in less than 10 minutes.',
    'cygma.how.step1.title': 'Connect your AWS account',
    'cygma.how.step1.desc': 'Deploy a read-only IAM role with our CloudFormation template. One click. No plaintext credentials.',
    'cygma.how.step2.title': 'Cygma scans',
    'cygma.how.step2.desc': 'In minutes, Cygma discovers all your resources, relationships and configurations. Scanning is automatic and continuous.',
    'cygma.how.step3.title': 'Get insights',
    'cygma.how.step3.desc': 'See your complete inventory, security issues, savings opportunities and network topology. All in real time.',
    'cygma.security.badge': 'Security',
    'cygma.security.title': 'Detect vulnerabilities before they become incidents',
    'cygma.security.item1': 'Security groups with ports open to the internet',
    'cygma.security.item2': 'S3 buckets with public access',
    'cygma.security.item3': 'IAM users without MFA enabled',
    'cygma.security.item4': 'Roles with excessive permissions',
    'cygma.security.item5': 'Unrotated secrets and credentials',
    'cygma.security.item6': 'Resources without encryption enabled',
    'cygma.security.cta': 'See security demo',
    'cygma.finops.badge': 'FinOps',
    'cygma.finops.title': 'Find the money you are losing',
    'cygma.finops.item1': 'Oversized EC2 and RDS instances',
    'cygma.finops.item2': 'Unused or detached EBS volumes',
    'cygma.finops.item3': 'Unassociated Elastic IPs',
    'cygma.finops.item4': 'Old snapshots accumulating costs',
    'cygma.finops.item5': 'Reserved Instance opportunities',
    'cygma.finops.item6': 'Low-usage NAT Gateways',
    'cygma.finops.cta': 'See FinOps demo',
    'cygma.network.title': 'Understand your network at a glance',
    'cygma.network.subtitle': 'Visualize VPCs, subnets, route tables, peerings and traffic flows in interactive diagrams.',
    'cygma.pricing.title': 'Simple plans. No surprises.',
    'cygma.pricing.subtitle': 'Choose the plan that fits your infrastructure.',
    'cygma.pricing.promo.badge': 'Early Adopter',
    'cygma.pricing.promo.title': 'Special launch pricing',
    'cygma.pricing.promo.desc': 'For the first 50 customers. Starter plan at <strong>USD $199/month</strong> for life.',
    'cygma.pricing.period': '/month',
    'cygma.pricing.popular': 'Most popular',
    'cygma.pricing.cta_start': 'Get started',
    'cygma.pricing.cta_contact': 'Contact sales',
    'cygma.pricing.starter.name': 'Starter',
    'cygma.pricing.starter.desc': 'For teams starting with AWS',
    'cygma.pricing.starter.f1': '1 AWS account',
    'cygma.pricing.starter.f2': 'Up to 500 resources',
    'cygma.pricing.starter.f3': 'Complete inventory',
    'cygma.pricing.starter.f4': 'Basic security analysis',
    'cygma.pricing.starter.f5': 'Monthly reports',
    'cygma.pricing.starter.f6': 'Email support',
    'cygma.pricing.business.name': 'Business',
    'cygma.pricing.business.desc': 'For growing companies',
    'cygma.pricing.business.f1': 'Up to 5 AWS accounts',
    'cygma.pricing.business.f2': 'Unlimited resources',
    'cygma.pricing.business.f3': 'Everything in Starter, plus:',
    'cygma.pricing.business.f4': 'Advanced cost analysis',
    'cygma.pricing.business.f5': 'Network topology',
    'cygma.pricing.business.f6': 'Alerts and notifications',
    'cygma.pricing.business.f7': 'Priority support',
    'cygma.pricing.enterprise.name': 'Enterprise',
    'cygma.pricing.enterprise.desc': 'For large organizations',
    'cygma.pricing.enterprise.price': 'Custom',
    'cygma.pricing.enterprise.f1': 'Unlimited accounts',
    'cygma.pricing.enterprise.f2': 'Everything in Business, plus:',
    'cygma.pricing.enterprise.f3': 'SSO / SAML',
    'cygma.pricing.enterprise.f4': 'API access',
    'cygma.pricing.enterprise.f5': 'Custom integrations',
    'cygma.pricing.enterprise.f6': 'Guaranteed SLA',
    'cygma.pricing.enterprise.f7': 'Dedicated Customer Success',
    'cygma.faq.title': 'Frequently asked questions',
    'cygma.faq.q1': 'Is it safe to connect my AWS account?',
    'cygma.faq.a1': 'Yes. Cygma uses a read-only IAM role. It cannot modify, create or delete resources in your account. It only reads metadata and configurations.',
    'cygma.faq.q2': 'How long does the first scan take?',
    'cygma.faq.a2': 'Depends on the number of resources. An account with 500 resources scans in less than 5 minutes. Large accounts may take up to 30 minutes.',
    'cygma.faq.q3': 'Can I connect AWS Organizations accounts?',
    'cygma.faq.a3': 'Yes. Cygma supports AWS Organizations. You can connect the management account and automatically discover all member accounts.',
    'cygma.faq.q4': 'What happens with my data?',
    'cygma.faq.a4': 'Your data is stored encrypted in AWS (us-east-1). We do not sell or share your information. You can delete all your data at any time.',
    'cygma.faq.q5': 'Is there a trial period?',
    'cygma.faq.a5': 'We offer a personalized demo where we connect your account and show you the results live. Contact us to schedule.',
    'cygma.faq.q6': 'Do you support other clouds?',
    'cygma.faq.a6': 'Currently Cygma focuses exclusively on AWS. Support for Azure and GCP is on the roadmap for 2027.',
    'cygma.cta.title': 'Stop guessing. Start seeing.',
    'cygma.cta.subtitle': 'Connect your AWS account and get total visibility in minutes.',
    'cygma.cta.demo': 'Request a demo',
    'cygma.cta.access': 'Access Cygma',
  }
};

// Challenge links by index
const challengeLinks = {
  1: 'servicios/aws-migration.html',
  2: 'contacto.html',
  3: 'contacto.html',
  4: 'contacto.html',
  5: 'contacto.html',
  6: 'contacto.html',
};

// ============================================================
// STATE
// ============================================================
let currentLang = 'es';

// ============================================================
// I18N
// ============================================================
function detectLang() {
  const stored = localStorage.getItem('zervonix_lang');
  if (stored === 'es' || stored === 'en') return stored;
  return navigator.language.startsWith('en') ? 'en' : 'es';
}

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations['es'] && translations['es'][key])
    || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
  const activeOption = document.querySelector('.challenge__option.active');
  if (activeOption) {
    updateChallengeDesc(parseInt(activeOption.dataset.index));
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('zervonix_lang', lang);
  applyTranslations();
}

// ============================================================
// NAV
// ============================================================
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 10);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const servicesBtn = document.getElementById('nav-services-btn');
  const servicesDropdown = servicesBtn && servicesBtn.closest('.nav__dropdown');
  const productsBtn = document.getElementById('nav-products-btn');
  const productsDropdown = productsBtn && productsBtn.closest('.nav__dropdown');

  if (servicesBtn && servicesDropdown) {
    servicesBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (productsDropdown) productsDropdown.classList.remove('open');
      servicesDropdown.classList.toggle('open');
    });
    servicesDropdown.addEventListener('click', e => e.stopPropagation());
  }

  if (productsBtn && productsDropdown) {
    productsBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (servicesDropdown) servicesDropdown.classList.remove('open');
      productsDropdown.classList.toggle('open');
    });
    productsDropdown.addEventListener('click', e => e.stopPropagation());
  }

  document.addEventListener('click', () => {
    if (servicesDropdown) servicesDropdown.classList.remove('open');
    if (productsDropdown) productsDropdown.classList.remove('open');
  });
}

// ============================================================
// LANG TOGGLE
// ============================================================
function initLangToggle() {
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

// ============================================================
// CHALLENGE PANEL
// ============================================================
function updateChallengeDesc(index) {
  const descEl = document.getElementById('challenge-desc');
  if (!descEl) return;
  const desc = t('challenge.desc' + index);
  const link = challengeLinks[index] || 'contacto.html';
  const cta = t('challenge.cta');
  descEl.innerHTML = '<p>' + desc + '</p><a href="' + link + '">' + cta + '</a>';
}

function initChallengePanel() {
  const options = document.querySelectorAll('.challenge__option');
  if (!options.length) return;
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      updateChallengeDesc(parseInt(opt.dataset.index, 10));
    });
  });
  if (options[0]) {
    options[0].classList.add('active');
    updateChallengeDesc(1);
  }
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', () => {
    setTimeout(() => {
      const successEl = document.getElementById('form-success');
      if (successEl) {
        successEl.style.display = 'block';
        form.reset();
      }
    }, 800);
  });
}

// ============================================================
// LUCIDE ICONS (SVG inline)
// ============================================================
const LUCIDE_ICONS = {
  'cloud-upload': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>',

  'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',

  'trending-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',

  'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',

  'git-merge': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>',

  'brain': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',

  'cloud': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',

  'network': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',

  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
};

// Helper function to get icon
function getLucideIcon(name, size = 24) {
  const icon = LUCIDE_ICONS[name];
  if (!icon) return '';
  return icon.replace(/width="24"/g, `width="${size}"`).replace(/height="24"/g, `height="${size}"`);
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-on-scroll, .hero__content, .hero__visual');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ============================================================
// COUNTER ANIMATIONS
// ============================================================
function animateCounter(element, target, duration = 1500) {
  const startTime = performance.now();
  const isPlus = target.toString().includes('+');
  const isPercent = target.toString().includes('%') || parseInt(target) === 100;
  const numericTarget = parseInt(target.toString().replace(/[^0-9]/g, ''));

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.round(easedProgress * numericTarget);

    let suffix = '';
    if (isPlus) suffix = '+';
    if (isPercent) suffix = '%';

    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');

  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-counter');
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(el => {
    el.textContent = '0';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initCounterAnimations);

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectLang();
  initNav();
  initLangToggle();
  initChallengePanel();
  initContactForm();
  applyTranslations();
});
