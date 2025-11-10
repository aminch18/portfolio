import { Locale } from '../i18n/config';
import { 
  engineeringJourney as journeyEN,
  education as educationEN,
  educationJourneyNote as noteEN,
  certificates as certificatesEN,
  skills as skillsEN,
  languages as languagesEN,
  projects as projectsEN,
  profile as profileEN
} from './profileData';

// Spanish translations
const profileES = {
  ...profileEN,
  title: "Ingeniero Backend Senior",
  summary: "Apasionado por la tecnología, la ingeniería de software y la seguridad. Mi camino comenzó en Barcelona, donde la curiosidad por los sistemas distribuidos y la arquitectura cloud moldeó mi carrera. Creo en construir sistemas confiables, escalables y seguros que empoderen a personas y negocios. La tecnología no es solo una herramienta, sino una forma de resolver problemas del mundo real y crear un impacto significativo.",
  location: "Barcelona, España",
  interests: ["Sistemas Distribuidos", "Arquitectura Cloud", "Seguridad", "IA", "Código Abierto"]
};

// Catalan translations
const profileCA = {
  ...profileEN,
  title: "Enginyer Backend Senior",
  summary: "Apassionat per la tecnologia, l'enginyeria de programari i la seguretat. El meu camí va començar a Barcelona, on la curiositat pels sistemes distribuïts i l'arquitectura cloud va donar forma a la meva carrera. Crec en construir sistemes fiables, escalables i segurs que empoderin persones i negocis. La tecnologia no és només una eina, sinó una manera de resoldre problemes del món real i crear un impacte significatiu.",
  location: "Barcelona, Espanya",
  interests: ["Sistemes Distribuïts", "Arquitectura Cloud", "Seguretat", "IA", "Codi Obert"]
};

const educationJourneyNoteES = "Mi camino refleja el equilibrio entre educación y las realidades de la vida. Las circunstancias económicas me llevaron a pausar mi primer grado, pero me guiaron al desarrollo de software, mi verdadera vocación. Obtuve mi certificación técnica como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma mientras trabajaba a tiempo completo, y ahora estoy completando mi grado en Ingeniería Informática a mi propio ritmo, aplicando la experiencia profesional al aprendizaje académico.";

const educationJourneyNoteCA = "El meu camí reflecteix l'equilibri entre educació i les realitats de la vida. Les circumstàncies econòmiques em van portar a pausar el meu primer grau, però em van guiar al desenvolupament de programari, la meva veritable vocació. Vaig obtenir la meva certificació tècnica com a Tècnic Superior en Desenvolupament d'Aplicacions Multiplataforma mentre treballava a temps complet, i ara estic completant el meu grau en Enginyeria Informàtica al meu propi ritme, aplicant l'experiència professional a l'aprenentatge acadèmic.";

export function getProfileData(locale: Locale) {
  switch (locale) {
    case 'es':
      return profileES;
    case 'ca':
      return profileCA;
    default:
      return profileEN;
  }
}

export function getEducationJourneyNote(locale: Locale) {
  switch (locale) {
    case 'es':
      return educationJourneyNoteES;
    case 'ca':
      return educationJourneyNoteCA;
    default:
      return noteEN;
  }
}

