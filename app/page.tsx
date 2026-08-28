import {
  ArrowRight,
  Brush,
  Check,
  Clock3,
  Mail,
  MapPin,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";

const services = [
  {
    icon: PaintRoller,
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries et finitions soignées pour transformer votre intérieur.",
  },
  {
    icon: Brush,
    title: "Peinture extérieure",
    text: "Protection et remise en beauté de vos façades, volets, portails et menuiseries.",
  },
  {
    icon: Waves,
    title: "Sols & murs",
    text: "Pose de papier peint, toile de verre, revêtements muraux et sols souples.",
  },
  {
    icon: Sparkles,
    title: "Décoration",
    text: "Conseils couleurs, effets décoratifs et harmonies personnalisées pour chaque pièce.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "Atelier Couleurs",
  telephone: "+33 6 00 00 00 00",
  email: "contact@votreentreprise.fr",
  areaServed: "[Votre ville et ses alentours]",
  priceRange: "€€",
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil Atelier Couleurs">
          <span className="brand-mark" aria-hidden="true"><PaintRoller size={21} /></span>
          <span><strong>Atelier Couleurs</strong><small>Peintre & décorateur</small></span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#realisations">Réalisations</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-phone" href="tel:+33600000000"><Phone size={17} /> 06 00 00 00 00</a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow"><MapPin size={16} /> Artisan peintre à [Votre ville]</div>
          <h1>Vos murs méritent<br />une <em>finition parfaite.</em></h1>
          <p className="hero-lead">
            Peinture intérieure et extérieure, décoration et revêtements. Un travail propre,
            durable et réalisé avec soin dans <strong>[votre secteur]</strong>.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Demander un devis gratuit <ArrowRight size={18} /></a>
            <a className="button secondary" href="tel:+33600000000"><Phone size={18} /> Appeler l’artisan</a>
          </div>
          <div className="hero-reassurance" aria-label="Engagements">
            <span><Check size={16} /> Devis gratuit</span>
            <span><Check size={16} /> Chantier protégé</span>
            <span><Check size={16} /> Finitions soignées</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/peintre-interieur.jpg" alt="Artisan peintre appliquant une peinture murale au rouleau" />
          <div className="hero-badge">
            <ShieldCheck size={27} />
            <span><strong>Artisan local</strong><small>Disponible et à votre écoute</small></span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Points forts">
        <div><strong>10+ ans</strong><span>d’expérience</span></div>
        <div><strong>[Zone locale]</strong><span>déplacement gratuit</span></div>
        <div><strong>4,9 / 5</strong><span>avis Google</span></div>
        <div><strong>Garantie</strong><span>responsabilité civile pro</span></div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <span className="kicker">Un seul artisan, tous vos projets</span>
          <h2>Des prestations complètes,<br />du sol au plafond.</h2>
          <p>Pour votre maison, votre appartement ou vos locaux professionnels.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="service-icon"><Icon size={23} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">Parler de mon projet <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="local-section">
        <div className="local-inner">
          <div className="local-copy">
            <span className="kicker">Votre peintre près de chez vous</span>
            <h2>Un artisan local,<br />visible au bon moment.</h2>
            <p>
              Quand un particulier recherche « peintre à [Votre ville] » sur Google,
              ce site lui présente immédiatement vos services, votre secteur et la façon
              de vous contacter.
            </p>
            <ul className="check-list">
              <li><Check size={17} /> Pages préparées pour le référencement local</li>
              <li><Check size={17} /> Coordonnées accessibles en un geste</li>
              <li><Check size={17} /> Affichage rapide sur mobile</li>
            </ul>
            <div className="location-tags" aria-label="Exemples de communes desservies">
              <span>[Ville principale]</span><span>[Commune 2]</span><span>[Commune 3]</span><span>+ 25 km</span>
            </div>
          </div>
          <div className="search-card" aria-label="Exemple de résultat de recherche Google">
            <div className="search-top"><span></span><span></span><span></span></div>
            <div className="search-query">peintre à [votre ville]</div>
            <div className="search-result">
              <small>Votre site internet</small>
              <strong>Atelier Couleurs — Peintre à [Votre ville]</strong>
              <p>Peinture intérieure et extérieure, décoration, façades et revêtements. Devis gratuit.</p>
              <div className="search-links"><span>Appeler</span><span>Itinéraire</span><span>Devis</span></div>
            </div>
            <div className="map-pin"><MapPin size={24} /><span>Vous êtes visible<br /><strong>dans votre secteur</strong></span></div>
          </div>
        </div>
      </section>

      <section className="section projects" id="realisations">
        <div className="projects-heading">
          <div className="section-heading">
            <span className="kicker">Le savoir-faire en images</span>
            <h2>Des réalisations qui donnent confiance.</h2>
          </div>
          <p>Remplacez ces photos par les vrais chantiers de l’artisan pour créer une preuve immédiate de qualité.</p>
        </div>
        <div className="project-grid">
          <article className="project-card project-large">
            <img src="/images/interieur-renove.jpg" alt="Séjour rénové dans des teintes naturelles" />
            <div><span>Peinture & décoration</span><strong>Rénovation complète d’un séjour</strong><small>[Votre ville]</small></div>
          </article>
          <article className="project-card">
            <img src="/images/ravalement-facade.jpg" alt="Artisan réalisant un ravalement de façade" />
            <div><span>Extérieur</span><strong>Ravalement et protection de façade</strong><small>[Commune voisine]</small></div>
          </article>
          <article className="project-card">
            <img src="/images/peintre-interieur.jpg" alt="Travaux de peinture intérieure" />
            <div><span>Intérieur</span><strong>Murs, plafonds et boiseries</strong><small>[Votre secteur]</small></div>
          </article>
        </div>
      </section>

      <section className="method-section">
        <div className="section method-inner">
          <div className="section-heading">
            <span className="kicker">Simple et sans surprise</span>
            <h2>Votre projet en trois étapes.</h2>
          </div>
          <div className="steps">
            <article><span>01</span><h3>Échange & visite</h3><p>Nous échangeons sur vos besoins et observons les surfaces à traiter.</p></article>
            <article><span>02</span><h3>Devis détaillé</h3><p>Vous recevez une proposition claire avec les travaux et finitions prévus.</p></article>
            <article><span>03</span><h3>Chantier soigné</h3><p>Protection, préparation, application et nettoyage : tout est maîtrisé.</p></article>
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="section-heading">
          <span className="kicker">La meilleure preuve : vos clients</span>
          <h2>Des avis qui rassurent avant même le premier appel.</h2>
        </div>
        <div className="review-grid">
          {["Travail très propre et finitions impeccables. Le chantier a été protégé et rendu dans les délais.", "Très bons conseils pour les couleurs. Le résultat est exactement celui que nous imaginions.", "Artisan sérieux, disponible et ponctuel. Nous le recommandons sans hésiter."].map((review, index) => (
            <blockquote key={review}>
              <div className="stars" aria-label="5 étoiles">{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={15} fill="currentColor" />)}</div>
              <p>« {review} »</p>
              <footer><strong>[Prénom client {index + 1}]</strong><span>Exemple d’avis Google</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section faq-inner">
          <div className="section-heading">
            <span className="kicker">Questions fréquentes</span>
            <h2>Avant de lancer votre projet.</h2>
          </div>
          <div className="faq-list">
            <details><summary>Le devis est-il gratuit ? <span>+</span></summary><p>Oui, le déplacement et le devis sont gratuits dans la zone d’intervention indiquée.</p></details>
            <details><summary>Intervenez-vous en intérieur et en extérieur ? <span>+</span></summary><p>Oui, pour la peinture intérieure, les façades, les menuiseries, la décoration et les revêtements.</p></details>
            <details><summary>Comment protégez-vous le logement ? <span>+</span></summary><p>Les sols, meubles et ouvertures sont protégés avant chaque intervention, puis le chantier est nettoyé.</p></details>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <span className="kicker light">Un projet de peinture ?</span>
            <h2>Parlons de votre projet<br />et de vos envies.</h2>
            <p>Décrivez-moi votre besoin. Je vous réponds rapidement pour organiser une visite et préparer votre devis gratuit.</p>
            <div className="contact-actions">
              <a className="button light-button" href="tel:+33600000000"><Phone size={18} /> 06 00 00 00 00</a>
              <a className="button outline-button" href="mailto:contact@votreentreprise.fr?subject=Demande%20de%20devis"><Mail size={18} /> Envoyer un e-mail</a>
            </div>
          </div>
          <aside className="contact-card">
            <h3>Atelier Couleurs</h3>
            <p>Peintre en bâtiment & décorateur</p>
            <ul>
              <li><MapPin size={18} /><span><strong>Zone d’intervention</strong>[Votre ville] et 25 km autour</span></li>
              <li><Clock3 size={18} /><span><strong>Disponibilités</strong>Du lundi au vendredi · 8h–18h</span></li>
              <li><Mail size={18} /><span><strong>E-mail</strong>contact@votreentreprise.fr</span></li>
            </ul>
            <small>Réponse habituelle sous 24 heures ouvrées</small>
          </aside>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#accueil">
            <span className="brand-mark"><PaintRoller size={21} /></span>
            <span><strong>Atelier Couleurs</strong><small>Peintre & décorateur</small></span>
          </a>
          <p>Peinture intérieure · Peinture extérieure · Décoration · Ravalement · Revêtements · Vitrerie</p>
          <div><a href="tel:+33600000000">06 00 00 00 00</a><span>·</span><a href="mailto:contact@votreentreprise.fr">contact@votreentreprise.fr</a></div>
        </div>
        <div className="legal"><span>© 2026 Atelier Couleurs</span><span>Site de démonstration — informations entre crochets à personnaliser</span></div>
      </footer>

      <a className="mobile-call" href="tel:+33600000000"><Phone size={18} /> Appeler l’artisan</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </main>
  );
}
