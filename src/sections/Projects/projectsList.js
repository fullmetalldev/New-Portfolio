import Discord from './images/discord-electron.png';
import EdguBilig from './images/edgubilig.png';
import Qomek from './images/qomek.png';
import AiChat from './images/ai-chat.png';
import Qoomus from './images/qoomus.png';
import Soulify from './images/soulify.png';

export const projectsList = [
  {
    title: "Edgu Bilig",
    description:
      "Edgubilig is an online magazine focused on Central and Inner Asian cultures, offering content on arts, history, and innovation.",
    tech: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "BaseHub",
      "Google Adsense",
    ],
    link: "https://edgubilig.org",
    img: EdguBilig,
  },
  {
    title: "Qomek net",
    description:
      "A website for ordering home lab tests, online consultations with doctors, and booking appointments at medical laboratories from home.",
    tech: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Recoil",
      "MUI (Material UI)",
      "Vercel",
      "Git",
    ],
    link: "https://qomek.net",
    img: Qomek,
  },
  {
    title: "Soulify.chat",
    description:
      "A Fullstack application that can revive old chats and make them alive with AI",
    tech: [
      "React",
      "TypeScript",
      "ElevenLabs",
      "OpenAI",
      "Voice Recognition",
      "Zustand",
      "Weaviate",
      "Large AI Memory",
    ],
    link: "https://www.soulify.chat/",
    img: Soulify,
  },
  {
    title: "Qoomus.org",
    description:
      "Pet project and marketplace website in the USA for immigrants from Central Asia.",
    tech: ["React", "JavaScript", "Firebase", "NodeJS"],
    link: "https://qoomus.vercel.app",
    img: Qoomus,
  },
  {
    title: "AI-Chat Web-Application",
    description:
      "Pet Web-Fullstack application with realtime chat (websockets) and AI integration (OpenAI)",
    tech: ["WebSocket", "OpenAI", "NodeJS", "MongoDB"],
    link: "https://ai-chat-front-seven.vercel.app",
    img: AiChat,
  },
  {
    title: "Mini-Discord Desktop Clone",
    description:
      "Simple mini-clone desktop app of Discord, built as part of a test assignment for Fntastic. The main focus is on manual UI, animations (keyframes) and interactive interface.",
    tech: ["Electron.JS", "React", "Desktop", "JavaScript"],
    link: "https://github.com/fullmetalldev/Electron-Discord",
    img: Discord,
  },
];