// Engineering Journey Translations
const journeyES = journeyEN.map((company, idx) => {
  if (idx === 0) { // Gartner
    return {
      ...company,
      period: "Mayo 2022 — Presente",
      location: "Barcelona, España",
      description: "Equipo de la Plataforma de Reseñas que impulsa todos los marketplaces de Gartner Digital Markets (Capterra, GetApp, Software Advice). Procesando millones de reseñas de software para generar información confiable y accionable.",
      roles: [
        {
          ...company.roles[0],
          title: "Ingeniero de Software Senior",
          period: "Octubre 2023 — Presente",
          achievements: [
            "Liderando ingenieros junior y mid-level, realizando entrevistas técnicas y revisiones de código",
            "Definiendo e implementando estándares arquitectónicos transversales entre equipos",
            "Liderando iniciativas complejas que abarcan múltiples equipos e impactan métricas de negocio",
            "Trabajando estrechamente con equipos de Producto, SEO y Site en iniciativas estratégicas",
            "Liderando esfuerzos para mejorar el rendimiento del sistema, la fiabilidad y la eficiencia operativa"
          ]
        },
        {
          ...company.roles[1],
          title: "Ingeniero de Software Avanzado",
          period: "Mayo 2022 — Octubre 2023",
          achievements: [
            "Diseñé y mantuve pipelines transformando reseñas en información de calidad",
            "Lideré la refactorización del sistema de puntuación de reseñas en un motor desacoplado y resiliente",
            "Construí sistemas de gamificación incentivando a los proveedores a recopilar reseñas de alta calidad",
            "Evolucioné la plataforma de moderación de reseñas de Angular a Next.js",
            "Implementé arquitecturas orientadas a eventos con Kafka/Confluent Cloud"
          ]
        }
      ]
    };
  } else if (idx === 1) { // Plain Concepts
    return {
      ...company,
      period: "Septiembre 2019 — Mayo 2022",
      location: "Barcelona, España",
      description: "Trabajando en el proyecto Lidl Plus App sirviendo a más de 60 millones de usuarios. Sistema backend de alta disponibilidad basado en microservicios, cloud, análisis de datos e ingestión de datos en tiempo real.",
      roles: [
        {
          ...company.roles[0],
          title: "Desarrollador de Software Backend Sr",
          period: "~Marzo 2020 — Mayo 2022",
          achievements: [
            "Migré sistemas monolíticos a microservicios en .NET",
            "Trabajé en el squad de Comunicaciones implementando sistemas de promoción y notificación de usuarios",
            "Diseñé y lideré la migración del sistema de Alertas de monolito a microservicios",
            "Actualicé sistemas de .NET Core 3.1 a .NET 6",
            "Implementé arquitecturas CQRS + DDD para dominios críticos"
          ]
        },
        {
          ...company.roles[1],
          title: "Consultor de Soporte IT",
          period: "Septiembre 2019 — Marzo 2020",
          achievements: [
            "Construí y mantuve aplicaciones internas para Soporte al Cliente",
            "Desarrollé herramientas que soportan el ecosistema de Lidl Plus App",
            "Gané experiencia fundamental en sistemas a escala empresarial",
            "Colaboré con equipos de soporte para mejorar la eficiencia operativa"
          ]
        }
      ]
    };
  } else { // Pasiona
    return {
      ...company,
      period: "Mayo 2018 — Septiembre 2019",
      location: "Barcelona, España",
      description: "Programa de prácticas dual y desarrollo profesional temprano enfocado en desarrollo Front-end y Back-end con SharePoint Online y Azure Functions.",
      roles: [
        {
          ...company.roles[0],
          title: "Desarrollador Junior",
          period: "Junio 2019 — Septiembre 2019",
          achievements: [
            "Desarrollé componentes SPFx con React.js en TypeScript para SharePoint Online",
            "Construí Azure Functions operando como orquestadores para diferentes servicios",
            "Trabajé con programación multitarea y metodología de Desarrollo Dirigido por Pruebas",
            "Usé Azure DevOps: Azure Boards (SCRUM), Azure Repos (Git Flow), Azure Pipelines (CI/CD)",
            "Obtuve y analicé datos para evaluar las capacidades del sistema"
          ]
        },
        {
          ...company.roles[1],
          title: "Desarrollador en Prácticas",
          period: "Mayo 2018 — Junio 2019",
          achievements: [
            "Programa de prácticas dual enfocado en desarrollo full-stack mientras estudiaba",
            "Desarrollo backend con .NET & .NET Core Framework, ASP.NET & ASP.NET Core",
            "Aprendí y apliqué el paradigma de Diseño Dirigido por Dominio y Desarrollo Dirigido por Pruebas",
            "Desarrollo frontend con React.js ES6, TypeScript, HTML5",
            "Publiqué y rastreé App Services en Azure, implementé pruebas unitarias completas"
          ]
        }
      ]
    };
  }
});

