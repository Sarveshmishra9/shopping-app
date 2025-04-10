import { Outlet } from "react-router";
export default function AuthPage() {
	return (
		<div className="grid grid-cols-2 h-screen w-screen">
			<div className="flex items-center justify-center">
				<h1>Add some cool animated slideshow</h1>
			</div>
			<div className="flex items-center justify-center">
				<Outlet></Outlet>
			</div>
		</div>
	);
}
