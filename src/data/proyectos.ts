type Proyecto = {
  id: string;
  nombre: string;
  categoria: string;
  resumen: string;
  tecnologias: string[];
  descripcion: string[];
  enlaces: { texto: string; href: string; externo?: boolean }[];
  cifras?: { valor: string; texto: string }[];
};

export const proyectos: Proyecto[] = [
  {
    id: 'druse',
    nombre: 'Druse',
    categoria: 'Escritorio · Código abierto',
    resumen: 'Cliente de bases de datos para Windows con editor SQL, constructor visual y diagramas de relaciones.',
    tecnologias: ['.NET 10', 'Angular', 'Tauri', 'Playwright', 'GitHub Actions'],
    descripcion: [
      'Construí un cliente para explorar esquemas, visualizar relaciones y consultar datos con autocompletado o con un constructor visual que genera y prueba el SQL.',
      'Automaticé la compilación, las pruebas y la publicación de cada versión, con actualizaciones firmadas. La app se instala sin requerir .NET ni Node.js por separado.',
    ],
    enlaces: [
      { texto: 'Sitio y descargas', href: 'https://darioramos1.github.io/druse/', externo: true },
      { texto: 'Código en GitHub', href: 'https://github.com/darioRamos1/druse', externo: true },
    ],
    cifras: [
      { valor: '6', texto: 'motores de bases de datos' },
      { valor: '3', texto: 'ediciones para Windows' },
    ],
  },
  {
    id: 'finanzas',
    nombre: 'Druse Finanzas',
    categoria: 'Android · Sin conexión',
    resumen: 'App para registrar gastos y consultar saldos y reportes con datos guardados en el teléfono.',
    tecnologias: ['Angular', 'Ionic', 'SQLite', 'Capacitor', 'Playwright'],
    descripcion: [
      'Usé SQLite para guardar cuentas, movimientos y suscripciones en el teléfono. Los saldos y los reportes se pueden consultar sin conexión.',
      'Diseñé la app para llevar finanzas personales en español de Colombia y en pesos colombianos. Cubrí los flujos con pruebas unitarias y de punta a punta.',
    ],
    enlaces: [
      { texto: 'Conocer la app', href: 'https://darioramos1.github.io/druse-finanzas-legal/index.html', externo: true },
      { texto: 'Política de privacidad', href: 'https://darioramos1.github.io/druse-finanzas-legal/privacidad.html', externo: true },
    ],
    cifras: [
      { valor: '806', texto: 'pruebas unitarias' },
      { valor: '83', texto: 'pruebas de punta a punta' },
      { valor: 'Android 7+', texto: 'versión 1.0 de la app' },
    ],
  },
  {
    id: 'r3safety',
    nombre: 'R3Safety',
    categoria: 'SaaS · En desarrollo',
    resumen: 'Plataforma de seguridad y salud en el trabajo con una base de datos por empresa.',
    tecnologias: ['.NET 10', 'PostgreSQL', 'Vue 3', 'Dapper', 'MinIO', 'Docker'],
    descripcion: [
      'Diseñé una plataforma para organizar la autoevaluación anual, las evidencias, el plan de mejora y la auditoría de seguridad y salud en el trabajo en empresas colombianas.',
      'Cada empresa tiene su propia base de datos. La sesión usa un token de acceso de corta duración y un token de renovación con rotación y detección de reutilización.',
      'El repositorio es privado. Puedo mostrar el proyecto en una entrevista.',
    ],
    enlaces: [{ texto: 'Contactar para una demo', href: `${import.meta.env.BASE_URL}#contacto` }],
  },
];
