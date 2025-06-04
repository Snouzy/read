import { useState } from "react";
import type { ChangeEvent } from "react";
import { RoughNotation } from "react-rough-notation";

// 1. Timeline évolutionnaire des comportements humains
export const EvolutionTimeline = () => {
  const stages = [
    {
      period: "10M années",
      title: "Premiers primates",
      behavior: "Hiérarchie sociale basique",
      icon: "🐒",
      bgClass: "bg-amber-100 dark:bg-amber-950/30",
      borderClass: "border-amber-300 dark:border-amber-800",
    },
    {
      period: "300K années",
      title: "Homo sapiens",
      behavior: "Sélection sexuelle complexe",
      icon: "🧠",
      bgClass: "bg-blue-100 dark:bg-blue-950/30",
      borderClass: "border-blue-300 dark:border-blue-800",
    },
    {
      period: "10K années",
      title: "Agriculture",
      behavior: "Monogamie et propriété",
      icon: "🌾",
      bgClass: "bg-green-100 dark:bg-green-950/30",
      borderClass: "border-green-300 dark:border-green-800",
    },
    {
      period: "200 ans",
      title: "Société moderne",
      behavior: "Conflit programmation vs culture",
      icon: "🏙️",
      bgClass: "bg-purple-100 dark:bg-purple-950/30",
      borderClass: "border-purple-300 dark:border-purple-800",
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🧬 Evolution des comportements humains
      </h3>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-border"></div>
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
            >
              <div
                className={`rounded-lg border-2 p-4 ${stage.bgClass} ${stage.borderClass}`}
              >
                <div className="text-lg font-bold text-foreground">
                  {stage.period}
                </div>
                <div className="text-xl font-bold text-accent">
                  {stage.title}
                </div>
                <div className="text-sm text-foreground/70">
                  {stage.behavior}
                </div>
              </div>
            </div>
            <div
              className={`absolute left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-background bg-background text-2xl`}
            >
              {stage.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. Matrice des stratégies homme-femme
export const GenderStrategyMatrix = () => {
  const strategies = {
    homme: {
      title: "Stratégie masculine",
      color: "#74b9ff",
      items: [
        { label: "Objectif", value: "Transmettre ses gènes", icon: "🧬" },
        { label: "Stratégie", value: "Polygamie optimale", icon: "🔄" },
        { label: "Investissement", value: "Énergie de conquête", icon: "⚡" },
        { label: "Sélection", value: "Jeunesse et fertilité", icon: "🌸" },
      ],
    },
    femme: {
      title: "Stratégie féminine",
      color: "#fd79a8",
      items: [
        { label: "Objectif", value: "Sécurité des descendants", icon: "🛡️" },
        { label: "Stratégie", value: "Monogamie sélective", icon: "💎" },
        { label: "Investissement", value: "Temps et soins", icon: "🤱" },
        { label: "Sélection", value: "Ressources et protection", icon: "🏰" },
      ],
    },
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ⚖️ Stratégies évolutionnaires selon Delavier
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Object.entries(strategies).map(([key, strategy]) => (
          <div
            key={key}
            className="rounded-lg border-2 border-border bg-muted/20 p-6"
          >
            <h4 className="mb-4 text-center text-lg font-bold text-foreground">
              <RoughNotation
                type="underline"
                show={true}
                color={strategy.color}
                animationDelay={300}
              >
                {strategy.title}
              </RoughNotation>
            </h4>
            {strategy.items.map((item, index) => (
              <div
                key={index}
                className="mb-3 rounded border border-border bg-background p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/70">
                    {item.label}
                  </span>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="mt-1 font-semibold text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Calculateur de "valeur de survie" selon l'âge
export const SurvivalValueCalculator = () => {
  const [age, setAge] = useState(25);

  const calculateSurvivalValue = (age: number) => {
    const fertility = Math.max(0, 100 - (age - 18) * 2.5);
    const beauty = Math.max(0, 100 - (age - 20) * 3);
    const resources = Math.min(100, (age - 20) * 2);
    const wisdom = Math.min(100, (age - 18) * 1.5);

    return { fertility, beauty, resources, wisdom };
  };

  const values = calculateSurvivalValue(age);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-4 text-xl font-bold text-foreground">
        📊 "Valeur de survie" selon Delavier
      </h3>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-foreground/80">
          Âge :
        </label>
        <input
          type="range"
          min="18"
          max="60"
          value={age}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted/50 accent-accent"
        />
        <div className="mt-2 text-center text-2xl font-bold text-accent">
          {age} ans
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {Object.entries(values).map(([key, value], index) => {
          const labels = {
            fertility: "Fertilité",
            beauty: "Beauté",
            resources: "Ressources",
            wisdom: "Sagesse",
          };
          const colors = ["#ff6b6b", "#fd79a8", "#fdcb6e", "#74b9ff"];

          return (
            <div
              key={key}
              className="rounded-lg border border-border bg-background p-4 text-center shadow-sm"
            >
              <div className="text-sm font-semibold text-foreground/70">
                {labels[key as keyof typeof labels]}
              </div>
              <div className="mt-2 text-2xl font-bold text-accent">
                {Math.round(value)}%
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted/30">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${value}%`,
                    backgroundColor: colors[index],
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center text-xs text-foreground/60">
        *Modèle théorique basé sur les concepts de Delavier
      </div>
    </div>
  );
};

// 4. Conflit Instincts primitifs vs Attentes modernes
export const InstinctSocietyConflict = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      situation: "Compétition au travail",
      icon: "💼",
      primitiveInstinct: {
        title: "Instinct primitif",
        reaction: "Dominer physiquement le rival",
        icon: "⚔️",
        color: "#ff6b6b",
      },
      modernExpectation: {
        title: "Attente moderne",
        reaction: "Collaborer professionnellement",
        icon: "🤝",
        color: "#00b894",
      },
      tension: "Agressivité refoulée → Stress",
    },
    {
      situation: "Attraction physique",
      icon: "💕",
      primitiveInstinct: {
        title: "Instinct primitif",
        reaction: "Approche directe et physique",
        icon: "🏃‍♂️",
        color: "#ff6b6b",
      },
      modernExpectation: {
        title: "Attente moderne",
        reaction: "Séduction subtile et consentie",
        icon: "💬",
        color: "#00b894",
      },
      tension: "Frustration → Maladresse sociale",
    },
    {
      situation: "Volonté de ressources",
      icon: "💰",
      primitiveInstinct: {
        title: "Instinct primitif",
        reaction: "Accumuler et protéger",
        icon: "🛡️",
        color: "#ff6b6b",
      },
      modernExpectation: {
        title: "Attente moderne",
        reaction: "Partager et redistributer",
        icon: "🌍",
        color: "#00b894",
      },
      tension: "Anxiété → Comportements compulsifs",
    },
    {
      situation: "Hiérarchie sociale",
      icon: "👑",
      primitiveInstinct: {
        title: "Instinct primitif",
        reaction: "Établir dominance visible",
        icon: "💪",
        color: "#ff6b6b",
      },
      modernExpectation: {
        title: "Attente moderne",
        reaction: "Égalité et humilité",
        icon: "⚖️",
        color: "#00b894",
      },
      tension: "Confusion identitaire → Épuisement",
    },
  ];

  const currentScenario = scenarios[selectedScenario];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        ⚡ Conflit Instincts vs Société selon Delavier
      </h3>

      {/* Scenario selector */}
      <div className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setSelectedScenario(index)}
            className={`rounded-lg border-2 p-3 text-center transition-all ${
              selectedScenario === index
                ? "border-accent bg-accent-alpha-20 text-accent"
                : "border-border bg-muted/10 text-foreground/70 hover:bg-muted/20"
            }`}
          >
            <div className="text-2xl">{scenario.icon}</div>
            <div className="text-xs font-medium">{scenario.situation}</div>
          </button>
        ))}
      </div>

      {/* Current scenario display */}
      <div className="mb-6">
        <div className="mb-4 text-center">
          <div className="text-4xl">{currentScenario.icon}</div>
          <h4 className="text-lg font-bold text-foreground">
            {currentScenario.situation}
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Primitive instinct */}
          <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
            <div className="mb-2 flex items-center justify-between">
              <h5 className="font-bold text-foreground">
                {currentScenario.primitiveInstinct.title}
              </h5>
              <span className="text-2xl">
                {currentScenario.primitiveInstinct.icon}
              </span>
            </div>
            <p className="text-sm text-foreground/80">
              {currentScenario.primitiveInstinct.reaction}
            </p>
          </div>

          {/* Modern expectation */}
          <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
            <div className="mb-2 flex items-center justify-between">
              <h5 className="font-bold text-foreground">
                {currentScenario.modernExpectation.title}
              </h5>
              <span className="text-2xl">
                {currentScenario.modernExpectation.icon}
              </span>
            </div>
            <p className="text-sm text-foreground/80">
              {currentScenario.modernExpectation.reaction}
            </p>
          </div>
        </div>

        {/* Tension result */}
        <div className="mt-4 rounded-lg border border-border bg-muted/20 p-4">
          <div className="text-center">
            <div className="mb-2 text-2xl">⚡</div>
            <div className="font-bold text-foreground">
              <RoughNotation
                type="highlight"
                show={true}
                color="#fdcb6e"
                animationDelay={500}
              >
                Résultat du conflit
              </RoughNotation>
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              {currentScenario.tension}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Théorie de Delavier :</strong> La souffrance moderne vient du
          conflit entre nos programmations primitives et les attentes
          civilisationnelles
        </div>
      </div>
    </div>
  );
};

// 5. Comparaison société primitive vs moderne
export const SocietyComparison = () => {
  const comparison = {
    primitive: {
      title: "Société primitive",
      icon: "🏺",
      aspects: [
        { label: "Sélection", value: "Naturelle et directe", icon: "⚔️" },
        { label: "Beauté", value: "Santé et fertilité", icon: "💪" },
        { label: "Rôles", value: "Définis par biologie", icon: "🧬" },
        { label: "Sécurité", value: "Force physique", icon: "🛡️" },
      ],
    },
    moderne: {
      title: "Société moderne",
      icon: "🏢",
      aspects: [
        { label: "Sélection", value: "Médiatisée et complexe", icon: "📱" },
        { label: "Beauté", value: "Artificielle et construite", icon: "💄" },
        { label: "Rôles", value: "Redéfinis culturellement", icon: "🔄" },
        { label: "Sécurité", value: "Économique et sociale", icon: "💰" },
      ],
    },
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔄 Évolution des mécanismes sociaux
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Object.entries(comparison).map(([key, society]) => (
          <div
            key={key}
            className={`rounded-lg border-2 p-6 ${
              key === "primitive"
                ? "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30"
                : "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30"
            }`}
          >
            <div className="mb-4 text-center">
              <div className="text-4xl">{society.icon}</div>
              <h4 className="text-lg font-bold text-foreground">
                {society.title}
              </h4>
            </div>
            {society.aspects.map((aspect, index) => (
              <div
                key={index}
                className="mb-3 rounded border border-border bg-background p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/70">
                    {aspect.label}
                  </span>
                  <span className="text-lg">{aspect.icon}</span>
                </div>
                <div className="mt-1 text-sm text-foreground">
                  {aspect.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Conclusion de Delavier :</strong> Notre programmation
          primitive entre en conflit avec les codes modernes
        </div>
      </div>
    </div>
  );
};
