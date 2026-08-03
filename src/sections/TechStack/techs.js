import ElectronIcon from "./techIcons/electron.jsx";
import FirebaseIcon from "./techIcons/firebase.jsx";
import GoogleCloudIcon from "./techIcons/googlecloud.jsx";
import GraphqlIcon from "./techIcons/graphql.jsx";
import Html5Icon from "./techIcons/html5.jsx";
import JavaScriptIcon from "./techIcons/javascript.jsx";
import MongodbIcon from "./techIcons/mongodb.jsx";
import MuiIcon from "./techIcons/mui.jsx";
import NextjsIcon from "./techIcons/nextdotjs.jsx";
import NodejsIcon from "./techIcons/nodedotjs.jsx";
import PostgresqlIcon from "./techIcons/postgresql.jsx";
import ReactIcon from "./techIcons/react.jsx";
import RecoilIcon from "./techIcons/recoil.jsx";
import ReduxIcon from "./techIcons/redux.jsx";
import SassIcon from "./techIcons/sass.jsx";
import TailwindIcon from "./techIcons/tailwindcss.jsx";
import TypeScriptIcon from "./techIcons/typescript.jsx";
import VercelIcon from "./techIcons/vercel.jsx";
import ZustandIcon from "./techIcons/zustand.jsx";

const Technologies = [
  {
    category: "Frontend Core",
    list: [
      { name: "React.js", icon: ReactIcon },
      { name: "Electron.js", icon: ElectronIcon },
      { name: "Material UI", icon: MuiIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Sass/SCSS", icon: SassIcon },
      { name: "HTML5", icon: Html5Icon },
    ],
  },
  {
    category: "State & API",
    list: [
      { name: "Redux", icon: ReduxIcon },
      { name: "Zustand", icon: ZustandIcon },
      { name: "Recoil", icon: RecoilIcon },
      { name: "REST APIs", icon: null },
      { name: "GraphQL", icon: GraphqlIcon },
    ],
  },
  {
    category: "Backend",
    list: [
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "MongoDB", icon: MongodbIcon },
      { name: "PostgreSQL", icon: PostgresqlIcon },
    ],
  },
  {
    category: "Cloud & Ops",
    list: [
      { name: "Vercel", icon: VercelIcon },
      { name: "Google Cloud", icon: GoogleCloudIcon },
      { name: "Agile", icon: null },
      { name: "Scrum", icon: null },
      { name: "AWS", icon: null },
    ],
  },
];

export default Technologies;
