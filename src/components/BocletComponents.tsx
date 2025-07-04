import { useState } from "react";

export const KnowledgeVirtues = () => {
  const [activeVirtue, setActiveVirtue] = useState(0);
  
  const virtues = [
    { title: "Élève le niveau de conscience", icon: "🧠", description: "La connaissance nous permet de voir au-delà des apparences" },
    { title: "Rend plus humble", icon: "🙏", description: "Plus on apprend, plus on réalise l'étendue de notre ignorance" },
    { title: "Booste la confiance", icon: "💪", description: "Maîtriser un sujet nous rend légitimes et confiants" },
    { title: "Aide à décider", icon: "🎯", description: "Les bonnes décisions naissent de la connaissance" },
    { title: "Notre dernier rempart", icon: "🛡️", description: "Quand on perd tout, la connaissance reste" },
    { title: "Peut changer une vie", icon: "🚀", description: "Découvrir sa passion peut tout transformer" },
    { title: "Antistress naturel", icon: "😌", description: "Comprendre apaise et relativise" },
    { title: "Source de joie", icon: "✨", description: "Apprendre stimule notre curiosité naturelle" },
    { title: "Rend heureux", icon: "😊", description: "Progresser chaque jour procure satisfaction" },
    { title: "Atteindre ses objectifs", icon: "🎖️", description: "La connaissance ouvre toutes les portes" }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Les 11 Vertus de la Connaissance</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {virtues.map((virtue, index) => (
          <button
            key={index}
            onClick={() => setActiveVirtue(index)}
            className={`p-3 rounded-lg transition-all ${
              activeVirtue === index 
                ? 'bg-skin-accent text-skin-inverted' 
                : 'bg-skin-fill hover:bg-skin-card-muted'
            }`}
          >
            <div className="text-2xl mb-1">{virtue.icon}</div>
            <div className="text-sm font-medium">{virtue.title}</div>
          </button>
        ))}
      </div>
      <div className="p-4 bg-skin-fill rounded-lg">
        <p className="text-skin-base">{virtues[activeVirtue].description}</p>
      </div>
    </div>
  );
};

