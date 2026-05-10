export const articles = [
  {
    title: "Perché partire dai processi prima dei tool AI",
    slug: "partire-dai-processi-prima-dei-tool-ai",
    date: "2026-05-10",
    category: "Strategia AI",
    excerpt:
      "Per ottenere risultati concreti con l'intelligenza artificiale in azienda, conviene mappare prima i processi critici e solo dopo scegliere i tool.",
    metaTitle: "Perché partire dai processi prima dei tool AI | IA Operativa",
    metaDescription:
      "Guida pratica per PMI: come identificare i processi giusti da migliorare con l'AI prima di selezionare strumenti e piattaforme.",
    content: [
      "Nelle PMI italiane, il rischio più comune non è usare poca AI, ma usarla nel punto sbagliato. Quando si parte da una demo brillante o da un tool di moda, si tende a cercare un problema da assegnargli. In genere funziona poco e dura meno.",
      "Un approccio più solido è rovesciare l'ordine: prima il processo, poi lo strumento. In pratica significa osservare dove il team perde tempo, dove si accumulano errori o dove i passaggi dipendono da una sola persona. Sono questi i candidati migliori per una sperimentazione AI.",
      "Un metodo semplice: seleziona 2-3 processi ad alto impatto, misura il tempo attuale, definisci un obiettivo realistico (ad esempio ridurre del 20% il tempo di risposta commerciale), poi valuta i tool in base a quella metrica. Così la scelta diventa operativa, non ideologica.",
      "Quando il processo è chiaro, anche il change management è più facile: il team capisce perché si introduce il nuovo strumento e come verrà misurato il beneficio. Questo riduce resistenze, evita dispersione e aumenta la probabilità di adozione reale.",
    ],
  },
  {
    title: "Dati aziendali: il carburante dell’intelligenza artificiale",
    slug: "dati-aziendali-carburante-intelligenza-artificiale",
    date: "2026-05-10",
    category: "Data Readiness",
    excerpt:
      "Senza dati affidabili e ben organizzati, anche il miglior tool AI produce risultati incerti. Ecco cosa sistemare prima nelle PMI.",
    metaTitle: "Dati aziendali: il carburante dell’intelligenza artificiale | IA Operativa",
    metaDescription:
      "Come preparare i dati aziendali per progetti AI utili: qualità, accessibilità, responsabilità e priorità operative per PMI.",
    content: [
      "L'AI non sostituisce la qualità dei dati: la amplifica, nel bene e nel male. Se i dati commerciali sono incompleti o incoerenti, le analisi e i suggerimenti saranno poco affidabili, anche con piattaforme avanzate.",
      "Per molte PMI il primo passo non è acquistare un nuovo strumento, ma pulire le basi informative già disponibili: CRM, fogli condivisi, storico email, documenti tecnici e procedure interne. Bastano regole minime di naming e aggiornamento per alzare subito la qualità.",
      "Un secondo passaggio utile è definire responsabilità chiare: chi mantiene aggiornato ciascun dataset, con quale frequenza e con quali controlli. Senza ownership, i dati degradano rapidamente e i progetti AI perdono valore nel giro di pochi mesi.",
      "La buona notizia è che non serve perfezione iniziale. Serve una traiettoria: iniziare da un caso d'uso concreto, mettere in ordine i dati essenziali e misurare miglioramenti progressivi. È così che l'AI diventa una capacità aziendale, non un esperimento isolato.",
    ],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