const journeyCA = journeyEN.map((company, idx) => {
  if (idx === 0) { // Gartner
    return {
      ...company,
      period: "Maig 2022 — Present",
      location: "Barcelona, Espanya",
      description: "Equip de la Plataforma de Ressenyes que impulsa tots els marketplaces de Gartner Digital Markets (Capterra, GetApp, Software Advice). Processant milions de ressenyes de programari per generar informació fiable i accionable.",
      roles: [
        {
          ...company.roles[0],
          title: "Enginyer de Programari Senior",
          period: "Octubre 2023 — Present",
          achievements: [
            "Liderant enginyers junior i mid-level, realitzant entrevistes tècniques i revisions de codi",
            "Definint i implementant estàndards arquitectònics transversals entre equips",
            "Liderant iniciatives complexes que abasten múltiples equips i impacten mètriques de negoci",
            "Treballant estretament amb equips de Producte, SEO i Site en iniciatives estratègiques",
            "Liderant esforços per millorar el rendiment del sistema, la fiabilitat i l'eficiència operativa"
          ]
        },
        {
          ...company.roles[1],
          title: "Enginyer de Programari Avançat",
          period: "Maig 2022 — Octubre 2023",
          achievements: [
            "Vaig dissenyar i mantenir pipelines transformant ressenyes en informació de qualitat",
            "Vaig liderar la refactorització del sistema de puntuació de ressenyes en un motor desacoblat i resilient",
            "Vaig construir sistemes de gamificació incentivant als proveïdors a recopilar ressenyes d'alta qualitat",
            "Vaig evolucionar la plataforma de moderació de ressenyes d'Angular a Next.js",
            "Vaig implementar arquitectures orientades a esdeveniments amb Kafka/Confluent Cloud"
          ]
        }
      ]
    };
  } else if (idx === 1) { // Plain Concepts
    return {
      ...company,
      period: "Setembre 2019 — Maig 2022",
      location: "Barcelona, Espanya",
      description: "Treballant en el projecte Lidl Plus App servint a més de 60 milions d'usuaris. Sistema backend d'alta disponibilitat basat en microserveis, cloud, anàlisi de dades i ingestió de dades en temps real.",
      roles: [
        {
          ...company.roles[0],
          title: "Desenvolupador de Programari Backend Sr",
          period: "~Març 2020 — Maig 2022",
          achievements: [
            "Vaig migrar sistemes monolítics a microserveis en .NET",
            "Vaig treballar en l'squad de Comunicacions implementant sistemes de promoció i notificació d'usuaris",
            "Vaig dissenyar i liderar la migració del sistema d'Alertes de monòlit a microserveis",
            "Vaig actualitzar sistemes de .NET Core 3.1 a .NET 6",
            "Vaig implementar arquitectures CQRS + DDD per a dominis crítics"
          ]
        },
        {
          ...company.roles[1],
          title: "Consultor de Suport IT",
          period: "Setembre 2019 — Març 2020",
          achievements: [
            "Vaig construir i mantenir aplicacions internes per a Suport al Client",
            "Vaig desenvolupar eines que suporten l'ecosistema de Lidl Plus App",
            "Vaig guanyar experiència fonamental en sistemes a escala empresarial",
            "Vaig col·laborar amb equips de suport per millorar l'eficiència operativa"
          ]
        }
      ]
    };
  } else { // Pasiona
    return {
      ...company,
      period: "Maig 2018 — Setembre 2019",
      location: "Barcelona, Espanya",
      description: "Programa de pràctiques dual i desenvolupament professional primerenc enfocat en desenvolupament Front-end i Back-end amb SharePoint Online i Azure Functions.",
      roles: [
        {
          ...company.roles[0],
          title: "Desenvolupador Junior",
          period: "Juny 2019 — Setembre 2019",
          achievements: [
            "Vaig desenvolupar components SPFx amb React.js en TypeScript per a SharePoint Online",
            "Vaig construir Azure Functions operant com a orquestradors per a diferents serveis",
            "Vaig treballar amb programació multitasca i metodologia de Desenvolupament Dirigit per Proves",
            "Vaig utilitzar Azure DevOps: Azure Boards (SCRUM), Azure Repos (Git Flow), Azure Pipelines (CI/CD)",
            "Vaig obtenir i analitzar dades per avaluar les capacitats del sistema"
          ]
        },
        {
          ...company.roles[1],
          title: "Desenvolupador en Pràctiques",
          period: "Maig 2018 — Juny 2019",
          achievements: [
            "Programa de pràctiques dual enfocat en desenvolupament full-stack mentre estudiava",
            "Desenvolupament backend amb .NET & .NET Core Framework, ASP.NET & ASP.NET Core",
            "Vaig aprendre i aplicar el paradigma de Disseny Dirigit per Domini i Desenvolupament Dirigit per Proves",
            "Desenvolupament frontend amb React.js ES6, TypeScript, HTML5",
            "Vaig publicar i rastrejar App Services a Azure, vaig implementar proves unitàries completes"
          ]
        }
      ]
    };
  }
});

export function getEngineeringJourney(locale: Locale) {
  switch (locale) {
    case 'es':
      return journeyES;
    case 'ca':
      return journeyCA;
    default:
      return journeyEN;
  }
}

