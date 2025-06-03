import React, { useState } from "react";
import type { ChangeEvent } from "react";

// 1. Calculateur de ROI de prospection
export const ROICalculator = () => {
  const [contactsPerDay, setContactsPerDay] = useState(100);

  const monthlyContacts = contactsPerDay * 22; // jours ouvrables
  const monthlyClients = Math.round(monthlyContacts * 0.01);
  const monthlyRevenue = monthlyClients * 400; // prix moyen offre
  const yearlyRevenue = monthlyRevenue * 12;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactsPerDay(Number(e.target.value));
  };

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-4 text-xl font-bold text-foreground">
        📊 Calculateur ROI Prospection
      </h3>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-foreground/80">
          Contacts par jour :
        </label>
        <input
          type="range"
          min="50"
          max="200"
          value={contactsPerDay}
          onChange={handleChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted/50 accent-accent"
        />
        <div className="mt-2 text-center text-2xl font-bold text-accent">
          {contactsPerDay} contacts/jour
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-background p-4 text-center shadow-sm">
          <div className="text-lg font-semibold text-foreground/70">
            Clients/mois
          </div>
          <div className="text-3xl font-bold text-accent">{monthlyClients}</div>
        </div>
        <div className="rounded-lg border border-border bg-background p-4 text-center shadow-sm">
          <div className="text-lg font-semibold text-foreground/70">
            Revenus/an
          </div>
          <div className="text-3xl font-bold text-accent">
            {yearlyRevenue.toLocaleString()}€
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-foreground/60">
        *Basé sur 1% de conversion finale (méthode Hormozi)
      </div>
    </div>
  );
};

