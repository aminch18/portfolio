import { Locale } from '../i18n/config';

type CaseStudy = {
  id: string;
  company: string;
  category: string;
  title: string;
  intro: string;
  tags: string[];
  challenge: string;
  decisions: string;
  contribution: string;
};
type BrandCopy = {
  nav: string[];
  skip: string;
  language: string;
  theme: string;
  menu: string;
  role: string;
  hero: string[];
  specialism: string;
  intro: string;
  workCta: string;
  contactCta: string;
  scroll: string;
  map: string;
  mapHint: string;
  layers: { name: string; label: string; text: string }[];
  current: string;
  currentText: string;
  experience: string;
  location: string;
  trusted: string;
  workLabel: string;
  workTitle: string;
  workIntro: string;
  explore: string;
  close: string;
  caseLabels: string[];
  schematic: string;
  cases: CaseStudy[];
  journeyLabel: string;
  journeyTitle: string;
  journeyIntro: string;
  journeyHint: string;
  craftLabel: string;
  craftTitle: string;
  craftIntro: string;
  stacks: { name: string; text: string; tools: string[] }[];
  lab: string;
  labText: string;
  labLink: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  education: string;
  certifications: string;
  languages: string;
  contactLabel: string;
  contactTitle: string[];
  contactText: string;
  form: string;
  cv: string;
  footer: string;
};

