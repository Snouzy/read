import { useState, useEffect } from "react";

export const KnowledgeVirtues = () => {
  const [activeVirtue, setActiveVirtue] = useState(0);
  const [discoveredVirtues, setDiscoveredVirtues] = useState(new Set([0]));
  const [sparkles, setSparkles] = useState<{id: number, x: number, y: number}[]>([]);
  
  const virtues = [
    { title: "Élève le niveau de conscience", icon: "🧠", description: "La connaissance nous permet de voir au-delà des apparences", color: "from-purple-400 to-blue-500" },
    { title: "Rend plus humble", icon: "🙏", description: "Plus on apprend, plus on réalise l'étendue de notre ignorance", color: "from-green-400 to-teal-500" },
    { title: "Booste la confiance", icon: "💪", description: "Maîtriser un sujet nous rend légitimes et confiants", color: "from-orange-400 to-red-500" },
    { title: "Aide à décider", icon: "🎯", description: "Les bonnes décisions naissent de la connaissance", color: "from-blue-400 to-indigo-500" },
    { title: "Notre dernier rempart", icon: "🛡️", description: "Quand on perd tout, la connaissance reste", color: "from-gray-400 to-slate-500" },
    { title: "Peut changer une vie", icon: "🚀", description: "Découvrir sa passion peut tout transformer", color: "from-pink-400 to-rose-500" },
    { title: "Antistress naturel", icon: "😌", description: "Comprendre apaise et relativise", color: "from-emerald-400 to-green-500" },
    { title: "Source de joie", icon: "✨", description: "Apprendre stimule notre curiosité naturelle", color: "from-yellow-400 to-amber-500" },
    { title: "Rend heureux", icon: "😊", description: "Progresser chaque jour procure satisfaction", color: "from-cyan-400 to-blue-500" },
    { title: "Atteindre ses objectifs", icon: "🎖️", description: "La connaissance ouvre toutes les portes", color: "from-violet-400 to-purple-500" }
  ];

  const handleVirtueClick = (index: number) => {
    setActiveVirtue(index);
    setDiscoveredVirtues(prev => new Set([...prev, index]));
    
    // Add sparkle effect
    const newSparkle = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100
    };
    setSparkles(prev => [...prev, newSparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg relative overflow-hidden">
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-ping text-yellow-400 text-lg pointer-events-none"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
        >
          ✨
        </div>
      ))}
      
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Les 10 Vertus de la Connaissance</h3>
        <div className="flex items-center gap-1 bg-skin-accent/10 px-2 py-1 rounded-full">
          <span className="text-xs">🏆</span>
          <span className="text-xs font-medium">{discoveredVirtues.size}/10 découvertes</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {virtues.map((virtue, index) => {
          const isDiscovered = discoveredVirtues.has(index);
          const isActive = activeVirtue === index;
          
          return (
            <button
              key={index}
              onClick={() => handleVirtueClick(index)}
              className={`group relative p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isActive 
                  ? 'bg-skin-accent text-skin-inverted shadow-lg' 
                  : 'bg-skin-fill hover:bg-skin-card-muted'
              } ${isDiscovered ? 'ring-2 ring-green-400/50' : ''}`}
            >
              {isDiscovered && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-[8px]">✓</span>
                </div>
              )}
              
              <div className={`text-2xl mb-1 transition-transform duration-300 ${
                isActive ? 'animate-bounce' : 'group-hover:scale-110'
              }`}>
                {virtue.icon}
              </div>
              <div className="text-sm font-medium">{virtue.title}</div>
              
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-br ${virtue.color} opacity-20 rounded-lg`}></div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className={`p-4 bg-gradient-to-br ${virtues[activeVirtue].color} bg-opacity-10 rounded-lg transition-all duration-500`}>
        <div className="flex items-start gap-3">
          <div className="text-2xl animate-pulse">{virtues[activeVirtue].icon}</div>
          <div>
            <h4 className="font-bold text-lg mb-1">{virtues[activeVirtue].title}</h4>
            <p className="text-skin-base">{virtues[activeVirtue].description}</p>
          </div>
        </div>
        
        {discoveredVirtues.size === 10 && (
          <div className="mt-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-center animate-pulse">
            <span className="text-sm font-medium">🎉 Félicitations ! Vous avez découvert toutes les vertus ! 🎉</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const LearningCycle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [isAnimating, setIsAnimating] = useState(false);
  
  const steps = [
    {
      title: "Incompétence Inconsciente",
      description: "On ne sait pas qu'on ne sait pas",
      example: "Je ne savais pas que la lecture rapide existait",
      color: "bg-red-500",
      icon: "❓",
      tip: "La première étape vers la sagesse est de reconnaître son ignorance"
    },
    {
      title: "Incompétence Consciente", 
      description: "On sait qu'on ne sait pas",
      example: "Je sais que la lecture rapide existe mais je ne la maîtrise pas",
      color: "bg-orange-500",
      icon: "😓",
      tip: "C'est ici que commence la vraie motivation d'apprendre"
    },
    {
      title: "Compétence Consciente",
      description: "On sait qu'on sait",
      example: "Je pratique la lecture rapide en y pensant",
      color: "bg-yellow-500",
      icon: "🤔",
      tip: "Vous progressez, mais cela demande encore de la concentration"
    },
    {
      title: "Compétence Inconsciente",
      description: "On ne sait plus qu'on sait",
      example: "Je lis rapidement sans y penser, c'est naturel",
      color: "bg-green-500",
      icon: "🚀",
      tip: "Félicitations ! La compétence fait maintenant partie de vous"
    }
  ];

  const handleStepClick = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(index);
    setCompletedSteps(prev => new Set([...prev, index]));
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getProgressPercentage = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Le Cycle de l'Apprentissage</h3>
        <div className="flex items-center gap-2 bg-skin-accent/10 px-3 py-1 rounded-full">
          <span className="text-xs">📈</span>
          <span className="text-xs font-medium">{Math.round(getProgressPercentage())}% maîtrisé</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mb-6 bg-skin-fill rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-1000 ease-out"
          style={{ width: `${getProgressPercentage()}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mb-6">
        {steps.map((step, index) => {
          const isActive = currentStep === index;
          const isCompleted = completedSteps.has(index);
          
          return (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`group flex-1 mx-1 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isActive ? 'ring-2 ring-skin-accent shadow-lg' : 'hover:shadow-md'
              } ${isCompleted ? 'bg-green-100 dark:bg-green-900/30' : 'bg-skin-fill'}`}
            >
              <div className={`relative h-3 ${step.color} rounded-full mb-2 overflow-hidden`}>
                {isCompleted && (
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                )}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                )}
              </div>
              
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className={`text-lg transition-transform duration-300 ${
                  isActive ? 'animate-bounce' : 'group-hover:scale-110'
                }`}>
                  {step.icon}
                </span>
              </div>
              
              <div className="text-xs font-medium">Étape {index + 1}</div>
              
              {isCompleted && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-[8px]">✓</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className={`bg-gradient-to-br ${steps[currentStep].color.replace('bg-', 'from-')} to-transparent bg-opacity-10 p-4 rounded-lg transition-all duration-500 ${
        isAnimating ? 'scale-105' : ''
      }`}>
        <div className="flex items-start gap-3">
          <div className="text-3xl animate-pulse">{steps[currentStep].icon}</div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-2">{steps[currentStep].title}</h4>
            <p className="text-sm mb-2 italic">{steps[currentStep].description}</p>
            <p className="text-sm text-skin-base opacity-80 mb-3">
              <span className="font-medium">Exemple :</span> {steps[currentStep].example}
            </p>
            <div className="p-2 bg-skin-accent/10 rounded-lg">
              <p className="text-xs italic">💡 {steps[currentStep].tip}</p>
            </div>
          </div>
        </div>
      </div>
      
      {completedSteps.size === 4 && (
        <div className="mt-4 p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg text-center animate-pulse">
          <span className="font-medium">🎉 Cycle complet ! Vous maîtrisez le processus d'apprentissage ! 🎉</span>
        </div>
      )}
    </div>
  );
};

export const DalePyramid = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  
  const levels = [
    { 
      percentage: 90, 
      activity: "Faire et dire", 
      color: "bg-green-500",
      icon: "🗣️",
      description: "Enseigner aux autres, appliquer immédiatement",
      tips: ["Expliquer à quelqu'un", "Créer un projet", "Faire une présentation"]
    },
    { 
      percentage: 70, 
      activity: "Dire", 
      color: "bg-yellow-500",
      icon: "💬",
      description: "Participer à une discussion, poser des questions",
      tips: ["Débattre du sujet", "Participer à un groupe", "Poser des questions"]
    },
    { 
      percentage: 50, 
      activity: "Voir et entendre", 
      color: "bg-orange-500",
      icon: "👁️‍🗨️",
      description: "Assister à une démonstration, regarder une vidéo",
      tips: ["Regarder des tutoriels", "Assister à des conférences", "Observer des experts"]
    },
    { 
      percentage: 30, 
      activity: "Voir", 
      color: "bg-red-400",
      icon: "👀",
      description: "Regarder des images, diagrammes, schémas",
      tips: ["Utiliser des infographies", "Créer des mind maps", "Visualiser les concepts"]
    },
    { 
      percentage: 20, 
      activity: "Entendre", 
      color: "bg-red-500",
      icon: "👂",
      description: "Écouter une conférence, un podcast",
      tips: ["Écouter des podcasts", "Assister à des cours magistraux", "Écouter de la musique"]
    },
    { 
      percentage: 10, 
      activity: "Lire", 
      color: "bg-red-600",
      icon: "📖",
      description: "Lecture passive de textes",
      tips: ["Lire activement", "Prendre des notes", "Reformuler avec ses mots"]
    }
  ];

  // Animate bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(levels.map(l => l.percentage));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getBestPractice = (percentage: number) => {
    if (percentage >= 70) return "🏆 Excellent choix !";
    if (percentage >= 50) return "👍 Bonne méthode !";
    if (percentage >= 30) return "⚠️ Méthode passive";
    return "❌ Peu efficace seul";
  };

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Pyramide de Dale - Taux de Rétention</h3>
        <div className="text-sm bg-skin-accent/10 px-2 py-1 rounded-full">
          🧠 Science de l'apprentissage
        </div>
      </div>
      
      <div className="space-y-2">
        {levels.map((level, index) => {
          const isHovered = hoveredLevel === index;
          const isSelected = selectedLevel === index;
          const animatedValue = animatedValues[index] || 0;
          
          return (
            <div key={index} className="group">
              <button
                className="w-full flex items-center cursor-pointer"
                onMouseEnter={() => setHoveredLevel(index)}
                onMouseLeave={() => setHoveredLevel(null)}
                onClick={() => setSelectedLevel(isSelected ? null : index)}
              >
                <div className="w-16 text-right mr-3 font-bold text-lg">
                  {level.percentage}%
                </div>
                
                <div className="flex-1 bg-skin-fill rounded-lg p-4 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Animated background bar */}
                  <div 
                    className={`absolute inset-0 ${level.color} transition-all duration-1000 ease-out ${
                      isHovered ? 'opacity-30' : 'opacity-20'
                    }`}
                    style={{ width: `${animatedValue}%` }}
                  ></div>
                  
                  {/* Sparkle effect on hover */}
                  {isHovered && (
                    <div className="absolute top-1 right-1 animate-pulse">
                      ✨
                    </div>
                  )}
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl transition-transform duration-300 ${
                        isHovered ? 'scale-125' : ''
                      }`}>
                        {level.icon}
                      </span>
                      <span className="font-medium">{level.activity}</span>
                    </div>
                    
                    <div className="text-sm font-medium">
                      {getBestPractice(level.percentage)}
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Expanded details */}
              {isSelected && (
                <div className="mt-2 ml-19 mr-0 p-4 bg-skin-fill rounded-lg border-l-4 border-skin-accent animate-slideDown">
                  <p className="text-sm mb-3 italic">{level.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-medium mb-1">💡 Comment optimiser :</p>
                    <ul className="text-xs list-disc list-inside space-y-1 opacity-80">
                      {level.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Progress visualization */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Efficacité:</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${level.color} transition-all duration-500`}
                        style={{ width: `${level.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold">{level.percentage}%</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
        <div className="flex items-start gap-2">
          <span className="text-lg">🎯</span>
          <div>
            <p className="text-sm font-medium mb-1">Conseil d'expert :</p>
            <p className="text-xs opacity-80">
              Combinez plusieurs méthodes ! Lisez d'abord (10%), puis regardez une vidéo (30%), 
              discutez-en avec quelqu'un (70%), et enfin enseignez-le à d'autres (90%).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MultipleIntelligences = () => {
  const [selectedIntelligence, setSelectedIntelligence] = useState<number | null>(null);
  const [personalProfile, setPersonalProfile] = useState<number[]>([]);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  
  const intelligences = [
    {
      name: "Verbo-linguistique",
      icon: "📝",
      description: "Maîtrise du langage, écriture, lecture",
      tip: "Écrivez des résumés, racontez ce que vous apprenez",
      color: "from-blue-400 to-indigo-500",
      questions: [
        "J'aime jouer avec les mots et créer des jeux de mots",
        "J'apprends mieux en lisant et en écrivant",
        "Je me souviens facilement des citations et proverbes"
      ]
    },
    {
      name: "Logico-mathématique",
      icon: "🔢",
      description: "Résolution de problèmes, analyse",
      tip: "Créez des tableaux et des structures logiques",
      color: "from-green-400 to-emerald-500",
      questions: [
        "J'aime résoudre des problèmes logiques et des énigmes",
        "Je préfère les explications avec des chiffres et des données",
        "Je remarque facilement les patterns et les séquences"
      ]
    },
    {
      name: "Visuo-spatiale",
      icon: "🎨",
      description: "Représentation mentale, visualisation",
      tip: "Utilisez des schémas, cartes mentales, dessins",
      color: "from-purple-400 to-pink-500",
      questions: [
        "Je visualise facilement les concepts dans ma tête",
        "J'aime dessiner et créer des diagrammes",
        "Je me repère bien dans l'espace et avec les cartes"
      ]
    },
    {
      name: "Kinesthésique",
      icon: "🏃",
      description: "Apprentissage par le mouvement",
      tip: "Apprenez en marchant, manipulez des objets",
      color: "from-orange-400 to-red-500",
      questions: [
        "J'apprends mieux en bougeant et en touchant",
        "J'ai besoin de faire des pauses pour me lever",
        "Je comprends mieux en manipulant des objets"
      ]
    },
    {
      name: "Musicale-rythmique",
      icon: "🎵",
      description: "Sensibilité aux sons et rythmes",
      tip: "Créez des rimes, apprenez en chantant",
      color: "from-yellow-400 to-orange-500",
      questions: [
        "J'aime apprendre avec de la musique de fond",
        "Je retiens mieux avec des rythmes et des mélodies",
        "Je remarque facilement les sons et les bruits"
      ]
    },
    {
      name: "Interpersonnelle",
      icon: "👥",
      description: "Interaction et empathie",
      tip: "Apprenez en groupe, enseignez aux autres",
      color: "from-teal-400 to-cyan-500",
      questions: [
        "J'apprends mieux en discutant avec d'autres",
        "J'aime travailler en équipe",
        "Je comprends facilement les émotions des autres"
      ]
    },
    {
      name: "Intrapersonnelle",
      icon: "🧘",
      description: "Connaissance de soi, introspection",
      tip: "Réfléchissez seul, tenez un journal",
      color: "from-indigo-400 to-purple-500",
      questions: [
        "Je préfère étudier seul(e) et en silence",
        "J'aime réfléchir et analyser mes pensées",
        "Je me connais bien et comprends mes motivations"
      ]
    },
    {
      name: "Naturaliste",
      icon: "🌿",
      description: "Sensibilité à l'environnement",
      tip: "Étudiez dehors, connectez-vous à la nature",
      color: "from-green-400 to-teal-500",
      questions: [
        "J'aime étudier dans la nature",
        "Je remarque facilement les détails environnementaux",
        "Je me sens plus créatif en plein air"
      ]
    },
    {
      name: "Existentielle",
      icon: "🤔",
      description: "Questionnement du sens",
      tip: "Donnez du sens à vos apprentissages",
      color: "from-gray-400 to-slate-500",
      questions: [
        "J'ai besoin de comprendre le 'pourquoi' de ce que j'apprends",
        "Je m'interroge souvent sur le sens des choses",
        "Je connecte facilement les apprentissages à la vie"
      ]
    }
  ];

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuestion(0);
    setQuizAnswers([]);
  };

  const answerQuestion = (rating: number) => {
    const newAnswers = [...quizAnswers, rating];
    setQuizAnswers(newAnswers);
    
    if (currentQuestion < intelligences.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz terminé, calculer le profil
      const profile = newAnswers.map((score, index) => {
        const intelligenceQuestions = intelligences[index].questions;
        return Math.round((score / intelligenceQuestions.length) * 5);
      });
      setPersonalProfile(profile);
      setQuizMode(false);
    }
  };

  const resetQuiz = () => {
    setQuizMode(false);
    setPersonalProfile([]);
    setQuizAnswers([]);
    setCurrentQuestion(0);
  };

  if (quizMode) {
    const currentIntel = intelligences[currentQuestion];
    return (
      <div className="my-8 p-6 bg-skin-card rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-skin-accent">Quiz des Intelligences</h3>
          <div className="flex items-center gap-2 bg-skin-accent/10 px-2 py-1 rounded-full">
            <span className="text-xs">{currentQuestion + 1}/{intelligences.length}</span>
          </div>
        </div>
        
        <div className="mb-4 bg-skin-fill rounded-full h-2">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / intelligences.length) * 100}%` }}
          ></div>
        </div>
        
        <div className={`p-6 bg-gradient-to-br ${currentIntel.color} bg-opacity-10 rounded-lg mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{currentIntel.icon}</span>
            <h4 className="text-lg font-bold">{currentIntel.name}</h4>
          </div>
          
          <div className="space-y-3">
            {currentIntel.questions.map((question, qIndex) => (
              <div key={qIndex} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                <p className="text-sm mb-3">{question}</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => answerQuestion(rating)}
                      className="flex-1 p-2 bg-skin-fill hover:bg-skin-accent hover:text-skin-inverted rounded transition-all"
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs mt-1 opacity-60">
                  <span>Pas du tout</span>
                  <span>Tout à fait</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Les 9 Intelligences de Gardner</h3>
        {personalProfile.length === 0 ? (
          <button
            onClick={startQuiz}
            className="px-4 py-2 bg-skin-accent text-skin-inverted rounded-lg hover:bg-opacity-90 transition-all"
          >
            🧪 Découvrir mon profil
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            className="px-3 py-1 bg-skin-accent/20 text-skin-accent rounded-lg hover:bg-skin-accent/30 transition-all text-sm"
          >
            🔄 Refaire le test
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        {intelligences.map((intel, index) => {
          const isSelected = selectedIntelligence === index;
          const profileScore = personalProfile[index] || 0;
          
          return (
            <button
              key={index}
              onClick={() => setSelectedIntelligence(isSelected ? null : index)}
              className={`group relative p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isSelected 
                  ? 'bg-skin-accent text-skin-inverted shadow-lg' 
                  : 'bg-skin-fill hover:bg-skin-card-muted'
              }`}
            >
              {profileScore > 0 && (
                <div className="absolute -top-1 -right-1 flex">
                  {Array.from({ length: profileScore }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">⭐</span>
                  ))}
                </div>
              )}
              
              <div className={`text-2xl mb-1 transition-transform duration-300 ${
                isSelected ? 'animate-bounce' : 'group-hover:scale-110'
              }`}>
                {intel.icon}
              </div>
              <div className="text-xs font-medium">{intel.name}</div>
              
              {profileScore > 0 && (
                <div className={`absolute inset-0 bg-gradient-to-br ${intel.color} opacity-20 rounded-lg`}></div>
              )}
            </button>
          );
        })}
      </div>
      
      {personalProfile.length > 0 && (
        <div className="mb-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <span>🎯</span>
            Votre profil d'intelligences multiples
          </h4>
          <div className="text-sm">
            <strong>Intelligences dominantes :</strong>{' '}
            {intelligences
              .map((intel, index) => ({ ...intel, score: personalProfile[index], index }))
              .filter(intel => intel.score >= 4)
              .map(intel => intel.name)
              .join(', ') || 'Profil équilibré'}
          </div>
        </div>
      )}
      
      {selectedIntelligence !== null && (
        <div className={`bg-gradient-to-br ${intelligences[selectedIntelligence].color} bg-opacity-10 p-4 rounded-lg transition-all duration-500`}>
          <div className="flex items-start gap-3">
            <div className="text-2xl animate-pulse">{intelligences[selectedIntelligence].icon}</div>
            <div>
              <h4 className="font-bold mb-2">{intelligences[selectedIntelligence].name}</h4>
              <p className="text-sm mb-2">{intelligences[selectedIntelligence].description}</p>
              <p className="text-sm italic text-skin-accent">
                💡 {intelligences[selectedIntelligence].tip}
              </p>
              {personalProfile[selectedIntelligence] > 0 && (
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-xs">Votre niveau :</span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`text-sm ${
                      i < personalProfile[selectedIntelligence] ? 'text-yellow-400' : 'text-gray-300'
                    }`}>
                      ⭐
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const BrainWaves = () => {
  const [activeWave, setActiveWave] = useState(1);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [breathingCycle, setBreathingCycle] = useState(0);
  
  const waves = [
    {
      name: "Beta",
      frequency: "14-30 Hz",
      state: "Éveil actif, stress",
      color: "bg-red-500",
      gradientColor: "from-red-400 to-red-600",
      characteristics: "Rapides et irrégulières",
      activities: ["Concentration active", "Résolution de problèmes", "Stress"],
      icon: "⚡",
      wavePattern: [3, 6, 2, 8, 4, 7, 3, 9, 1, 5]
    },
    {
      name: "Alpha",
      frequency: "9-13 Hz",
      state: "Relaxation, méditation légère",
      color: "bg-green-500",
      gradientColor: "from-green-400 to-green-600",
      characteristics: "Rythmées et régulières",
      activities: ["Apprentissage optimal", "Créativité", "Relaxation"],
      icon: "🧘",
      wavePattern: [4, 7, 5, 6, 5, 7, 4, 6, 5, 7]
    },
    {
      name: "Theta",
      frequency: "4-7 Hz",
      state: "Méditation profonde, hypnose",
      color: "bg-blue-500",
      gradientColor: "from-blue-400 to-blue-600",
      characteristics: "Lentes et amples",
      activities: ["Méditation profonde", "Inspiration", "Mémoire"],
      icon: "🌊",
      wavePattern: [2, 4, 6, 8, 6, 4, 2, 4, 6, 8]
    },
    {
      name: "Delta",
      frequency: "0.5-3 Hz",
      state: "Sommeil profond",
      color: "bg-purple-500",
      gradientColor: "from-purple-400 to-purple-600",
      characteristics: "Très lentes et très amples",
      activities: ["Sommeil réparateur", "Guérison", "Régénération"],
      icon: "😴",
      wavePattern: [1, 2, 3, 4, 3, 2, 1, 2, 3, 4]
    }
  ];

  const startVisualization = () => {
    setIsVisualizing(true);
    // Start breathing animation for Alpha state
    if (activeWave === 1) {
      const interval = setInterval(() => {
        setBreathingCycle(prev => (prev + 1) % 4);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        setIsVisualizing(false);
        setBreathingCycle(0);
      }, 10000);
    } else {
      setTimeout(() => setIsVisualizing(false), 5000);
    }
  };

  const WaveVisualization = ({ wave, isActive }: { wave: typeof waves[0], isActive: boolean }) => {
    if (!isActive || !isVisualizing) return null;
    
    return (
      <div className="mt-4 p-4 bg-black/10 dark:bg-white/5 rounded-lg">
        <div className="flex items-center justify-center h-20 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 80">
            <path
              d={`M 0 40 ${wave.wavePattern.map((point: number, index: number) => 
                `L ${index * 40} ${40 + (point * 3)}`
              ).join(' ')}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className={`${wave.color.replace('bg-', 'text-')} animate-pulse`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-4 h-4 rounded-full ${wave.color} animate-ping`}></div>
          </div>
        </div>
        
        {activeWave === 1 && (
          <div className="mt-3 text-center">
            <div className={`inline-block w-16 h-16 rounded-full border-4 border-green-400 transition-all duration-1000 ${
              breathingCycle % 2 === 0 ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
            }`}>
              <div className="flex items-center justify-center h-full text-sm">
                {breathingCycle % 2 === 0 ? 'Expire' : 'Inspire'}
              </div>
            </div>
            <p className="text-xs mt-2 opacity-80">Respirez avec le rythme pour atteindre l'état Alpha</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Les Ondes Cérébrales</h3>
        <button
          onClick={startVisualization}
          disabled={isVisualizing}
          className={`px-3 py-1 rounded-lg transition-all text-sm ${
            isVisualizing 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-skin-accent text-skin-inverted hover:bg-opacity-90'
          }`}
        >
          {isVisualizing ? '🧠 Visualisation...' : '🧠 Visualiser'}
        </button>
      </div>
      
      <div className="space-y-3">
        {waves.map((wave, index) => {
          const isActive = activeWave === index;
          
          return (
            <div key={index}>
              <button
                onClick={() => setActiveWave(index)}
                className={`w-full p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                  isActive ? 'ring-2 ring-skin-accent shadow-lg' : ''
                } bg-skin-fill hover:bg-skin-card-muted`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className={`w-4 h-4 rounded-full ${wave.color} animate-pulse`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs">{wave.icon}</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold flex items-center gap-2">
                        {wave.name}
                        {isActive && isVisualizing && (
                          <span className="text-xs bg-green-400 text-white px-1 rounded animate-pulse">ACTIF</span>
                        )}
                      </div>
                      <div className="text-sm opacity-80">{wave.frequency}</div>
                    </div>
                  </div>
                  <div className="text-sm text-right">
                    <div>{wave.state}</div>
                    <div className="text-xs opacity-60">{wave.characteristics}</div>
                  </div>
                </div>
              </button>
              
              <WaveVisualization wave={wave} isActive={isActive} />
              
              {isActive && (
                <div className={`mt-2 p-4 bg-gradient-to-br ${wave.gradientColor} bg-opacity-10 rounded-lg transition-all duration-500`}>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl animate-pulse">{wave.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2">{wave.name} - {wave.frequency}</h4>
                      <p className="text-sm mb-2 italic">{wave.state}</p>
                      
                      <div className="mb-3">
                        <p className="text-xs font-medium mb-1">🧠 Activités optimales :</p>
                        <div className="flex flex-wrap gap-1">
                          {wave.activities.map((activity, i) => (
                            <span key={i} className="text-xs bg-skin-accent/20 px-2 py-1 rounded-full">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {activeWave === 1 && (
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <p className="text-xs">
                            💡 <strong>Astuce :</strong> Pour atteindre l'état Alpha, pratiquez la respiration 
                            profonde et la relaxation progressive.
                          </p>
                        </div>
                      )}
                      
                      {activeWave === 0 && (
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <p className="text-xs">
                            ⚠️ <strong>Attention :</strong> Trop d'ondes Beta peut créer du stress. 
                            Prenez des pauses régulières.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
        <div className="flex items-start gap-2">
          <span className="text-lg">🎯</span>
          <div>
            <p className="text-sm font-medium mb-1">Optimiser votre état cérébral :</p>
            <p className="text-xs opacity-80">
              L'état Alpha (9-13 Hz) est idéal pour l'apprentissage. Utilisez la méditation, 
              la respiration profonde ou la musique relaxante pour l'atteindre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CognitiveBiases = () => {
  const [expandedBias, setExpandedBias] = useState<number | null>(null);
  const [discoveredBiases, setDiscoveredBiases] = useState(new Set<number>());
  const [challengeMode, setChallengeMode] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);
  const [challengeAnswers, setChallengeAnswers] = useState<boolean[]>([]);
  
  const biases = [
    {
      name: "Biais de confirmation",
      icon: "✅",
      description: "Ne retenir que ce qui confirme nos croyances",
      example: "Ignorer les avis contraires sur un sujet",
      challenge: {
        scenario: "Vous lisez un article qui contredit votre opinion sur un sujet important. Que faites-vous ?",
        options: [
          "Je cherche d'autres sources pour confirmer ma position",
          "Je lis attentivement et considère ces nouveaux arguments"
        ],
        correctAnswer: 1,
        explanation: "Le biais de confirmation nous pousse à ignorer les informations qui contredisent nos croyances."
      }
    },
    {
      name: "Biais de croyance",
      icon: "💭",
      description: "Penser qu'on sait déjà tout",
      example: "Ne pas écouter car on pense connaître la réponse",
      challenge: {
        scenario: "Un collègue commence à expliquer un concept que vous pensez maîtriser. Que faites-vous ?",
        options: [
          "Je l'interromps car je connais déjà",
          "J'écoute attentivement, je pourrais apprendre quelque chose"
        ],
        correctAnswer: 1,
        explanation: "Le biais de croyance nous fait penser qu'on sait déjà tout et nous empêche d'apprendre."
      }
    },
    {
      name: "Biais négatif",
      icon: "😔",
      description: "Accorder plus de poids au négatif",
      example: "Se souvenir plus des échecs que des réussites",
      challenge: {
        scenario: "Après une présentation, vous recevez 9 commentaires positifs et 1 négatif. Sur quoi vous focalisez-vous ?",
        options: [
          "Sur le commentaire négatif, c'est le plus important",
          "Je considère l'ensemble des retours de manière équilibrée"
        ],
        correctAnswer: 1,
        explanation: "Notre cerveau accorde naturellement plus d'importance aux informations négatives."
      }
    },
    {
      name: "Biais de halo",
      icon: "😇",
      description: "Juger selon la première impression",
      example: "Penser qu'une personne belle est forcément gentille",
      challenge: {
        scenario: "Vous rencontrez quelqu'un de très bien habillé et élégant. Que pensez-vous ?",
        options: [
          "Cette personne doit être compétente et fiable",
          "L'apparence ne dit rien sur la personnalité ou les compétences"
        ],
        correctAnswer: 1,
        explanation: "L'effet de halo nous fait généraliser à partir d'une seule caractéristique positive."
      }
    },
    {
      name: "Biais de conformité",
      icon: "👥",
      description: "Suivre la majorité",
      example: "Faire comme les autres pour être accepté",
      challenge: {
        scenario: "En réunion, tout le monde semble d'accord avec une décision que vous trouvez discutable. Que faites-vous ?",
        options: [
          "Je me tais pour ne pas créer de conflit",
          "J'exprime respectueusement mes préoccupations"
        ],
        correctAnswer: 1,
        explanation: "Le conformisme peut nous empêcher de partager des opinions importantes."
      }
    },
    {
      name: "Biais d'autocomplaisance",
      icon: "🏆",
      description: "S'attribuer les succès, rejeter les échecs",
      example: "C'est grâce à moi si ça marche, leur faute si ça échoue",
      challenge: {
        scenario: "Votre équipe échoue sur un projet important. Quelle est votre première réaction ?",
        options: [
          "C'est la faute des autres, j'ai fait ma part",
          "Je réfléchis à ma contribution à cet échec"
        ],
        correctAnswer: 1,
        explanation: "Nous tendons à attribuer nos succès à nos qualités et nos échecs aux circonstances."
      }
    },
    {
      name: "Biais d'omission",
      icon: "🚫",
      description: "Préférer ne rien faire",
      example: "Ne pas essayer par peur d'échouer",
      challenge: {
        scenario: "Une opportunité intéressante se présente mais avec des risques. Que faites-vous ?",
        options: [
          "Je ne fais rien, c'est plus sûr",
          "J'évalue les risques et bénéfices objectivement"
        ],
        correctAnswer: 1,
        explanation: "Le biais d'omission nous fait préférer l'inaction même quand l'action serait bénéfique."
      }
    },
    {
      name: "Effet Dunning-Kruger",
      icon: "📈",
      description: "Les moins compétents se surestiment",
      example: "Penser tout savoir après avoir lu un article",
      challenge: {
        scenario: "Après avoir suivi une formation de 2 heures, vous vous sentez expert. Que pensez-vous ?",
        options: [
          "Je maîtrise maintenant ce domaine",
          "C'est un bon début, mais il me reste beaucoup à apprendre"
        ],
        correctAnswer: 1,
        explanation: "Plus on en sait peu, plus on pense en savoir beaucoup."
      }
    }
  ];

  const handleBiasClick = (index: number) => {
    setExpandedBias(expandedBias === index ? null : index);
    setDiscoveredBiases(prev => new Set([...prev, index]));
  };

  const startChallenge = () => {
    setChallengeMode(true);
    setCurrentChallenge(0);
    setChallengeAnswers([]);
    setScore(0);
  };

  const answerChallenge = (answerIndex: number) => {
    const isCorrect = answerIndex === biases[currentChallenge].challenge.correctAnswer;
    const newAnswers = [...challengeAnswers, isCorrect];
    setChallengeAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(() => {
      if (currentChallenge < biases.length - 1) {
        setCurrentChallenge(currentChallenge + 1);
      } else {
        setChallengeMode(false);
      }
    }, 2000);
  };

  const resetChallenge = () => {
    setChallengeMode(false);
    setCurrentChallenge(0);
    setChallengeAnswers([]);
    setScore(0);
  };

  if (challengeMode) {
    const currentBias = biases[currentChallenge];
    const hasAnswered = challengeAnswers.length > currentChallenge;
    const isCorrect = hasAnswered && challengeAnswers[currentChallenge];
    
    return (
      <div className="my-8 p-6 bg-skin-card rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-skin-accent">Challenge Anti-Biais</h3>
          <div className="flex items-center gap-2">
            <div className="bg-skin-accent/10 px-2 py-1 rounded-full text-xs">
              {currentChallenge + 1}/{biases.length}
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
              🏆 {score} points
            </div>
          </div>
        </div>
        
        <div className="mb-4 bg-skin-fill rounded-full h-2">
          <div 
            className="h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentChallenge + 1) / biases.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{currentBias.icon}</span>
            <h4 className="text-lg font-bold">{currentBias.name}</h4>
          </div>
          
          <div className="mb-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
            <p className="text-sm font-medium mb-2">Situation :</p>
            <p className="text-sm">{currentBias.challenge.scenario}</p>
          </div>
          
          {!hasAnswered ? (
            <div className="space-y-2">
              {currentBias.challenge.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => answerChallenge(index)}
                  className="w-full p-3 text-left bg-skin-fill hover:bg-skin-accent hover:text-skin-inverted rounded-lg transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
                <span className="font-bold">{isCorrect ? 'Correct !' : 'Incorrect'}</span>
                {isCorrect && <span className="text-sm">+1 point</span>}
              </div>
              <p className="text-sm">{currentBias.challenge.explanation}</p>
            </div>
          )}
        </div>
        
        {currentChallenge === biases.length - 1 && hasAnswered && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg text-center">
            <h4 className="font-bold mb-2">Challenge terminé ! 🎉</h4>
            <p>Score final : {score}/{biases.length}</p>
            <p className="text-sm mt-1">
              {score >= 6 ? 'Excellent ! Vous maîtrisez bien les biais cognitifs !' :
               score >= 4 ? 'Bien joué ! Continuez à vous améliorer.' :
               'Pas mal ! Il y a encore du travail à faire.'}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Les Biais Cognitifs à Dépasser</h3>
        <div className="flex items-center gap-2">
          {challengeAnswers.length > 0 && (
            <div className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
              🏆 Dernier score : {score}/{biases.length}
            </div>
          )}
          <button
            onClick={challengeAnswers.length > 0 ? resetChallenge : startChallenge}
            className="px-4 py-2 bg-skin-accent text-skin-inverted rounded-lg hover:bg-opacity-90 transition-all"
          >
            {challengeAnswers.length > 0 ? '🔄 Nouveau challenge' : '🎯 Challenge Anti-Biais'}
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        {biases.map((bias, index) => {
          const isExpanded = expandedBias === index;
          const isDiscovered = discoveredBiases.has(index);
          
          return (
            <div key={index} className={`bg-skin-fill rounded-lg overflow-hidden transition-all duration-300 ${
              isDiscovered ? 'ring-1 ring-green-400/50' : ''
            }`}>
              <button
                onClick={() => handleBiasClick(index)}
                className="w-full p-3 flex items-center justify-between hover:bg-skin-card-muted transition-colors"
              >
                <div className="flex items-center">
                  <span className={`text-xl mr-3 transition-transform duration-300 ${
                    isExpanded ? 'scale-125' : ''
                  }`}>
                    {bias.icon}
                  </span>
                  <span className="font-medium">{bias.name}</span>
                  {isDiscovered && (
                    <span className="ml-2 text-xs bg-green-400 text-white px-1 rounded">✓</span>
                  )}
                </div>
                <span className="text-skin-base opacity-50">
                  {isExpanded ? '−' : '+'}
                </span>
              </button>
              {isExpanded && (
                <div className="px-3 pb-3 animate-slideDown">
                  <p className="text-sm mb-2">{bias.description}</p>
                  <p className="text-xs italic opacity-80 mb-2">Ex: {bias.example}</p>
                  
                  <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-xs">
                      <strong>💡 Comment le détecter :</strong> Soyez attentif à vos réactions automatiques 
                      et questionnez vos premières impressions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {discoveredBiases.size > 0 && (
        <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span>🧠</span>
            <span className="font-bold">Progression : {discoveredBiases.size}/{biases.length} biais découverts</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${(discoveredBiases.size / biases.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const EisenhowerMatrix = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<number | null>(null);
  const [tasks, setTasks] = useState<{text: string, quadrant: number, id: number}[]>([]);
  const [newTask, setNewTask] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [draggedTask, setDraggedTask] = useState<number | null>(null);
  
  const quadrants = [
    {
      title: "Urgent & Important",
      shortTitle: "Urgence",
      action: "À faire immédiatement",
      color: "bg-red-500",
      gradientColor: "from-red-400 to-red-600",
      examples: ["Crises", "Deadlines", "Problèmes urgents"],
      advice: "Max 10% de vos tâches",
      icon: "🚨"
    },
    {
      title: "Important & Non-Urgent",
      shortTitle: "Planification",
      action: "Planifier",
      color: "bg-green-500",
      gradientColor: "from-green-400 to-green-600",
      examples: ["Apprentissage", "Relations", "Prévention"],
      advice: "Votre zone de valeur",
      icon: "📈"
    },
    {
      title: "Urgent & Non-Important",
      shortTitle: "Délégation",
      action: "Déléguer",
      color: "bg-yellow-500",
      gradientColor: "from-yellow-400 to-yellow-600",
      examples: ["Interruptions", "Emails", "Réunions"],
      advice: "Minimiser ou déléguer",
      icon: "👥"
    },
    {
      title: "Non-Urgent & Non-Important",
      shortTitle: "Élimination",
      action: "Éliminer",
      color: "bg-gray-500",
      gradientColor: "from-gray-400 to-gray-600",
      examples: ["Distractions", "Activités futiles"],
      advice: "À éviter",
      icon: "🗑️"
    }
  ];

  const addTask = (quadrantIndex: number) => {
    if (newTask.trim()) {
      const newTaskObj = {
        text: newTask.trim(),
        quadrant: quadrantIndex,
        id: Date.now()
      };
      setTasks(prev => [...prev, newTaskObj]);
      setNewTask("");
      setShowTaskForm(false);
    }
  };

  const removeTask = (taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const moveTask = (taskId: number, newQuadrant: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, quadrant: newQuadrant } : task
    ));
  };

  const handleDragStart = (taskId: number) => {
    setDraggedTask(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, quadrantIndex: number) => {
    e.preventDefault();
    if (draggedTask !== null) {
      moveTask(draggedTask, quadrantIndex);
      setDraggedTask(null);
    }
  };

  const getTasksForQuadrant = (quadrantIndex: number) => {
    return tasks.filter(task => task.quadrant === quadrantIndex);
  };

  const getQuadrantStats = () => {
    const distribution = quadrants.map((_, index) => 
      getTasksForQuadrant(index).length
    );
    const total = distribution.reduce((a, b) => a + b, 0);
    
    return {
      distribution,
      total,
      percentages: distribution.map(count => total > 0 ? Math.round((count / total) * 100) : 0)
    };
  };

  const stats = getQuadrantStats();

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Matrice d'Eisenhower</h3>
        <div className="flex items-center gap-2">
          <div className="text-sm bg-skin-accent/10 px-2 py-1 rounded-full">
            📋 {stats.total} tâches
          </div>
          <button
            onClick={() => setShowTaskForm(!showTaskForm)}
            className="px-3 py-1 bg-skin-accent text-skin-inverted rounded-lg hover:bg-opacity-90 transition-all text-sm"
          >
            {showTaskForm ? '✕' : '+ Ajouter une tâche'}
          </button>
        </div>
      </div>

      {showTaskForm && (
        <div className="mb-4 p-3 bg-skin-fill rounded-lg">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Décrivez votre tâche..."
            className="w-full p-2 border rounded-lg mb-2 bg-skin-card"
            onKeyDown={(e) => e.key === 'Enter' && selectedQuadrant !== null && addTask(selectedQuadrant)}
          />
          <div className="flex gap-1">
            {quadrants.map((quadrant, index) => (
              <button
                key={index}
                onClick={() => addTask(index)}
                disabled={!newTask.trim()}
                className={`flex-1 p-2 rounded text-xs transition-all ${
                  !newTask.trim() 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-skin-accent text-skin-inverted hover:bg-opacity-90'
                }`}
              >
                {quadrant.icon} {quadrant.shortTitle}
              </button>
            ))}
          </div>
        </div>
      )}

      {stats.total > 0 && (
        <div className="mb-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
          <h4 className="font-bold mb-2 text-sm">📊 Distribution de vos tâches :</h4>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {quadrants.map((quadrant, index) => (
              <div key={index} className="text-center">
                <div className={`w-full h-1 ${quadrant.color} rounded-full mb-1`}></div>
                <div>{stats.percentages[index]}%</div>
                <div className="opacity-60">{quadrant.shortTitle}</div>
              </div>
            ))}
          </div>
          {stats.percentages[1] < 50 && (
            <p className="text-xs mt-2 text-orange-600 dark:text-orange-400">
              💡 Conseil : Augmentez les tâches "Importantes & Non-Urgentes" pour plus d'efficacité !
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        {quadrants.map((quadrant, index) => {
          const quadrantTasks = getTasksForQuadrant(index);
          const isSelected = selectedQuadrant === index;
          
          return (
            <div
              key={index}
              className={`relative min-h-[120px] p-4 rounded-lg transition-all duration-300 ${
                isSelected ? 'ring-2 ring-skin-accent shadow-lg' : ''
              } bg-skin-fill hover:bg-skin-card-muted`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <button
                onClick={() => setSelectedQuadrant(isSelected ? null : index)}
                className="w-full text-left"
              >
                <div className={`w-full h-2 ${quadrant.color} rounded-full mb-2`}></div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{quadrant.icon}</span>
                  <h4 className="font-bold text-sm">{quadrant.title}</h4>
                </div>
                <p className="text-xs opacity-80 mb-2">{quadrant.action}</p>
              </button>
              
              <div className="space-y-1">
                {quadrantTasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(task.id)}
                    className="group flex items-center justify-between p-2 bg-white/50 dark:bg-black/20 rounded text-xs cursor-move hover:shadow-sm transition-all"
                  >
                    <span className="flex-1 truncate">{task.text}</span>
                    <button
                      onClick={() => removeTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              
              {quadrantTasks.length === 0 && (
                <div className="absolute inset-4 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg opacity-50">
                  <span className="text-xs text-center">
                    Glissez des tâches ici<br/>ou cliquez pour ajouter
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {selectedQuadrant !== null && (
        <div className={`bg-gradient-to-br ${quadrants[selectedQuadrant].gradientColor} bg-opacity-10 p-4 rounded-lg transition-all duration-500`}>
          <div className="flex items-start gap-3">
            <div className="text-2xl animate-pulse">{quadrants[selectedQuadrant].icon}</div>
            <div className="flex-1">
              <h4 className="font-bold mb-2">{quadrants[selectedQuadrant].title}</h4>
              <p className="text-sm mb-2 text-skin-accent">{quadrants[selectedQuadrant].advice}</p>
              <div className="text-xs mb-3">
                <p className="font-medium mb-1">Exemples :</p>
                <div className="flex flex-wrap gap-1">
                  {quadrants[selectedQuadrant].examples.map((ex, i) => (
                    <span key={i} className="bg-skin-accent/20 px-2 py-1 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-2 bg-skin-accent/10 rounded-lg">
                <p className="text-xs">
                  <strong>💡 Stratégie :</strong>{' '}
                  {selectedQuadrant === 0 && "Traitez immédiatement mais réfléchissez à la prévention."}
                  {selectedQuadrant === 1 && "Planifiez du temps dédié. C'est votre zone de croissance !"}
                  {selectedQuadrant === 2 && "Automatisez, déléguez ou refusez poliment."}
                  {selectedQuadrant === 3 && "Éliminez ou limitez drastiquement ces activités."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const VAKogLearning = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  const [personalityTest, setPersonalityTest] = useState(false);
  const [testAnswers, setTestAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<number[]>([]);
  
  const channels = [
    {
      letter: "V",
      name: "Visuel",
      icon: "👁️",
      description: "J'apprends en voyant",
      color: "from-blue-400 to-cyan-500",
      tips: ["Utilisez des schémas", "Créez des mind maps", "Surlignez en couleur"],
      questions: [
        "Je préfère lire des instructions plutôt que les entendre",
        "Je me souviens mieux des visages que des noms",
        "J'aime organiser mes notes avec des couleurs et des diagrammes"
      ]
    },
    {
      letter: "A",
      name: "Auditif",
      icon: "👂",
      description: "J'apprends en écoutant",
      color: "from-green-400 to-emerald-500",
      tips: ["Écoutez des podcasts", "Répétez à voix haute", "Enregistrez-vous"],
      questions: [
        "Je préfère qu'on m'explique oralement plutôt que de lire",
        "Je me parle à moi-même quand je réfléchis",
        "J'apprends mieux en écoutant des cours que en lisant"
      ]
    },
    {
      letter: "K",
      name: "Kinesthésique",
      icon: "✋",
      description: "J'apprends en faisant",
      color: "from-orange-400 to-red-500",
      tips: ["Manipulez des objets", "Apprenez en marchant", "Prenez des notes à la main"],
      questions: [
        "J'ai besoin de toucher et manipuler pour comprendre",
        "Je bouge souvent quand je réfléchis ou apprends",
        "J'apprends mieux en pratiquant qu'en étudiant la théorie"
      ]
    },
    {
      letter: "O",
      name: "Olfactif",
      icon: "👃",
      description: "Les odeurs ancrent les souvenirs",
      color: "from-purple-400 to-pink-500",
      tips: ["Associez des parfums", "Étudiez dans différents lieux", "Utilisez des huiles essentielles"],
      questions: [
        "Les odeurs me rappellent facilement des souvenirs",
        "Je remarque rapidement les parfums et odeurs",
        "J'associe spontanément des odeurs à mes apprentissages"
      ]
    },
    {
      letter: "G",
      name: "Gustatif",
      icon: "👅",
      description: "Le goût renforce la mémoire",
      color: "from-yellow-400 to-orange-500",
      tips: ["Mâchez du chewing-gum", "Associez des saveurs", "Buvez la même boisson"],
      questions: [
        "Je mâche ou grignote souvent quand j'étudie",
        "Les goûts me rappellent des moments d'apprentissage",
        "J'aime boire la même boisson quand j'apprends"
      ]
    }
  ];

  const startTest = () => {
    setPersonalityTest(true);
    setCurrentQuestion(0);
    setTestAnswers([]);
    setResults([]);
  };

  const answerQuestion = (rating: number) => {
    const newAnswers = [...testAnswers, rating];
    setTestAnswers(newAnswers);
    
    if (currentQuestion < channels.length * 3 - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculer les résultats
      const channelScores = channels.map((_, channelIndex) => {
        const startIndex = channelIndex * 3;
        const channelAnswers = newAnswers.slice(startIndex, startIndex + 3);
        return channelAnswers.reduce((sum, answer) => sum + answer, 0);
      });
      setResults(channelScores);
      setPersonalityTest(false);
    }
  };

  const resetTest = () => {
    setPersonalityTest(false);
    setTestAnswers([]);
    setCurrentQuestion(0);
    setResults([]);
  };

  const getDominantChannels = () => {
    if (results.length === 0) return [];
    const maxScore = Math.max(...results);
    return results
      .map((score, index) => ({ channel: channels[index], score, index }))
      .filter(item => item.score === maxScore)
      .map(item => item.channel);
  };

  if (personalityTest) {
    const channelIndex = Math.floor(currentQuestion / 3);
    const questionIndex = currentQuestion % 3;
    const currentChannelData = channels[channelIndex];
    const question = currentChannelData.questions[questionIndex];
    
    return (
      <div className="my-8 p-6 bg-skin-card rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-skin-accent">Test de Profil VAKog</h3>
          <div className="bg-skin-accent/10 px-2 py-1 rounded-full text-xs">
            {currentQuestion + 1}/{channels.length * 3}
          </div>
        </div>
        
        <div className="mb-4 bg-skin-fill rounded-full h-2">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / (channels.length * 3)) * 100}%` }}
          ></div>
        </div>
        
        <div className={`p-6 bg-gradient-to-br ${currentChannelData.color} bg-opacity-10 rounded-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{currentChannelData.icon}</span>
            <h4 className="text-lg font-bold">{currentChannelData.name}</h4>
          </div>
          
          <div className="mb-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
            <p className="text-sm font-medium mb-2">Affirmation :</p>
            <p className="text-sm">{question}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs text-center mb-2">Dans quelle mesure cette affirmation vous correspond-elle ?</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  onClick={() => answerQuestion(rating)}
                  className="flex-1 p-3 bg-skin-fill hover:bg-skin-accent hover:text-skin-inverted rounded-lg transition-all text-center"
                >
                  <div className="font-bold">{rating}</div>
                  <div className="text-xs">
                    {rating === 1 && "Pas du tout"}
                    {rating === 2 && "Peu"}
                    {rating === 3 && "Moyennement"}
                    {rating === 4 && "Beaucoup"}
                    {rating === 5 && "Tout à fait"}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const dominantChannels = getDominantChannels();

  return (
    <div className="my-8 p-6 bg-skin-card rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-skin-accent">Le Modèle VAKog</h3>
        <div className="flex items-center gap-2">
          {results.length > 0 && (
            <div className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full text-xs">
              🎯 Profil défini
            </div>
          )}
          <button
            onClick={results.length > 0 ? resetTest : startTest}
            className="px-3 py-1 bg-skin-accent text-skin-inverted rounded-lg hover:bg-opacity-90 transition-all text-sm"
          >
            {results.length > 0 ? '🔄 Refaire le test' : '🧪 Découvrir mon profil'}
          </button>
        </div>
      </div>
      
      {results.length > 0 && (
        <div className="mb-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <span>🎯</span>
            Votre profil d'apprentissage VAKog
          </h4>
          <div className="grid grid-cols-5 gap-2 mb-3">
            {channels.map((channel, index) => (
              <div key={index} className="text-center">
                <div className="text-lg mb-1">{channel.icon}</div>
                <div className="text-xs font-bold">{channel.letter}</div>
                <div className="text-xs">{results[index]}/15</div>
                <div className={`w-full h-2 ${channel.letter === 'V' ? 'bg-blue-400' : channel.letter === 'A' ? 'bg-green-400' : channel.letter === 'K' ? 'bg-orange-400' : channel.letter === 'O' ? 'bg-purple-400' : 'bg-yellow-400'} rounded-full mt-1 opacity-${Math.round((results[index] / 15) * 100)}`}></div>
              </div>
            ))}
          </div>
          <div className="text-sm">
            <strong>Canaux dominants :</strong>{' '}
            {dominantChannels.length > 0 
              ? dominantChannels.map(ch => ch.name).join(', ')
              : 'Profil équilibré'
            }
          </div>
        </div>
      )}
      
      <div className="flex justify-around mb-4">
        {channels.map((channel, index) => {
          const isActive = activeChannel === index;
          const score = results[index] || 0;
          const isDominant = dominantChannels.some(ch => ch.letter === channel.letter);
          
          return (
            <button
              key={index}
              onClick={() => setActiveChannel(index)}
              className={`group relative p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isActive 
                  ? 'bg-skin-accent text-skin-inverted shadow-lg' 
                  : 'bg-skin-fill hover:bg-skin-card-muted'
              } ${isDominant ? 'ring-2 ring-yellow-400/50' : ''}`}
            >
              {isDominant && (
                <div className="absolute -top-1 -right-1 text-yellow-400 text-sm">⭐</div>
              )}
              
              <div className={`text-2xl mb-1 transition-transform duration-300 ${
                isActive ? 'animate-bounce' : 'group-hover:scale-110'
              }`}>
                {channel.icon}
              </div>
              <div className="text-xs font-bold">{channel.letter}</div>
              
              {score > 0 && (
                <div className="text-xs mt-1 opacity-80">{score}/15</div>
              )}
              
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-20 rounded-lg`}></div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className={`bg-gradient-to-br ${channels[activeChannel].color} bg-opacity-10 p-4 rounded-lg transition-all duration-500`}>
        <div className="flex items-start gap-3">
          <div className="text-2xl animate-pulse">{channels[activeChannel].icon}</div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">{channels[activeChannel].name}</h4>
            <p className="text-sm mb-3 italic">{channels[activeChannel].description}</p>
            <div className="text-sm mb-3">
              <p className="font-medium mb-1">💡 Conseils d'optimisation :</p>
              <div className="flex flex-wrap gap-1">
                {channels[activeChannel].tips.map((tip, i) => (
                  <span key={i} className="text-xs bg-skin-accent/20 px-2 py-1 rounded-full">
                    {tip}
                  </span>
                ))}
              </div>
            </div>
            
            {results[activeChannel] > 0 && (
              <div className="p-2 bg-skin-accent/10 rounded-lg">
                <p className="text-xs">
                  <strong>Votre affinité :</strong> {results[activeChannel]}/15 points
                  {results[activeChannel] >= 12 && " - Très forte !"}
                  {results[activeChannel] >= 9 && results[activeChannel] < 12 && " - Forte"}
                  {results[activeChannel] >= 6 && results[activeChannel] < 9 && " - Modérée"}
                  {results[activeChannel] < 6 && " - Faible"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};