import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="grid-cols-2 gap-4 p-8 md:grid w-full">
        <div className="left-half flex items-center justify-center">
          <div>some cool slideshow</div>
        </div>
        <div className="right-half">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
