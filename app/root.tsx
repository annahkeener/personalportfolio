import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Outlet,
} from "@remix-run/react";

import jokesStyle from "./styles/jokes.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: jokesStyle
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}