export const LearningCycle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Incompétence Inconsciente",
      description: "On ne sait pas qu'on ne sait pas",
      example: "Je ne savais pas que la lecture rapide existait",
      color: "bg-red-500"
    },
    {
      title: "Incompétence Consciente", 
      description: "On sait qu'on ne sait pas",
      example: "Je sais que la lecture rapide existe mais je ne la maîtrise pas",
      color: "bg-orange-500"
    },
    {
      title: "Compétence Consciente",
      description: "On sait qu'on sait",
      example: "Je pratique la lecture rapide en y pensant",
      color: "bg-yellow-500"
    },
    {
      title: "Compétence Inconsciente",
      description: "On ne sait plus qu'on sait",
      example: "Je lis rapidement sans y penser, c'est naturel",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Le Cycle de l'Apprentissage</h3>
      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 mx-1 p-2 rounded-lg transition-all ${
              currentStep === index ? 'ring-2 ring-skin-accent' : ''
            }`}
          >
            <div className={`h-2 ${step.color} rounded-full mb-2`}></div>
            <div className="text-xs font-medium">Étape {index + 1}</div>
          </button>
        ))}
      </div>
      <div className="bg-skin-fill p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">{steps[currentStep].title}</h4>
        <p className="text-sm mb-2 italic">{steps[currentStep].description}</p>
        <p className="text-sm text-skin-base opacity-80">
          <span className="font-medium">Exemple :</span> {steps[currentStep].example}
        </p>
      </div>
    </div>
  );
};

export const DalePyramid = () => {
  const levels = [
    { percentage: 90, activity: "Faire et dire", color: "bg-green-500" },
    { percentage: 70, activity: "Dire", color: "bg-yellow-500" },
    { percentage: 50, activity: "Voir et entendre", color: "bg-orange-500" },
    { percentage: 30, activity: "Voir", color: "bg-red-400" },
    { percentage: 20, activity: "Entendre", color: "bg-red-500" },
    { percentage: 10, activity: "Lire", color: "bg-red-600" }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Pyramide de Dale - Taux de Rétention</h3>
      <div className="space-y-3">
        {levels.map((level, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-right mr-3 font-bold">{level.percentage}%</div>
            <div className="flex-1 bg-skin-fill rounded-lg p-3 relative overflow-hidden">
              <div 
                className={`absolute inset-0 ${level.color} opacity-20`}
                style={{ width: `${level.percentage}%` }}
              ></div>
              <span className="relative z-10 font-medium">{level.activity}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-skin-base opacity-80">
        💡 Plus on est actif dans l'apprentissage, mieux on retient !
      </p>
    </div>
  );
};

export const MultipleIntelligences = () => {
  const [selectedIntelligence, setSelectedIntelligence] = useState<number | null>(null);
  
  const intelligences = [
    {
      name: "Verbo-linguistique",
      icon: "📝",
      description: "Maîtrise du langage, écriture, lecture",
      tip: "Écrivez des résumés, racontez ce que vous apprenez"
    },
    {
      name: "Logico-mathématique",
      icon: "🔢",
      description: "Résolution de problèmes, analyse",
      tip: "Créez des tableaux et des structures logiques"
    },
    {
      name: "Visuo-spatiale",
      icon: "🎨",
      description: "Représentation mentale, visualisation",
      tip: "Utilisez des schémas, cartes mentales, dessins"
    },
    {
      name: "Kinesthésique",
      icon: "🏃",
      description: "Apprentissage par le mouvement",
      tip: "Apprenez en marchant, manipulez des objets"
    },
    {
      name: "Musicale-rythmique",
      icon: "🎵",
      description: "Sensibilité aux sons et rythmes",
      tip: "Créez des rimes, apprenez en chantant"
    },
    {
      name: "Interpersonnelle",
      icon: "👥",
      description: "Interaction et empathie",
      tip: "Apprenez en groupe, enseignez aux autres"
    },
    {
      name: "Intrapersonnelle",
      icon: "🧘",
      description: "Connaissance de soi, introspection",
      tip: "Réfléchissez seul, tenez un journal"
    },
    {
      name: "Naturaliste",
      icon: "🌿",
      description: "Sensibilité à l'environnement",
      tip: "Étudiez dehors, connectez-vous à la nature"
    },
    {
      name: "Existentielle",
      icon: "🤔",
      description: "Questionnement du sens",
      tip: "Donnez du sens à vos apprentissages"
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Les 9 Intelligences de Gardner</h3>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {intelligences.map((intel, index) => (
          <button
            key={index}
            onClick={() => setSelectedIntelligence(index)}
            className={`p-3 rounded-lg transition-all ${
              selectedIntelligence === index 
                ? 'bg-skin-accent text-skin-inverted' 
                : 'bg-skin-fill hover:bg-skin-card-muted'
            }`}
          >
            <div className="text-2xl mb-1">{intel.icon}</div>
            <div className="text-xs font-medium">{intel.name}</div>
          </button>
        ))}
      </div>
      {selectedIntelligence !== null && (
        <div className="bg-skin-fill p-4 rounded-lg">
          <h4 className="font-bold mb-2">{intelligences[selectedIntelligence].name}</h4>
          <p className="text-sm mb-2">{intelligences[selectedIntelligence].description}</p>
          <p className="text-sm italic text-skin-accent">
            💡 {intelligences[selectedIntelligence].tip}
          </p>
        </div>
      )}
    </div>
  );
};

export const BrainWaves = () => {
  const [activeWave, setActiveWave] = useState(1);
  
  const waves = [
    {
      name: "Beta",
      frequency: "14-30 Hz",
      state: "Éveil actif, stress",
      color: "bg-red-500",
      animation: "animate-pulse"
    },
    {
      name: "Alpha",
      frequency: "9-13 Hz",
      state: "Relaxation, méditation légère",
      color: "bg-green-500",
      animation: "animate-pulse"
    },
    {
      name: "Theta",
      frequency: "4-7 Hz",
      state: "Méditation profonde, hypnose",
      color: "bg-blue-500",
      animation: "animate-pulse"
    },
    {
      name: "Delta",
      frequency: "0.5-3 Hz",
      state: "Sommeil profond",
      color: "bg-purple-500",
      animation: "animate-pulse"
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Les Ondes Cérébrales</h3>
      <div className="space-y-3">
        {waves.map((wave, index) => (
          <button
            key={index}
            onClick={() => setActiveWave(index)}
            className={`w-full p-4 rounded-lg transition-all ${
              activeWave === index ? 'ring-2 ring-skin-accent' : ''
            } bg-skin-fill hover:bg-skin-card-muted`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${wave.color} ${wave.animation} mr-3`}></div>
                <div className="text-left">
                  <div className="font-bold">{wave.name}</div>
                  <div className="text-sm opacity-80">{wave.frequency}</div>
                </div>
              </div>
              <div className="text-sm text-right">{wave.state}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 p-3 bg-skin-fill rounded-lg text-sm">
        <p>🎯 L'état Alpha est optimal pour l'apprentissage !</p>
      </div>
    </div>
  );
};

