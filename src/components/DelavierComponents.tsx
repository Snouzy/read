import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

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
        🧬{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ff6b6b"
          animationDelay={200}
        >
          Evolution des comportements humains
        </RoughNotation>
      </h3>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-border"></div>
        <RoughNotationGroup show={true}>
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
        </RoughNotationGroup>
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
        ⚖️{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ffeaa7"
          animationDelay={300}
        >
          Stratégies évolutionnaires selon Delavier
        </RoughNotation>
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RoughNotationGroup show={true}>
          {Object.entries(strategies).map(([key, strategy], stratIndex) => (
            <div
              key={key}
              className="rounded-lg border-2 border-border bg-muted/20 p-6"
            >
              <h4 className="mb-4 text-center text-lg font-bold text-foreground">
                <RoughNotation
                  type="underline"
                  show={true}
                  color={strategy.color}
                  animationDelay={600 + stratIndex * 200}
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
                    <RoughNotation
                      type="highlight"
                      show={true}
                      color={strategy.color + "40"}
                      animationDelay={800 + stratIndex * 200 + index * 100}
                    >
                      {item.value}
                    </RoughNotation>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </RoughNotationGroup>
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

// 4. Schéma des mécanismes de jalousie
export const JealousyMechanism = () => {
  const [isActive, setIsActive] = useState(false);

  const steps = [
    {
      title: "Détection de menace",
      description: "Perception d'un rival potentiel",
      icon: "👁️",
      color: "#ff6b6b",
    },
    {
      title: "Activation primitive",
      description: "Réponse émotionnelle instinctive",
      icon: "⚡",
      color: "#fd79a8",
    },
    {
      title: "Validation de choix",
      description: "Confirmation de la virilité du partenaire",
      icon: "✅",
      color: "#00b894",
    },
    {
      title: "Renforcement de lien",
      description: "Intensification de l'attachement",
      icon: "💪",
      color: "#74b9ff",
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🔥 Le mécanisme de la jalousie selon Delavier
      </h3>
      <div className="mb-6 text-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className="rounded-lg border-2 border-accent bg-accent/10 px-6 py-3 font-bold text-accent transition-all hover:bg-accent/20"
        >
          {isActive ? "Réinitialiser" : "Déclencher le mécanisme"}
        </button>
      </div>

      <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <RoughNotationGroup show={isActive}>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 text-3xl transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-accent bg-accent/20"
                    : "border-muted bg-muted/20"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {step.icon}
              </div>
              <div className="max-w-32 rounded-lg border border-border bg-muted/20 p-3 text-center">
                <div className="mb-1 text-sm font-bold text-foreground">
                  <RoughNotation
                    type="underline"
                    show={isActive}
                    color={step.color}
                    animationDelay={600 + index * 300}
                  >
                    {step.title}
                  </RoughNotation>
                </div>
                <div className="text-xs text-foreground/70">
                  {step.description}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="mx-4 hidden text-4xl text-foreground/40 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </RoughNotationGroup>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Théorie de Delavier :</strong> La jalousie n'est pas un
          défaut, mais un mécanisme de validation de la qualité du partenaire
          choisi.
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
        🔄{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#a29bfe"
          animationDelay={300}
        >
          Évolution des mécanismes sociaux
        </RoughNotation>
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RoughNotationGroup show={true}>
          {Object.entries(comparison).map(([key, society], socIndex) => (
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
                  <RoughNotation
                    type="box"
                    show={true}
                    color={key === "primitive" ? "#fdcb6e" : "#74b9ff"}
                    animationDelay={600 + socIndex * 200}
                  >
                    {society.title}
                  </RoughNotation>
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
                    <RoughNotation
                      type="underline"
                      show={true}
                      color={key === "primitive" ? "#e17055" : "#00b894"}
                      animationDelay={800 + socIndex * 200 + index * 100}
                    >
                      {aspect.value}
                    </RoughNotation>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </RoughNotationGroup>
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Conclusion de Delavier :</strong>{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#ff6b6b40"
            animationDelay={1400}
          >
            Notre programmation primitive entre en conflit avec les codes
            modernes
          </RoughNotation>
        </div>
      </div>
    </div>
  );
};
