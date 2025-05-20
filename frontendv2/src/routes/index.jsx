import { createFileRoute } from "@tanstack/react-router";
import { DummyContent } from "@/components/dummy-content";
import { HomePage } from "@/components/home-page.jsx";


export const Route = createFileRoute("/")({
  path : "/",
  component: HomePage,
});

// function RouteComponent() {
//   return HomePage();
// }