// 2. Timeline de l'histoire d'Hormozi
export const HormoziTimeline = () => {
  const milestones = [
    {
      year: "2020",
      amount: "-150K€",
      label: "Dettes salle de sport",
      isNegative: true,
    },
    { year: "2021", amount: "6M€", label: "CA Gym Launch", isNegative: false },
    { year: "2022", amount: "17M€", label: "Bénéfice net", isNegative: false },
    {
      year: "2024",
      amount: "4500+",
      label: "Salles clientes",
      isNegative: false,
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🚀 L'ascension d'Alex Hormozi
      </h3>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-border"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
            >
              <div
                className={`rounded-lg border-2 p-4 ${
                  milestone.isNegative
                    ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950/30"
                    : "border-border bg-muted/20"
                }`}
              >
                <div className="text-lg font-bold text-foreground">
                  {milestone.year}
                </div>
                <div
                  className={`text-2xl font-bold ${
                    milestone.isNegative
                      ? "text-red-600 dark:text-red-400"
                      : "text-accent"
                  }`}
                >
                  {milestone.amount}
                </div>
                <div className="text-sm text-foreground/70">
                  {milestone.label}
                </div>
              </div>
            </div>
            <div
              className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-background ${
                milestone.isNegative ? "bg-red-500" : "bg-accent"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Progress bars pour les statistiques
export const ConversionStats = () => {
  const steps = [
    {
      label: "Contacts",
      value: 100,
      percentage: 100,
      colorClass: "bg-blue-500",
    },
    {
      label: "Réponses",
      value: 20,
      percentage: 20,
      colorClass: "bg-yellow-500",
    },
    {
      label: "Leads engagés",
      value: 4,
      percentage: 4,
      colorClass: "bg-orange-500",
    },
    { label: "Clients", value: 1, percentage: 1, colorClass: "bg-accent" },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        📈 Tunnel de conversion Hormozi
      </h3>
      {steps.map((step, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-foreground">{step.label}</span>
            <span className="text-lg font-bold text-foreground">
              {step.value}
            </span>
          </div>
          <div className="h-4 w-full rounded-full bg-muted/30">
            <div
              className={`h-4 rounded-full transition-all duration-1000 ease-out ${step.colorClass}`}
              style={{ width: `${step.percentage}%` }}
            ></div>
          </div>
          <div className="mt-1 text-right text-sm text-foreground/60">
            {step.percentage}%
          </div>
        </div>
      ))}
      <div className="mt-4 rounded-lg border border-border bg-muted/20 p-3">
        <div className="text-center text-sm text-foreground">
          <strong>Résultat :</strong> 1% de conversion finale = 1 client pour
          100 contacts
        </div>
      </div>
    </div>
  );
};

// 4. Matrice des types de communication
export const CommunicationMatrix = () => {
  const matrix = [
    [
      {
        title: "Prospection chaleureuse",
        subtitle: "Emails/appels personnalisés",
        bgClass: "bg-green-100 dark:bg-green-950/30",
        borderClass: "border-green-300 dark:border-green-800",
      },
      {
        title: "Prospection froide",
        subtitle: "Cold outreach",
        bgClass: "bg-blue-100 dark:bg-blue-950/30",
        borderClass: "border-blue-300 dark:border-blue-800",
      },
    ],
    [
      {
        title: "Publication de contenu",
        subtitle: "Posts, vidéos, articles",
        bgClass: "bg-purple-100 dark:bg-purple-950/30",
        borderClass: "border-purple-300 dark:border-purple-800",
      },
      {
        title: "Publicité payante",
        subtitle: "Ads Facebook, Google",
        bgClass: "bg-red-100 dark:bg-red-950/30",
        borderClass: "border-red-300 dark:border-red-800",
      },
    ],
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-background p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎯 Matrice de Communication
      </h3>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div></div>
        <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
          Audience Chaude
        </div>
        <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
          Audience Froide
        </div>
      </div>

      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4 grid grid-cols-3 gap-4">
          <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
            {rowIndex === 0 ? "Un à Un" : "Un à Plusieurs"}
          </div>
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`rounded-lg border-2 p-4 text-center ${cell.bgClass} ${cell.borderClass}`}
            >
              <div className="font-bold text-foreground">{cell.title}</div>
              <div className="mt-1 text-sm text-foreground/70">
                {cell.subtitle}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// 5. Funnel des lead magnets
export const LeadMagnetFunnel = () => {
  const stages = [
    {
      title: "Révélation",
      description: "Met en lumière le problème",
      example: "Audit gratuit de site web",
      icon: "🔍",
      bgClass: "bg-red-100 dark:bg-red-950/30",
      borderClass: "border-red-300 dark:border-red-800",
      circleClass:
        "bg-red-200 border-red-400 dark:bg-red-900/50 dark:border-red-600",
    },
    {
      title: "Échantillon",
      description: "Goûte à la solution",
      example: "Essai gratuit 7 jours",
      icon: "🍯",
      bgClass: "bg-yellow-100 dark:bg-yellow-950/30",
      borderClass: "border-yellow-300 dark:border-yellow-800",
      circleClass:
        "bg-yellow-200 border-yellow-400 dark:bg-yellow-900/50 dark:border-yellow-600",
    },
    {
      title: "Étape de processus",
      description: "Une partie de la méthode",
      example: "Guide étape 1/5",
      icon: "📚",
      bgClass: "bg-blue-100 dark:bg-blue-950/30",
      borderClass: "border-blue-300 dark:border-blue-800",
      circleClass:
        "bg-blue-200 border-blue-400 dark:bg-blue-900/50 dark:border-blue-600",
    },
    {
      title: "Vente",
      description: "Offre principale",
      example: "Formation complète",
      icon: "💰",
      bgClass: "bg-green-100 dark:bg-green-950/30",
      borderClass: "border-green-300 dark:border-green-800",
      circleClass:
        "bg-green-200 border-green-400 dark:bg-green-900/50 dark:border-green-600",
    },
  ];

  return (
    <div className="my-6 rounded-lg border border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎭 Funnel des Lead Magnets
      </h3>
      <div className="flex flex-col items-center justify-between md:flex-row">
        {stages.map((stage, index) => (
          <div key={index} className="mb-4 flex flex-col items-center md:mb-0">
            <div
              className={`mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 text-3xl ${stage.circleClass}`}
            >
              {stage.icon}
            </div>
            <div
              className={`max-w-xs rounded-lg border-2 p-4 text-center ${stage.bgClass} ${stage.borderClass}`}
            >
              <div className="mb-1 font-bold text-foreground">
                {stage.title}
              </div>
              <div className="mb-2 text-sm text-foreground/70">
                {stage.description}
              </div>
              <div className="rounded border border-border bg-background p-2 text-xs text-foreground/80 italic">
                {stage.example}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="mx-4 hidden text-4xl text-foreground/40 md:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Conseil d'Hormozi :</strong> Être un "dealer de drogue" -
          offrir la dose la plus forte possible gratuitement
        </div>
      </div>
    </div>
  );
};
