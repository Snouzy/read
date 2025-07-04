import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// 1. Modèle Hook interactif - Cycle des 4 phases
export const HookModel = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      name: "Déclencheur",
      subtitle: "Trigger",
      description: "Élément qui initie le comportement",
      examples: ["Notification", "Émotion", "Routine", "Situation"],
      icon: "🔔",
      color: "#e17055",
    },
    {
      name: "Action",
      subtitle: "Action",
      description: "Comportement simple en anticipation d'une récompense",
      examples: ["Ouvrir l'app", "Scroller", "Cliquer", "Chercher"],
      icon: "👆",
      color: "#74b9ff",
    },
    {
      name: "Récompense Variable",
      subtitle: "Variable Reward",
      description: "Gratification imprévisible qui satisfait le besoin",
      examples: ["Like", "Message", "Contenu", "Accomplissement"],
      icon: "🎁",
      color: "#00b894",
    },
    {
      name: "Investissement",
      subtitle: "Investment",
      description: "Effort qui augmente la probabilité de répétition",
      examples: ["Contenu", "Données", "Followers", "Compétences"],
      icon: "💎",
      color: "#fd79a8",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔄 Le Modèle Hook de Nir Eyal
      </h3>

      <div className="relative mx-auto h-96 w-96">
        {/* Cercle central */}
        <div className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-border bg-background text-center">
          <span className="text-sm font-bold text-foreground">HOOK</span>
        </div>

        {/* Les 4 phases */}
        <RoughNotationGroup show={true}>
          {phases.map((phase, index) => {
            const isActive = activePhase === index;
            const angle = index * 90 - 90; // Commence en haut
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className={`absolute cursor-pointer transition-all duration-300 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                style={{
                  left: `calc(50% + ${x}px - 60px)`,
                  top: `calc(50% + ${y}px - 60px)`,
                }}
                onClick={() => setActivePhase(index)}
              >
                <div
                  className={`rounded-lg border-2 p-4 text-center transition-all ${
                    isActive
                      ? "border-accent bg-accent/20 shadow-lg"
                      : "border-border bg-background hover:bg-muted/20"
                  }`}
                  style={{ width: "120px" }}
                >
                  <div className="mb-2 text-3xl">{phase.icon}</div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: phase.color }}
                  >
                    <RoughNotation
                      type="underline"
                      show={isActive}
                      color={phase.color}
                      animationDelay={200}
                    >
                      {phase.name}
                    </RoughNotation>
                  </div>
                  <div className="text-xs text-foreground/70">
                    {phase.subtitle}
                  </div>
                </div>

                {/* Flèche vers la phase suivante */}
                <div
                  className="absolute text-2xl text-foreground/40"
                  style={{
                    left: index < 2 ? "110px" : "-30px",
                    top: index % 2 === 0 ? "50px" : "30px",
                    transform: `rotate(${(index + 1) * 90}deg)`,
                  }}
                >
                  →
                </div>
              </div>
            );
          })}
        </RoughNotationGroup>
      </div>

      {/* Détails de la phase active */}
      <div className="mt-6 rounded-lg border border-border bg-background p-4">
        <h4
          className="mb-2 text-lg font-bold"
          style={{ color: phases[activePhase].color }}
        >
          Phase {activePhase + 1} : {phases[activePhase].name}
        </h4>
        <p className="mb-3 text-sm text-foreground">
          {phases[activePhase].description}
        </p>
        <div>
          <strong className="text-sm text-foreground">Exemples :</strong>
          <div className="mt-1 flex flex-wrap gap-1">
            {phases[activePhase].examples.map((example, idx) => (
              <span
                key={idx}
                className="rounded border border-border bg-muted/20 px-2 py-1 text-xs text-foreground"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Les 3 types de récompenses variables
export const VariableRewards = () => {
  const [selectedReward, setSelectedReward] = useState(0);

  const rewards = [
    {
      type: "Tribu",
      description: "Validation sociale et reconnaissance communautaire",
      icon: "👥",
      color: "#e17055",
      examples: [
        { platform: "Facebook", reward: "Likes et commentaires" },
        { platform: "Instagram", reward: "Likes et followers" },
        { platform: "LinkedIn", reward: "Recommandations" },
        { platform: "Stack Overflow", reward: "Votes et badges" },
      ],
      psychology: "Besoin d'appartenance et de reconnaissance sociale",
    },
    {
      type: "Chasse",
      description: "Acquisition de ressources et d'informations",
      icon: "🎯",
      color: "#00b894",
      examples: [
        { platform: "Twitter", reward: "Tweets intéressants" },
        { platform: "Pinterest", reward: "Pins inspirants" },
        { platform: "Google", reward: "Résultats de recherche" },
        { platform: "Amazon", reward: "Produits désirés" },
      ],
      psychology: "Instinct ancestral de collecte de ressources",
    },
    {
      type: "Ego",
      description: "Sentiment d'accomplissement et de maîtrise",
      icon: "🏆",
      color: "#6c5ce7",
      examples: [
        { platform: "Duolingo", reward: "Progression d'apprentissage" },
        { platform: "Strava", reward: "Performances sportives" },
        { platform: "Codecademy", reward: "Compétences acquises" },
        { platform: "Jeux vidéo", reward: "Niveaux et achievements" },
      ],
      psychology: "Désir de compétence et d'auto-amélioration",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎲 Les 3 Types de Récompenses Variables
      </h3>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <RoughNotationGroup show={true}>
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                selectedReward === index
                  ? "border-accent bg-accent/10 shadow-lg"
                  : "border-border bg-muted/10 hover:bg-muted/20"
              }`}
              onClick={() => setSelectedReward(index)}
            >
              <div className="mb-3 text-4xl">{reward.icon}</div>
              <h4
                className="mb-2 text-lg font-bold"
                style={{ color: reward.color }}
              >
                <RoughNotation
                  type="highlight"
                  show={selectedReward === index}
                  color={reward.color}
                  animationDelay={200}
                >
                  {reward.type}
                </RoughNotation>
              </h4>
              <p className="text-sm text-foreground/70">{reward.description}</p>
            </div>
          ))}
        </RoughNotationGroup>
      </div>

      {/* Détails du type sélectionné */}
      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <h4
          className="mb-3 text-lg font-bold"
          style={{ color: rewards[selectedReward].color }}
        >
          Récompenses de {rewards[selectedReward].type}
        </h4>

        <div className="mb-4">
          <strong className="text-sm text-foreground">
            Base psychologique :
          </strong>
          <p className="text-sm text-foreground/80">
            {rewards[selectedReward].psychology}
          </p>
        </div>

        <div>
          <strong className="text-sm text-foreground">
            Exemples concrets :
          </strong>
          <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
            {rewards[selectedReward].examples.map((example, idx) => (
              <div
                key={idx}
                className="rounded border border-border bg-background p-2"
              >
                <div className="font-semibold text-foreground">
                  {example.platform}
                </div>
                <div className="text-sm text-foreground/70">
                  {example.reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Matrice éthique des créateurs
export const EthicsMatrix = () => {
  const creators = [
    {
      type: "Facilitateur",
      description: "Utilise son produit ET croit qu'il améliore la vie",
      ethics: "Position éthiquement solide",
      icon: "✅",
      color: "#00b894",
      bgClass: "bg-green-100 dark:bg-green-950/30",
      borderClass: "border-green-300 dark:border-green-800",
    },
    {
      type: "Marchand de rêves",
      description: "N'utilise PAS son produit mais croit qu'il améliore la vie",
      ethics: "Risque de déconnexion avec la réalité",
      icon: "💭",
      color: "#fdcb6e",
      bgClass: "bg-yellow-100 dark:bg-yellow-950/30",
      borderClass: "border-yellow-300 dark:border-yellow-800",
    },
    {
      type: "Saltimbanque",
      description:
        "Utilise son produit mais ne croit PAS qu'il améliore la vie",
      ethics: "Crée de la distraction",
      icon: "🎭",
      color: "#fd79a8",
      bgClass: "bg-pink-100 dark:bg-pink-950/30",
      borderClass: "border-pink-300 dark:border-pink-800",
    },
    {
      type: "Dealer",
      description:
        "N'utilise PAS son produit et ne croit PAS qu'il améliore la vie",
      ethics: "Motivation purement vénale",
      icon: "💸",
      color: "#e17055",
      bgClass: "bg-red-100 dark:bg-red-950/30",
      borderClass: "border-red-300 dark:border-red-800",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ⚖️ Matrice Éthique des Créateurs de Produits
      </h3>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <RoughNotationGroup show={true}>
          {creators.map((creator, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 p-4 text-center ${creator.bgClass} ${creator.borderClass}`}
            >
              <div className="mb-3 text-4xl">{creator.icon}</div>
              <h4
                className="mb-2 text-lg font-bold"
                style={{ color: creator.color }}
              >
                <RoughNotation
                  type="underline"
                  show={true}
                  color={creator.color}
                  animationDelay={300 + index * 200}
                >
                  {creator.type}
                </RoughNotation>
              </h4>
              <p className="mb-2 text-sm text-foreground">
                {creator.description}
              </p>
              <p
                className="text-xs font-semibold"
                style={{ color: creator.color }}
              >
                {creator.ethics}
              </p>
            </div>
          ))}
        </RoughNotationGroup>
      </div>

      <div className="rounded-lg border border-border bg-background p-3 text-center text-sm text-foreground">
        <strong>Conseil de Nir Eyal :</strong> Les chances de réussite diminuent
        à mesure qu'on s'éloigne de sa propre expérience utilisateur
      </div>
    </div>
  );
};

// 4. Calculateur de formation d'habitude
export const HabitCalculator = () => {
  const [frequency, setFrequency] = useState(3);
  const [utility, setUtility] = useState(7);

  const habitStrength = (frequency * utility) / 10;
  const habitLevel =
    habitStrength >= 8
      ? "Forte"
      : habitStrength >= 5
        ? "Modérée"
        : habitStrength >= 3
          ? "Faible"
          : "Très faible";

  const habitColor =
    habitStrength >= 8
      ? "#00b894"
      : habitStrength >= 5
        ? "#fdcb6e"
        : habitStrength >= 3
          ? "#fd79a8"
          : "#e17055";

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        📈 Calculateur de Force d'Habitude
      </h3>

      <div className="mb-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Fréquence d'utilisation (fois par semaine) : {frequency}
          </label>
          <input
            type="range"
            min="1"
            max="21"
            value={frequency}
            onChange={e => setFrequency(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Utilité perçue (sur 10) : {utility}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={utility}
            onChange={e => setUtility(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-background p-4 text-center">
        <div className="mb-2 text-sm text-foreground/70">
          Force de l'habitude
        </div>
        <div className="text-3xl font-bold" style={{ color: habitColor }}>
          <RoughNotation
            type="circle"
            show={true}
            color={habitColor}
            animationDelay={500}
          >
            {habitLevel}
          </RoughNotation>
        </div>
        <div className="mt-2 text-sm text-foreground/80">
          Score : {habitStrength.toFixed(1)}/10
        </div>
      </div>
    </div>
  );
};

// 5. Comparaison variabilité finie vs infinie
export const VariabilityComparison = () => {
  const [selectedType, setSelectedType] = useState("finite");

  const variabilityTypes = {
    finite: {
      title: "Variabilité Finie",
      description: "Expérience qui devient prévisible à l'usage",
      icon: "📺",
      color: "#e17055",
      characteristics: [
        "Contenu limité",
        "Patterns prévisibles",
        "Intérêt décroissant",
        "Rejouabilité faible",
      ],
      examples: [
        { name: "FarmVille", reason: "Mécaniques répétitives" },
        { name: "Séries TV", reason: "Histoire connue en rediffusion" },
        { name: "Jeux linéaires", reason: "Même parcours à chaque fois" },
        { name: "Quiz fixes", reason: "Mêmes questions" },
      ],
    },
    infinite: {
      title: "Variabilité Infinie",
      description: "Expérience qui maintient l'imprévisibilité",
      icon: "🌊",
      color: "#00b894",
      characteristics: [
        "Contenu renouvelé",
        "Imprévisibilité constante",
        "Intérêt maintenu",
        "Engagement durable",
      ],
      examples: [
        { name: "Facebook", reason: "Flux d'actualités dynamique" },
        { name: "Twitter", reason: "Nouveaux tweets en continu" },
        { name: "YouTube", reason: "Recommandations algorithmiques" },
        { name: "Reddit", reason: "Contenu communautaire évolutif" },
      ],
    },
  };

  const currentType =
    variabilityTypes[selectedType as keyof typeof variabilityTypes];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ♾️ Variabilité Finie vs Infinie
      </h3>

      {/* Sélecteur de type */}
      <div className="mb-6 flex justify-center space-x-4">
        {Object.entries(variabilityTypes).map(([key, type]) => (
          <button
            key={key}
            onClick={() => setSelectedType(key)}
            className={`rounded-lg border-2 px-6 py-3 transition-all ${
              selectedType === key
                ? "border-accent bg-accent/10"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="mb-1 text-3xl">{type.icon}</div>
            <div className="text-sm font-bold text-foreground">
              {type.title}
            </div>
          </button>
        ))}
      </div>

      {/* Contenu du type sélectionné */}
      <div className="rounded-lg border border-border bg-muted/10 p-6">
        <RoughNotationGroup show={true}>
          <h4
            className="mb-3 text-xl font-bold"
            style={{ color: currentType.color }}
          >
            <RoughNotation
              type="highlight"
              show={true}
              color={currentType.color}
              animationDelay={200}
            >
              {currentType.title}
            </RoughNotation>
          </h4>
        </RoughNotationGroup>

        <p className="mb-4 text-foreground">{currentType.description}</p>

        <div className="mb-4">
          <strong className="text-sm text-foreground">
            Caractéristiques :
          </strong>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {currentType.characteristics.map((char, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-foreground"
              >
                <span className="mr-2" style={{ color: currentType.color }}>
                  •
                </span>
                {char}
              </div>
            ))}
          </div>
        </div>

        <div>
          <strong className="text-sm text-foreground">Exemples :</strong>
          <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
            {currentType.examples.map((example, idx) => (
              <div
                key={idx}
                className="rounded border border-border bg-background p-3"
              >
                <div className="font-semibold text-foreground">
                  {example.name}
                </div>
                <div className="text-sm text-foreground/70">
                  {example.reason}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-background p-3 text-center text-sm text-foreground">
        <strong>Conseil :</strong> Privilégier la variabilité infinie pour
        maintenir l'engagement à long terme
      </div>
    </div>
  );
};
