import { Button } from "./components/ui/button";
import SigninForm from "./components/signin-form";
import SignupForm from "./components/signup-form";
function App() {
	return (
		<>
			<div className="bg-red-500 text-white text-bold underline">
				Hello world
			</div>
			<Button>Hello there! Click me</Button>
			<SigninForm/>
		</>
	);
}
export default App;
