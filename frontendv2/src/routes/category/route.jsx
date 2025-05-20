import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { SidebarComponent } from "@/components/side-bar-component";

export const Route = createFileRoute("/category")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SidebarComponent />
    </div>
  );
}
