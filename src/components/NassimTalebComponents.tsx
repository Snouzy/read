import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// 1. Composant pour illustrer le concept central avec les métaphores
export const AntifragileCore = () => {
  const [activeMetaphor, setActiveMetaphor] = useState(0);

  const metaphors = [
    {
      title: "La Bougie et le Feu de Forêt",
      perturbation: "💨 Vent",
      fragile: {
        name: "Bougie",
        icon: "🕯️",
        result: "S'éteint",
        description: "Exposée au vent, elle disparaît instantanément",
      },
      antifragile: {
        name: "Feu de forêt",
        icon: "🔥",
        result: "Se renforce",
        description: "Nourri par le vent, il grandit et devient plus puissant",
      },
    },
    {
      title: "L'Analogie du Colis",
      perturbation: "📦 Transport",
      fragile: {
        name: "Colis fragile",
        icon: "⚠️",
        result: "Se casse",
        description: "Marque 'Fragile' - Nécessite des précautions",
      },
      antifragile: {
        name: "Colis antifragile",
        icon: "💪",
        result: "Se renforce",
        description: "'Ne me ménagez pas, plus vous êtes dur, plus je me renforce'",
      },
    },
  ];

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/20 p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        🎯 L'Essence de l'Antifragilité
      </h3>
      
      <div className="mb-6 flex justify-center space-x-4">
        {metaphors.map((metaphor, index) => (
          <button
            key={index}
            onClick={() => setActiveMetaphor(index)}
            className={`rounded-lg border-2 p-3 transition-all duration-300 ${
              activeMetaphor === index
                ? "border-accent bg-accent/10 shadow-lg transform scale-105"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-sm font-bold text-foreground text-center">
              {metaphor.title}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-6 text-center">
            <h4 className="text-xl font-bold text-foreground mb-2">
              <RoughNotation
                type="highlight"
                show={true}
                color="#6c5ce7"
                animationDelay={300}
              >
                {metaphors[activeMetaphor].title}
              </RoughNotation>
            </h4>
            <div className="text-lg text-foreground/70">
              Face à la même perturbation : {metaphors[activeMetaphor].perturbation}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-950/30">
              <div className="mb-4 text-4xl">{metaphors[activeMetaphor].fragile.icon}</div>
              <h5 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">
                {metaphors[activeMetaphor].fragile.name}
              </h5>
              <div className="text-sm text-red-500 dark:text-red-300 font-semibold mb-3">
                → {metaphors[activeMetaphor].fragile.result}
              </div>
              <p className="text-xs text-foreground/70">
                {metaphors[activeMetaphor].fragile.description}
              </p>
            </div>

            <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950/30">
              <div className="mb-4 text-4xl">{metaphors[activeMetaphor].antifragile.icon}</div>
              <h5 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                {metaphors[activeMetaphor].antifragile.name}
              </h5>
              <div className="text-sm text-green-500 dark:text-green-300 font-semibold mb-3">
                → {metaphors[activeMetaphor].antifragile.result}
              </div>
              <p className="text-xs text-foreground/70">
                {metaphors[activeMetaphor].antifragile.description}
              </p>
            </div>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4 text-center">
        <p className="text-sm text-foreground italic">
          "L'antifragilité dépasse la résistance et la solidité. Ce qui est résistant supporte les chocs et reste pareil, ce qui est antifragile s'améliore."
        </p>
        <cite className="text-xs text-foreground/60 mt-2 block">— Nassim Nicholas Taleb</cite>
      </div>
    </div>
  );
};

// 2. Composant pour les caractéristiques des systèmes fragiles
export const FragileSystemsCharacteristics = () => {
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(0);

  const characteristics = [
    {
      title: "Crainte de l'Imprévu",
      icon: "😰",
      description: "Peur des perturbations non anticipées",
      examples: [
        "Planification rigide sans alternatives",
        "Évitement systématique des risques",
        "Paralysie face à l'incertitude",
      ],
      color: "#e17055",
    },
    {
      title: "Complexité Excessive",
      icon: "🏗️",
      description: "Plus c'est complexe, plus c'est fragile",
      examples: [
        "Grandes sociétés bureaucratiques",
        "Systèmes avec trop d'interdépendances",
        "Processus multi-étapes compliqués",
      ],
      color: "#fdcb6e",
    },
    {
      title: "Manque d'Agilité",
      icon: "🐌",
      description: "Rigidité face aux changements",
      examples: [
        "Procédures figées",
        "Résistance au changement",
        "Temps de réaction lents",
      ],
      color: "#74b9ff",
    },
    {
      title: "Dépendance Externe",
      icon: "🔗",
      description: "Solutions à l'extérieur du système",
      examples: [
        "Verre qui a besoin d'une main pour ne pas se casser",
        "Système financier tendu (flux tendu)",
        "Mono-dépendance (client unique, fournisseur unique)",
      ],
      color: "#6c5ce7",
    },
  ];

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-background p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        ⚠️ Anatomie des Systèmes Fragiles
      </h3>

      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {characteristics.map((char, index) => (
          <button
            key={index}
            onClick={() => setSelectedCharacteristic(index)}
            className={`rounded-lg border-2 p-4 transition-all duration-300 ${
              selectedCharacteristic === index
                ? "border-accent bg-accent/10 shadow-lg transform scale-105"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-2xl mb-2">{char.icon}</div>
            <div className="text-sm font-bold text-foreground text-center">
              {char.title}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-muted/10 p-6">
          <div className="mb-4 text-center">
            <div className="text-4xl mb-3">{characteristics[selectedCharacteristic].icon}</div>
            <h4 className="text-xl font-bold mb-2" style={{ color: characteristics[selectedCharacteristic].color }}>
              <RoughNotation
                type="box"
                show={true}
                color={characteristics[selectedCharacteristic].color}
                animationDelay={300}
              >
                {characteristics[selectedCharacteristic].title}
              </RoughNotation>
            </h4>
            <p className="text-foreground/70">
              {characteristics[selectedCharacteristic].description}
            </p>
          </div>

          <div className="mt-4">
            <h5 className="font-semibold text-foreground mb-3">Exemples concrets :</h5>
            <ul className="space-y-2">
              {characteristics[selectedCharacteristic].examples.map((example, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-foreground/80">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-950/30">
        <p className="text-sm text-red-700 dark:text-red-300 font-semibold">
          💡 Principe : Plus un système est tendu, rigide et complexe, plus il est fragile
        </p>
      </div>
    </div>
  );
};

// 3. Composant pour l'Hydre et les systèmes antifragiles
export const AntifragileHydra = () => {
  const [heads, setHeads] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const cutHead = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setHeads(prev => prev + 1);
      setIsAnimating(false);
    }, 500);
  };

  const resetHydra = () => {
    setHeads(3);
    setIsAnimating(false);
  };

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/20 p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        🐉 L'Hydre : Métaphore de l'Antifragilité
      </h3>

      <div className="mb-6 text-center">
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-4">
            <div className="text-6xl mb-4">🐉</div>
            <div className="flex justify-center space-x-2 mb-4">
              {Array.from({ length: heads }).map((_, index) => (
                <div
                  key={index}
                  className={`text-2xl transition-all duration-300 ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                >
                  🐍
                </div>
              ))}
            </div>
            <div className="text-lg font-semibold text-foreground">
              L'Hydre a actuellement {heads} têtes
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={cutHead}
              disabled={isAnimating}
              className="rounded-lg border-2 border-red-300 bg-red-50 px-6 py-3 font-semibold text-red-600 transition-all hover:bg-red-100 disabled:opacity-50 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
            >
              {isAnimating ? "⚔️ Attaque en cours..." : "⚔️ Couper une tête"}
            </button>
            
            <button
              onClick={resetHydra}
              className="ml-4 rounded-lg border-2 border-blue-300 bg-blue-50 px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400"
            >
              🔄 Recommencer
            </button>
          </div>
        </div>
      </div>

      <RoughNotationGroup show={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-muted/10 p-6">
            <h4 className="text-lg font-bold text-foreground mb-4">
              <RoughNotation
                type="highlight"
                show={true}
                color="#6c5ce7"
                animationDelay={300}
              >
                🏛️ Mythologie Grecque
              </RoughNotation>
            </h4>
            <p className="text-sm text-foreground/80 mb-4">
              "Dans la mythologie grecque, l'hydre était une créature fabuleuse en forme de serpent 
              qui vivait dans le lac de Lerne. Elle possédait de nombreuses têtes et chaque fois 
              qu'on en tranchait une, deux autres repoussaient."
            </p>
            <div className="text-center font-bold text-green-600 dark:text-green-400">
              Elle aimait donc qu'on lui fasse du mal !
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/10 p-6">
            <h4 className="text-lg font-bold text-foreground mb-4">
              <RoughNotation
                type="highlight"
                show={true}
                color="#00b894"
                animationDelay={500}
              >
                💡 Principe Antifragile
              </RoughNotation>
            </h4>
            <p className="text-sm text-foreground/80 mb-4">
              La réponse à la perturbation extérieure est déjà construite 
              à l'intérieur du système. Le système se nourrit de l'imprévu.
            </p>
            <div className="text-center">
              <div className="text-sm font-bold text-foreground mb-2">Exemple du muscle :</div>
              <div className="text-xs text-foreground/70">
                Dès qu'il subit une perturbation, il se renforce lui-même 
                et apprend à mieux encaisser la prochaine fois.
              </div>
            </div>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};

// 4. Composant pour les trois piliers pratiques
export const ThreePillarsAntifragile = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Stress Volontaire",
      icon: "💪",
      description: "S'exposer à des phases de stress courtes mais intenses",
      principle: "Développer notre capacité à gérer l'imprévu",
      examples: [
        "Exposition au froid (bains glacés, douches froides)",
        "Jeûne intermittent",
        "Entraînement physique haute intensité",
        "Sortie contrôlée de zone de confort",
      ],
      analogy: "Comme un muscle qui se renforce avec l'effort",
      color: "#e17055",
    },
    {
      title: "Simplification",
      icon: "🎯",
      description: "Éliminer le 'bruit' pour ne garder que les 'signaux'",
      principle: "Plus simple = plus flexible = plus antifragile",
      examples: [
        "Distinguer signaux (important) vs bruit (inutile)",
        "Supprimer la complexité inutile",
        "Tiny habits : actions simples et régulières",
        "Clarifier les priorités essentielles",
      ],
      analogy: "Comme un système épuré qui fonctionne sans friction",
      color: "#00b894",
    },
    {
      title: "Infinité d'Options",
      icon: "🎲",
      description: "Anticiper les obstacles et préparer des solutions multiples",
      principle: "Plus d'options = moins de fragilité",
      examples: [
        "Méthode du 'pre-mortem' : qu'est-ce qui peut mal tourner ?",
        "Scénarios multiples avec solutions",
        "Plans de contingence",
        "Ressources alternatives",
      ],
      analogy: "1 option = fragile, quelques options = résilient, infinité = antifragile",
      color: "#6c5ce7",
    },
  ];

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-background p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        🏗️ Les 3 Piliers Pratiques de l'Antifragilité
      </h3>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar, index) => (
          <button
            key={index}
            onClick={() => setActivePillar(index)}
            className={`rounded-lg border-2 p-4 transition-all duration-300 ${
              activePillar === index
                ? "border-accent bg-accent/10 shadow-lg transform scale-105"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-3xl mb-2">{pillar.icon}</div>
            <div className="text-sm font-bold text-foreground text-center">
              {pillar.title}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-muted/10 p-6">
          <div className="mb-6 text-center">
            <div className="text-4xl mb-3">{pillars[activePillar].icon}</div>
            <h4 className="text-xl font-bold mb-2" style={{ color: pillars[activePillar].color }}>
              <RoughNotation
                type="underline"
                show={true}
                color={pillars[activePillar].color}
                animationDelay={300}
              >
                {pillars[activePillar].title}
              </RoughNotation>
            </h4>
            <p className="text-foreground/70 mb-4">
              {pillars[activePillar].description}
            </p>
            <div className="rounded-lg border border-border bg-background p-3">
              <strong className="text-sm text-foreground">Principe :</strong>
              <div className="text-sm text-foreground/80 mt-1">
                {pillars[activePillar].principle}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-foreground mb-3">Applications concrètes :</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {pillars[activePillar].examples.map((example, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span style={{ color: pillars[activePillar].color }} className="mt-1">•</span>
                  <span className="text-foreground/80 text-sm">{example}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
            <div className="text-sm text-foreground/70 italic">
              {pillars[activePillar].analogy}
            </div>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};

// 5. Composant pour la stratégie des haltères avec exemples concrets
export const BarbellStrategyDetailed = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);

  const domains = [
    {
      name: "Santé",
      icon: "🏃‍♀️",
      conservative: {
        title: "Base Conservatrice",
        percentage: "Fondamentaux",
        items: [
          "Nutrition équilibrée et soignée",
          "Sommeil régulier (7-8h)",
          "Activité physique constante",
          "Hydratation quotidienne",
        ],
        color: "#00b894",
      },
      aggressive: {
        title: "Stress Agressif",
        percentage: "Défis",
        items: [
          "Jeûnes périodiques",
          "Bains glacés",
          "Entraînements haute intensité",
          "Challenges physiques",
        ],
        color: "#e17055",
      },
    },
    {
      name: "Business",
      icon: "💼",
      conservative: {
        title: "Revenus Stables",
        percentage: "Base",
        items: [
          "Contenu régulier et constant",
          "Formations éprouvées",
          "Clients récurrents",
          "Processus optimisés",
        ],
        color: "#00b894",
      },
      aggressive: {
        title: "Innovations Risquées",
        percentage: "Expérimentations",
        items: [
          "Nouveaux partenariats",
          "Marchés émergents",
          "Technologies disruptives",
          "Offres révolutionnaires",
        ],
        color: "#e17055",
      },
    },
    {
      name: "Finances",
      icon: "💰",
      conservative: {
        title: "Sécurité",
        percentage: "90%",
        items: [
          "Livrets d'épargne",
          "Obligations d'État",
          "Immobilier locatif",
          "Fonds euros",
        ],
        color: "#00b894",
      },
      aggressive: {
        title: "Potentiel",
        percentage: "10%",
        items: [
          "Investissements startups",
          "Cryptomonnaies",
          "Actions à fort potentiel",
          "Options et dérivés",
        ],
        color: "#e17055",
      },
    },
  ];

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/20 p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        🏋️ Stratégie des Haltères : Éviter le Juste Milieu
      </h3>

      <div className="mb-6 text-center">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-foreground/80 mb-2">
            "Les haltères illustrent l'idée d'une combinaison d'extrêmes tenus à distance. 
            Une double attitude : être à la fois extrêmement conservateur ET extrêmement agressif."
          </p>
          <div className="text-4xl">🏋️</div>
        </div>
      </div>

      <div className="mb-6 flex justify-center space-x-4">
        {domains.map((domain, index) => (
          <button
            key={index}
            onClick={() => setSelectedDomain(index)}
            className={`rounded-lg border-2 p-4 transition-all duration-300 ${
              selectedDomain === index
                ? "border-accent bg-accent/10 shadow-lg transform scale-105"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-2xl mb-2">{domain.icon}</div>
            <div className="text-sm font-bold text-foreground text-center">
              {domain.name}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-6 text-center">
            <h4 className="text-xl font-bold text-foreground mb-2">
              <RoughNotation
                type="highlight"
                show={true}
                color="#6c5ce7"
                animationDelay={300}
              >
                {domains[selectedDomain].icon} {domains[selectedDomain].name}
              </RoughNotation>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/30">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🛡️</div>
                <h5 className="text-lg font-bold text-green-600 dark:text-green-400">
                  {domains[selectedDomain].conservative.title}
                </h5>
                <div className="text-sm text-green-500 dark:text-green-300 font-semibold">
                  {domains[selectedDomain].conservative.percentage}
                </div>
              </div>
              <ul className="space-y-2">
                {domains[selectedDomain].conservative.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950/30">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🚀</div>
                <h5 className="text-lg font-bold text-red-600 dark:text-red-400">
                  {domains[selectedDomain].aggressive.title}
                </h5>
                <div className="text-sm text-red-500 dark:text-red-300 font-semibold">
                  {domains[selectedDomain].aggressive.percentage}
                </div>
              </div>
              <ul className="space-y-2">
                {domains[selectedDomain].aggressive.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4 text-center">
        <div className="text-sm text-foreground font-semibold mb-2">
          🎯 Principe Clé : Éviter le Juste Milieu
        </div>
        <div className="text-xs text-foreground/70">
          Pas de risque "pondéré" qui n'aurait aucun potentiel. 
          Comme dans une haltère, le poids est uniquement dans les extrêmes, pas au milieu.
        </div>
      </div>
    </div>
  );
};

// 6. Composant récapitulatif avec les 5 concepts
export const AntifragileRecap = () => {
  const [currentConcept, setCurrentConcept] = useState(0);

  const concepts = [
    {
      number: "01",
      title: "Le Spectre Fragile-Robuste-Antifragile",
      icon: "⚖️",
      summary: "Comprendre les trois réactions possibles face aux perturbations",
      keyPoint: "Fragile = s'affaiblit, Robuste = encaisse, Antifragile = se renforce",
      color: "#e17055",
    },
    {
      number: "02",
      title: "Ce qui Fragilise un Système",
      icon: "⚠️",
      summary: "Identifier les caractéristiques des systèmes fragiles",
      keyPoint: "Complexité, rigidité, dépendance externe = fragilité",
      color: "#fdcb6e",
    },
    {
      number: "03",
      title: "Les Caractéristiques de l'Antifragilité",
      icon: "🐉",
      summary: "L'hydre comme modèle d'antifragilité",
      keyPoint: "La réponse est construite à l'intérieur du système",
      color: "#6c5ce7",
    },
    {
      number: "04",
      title: "Les 3 Piliers Pratiques",
      icon: "🏗️",
      summary: "Stress volontaire, simplification, infinité d'options",
      keyPoint: "Applications concrètes pour développer l'antifragilité",
      color: "#00b894",
    },
    {
      number: "05",
      title: "La Stratégie des Haltères",
      icon: "🏋️",
      summary: "Combiner extrême conservation et extrême agressivité",
      keyPoint: "Éviter le juste milieu, préférer les extrêmes",
      color: "#74b9ff",
    },
  ];

  return (
    <div className="my-8 rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/20 p-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
        🎯 Les 5 Concepts Clés de l'Antifragilité
      </h3>

      <div className="mb-6 flex justify-center space-x-2">
        {concepts.map((concept, index) => (
          <button
            key={index}
            onClick={() => setCurrentConcept(index)}
            className={`rounded-lg border-2 p-3 transition-all duration-300 ${
              currentConcept === index
                ? "border-accent bg-accent/10 shadow-lg transform scale-105"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-lg mb-1">{concept.icon}</div>
            <div className="text-xs font-bold text-foreground">
              {concept.number}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-6 text-center">
            <div className="text-4xl mb-3">{concepts[currentConcept].icon}</div>
            <div className="text-sm font-bold text-foreground/60 mb-2">
              CONCEPT {concepts[currentConcept].number}
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: concepts[currentConcept].color }}>
              <RoughNotation
                type="highlight"
                show={true}
                color={concepts[currentConcept].color}
                animationDelay={300}
              >
                {concepts[currentConcept].title}
              </RoughNotation>
            </h4>
            <p className="text-foreground/70 mb-4">
              {concepts[currentConcept].summary}
            </p>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
            <div className="text-sm font-semibold text-foreground mb-2">💡 Point clé :</div>
            <div className="text-sm text-foreground/80">
              {concepts[currentConcept].keyPoint}
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setCurrentConcept(Math.max(0, currentConcept - 1))}
              disabled={currentConcept === 0}
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground disabled:opacity-50"
            >
              ← Précédent
            </button>
            <button
              onClick={() => setCurrentConcept(Math.min(concepts.length - 1, currentConcept + 1))}
              disabled={currentConcept === concepts.length - 1}
              className="rounded-lg border border-border bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-50"
            >
              Suivant →
            </button>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-6 text-center">
        <div className="text-sm text-foreground/60">
          <strong>Principe fondamental :</strong> Transformer les chocs en opportunités de croissance
        </div>
      </div>
    </div>
  );
};