export const CognitiveBiases = () => {
  const [expandedBias, setExpandedBias] = useState<number | null>(null);
  
  const biases = [
    {
      name: "Biais de confirmation",
      icon: "✅",
      description: "Ne retenir que ce qui confirme nos croyances",
      example: "Ignorer les avis contraires sur un sujet"
    },
    {
      name: "Biais de croyance",
      icon: "💭",
      description: "Penser qu'on sait déjà tout",
      example: "Ne pas écouter car on pense connaître la réponse"
    },
    {
      name: "Biais négatif",
      icon: "😔",
      description: "Accorder plus de poids au négatif",
      example: "Se souvenir plus des échecs que des réussites"
    },
    {
      name: "Biais de halo",
      icon: "😇",
      description: "Juger selon la première impression",
      example: "Penser qu'une personne belle est forcément gentille"
    },
    {
      name: "Biais de conformité",
      icon: "👥",
      description: "Suivre la majorité",
      example: "Faire comme les autres pour être accepté"
    },
    {
      name: "Biais d'autocomplaisance",
      icon: "🏆",
      description: "S'attribuer les succès, rejeter les échecs",
      example: "C'est grâce à moi si ça marche, leur faute si ça échoue"
    },
    {
      name: "Biais d'omission",
      icon: "🚫",
      description: "Préférer ne rien faire",
      example: "Ne pas essayer par peur d'échouer"
    },
    {
      name: "Effet Dunning-Kruger",
      icon: "📈",
      description: "Les moins compétents se surestiment",
      example: "Penser tout savoir après avoir lu un article"
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Les Biais Cognitifs à Dépasser</h3>
      <div className="space-y-2">
        {biases.map((bias, index) => (
          <div key={index} className="bg-skin-fill rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedBias(expandedBias === index ? null : index)}
              className="w-full p-3 flex items-center justify-between hover:bg-skin-card-muted transition-colors"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{bias.icon}</span>
                <span className="font-medium">{bias.name}</span>
              </div>
              <span className="text-skin-base opacity-50">
                {expandedBias === index ? '−' : '+'}
              </span>
            </button>
            {expandedBias === index && (
              <div className="px-3 pb-3">
                <p className="text-sm mb-1">{bias.description}</p>
                <p className="text-xs italic opacity-80">Ex: {bias.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const EisenhowerMatrix = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number | null>(null);
  
  const quadrants = [
    {
      title: "Urgent & Important",
      action: "À faire immédiatement",
      color: "bg-red-500",
      examples: ["Crises", "Deadlines", "Problèmes urgents"],
      advice: "Max 10% de vos tâches"
    },
    {
      title: "Important & Non-Urgent",
      action: "Planifier",
      color: "bg-green-500",
      examples: ["Apprentissage", "Relations", "Prévention"],
      advice: "Votre zone de valeur"
    },
    {
      title: "Urgent & Non-Important",
      action: "Déléguer",
      color: "bg-yellow-500",
      examples: ["Interruptions", "Emails", "Réunions"],
      advice: "Minimiser ou déléguer"
    },
    {
      title: "Non-Urgent & Non-Important",
      action: "Éliminer",
      color: "bg-gray-500",
      examples: ["Distractions", "Activités futiles"],
      advice: "À éviter"
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Matrice d'Eisenhower</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {quadrants.map((quadrant, index) => (
          <button
            key={index}
            onClick={() => setSelectedQuadrant(index)}
            className={`p-4 rounded-lg transition-all ${
              selectedQuadrant === index ? 'ring-2 ring-skin-accent' : ''
            } bg-skin-fill hover:bg-skin-card-muted`}
          >
            <div className={`w-full h-2 ${quadrant.color} rounded-full mb-2`}></div>
            <h4 className="font-bold text-sm mb-1">{quadrant.title}</h4>
            <p className="text-xs opacity-80">{quadrant.action}</p>
          </button>
        ))}
      </div>
      {selectedQuadrant !== null && (
        <div className="bg-skin-fill p-4 rounded-lg">
          <h4 className="font-bold mb-2">{quadrants[selectedQuadrant].title}</h4>
          <p className="text-sm mb-2 text-skin-accent">{quadrants[selectedQuadrant].advice}</p>
          <div className="text-xs">
            <p className="font-medium mb-1">Exemples :</p>
            <ul className="list-disc list-inside opacity-80">
              {quadrants[selectedQuadrant].examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export const VAKogLearning = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  
  const channels = [
    {
      letter: "V",
      name: "Visuel",
      icon: "👁️",
      description: "J'apprends en voyant",
      tips: ["Utilisez des schémas", "Créez des mind maps", "Surlignez en couleur"]
    },
    {
      letter: "A",
      name: "Auditif",
      icon: "👂",
      description: "J'apprends en écoutant",
      tips: ["Écoutez des podcasts", "Répétez à voix haute", "Enregistrez-vous"]
    },
    {
      letter: "K",
      name: "Kinesthésique",
      icon: "✋",
      description: "J'apprends en faisant",
      tips: ["Manipulez des objets", "Apprenez en marchant", "Prenez des notes à la main"]
    },
    {
      letter: "O",
      name: "Olfactif",
      icon: "👃",
      description: "Les odeurs ancrent les souvenirs",
      tips: ["Associez des parfums", "Étudiez dans différents lieux", "Utilisez des huiles essentielles"]
    },
    {
      letter: "G",
      name: "Gustatif",
      icon: "👅",
      description: "Le goût renforce la mémoire",
      tips: ["Mâchez du chewing-gum", "Associez des saveurs", "Buvez la même boisson"]
    }
  ];

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-skin-accent">Le Modèle VAKog</h3>
      <div className="flex justify-around mb-4">
        {channels.map((channel, index) => (
          <button
            key={index}
            onClick={() => setActiveChannel(index)}
            className={`p-3 rounded-lg transition-all ${
              activeChannel === index 
                ? 'bg-skin-accent text-skin-inverted' 
                : 'bg-skin-fill hover:bg-skin-card-muted'
            }`}
          >
            <div className="text-2xl mb-1">{channel.icon}</div>
            <div className="text-xs font-bold">{channel.letter}</div>
          </button>
        ))}
      </div>
      <div className="bg-skin-fill p-4 rounded-lg">
        <h4 className="font-bold mb-2">{channels[activeChannel].name}</h4>
        <p className="text-sm mb-3 italic">{channels[activeChannel].description}</p>
        <div className="text-sm">
          <p className="font-medium mb-1">Conseils :</p>
          <ul className="list-disc list-inside opacity-80">
            {channels[activeChannel].tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};