const educationES = educationEN.map(edu => ({
  ...edu,
  degree: edu.institution === "Universitat Oberta de Catalunya" 
    ? "Grado en Ingeniería Informática"
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma"
    : "Grado en Ingeniería de Telecomunicaciones",
  period: edu.institution === "Universitat Oberta de Catalunya"
    ? "Sep 2021 — Presente"
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "2017 — 2019"
    : "Sep 2015 — 2017",
  description: edu.institution === "Universitat Oberta de Catalunya"
    ? "Actualmente cursando mi pasión por la Ingeniería Informática a mi propio ritmo, equilibrando trabajo y estudios. Enfocándome en arquitectura de software, sistemas distribuidos y aplicando la experiencia del mundo real al aprendizaje académico."
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "Certificación técnica en Desarrollo de Aplicaciones Multiplataforma (Educación Superior). Completado mientras trabajaba a tiempo completo, ganando experiencia práctica con Android Studio, SQL Server, Java, HTML y PHP. Esta cualificación profesional lanzó mi carrera en desarrollo de software."
    : "Comencé mi trayectoria universitaria aquí, completando 60 créditos ECTS en asignaturas básicas. Debido a circunstancias económicas, pausé mis estudios para enfocarme en el trabajo, lo que me llevó a descubrir mi verdadera pasión por el desarrollo de software.",
  status: edu.status === "In progress" ? "En curso" : edu.status === "Paused" ? "En pausa" : undefined
}));

const educationCA = educationEN.map(edu => ({
  ...edu,
  degree: edu.institution === "Universitat Oberta de Catalunya"
    ? "Grau en Enginyeria Informàtica"
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "Tècnic Superior en Desenvolupament d'Aplicacions Multiplataforma"
    : "Grau en Enginyeria de Telecomunicacions",
  period: edu.institution === "Universitat Oberta de Catalunya"
    ? "Set 2021 — Present"
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "2017 — 2019"
    : "Set 2015 — 2017",
  description: edu.institution === "Universitat Oberta de Catalunya"
    ? "Actualment cursant la meva passió per l'Enginyeria Informàtica al meu propi ritme, equilibrant feina i estudis. Enfocant-me en arquitectura de programari, sistemes distribuïts i aplicant l'experiència del món real a l'aprenentatge acadèmic."
    : edu.institution === "Escola Pia Mataró - Formació Professional"
    ? "Certificació tècnica en Desenvolupament d'Aplicacions Multiplataforma (Educació Superior). Completat mentre treballava a temps complet, guanyant experiència pràctica amb Android Studio, SQL Server, Java, HTML i PHP. Aquesta qualificació professional va llançar la meva carrera en desenvolupament de programari."
    : "Vaig començar el meu trajecte universitari aquí, completant 60 crèdits ECTS en assignatures bàsiques. A causa de circumstàncies econòmiques, vaig pausar els meus estudis per enfocar-me en la feina, la qual cosa em va portar a descobrir la meva veritable passió pel desenvolupament de programari.",
  status: edu.status === "In progress" ? "En curs" : edu.status === "Paused" ? "En pausa" : undefined
}));

export function getEducation(locale: Locale) {
  switch (locale) {
    case 'es':
      return educationES;
    case 'ca':
      return educationCA;
    default:
      return educationEN;
  }
}

const certificatesES = certificatesEN.map(cert => ({
  ...cert,
  name: cert.name === "EF SET English Certificate C2 Proficient"
    ? "Certificado de Inglés EF SET C2 Competente"
    : cert.name === "Security Yellow Belt"
    ? "Cinturón Amarillo de Seguridad"
    : cert.name === "Hacking For Beginners"
    ? "Hacking Para Principiantes"
    : cert.name,
  issuer: cert.name === "EF SET English Certificate C2 Proficient"
    ? "EF Education First"
    : cert.issuer,
  date: cert.date === "Apr 2025" ? "Abr 2025"
    : cert.date === "Dec 2024" ? "Dic 2024"
    : cert.date === "Nov 2021" ? "Nov 2021"
    : cert.date === "May 2020" ? "Mayo 2020"
    : "Abr 2022",
  status: cert.status === "Expired" ? "Caducado" : undefined
}));

