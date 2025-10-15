import ICONS from "../assets/Icons";

const projectData = [
  {
    name: "Flock",
    date: "01/2025",
    desc: "Provides travelers with alternative options in the event of a delay or cancellation, working in tandem with American Airlines API mock data. Offers a comprehensive solution for itinerary planning using OpenAI's 4o-mini model, hotel vouchers with Google Places API, and rental services with Turo. Built custom AWS RDS PostgreSQL database and schema for holding user flights.",
    win: "Won 2nd Place Overall @ TAMUHack 2025.",
    img: "/projects/flock.png",
    stack: [ICONS.NextJS, ICONS.AWS, ICONS.Postgres],
    links: {
      github: "https://github.com/peterphann/tamuhack25",
      web: "https://flockingawesome.tech/",
    },
  },
  {
    name: "Nexus",
    date: "12/2024",
    desc: "An intuitive, interactive network visualization tool for users at all experience levels. For students preparing for system design interviews, senior engineers developing architectures for companies and startups, and everything in between. Developed using Databricks Mosaic AI models and LangChain to chain multiple prompts together into correct JSON.",
    win: "Won Best Use of Databricks @ TAMU Datathon.",
    img: "/projects/nexus.png",
    stack: [ICONS.Mongo, ICONS.NextJS, ICONS.Databricks],
    links: {
      github: "https://github.com/ericliu-12/datathon24",
      web: "https://devpost.com/software/nexus-ez7cnh",
    },
  },
  {
    name: "Arcadia",
    date: "11/2024",
    desc: "Bringing retro arcade games to life with computer vision. Comes with five 3D model characters, Just Dance (with scoring system), and Word Hunt. MediaPipe was used for hand and body tracking, Three.js for displaying and augmenting models, & kalidokit for interfacing between the two. NextAuth.js was used to validate user Google accounts and save user data.",
    img: "/projects/arcadia.png",
    stack: [ICONS.NextJS, ICONS.Threejs, ICONS.Opencv],
    links: {
      github: "https://github.com/ashlxyzhang/arcadia",
      web: "https://www.arcadium.tech/",
    },
  },
  {
    name: "Curious Collections",
    date: "03/2024",
    desc: "Automated and concise system for keeping track of album inventory made for a local small business, Curious Collections. Features a Notion database/querying, recommendation algorithm for albums, and a song tune recognizer. Utilized Spotify API for music data, Kaggle dataset for albums, and Tensorflow for recommendation algo.",
    win: "Won Best Small Business Hack @ TAMU Datathon.",
    img: "/projects/collections.png",
    stack: [ICONS.Notion, ICONS.Spotify, ICONS.Tailwind],
    links: {
      github: "https://github.com/ashlxyzhang/build4good",
      web: "https://collections.ashs.world/",
    },
  },
  {
    name: "Whimsiway",
    date: "02/2024",
    desc: "Offers insights into past car accidents in Texas, enabling users to identify the top 5 most accident-prone areas in a city. Also includes a route planner with accurate Mapbox GL interactivate map to help users avoid accident hotspots. Incorporated DBSCAN clustering algorithm to find accident hotspots from Texas accidents Kaggle dataset.",
    img: "/projects/whimsiway.png",
    stack: [ICONS.Flask, ICONS.React, ICONS.NodeJS],
    links: {
      github: "https://github.com/ericliu-12/WhimsiWay",
      web: "https://whimsiway.ashs.world/",
    },
  },
  {
    name: "Fintelligent",
    date: "01/2024",
    desc: "Financial service integrated with Plaid API to help users track spending and promote financial education. Offers breakdown of net worth by assets and liabilities and by specific accounts like cash, investments, credit, and loans. React.js was used for the front end of the website and Express.js as the back end. Used Plaid Link API feature to get an access token for the Plaid sandbox.",
    win: "Won PIMCO honorable mention @ TAMUHack 2024.",
    img: "/projects/fintelligent.png",
    stack: [ICONS.React, ICONS.Typescript, ICONS.Plaid],
    links: {
      github: "https://github.com/ashlxyzhang/Fintelligent",
      web: "https://fintelligent.ashs.world/",
    },
  },
];

export default projectData;
