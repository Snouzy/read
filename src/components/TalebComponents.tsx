import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

// 1. Spectre Fragile-Robuste-Antifragile
export const FragilitySpectrum = () => {
  const [selectedState, setSelectedState] = useState(1);

  const states = [
    {
      name: "Fragile",
      icon: "🕯️",
      description: "S'affaiblit sous la perturbation",
      example: "Bougie face au vent",
      color: "#e17055",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-300 dark:border-red-800",
      characteristics: ["Complexe", "Rigide", "Dépendant", "Prévisible"],
    },
    {
      name: "Robuste",
      icon: "🛡️",
      description: "Résiste aux perturbations",
      example: "Mur solide face au vent",
      color: "#fdcb6e",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      borderColor: "border-yellow-300 dark:border-yellow-800",
      characteristics: ["Stable", "Résistant", "Prévisible", "Statique"],
    },
    {
      name: "Antifragile",
      icon: "🔥",
      description: "Se renforce grâce aux perturbations",
      example: "Feu de forêt nourri par le vent",
      color: "#00b894",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-300 dark:border-green-800",
      characteristics: ["Simple", "Agile", "Autonome", "Évolutif"],
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ⚖️ Le Spectre Fragile-Robuste-Antifragile
      </h3>
      
      <div className="mb-6 flex justify-center space-x-4">
        {states.map((state, index) => (
          <button
            key={index}
            onClick={() => setSelectedState(index)}
            className={`rounded-lg border-2 p-3 transition-all ${
              selectedState === index
                ? `${state.bgColor} ${state.borderColor} shadow-lg`
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-2xl">{state.icon}</div>
            <div 
              className="mt-1 text-sm font-bold"
              style={{ color: selectedState === index ? state.color : 'inherit' }}
            >
              {state.name}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className={`rounded-lg border-2 p-6 ${states[selectedState].bgColor} ${states[selectedState].borderColor}`}>
          <div className="mb-4 text-center">
            <div className="text-4xl mb-2">{states[selectedState].icon}</div>
            <h4 className="text-2xl font-bold" style={{ color: states[selectedState].color }}>
              <RoughNotation
                type="underline"
                show={true}
                color={states[selectedState].color}
                animationDelay={300}
              >
                {states[selectedState].name}
              </RoughNotation>
            </h4>
            <p className="mt-2 text-foreground/80">{states[selectedState].description}</p>
          </div>

          <div className="mb-4 text-center">
            <div className="rounded-lg border border-border bg-background p-3">
              <strong className="text-sm text-foreground">Exemple :</strong>
              <div className="mt-1 text-foreground/70">{states[selectedState].example}</div>
            </div>
          </div>

          <div className="text-center">
            <strong className="text-sm text-foreground">Caractéristiques :</strong>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {states[selectedState].characteristics.map((char, idx) => (
                <span
                  key={idx}
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ 
                    backgroundColor: states[selectedState].color + '20',
                    color: states[selectedState].color
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};

// 2. Métaphores illustratives
export const AntifragileMetaphors = () => {
  const metaphors = [
    {
      title: "La Bougie et le Feu",
      fragile: {
        name: "Bougie",
        icon: "🕯️",
        reaction: "S'éteint",
        description: "Exposée au vent, elle disparaît",
      },
      antifragile: {
        name: "Feu de forêt",
        icon: "🔥",
        reaction: "Se renforce",
        description: "Nourri par le vent, il grandit",
      },
      perturbation: "💨 Vent",
      color: "#e17055",
    },
    {
      title: "L'Analogie du Colis",
      fragile: {
        name: "Colis fragile",
        icon: "📦",
        reaction: "Se casse",
        description: "Marque 'Fragile' - Précautions nécessaires",
      },
      antifragile: {
        name: "Colis antifragile",
        icon: "📦",
        reaction: "Se renforce",
        description: "Plus vous êtes dur, plus je me renforce",
      },
      perturbation: "🚚 Transport",
      color: "#00b894",
    },
    {
      title: "L'Hydre Mythologique",
      fragile: {
        name: "Créature normale",
        icon: "🦎",
        reaction: "Meurt",
        description: "Blessée, elle s'affaiblit",
      },
      antifragile: {
        name: "Hydre",
        icon: "🐉",
        reaction: "Repousse",
        description: "Chaque tête coupée devient deux têtes",
      },
      perturbation: "⚔️ Attaque",
      color: "#6c5ce7",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎭 Métaphores de l'Antifragilité
      </h3>
      
      <div className="space-y-6">
        <RoughNotationGroup show={true}>
          {metaphors.map((metaphor, index) => (
            <div key={index} className="rounded-lg border border-border bg-muted/10 p-4">
              <h4 className="mb-4 text-center text-lg font-bold text-foreground">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color={metaphor.color}
                  animationDelay={300 + index * 200}
                >
                  {metaphor.title}
                </RoughNotation>
              </h4>
              
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="mb-2 text-3xl">{metaphor.fragile.icon}</div>
                  <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                    {metaphor.fragile.name}
                  </div>
                  <div className="text-xs text-foreground/70 mt-1">
                    {metaphor.fragile.description}
                  </div>
                  <div className="mt-2 text-sm font-bold text-red-600 dark:text-red-400">
                    → {metaphor.fragile.reaction}
                  </div>
                </div>
                
                <div className="mx-4 flex flex-col items-center">
                  <div className="text-2xl">{metaphor.perturbation}</div>
                  <div className="text-sm font-semibold text-foreground/70">
                    Perturbation
                  </div>
                </div>
                
                <div className="flex-1 text-center">
                  <div className="mb-2 text-3xl">{metaphor.antifragile.icon}</div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {metaphor.antifragile.name}
                  </div>
                  <div className="text-xs text-foreground/70 mt-1">
                    {metaphor.antifragile.description}
                  </div>
                  <div className="mt-2 text-sm font-bold text-green-600 dark:text-green-400">
                    → {metaphor.antifragile.reaction}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 3. Les trois piliers de l'antifragilité
export const AntifragileFoundations = () => {
  const foundations = [
    {
      title: "Stress Volontaire",
      icon: "💪",
      description: "S'exposer à des phases de stress contrôlé",
      examples: ["Exposition au froid", "Exercice intense", "Jeûne intermittent"],
      principle: "Développer sa capacité à gérer l'imprévu",
      color: "#e17055",
    },
    {
      title: "Simplification",
      icon: "🎯",
      description: "Éliminer le bruit pour se concentrer sur les signaux",
      examples: ["Réduire la complexité", "Éliminer l'inutile", "Clarifier les priorités"],
      principle: "Plus simple = plus flexible = plus antifragile",
      color: "#00b894",
    },
    {
      title: "Infinité d'Options",
      icon: "🎲",
      description: "Anticiper les obstacles et préparer des solutions",
      examples: ["Scénarios multiples", "Plans de contingence", "Ressources alternatives"],
      principle: "Plus d'options = moins de fragilité",
      color: "#6c5ce7",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🏗️ Les Trois Piliers de l'Antifragilité
      </h3>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <RoughNotationGroup show={true}>
          {foundations.map((foundation, index) => (
            <div key={index} className="rounded-lg border border-border bg-background p-4">
              <div className="mb-4 text-center">
                <div className="mb-2 text-4xl">{foundation.icon}</div>
                <h4 className="text-lg font-bold" style={{ color: foundation.color }}>
                  <RoughNotation
                    type="box"
                    show={true}
                    color={foundation.color}
                    animationDelay={300 + index * 200}
                  >
                    {foundation.title}
                  </RoughNotation>
                </h4>
                <p className="mt-2 text-sm text-foreground/70">
                  {foundation.description}
                </p>
              </div>

              <div className="mb-4">
                <strong className="text-sm text-foreground">Exemples :</strong>
                <ul className="mt-1 list-disc pl-4 text-xs text-foreground/70">
                  {foundation.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded border border-border bg-muted/20 p-2 text-center text-xs text-foreground italic">
                {foundation.principle}
              </div>
            </div>
          ))}
        </RoughNotationGroup>
      </div>
    </div>
  );
};

// 4. Stratégie des Haltères
export const BarbellStrategy = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);

  const domains = [
    {
      name: "Finances",
      conservative: {
        allocation: "90%",
        description: "Actifs très sûrs",
        examples: ["Livrets", "Obligations d'État", "Immobilier"],
      },
      aggressive: {
        allocation: "10%",
        description: "Actifs très risqués",
        examples: ["Startups", "Crypto", "Options"],
      },
      color: "#00b894",
    },
    {
      name: "Santé",
      conservative: {
        allocation: "Base",
        description: "Fondamentaux solides",
        examples: ["Nutrition équilibrée", "Sommeil régulier", "Activité modérée"],
      },
      aggressive: {
        allocation: "Stress",
        description: "Défis intenses",
        examples: ["Bains glacés", "HIIT", "Jeûne"],
      },
      color: "#e17055",
    },
    {
      name: "Business",
      conservative: {
        allocation: "Revenus",
        description: "Sources stables",
        examples: ["Contenu régulier", "Formations", "Clients récurrents"],
      },
      aggressive: {
        allocation: "Innovation",
        description: "Expérimentations",
        examples: ["Nouveaux produits", "Partenariats", "Marchés émergents"],
      },
      color: "#6c5ce7",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🏋️ Stratégie des Haltères
      </h3>
      
      <div className="mb-6 flex justify-center space-x-4">
        {domains.map((domain, index) => (
          <button
            key={index}
            onClick={() => setSelectedDomain(index)}
            className={`rounded-lg border-2 p-3 transition-all ${
              selectedDomain === index
                ? "border-accent bg-accent/10 shadow-lg"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-sm font-bold text-foreground">
              {domain.name}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-6 text-center">
            <h4 className="text-xl font-bold" style={{ color: domains[selectedDomain].color }}>
              <RoughNotation
                type="highlight"
                show={true}
                color={domains[selectedDomain].color}
                animationDelay={300}
              >
                {domains[selectedDomain].name}
              </RoughNotation>
            </h4>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 rounded-lg border-2 border-green-300 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-950/30">
              <div className="mb-2 text-2xl">🛡️</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                Conservateur
              </div>
              <div className="text-sm text-foreground/70 mt-1">
                {domains[selectedDomain].conservative.allocation}
              </div>
              <div className="text-sm font-semibold text-foreground mt-2">
                {domains[selectedDomain].conservative.description}
              </div>
              <div className="mt-3">
                <ul className="list-disc pl-4 text-xs text-foreground/70">
                  {domains[selectedDomain].conservative.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mx-4 flex flex-col items-center">
              <div className="text-4xl">⚖️</div>
              <div className="text-sm font-semibold text-foreground">
                Équilibre
              </div>
            </div>

            <div className="flex-1 rounded-lg border-2 border-red-300 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-950/30">
              <div className="mb-2 text-2xl">🚀</div>
              <div className="text-lg font-bold text-red-600 dark:text-red-400">
                Agressif
              </div>
              <div className="text-sm text-foreground/70 mt-1">
                {domains[selectedDomain].aggressive.allocation}
              </div>
              <div className="text-sm font-semibold text-foreground mt-2">
                {domains[selectedDomain].aggressive.description}
              </div>
              <div className="mt-3">
                <ul className="list-disc pl-4 text-xs text-foreground/70">
                  {domains[selectedDomain].aggressive.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-4 rounded-lg border border-border bg-muted/20 p-3 text-center text-sm text-foreground">
        <strong>Principe :</strong> Éviter le juste milieu - Être à la fois{" "}
        <RoughNotation type="underline" show={true} color="#00b894">
          extrêmement conservateur
        </RoughNotation>{" "}
        et{" "}
        <RoughNotation type="underline" show={true} color="#e17055">
          extrêmement agressif
        </RoughNotation>
      </div>
    </div>
  );
};

// 5. Identificateur de Fragilité/Antifragilité
export const FragilityDetector = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      name: "Systèmes",
      items: [
        {
          name: "Administration française",
          type: "fragile",
          reason: "Complexe, rigide, bureaucratique",
          icon: "🏛️",
        },
        {
          name: "Muscle humain",
          type: "antifragile",
          reason: "Se renforce avec l'exercice",
          icon: "💪",
        },
        {
          name: "Pont en béton",
          type: "robuste",
          reason: "Résiste mais ne s'améliore pas",
          icon: "🌉",
        },
      ],
    },
    {
      name: "Entreprises",
      items: [
        {
          name: "Startup lean",
          type: "antifragile",
          reason: "Pivot rapide, apprentissage",
          icon: "🚀",
        },
        {
          name: "Grande corporation",
          type: "fragile",
          reason: "Lourde, résistante au changement",
          icon: "🏢",
        },
        {
          name: "Coopérative locale",
          type: "robuste",
          reason: "Stable mais peu d'innovation",
          icon: "🏪",
        },
      ],
    },
    {
      name: "Finances",
      items: [
        {
          name: "Flux tendu",
          type: "fragile",
          reason: "Aucune marge d'erreur",
          icon: "💸",
        },
        {
          name: "Portefeuille haltère",
          type: "antifragile",
          reason: "Bénéficie de la volatilité",
          icon: "📈",
        },
        {
          name: "Compte épargne",
          type: "robuste",
          reason: "Stable mais inflation",
          icon: "🏦",
        },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "fragile":
        return "#e17055";
      case "robuste":
        return "#fdcb6e";
      case "antifragile":
        return "#00b894";
      default:
        return "#74b9ff";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "fragile":
        return "🕯️";
      case "robuste":
        return "🛡️";
      case "antifragile":
        return "🔥";
      default:
        return "❓";
    }
  };

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔍 Détecteur de Fragilité/Antifragilité
      </h3>
      
      <div className="mb-6 flex justify-center space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`rounded-lg border-2 p-3 transition-all ${
              selectedCategory === index
                ? "border-accent bg-accent/10 shadow-lg"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-sm font-bold text-foreground">
              {category.name}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="space-y-4">
          {categories[selectedCategory].items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-border bg-muted/10 p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-foreground">{item.name}</div>
                  <div className="text-sm text-foreground/70">{item.reason}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-xl">{getTypeIcon(item.type)}</div>
                <div
                  className="rounded-full px-3 py-1 text-sm font-bold text-white"
                  style={{ backgroundColor: getTypeColor(item.type) }}
                >
                  <RoughNotation
                    type="highlight"
                    show={true}
                    color={getTypeColor(item.type)}
                    animationDelay={300 + index * 200}
                  >
                    {item.type}
                  </RoughNotation>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RoughNotationGroup>
    </div>
  );
};

// 6. Progression vers l'Antifragilité
export const AntifragileProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Identifier",
      description: "Repérer les éléments fragiles",
      action: "Lister ce qui vous rend vulnérable",
      icon: "🔍",
      color: "#e17055",
    },
    {
      title: "Simplifier",
      description: "Éliminer la complexité inutile",
      action: "Supprimer le bruit, garder les signaux",
      icon: "🎯",
      color: "#fdcb6e",
    },
    {
      title: "Diversifier",
      description: "Créer des options multiples",
      action: "Préparer des plans de contingence",
      icon: "🎲",
      color: "#74b9ff",
    },
    {
      title: "Stresser",
      description: "S'exposer de manière contrôlée",
      action: "Pratiquer le stress volontaire",
      icon: "💪",
      color: "#6c5ce7",
    },
    {
      title: "Adapter",
      description: "Apprendre de chaque perturbation",
      action: "Utiliser les chocs pour grandir",
      icon: "🔥",
      color: "#00b894",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        📈 Progression vers l'Antifragilité
      </h3>
      
      <div className="mb-6 flex justify-center space-x-2">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`rounded-lg border-2 p-2 transition-all ${
              currentStep === index
                ? "border-accent bg-accent/10 shadow-lg"
                : index < currentStep
                ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950/30"
                : "border-border bg-background hover:bg-muted/20"
            }`}
          >
            <div className="text-xl">{step.icon}</div>
            <div className="text-xs font-semibold text-foreground">
              {index + 1}
            </div>
          </button>
        ))}
      </div>

      <RoughNotationGroup show={true}>
        <div className="rounded-lg border border-border bg-background p-6">
          <div className="mb-4 text-center">
            <div className="mb-2 text-4xl">{steps[currentStep].icon}</div>
            <h4 className="text-2xl font-bold" style={{ color: steps[currentStep].color }}>
              <RoughNotation
                type="circle"
                show={true}
                color={steps[currentStep].color}
                animationDelay={300}
              >
                {steps[currentStep].title}
              </RoughNotation>
            </h4>
            <p className="mt-2 text-foreground/70">{steps[currentStep].description}</p>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-4 text-center">
            <strong className="text-sm text-foreground">Action à entreprendre :</strong>
            <div className="mt-1 text-foreground/80">{steps[currentStep].action}</div>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground disabled:opacity-50"
            >
              ← Précédent
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="rounded-lg border border-border bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-50"
            >
              Suivant →
            </button>
          </div>
        </div>
      </RoughNotationGroup>

      <div className="mt-4 text-center text-sm text-foreground/60">
        <strong>Principe :</strong> Chaque étape vous rend plus antifragile face aux perturbations
      </div>
    </div>
  );
};