const certificatesCA = certificatesEN.map(cert => ({
  ...cert,
  name: cert.name === "EF SET English Certificate C2 Proficient"
    ? "Certificat d'Anglès EF SET C2 Competent"
    : cert.name === "Security Yellow Belt"
    ? "Cinturó Groc de Seguretat"
    : cert.name === "Hacking For Beginners"
    ? "Hacking Per a Principiants"
    : cert.name,
  issuer: cert.name === "EF SET English Certificate C2 Proficient"
    ? "EF Education First"
    : cert.issuer,
  date: cert.date === "Apr 2025" ? "Abr 2025"
    : cert.date === "Dec 2024" ? "Des 2024"
    : cert.date === "Nov 2021" ? "Nov 2021"
    : cert.date === "May 2020" ? "Maig 2020"
    : "Abr 2022",
  status: cert.status === "Expired" ? "Caducat" : undefined
}));

export function getCertificates(locale: Locale) {
  switch (locale) {
    case 'es':
      return certificatesES;
    case 'ca':
      return certificatesCA;
    default:
      return certificatesEN;
  }
}

const skillsES = skillsEN.map(skill => ({
  ...skill,
  category: skill.category === "Backend Technologies" ? "Tecnologías Backend"
    : skill.category === "Cloud & Infrastructure" ? "Cloud e Infraestructura"
    : skill.category === "Data & Messaging" ? "Datos y Mensajería"
    : "Arquitectura y Diseño"
}));

const skillsCA = skillsEN.map(skill => ({
  ...skill,
  category: skill.category === "Backend Technologies" ? "Tecnologies Backend"
    : skill.category === "Cloud & Infrastructure" ? "Cloud i Infraestructura"
    : skill.category === "Data & Messaging" ? "Dades i Missatgeria"
    : "Arquitectura i Disseny"
}));

export function getSkills(locale: Locale) {
  switch (locale) {
    case 'es':
      return skillsES;
    case 'ca':
      return skillsCA;
    default:
      return skillsEN;
  }
}

export function getLanguages(locale: Locale) {
  return languagesEN;
}

// ========================================
// PROJECTS TRANSLATIONS
// ========================================
// NOTE: Real project translations are preserved as comments below
// To restore, uncomment the detailed translations and comment out the placeholder ones

