import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import IndexEN from "./pages/Index-EN";
import Skills from "./pages/Skills";
import SkillsEN from "./pages/Skills-EN";
import Experiences from "./pages/Experiences";
import ExperiencesEN from "./pages/Experiences-EN";
import Trainings from "./pages/Trainings";
import TrainingsEN from "./pages/Trainings-EN";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Index /> },
      { path: "en", element: <IndexEN /> },
      { path: "skills", element: <Skills /> },
      { path: "en/skills", element: <SkillsEN /> },
      { path: "experiences", element: <Experiences /> },
      { path: "en/experiences", element: <ExperiencesEN /> },
      { path: "trainings", element: <Trainings /> },
      { path: "en/trainings", element: <TrainingsEN /> },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", element: <NotFound /> },
    ],
  },
];
