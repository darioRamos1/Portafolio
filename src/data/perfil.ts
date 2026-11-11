// Datos del perfil, la experiencia y la formación.

export const perfil = {
  nombre: 'Darío Ramos Cañas',
  nombreCorto: 'Darío Ramos',
  rol: 'Desarrollador full stack',
  stack: '.NET, Angular y Azure',
  ciudad: 'Valledupar, Colombia',
  disponible: true,
  presentacion:
    'Más de cuatro años desarrollando APIs con .NET, interfaces con Angular y procesos en Azure para plataformas de transporte, salud y finanzas.',
  email: 'dandresramosdev@gmail.com',
  github: 'https://github.com/darioRamos1',
  linkedin: 'https://www.linkedin.com/in/dario-andres-ramos-ca%C3%B1as-060935223',
  cv: `${import.meta.env.BASE_URL}CV-Dario-Ramos-Canas.pdf`,
};

export const experiencia = [
  {
    empresa: 'DataTools',
    logo: { url: 'https://www.datatools.com.co/imagenes/logo.png', fondo: '#fff' },
    detalle: 'Valledupar',
    cargo: 'Desarrollador de software',
    periodo: '2024 — 2026',
    resumen:
      'Módulos de transporte público y notificaciones en Fénix con .NET, Angular, Azure Functions y Service Bus. Migré proyectos de SAEPS de .NET Framework a .NET 9 con apoyo de IA.',
  },
  {
    empresa: 'Artemisa Tech',
    logo: {
      url: 'https://media.licdn.com/dms/image/v2/C4E0BAQHg0nR4ZEp7fg/company-logo_200_200/company-logo_200_200/0/1630648022334?e=2147483647&t=ru6cWoXWlzP7zGXL7Za0ebNQSYdEyxvdF8bZQfv5aQM&v=beta',
      fondo: '#fff',
    },
    detalle: 'Outsourcing para DataTools',
    cargo: 'Analista de desarrollo semi-senior',
    periodo: '2023 — 2024',
    resumen:
      'Interfaces en Angular y procesamiento asíncrono con colas de Azure Service Bus para la plataforma Fénix.',
  },
  {
    empresa: 'GREMCA S.A.',
    logo: { url: 'https://gremca.com.co/wp-content/uploads/2025/12/logo_footer.png', fondo: '#174537' },
    detalle: '',
    cargo: 'Especialista de sistemas',
    periodo: '2023',
    resumen:
      'Sistema agronómico que funciona sin conexión y se sincroniza al volver internet. .NET 7, Angular y Flutter.',
  },
  {
    empresa: 'Global EDB',
    detalle: '',
    cargo: 'Desarrollador junior',
    periodo: '2021 — 2022',
    resumen:
      'Microservicios de notificación por correo y Microsoft Teams con .NET 6 y Microsoft Graph.',
  },
];

export const habilidades = [
  { grupo: 'Backend', items: ['C# y .NET 6 a 10', 'APIs REST', 'Node.js y TypeScript'] },
  { grupo: 'Frontend y móvil', items: ['Angular', 'Vue y React', 'Ionic y Flutter'] },
  { grupo: 'Nube y datos', items: ['Azure Functions', 'Service Bus y App Service', 'SQL Server y PostgreSQL'] },
  { grupo: 'Herramientas', items: ['GitHub Actions', 'Docker', 'Claude Code'] },
];

export const formacion = [
  { titulo: 'Especialización en Ingeniería de Software', lugar: 'Universidad Popular del Cesar · 2024' },
  { titulo: 'Ingeniería de Sistemas', lugar: 'Universidad Popular del Cesar · 2023' },
  { titulo: 'Técnico en Sistemas', lugar: 'SENA · 2016' },
];
