import { Locale } from '../i18n/config';

// One entry per piece, independent of where it is published. Native articles can
// later use an internal path without changing the home or archive components.
export type PublicationDestination =
  | { kind: 'external'; url: string; language: 'en' | 'es' }
  | { kind: 'internal'; path: string; language: Locale };
export type Publication = {
  id: string;
  category: 'technical' | 'reflections';
  topic: 'rate-limiting' | 'orleans' | 'people' | 'ai';
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  series?: string;
  part?: string;
  destinations: Record<'en' | 'es', PublicationDestination>;
};

export const publications: Publication[] = [
{
  "id": "deterministic-program",
  "category": "reflections",
  "topic": "ai",
  "title": {
    "en": "The model is not deterministic. The program it wrote is.",
    "es": "El modelo no es determinista. El programa que escribió, sí.",
    "ca": "El model no és determinista. El programa que va escriure, sí."
  },
  "summary": {
    "en": "Using AI to build verifiable tools instead of trusting its conclusions. A reflection on evidence, engineering judgment and checks that outlive a conversation.",
    "es": "Usar la IA para construir herramientas verificables en lugar de confiar en sus conclusiones. Una reflexión sobre evidencia, criterio y comprobaciones que sobreviven a una conversación.",
    "ca": "Fer servir la IA per construir eines verificables en lloc de confiar en les seves conclusions. Una reflexió sobre evidència, criteri i comprovacions que sobreviuen a una conversa."
  },
  "destinations": {
    "en": {
      "kind": "external",
      "url": "https://es.linkedin.com/pulse/el-modelo-es-determinista-programa-que-escribi%C3%B3-s%C3%AD-chouaibi-el-azaar-x3bhe",
      "language": "es"
    },
    "es": {
      "kind": "external",
      "url": "https://es.linkedin.com/pulse/el-modelo-es-determinista-programa-que-escribi%C3%B3-s%C3%AD-chouaibi-el-azaar-x3bhe",
      "language": "es"
    }
  }
},
{
  "id": "two-personality-assessments",
  "category": "reflections",
  "topic": "people",
  "title": {
    "en": "I took two personality assessments back to back. Here’s what I didn’t expect.",
    "es": "Hice dos evaluaciones de personalidad seguidas. Esto es lo que no esperaba.",
    "ca": "Vaig fer dues avaluacions de personalitat seguides. Això és el que no esperava."
  },
  "summary": {
    "en": "Self-awareness, the distance between how we appear and how we think, and the assumptions we bring to our teams.",
    "es": "Autoconocimiento, la distancia entre cómo nos mostramos y cómo pensamos, y las suposiciones que llevamos a nuestros equipos.",
    "ca": "Autoconeixement, la distància entre com ens mostrem i com pensem, i les suposicions que portem als nostres equips."
  },
  "destinations": {
    "en": {
      "kind": "external",
      "url": "https://www.linkedin.com/pulse/i-took-two-personality-assessments-back-heres-what-chouaibi-el-azaar-qbvhe/",
      "language": "en"
    },
    "es": {
      "kind": "external",
      "url": "https://www.linkedin.com/pulse/i-took-two-personality-assessments-back-heres-what-chouaibi-el-azaar-qbvhe/",
      "language": "en"
    }
  }
},
  {
    "id": "rate-limiter",
    "category": "technical",
    "topic": "rate-limiting",
    "title": {
      "en": "When the gateway fell over",
      "es": "Cuando el gateway se vino abajo",
      "ca": "Quan el gateway va caure"
    },
    "summary": {
      "en": "What I learned by building five rate-limiting algorithms and putting them under the same load.",
      "es": "Lo que aprendí al construir cinco algoritmos de rate limiting y someterlos a la misma carga.",
      "ca": "El que vaig aprendre construint cinc algoritmes de rate limiting i sotmetent-los a la mateixa càrrega."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/when-gateway-fell-over-what-i-learned-building-rate-amin-63cae/",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/when-gateway-fell-over-what-i-learned-building-rate-amin-63cae/",
        "language": "en"
      }
    }
  },
  {
    "id": "telcolab-00",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "00",
    "title": {
      "en": "Actors vs queues: the starting point",
      "es": "Actores vs. colas: el punto de partida",
      "ca": "Actors vs. cues: el punt de partida"
    },
    "summary": {
      "en": "The same number-porting workflow built with queues and virtual actors. What each approach makes easier, and what it asks you to own.",
      "es": "El mismo flujo de portabilidad con colas y actores virtuales. Qué facilita cada enfoque y qué te toca resolver.",
      "ca": "El mateix flux de portabilitat amb cues i actors virtuals. Què facilita cada enfocament i què et toca resoldre."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/one-workflow-two-architectures-what-porting-phone-me-amin-owr8e",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/un-flujo-dos-arquitecturas-lo-que-portar-n%C3%BAmero-de-me-amin-oneae",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-01",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "01",
    "title": {
      "en": "Building the workflow with grains",
      "es": "Construir el flujo con grains",
      "ca": "Construir el flux amb grains"
    },
    "summary": {
      "en": "A grain from end to end: state, third-party callbacks, correlation and timeouts.",
      "es": "Un grain de principio a fin: estado, callbacks de terceros, correlación y timeouts.",
      "ca": "Un grain de principi a fi: estat, callbacks de tercers, correlació i timeouts."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-1-building-number-porting-workflow-orleans-chouaibi-el-azaar-dzfae",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-1-building-number-porting-workflow-orleans-chouaibi-el-azaar-dzfae",
        "language": "en"
      }
    }
  },
  {
    "id": "telcolab-02",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "02",
    "title": {
      "en": "From direct calls to Orleans Streams",
      "es": "De llamadas directas a Orleans Streams",
      "ca": "De crides directes a Orleans Streams"
    },
    "summary": {
      "en": "Replacing a direct call with streams, and examining what fan-out changes.",
      "es": "Sustituir una llamada directa por streams y examinar qué cambia con el fan-out.",
      "ca": "Substituir una crida directa per streams i examinar què canvia amb el fan-out."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-2-de-una-llamada-directa-orleans-streams-amin-chouaibi-el-azaar-edffe",
        "language": "es"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-2-de-una-llamada-directa-orleans-streams-amin-chouaibi-el-azaar-edffe",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-03",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "03",
    "title": {
      "en": "Clustering and storage on Postgres",
      "es": "Clustering y almacenamiento en Postgres",
      "ca": "Clustering i emmagatzematge a Postgres"
    },
    "summary": {
      "en": "Moving state, reminders and cluster membership from memory to Postgres.",
      "es": "Llevar el estado, los reminders y la membresía del clúster de memoria a Postgres.",
      "ca": "Portar l’estat, els reminders i la pertinença al clúster de memòria a Postgres."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-3-from-one-silo-real-cluster-postgres-amin-chouaibi-el-azaar-iffve",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-3-de-un-silo-cl%C3%BAster-real-sobre-postgres-amin-chouaibi-el-azaar-91h2e",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-04",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "04",
    "title": {
      "en": "Atomic operations across grains",
      "es": "Operaciones atómicas entre grains",
      "ca": "Operacions atòmiques entre grains"
    },
    "summary": {
      "en": "Atomic operations across grains, and the trade-off between transactions and compensation.",
      "es": "Operaciones atómicas entre grains y el compromiso entre transacciones y compensaciones.",
      "ca": "Operacions atòmiques entre grains i el compromís entre transaccions i compensacions."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-4-atomic-operations-across-grains-orleans-amin-chouaibi-el-azaar-0vbwe",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-4-operaciones-at%C3%B3micas-entre-grains-con-orleans-amin-q2n0e",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-05",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "05",
    "title": {
      "en": "Seeing the cluster with .NET Aspire",
      "es": "Ver el clúster con .NET Aspire",
      "ca": "Veure el clúster amb .NET Aspire"
    },
    "summary": {
      "en": "Following a request across the cluster with .NET Aspire and OpenTelemetry.",
      "es": "Seguir una petición por el clúster con .NET Aspire y OpenTelemetry.",
      "ca": "Seguir una petició pel clúster amb .NET Aspire i OpenTelemetry."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-5-seeing-inside-cluster-net-aspire-amin-chouaibi-el-azaar-ruwle",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-5-ver-dentro-del-cl%C3%BAster-con-net-aspire-amin-chouaibi-el-azaar-kqeke",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-06",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "06",
    "title": {
      "en": "The architecture reckoning at scale",
      "es": "El balance de arquitectura a escala",
      "ca": "El balanç d’arquitectura a escala"
    },
    "summary": {
      "en": "A critical look at actors and microservices: infrastructure, complexity and the shape of the problem.",
      "es": "Una mirada crítica a actores y microservicios: infraestructura, complejidad y la forma del problema.",
      "ca": "Una mirada crítica a actors i microserveis: infraestructura, complexitat i la forma del problema."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-6-when-reach-orleans-reckoning-scale-amin-chouaibi-el-azaar-eqwce",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-6-cu%C3%A1ndo-tirar-de-orleans-un-ajuste-cuentas-chouaibi-el-azaar-lxo4e",
        "language": "es"
      }
    }
  },
  {
    "id": "telcolab-06b",
    "category": "technical",
    "topic": "orleans",
    "series": "TelcoLab",
    "part": "06b",
    "title": {
      "en": "The receipts: a decade at Halo scale",
      "es": "Las pruebas: una década a escala Halo",
      "ca": "Les proves: una dècada a escala Halo"
    },
    "summary": {
      "en": "The other angle of the closing: what the experience at Halo scale tells us about Orleans.",
      "es": "La otra cara del cierre: qué nos dice sobre Orleans la experiencia a escala Halo.",
      "ca": "L’altra cara del tancament: què ens diu sobre Orleans l’experiència a escala Halo."
    },
    "destinations": {
      "en": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/part-6-take-two-receipts-what-decade-halo-scale-chouaibi-el-azaar-109oe",
        "language": "en"
      },
      "es": {
        "kind": "external",
        "url": "https://www.linkedin.com/pulse/parte-6-segunda-toma-las-pruebas-qu%C3%A9-demuestra-de-una-amin-psvke",
        "language": "es"
      }
    }
  }
];

export const telcoPublications = publications.filter(item => item.series === 'TelcoLab');
export const featuredPublicationIds = ['rate-limiter', 'telcolab-00', 'deterministic-program'];
export function publicationDestination(item: Publication, locale: Locale) {
  return item.destinations[locale === 'en' ? 'en' : 'es'];
}
export function publicationHref(destination: PublicationDestination) {
  if (destination.kind === 'external') return destination.url;
  return `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${destination.path}`;
}