/* REAL PROJECTS TRANSLATIONS - BACKUP (Uncomment to restore)

const projectsES = projectsEN.map((project, idx) => {
  if (idx === 0) {
    return {
      ...project,
      title: "Sistema Distribuido de Procesamiento de Reseñas",
      description: "Sistema orientado a eventos de alto rendimiento que procesa millones de reseñas de software",
      longDescription: "Construí una arquitectura de microservicios escalable que ingiere, valida y enriquece reseñas de software desde múltiples fuentes. Implementé event sourcing con Kafka para un procesamiento de datos confiable y pipelines sofisticados de NLP para análisis de sentimiento y puntuación de calidad.",
      highlights: [
        "Procesando más de 1M de reseñas mensuales con latencia p99 <100ms",
        "99.95% de disponibilidad con failover automático y recuperación",
        "Reduje inconsistencias de datos en un 90% mediante event sourcing",
        "Implementé puntuación de calidad en tiempo real que afecta $50M+ en ingresos"
      ]
    };
  } else if (idx === 1) {
    return {
      ...project,
      title: "Plataforma de Analítica Multi-Tenant",
      description: "Plataforma de analítica en tiempo real que sirve insights a millones de usuarios",
      longDescription: "Diseñé e implementé un sistema de analítica multi-tenant que agrega datos de reseñas y genera insights accionables. Construí APIs RESTful y GraphQL con estrategias sofisticadas de caché y optimización de consultas para manejar cargas de alto tráfico.",
      highlights: [
        "Sirviendo 10M+ de peticiones API diarias",
        "Reduje el tiempo de respuesta de consultas en un 70% mediante caché",
        "Construí monitorización completa con dashboards personalizados de Datadog",
        "Implementé framework de pruebas A/B que afecta decisiones de producto"
      ]
    };
  } else if (idx === 2) {
    return {
      ...project,
      title: "Automatización de Infraestructura Cloud",
      description: "Solución Infrastructure-as-Code para despliegues AWS multi-región",
      longDescription: "Lideré la migración de infraestructura monolítica a configuraciones modulares de Terraform. Implementé flujos de trabajo GitOps con pruebas automatizadas, escaneo de seguridad y despliegues progresivos a través de múltiples entornos.",
      highlights: [
        "Reduje el tiempo de despliegue de 2 horas a 15 minutos",
        "Despliegues sin tiempo de inactividad con rollback automático",
        "Reducción del 95% de costos mediante optimización de recursos",
        "Implementé recuperación ante desastres con RTO <5 minutos"
      ]
    };
  } else {
    return {
      ...project,
      title: "Asistente de Revisión de Código con IA",
      description: "Sistema inteligente de revisión de código usando LLMs para feedback automatizado",
      longDescription: "Construyendo un asistente de IA que analiza pull requests, sugiere mejoras, detecta vulnerabilidades de seguridad y asegura estándares de calidad de código. Se integra con GitHub y proporciona feedback contextual basado en patrones específicos del repositorio.",
      highlights: [
        "Analizando 500+ PRs semanalmente a través de múltiples repositorios",
        "Detectando 40+ problemas de seguridad antes de producción",
        "Reduciendo el tiempo de revisión de código en un 30%",
        "Entrenando modelos personalizados en el código base interno"
      ]
    };
  }
});

const projectsCA = projectsEN.map((project, idx) => {
  if (idx === 0) {
    return {
      ...project,
      title: "Sistema Distribuït de Processament de Ressenyes",
      description: "Sistema orientat a esdeveniments d'alt rendiment que processa milions de ressenyes de programari",
      longDescription: "Vaig construir una arquitectura de microserveis escalable que ingereix, valida i enriqueix ressenyes de programari des de múltiples fonts. Vaig implementar event sourcing amb Kafka per a un processament de dades fiable i pipelines sofisticats de NLP per a anàlisi de sentiment i puntuació de qualitat.",
      highlights: [
        "Processant més d'1M de ressenyes mensuals amb latència p99 <100ms",
        "99.95% de disponibilitat amb failover automàtic i recuperació",
        "Vaig reduir inconsistències de dades en un 90% mitjançant event sourcing",
        "Vaig implementar puntuació de qualitat en temps real que afecta $50M+ en ingressos"
      ]
    };
  } else if (idx === 1) {
    return {
      ...project,
      title: "Plataforma d'Analítica Multi-Tenant",
      description: "Plataforma d'analítica en temps real que serveix insights a milions d'usuaris",
      longDescription: "Vaig dissenyar i implementar un sistema d'analítica multi-tenant que agrega dades de ressenyes i genera insights accionables. Vaig construir APIs RESTful i GraphQL amb estratègies sofisticades de cache i optimització de consultes per gestionar càrregues d'alt tràfic.",
      highlights: [
        "Servint 10M+ de peticions API diàries",
        "Vaig reduir el temps de resposta de consultes en un 70% mitjançant cache",
        "Vaig construir monitorització completa amb dashboards personalitzats de Datadog",
        "Vaig implementar framework de proves A/B que afecta decisions de producte"
      ]
    };
  } else if (idx === 2) {
    return {
      ...project,
      title: "Automatització d'Infraestructura Cloud",
      description: "Solució Infrastructure-as-Code per a desplegaments AWS multi-regió",
      longDescription: "Vaig liderar la migració d'infraestructura monolítica a configuracions modulars de Terraform. Vaig implementar fluxos de treball GitOps amb proves automatitzades, escaneig de seguretat i desplegaments progressius a través de múltiples entorns.",
      highlights: [
        "Vaig reduir el temps de desplegament de 2 hores a 15 minuts",
        "Desplegaments sense temps d'inactivitat amb rollback automàtic",
        "Reducció del 95% de costos mitjançant optimització de recursos",
        "Vaig implementar recuperació davant desastres amb RTO <5 minuts"
      ]
    };
  } else {
    return {
      ...project,
      title: "Assistant de Revisió de Codi amb IA",
      description: "Sistema intel·ligent de revisió de codi utilitzant LLMs per a feedback automatitzat",
      longDescription: "Construint un assistent d'IA que analitza pull requests, suggereix millores, detecta vulnerabilitats de seguretat i assegura estàndards de qualitat de codi. S'integra amb GitHub i proporciona feedback contextual basat en patrons específics del repositori.",
      highlights: [
        "Analitzant 500+ PRs setmanalment a través de múltiples repositoris",
        "Detectant 40+ problemes de seguretat abans de producció",
        "Reduint el temps de revisió de codi en un 30%",
        "Entrenant models personalitzats en el codi base intern"
      ]
    };
  }
});

*/

