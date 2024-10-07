import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signUp";

const App = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <SignInPage />
	  <SignUpPage />
    </div>
  );
};

export default App;