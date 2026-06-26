import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CaseStudy } from "./pages/CaseStudy";
import { NotFound } from "./pages/NotFound";

const caseIds = [
  "realio",
  "espremedor-de-papel",
  "unifyre",
  "trst",
  "cartesi",
  "ping",
  "opslock",
  "circuito-mangabeira",
  "emurgo",
  "startup-kit",
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      ...caseIds.map((id) => ({
        path: `work/${id}`,
        Component: () => <CaseStudy projectId={id} />,
      })),
      {
        path: "br",
        children: [
          { index: true, Component: Home },
          { path: "sobre", Component: About },
          ...caseIds.map((id) => ({
            path: `work/${id}`,
            Component: () => <CaseStudy projectId={id} />,
          })),
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
