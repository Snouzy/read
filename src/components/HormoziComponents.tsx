import { useState } from "react";
import type { ChangeEvent } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const OFFER = 400;

// 1. Calculateur de ROI de prospection
export const ROICalculator = () => {
  const [contactsPerDay, setContactsPerDay] = useState(100);

  const monthlyContacts = contactsPerDay * 22; // jours ouvrables
  const monthlyClients = Math.round(monthlyContacts * 0.01);
  const monthlyRevenue = monthlyClients * OFFER; // prix moyen offre
  const yearlyRevenue = monthlyRevenue * 12;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactsPerDay(Number(e.target.value));
  };

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/20 p-6">
      <h3 className="mb-4 text-xl font-bold text-foreground">
        📊{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ff6b6b"
          animationDelay={500}
        >
          Calculateur ROI Prospection
        </RoughNotation>
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
            Revenus/an (offre ou LTV à {OFFER}€)
          </div>
          <div className="text-3xl font-bold text-accent">
            <RoughNotation
              type="box"
              show={true}
              color="#96ceb4"
              animationDelay={1700}
            >
              {yearlyRevenue.toLocaleString()}€
            </RoughNotation>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-foreground/60">
        *Basé sur{" "}
        <RoughNotation
          type="underline"
          show={true}
          color="#feca57"
          animationDelay={2000}
        >
          1% de conversion finale
        </RoughNotation>{" "}
        (méthode Hormozi)
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
        🚀{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ff9ff3"
          animationDelay={300}
        >
          L'ascension d'Alex Hormozi
        </RoughNotation>
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
                    <RoughNotation
                      type={milestone.isNegative ? "crossed-off" : "circle"}
                      show={true}
                      color={milestone.isNegative ? "#e74c3c" : "#2ecc71"}
                      animationDelay={500 + index * 300}
                    >
                      {milestone.amount}
                    </RoughNotation>
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
        </RoughNotationGroup>
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
        📈{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#74b9ff"
          animationDelay={400}
        >
          Tunnel de conversion Hormozi
        </RoughNotation>
      </h3>
      <RoughNotationGroup show={true}>
        {steps.map((step, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-foreground">
                {step.label}
              </span>
              <span className="text-lg font-bold text-foreground">
                <RoughNotation
                  type="circle"
                  show={true}
                  color={index === steps.length - 1 ? "#00b894" : "#fdcb6e"}
                  animationDelay={600 + index * 200}
                >
                  {step.value}
                </RoughNotation>
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
      </RoughNotationGroup>
      <div className="mt-4 rounded-lg border border-border bg-muted/20 p-3">
        <div className="text-center text-sm text-foreground">
          <strong>Résultat :</strong>{" "}
          <RoughNotation
            type="underline"
            show={true}
            color="#e17055"
            animationDelay={1400}
          >
            1% de conversion finale
          </RoughNotation>{" "}
          = 1 client pour 100 contacts
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
        🎯{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#a29bfe"
          animationDelay={300}
        >
          Matrice de Communication
        </RoughNotation>
      </h3>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div></div>
        <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
          <RoughNotation
            type="bracket"
            show={true}
            color="#00cec9"
            animationDelay={800}
            brackets={["left", "right"]}
          >
            Audience Chaude
          </RoughNotation>
        </div>
        <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
          <RoughNotation
            type="bracket"
            show={true}
            color="#fd79a8"
            animationDelay={1000}
            brackets={["left", "right"]}
          >
            Audience Froide
          </RoughNotation>
        </div>
      </div>

      <RoughNotationGroup show={true}>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-4 grid grid-cols-3 gap-4">
            <div className="rounded bg-muted/30 p-2 text-center font-bold text-foreground">
              <RoughNotation
                type="bracket"
                show={true}
                color="#fab1a0"
                animationDelay={1200 + rowIndex * 200}
                brackets={["top", "bottom"]}
              >
                {rowIndex === 0 ? "Un à Un" : "Un à Plusieurs"}
              </RoughNotation>
            </div>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`rounded-lg border-2 p-4 text-center ${cell.bgClass} ${cell.borderClass}`}
              >
                <div className="font-bold text-foreground">
                  <RoughNotation
                    type="underline"
                    show={true}
                    color="#6c5ce7"
                    animationDelay={1600 + (rowIndex * 2 + cellIndex) * 200}
                  >
                    {cell.title}
                  </RoughNotation>
                </div>
                <div className="mt-1 text-sm text-foreground/70">
                  {cell.subtitle}
                </div>
              </div>
            ))}
          </div>
        ))}
      </RoughNotationGroup>
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
        🎭{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#ff7675"
          animationDelay={200}
        >
          Funnel des Lead Magnets
        </RoughNotation>
      </h3>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <RoughNotationGroup show={true}>
          {stages.map((stage, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col items-center md:mb-0"
            >
              <div
                className={`mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 text-3xl ${stage.circleClass}`}
              >
                {stage.icon}
              </div>
              <div
                className={`max-w-xs rounded-lg border-2 p-4 text-center ${stage.bgClass} ${stage.borderClass}`}
              >
                <div className="mb-1 font-bold text-foreground">
                  <RoughNotation
                    type="circle"
                    show={true}
                    color="#55a3ff"
                    animationDelay={500 + index * 300}
                  >
                    {stage.title}
                  </RoughNotation>
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
        </RoughNotationGroup>
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Conseil d'Hormozi :</strong> Être un{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#ffeaa7"
            animationDelay={1800}
          >
            "dealer de drogue"
          </RoughNotation>{" "}
          - offrir la dose la plus forte possible gratuitement
        </div>
      </div>
    </div>
  );
};

// 6. Métriques de prospection
export const ProspectionMetrics = () => {
  const metrics = [
    {
      metric: "Taux de réponse approches chaleureuses",
      value: "20%",
      description: "1 contact sur 5 s'engage",
      color: "#00b894",
    },
    {
      metric: "Conversion finale",
      value: "1%",
      description: "1 client pour 100 contacts",
      color: "#e17055",
    },
    {
      metric: "Prospects engagés prospection froide",
      value: "3%",
      description: "Objectif de conversion",
      color: "#74b9ff",
    },
    {
      metric: "Ratio LTGP/CAC recommandé",
      value: "3:1",
      description: "Seuil de rentabilité",
      color: "#fd79a8",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        📊{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#a29bfe"
          animationDelay={300}
        >
          Métriques Clés d'Hormozi
        </RoughNotation>
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background p-4 shadow-sm"
          >
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: metric.color }}
              >
                <RoughNotation
                  type="circle"
                  show={true}
                  color={metric.color}
                  animationDelay={500 + index * 200}
                >
                  {metric.value}
                </RoughNotation>
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {metric.metric}
              </div>
              <div className="mt-1 text-xs text-foreground/70">
                {metric.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. Framework 100 jours
export const Framework100Days = () => {
  const activities = [
    {
      type: "Approches chaleureuses",
      target: "100 démarches/jour",
      examples: ["E-mail", "SMS", "Message direct", "Appel"],
      icon: "🔥",
      color: "#fd79a8",
    },
    {
      type: "Publication de contenu",
      target: "100 minutes/jour",
      examples: ["Vidéos", "Articles", "Podcasts", "Infographies"],
      icon: "🎯",
      color: "#74b9ff",
    },
    {
      type: "Prospection à froid",
      target: "100 démarches/jour",
      examples: ["E-mail froid", "Appels", "Messages", "Flyers"],
      icon: "❄️",
      color: "#00b894",
    },
    {
      type: "Annonces payantes",
      target: "100 minutes/jour",
      examples: ["Facebook Ads", "Google Ads", "Podcasts", "Mailing"],
      icon: "💰",
      color: "#a29bfe",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-r from-background to-muted/10 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🚀{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#e84393"
          animationDelay={300}
        >
          Framework 100 Jours d'Hormozi
        </RoughNotation>
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-background p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center">
              <span className="mr-3 text-3xl">{activity.icon}</span>
              <div>
                <h4 className="font-bold text-foreground">
                  <RoughNotation
                    type="underline"
                    show={true}
                    color={activity.color}
                    animationDelay={500 + index * 200}
                  >
                    {activity.type}
                  </RoughNotation>
                </h4>
                <p
                  className="text-sm font-semibold"
                  style={{ color: activity.color }}
                >
                  {activity.target}
                </p>
              </div>
            </div>
            <div className="text-sm text-foreground/70">
              <strong>Exemples :</strong>
              <ul className="mt-1 list-disc pl-4">
                {activity.examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Objectif :</strong> 100 jours consécutifs d'exécution pour{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#ffeaa7"
            animationDelay={1500}
          >
            construire un système d'acquisition robuste
          </RoughNotation>
        </div>
      </div>
    </div>
  );
};

// 8. Framework Chuchoter-Teaser-Crier
export const WhisperTeaserShout = () => {
  const phases = [
    {
      phase: "Chuchoter",
      description: "Créer la curiosité",
      timing: "Semaines avant le lancement",
      actions: ["Appels accrocheurs", "Mystère sur le produit", "Coulisses"],
      icon: "🤫",
      color: "#74b9ff",
    },
    {
      phase: "Teaser",
      description: "Révéler progressivement",
      timing: "14 jours à 3 jours avant",
      actions: [
        "Révéler le produit",
        "Éléments de valeur",
        "Date de lancement",
      ],
      icon: "👀",
      color: "#fd79a8",
    },
    {
      phase: "Crier",
      description: "Appel à l'action massif",
      timing: "3 jours avant au lancement",
      actions: ["Bonus", "Rareté", "Urgence", "Garanties"],
      icon: "📢",
      color: "#e17055",
    },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-border bg-gradient-to-br from-background to-muted/20 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-foreground">
        🎬{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color="#6c5ce7"
          animationDelay={300}
        >
          Framework Chuchoter - Teaser - Crier
        </RoughNotation>
      </h3>
      <div className="flex flex-col gap-6 md:flex-row">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="flex-1 rounded-lg border border-border bg-background p-5 shadow-sm"
          >
            <div className="mb-4 text-center">
              <div className="mb-2 text-4xl">{phase.icon}</div>
              <h4 className="text-lg font-bold text-foreground">
                <RoughNotation
                  type="circle"
                  show={true}
                  color={phase.color}
                  animationDelay={500 + index * 300}
                >
                  {phase.phase}
                </RoughNotation>
              </h4>
              <p className="mt-1 text-sm text-foreground/70">
                {phase.description}
              </p>
            </div>
            <div className="mb-3">
              <strong className="text-sm" style={{ color: phase.color }}>
                Timing :
              </strong>
              <p className="text-sm text-foreground/80">{phase.timing}</p>
            </div>
            <div>
              <strong className="text-sm text-foreground">Actions :</strong>
              <ul className="mt-1 list-disc pl-4 text-sm text-foreground/70">
                {phase.actions.map((action, idx) => (
                  <li key={idx}>{action}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
        <div className="text-center text-sm text-foreground">
          <strong>Inspiration :</strong> Modèle des{" "}
          <RoughNotation
            type="highlight"
            show={true}
            color="#00b894"
            animationDelay={1800}
          >
            sorties de films
          </RoughNotation>{" "}
          - bandes-annonces progressives pour créer l'anticipation
        </div>
      </div>
    </div>
  );
};
