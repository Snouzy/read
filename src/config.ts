export const SITE = {
  website: "https://read.snouzy.com/", // replace this with your deployed domain
  author: "m6b9",
  profile: "https://read.snouzy.com/",
  desc: "Un blog de lecture.",
  title: "m6b9.read",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggérer des modifications",
    url: "https://github.com/Snouzy/read/edit/main/",
  },
  dynamicOgImage: true,
  lang: "fr", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Paris",
} as const;

// Configuration du livre en cours de lecture
export const CURRENT_READING = {
  enabled: true, // Pour pouvoir désactiver facilement
  title: "Mohamed Boclet - Connaissance Illimitée",
  currentPage: 70,
  totalPages: 272,
} as const;
