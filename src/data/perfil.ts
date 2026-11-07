// Todo el texto del portafolio vive aquí, para cambiarlo sin tocar el diseño.

export const perfil = {
  nombre: 'Dario Ramos Cañas',
  nombreCorto: 'Dario Ramos',
  rol: 'Desarrollador full stack',
  stack: '.NET, Angular y Azure',
  ciudad: 'Valledupar, Colombia',
  disponible: true,
  presentacion:
    'Soy Dario, ingeniero de sistemas en Valledupar, Colombia. Llevo más de cuatro años construyendo APIs, procesos en la nube e interfaces para plataformas de transporte, salud y finanzas. En mi tiempo libre creo productos completos, desde la base de datos hasta el instalador.',
  email: 'dandresramosdev@gmail.com',
  github: 'https://github.com/darioRamos1',
  linkedin: 'https://www.linkedin.com/in/dario-andres-ramos-ca%C3%B1as-060935223',
  cv: `${import.meta.env.BASE_URL}CV-Dario-Ramos-Canas.pdf`,
  cifras: [
    { valor: '4+', texto: 'años de experiencia' },
    { valor: '3', texto: 'productos propios' },
    { valor: '', texto: 'Esp. en Ingeniería de Software' },
  ],
};

export const experiencia = [
  {
    empresa: 'DataTools',
    detalle: 'Valledupar',
    cargo: 'Desarrollador de software',
    periodo: '2024 — 2026',
    resumen:
      'Módulos de transporte público y notificaciones en Fénix con .NET, Angular, Azure Functions y Service Bus. Migré proyectos de SAEPS de .NET Framework a .NET 9 con apoyo de IA.',
  },
  {
    empresa: 'Artemisa Tech',
    detalle: 'Outsourcing para DataTools',
    cargo: 'Analista de desarrollo semi-senior',
    periodo: '2023 — 2024',
    resumen:
      'Interfaces en Angular y procesamiento asíncrono con colas de Azure Service Bus para la plataforma Fénix.',
  },
  {
    empresa: 'GREMCA S.A.',
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
