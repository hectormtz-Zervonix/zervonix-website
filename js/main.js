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
    'hero.desc': 'Tu socio estratégico en AWS para Latinoamérica. Diseñamos, migramos y optimizamos con precisión técnica.',
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
    'partner.title': 'Respaldados por Amazon Web Services',
    'partner.desc': 'Nuestro equipo cuenta con certificaciones AWS en Solutions Architecture, DevOps Engineer, Security Specialty y Networking — las especialidades más demandadas en proyectos cloud enterprise.',
    'why.title': '¿Por qué Zervonix?',
    'why.1.title': 'AWS Puro',
    'why.1.desc': 'No somos multi-cloud genérico. Toda nuestra expertise es AWS — más profundidad, mejores resultados.',
    'why.2.title': 'LATAM Nativo',
    'why.2.desc': 'Entendemos el contexto regulatorio y de negocio de la región. Hablamos tu idioma y tu realidad.',
    'why.3.title': 'Resultados medibles',
    'why.3.desc': 'Cada proyecto tiene métricas claras de éxito desde el día uno. Sin sorpresas, sin promesas vacías.',
    'team.title': 'Nuestro equipo',
    'team.subtitle': 'Ingenieros certificados AWS con experiencia en proyectos enterprise para Latinoamérica.',
    'cta.title': '¿Listo para transformar tu infraestructura?',
    'cta.subtitle': 'Hablemos de tu proyecto. Primera consulta sin costo.',
    'cta.btn': 'Agenda tu consulta gratuita →',
    'footer.tagline': 'Cloud Consulting LATAM',
    'footer.services_col': 'Servicios',
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
    'hero.desc': 'Your strategic AWS partner for Latin America. We design, migrate and optimize with technical precision.',
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
    'partner.title': 'Backed by Amazon Web Services',
    'partner.desc': 'Our team holds AWS certifications in Solutions Architecture, DevOps Engineer, Security Specialty and Networking — the most in-demand specialties for enterprise cloud projects.',
    'why.title': 'Why Zervonix?',
    'why.1.title': 'Pure AWS',
    'why.1.desc': "We're not generic multi-cloud. Our entire expertise is AWS — more depth, better results.",
    'why.2.title': 'LATAM Native',
    'why.2.desc': 'We understand the regulatory and business context of the region. We speak your language and your reality.',
    'why.3.title': 'Measurable results',
    'why.3.desc': 'Every project has clear success metrics from day one. No surprises, no empty promises.',
    'team.title': 'Our team',
    'team.subtitle': 'AWS-certified engineers with real enterprise experience across Latin America.',
    'cta.title': 'Ready to transform your infrastructure?',
    'cta.subtitle': "Let's talk about your project. First consultation is free.",
    'cta.btn': 'Book your free consultation →',
    'footer.tagline': 'Cloud Consulting LATAM',
    'footer.services_col': 'Services',
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
  if (servicesBtn && servicesDropdown) {
    servicesBtn.addEventListener('click', e => {
      e.stopPropagation();
      servicesDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      servicesDropdown.classList.remove('open');
    });
    servicesDropdown.addEventListener('click', e => e.stopPropagation());
  }
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
