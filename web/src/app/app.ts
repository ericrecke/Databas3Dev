import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly language = signal<'es' | 'en'>('es');
  protected readonly theme = signal<'dark' | 'light'>('dark');

  private readonly literals = {
    es: {
      nav: { home: 'Inicio', services: 'Servicios', portfolio: 'Portafolio', contact: 'Contacto' },
      headerContact: 'Contactame',
      switchLabel: 'EN',
      eyebrow: 'Desarrollador',
      title: 'Full Stack',
      subtitle: 'Angular, Node, .NET & Mongo / SQL',
      description: 'Creando sitios web potentes y escalables con una experiencia cuidada.',
      portfolioButton: 'Ver Portafolio',
      contactButton: 'Contactame',
      chip1: 'UI moderna',
      chip2: 'APIs robustas',
      chip3: 'Deploy continuo',
      metricYears: 'Años de experiencia',
      metricProjects: 'Proyectos entregados',
      servicesTitle: 'Mis Servicios',
      servicesSubtitle: '¿Qué puedo hacer por ti?',
      serviceFrontend: 'Desarrollo Frontend',
      serviceFrontendDesc: 'Aplicaciones modernas con Angular y diseño a medida.',
      serviceBackend: 'Back-end con Node.js',
      serviceBackendDesc: 'APIs seguras, escalables y bien documentadas.',
      serviceDb: 'Bases de Datos',
      serviceDbDesc: 'Modelado de datos en MongoDB y MySQL / SQL.',
      projectsTitle: 'Proyectos Destacados',
      projectsSubtitle: 'Algunos de mis mejores trabajos',
      viewProject: 'Ver proyecto',
      crmName: 'Sistema de CRM',
      moreProjects: 'Ver Más Proyectos',
      ctaTitle: '¿Listo para Comenzar?',
      ctaSubtitle: 'Hablemos sobre tu próximo proyecto.',
      footer1: 'Angular, Node.js, .NET y MongoDB / SQL',
      footer2: 'Soluciones escalables y mantenibles',
      footer3: 'Soporte profesional y continuo',
      themeLabelLight: 'Modo claro',
      themeLabelDark: 'Modo oscuro'
    },
    en: {
      nav: { home: 'Home', services: 'Services', portfolio: 'Portfolio', contact: 'Contact' },
      headerContact: 'Contact Me',
      switchLabel: 'ES',
      eyebrow: 'Developer',
      title: 'Full Stack',
      subtitle: 'Angular, Node, .NET & Mongo / SQL',
      description: 'Building robust, scalable websites with a polished user experience.',
      portfolioButton: 'View Portfolio',
      contactButton: 'Contact Me',
      chip1: 'Modern UI',
      chip2: 'Robust APIs',
      chip3: 'Continuous delivery',
      metricYears: 'Years of experience',
      metricProjects: 'Projects delivered',
      servicesTitle: 'My Services',
      servicesSubtitle: 'What can I do for you?',
      serviceFrontend: 'Frontend Development',
      serviceFrontendDesc: 'Modern Angular applications with tailored design.',
      serviceBackend: 'Back-end with Node.js',
      serviceBackendDesc: 'Secure, scalable, and well-documented APIs.',
      serviceDb: 'Databases',
      serviceDbDesc: 'Data modeling with MongoDB and MySQL / SQL.',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Some of my best work',
      viewProject: 'View project',
      crmName: 'CRM System',
      moreProjects: 'View More Projects',
      ctaTitle: 'Ready to Start?',
      ctaSubtitle: "Let's talk about your next project.",
      footer1: 'Angular, Node.js, .NET and MongoDB / SQL',
      footer2: 'Scalable and maintainable solutions',
      footer3: 'Professional ongoing support',
      themeLabelLight: 'Light mode',
      themeLabelDark: 'Dark mode'
    }
  } as const;

  protected readonly t = computed(() => this.literals[this.language()]);

  protected toggleLanguage(): void {
    this.language.update((lang) => (lang === 'es' ? 'en' : 'es'));
  }

  protected toggleTheme(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }
}
