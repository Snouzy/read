import React, { useState } from "react";

// 1. Calculateur de ROI de prospection
export const ROICalculator = () => {
  const [contactsPerDay, setContactsPerDay] = useState(100);

  const monthlyContacts = contactsPerDay * 22; // jours ouvrables
  const monthlyClients = Math.round(monthlyContacts * 0.01);
  const monthlyRevenue = monthlyClients * 400; // prix moyen offre
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <div className="my-6 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <h3 className="mb-4 text-xl font-bold text-gray-800">
        📊 Calculateur ROI Prospection
      </h3>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Contacts par jour :
        </label>
        <input
          type="range"
          min="50"
          max="200"
          value={contactsPerDay}
          onChange={e => setContactsPerDay(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-200"
        />
        <div className="mt-2 text-center text-2xl font-bold text-blue-600">
          {contactsPerDay} contacts/jour
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-white p-4 text-center">
          <div className="text-lg font-semibold text-gray-600">
            Clients/mois
          </div>
          <div className="text-3xl font-bold text-green-600">
            {monthlyClients}
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 text-center">
          <div className="text-lg font-semibold text-gray-600">Revenus/an</div>
          <div className="text-3xl font-bold text-green-600">
            {yearlyRevenue.toLocaleString()}€
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
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
      color: "red",
    },
    { year: "2021", amount: "6M€", label: "CA Gym Launch", color: "yellow" },
    { year: "2022", amount: "17M€", label: "Bénéfice net", color: "green" },
    { year: "2024", amount: "4500+", label: "Salles clientes", color: "blue" },
  ];

  return (
    <div className="my-6 rounded-lg bg-gray-50 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-gray-800">
        🚀 L'ascension d'Alex Hormozi
      </h3>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300"></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div
              className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
            >
              <div
                className={`bg-${milestone.color}-100 border-2 border-${milestone.color}-300 rounded-lg p-4`}
              >
                <div className="text-lg font-bold">{milestone.year}</div>
                <div
                  className={`text-2xl font-bold text-${milestone.color}-600`}
                >
                  {milestone.amount}
                </div>
                <div className="text-sm text-gray-600">{milestone.label}</div>
              </div>
            </div>
            <div
              className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 transform bg-${milestone.color}-500 rounded-full border-4 border-white`}
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
    { label: "Contacts", value: 100, percentage: 100, color: "blue" },
    { label: "Réponses", value: 20, percentage: 20, color: "yellow" },
    { label: "Leads engagés", value: 4, percentage: 4, color: "orange" },
    { label: "Clients", value: 1, percentage: 1, color: "green" },
  ];

  return (
    <div className="my-6 rounded-lg border-2 border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-gray-800">
        📈 Tunnel de conversion Hormozi
      </h3>
      {steps.map((step, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-gray-700">{step.label}</span>
            <span className="text-lg font-bold">{step.value}</span>
          </div>
          <div className="h-4 w-full rounded-full bg-gray-200">
            <div
              className={`bg-${step.color}-500 h-4 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${step.percentage}%` }}
            ></div>
          </div>
          <div className="mt-1 text-right text-sm text-gray-500">
            {step.percentage}%
          </div>
        </div>
      ))}
      <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3">
        <div className="text-center text-sm text-green-700">
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
        color: "green",
      },
      { title: "Prospection froide", subtitle: "Cold outreach", color: "blue" },
    ],
    [
      {
        title: "Publication de contenu",
        subtitle: "Posts, vidéos, articles",
        color: "purple",
      },
      {
        title: "Publicité payante",
        subtitle: "Ads Facebook, Google",
        color: "red",
      },
    ],
  ];

  return (
    <div className="my-6 rounded-lg bg-gray-50 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-gray-800">
        🎯 Matrice de Communication
      </h3>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div></div>
        <div className="rounded bg-blue-100 p-2 text-center font-bold text-gray-600">
          Audience Chaude
        </div>
        <div className="rounded bg-red-100 p-2 text-center font-bold text-gray-600">
          Audience Froide
        </div>
      </div>

      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4 grid grid-cols-3 gap-4">
          <div
            className={`rounded p-2 text-center font-bold text-gray-600 ${rowIndex === 0 ? "bg-green-100" : "bg-yellow-100"}`}
          >
            {rowIndex === 0 ? "Un à Un" : "Un à Plusieurs"}
          </div>
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`bg-${cell.color}-100 border-2 border-${cell.color}-300 rounded-lg p-4 text-center`}
            >
              <div className="font-bold text-gray-800">{cell.title}</div>
              <div className="mt-1 text-sm text-gray-600">{cell.subtitle}</div>
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
      color: "red",
    },
    {
      title: "Échantillon",
      description: "Goûte à la solution",
      example: "Essai gratuit 7 jours",
      icon: "🍯",
      color: "yellow",
    },
    {
      title: "Étape de processus",
      description: "Une partie de la méthode",
      example: "Guide étape 1/5",
      icon: "📚",
      color: "blue",
    },
    {
      title: "Vente",
      description: "Offre principale",
      example: "Formation complète",
      icon: "💰",
      color: "green",
    },
  ];

  return (
    <div className="my-6 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-6">
      <h3 className="mb-6 text-center text-xl font-bold text-gray-800">
        🎭 Funnel des Lead Magnets
      </h3>
      <div className="flex flex-col items-center justify-between md:flex-row">
        {stages.map((stage, index) => (
          <div key={index} className="mb-4 flex flex-col items-center md:mb-0">
            <div
              className={`h-20 w-20 bg-${stage.color}-200 border-4 border-${stage.color}-400 mb-3 flex items-center justify-center rounded-full text-3xl`}
            >
              {stage.icon}
            </div>
            <div
              className={`bg-${stage.color}-100 border-2 border-${stage.color}-300 max-w-xs rounded-lg p-4 text-center`}
            >
              <div className="mb-1 font-bold text-gray-800">{stage.title}</div>
              <div className="mb-2 text-sm text-gray-600">
                {stage.description}
              </div>
              <div className="rounded bg-white p-2 text-xs italic">
                {stage.example}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="mx-4 hidden text-4xl text-gray-400 md:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <div className="text-center text-sm text-blue-700">
          <strong>Conseil d'Hormozi :</strong> Être un "dealer de drogue" -
          offrir la dose la plus forte possible gratuitement
        </div>
      </div>
    </div>
  );
};
