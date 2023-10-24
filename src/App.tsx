
import Navbar from "./components/navbar";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <>
      <div className="flex w-screen h-screen bg-white justify-center items-center flex-col">
        <SignUp />
        <Navbar/>
        
      </div>
    </>
  );
}

export default App;
