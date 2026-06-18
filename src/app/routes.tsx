import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CaseStudy } from "./pages/CaseStudy";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work/realio", Component: () => <CaseStudy projectId="realio" /> },
      { path: "work/unifyre", Component: () => <CaseStudy projectId="unifyre" /> },
      { path: "work/trst", Component: () => <CaseStudy projectId="trst" /> },
      { path: "work/cartesi", Component: () => <CaseStudy projectId="cartesi" /> },
      { path: "work/ping", Component: () => <CaseStudy projectId="ping" /> },
      { path: "work/opslock", Component: () => <CaseStudy projectId="opslock" /> },
      { path: "work/circuito-mangabeira", Component: () => <CaseStudy projectId="circuito-mangabeira" /> },
      { path: "work/emurgo", Component: () => <CaseStudy projectId="emurgo" /> },
      { path: "*", Component: NotFound },
    ],
  },
]);