// REAL PROJECTS TRANSLATIONS
const projectsES = projectsEN.map((project, idx) => {
  if (idx === 0) { // Reviews Processing System
    return {
      ...project,
      title: "Sistema de Procesamiento de Reseñas",
      description: "Sistema de alto rendimiento basado en eventos que procesa reseñas de software en Gartner Digital Markets",
      longDescription: "Arquitecté e implementé un sistema escalable de microservicios que ingiere, valida y procesa reseñas de software de múltiples fuentes. Construido con arquitectura orientada a eventos usando Kafka para procesamiento confiable de datos, implementando pipelines sofisticados de validación y mecanismos de puntuación de calidad que potencian todos los marketplaces de Gartner Digital Markets (Capterra, GetApp, Software Advice).",
      highlights: [
        "Procesando 100K+ reseñas mensualmente con alta fiabilidad",
        "Arquitectura orientada a eventos con Kafka para consistencia de datos",
        "Migración de herramienta de moderación de Angular a Next.js, mejorando el rendimiento en un 40%",
        "Implementación de AWS SNS/SQS para flujos de trabajo de procesamiento asíncrono de reseñas",
        "Integración de OpenSearch para búsqueda avanzada, filtrado y analítica",
        "Reducción de errores de procesamiento en un 85% mediante manejo robusto de errores"
      ]
    };
  } else if (idx === 1) { // User Alerts System Migration
    return {
      ...project,
      title: "Migración del Sistema de Alertas de Usuario",
      description: "Migración a gran escala del sistema de alertas in-app de Lidl Plus desde monolito a microservicios cloud-native",
      longDescription: "Lideré la migración end-to-end del sistema crítico de alertas de usuario desde monolito heredado a microservicios cloud-native en Azure. El sistema de alertas entrega mensajes promocionales, notificaciones de e-tickets y ofertas personalizadas directamente al inbox de la app Lidl Plus de los usuarios, sirviendo a 60M+ usuarios activos en múltiples países.",
      highlights: [
        "Migración de 50+ tipos de alertas (promociones, e-tickets, ofertas personalizadas) sin tiempo de inactividad",
        "Orquestación de migración de 100M+ alertas desde SQL Server a Cosmos DB usando Azure Durable Functions",
        "Procesando millones de notificaciones de usuario diarias para 60M+ usuarios de Lidl Plus",
        "Reducción de costes de infraestructura en un 60% usando arquitectura serverless",
        "Mejora de latencia de entrega de notificaciones de minutos a segundos",
        "Implementación de arquitectura orientada a eventos para engagement de usuario en tiempo real"
      ]
    };
  } else if (idx === 2) { // Rate Limiter Lab
    return {
      ...project,
      title: "Rate Limiter Lab (en progreso)",
      description: "Servicio distribuido de limitación de tasa construido en Go para aprendizaje y experimentación. Actualmente en progreso, pero todos los detalles técnicos y objetivos son visibles.",
      longDescription: "Proyecto personal para explorar algoritmos y patrones de limitación de tasa distribuida. Implementando algoritmos de token bucket, sliding window y leaky bucket con Redis para gestión de estado distribuido. Enfocado en alto rendimiento, baja latencia y escalabilidad horizontal. El proyecto está siendo desarrollado activamente y todos los detalles técnicos, arquitectura y objetivos están documentados para transparencia.",
      highlights: [
        "Explorando diferentes algoritmos de limitación de tasa (token bucket, sliding window, leaky bucket)",
        "Gestión de estado distribuido respaldada por Redis",
        "Construyendo para alto rendimiento y baja latencia",
        "Implementando observabilidad con Prometheus/Grafana",
        "Aprendiendo patrones de concurrencia y mejores prácticas de Go",
        "Documentando arquitectura y decisiones de diseño"
      ]
    };
  } else if (idx === 3) { // AI-Powered Code Review Assistant
    return {
      ...project,
      title: "Asistente de Revisión de Código con IA",
      description: "Sistema inteligente de revisión de código usando LLMs para feedback automatizado",
      longDescription: "Construyendo un asistente de IA que analiza pull requests, sugiere mejoras, detecta vulnerabilidades de seguridad y asegura estándares de calidad de código. Se integra con GitHub y proporciona feedback contextual basado en patrones específicos del repositorio.",
      highlights: [
        "Analizando pull requests con insights potenciados por IA",
        "Detectando problemas de seguridad y code smells automáticamente",
        "Proporcionando sugerencias contextuales basadas en patrones del código",
        "Integrándose con GitHub para flujo de trabajo sin fricciones",
        "Aprendiendo y mejorando del feedback de desarrolladores"
      ]
    };
  }
  return project;
});

