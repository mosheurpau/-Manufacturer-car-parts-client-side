import { Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is Header</h2>
      <Routes></Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
