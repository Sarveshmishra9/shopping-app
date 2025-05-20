import { createFileRoute } from "@tanstack/react-router";
import { DummyContent } from "@/components/dummy-content";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DummyContent></DummyContent>;
}
