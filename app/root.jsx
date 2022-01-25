import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "remix";
import styles from "./styles/app.css";
import Nprogress from "nprogress";
import nprogressStyles from "../styles/nprogress.css";

export function meta() {
  return { title: "New Remix App" };
}

export function links() {
  return [
    { rel: "stylesheet", href: nprogressStyles },
    { rel: "stylesheet", href: styles },
  ];
}

export default function App() {
  const transition = useTransition();
  useEffect(() => {
    if (transition.state === "loading" || transition.state === "submitting") {
      Nprogress.start();
    } else {
      Nprogress.done();
    }
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
