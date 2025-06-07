import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// 1. Timeline de Russell Brunson - Du Patator à ClickFunnels
export const BrunsonTimeline = () => {
  const milestones = [
    {
      year: "2003",
      title: "Patator",
      description: "Première vente en ligne - DVD d'instructions",
      amount: "Premier succès",
      icon: "🥔",
      bgClass: "bg-orange-100 dark:bg-orange-950/30",
      borderClass: "border-orange-300 dark:border-orange-800",
    },
    {
      year: "2008",
      title: "Google Slap",
      description: "Perte de 90% du trafic du jour au lendemain",
      amount: "Crise majeure",
      icon: "💥",
      bgClass: "bg-red-100 dark:bg-red-950/30",
      borderClass: "border-red-300 dark:border-red-800",
    },
    {
      year: "2009",
      title: "Découverte des funnels",
      description: "Transition des sites web traditionnels vers les funnels",
      amount: "Révélation",
      icon: "💡",
      bgClass: "bg-yellow-100 dark:bg-yellow-950/30",
      borderClass: "border-yellow-300 dark:border-yellow-800",
    },
    {
      year: "2014",
      title: "ClickFunnels",
      description: "Lancement de la plateforme révolutionnaire",
      amount: "100M$ ARR",
      icon: "🚀",
      bgClass: "bg-green-100 dark:bg-green-950/30",
      borderClass: "border-green-300 dark:border-green-800",
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎢 L'évolution de Russell Brunson
      </h3>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-border"></div>
        <RoughNotationGroup show={true}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-8 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div
                className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
              >
                <div
                  className={`rounded-lg border-2 p-4 ${milestone.bgClass} ${milestone.borderClass}`}
                >
                  <div className="mb-2 text-3xl">{milestone.icon}</div>
                  <div className="text-lg font-bold text-foreground">
                    <RoughNotation
                      type="underline"
                      show={true}
                      color="#e17055"
                      animationDelay={500 + index * 300}
                    >
                      {milestone.year}
                    </RoughNotation>
                  </div>
                  <div className="text-xl font-bold text-accent">
                    {milestone.title}
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {milestone.description}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-accent">
                    {milestone.amount}
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-background bg-accent"></div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 2. Les 4 questions fondamentales
export const FourQuestions = () => {
  const questions = [
    {
      question: "Qui est votre client de rêve ?",
      purpose: "Identification précise",
      icon: "🎯",
      color: "#74b9ff",
    },
    {
      question: "Où se trouvent-ils ?",
      purpose: "Localisation des prospects",
      icon: "📍",
      color: "#fd79a8",
    },
    {
      question: "Quel appât utilisez-vous ?",
      purpose: "Lead magnet irrésistible",
      icon: "🎣",
      color: "#00b894",
    },
    {
      question: "Quel résultat voulez-vous ?",
      purpose: "Objectif de conversion",
      icon: "🏆",
      color: "#e17055",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ❓ Les 4 Questions Fondamentales de Brunson
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <RoughNotationGroup show={true}>
          {questions.map((q, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-4 text-center shadow-sm"
            >
              <div className="mb-3 text-4xl">{q.icon}</div>
              <div className="mb-2 text-lg font-bold text-foreground">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color={q.color}
                  animationDelay={300 + index * 200}
                >
                  Question {index + 1}
                </RoughNotation>
              </div>
              <div className="mb-2 text-sm font-semibold text-foreground">
                {q.question}
              </div>
              <div className="text-xs text-foreground/70">{q.purpose}</div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 3. Framework Hook, Story, Offer
export const HookStoryOffer = () => {
  const elements = [
    {
      title: "Hook",
      subtitle: "L'hameçon",
      description: "Capturer l'attention instantanément",
      example: "Démonstration téléphone légendaire",
      icon: "🪝",
      color: "#6c5ce7",
    },
    {
      title: "Story",
      subtitle: "L'histoire",
      description: "Créer la connexion émotionnelle",
      example: "Récit personnel et authentique",
      icon: "📖",
      color: "#fd79a8",
    },
    {
      title: "Offer",
      subtitle: "L'offre",
      description: "Présenter la solution irrésistible",
      example: "Valeur 10x supérieure au prix",
      icon: "🎁",
      color: "#00b894",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎭 Framework Hook, Story, Offer
      </h3>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <RoughNotationGroup show={true}>
          {elements.map((element, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col items-center md:mb-0"
            >
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 border-border bg-muted/20 text-3xl">
                {element.icon}
              </div>
              <div className="max-w-xs rounded-lg border-2 border-border bg-background p-4 text-center">
                <div
                  className="mb-1 text-xl font-bold"
                  style={{ color: element.color }}
                >
                  <RoughNotation
                    type="circle"
                    show={true}
                    color={element.color}
                    animationDelay={500 + index * 300}
                  >
                    {element.title}
                  </RoughNotation>
                </div>
                <div className="mb-2 text-sm font-semibold text-foreground/70">
                  {element.subtitle}
                </div>
                <div className="mb-2 text-sm text-foreground">
                  {element.description}
                </div>
                <div className="rounded border border-border bg-muted/20 p-2 text-xs text-foreground/80 italic">
                  {element.example}
                </div>
              </div>
              {index < elements.length - 1 && (
                <div className="mx-4 hidden text-4xl text-foreground/40 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 4. Value Ladder interactif
export const ValueLadder = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const levels = [
    {
      name: "Lead Magnet",
      price: "Gratuit",
      value: "Échantillon de valeur",
      description: "Attirer et qualifier les prospects",
      color: "#74b9ff",
      example: "Guide PDF gratuit",
    },
    {
      name: "Frontend",
      price: "7-47€",
      value: "Produit d'appel",
      description: "Première transaction, relation de confiance",
      color: "#fd79a8",
      example: "Mini-formation",
    },
    {
      name: "Core Product",
      price: "297-997€",
      value: "Offre principale",
      description: "Solution complète au problème",
      color: "#e17055",
      example: "Formation complète",
    },
    {
      name: "High-End",
      price: "2000€+",
      value: "Service premium",
      description: "Accompagnement personnalisé",
      color: "#00b894",
      example: "Coaching 1-on-1",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🪜 Value Ladder - Escalier de Valeur
      </h3>
      <div className="flex flex-col items-center">
        <RoughNotationGroup show={true}>
          {levels.map((level, index) => (
            <div
              key={index}
              className={`mb-4 w-full max-w-md cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                selectedLevel === index
                  ? "border-accent bg-accent/10 shadow-lg"
                  : "border-border bg-background hover:bg-muted/20"
              }`}
              onClick={() => setSelectedLevel(index)}
            >
              <div className="mb-2 flex items-center justify-between">
                <div
                  className="text-lg font-bold"
                  style={{ color: level.color }}
                >
                  <RoughNotation
                    type="underline"
                    show={selectedLevel === index}
                    color={level.color}
                    animationDelay={200}
                  >
                    {level.name}
                  </RoughNotation>
                </div>
                <div className="text-xl font-bold text-accent">
                  {level.price}
                </div>
              </div>
              <div className="mb-1 text-sm font-semibold text-foreground">
                {level.value}
              </div>
              <div className="text-xs text-foreground/70">
                {level.description}
              </div>
              {selectedLevel === index && (
                <div className="mt-2 rounded border border-border bg-background p-2 text-xs text-foreground italic">
                  Exemple : {level.example}
                </div>
              )}
            </div>
          ))}
        </RoughNotationGroup>
      </div>
      <div className="mt-4 text-center text-sm text-foreground/60">
        <strong>Principe :</strong> Chaque niveau prépare au suivant et augmente
        la LTV (Lifetime Value)
      </div>
    </div>
  );
};

// 5. Les 3 types de trafic
export const TrafficTypes = () => {
  const trafficTypes = [
    {
      type: "Trafic Contrôlé",
      description: "Vous payez pour envoyer quelqu'un quelque part",
      examples: ["Google Ads", "Facebook Ads", "Bannières", "Influenceurs"],
      icon: "💰",
      color: "#e17055",
      pros: ["Immédiat", "Scalable", "Prévisible"],
      cons: ["Coûteux", "Dépendant du budget", "Concurrence"],
    },
    {
      type: "Trafic Gagné",
      description: "Vous faites quelque chose pour gagner le trafic",
      examples: ["SEO", "Relations publiques", "Réseaux sociaux", "Viral"],
      icon: "🏆",
      color: "#00b894",
      pros: ["Gratuit", "Crédible", "Long terme"],
      cons: ["Lent", "Incertain", "Difficile à contrôler"],
    },
    {
      type: "Trafic Possédé",
      description: "Vous possédez la capacité de communiquer",
      examples: ["Liste email", "Abonnés", "App mobile", "Base clients"],
      icon: "👑",
      color: "#6c5ce7",
      pros: ["Contrôle total", "Pas de coût", "Relation directe"],
      cons: ["Prend du temps", "Besoin de maintenance", "Taille limitée"],
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🚦 Les 3 Types de Trafic selon Brunson
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <RoughNotationGroup show={true}>
          {trafficTypes.map((traffic, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-muted/10 p-4"
            >
              <div className="mb-4 text-center">
                <div className="mb-2 text-4xl">{traffic.icon}</div>
                <h4
                  className="text-lg font-bold"
                  style={{ color: traffic.color }}
                >
                  <RoughNotation
                    type="highlight"
                    show={true}
                    color={traffic.color}
                    animationDelay={300 + index * 200}
                  >
                    {traffic.type}
                  </RoughNotation>
                </h4>
                <p className="mt-2 text-sm text-foreground/70">
                  {traffic.description}
                </p>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-foreground">Exemples :</strong>
                <ul className="mt-1 list-disc pl-4 text-xs text-foreground/70">
                  {traffic.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-green-600 dark:text-green-400">
                  Avantages :
                </strong>
                <ul className="mt-1 list-disc pl-4 text-xs text-foreground/70">
                  {traffic.pros.map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-sm text-red-600 dark:text-red-400">
                  Inconvénients :
                </strong>
                <ul className="mt-1 list-disc pl-4 text-xs text-foreground/70">
                  {traffic.cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
      <div className="mt-4 rounded-lg border border-border bg-muted/20 p-3 text-center text-sm text-foreground">
        <strong>Stratégie :</strong> Commencer par le{" "}
        <RoughNotation type="underline" show={true} color="#e17055">
          trafic contrôlé
        </RoughNotation>
        , puis construire le{" "}
        <RoughNotation type="underline" show={true} color="#6c5ce7">
          trafic possédé
        </RoughNotation>
      </div>
    </div>
  );
};

// 6. Les 7 phases des funnels
export const FunnelPhases = () => {
  const phases = [
    { phase: "Définir l'avatar", icon: "👤", color: "#e17055" },
    { phase: "Créer l'appât", icon: "🎣", color: "#fd79a8" },
    { phase: "Créer la page de capture", icon: "📝", color: "#74b9ff" },
    { phase: "Créer l'offre", icon: "🎁", color: "#00b894" },
    { phase: "Créer les pages de vente", icon: "💰", color: "#6c5ce7" },
    { phase: "Générer du trafic", icon: "🚗", color: "#a29bfe" },
    { phase: "Optimiser", icon: "⚡", color: "#ffeaa7" },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔢 Les 7 Phases des Funnels
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <RoughNotationGroup show={true}>
          {phases.map((phase, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-border bg-background p-4 text-center shadow-sm"
            >
              <div
                className="mb-2 flex h-12 w-12 items-center justify-center rounded-full text-xl"
                style={{
                  backgroundColor: phase.color + "20",
                  color: phase.color,
                }}
              >
                {phase.icon}
              </div>
              <div className="text-xs font-bold text-foreground">
                <RoughNotation
                  type="box"
                  show={true}
                  color={phase.color}
                  animationDelay={200 + index * 150}
                >
                  Phase {index + 1}
                </RoughNotation>
              </div>
              <div className="mt-1 max-w-20 text-xs text-foreground/70">
                {phase.phase}
              </div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 7. Calculateur de Value Stack
export const ValueStackCalculator = () => {
  const elements = [
    { name: "Produit principal", value: 297, type: "Offre principale" },
    { name: "Bonus #1", value: 97, type: "Formation bonus" },
    { name: "Bonus #2", value: 197, type: "Templates" },
    { name: "Bonus #3", value: 47, type: "Checklist" },
  ];

  const totalValue = elements.reduce((sum, el) => sum + el.value, 0);
  const price = 97; // Prix de vente
  const valueRatio = Math.round(totalValue / price);

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        💎 Calculateur de Value Stack
      </h3>

      <div className="mb-6 space-y-3">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-border bg-background p-3"
          >
            <div>
              <div className="font-semibold text-foreground">
                {element.name}
              </div>
              <div className="text-sm text-foreground/70">{element.type}</div>
            </div>
            <div className="text-lg font-bold text-accent">
              {element.value}€
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 border-t border-border pt-4">
        <div className="mb-2 flex items-center justify-between text-lg">
          <span className="font-semibold text-foreground">Valeur totale :</span>
          <span className="font-bold text-accent">{totalValue}€</span>
        </div>
        <div className="mb-2 flex items-center justify-between text-lg">
          <span className="font-semibold text-foreground">Prix de vente :</span>
          <span className="font-bold text-accent">{price}€</span>
        </div>
        <div className="flex items-center justify-between text-xl">
          <span className="font-bold text-foreground">Ratio de valeur :</span>
          <span className="font-bold text-green-600 dark:text-green-400">
            <RoughNotation
              type="circle"
              show={true}
              color="#00b894"
              animationDelay={1000}
            >
              {valueRatio}:1
            </RoughNotation>
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted/20 p-3 text-center text-sm text-foreground">
        <strong>Principe de Brunson :</strong> La valeur perçue doit être{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ffeaa7"
          animationDelay={1500}
        >
          10x supérieure au prix
        </RoughNotation>
      </div>
    </div>
  );
};

// 8. Thermomètre de température du trafic
export const TrafficTemperature = () => {
  const temperatures = [
    {
      temp: "Chaud",
      description: "Ils vous connaissent, vous aiment et vous font confiance",
      examples: ["Clients existants", "Abonnés engagés", "Fans"],
      conversion: "Élevée",
      approach: "Vente directe",
      color: "#e17055",
      percentage: 90,
    },
    {
      temp: "Tiède",
      description: "Ils connaissent le sujet mais pas vous",
      examples: ["Recherches Google", "Communautés", "Recommandations"],
      conversion: "Moyenne",
      approach: "Éducation + vente",
      color: "#fdcb6e",
      percentage: 60,
    },
    {
      temp: "Froid",
      description: "Ils ne connaissent ni vous ni le problème",
      examples: ["Interruption", "Publicités", "Cold outreach"],
      conversion: "Faible",
      approach: "Sensibilisation",
      color: "#74b9ff",
      percentage: 30,
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🌡️ Thermomètre du Trafic
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <RoughNotationGroup show={true}>
          {temperatures.map((temp, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-background p-4 text-center"
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold" style={{ color: temp.color }}>
                  <RoughNotation
                    type="underline"
                    show={true}
                    color={temp.color}
                    animationDelay={300 + index * 200}
                  >
                    {temp.temp}
                  </RoughNotation>
                </h4>
                <div className="mt-2 text-sm text-foreground/70">
                  {temp.description}
                </div>
              </div>

              <div className="mb-4">
                <div className="mb-2 text-sm font-semibold text-foreground">
                  Conversion : {temp.conversion}
                </div>
                <div className="h-4 w-full rounded-full bg-muted/30">
                  <div
                    className="h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${temp.percentage}%`,
                      backgroundColor: temp.color,
                    }}
                  ></div>
                </div>
              </div>

              <div className="mb-3">
                <strong className="text-sm text-foreground">Exemples :</strong>
                <ul className="mt-1 list-disc pl-4 text-xs text-foreground/70">
                  {temp.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded border border-border bg-muted/20 p-2 text-xs text-foreground">
                <strong>Approche :</strong> {temp.approach}
              </div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};
