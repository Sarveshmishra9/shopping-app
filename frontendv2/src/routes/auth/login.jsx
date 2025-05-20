import { createFileRoute } from "@tanstack/react-router";
import SigninFormComponent from "@/components/signin-form-component";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SigninFormComponent />
    </div>
  );
}
