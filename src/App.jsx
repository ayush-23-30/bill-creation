import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./root_navigation/navigation";

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Navigation />
    </>
  );
}

export default App;