const projectsCA = projectsEN.map((project, idx) => {
  if (idx === 0) { // Reviews Processing System
    return {
      ...project,
      title: "Sistema de Processament de Ressenyes",
      description: "Sistema d'alt rendiment basat en esdeveniments que processa ressenyes de programari a Gartner Digital Markets",
      longDescription: "Vaig arquitectar i implementar un sistema escalable de microserveis que ingereix, valida i processa ressenyes de programari de múltiples fonts. Construït amb arquitectura orientada a esdeveniments usant Kafka per processament fiable de dades, implementant pipelines sofisticats de validació i mecanismes de puntuació de qualitat que potencien tots els marketplaces de Gartner Digital Markets (Capterra, GetApp, Software Advice).",
      highlights: [
        "Processant 100K+ ressenyes mensualment amb alta fiabilitat",
        "Arquitectura orientada a esdeveniments amb Kafka per consistència de dades",
        "Migració d'eina de moderació d'Angular a Next.js, millorant el rendiment en un 40%",
        "Implementació d'AWS SNS/SQS per fluxos de treball de processament asíncron de ressenyes",
        "Integració d'OpenSearch per cerca avançada, filtrat i analítica",
        "Reducció d'errors de processament en un 85% mitjançant gestió robusta d'errors"
      ]
    };
  } else if (idx === 1) { // User Alerts System Migration
    return {
      ...project,
      title: "Migració del Sistema d'Alertes d'Usuari",
      description: "Migració a gran escala del sistema d'alertes in-app de Lidl Plus des de monòlit a microserveis cloud-native",
      longDescription: "Vaig liderar la migració end-to-end del sistema crític d'alertes d'usuari des de monòlit heretat a microserveis cloud-native en Azure. El sistema d'alertes entrega missatges promocionals, notificacions d'e-tickets i ofertes personalitzades directament a l'inbox de l'app Lidl Plus dels usuaris, servint a 60M+ usuaris actius en múltiples països.",
      highlights: [
        "Migració de 50+ tipus d'alertes (promocions, e-tickets, ofertes personalitzades) sense temps d'inactivitat",
        "Orquestració de migració de 100M+ alertes des de SQL Server a Cosmos DB usant Azure Durable Functions",
        "Processant milions de notificacions d'usuari diàries per 60M+ usuaris de Lidl Plus",
        "Reducció de costos d'infraestructura en un 60% usant arquitectura serverless",
        "Millora de latència d'entrega de notificacions de minuts a segons",
        "Implementació d'arquitectura orientada a esdeveniments per engagement d'usuari en temps real"
      ]
    };
  } else if (idx === 2) { // Rate Limiter Lab
    return {
      ...project,
      title: "Rate Limiter Lab (en progrés)",
      description: "Servei distribuït de limitació de taxa construït en Go per aprenentatge i experimentació. Actualment en progrés, però tots els detalls tècnics i objectius són visibles.",
      longDescription: "Projecte personal per explorar algoritmes i patrons de limitació de taxa distribuïda. Implementant algoritmes de token bucket, sliding window i leaky bucket amb Redis per gestió d'estat distribuït. Enfocat en alt rendiment, baixa latència i escalabilitat horitzontal. El projecte s'està desenvolupant activament i tots els detalls tècnics, arquitectura i objectius estan documentats per transparència.",
      highlights: [
        "Explorant diferents algoritmes de limitació de taxa (token bucket, sliding window, leaky bucket)",
        "Gestió d'estat distribuït recolzada per Redis",
        "Construint per alt rendiment i baixa latència",
        "Implementant observabilitat amb Prometheus/Grafana",
        "Aprenent patrons de concurrència i millors pràctiques de Go",
        "Documentant arquitectura i decisions de disseny"
      ]
    };
  } else if (idx === 3) { // AI-Powered Code Review Assistant
    return {
      ...project,
      title: "Assistant de Revisió de Codi amb IA",
      description: "Sistema intel·ligent de revisió de codi utilitzant LLMs per a feedback automatitzat",
      longDescription: "Construint un assistent d'IA que analitza pull requests, suggereix millores, detecta vulnerabilitats de seguretat i assegura estàndards de qualitat de codi. S'integra amb GitHub i proporciona feedback contextual basat en patrons específics del repositori.",
      highlights: [
        "Analitzant pull requests amb insights potenciats per IA",
        "Detectant problemes de seguretat i code smells automàticament",
        "Proporcionant suggeriments contextuals basats en patrons del codi",
        "Integrant-se amb GitHub per flux de treball sense friccions",
        "Aprenent i millorant del feedback de desenvolupadors"
      ]
    };
  }
  return project;
});

export function getProjects(locale: Locale) {
  switch (locale) {
    case 'es':
      return projectsES;
    case 'ca':
      return projectsCA;
    default:
      return projectsEN;
  }
}
