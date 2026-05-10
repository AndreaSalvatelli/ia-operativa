import React from "react";
const TALLY_FORM_URL = "https://tally.so/r/WOeKEa";

function Icon({ type }) {
  const icons = {
    sparkles: "✦",
    bot: "🤖",
    radar: "◎",
    workflow: "↔",
    briefcase: "▣",
    check: "✓",
    search: "⌕",
    mail: "✉",
    shield: "✓",
    arrow: "→",
  };

  return <span className="icon">{icons[type] || "✦"}</span>;
}

export default function IAOperativaLanding() {
  const benefits = [
    "Tool AI selezionati, non una lista infinita di software inutili",
    "Casi d’uso concreti per marketing, vendite, customer care e processi interni",
    "Spiegazioni semplici, pensate per imprenditori e PMI italiane",
    "Focus su strumenti realmente applicabili nel lavoro quotidiano",
  ];

  const sections = [
    {
      icon: "radar",
      title: "Radar Tool AI",
      text: "Monitoriamo le novità più interessanti e filtriamo solo gli strumenti con potenziale reale per aziende e professionisti.",
    },
    {
      icon: "workflow",
      title: "Automazioni operative",
      text: "Idee pratiche per usare l’AI nei processi: email, report, CRM, preventivi, contenuti, assistenza clienti e task ripetitivi.",
    },
    {
      icon: "briefcase",
      title: "Applicazioni per PMI",
      text: "Ogni contenuto risponde a una domanda semplice: questo strumento può essere utile a una piccola o media impresa italiana?",
    },
  ];

  const useCases = [
    "Creare contenuti social e commerciali più velocemente",
    "Rispondere meglio a lead, clienti e richieste di preventivo",
    "Analizzare dati, documenti e report aziendali",
    "Automatizzare attività ripetitive con strumenti no-code",
    "Valutare nuovi tool AI prima di investirci tempo o budget",
    "Formare il team a usare l’AI in modo pratico e sicuro",
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brandIcon">
            <Icon type="sparkles" />
          </div>
          <div>
            <div className="brandName">IA Operativa</div>
            <div className="brandTagline">Intelligenza artificiale applicata</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#cosa">Cosa trovi</a>
          <a href="#metodo">Metodo</a>
          <a href="#newsletter">Newsletter</a>
          <a href="/blog">Blog</a>
        </nav>

        <a className="headerCta" href={TALLY_FORM_URL} target="_blank" rel="noreferrer">
  Iscriviti
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="heroText">
            <div className="eyebrow">
              <Icon type="bot" />
              Tool, casi d’uso e automazioni AI per aziende italiane
            </div>

            <h1>L’AI spiegata per chi deve usarla davvero.</h1>

            <p className="heroSubtitle">
              IA Operativa seleziona strumenti, workflow e applicazioni concrete
              di intelligenza artificiale per PMI, professionisti e team aziendali
              italiani.
            </p>

            <div className="heroActions">
             <a className="primaryButton" href={TALLY_FORM_URL} target="_blank" rel="noreferrer">
                Ricevi le novità AI <Icon type="arrow" />
              </a>
              <a className="secondaryButton" href="#cosa">
                Scopri il progetto
              </a>
            </div>

            <p className="microcopy">
              Niente hype. Solo strumenti e idee applicabili al lavoro quotidiano.
            </p>
          </div>

          <div className="heroCardWrap">
            <div className="glow"></div>
            <div className="toolCard">
              <div className="toolCardTop">
                <div>
                  <p>Esempio scheda tool</p>
                  <h3>AI Sales Assistant</h3>
                </div>
                <span>Alta utilità</span>
              </div>

              <div className="infoBox">
                <small>A cosa serve</small>
                <p>Aiuta il team commerciale a preparare follow-up, email e risposte ai lead.</p>
              </div>

              <div className="infoBox">
                <small>Caso d’uso PMI</small>
                <p>Ridurre i tempi di risposta alle richieste preventivo e migliorare la qualità dei messaggi.</p>
              </div>

              <div className="metrics">
                <div>
                  <small>Setup</small>
                  <strong>Medio</strong>
                </div>
                <div>
                  <small>Costo</small>
                  <strong>Freemium</strong>
                </div>
                <div>
                  <small>Target</small>
                  <strong>Sales</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cosa" className="section white">
          <div className="container">
            <div className="sectionIntro">
              <span>Cosa trovi</span>
              <h2>Non una directory. Un filtro operativo.</h2>
              <p>
                Ogni settimana analizziamo strumenti AI e li traduciamo in indicazioni
                pratiche: quando usarli, per chi sono utili e quali processi possono migliorare.
              </p>
            </div>

            <div className="cardsGrid">
              {sections.map((item) => (
                <article className="featureCard" key={item.title}>
                  <div className="featureIcon">
                    <Icon type={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="section">
          <div className="container twoColumns">
            <div>
              <div className="sectionIntro compact">
                <span>Metodo</span>
                <h2>Prima il problema, poi il tool.</h2>
                <p>
                  L’obiettivo non è inseguire ogni nuova app AI, ma capire quali strumenti
                  possono generare valore reale nei processi aziendali.
                </p>
              </div>

              <div className="benefits">
                {benefits.map((benefit) => (
                  <div className="benefit" key={benefit}>
                    <Icon type="check" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="useCasesGrid">
              {useCases.map((item) => (
                <div className="useCase" key={item}>
                  <Icon type="search" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="newsletter">
          <div className="newsletterInner">
            <div className="newsletterIcon">
              <Icon type="mail" />
            </div>
            <h2>Ricevi una selezione ragionata di novità AI.</h2>
            <p>
              Una newsletter pratica per scoprire strumenti, esempi e automazioni utili
              al lavoro aziendale. Pochi contenuti, scelti bene.
            </p>

            <div className="newsletterForm">
              <a className="tallyButton" href={TALLY_FORM_URL} target="_blank" rel="noreferrer">
               Iscriviti al Radar IA Operativa
              </a>
            </div>

            <div className="privacy">
              <Icon type="shield" />
              Nessuno spam. Solo contenuti utili e aggiornamenti selezionati.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>IA Operativa</strong>
        <span>© 2026 IA Operativa — Strumenti e automazioni AI per aziende italiane.</span>
      </footer>
    </div>
  );
}
