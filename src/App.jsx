import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navigation from "./rootNavigation/Navigation";
import { FormDataProvider } from "./util/ContectApi";


function App() {
  return (
    <>
    <FormDataProvider>
    <ToastContainer position="top-right" autoClose={3000} />
    <Navigation />

    </FormDataProvider>

    </>
  );
}

export default App;
