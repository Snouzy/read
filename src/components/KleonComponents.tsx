import { useState } from "react";

// 1. Timeline du processus créatif de partage
export const CreativeProcessTimeline = () => {
  const steps = [
    {
      phase: "Création",
      title: "Travail en cours",
      description: "Documenter le processus, les échecs, les découvertes",
      icon: "🎨",
      color: "#ff6b6b",
    },
    {
      phase: "Partage",
      title: "Montrer son travail",
      description: "Partager les étapes, pas seulement le résultat final",
      icon: "📤",
      color: "#4ecdc4",
    },
    {
      phase: "Connexion",
      title: "Construire sa tribu",
      description: "Attirer les bonnes personnes avec l'authenticité",
      icon: "🤝",
      color: "#45b7d1",
    },
    {
      phase: "Apprentissage",
      title: "Recevoir des retours",
      description: "Écouter, apprendre, s'améliorer continuellement",
      icon: "📚",
      color: "#96ceb4",
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔄 Le cycle du partage créatif selon Kleon
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-border bg-background text-3xl shadow-sm">
              {step.icon}
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="mb-1 text-xs font-medium tracking-wide text-accent uppercase">
                {step.phase}
              </div>
              <h4 className="mb-2 font-bold text-foreground">{step.title}</h4>
              <p className="text-xs text-foreground/70">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="mt-4 text-2xl text-foreground/40 lg:hidden">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-foreground/60">
        *Un processus circulaire où chaque étape nourrit les autres
      </div>
    </div>
  );
};

// 2. Matrice Authenticité vs Façade
export const AuthenticityMatrix = () => {
  const [selectedApproach, setSelectedApproach] = useState(0);

  const approaches = [
    {
      title: "Approche Authentique",
      description: "Partager ses vraies passions et échecs",
      icon: "✨",
      color: "#00b894",
      examples: [
        "Montrer ses ratés et apprentissages",
        "Partager ses influences réelles",
        "Révéler son processus imparfait",
        "Être vulnérable sur ses doutes",
      ],
      result: "Attire une audience engagée et fidèle",
    },
    {
      title: "Approche Façade",
      description: "Créer une image parfaite mais fausse",
      icon: "🎭",
      color: "#e17055",
      examples: [
        "Ne montrer que les succès",
        "Copier ce qui est tendance",
        "Cacher le processus réel",
        "Prétendre être quelqu'un d'autre",
      ],
      result: "Audience superficielle et temporaire",
    },
  ];

  const currentApproach = approaches[selectedApproach];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎯 Authenticité vs Façade dans le partage
      </h3>

      {/* Selector */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        {approaches.map((approach, index) => (
          <button
            key={index}
            onClick={() => setSelectedApproach(index)}
            className={`rounded-lg border-2 p-4 text-center transition-all ${
              selectedApproach === index
                ? "border-accent bg-accent-alpha-20 text-accent"
                : "border-border bg-muted/10 text-foreground/70 hover:bg-muted/20"
            }`}
          >
            <div className="text-3xl">{approach.icon}</div>
            <div className="text-sm font-medium">{approach.title}</div>
          </button>
        ))}
      </div>

      {/* Current approach details */}
      <div
        className={`rounded-lg border-2 p-6 ${
          selectedApproach === 0
            ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
            : "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
        }`}
      >
        <div className="mb-4 text-center">
          <div className="text-4xl">{currentApproach.icon}</div>
          <h4 className="text-lg font-bold text-foreground">
            {currentApproach.title}
          </h4>
          <p className="text-sm text-foreground/70">
            {currentApproach.description}
          </p>
        </div>

        <div className="mb-4">
          <h5 className="mb-2 font-semibold text-foreground">
            Exemples pratiques :
          </h5>
          <ul className="space-y-1">
            {currentApproach.examples.map((example, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span className="mt-1 text-xs">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded border border-border bg-background p-3">
          <div className="text-center text-sm">
            <strong>Résultat :</strong> {currentApproach.result}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Calculateur d'audience building
export const AudienceBuildingCalculator = () => {
  const [postsPerWeek, setPostsPerWeek] = useState(3);
  const [authenticityLevel, setAuthenticityLevel] = useState(8);

  const calculateGrowth = () => {
    const baseGrowth = postsPerWeek * 10;
    const authenticityBonus = (authenticityLevel / 10) * 50;
    const monthlyGrowth = Math.round(baseGrowth + authenticityBonus);
    const yearlyGrowth = monthlyGrowth * 12;

    return { monthlyGrowth, yearlyGrowth };
  };

  const { monthlyGrowth, yearlyGrowth } = calculateGrowth();

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-4 text-xl font-bold text-foreground">
        📈 Simulateur de croissance d'audience (selon Kleon)
      </h3>

      <div className="mb-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground/80">
            Publications par semaine :
          </label>
          <input
            type="range"
            min="1"
            max="7"
            value={postsPerWeek}
            onChange={e => setPostsPerWeek(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted/50 accent-accent"
          />
          <div className="mt-1 text-center text-lg font-bold text-accent">
            {postsPerWeek} posts/semaine
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground/80">
            Niveau d'authenticité :
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={authenticityLevel}
            onChange={e => setAuthenticityLevel(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted/50 accent-accent"
          />
          <div className="mt-1 text-center text-lg font-bold text-accent">
            {authenticityLevel}/10
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-background p-4 text-center">
          <div className="text-sm font-semibold text-foreground/70">
            Croissance/mois
          </div>
          <div className="text-2xl font-bold text-accent">+{monthlyGrowth}</div>
          <div className="text-xs text-foreground/60">nouveaux suiveurs</div>
        </div>
        <div className="rounded-lg border border-border bg-background p-4 text-center">
          <div className="text-sm font-semibold text-foreground/70">
            Croissance/an
          </div>
          <div className="text-2xl font-bold text-accent">+{yearlyGrowth}</div>
          <div className="text-xs text-foreground/60">nouveaux suiveurs</div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-foreground/60">
        *Simulation basée sur les principes de Kleon : consistance +
        authenticité
      </div>
    </div>
  );
};

// 4. Framework de Storytelling créatif
export const StorytellingFramework = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const storyTypes = [
    {
      title: "L'histoire du Processus",
      icon: "🛠️",
      structure: [
        "Défi initial",
        "Obstacles rencontrés",
        "Solutions trouvées",
        "Leçons apprises",
      ],
      example: "Comment j'ai appris à dessiner en 100 jours",
    },
    {
      title: "L'histoire de l'Inspiration",
      icon: "💡",
      structure: [
        "Source d'inspiration",
        "Impact personnel",
        "Adaptation à son travail",
        "Résultat créé",
      ],
      example: "Comment ce livre a changé ma façon de créer",
    },
    {
      title: "L'histoire de l'Échec",
      icon: "💥",
      structure: [
        "L'échec vécu",
        "Émotions ressenties",
        "Analyse des causes",
        "Rebond et apprentissage",
      ],
      example: "Mon plus gros échec créatif et ce qu'il m'a appris",
    },
  ];

  const currentStory = storyTypes[selectedStory];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        📖 Framework de Storytelling créatif
      </h3>

      {/* Story type selector */}
      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        {storyTypes.map((story, index) => (
          <button
            key={index}
            onClick={() => setSelectedStory(index)}
            className={`rounded-lg border-2 p-3 text-center transition-all ${
              selectedStory === index
                ? "border-accent bg-accent-alpha-20 text-accent"
                : "border-border bg-muted/10 text-foreground/70 hover:bg-muted/20"
            }`}
          >
            <div className="text-2xl">{story.icon}</div>
            <div className="text-sm font-medium">{story.title}</div>
          </button>
        ))}
      </div>

      {/* Current story structure */}
      <div className="mb-4">
        <h4 className="mb-3 text-center text-lg font-bold text-foreground">
          {currentStory.title}
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {currentStory.structure.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                {index + 1}
              </div>
              <div className="rounded border border-border bg-muted/20 p-3">
                <div className="text-sm font-medium text-foreground">
                  {step}
                </div>
              </div>
              {index < currentStory.structure.length - 1 && (
                <div className="mt-2 text-xl text-foreground/40 lg:hidden">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Example */}
      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center">
          <div className="text-sm font-medium text-foreground/70">
            Exemple d'histoire :
          </div>
          <div className="mt-1 text-foreground italic">
            "{currentStory.example}"
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Comparaison Partage vs Pas de partage
export const SharingImpactComparison = () => {
  const comparison = {
    withSharing: {
      title: "Avec partage",
      icon: "🌟",
      benefits: [
        { label: "Réseau", value: "Communauté engagée", icon: "👥" },
        { label: "Opportunités", value: "Projets inattendus", icon: "🚀" },
        { label: "Apprentissage", value: "Retours constructifs", icon: "📚" },
        { label: "Motivation", value: "Accountability public", icon: "💪" },
      ],
    },
    withoutSharing: {
      title: "Sans partage",
      icon: "🔒",
      drawbacks: [
        { label: "Réseau", value: "Isolement créatif", icon: "😔" },
        { label: "Opportunités", value: "Occasions manquées", icon: "❌" },
        { label: "Apprentissage", value: "Pas de retours", icon: "🤷" },
        { label: "Motivation", value: "Procrastination", icon: "😴" },
      ],
    },
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ⚖️ Impact du partage sur la carrière créative
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* With sharing */}
        <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/30">
          <div className="mb-4 text-center">
            <div className="text-4xl">{comparison.withSharing.icon}</div>
            <h4 className="text-lg font-bold text-foreground">
              {comparison.withSharing.title}
            </h4>
          </div>
          {comparison.withSharing.benefits.map((benefit, index) => (
            <div
              key={index}
              className="mb-3 rounded border border-border bg-background p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/70">
                  {benefit.label}
                </span>
                <span className="text-lg">{benefit.icon}</span>
              </div>
              <div className="mt-1 text-sm text-foreground">
                {benefit.value}
              </div>
            </div>
          ))}
        </div>

        {/* Without sharing */}
        <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
          <div className="mb-4 text-center">
            <div className="text-4xl">{comparison.withoutSharing.icon}</div>
            <h4 className="text-lg font-bold text-foreground">
              {comparison.withoutSharing.title}
            </h4>
          </div>
          {comparison.withoutSharing.drawbacks.map((drawback, index) => (
            <div
              key={index}
              className="mb-3 rounded border border-border bg-background p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/70">
                  {drawback.label}
                </span>
                <span className="text-lg">{drawback.icon}</span>
              </div>
              <div className="mt-1 text-sm text-foreground">
                {drawback.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Conclusion de Kleon :</strong> Le partage transforme la
          création solitaire en expérience collaborative et enrichissante
        </div>
      </div>
    </div>
  );
};