export const brandCopy: Record<Locale, BrandCopy> = {
  en: {
    nav: ['Projects', 'Writing', 'Journey', 'Approach', 'About'], skip: 'Skip to content', language: 'Language', theme: 'Switch color theme', menu: 'Open navigation',
    role: 'Senior Software Engineer', hero: ['Beyond', 'the interface.'], specialism: 'Backend / Vertical Slice Architecture / Distributed Systems',
    intro: 'I’m a software engineer drawn to backend and distributed systems. I like understanding how things work, turning complex problems into code I can reason about, and testing my ideas by building.',
    workCta: 'Explore my work', contactCta: 'Let’s talk', scroll: 'A closer look', map: 'THE SYSTEM BEHIND THE PRODUCT', mapHint: 'Select a layer. See how I think.',
    layers: [
      {name:'Product',label:'01 / UNDERSTAND',text:'Start with the people and the problem. A useful system begins with the right questions, before the first line of code.'},
      {name:'Services',label:'02 / STRUCTURE',text:'Give each domain a clear responsibility. Shape boundaries that let teams build and change software with confidence.'},
      {name:'Events',label:'03 / CONNECT',text:'Make services work together without tying them together. Design for retries, consistency and the failures in between.'},
      {name:'Platform',label:'04 / OPERATE',text:'A system needs to work beyond the demo. Make it observable, testable and understandable to the people running it.'},
    ],
    current:'IN MY NOTEBOOK',currentText:'I write about what I build, what fails and what I learn along the way.',experience:'8+ years in engineering',location:'Based in Barcelona',trusted:'PART OF THE JOURNEY',
    workLabel:'01 / PROJECTS',workTitle:'What I build.',workIntro:'Wyrd, Rate Limiter Lab and TelcoLab. Three projects where I build, test and write about the systems I want to understand.',explore:'Inside the work',close:'Close',caseLabels:['The challenge','The decisions','My contribution'],schematic:'Conceptual view · not a production diagram',
    cases:[
      {id:'emobility',company:'SCHWARZ DIGITS / LIDL PLUS',category:'PRODUCT ENGINEERING · 2026',title:'Making charging\neasier to operate.',intro:'From the first product back-office to the services behind it: bringing clarity to a growing EV-charging ecosystem.',tags:['.NET','Next.js','Observability'],challenge:'EV charging is as much an operations problem as a software problem. Country teams, Support and Engineering need practical tools and a shared understanding of the systems behind Lidl Plus and Kaufland charging.',decisions:'Bring operations into a role-based, network-scoped hub. Pair the back-office with documentation, integration tests, structured logs and actionable telemetry. Record architectural decisions so the code can keep evolving.',contribution:'Built the domain’s first product back-office and an operations hub. Refactored 35k+ lines across the ecosystem, including billing, and worked on OpenTelemetry / Grafana alerts and Databricks ETLs.'},
      {id:'connect',company:'SCHWARZ DIGITS / LIDL CONNECT',category:'ARCHITECTURE & INTEGRATION · 2026',title:'The foundations of\na new mobile service.',intro:'Designing operational workflows and resilient integrations for a new pan-European MVNO.',tags:['RabbitMQ','Sagas','Outbox'],challenge:'A new mobile service needs more than customer-facing flows. It needs a consistent way to configure countries, support operations and coordinate distributed services.',decisions:'Translate operational requirements into a PRD and SaaS architecture. Use Sagas, an Outbox and RabbitMQ to reason about consistency across services, then validate platform capacity with load and performance tests.',contribution:'Worked in the cross-functional Lidl Connect task force, owned the operations SaaS architecture and design, and owned load testing. Handed the SaaS design over for implementation.'},
      {id:'reviews',company:'GARTNER DIGITAL MARKETS',category:'DISTRIBUTED SYSTEMS · 2022–2025',title:'From reviews\nto trusted insights.',intro:'Evolving the platform behind reviews on Capterra, GetApp and Software Advice.',tags:['Kafka','.NET','AWS'],challenge:'Software reviews need to move from collection through scoring and moderation into useful marketplace content. Those steps must evolve without becoming one tightly coupled system.',decisions:'Decouple the scoring engine and distribute insights through event-driven pipelines. Evolve moderation from Angular to Next.js, and work across teams on review freshness, quality and search visibility.',contribution:'Led the scoring-engine refactor, built review pipelines and moderation tools, and helped define architectural standards across squads while mentoring engineers.'},
      {"id":"alerts","company":"PLAIN CONCEPTS / LIDL PLUS","category":"BACKEND MIGRATION · 2020–2022","title":"Lidl Plus alerts:\nfrom monolith to Azure.","intro":"Moving the alerts domain into cloud services while carrying its existing data and behavior forward.","tags":[".NET 6","Azure","Cosmos DB"],"challenge":"The alerts domain was part of a monolithic system supporting Lidl Plus communications. Moving it to cloud services meant dealing with both the application lifecycle and the data already behind it.","decisions":"Separate the domain into .NET services on Azure, with CQRS and DDD to make responsibilities explicit. Treat the data migration and the upgrade from .NET Core 3.1 to .NET 6 as part of the same engineering work, alongside event-driven integrations.","contribution":"Designed and led the alerts migration from the monolith to microservices, including the framework upgrade and full data migration. Worked with Azure Functions, Cosmos DB, Service Bus and Event Hub as part of the Lidl Plus backend at Plain Concepts."},
    ],
    journeyLabel:'03 / THE JOURNEY',journeyTitle:'My engineering\njourney.',journeyIntro:'From my first production deployments to enterprise platforms. Each chapter added a new way of looking at the problem.',journeyHint:'Explore each chapter',
    craftLabel:'04 / HOW I BUILD',craftTitle:'Tools follow\nthe problem.',craftIntro:'Vertical Slice Architecture is the approach I use most: I organize code around features and use cases, keeping each change close to the behavior it delivers.',
    stacks:[
      {name:'Vertical slices',text:'A use case, end to end: its logic, data access and tests together. Clear domain boundaries, with DDD and CQRS where they help.',tools:['C# / .NET','ASP.NET Core','DDD / CQRS','TDD']},
      {name:'Messaging & data',text:'Connecting services while keeping failures and consistency in view.',tools:['Kafka','RabbitMQ','NATS JetStream','PostgreSQL','MongoDB']},
      {name:'Cloud & operations',text:'The infrastructure to run it, and the signals to understand it.',tools:['AWS / Azure / STACKIT','Kubernetes','Terraform','OpenTelemetry']},
      {name:'Product & platforms',text:'Useful internal tools, thoughtful interfaces and room to explore AI.',tools:['TypeScript','React / Next.js','AI Gateways','Agent orchestration']},
    ],lab:'OFF THE CRITICAL PATH',labText:'Rate Limiter Lab — a personal space to explore distributed rate limiting, Go concurrency and Redis-backed state.',labLink:'Explore the lab',
    aboutLabel:'05 / THE PERSON',aboutTitle:'Curiosity,\nin production.',aboutText:'I’m Amin Chouaibi El Azaar, a software engineer based in Barcelona. I like getting close to the problem, making architecture understandable and helping the people around me build better software. Alongside work, I continue studying Computer Engineering at the UOC.',education:'Education',certifications:'Certifications',languages:'Languages',
    contactLabel:'HAVE SOMETHING IN MIND?',contactTitle:['Good work starts','with a conversation.'],contactText:'A technical challenge, a product idea, or just a good engineering conversation. I’d like to hear about it.',form:'Send a message',cv:'Request my CV',footer:'Thoughtfully built. Always evolving.',
  },
  es: {
    nav:['Proyectos','Escritos','Trayectoria','Enfoque','Sobre mí'],skip:'Saltar al contenido',language:'Idioma',theme:'Cambiar tema de color',menu:'Abrir navegación',role:'Ingeniero de Software Senior',hero:['Más allá','de la interfaz.'],specialism:'Backend / Vertical Slice Architecture / Sistemas distribuidos',
    intro:'Soy ingeniero de software, con especial interés en backend y sistemas distribuidos. Me gusta entender cómo funcionan las cosas, llevar problemas complejos a código que pueda razonar y poner mis ideas a prueba construyendo.',workCta:'Explora mi trabajo',contactCta:'Hablemos',scroll:'Más de cerca',map:'EL SISTEMA DETRÁS DEL PRODUCTO',mapHint:'Elige una capa. Descubre mi enfoque.',
    layers:[
      {name:'Producto',label:'01 / ENTENDER',text:'Primero, las personas y el problema. Un sistema útil empieza con las preguntas adecuadas, antes de escribir código.'},
      {name:'Servicios',label:'02 / ESTRUCTURAR',text:'Una responsabilidad clara para cada dominio. Límites que permitan a los equipos construir y cambiar el software con confianza.'},
      {name:'Eventos',label:'03 / CONECTAR',text:'Coordinar servicios sin atarlos entre sí. Diseñar teniendo en cuenta los reintentos, la consistencia y lo que puede fallar entre medias.'},
      {name:'Plataforma',label:'04 / OPERAR',text:'Un sistema tiene que funcionar más allá de la demo. Hacerlo observable, comprobable y comprensible para quienes lo operan.'},
    ],current:'EN MI CUADERNO',currentText:'Escribo sobre lo que construyo, lo que falla y lo que voy aprendiendo.',experience:'8+ años en ingeniería',location:'Desde Barcelona',trusted:'PARTE DEL CAMINO',
    workLabel:'01 / PROYECTOS',workTitle:'Lo que construyo.',workIntro:'Wyrd, Rate Limiter Lab y TelcoLab. Tres proyectos donde construyo, pongo a prueba y escribo sobre los sistemas que quiero entender.',explore:'Dentro del proyecto',close:'Cerrar',caseLabels:['El reto','Las decisiones','Mi aportación'],schematic:'Vista conceptual · no es un diagrama de producción',
    cases:[
      {id:'emobility',company:'SCHWARZ DIGITS / LIDL PLUS',category:'INGENIERÍA DE PRODUCTO · 2026',title:'Hacer más sencilla\nla operación de recarga.',intro:'Del primer back-office de producto a los servicios que lo sostienen: aportar claridad a un ecosistema de recarga en crecimiento.',tags:['.NET','Next.js','Observabilidad'],challenge:'La recarga eléctrica plantea tantos retos de operación como de software. Los equipos de país, Soporte e Ingeniería necesitan herramientas útiles y una visión compartida de los sistemas de recarga de Lidl Plus y Kaufland.',decisions:'Reunir las operaciones en un hub con acceso por rol y red. Acompañar el back-office de documentación, pruebas de integración, logs estructurados y telemetría útil. Dejar las decisiones de arquitectura por escrito para facilitar la evolución.',contribution:'Construí el primer back-office de producto del dominio y un hub de operaciones. Refactoricé más de 35.000 líneas del ecosistema, incluida facturación, y trabajé en alertas con OpenTelemetry / Grafana y ETLs en Databricks.'},
      {id:'connect',company:'SCHWARZ DIGITS / LIDL CONNECT',category:'ARQUITECTURA E INTEGRACIÓN · 2026',title:'Las bases de\nun nuevo operador móvil.',intro:'Diseñar los procesos de operación y las integraciones de un nuevo MVNO paneuropeo.',tags:['RabbitMQ','Sagas','Outbox'],challenge:'Un nuevo servicio móvil necesita algo más que los flujos del cliente. Hace falta una forma coherente de configurar países, gestionar operaciones y coordinar servicios distribuidos.',decisions:'Traducir las necesidades de operación a un PRD y una arquitectura SaaS. Usar Sagas, Outbox y RabbitMQ para abordar la consistencia entre servicios y evaluar la capacidad de la plataforma con pruebas de carga y rendimiento.',contribution:'Formé parte del equipo multidisciplinar de Lidl Connect, asumí la arquitectura y el diseño del SaaS de operaciones y las pruebas de carga. Dejé el diseño preparado para su implementación.'},
      {id:'reviews',company:'GARTNER DIGITAL MARKETS',category:'SISTEMAS DISTRIBUIDOS · 2022–2025',title:'De las reseñas\na información fiable.',intro:'Evolucionar la plataforma de reseñas de Capterra, GetApp y Software Advice.',tags:['Kafka','.NET','AWS'],challenge:'Una reseña pasa por recogida, puntuación y moderación antes de aportar valor en un marketplace. Esas etapas deben evolucionar sin convertirse en un único sistema fuertemente acoplado.',decisions:'Desacoplar el motor de puntuación y distribuir la información mediante pipelines de eventos. Evolucionar la moderación de Angular a Next.js y trabajar entre equipos sobre actualidad, calidad y visibilidad de las reseñas.',contribution:'Lideré la refactorización del motor de puntuación, construí pipelines y herramientas de moderación, y contribuí a definir estándares de arquitectura entre equipos y a acompañar a otros ingenieros.'},
      {"id":"alerts","company":"PLAIN CONCEPTS / LIDL PLUS","category":"MIGRACIÓN BACKEND · 2020–2022","title":"Alertas de Lidl Plus:\ndel monolito a Azure.","intro":"Llevar el dominio de alertas a servicios cloud, migrando también sus datos y conservando su comportamiento.","tags":[".NET 6","Azure","Cosmos DB"],"challenge":"El dominio de alertas formaba parte de un sistema monolítico que sostenía las comunicaciones de Lidl Plus. Pasarlo a servicios cloud implicaba abordar tanto el ciclo de vida de la aplicación como los datos que ya tenía detrás.","decisions":"Separar el dominio en servicios .NET sobre Azure, con CQRS y DDD para hacer explícitas las responsabilidades. Tratar la migración de datos y la actualización de .NET Core 3.1 a .NET 6 como parte del mismo trabajo, junto con las integraciones orientadas a eventos.","contribution":"Diseñé y lideré la migración de alertas del monolito a microservicios, incluida la actualización del framework y la migración completa de datos. Trabajé con Azure Functions, Cosmos DB, Service Bus y Event Hub dentro del backend de Lidl Plus en Plain Concepts."},
    ],journeyLabel:'03 / LA TRAYECTORIA',journeyTitle:'Mi recorrido\nen ingeniería.',journeyIntro:'De mis primeros despliegues en producción a las plataformas corporativas. Cada etapa me ha dado otra forma de mirar el problema.',journeyHint:'Explora cada etapa',
    craftLabel:'04 / CÓMO CONSTRUYO',craftTitle:'Las herramientas\nsiguen al problema.',craftIntro:'Vertical Slice Architecture es el enfoque con el que más trabajo: organizo el código alrededor de funcionalidades y casos de uso, acercando cada cambio al comportamiento que resuelve.',
    stacks:[
      {name:'Vertical slices',text:'Un caso de uso de principio a fin: lógica, acceso a datos y pruebas juntos. Límites de dominio claros, con DDD y CQRS donde aportan.',tools:['C# / .NET','ASP.NET Core','DDD / CQRS','TDD']},
      {name:'Mensajería y datos',text:'Conectar servicios sin perder de vista los fallos y la consistencia.',tools:['Kafka','RabbitMQ','NATS JetStream','PostgreSQL','MongoDB']},
      {name:'Cloud y operaciones',text:'La infraestructura para ejecutarlo y las señales para entenderlo.',tools:['AWS / Azure / STACKIT','Kubernetes','Terraform','OpenTelemetry']},
      {name:'Producto y plataformas',text:'Herramientas internas útiles, interfaces cuidadas y espacio para explorar IA.',tools:['TypeScript','React / Next.js','AI Gateways','Orquestación de agentes']},
    ],lab:'FUERA DEL CAMINO CRÍTICO',labText:'Rate Limiter Lab — un espacio personal para explorar la limitación de peticiones distribuida, la concurrencia en Go y el estado compartido con Redis.',labLink:'Explora el laboratorio',
    aboutLabel:'05 / LA PERSONA',aboutTitle:'La curiosidad,\nen producción.',aboutText:'Soy Amin Chouaibi El Azaar, ingeniero de software en Barcelona. Me gusta acercarme al problema, hacer comprensible la arquitectura y ayudar a quienes me rodean a construir mejor software. Compagino el trabajo con el grado en Ingeniería Informática en la UOC.',education:'Formación',certifications:'Certificaciones',languages:'Idiomas',
    contactLabel:'¿TIENES ALGO EN MENTE?',contactTitle:['El buen trabajo empieza','con una conversación.'],contactText:'Un reto técnico, una idea de producto o una buena conversación sobre ingeniería. Me gustará conocerlo.',form:'Enviar un mensaje',cv:'Solicitar mi CV',footer:'Construido con intención. Siempre evolucionando.',
  },
  ca: {
    nav:['Projectes','Escrits','Trajectòria','Enfocament','Sobre mi'],skip:'Saltar al contingut',language:'Idioma',theme:'Canviar el tema de color',menu:'Obrir navegació',role:'Enginyer de Programari Sènior',hero:['Més enllà','de la interfície.'],specialism:'Backend / Vertical Slice Architecture / Sistemes distribuïts',
    intro:'Soc enginyer de programari, amb especial interès en backend i sistemes distribuïts. M’agrada entendre com funcionen les coses, portar problemes complexos a codi que pugui raonar i posar les meves idees a prova construint.',workCta:'Explora el meu treball',contactCta:'Parlem',scroll:'Més de prop',map:'EL SISTEMA DARRERE DEL PRODUCTE',mapHint:'Tria una capa. Descobreix el meu enfocament.',
    layers:[
      {name:'Producte',label:'01 / ENTENDRE',text:'Primer, les persones i el problema. Un sistema útil comença amb les preguntes adequades, abans d’escriure codi.'},
      {name:'Serveis',label:'02 / ESTRUCTURAR',text:'Una responsabilitat clara per a cada domini. Límits que permetin als equips construir i canviar el programari amb confiança.'},
      {name:'Esdeveniments',label:'03 / CONNECTAR',text:'Coordinar serveis sense lligar-los entre si. Dissenyar tenint en compte els reintents, la consistència i el que pot fallar entremig.'},
      {name:'Plataforma',label:'04 / OPERAR',text:'Un sistema ha de funcionar més enllà de la demo. Fer-lo observable, comprovable i comprensible per a qui l’opera.'},
    ],current:'AL MEU QUADERN',currentText:'Escric sobre el que construeixo, el que falla i el que vaig aprenent.',experience:'8+ anys en enginyeria',location:'Des de Barcelona',trusted:'PART DEL CAMÍ',
    workLabel:'01 / PROJECTES',workTitle:'El que construeixo.',workIntro:'Wyrd, Rate Limiter Lab i TelcoLab. Tres projectes on construeixo, poso a prova i escric sobre els sistemes que vull entendre.',explore:'Dins del projecte',close:'Tancar',caseLabels:['El repte','Les decisions','La meva aportació'],schematic:'Vista conceptual · no és un diagrama de producció',
    cases:[
      {id:'emobility',company:'SCHWARZ DIGITS / LIDL PLUS',category:'ENGINYERIA DE PRODUCTE · 2026',title:'Fer més senzilla\nl’operació de recàrrega.',intro:'Del primer back-office de producte als serveis que el sostenen: aportar claredat a un ecosistema de recàrrega en creixement.',tags:['.NET','Next.js','Observabilitat'],challenge:'La recàrrega elèctrica planteja tants reptes d’operació com de programari. Els equips de país, Suport i Enginyeria necessiten eines útils i una visió compartida dels sistemes de recàrrega de Lidl Plus i Kaufland.',decisions:'Reunir les operacions en un hub amb accés per rol i xarxa. Acompanyar el back-office de documentació, proves d’integració, logs estructurats i telemetria útil. Deixar les decisions d’arquitectura per escrit per facilitar-ne l’evolució.',contribution:'Vaig construir el primer back-office de producte del domini i un hub d’operacions. Vaig refactoritzar més de 35.000 línies de l’ecosistema, inclosa la facturació, i vaig treballar en alertes amb OpenTelemetry / Grafana i ETLs a Databricks.'},
      {id:'connect',company:'SCHWARZ DIGITS / LIDL CONNECT',category:'ARQUITECTURA I INTEGRACIÓ · 2026',title:'Les bases d’un\nnou operador mòbil.',intro:'Dissenyar els processos d’operació i les integracions d’un nou MVNO paneuropeu.',tags:['RabbitMQ','Sagas','Outbox'],challenge:'Un nou servei mòbil necessita més que els fluxos del client. Cal una manera coherent de configurar països, gestionar operacions i coordinar serveis distribuïts.',decisions:'Traduir les necessitats d’operació a un PRD i una arquitectura SaaS. Fer servir Sagas, Outbox i RabbitMQ per abordar la consistència entre serveis i avaluar la capacitat de la plataforma amb proves de càrrega i rendiment.',contribution:'Vaig formar part de l’equip multidisciplinari de Lidl Connect, vaig assumir l’arquitectura i el disseny del SaaS d’operacions i les proves de càrrega. Vaig deixar el disseny preparat per implementar-lo.'},
      {id:'reviews',company:'GARTNER DIGITAL MARKETS',category:'SISTEMES DISTRIBUÏTS · 2022–2025',title:'De les ressenyes\na informació fiable.',intro:'Fer evolucionar la plataforma de ressenyes de Capterra, GetApp i Software Advice.',tags:['Kafka','.NET','AWS'],challenge:'Una ressenya passa per recollida, puntuació i moderació abans d’aportar valor en un marketplace. Aquestes etapes han d’evolucionar sense convertir-se en un únic sistema fortament acoblat.',decisions:'Desacoblar el motor de puntuació i distribuir la informació mitjançant pipelines d’esdeveniments. Fer evolucionar la moderació d’Angular a Next.js i treballar entre equips sobre actualitat, qualitat i visibilitat de les ressenyes.',contribution:'Vaig liderar la refactorització del motor de puntuació, vaig construir pipelines i eines de moderació, i vaig contribuir a definir estàndards d’arquitectura entre equips i a acompanyar altres enginyers.'},
      {"id":"alerts","company":"PLAIN CONCEPTS / LIDL PLUS","category":"MIGRACIÓ BACKEND · 2020–2022","title":"Alertes de Lidl Plus:\ndel monòlit a Azure.","intro":"Portar el domini d’alertes a serveis cloud, migrant també les dades i conservant-ne el comportament.","tags":[".NET 6","Azure","Cosmos DB"],"challenge":"El domini d’alertes formava part d’un sistema monolític que sostenia les comunicacions de Lidl Plus. Passar-lo a serveis cloud implicava abordar tant el cicle de vida de l’aplicació com les dades que ja tenia al darrere.","decisions":"Separar el domini en serveis .NET sobre Azure, amb CQRS i DDD per fer explícites les responsabilitats. Tractar la migració de dades i l’actualització de .NET Core 3.1 a .NET 6 com a part del mateix treball, juntament amb les integracions orientades a esdeveniments.","contribution":"Vaig dissenyar i liderar la migració d’alertes del monòlit a microserveis, inclosa l’actualització del framework i la migració completa de dades. Vaig treballar amb Azure Functions, Cosmos DB, Service Bus i Event Hub dins del backend de Lidl Plus a Plain Concepts."},
    ],journeyLabel:'03 / LA TRAJECTÒRIA',journeyTitle:'El meu recorregut\nen enginyeria.',journeyIntro:'Dels meus primers desplegaments en producció a les plataformes corporatives. Cada etapa m’ha donat una altra manera de mirar el problema.',journeyHint:'Explora cada etapa',
    craftLabel:'04 / COM CONSTRUEIXO',craftTitle:'Les eines\nsegueixen el problema.',craftIntro:'Vertical Slice Architecture és l’enfocament amb què més treballo: organitzo el codi al voltant de funcionalitats i casos d’ús, apropant cada canvi al comportament que resol.',
    stacks:[
      {name:'Vertical slices',text:'Un cas d’ús de principi a fi: lògica, accés a dades i proves junts. Límits de domini clars, amb DDD i CQRS on aporten.',tools:['C# / .NET','ASP.NET Core','DDD / CQRS','TDD']},
      {name:'Missatgeria i dades',text:'Connectar serveis sense perdre de vista les fallades i la consistència.',tools:['Kafka','RabbitMQ','NATS JetStream','PostgreSQL','MongoDB']},
      {name:'Cloud i operacions',text:'La infraestructura per executar-lo i els senyals per entendre’l.',tools:['AWS / Azure / STACKIT','Kubernetes','Terraform','OpenTelemetry']},
      {name:'Producte i plataformes',text:'Eines internes útils, interfícies cuidades i espai per explorar IA.',tools:['TypeScript','React / Next.js','AI Gateways','Orquestració d’agents']},
    ],lab:'FORA DEL CAMÍ CRÍTIC',labText:'Rate Limiter Lab — un espai personal per explorar la limitació de peticions distribuïda, la concurrència en Go i l’estat compartit amb Redis.',labLink:'Explora el laboratori',
    aboutLabel:'05 / LA PERSONA',aboutTitle:'La curiositat,\nen producció.',aboutText:'Soc l’Amin Chouaibi El Azaar, enginyer de programari a Barcelona. M’agrada acostar-me al problema, fer comprensible l’arquitectura i ajudar qui m’envolta a construir millor programari. Compagino la feina amb el grau en Enginyeria Informàtica a la UOC.',education:'Formació',certifications:'Certificacions',languages:'Idiomes',
    contactLabel:'TENS ALGUNA COSA AL CAP?',contactTitle:['La bona feina comença','amb una conversa.'],contactText:'Un repte tècnic, una idea de producte o una bona conversa sobre enginyeria. M’agradarà conèixer-ho.',form:'Enviar un missatge',cv:'Sol·licitar el meu CV',footer:'Construït amb intenció. Sempre evolucionant.',
  },
};
