import { createFileRoute } from "@tanstack/react-router";
import SignupFormComponent from "@/components/signup-form-component";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupFormComponent />;
}
